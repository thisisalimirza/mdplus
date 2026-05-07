import type { Metadata } from "next";
import { ComingSoon } from "@/components/marketing/ComingSoon";

export const metadata: Metadata = { title: "Catalyst" };

export default function CatalystPage() {
  return (
    <ComingSoon
      eyebrow="Catalyst · Coming soon"
      title="Our flagship program for physician-builders."
      description="A cohort-based experience for med students and physicians serious about shipping in tech, data, AI, or entrepreneurship. Mentorship, peer cohort, deadline-driven projects."
      alternatives={[
        { label: "Join the community first", href: "/join", primary: true },
        { label: "All programs", href: "/programs" },
      ]}
    />
  );
}
