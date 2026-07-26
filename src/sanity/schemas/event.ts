import { defineField, defineType } from "sanity";
import {
  DEFAULT_EVENT_TIMEZONE,
  EVENT_TIMEZONE_OPTIONS,
  formatEventDateShort,
  getEventTimezone,
} from "@/lib/events";

export const eventSchema = defineType({
  name: "event",
  title: "Event",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Event Title",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "eventType",
      title: "Event Type",
      type: "string",
      options: {
        list: [
          { title: "In-person", value: "in-person" },
          { title: "Virtual", value: "virtual" },
          { title: "Hybrid", value: "hybrid" },
        ],
      },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "status",
      title: "Status (legacy)",
      type: "string",
      description:
        "No longer used. Upcoming vs past is calculated automatically from the event end date (or start date if no end is set).",
      options: {
        list: [
          { title: "Upcoming", value: "upcoming" },
          { title: "Past", value: "past" },
        ],
      },
      hidden: true,
    }),
    defineField({
      name: "timezone",
      title: "Event timezone",
      type: "string",
      description:
        "Which timezone the event is advertised in (shown on the website). Defaults to Central Time. Match this with the timezone control on the date fields below before entering times.",
      options: {
        list: [...EVENT_TIMEZONE_OPTIONS],
        layout: "dropdown",
      },
      initialValue: DEFAULT_EVENT_TIMEZONE,
      validation: (r) => r.required(),
    }),
    defineField({
      name: "startDate",
      title: "Date & Time",
      type: "datetime",
      description:
        "Enter the wall-clock time as attendees should see it (e.g. 7:00 PM for a 7 PM CT event). Click the timezone label under this field and select the same zone as “Event timezone” above — do not convert to another zone yourself.",
      options: {
        dateFormat: "MMM D, YYYY",
        timeFormat: "h:mm a",
        timeStep: 15,
        displayTimeZone: DEFAULT_EVENT_TIMEZONE,
        allowTimeZoneSwitch: true,
      },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "endDate",
      title: "End Date & Time",
      type: "datetime",
      description:
        "Optional. When set, the event moves to Past automatically after this time (no manual status change needed).",
      options: {
        dateFormat: "MMM D, YYYY",
        timeFormat: "h:mm a",
        timeStep: 15,
        displayTimeZone: DEFAULT_EVENT_TIMEZONE,
        allowTimeZoneSwitch: true,
      },
    }),
    defineField({
      name: "location",
      title: "Location",
      description: "City, venue name, or 'Virtual' for online events",
      type: "string",
    }),
    defineField({
      name: "coverImage",
      title: "Event Poster",
      type: "image",
      description:
        "Upload the full poster (square or rectangle). The site shows the entire image — there is no circular crop. On the event page, visitors can open a full-size view.",
      // Hotspot disabled: Sanity’s circular focal-point UI is a poor fit for
      // rectangular event posters and made preview crops diverge from the site.
      options: { hotspot: false },
      fields: [
        defineField({ name: "alt", type: "string", title: "Alt text" }),
      ],
    }),
    defineField({
      name: "summary",
      title: "Summary",
      description: "1–2 sentences shown on the events listing page",
      type: "text",
      rows: 3,
      validation: (r) => r.max(300),
    }),
    defineField({
      name: "registrationUrl",
      title: "Registration URL",
      description: "Link to RSVP or register (for upcoming events)",
      type: "url",
    }),
    defineField({
      name: "body",
      title: "Event Details / Recap",
      description: "Full description for upcoming events, or a recap post for past ones",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "H2", value: "h2" },
            { title: "H3", value: "h3" },
            { title: "Quote", value: "blockquote" },
          ],
          marks: {
            decorators: [
              { title: "Bold", value: "strong" },
              { title: "Italic", value: "em" },
            ],
            annotations: [
              {
                name: "link",
                type: "object",
                title: "Link",
                fields: [
                  { name: "href", type: "url", title: "URL" },
                  { name: "blank", type: "boolean", title: "Open in new tab", initialValue: true },
                ],
              },
            ],
          },
        },
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            defineField({ name: "alt", type: "string", title: "Alt text" }),
            defineField({ name: "caption", type: "string", title: "Caption" }),
          ],
        },
      ],
    }),
  ],
  orderings: [
    {
      title: "Date (newest first)",
      name: "startDateDesc",
      by: [{ field: "startDate", direction: "desc" }],
    },
    {
      title: "Date (upcoming first)",
      name: "startDateAsc",
      by: [{ field: "startDate", direction: "asc" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "location",
      startDate: "startDate",
      timezone: "timezone",
      media: "coverImage",
    },
    prepare(value) {
      const date = value.startDate
        ? formatEventDateShort(value.startDate, getEventTimezone(value.timezone))
        : "";
      return {
        title: value.title,
        subtitle: [date, value.subtitle].filter(Boolean).join(" · "),
        media: value.media,
      };
    },
  },
});
