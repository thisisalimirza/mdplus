/**
 * The year-round partner and sponsor interest form: its options, and the
 * validation shared by the page and POST /api/partner-interest.
 * Submissions are stored as `partnerInquiry` documents in Sanity, so the
 * exec team sees one running list in the Studio (/studio).
 */

export const INTEREST_TYPES = [
  { value: "sponsorship", label: "Sponsorship" },
  { value: "partnership", label: "Partnership" },
  { value: "speaker-judge-mentor", label: "Speaker / Judge / Mentor" },
  { value: "recruiting", label: "Recruiting" },
  { value: "in-kind", label: "In-kind" },
  { value: "other", label: "Other" },
] as const;

export const EVENTS = [
  { value: "catalyst", label: "Catalyst" },
  { value: "datathon", label: "Datathon" },
  { value: "femtech", label: "FemTech" },
  { value: "journal-club", label: "Journal Club" },
  { value: "general", label: "General / Year-round" },
  { value: "other", label: "Other" },
] as const;

export const BUDGET_RANGES = [
  { value: "under-1k", label: "Under $1,000" },
  { value: "1k-5k", label: "$1,000 – $5,000" },
  { value: "5k-10k", label: "$5,000 – $10,000" },
  { value: "10k-25k", label: "$10,000 – $25,000" },
  { value: "25k-plus", label: "$25,000+" },
  { value: "in-kind", label: "In-kind only" },
  { value: "unsure", label: "Not sure yet" },
] as const;

export const TIMELINES = [
  { value: "asap", label: "As soon as possible" },
  { value: "this-quarter", label: "This quarter" },
  { value: "next-6-months", label: "In the next 6 months" },
  { value: "next-year", label: "Next year" },
  { value: "exploring", label: "Just exploring" },
] as const;

export const HEARD_ABOUT = [
  { value: "member", label: "An MDplus member or team member" },
  { value: "event", label: "An MDplus event" },
  { value: "linkedin", label: "LinkedIn" },
  { value: "newsletter", label: "The newsletter" },
  { value: "search", label: "Search" },
  { value: "other-partner", label: "Another partner or sponsor" },
  { value: "other", label: "Other" },
] as const;

/** Name of the hidden field bots fill in. Real visitors never see it. */
export const HONEYPOT_FIELD = "fax";

type Option = { readonly value: string; readonly label: string };
const values = (opts: readonly Option[]) => new Set(opts.map((o) => o.value));

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export type PartnerInterest = {
  name: string;
  email: string;
  organization: string;
  role: string;
  website?: string;
  phone?: string;
  interestTypes: string[];
  events: string[];
  budget?: string;
  timeline?: string;
  message: string;
  heardAbout?: string;
};

export type ValidationResult =
  | { ok: true; data: PartnerInterest }
  | { ok: false; errors: Record<string, string> };

function str(body: Record<string, unknown>, key: string, max: number): string {
  const v = body[key];
  return typeof v === "string" ? v.trim().slice(0, max) : "";
}

function list(body: Record<string, unknown>, key: string, allowed: Set<string>): string[] {
  const v = body[key];
  if (!Array.isArray(v)) return [];
  return [...new Set(v.filter((x): x is string => typeof x === "string" && allowed.has(x)))];
}

function pick(body: Record<string, unknown>, key: string, allowed: Set<string>): string | undefined {
  const v = str(body, key, 64);
  return allowed.has(v) ? v : undefined;
}

/** Validates and normalizes a submission. Unknown option values are dropped. */
export function validatePartnerInterest(input: unknown): ValidationResult {
  const body = (typeof input === "object" && input !== null ? input : {}) as Record<string, unknown>;
  const errors: Record<string, string> = {};

  const data: PartnerInterest = {
    name: str(body, "name", 120),
    email: str(body, "email", 200).toLowerCase(),
    organization: str(body, "organization", 160),
    role: str(body, "role", 120),
    website: str(body, "website", 300) || undefined,
    phone: str(body, "phone", 40) || undefined,
    interestTypes: list(body, "interestTypes", values(INTEREST_TYPES)),
    events: list(body, "events", values(EVENTS)),
    budget: pick(body, "budget", values(BUDGET_RANGES)),
    timeline: pick(body, "timeline", values(TIMELINES)),
    message: str(body, "message", 4000),
    heardAbout: pick(body, "heardAbout", values(HEARD_ABOUT)),
  };

  if (!data.name) errors.name = "Please enter your name.";
  if (!EMAIL_PATTERN.test(data.email)) errors.email = "Please enter a valid email address.";
  if (!data.organization) errors.organization = "Please enter your company or organization.";
  if (!data.role) errors.role = "Please enter your role or title.";
  if (data.interestTypes.length === 0) errors.interestTypes = "Pick at least one way you'd like to work with us.";
  if (data.events.length === 0) errors.events = "Pick at least one event, or General / Year-round.";
  if (!data.message) errors.message = "Tell us a little about what you have in mind.";
  if (data.website && !/^https?:\/\//i.test(data.website)) data.website = `https://${data.website}`;

  return Object.keys(errors).length ? { ok: false, errors } : { ok: true, data };
}

/** True when the hidden honeypot field was filled in, which only bots do. */
export function isBot(input: unknown): boolean {
  if (typeof input !== "object" || input === null) return false;
  const v = (input as Record<string, unknown>)[HONEYPOT_FIELD];
  return typeof v === "string" && v.trim() !== "";
}

/**
 * A small fixed-window limiter kept in memory. It's a fallback for local
 * runs; on Cloudflare the Workers rate-limit binding does the real work,
 * because each isolate has its own memory.
 */
export function createMemoryLimiter(limit: number, windowMs: number) {
  const hits = new Map<string, { count: number; resetAt: number }>();
  return (key: string, now = Date.now()): boolean => {
    const entry = hits.get(key);
    if (!entry || entry.resetAt <= now) {
      hits.set(key, { count: 1, resetAt: now + windowMs });
      if (hits.size > 5000) hits.clear();
      return true;
    }
    entry.count += 1;
    return entry.count <= limit;
  };
}
