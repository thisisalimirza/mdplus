import { defineField, defineType } from "sanity";

export const publicationSchema = defineType({
  name: "publication",
  title: "Publication",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "authors",
      title: "Authors",
      description: "e.g. Smith J, Doe A, MDplus Datathon Team",
      type: "string",
    }),
    defineField({
      name: "venue",
      title: "Journal / Venue",
      description: "e.g. JMIR Medical Education",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "publishedAt",
      title: "Publication Date",
      type: "date",
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Featured", value: "featured" },
          { title: "Datathon", value: "datathon" },
          { title: "Member-authored", value: "member" },
        ],
      },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "abstract",
      title: "Abstract / Summary",
      type: "text",
      rows: 5,
    }),
    defineField({
      name: "externalUrl",
      title: "External URL",
      description: "Link to the paper on the journal website",
      type: "url",
    }),
    defineField({
      name: "doi",
      title: "DOI",
      description: "e.g. 10.2196/12345",
      type: "string",
    }),
  ],
  orderings: [
    {
      title: "Published (newest first)",
      name: "publishedAtDesc",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
  ],
  preview: {
    select: { title: "title", subtitle: "venue" },
  },
});
