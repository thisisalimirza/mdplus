export const EVENT_TIME_ZONE = "America/New_York";

type EventTiming = {
  startDate: string | null;
  endDate?: string | null;
};

export function isEventPast(event: EventTiming, now = Date.now()) {
  const boundary = event.endDate ?? event.startDate;
  if (!boundary) return false;

  const boundaryTime = new Date(boundary).getTime();
  return Number.isFinite(boundaryTime) && boundaryTime < now;
}

export function formatEventDate(
  iso: string,
  includeTime = false,
) {
  return new Intl.DateTimeFormat("en-US", {
    weekday: includeTime ? "long" : "short",
    month: "long",
    day: "numeric",
    year: "numeric",
    ...(includeTime
      ? {
          hour: "numeric",
          minute: "2-digit",
          timeZoneName: "short",
        }
      : {}),
    timeZone: EVENT_TIME_ZONE,
  }).format(new Date(iso));
}
