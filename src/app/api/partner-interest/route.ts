import {
  BUDGET_RANGES,
  EVENTS,
  HEARD_ABOUT,
  INTEREST_TYPES,
  TIMELINES,
  createMemoryLimiter,
  isBot,
  validatePartnerInterest,
} from "@/lib/partner-interest";

// 5 submissions a minute per IP (best effort, per serverless instance).
const memoryLimiter = createMemoryLimiter(5, 60_000);

async function allowRequest(ip: string): Promise<boolean> {
  return memoryLimiter(ip);
}

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xeaebaja";

const UNAVAILABLE =
  "The form is temporarily unavailable. Please email partnerships@mdplus.community instead.";

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    "unknown";

  if (!(await allowRequest(ip))) {
    return Response.json(
      { error: "Too many submissions. Please wait a minute and try again." },
      { status: 429 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  // Pretend it worked so bots don't learn anything.
  if (isBot(body)) return Response.json({ success: true });

  const result = validatePartnerInterest(body);
  if (!result.ok) {
    return Response.json(
      { error: "Please check the highlighted fields.", fields: result.errors },
      { status: 400 },
    );
  }

  const d = result.data;
  const eventLabels = labels(EVENTS, d.events);
  const payload = {
    _subject: `Partner inquiry: ${d.organization}${eventLabels ? ` (${eventLabels})` : ""}`,
    _replyto: d.email,
    "Name": d.name,
    "Email": d.email,
    "Company / organization": d.organization,
    "Role / title": d.role,
    "Website": d.website ?? "",
    "Phone": d.phone ?? "",
    "Interested in": labels(INTEREST_TYPES, d.interestTypes),
    "Events / programs": eventLabels,
    "Budget range": labels(BUDGET_RANGES, d.budget ? [d.budget] : []),
    "Timeline": labels(TIMELINES, d.timeline ? [d.timeline] : []),
    "Heard about MDplus via": labels(HEARD_ABOUT, d.heardAbout ? [d.heardAbout] : []),
    "Message": d.message,
  };

  try {
    const res = await fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      headers: { Accept: "application/json", "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (res.ok) return Response.json({ success: true });
    console.error("Partner interest form: Formspree rejected the submission.", { status: res.status });
  } catch (error) {
    console.error("Partner interest form: Formspree request failed.", {
      message: error instanceof Error ? error.message : "Unknown error",
    });
  }
  return Response.json({ error: UNAVAILABLE }, { status: 502 });
}

function labels(options: readonly { value: string; label: string }[], values: readonly string[] | undefined): string {
  return (values ?? []).map((v) => options.find((o) => o.value === v)?.label ?? v).join(", ");
}
