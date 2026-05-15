import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { media } from "sanity-plugin-media";
import { postSchema } from "@/sanity/schemas/post";
import { authorSchema } from "@/sanity/schemas/author";
import { publicationSchema } from "@/sanity/schemas/publication";
import { journalClubSchema } from "@/sanity/schemas/journalClub";

export default defineConfig({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
  basePath: "/studio",
  title: "MDplus Studio",
  plugins: [
    structureTool(),
    visionTool(),
    media(),
  ],
  schema: {
    types: [postSchema, authorSchema, publicationSchema, journalClubSchema],
  },
});
