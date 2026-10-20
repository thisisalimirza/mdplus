import {
  createMemoryLimiter,
  isBot,
  validatePartnerInterest,
} from "@/lib/partner-interest";

// 5 submissions a minute per IP (best effort, per serverless instance).
const memoryLimiter = createMemoryLimiter(5, 60_000);

async function allowRequest(ip: string): Promise<boolean> {
  return memoryLimiter(ip);
}

function getSanityWriteConfig() {
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
  const token = process.env.SANITY_API_WRITE_TOKEN;
  if (!projectId || !token) return null;
  return { projectId, dataset, token };
}

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

  const config = getSanityWriteConfig();
  if (!config) {
    console.error("Partner interest form: Sanity write configuration is incomplete.");
    return Response.json({ error: UNAVAILABLE }, { status: 503 });
  }

  try {
    const res = await fetch(
      `https://${config.projectId}.api.sanity.io/v2024-01-01/data/mutate/${config.dataset}?returnIds=true`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${config.token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          mutations: [
            {
              create: {
                _type: "partnerInquiry",
                ...result.data,
                status: "new",
                submittedAt: new Date().toISOString(),
              },
            },
          ],
        }),
      },
    );

    if (res.ok) return Response.json({ success: true });

    console.error("Partner interest form: Sanity write failed.", { status: res.status });
  } catch (error) {
    console.error("Partner interest form: Sanity request failed.", {
      message: error instanceof Error ? error.message : "Unknown error",
    });
  }
  return Response.json({ error: UNAVAILABLE }, { status: 502 });
}
