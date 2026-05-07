import Link from "next/link";

const POPULAR = [
  { href: "/community", label: "Community" },
  { href: "/skills", label: "Skills" },
  { href: "/learn/podcast", label: "Podcast" },
  { href: "/programs/catalyst", label: "Catalyst" },
  { href: "/membership", label: "Premium membership" },
  { href: "/partners", label: "For Partners" },
] as const;

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-yellow-50 py-24 md:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(29,123,189,0.08),_transparent_60%)]"
      />
      <div className="relative mx-auto max-w-(--container-max) px-6">
        <p className="font-display text-7xl font-bold tracking-tight text-rhino-700 md:text-9xl">
          4<span className="text-yellow-500">0</span>4
        </p>
        <h1 className="mt-4 font-display text-3xl font-bold text-rhino-700 md:text-5xl">
          This page didn&apos;t make it through the match.
        </h1>
        <p className="mt-6 max-w-xl text-lg text-neutral-600">
          We may have moved it, retired it, or — most likely — never built it
          in the first place. The site is being redesigned; if you came here
          from an old link, that&apos;s why.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-md bg-denim-500 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-denim-600"
          >
            Back to home
          </Link>
          <Link
            href="/join"
            className="inline-flex items-center justify-center rounded-md border border-rhino-200 bg-neutral-0 px-5 py-3 text-sm font-semibold text-rhino-700 transition-colors hover:border-rhino-300 hover:bg-neutral-50"
          >
            Join the community
          </Link>
        </div>

        <div className="mt-16 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
            Or try one of these
          </p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {POPULAR.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  {...(("external" in item && item.external)
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="inline-flex items-center rounded-pill border border-neutral-200 bg-neutral-0 px-3.5 py-1.5 text-sm font-medium text-rhino-600 transition-colors hover:border-denim-300 hover:bg-denim-50 hover:text-denim-700"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
