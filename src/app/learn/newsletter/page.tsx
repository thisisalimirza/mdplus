import type { Metadata } from "next";
import { ComingSoon } from "@/components/marketing/ComingSoon";

export const metadata: Metadata = { title: "Newsletter" };

export default function NewsletterPage() {
  return (
    <ComingSoon
      eyebrow="Newsletter · Coming soon"
      title="The weekly briefing for physician-innovators."
      description="A signal-only weekly, designed for people who want the highlights without joining the Slack. Every issue links back to where the real conversations are happening."
    />
  );
}
