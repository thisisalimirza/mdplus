import type { Metadata } from "next";
import { ComingSoon } from "@/components/marketing/ComingSoon";

export const metadata: Metadata = { title: "Journal Club" };

export default function JournalClubPage() {
  return (
    <ComingSoon
      eyebrow="Journal Club · Coming soon"
      title="Read papers together. Make sense of them faster."
      description="Recurring deep-dives into the latest data and AI papers in medicine — with annotated reading guides and member discussion threads."
    />
  );
}
