/**
 * Live podcast episodes from the Buzzsprout RSS feed that also powers Spotify.
 * Metadata is entered once on Buzzsprout — the site reads it automatically.
 */

export const SPOTIFY_SHOW_ID = "3Sf6VxkcSEgqnsm2Jaay60";
export const SPOTIFY_SHOW_URL = `https://open.spotify.com/show/${SPOTIFY_SHOW_ID}`;
export const SPOTIFY_EMBED_URL = `https://open.spotify.com/embed/show/${SPOTIFY_SHOW_ID}?utm_source=generator&theme=0`;

export const BUZZSPROUT_PODCAST_ID = "2102577";
export const PODCAST_RSS_URL = `https://feeds.buzzsprout.com/${BUZZSPROUT_PODCAST_ID}.rss`;
export const APPLE_PODCASTS_URL =
  "https://podcasts.apple.com/us/podcast/the-md-podcast/id1743903165";

const ITUNES_NS = "http://www.itunes.com/dtds/podcast-1.0.dtd";
const CONTENT_NS = "http://purl.org/rss/1.0/modules/content/";

export type PodcastEpisode = {
  id: string;
  slug: string;
  title: string;
  summary: string;
  descriptionHtml: string;
  publishedAt: string | null;
  durationSeconds: number | null;
  durationLabel: string | null;
  episodeNumber: number | null;
  guest: string | null;
  coverImageUrl: string | null;
  audioUrl: string | null;
  buzzsproutUrl: string | null;
  /** Spotify show URL (reliable without API keys). */
  spotifyUrl: string;
  applePodcastsUrl: string;
};

function decodeXmlEntities(value: string): string {
  return value
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&nbsp;/g, " ")
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)))
    .replace(/&#x([0-9a-fA-F]+);/g, (_, n) =>
      String.fromCharCode(parseInt(n, 16)),
    )
    .replace(/&amp;/g, "&");
}

function stripHtml(html: string): string {
  return decodeXmlEntities(html)
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/p>/gi, "\n")
    .replace(/<[^>]+>/g, "")
    .replace(/\n{3,}/g, "\n\n")
    .replace(/[ \t]+\n/g, "\n")
    .trim();
}

function slugify(title: string): string {
  const slug = title
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 96);
  return slug || "episode";
}

function extractGuest(title: string): string | null {
  const match = title.match(/\b(?:with|w\/)\s+(.+)$/i);
  if (!match) return null;
  return match[1].replace(/\s+/g, " ").trim() || null;
}

function extractEpisodeNumber(title: string): number | null {
  const match = title.match(/\bEp(?:isode)?\s*#?\s*(\d+)\b/i);
  if (!match) return null;
  const n = Number(match[1]);
  return Number.isFinite(n) ? n : null;
}

function formatDuration(seconds: number | null): string | null {
  if (seconds == null || !Number.isFinite(seconds) || seconds <= 0) return null;
  const mins = Math.round(seconds / 60);
  if (mins < 60) return `${mins} min`;
  const h = Math.floor(mins / 60);
  const m = mins % 60;
  return m === 0 ? `${h} hr` : `${h} hr ${m} min`;
}

function parseDurationSeconds(raw: string | null): number | null {
  if (!raw) return null;
  const trimmed = raw.trim();
  if (!trimmed) return null;
  if (/^\d+$/.test(trimmed)) return Number(trimmed);
  const parts = trimmed.split(":").map((p) => Number(p));
  if (parts.some((p) => !Number.isFinite(p))) return null;
  if (parts.length === 3) return parts[0] * 3600 + parts[1] * 60 + parts[2];
  if (parts.length === 2) return parts[0] * 60 + parts[1];
  return null;
}

function tagText(block: string, localName: string, ns?: string): string | null {
  const names = ns
    ? [
        localName,
        `itunes:${localName}`,
        `content:${localName}`,
        `{${ns}}${localName}`,
      ]
    : [localName];
  for (const name of names) {
    const re = new RegExp(
      `<${name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}(?:\\s[^>]*)?>([\\s\\S]*?)<\\/${name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}>`,
      "i",
    );
    const match = block.match(re);
    if (match) return decodeXmlEntities(match[1].trim());
  }
  return null;
}

function tagAttr(
  block: string,
  localName: string,
  attr: string,
  nsPrefix?: string,
): string | null {
  const name = nsPrefix ? `${nsPrefix}:${localName}` : localName;
  const re = new RegExp(
    `<${name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b([^>]*)\\/?>`,
    "i",
  );
  const match = block.match(re);
  if (!match) return null;
  const attrRe = new RegExp(`${attr}="([^"]*)"`, "i");
  const attrMatch = match[1].match(attrRe);
  return attrMatch ? decodeXmlEntities(attrMatch[1]) : null;
}

function buzzsproutUrlFromItem(guid: string | null, enclosureUrl: string | null): string | null {
  const fromGuid = guid?.match(/Buzzsprout-(\d+)/i)?.[1];
  if (fromGuid) return `https://www.buzzsprout.com/${BUZZSPROUT_PODCAST_ID}/${fromGuid}`;
  const fromEnclosure = enclosureUrl?.match(
    /buzzsprout\.com\/\d+\/episodes\/(\d+)/i,
  )?.[1];
  if (fromEnclosure) {
    return `https://www.buzzsprout.com/${BUZZSPROUT_PODCAST_ID}/${fromEnclosure}`;
  }
  return null;
}

function parseRssEpisodes(xml: string): PodcastEpisode[] {
  const channelMatch = xml.match(/<channel\b[^>]*>([\s\S]*?)<\/channel>/i);
  const channel = channelMatch?.[1] ?? xml;

  const itunesArtwork = tagAttr(channel, "image", "href", "itunes");
  const channelImageBlock = channel.match(
    /<image\b(?!:)[^>]*>([\s\S]*?)<\/image>/i,
  )?.[1];
  const channelImageUrl = channelImageBlock
    ? tagText(channelImageBlock, "url")
    : null;
  const artwork = itunesArtwork || channelImageUrl;

  const items = [...channel.matchAll(/<item\b[^>]*>([\s\S]*?)<\/item>/gi)].map(
    (m) => m[1],
  );

  const usedSlugs = new Set<string>();

  return items
    .map((item): PodcastEpisode | null => {
      const title = tagText(item, "title");
      if (!title) return null;

      const summaryRaw =
        tagText(item, "summary", ITUNES_NS) ||
        tagText(item, "description") ||
        "";
      const descriptionHtml =
        tagText(item, "encoded", CONTENT_NS) ||
        tagText(item, "description") ||
        summaryRaw;
      const summary = stripHtml(summaryRaw).slice(0, 300);

      const guid = tagText(item, "guid");
      const enclosureUrl = tagAttr(item, "enclosure", "url");
      const pubDate = tagText(item, "pubDate");
      const durationSeconds = parseDurationSeconds(
        tagText(item, "duration", ITUNES_NS),
      );

      let slug = slugify(title);
      if (usedSlugs.has(slug)) {
        const suffix = guid?.match(/(\d+)/)?.[1] ?? String(usedSlugs.size + 1);
        slug = `${slug}-${suffix}`.slice(0, 96);
      }
      usedSlugs.add(slug);

      const publishedAt = pubDate ? new Date(pubDate).toISOString() : null;

      return {
        id: guid || slug,
        slug,
        title,
        summary,
        descriptionHtml,
        publishedAt:
          publishedAt && !Number.isNaN(Date.parse(publishedAt))
            ? publishedAt
            : null,
        durationSeconds,
        durationLabel: formatDuration(durationSeconds),
        episodeNumber: extractEpisodeNumber(title),
        guest: extractGuest(title),
        coverImageUrl: artwork,
        audioUrl: enclosureUrl,
        buzzsproutUrl: buzzsproutUrlFromItem(guid, enclosureUrl),
        // Spotify's public show page is JS-rendered, so per-episode IDs aren't
        // available without API keys. The show URL is the reliable listen link;
        // Buzzsprout audio is used for on-page playback.
        spotifyUrl: SPOTIFY_SHOW_URL,
        applePodcastsUrl: APPLE_PODCASTS_URL,
      };
    })
    .filter((ep): ep is PodcastEpisode => ep != null);
}

/** Fetch all podcast episodes, newest first. Cached ~1 hour. */
export async function getPodcastEpisodes(): Promise<PodcastEpisode[]> {
  try {
    const rssRes = await fetch(PODCAST_RSS_URL, {
      headers: { Accept: "application/rss+xml, application/xml, text/xml" },
      next: { revalidate: 3600 },
    });

    if (!rssRes.ok) {
      console.error(`Podcast RSS fetch failed: ${rssRes.status}`);
      return [];
    }

    const xml = await rssRes.text();
    return parseRssEpisodes(xml);
  } catch (err) {
    console.error("Podcast RSS fetch error:", err);
    return [];
  }
}

export async function getPodcastEpisodeBySlug(
  slug: string,
): Promise<PodcastEpisode | null> {
  const episodes = await getPodcastEpisodes();
  return episodes.find((ep) => ep.slug === slug) ?? null;
}

export async function getRecentPodcastEpisodes(
  limit = 3,
): Promise<PodcastEpisode[]> {
  const episodes = await getPodcastEpisodes();
  return episodes.slice(0, limit);
}
