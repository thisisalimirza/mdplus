import { defineField, defineType } from "sanity";

export const podcastEpisodeSchema = defineType({
  name: "podcastEpisode",
  title: "Podcast Episode",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Episode Title",
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
      name: "episodeNumber",
      title: "Episode Number",
      type: "number",
    }),
    defineField({
      name: "series",
      title: "Series",
      type: "string",
      options: {
        list: [
          { title: "Founder Stories", value: "founder-stories" },
          { title: "Fireside Chats", value: "fireside-chats" },
          { title: "Trainee Decision Points", value: "trainee-decision-points" },
        ],
      },
    }),
    defineField({
      name: "guest",
      title: "Guest Name",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "guestTitle",
      title: "Guest Title / Role",
      description: "e.g. Co-founder & CEO, Roon Health · Physician",
      type: "string",
    }),
    defineField({
      name: "guestPhoto",
      title: "Guest Photo",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "publishedAt",
      title: "Published Date",
      type: "datetime",
    }),
    defineField({
      name: "duration",
      title: "Duration",
      description: "e.g. 48 min",
      type: "string",
    }),
    defineField({
      name: "coverImage",
      title: "Cover / Episode Art",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({ name: "alt", type: "string", title: "Alt text" }),
      ],
    }),
    defineField({
      name: "summary",
      title: "Summary",
      description: "1–2 sentences shown on the episode listing",
      type: "text",
      rows: 3,
      validation: (r) => r.max(300),
    }),
    defineField({
      name: "spotifyUrl",
      title: "Spotify URL",
      type: "url",
    }),
    defineField({
      name: "buzzsproutUrl",
      title: "Buzzsprout URL",
      type: "url",
    }),
    defineField({
      name: "applePodcastsUrl",
      title: "Apple Podcasts URL",
      type: "url",
    }),
    defineField({
      name: "body",
      title: "Show Notes",
      description: "Full episode notes, topics covered, links mentioned, timestamps",
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
      ],
    }),
  ],
  orderings: [
    {
      title: "Published (newest first)",
      name: "publishedAtDesc",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
    {
      title: "Episode number (newest first)",
      name: "episodeNumberDesc",
      by: [{ field: "episodeNumber", direction: "desc" }],
    },
  ],
  preview: {
    select: { title: "title", subtitle: "guest", episodeNumber: "episodeNumber" },
    prepare(value) {
      const ep = value.episodeNumber ? `Ep. ${value.episodeNumber} · ` : "";
      return { title: value.title, subtitle: `${ep}${value.subtitle ?? ""}` };
    },
  },
});
