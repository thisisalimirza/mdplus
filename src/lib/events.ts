/** Default timezone for MDplus events (Central Time). */
export const DEFAULT_EVENT_TIMEZONE = "America/Chicago";

export const EVENT_TIMEZONE_OPTIONS = [
  { title: "Eastern Time (ET)", value: "America/New_York" },
  { title: "Central Time (CT)", value: "America/Chicago" },
  { title: "Mountain Time (MT)", value: "America/Denver" },
  { title: "Pacific Time (PT)", value: "America/Los_Angeles" },
  { title: "Alaska Time (AKT)", value: "America/Anchorage" },
  { title: "Hawaii Time (HT)", value: "Pacific/Honolulu" },
  { title: "UTC", value: "UTC" },
] as const;

const VALID_TIMEZONES = new Set<string>(
  EVENT_TIMEZONE_OPTIONS.map((z) => z.value),
);

export function getEventTimezone(timezone?: string | null): string {
  if (timezone && VALID_TIMEZONES.has(timezone)) return timezone;
  // Allow other valid IANA zones if present in content
  if (timezone) {
    try {
      Intl.DateTimeFormat("en-US", { timeZone: timezone });
      return timezone;
    } catch {
      // fall through
    }
  }
  return DEFAULT_EVENT_TIMEZONE;
}

export type EventTiming = {
  startDate?: string | null;
  endDate?: string | null;
};

/** An event is past once its end (or start, if no end) has elapsed. */
export function isEventPast(event: EventTiming, now: Date = new Date()): boolean {
  const boundary = event.endDate || event.startDate;
  if (!boundary) return false;
  return new Date(boundary).getTime() < now.getTime();
}

type FormatEventDateOptions = {
  includeTime?: boolean;
  timeZone?: string | null;
  /** Shorter weekday (e.g. "Thu" vs "Thursday") */
  short?: boolean;
};

export function formatEventDate(
  iso: string,
  options: FormatEventDateOptions = {},
): string {
  const timeZone = getEventTimezone(options.timeZone);
  const { includeTime = false, short = false } = options;

  return new Date(iso).toLocaleString("en-US", {
    weekday: short ? "short" : "long",
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone,
    ...(includeTime
      ? {
          hour: "numeric" as const,
          minute: "2-digit" as const,
          timeZoneName: "short" as const,
        }
      : {}),
  });
}

/** Compact date for cards / archive (still timezone-aware so the day doesn't shift). */
export function formatEventDateShort(
  iso: string,
  timeZone?: string | null,
): string {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: getEventTimezone(timeZone),
  });
}
