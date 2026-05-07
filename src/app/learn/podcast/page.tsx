import type { Metadata } from "next";
import { ComingSoon } from "@/components/marketing/ComingSoon";

export const metadata: Metadata = { title: "Podcast" };

export default function PodcastPage() {
  return (
    <ComingSoon
      eyebrow="Podcast · Coming soon"
      title="Conversations with physicians, founders, and operators."
      description="Every episode with auto-generated transcripts so the conversations actually show up in search. Subscribe in your favorite app — RSS, Apple, Spotify — once we're live."
    />
  );
}
