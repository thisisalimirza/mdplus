import { defineField, defineType } from "sanity";

export const journalClubSchema = defineType({
  name: "journalClub",
  title: "Journal Club Entry",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Discussion Title",
      description: "The headline for your discussion (can differ from paper title)",
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
      name: "discussionDate",
      title: "Discussion Date",
      type: "date",
    }),
    defineField({
      name: "paperTitle",
      title: "Paper Title",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "paperAuthors",
      title: "Paper Authors",
      type: "string",
    }),
    defineField({
      name: "paperUrl",
      title: "Paper URL",
      type: "url",
    }),
    defineField({
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({ name: "alt", type: "string", title: "Alt text" }),
      ],
    }),
    defineField({
      name: "summary",
      title: "Summary",
      description: "1–2 sentences shown on the listing page",
      type: "text",
      rows: 3,
      validation: (r) => r.max(300),
    }),
    defineField({
      name: "keyTakeaways",
      title: "Key Takeaways",
      description: "Bullet points — the main things members should walk away with",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "body",
      title: "Full Discussion Notes",
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
              { title: "Code", value: "code" },
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
    defineField({
      name: "facilitator",
      title: "Facilitator",
      type: "reference",
      to: [{ type: "author" }],
    }),
  ],
  orderings: [
    {
      title: "Discussion Date (newest first)",
      name: "discussionDateDesc",
      by: [{ field: "discussionDate", direction: "desc" }],
    },
  ],
  preview: {
    select: { title: "title", subtitle: "paperTitle" },
  },
});
