import { createClient } from "next-sanity";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;

export const isSanityConfigured = Boolean(projectId);

export const client = createClient({
  projectId: projectId ?? "unconfigured",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
  apiVersion: "2024-01-01",
  // CDN disabled: Next.js ISR is the caching layer. useCdn: true caused
  // deleted documents to keep appearing until the CDN TTL expired, because
  // the CDN returned stale data on every ISR revalidation cycle.
  useCdn: false,
});
