import { createHash } from "node:crypto";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const SERVER_PREFIX_PATTERN = /^[a-z]{2}\d+$/;

type MailchimpError = {
  title?: string;
  detail?: string;
};

function getMailchimpConfig() {
  const apiKey = process.env.MAILCHIMP_API_KEY;
  const audienceId = process.env.MAILCHIMP_AUDIENCE_ID;
  const serverPrefix = apiKey?.split("-").at(-1);

  if (
    !apiKey ||
    !audienceId ||
    !serverPrefix ||
    !SERVER_PREFIX_PATTERN.test(serverPrefix)
  ) {
    return null;
  }

  return { apiKey, audienceId, serverPrefix };
}

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const email =
    typeof body === "object" &&
    body !== null &&
    "email" in body &&
    typeof body.email === "string"
      ? body.email.trim().toLowerCase()
      : "";

  if (!EMAIL_PATTERN.test(email)) {
    return Response.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  const config = getMailchimpConfig();

  if (!config) {
    console.error("Mailchimp newsletter configuration is incomplete.");
    return Response.json(
      { error: "Newsletter signup is temporarily unavailable." },
      { status: 503 },
    );
  }

  try {
    const subscriberHash = createHash("md5").update(email).digest("hex");
    const response = await fetch(
      `https://${config.serverPrefix}.api.mailchimp.com/3.0/lists/${config.audienceId}/members/${subscriberHash}`,
      {
        method: "PUT",
        headers: {
          Authorization: `Basic ${btoa(`mdplus:${config.apiKey}`)}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email_address: email,
          status_if_new: "subscribed",
          status: "subscribed",
        }),
      },
    );

    if (response.ok) {
      return Response.json({ success: true });
    }

    const error = (await response.json().catch(() => ({}))) as MailchimpError;

    console.error("Mailchimp newsletter signup failed.", {
      status: response.status,
      title: error.title,
    });

    return Response.json(
      {
        error:
          response.status === 400
            ? "Please enter a valid email address."
            : "Newsletter signup is temporarily unavailable.",
      },
      { status: response.status === 400 ? 400 : 502 },
    );
  } catch (error) {
    console.error("Mailchimp newsletter request failed.", {
      message: error instanceof Error ? error.message : "Unknown error",
    });
    return Response.json(
      { error: "Newsletter signup is temporarily unavailable." },
      { status: 502 },
    );
  }
}
