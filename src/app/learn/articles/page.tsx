import type { Metadata } from "next";
import { ComingSoon } from "@/components/marketing/ComingSoon";

export const metadata: Metadata = { title: "Articles" };

export default function ArticlesPage() {
  return (
    <ComingSoon
      eyebrow="Articles · Coming soon"
      title="Long-form essays on medicine and what's next."
      description="An owned, SEO-friendly publication for member-authored writing, replacing our scattered Medium presence. Editorial review by the team."
    />
  );
}
