import type { Metadata } from "next";
import { ComingSoon } from "@/components/marketing/ComingSoon";

export const metadata: Metadata = { title: "Team" };

export default function TeamPage() {
  return (
    <ComingSoon
      eyebrow="Team · Coming soon"
      title="The folks running the place."
      description="Bios, photos, and a toggle between current leadership and past directors. Migrating from the old site as part of the redesign."
    />
  );
}
