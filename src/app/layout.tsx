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

export const metadata: Metadata = {
  metadataBase: new URL("https://mdplus.community"),
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
