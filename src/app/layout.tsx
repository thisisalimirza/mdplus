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

// Resolve metadataBase to whatever environment is actually rendering, so
// `og:image` and favicon URLs point at the *current* deploy — not always
// production. Without this, Vercel preview deploys emit
// `og:image=https://mdplus.community/opengraph.png`, which makes social
// previews look broken (or at least misleading) when sharing a preview URL.
//   - Production builds → canonical apex domain
//   - Vercel previews   → unique preview URL via VERCEL_URL
//   - `next dev`        → http://localhost:3000
const siteUrl =
  process.env.VERCEL_ENV === "production"
    ? "https://mdplus.community"
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
    url: "https://mdplus.community",
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
