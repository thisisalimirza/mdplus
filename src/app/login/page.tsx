import type { Metadata } from "next";
import { ComingSoon } from "@/components/marketing/ComingSoon";

export const metadata: Metadata = { title: "Sign in" };

export default function LoginPage() {
  return (
    <ComingSoon
      eyebrow="Sign in · Coming soon"
      title="Member sign-in coming with the membership rollout."
      description="The proper account flow lights up alongside Premium membership. For now, the community lives in Slack; join free."
      alternatives={[
        { label: "Join free", href: "/join", primary: true },
        { label: "Premium membership", href: "/membership" },
      ]}
    />
  );
}
