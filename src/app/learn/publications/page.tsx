import type { Metadata } from "next";
import { ComingSoon } from "@/components/marketing/ComingSoon";

export const metadata: Metadata = { title: "Publications" };

export default function PublicationsPage() {
  return (
    <ComingSoon
      eyebrow="Publications · Coming soon"
      title="Peer-reviewed work from the community."
      description="Research papers from MDplus Datathons and member-authored work, in a journal-style publication."
    />
  );
}
