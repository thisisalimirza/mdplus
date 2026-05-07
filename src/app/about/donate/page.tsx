import type { Metadata } from "next";
import { ComingSoon } from "@/components/marketing/ComingSoon";

export const metadata: Metadata = { title: "Donate" };

export default function DonatePage() {
  return (
    <ComingSoon
      eyebrow="Donate · Coming soon"
      title="Help us stay free."
      description="MDplus is a 501(c)3. Donations cover programs, hosting, and keeping the bulk of the community completely free. Tax-deductible."
      alternatives={[
        { label: "Donate via PayPal (current site)", href: "https://www.paypal.com", primary: true },
        { label: "Become a Premium member instead", href: "/membership" },
      ]}
    />
  );
}
