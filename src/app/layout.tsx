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

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "MDplus — MD + tech. MD + AI. MD + everything else.",
    template: "%s · MDplus",
  },
  description:
    "The community for physicians and med students building in tech, data, AI, and entrepreneurship — without figuring it out alone.",
  icons: {
    // `src/app/favicon.ico` is auto-served at `/favicon.ico` by Next.js
    // (file-based metadata convention) and covers 16x16 and 32x32.
    // We layer PNGs from /public/favicons for higher-DPI displays.
    icon: [
      { url: "/favicons/favicon_mdplus_community_64x64.png", type: "image/png", sizes: "64x64" },
      { url: "/favicons/favicon_mdplus_community_128x128.png", type: "image/png", sizes: "100x100" },
      { url: "/favicons/favicon_mdplus_community_256x256.png", type: "image/png", sizes: "100x100" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/favicons/favicon_mdplus_community_256x256.png", sizes: "100x100", type: "image/png" },
    ],
  },
  openGraph: {
    title: "MDplus",
    description:
      "The community for physicians and med students building in tech, data, AI, and entrepreneurship — without figuring it out alone.",
    url: "https://mdplus.community",
    siteName: "MDplus",
    type: "website",
    images: [
      {
        url: "/opengraph.png",
        width: 2192,
        height: 1054,
        alt: "MDplus — MD + tech. MD + AI. MD + everything else.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MDplus",
    description:
      "The community for physicians and med students building in tech, data, AI, and entrepreneurship.",
    images: ["/opengraph.png"],
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
