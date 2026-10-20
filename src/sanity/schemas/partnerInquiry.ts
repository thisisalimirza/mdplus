import { defineField, defineType } from "sanity";
import {
  BUDGET_RANGES,
  EVENTS,
  HEARD_ABOUT,
  INTEREST_TYPES,
  TIMELINES,
} from "@/lib/partner-interest";

const opts = (list: readonly { value: string; label: string }[]) =>
  list.map((o) => ({ title: o.label, value: o.value }));

/**
 * Submissions from the "Partner with us" form (/partners/interest).
 * The website creates these; the exec team reviews them in the Studio.
 */
export const partnerInquirySchema = defineType({
  name: "partnerInquiry",
  title: "Partner inquiry",
  type: "document",
  fields: [
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      initialValue: "new",
      options: {
        list: [
          { title: "New", value: "new" },
          { title: "Contacted", value: "contacted" },
          { title: "In conversation", value: "in-conversation" },
          { title: "Confirmed", value: "confirmed" },
          { title: "Not a fit", value: "not-a-fit" },
        ],
        layout: "radio",
      },
    }),
    defineField({ name: "owner", title: "Exec owner", type: "string", description: "Who on the team is following up." }),
    defineField({ name: "notes", title: "Internal notes", type: "text", rows: 3 }),
    defineField({ name: "submittedAt", title: "Submitted", type: "datetime", readOnly: true }),
    defineField({ name: "name", title: "Name", type: "string" }),
    defineField({ name: "email", title: "Email", type: "string" }),
    defineField({ name: "organization", title: "Company / organization", type: "string" }),
    defineField({ name: "role", title: "Role / title", type: "string" }),
    defineField({ name: "website", title: "Website", type: "url" }),
    defineField({ name: "phone", title: "Phone", type: "string" }),
    defineField({
      name: "interestTypes",
      title: "Interested in",
      type: "array",
      of: [{ type: "string" }],
      options: { list: opts(INTEREST_TYPES) },
    }),
    defineField({
      name: "events",
      title: "Events",
      type: "array",
      of: [{ type: "string" }],
      options: { list: opts(EVENTS) },
    }),
    defineField({ name: "budget", title: "Budget range", type: "string", options: { list: opts(BUDGET_RANGES) } }),
    defineField({ name: "timeline", title: "Timeline", type: "string", options: { list: opts(TIMELINES) } }),
    defineField({ name: "message", title: "Message", type: "text", rows: 6 }),
    defineField({ name: "heardAbout", title: "Heard about MDplus via", type: "string", options: { list: opts(HEARD_ABOUT) } }),
  ],
  orderings: [
    { title: "Newest first", name: "submittedDesc", by: [{ field: "submittedAt", direction: "desc" }] },
    { title: "Organization A–Z", name: "orgAsc", by: [{ field: "organization", direction: "asc" }] },
  ],
  preview: {
    select: { org: "organization", name: "name", status: "status", events: "events" },
    prepare: ({ org, name, status, events }) => ({
      title: org || name || "Partner inquiry",
      subtitle: [name, (events as string[] | undefined)?.join(", "), status].filter(Boolean).join(" · "),
    }),
  },
});
