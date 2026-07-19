/**
 * Minimal HTML allowlist for podcast show notes from the RSS feed.
 * Strips scripts/styles/event handlers; keeps basic prose tags.
 */
const ALLOWED_TAGS = new Set([
  "p",
  "br",
  "strong",
  "b",
  "em",
  "i",
  "a",
  "ul",
  "ol",
  "li",
  "blockquote",
  "h2",
  "h3",
  "h4",
]);

export function sanitizePodcastHtml(html: string): string {
  if (!html) return "";

  let out = html
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "");

  // Drop disallowed tags entirely (keep children text).
  out = out.replace(/<\/?([a-zA-Z0-9]+)(\s[^>]*)?>/g, (full, tag: string, attrs = "") => {
    const name = tag.toLowerCase();
    if (!ALLOWED_TAGS.has(name)) return "";
    if (full.startsWith("</")) return `</${name}>`;
    if (name === "br") return "<br />";
    if (name === "a") {
      const href = attrs.match(/\bhref\s*=\s*("([^"]*)"|'([^']*)')/i);
      const url = href?.[2] ?? href?.[3] ?? "";
      if (!/^https?:\/\//i.test(url)) return "";
      return `<a href="${url.replace(/"/g, "&quot;")}" target="_blank" rel="noopener noreferrer">`;
    }
    return `<${name}>`;
  });

  return out.trim();
}
