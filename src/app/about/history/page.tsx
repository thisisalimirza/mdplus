import type { Metadata } from "next";
import { ComingSoon } from "@/components/marketing/ComingSoon";

export const metadata: Metadata = { title: "History" };

export default function HistoryPage() {
  return (
    <ComingSoon
      eyebrow="History · Coming soon"
      title="Where MDplus came from."
      description="The origin story, key milestones, and how we became a 5,000+ member community of physicians and med students."
    />
  );
}
