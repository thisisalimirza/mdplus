import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

// Resolve metadataBase to whatever URL actually serves the build. We must NOT
// hardcode `https://mdplus.community`: that domain still resolves to the old
// Squarespace site, so any `og:image=https://mdplus.community/opengraph-image.png`
// we emit will 404. When social scrapers fail to fetch the declared OG image,
// they fall back to scraping the page for a plausible image — picking up the
// Harvard logo from the partners strip on the homepage instead of our OG card.
//
//   - Production → VERCEL_PROJECT_PRODUCTION_URL (Vercel's stable shortest
//                  production alias — `mdplus-nine.vercel.app` today, and
//                  auto-updates to `mdplus.community` once that domain is
//                  added as a production domain in Vercel and DNS cuts over)
//   - Preview    → VERCEL_URL (unique per-deployment preview URL)
//   - `next dev` → http://localhost:3000
const siteUrl =
  process.env.VERCEL_ENV === "production" && process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000";

// Icons and OG/Twitter images come from Next.js file conventions in src/app/:
//   favicon.ico, icon.png, apple-icon.png, opengraph-image.png, twitter-image.png
// Next.js introspects each file and emits the correct <link>/<meta> tags with
// real dimensions — no manual `icons` or `openGraph.images` config needed.
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "MDplus — MD + tech. MD + AI. MD + everything else.",
    template: "%s · MDplus",
  },
  description:
    "The community for physicians and med students building in tech, data, AI, and entrepreneurship — without figuring it out alone.",
  openGraph: {
    title: "MDplus",
    description:
      "The community for physicians and med students building in tech, data, AI, and entrepreneurship — without figuring it out alone.",
    // Don't hardcode `url: "https://mdplus.community"` until DNS points there.
    // Next.js falls back to `metadataBase + pathname` for og:url, which is what
    // we want — scrapers won't recanonicalize back to the Squarespace site.
    siteName: "MDplus",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MDplus",
    description:
      "The community for physicians and med students building in tech, data, AI, and entrepreneurship.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-neutral-0 text-neutral-700">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
