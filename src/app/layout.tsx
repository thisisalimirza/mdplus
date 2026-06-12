import type { Metadata } from "next";
import { Inter, Space_Grotesk, Dancing_Script } from "next/font/google";
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

const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
  display: "swap",
});

// Production canonical domain. Preview deployments use the unique Vercel URL
// so OG image absolute URLs don't point at a foreign host.
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
    default: "MDplus: MD + tech. MD + AI. MD + everything else.",
    template: "%s · MDplus",
  },
  description:
    "The community for physicians and med students building in tech, data, AI, and entrepreneurship, without figuring it out alone.",
  openGraph: {
    siteName: "MDplus",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
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
      className={`${inter.variable} ${spaceGrotesk.variable} ${dancingScript.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-neutral-0 text-neutral-700">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
