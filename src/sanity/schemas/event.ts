import { defineField, defineType } from "sanity";

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
      name: "startDate",
      title: "Start Date & Time",
      type: "datetime",
      description:
        "Enter the event's local date and time. The website converts the saved time to the display time zone below.",
      options: {
        dateFormat: "MMM D, YYYY",
        timeFormat: "h:mm A",
        timeStep: 15,
      },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "endDate",
      title: "End Date & Time",
      type: "datetime",
      description:
        "Recommended. The event automatically moves to Past after this time (or after the start time if left blank).",
      options: {
        dateFormat: "MMM D, YYYY",
        timeFormat: "h:mm A",
        timeStep: 15,
      },
    }),
    defineField({
      name: "timezone",
      title: "Display Time Zone",
      type: "string",
      description:
        "Controls the date and time shown on the website. Existing events default to Pacific Time.",
      initialValue: "America/Los_Angeles",
      options: {
        list: [
          { title: "Pacific Time (PT)", value: "America/Los_Angeles" },
          { title: "Mountain Time (MT)", value: "America/Denver" },
          { title: "Central Time (CT)", value: "America/Chicago" },
          { title: "Eastern Time (ET)", value: "America/New_York" },
          { title: "UTC", value: "UTC" },
        ],
        layout: "dropdown",
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
        "Upload the complete square or rectangular poster. The website displays the whole image without cropping.",
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
      description: "Full description before the event, or a recap afterward",
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
      media: "coverImage",
    },
    prepare(value) {
      const date = value.startDate
        ? new Date(value.startDate).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
            timeZone: "America/Los_Angeles",
          })
        : "";
      return {
        title: value.title,
        subtitle: [date, value.subtitle].filter(Boolean).join(" · "),
        media: value.media,
      };
    },
  },
});
