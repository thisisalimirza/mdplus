/** Canonical production site URL used for metadata, sitemap, and robots. */
export const SITE_URL = "https://www.mdplus.community";

export function absoluteUrl(path = "/"): string {
  if (!path || path === "/") return SITE_URL;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
