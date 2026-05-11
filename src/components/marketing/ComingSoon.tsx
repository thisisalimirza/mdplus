import Link from "next/link";
import { ReactNode } from "react";
import { PageHero } from "./PageHero";

type ComingSoonProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  /** Where to send people while they wait. */
  alternatives?: { label: string; href: string; primary?: boolean }[];
};

export function ComingSoon({
  eyebrow = "Coming soon",
  title,
  description,
  alternatives = [
    { label: "Join the community", href: "/join", primary: true },
    { label: "Back to home", href: "/" },
  ],
}: ComingSoonProps) {
  return (
    <>
      <PageHero
        eyebrow={eyebrow}
        title={title}
        description={
          description ?? (
            <>
              We&apos;re building this page. In the meantime, the easiest way
              in is the Slack community. That&apos;s where everything
              actually happens anyway.
            </>
          )
        }
      >
        <div className="flex flex-wrap gap-3">
          {alternatives.map((alt) => (
            <Link
              key={alt.href}
              href={alt.href}
              className={
                alt.primary
                  ? "inline-flex items-center justify-center rounded-md bg-denim-500 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-denim-600"
                  : "inline-flex items-center justify-center rounded-md border border-rhino-200 bg-neutral-0 px-5 py-3 text-sm font-semibold text-rhino-700 transition-colors hover:border-rhino-300 hover:bg-neutral-50"
              }
            >
              {alt.label}
            </Link>
          ))}
        </div>
      </PageHero>
      <section className="border-t border-neutral-100 bg-neutral-0 py-16 md:py-20">
        <div className="mx-auto max-w-(--container-max) px-6">
          <p className="text-sm text-neutral-500">
            Want a heads-up when this launches? Join the Slack. We announce
            everything there first.
          </p>
        </div>
      </section>
    </>
  );
}
