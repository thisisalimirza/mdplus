import type { Metadata } from "next";
import { ComingSoon } from "@/components/marketing/ComingSoon";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <ComingSoon
      eyebrow="Contact · Coming soon"
      title="Get in touch."
      description="A proper contact form lights up next. Until then, the fastest way to reach the team is in the Slack — DMs work."
    />
  );
}
