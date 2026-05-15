import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { postSchema } from "@/sanity/schemas/post";
import { authorSchema } from "@/sanity/schemas/author";

export default defineConfig({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
  basePath: "/studio",
  title: "MDplus Blog",
  plugins: [structureTool()],
  schema: {
    types: [postSchema, authorSchema],
  },
});
