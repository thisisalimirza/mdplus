import Link from "next/link";

const POPULAR = [
  { href: "/community", label: "Community" },
  { href: "/skills", label: "Skills" },
  { href: "/learn/podcast", label: "Podcast" },
  { href: "/programs/catalyst", label: "Catalyst" },
  { href: "/membership", label: "Membership" },
  { href: "/partners", label: "For Partners" },
] as const;

export default function NotFound() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-rhino-900">

      {/* Subtle monitor grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-rhino-400) 1px, transparent 1px), linear-gradient(90deg, var(--color-rhino-400) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Top ECG strip */}
      <div aria-hidden className="absolute top-0 left-0 right-0 overflow-hidden px-8 pt-6 opacity-25">
        <svg
          viewBox="0 0 700 56"
          preserveAspectRatio="none"
          className="h-12 w-full"
        >
          <path
            d="M0,28 L130,28 L145,26 L155,30 L161,6 L170,52 L177,28 L195,28 L205,23 L215,28 L260,28 L700,28"
            stroke="#4ade80"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="ecg-line"
          />
        </svg>
      </div>

      <div className="relative mx-auto max-w-4xl px-6 pb-24 pt-24 md:pt-32">

        {/* Vitals bar */}
        <div
          aria-hidden
          className="mb-8 flex flex-wrap items-center gap-5 font-mono text-xs text-rhino-600"
        >
          <span>HR <span className="text-red-500/70">— bpm</span></span>
          <span>BP <span className="text-yellow-500/60">—/—</span></span>
          <span>SPO₂ <span className="text-sky-400/60">— %</span></span>
          <span className="ml-2 flex items-center gap-1.5 text-red-500/80">
            <span className="vitals-alert inline-block size-1.5 rounded-full bg-red-500" />
            PAGE UNRESPONSIVE
          </span>
        </div>

        {/* 404 */}
        <p
          className="font-display font-bold leading-none tracking-tight text-rhino-800"
          style={{ fontSize: "clamp(5rem, 18vw, 13rem)" }}
        >
          4<span className="text-yellow-500">0</span>4
        </p>

        {/* Headline */}
        <h1 className="mt-3 font-display text-2xl font-bold text-white md:text-4xl">
          This page didn&apos;t make it through the match.
        </h1>

        {/* Body */}
        <p className="mt-5 max-w-lg text-base leading-relaxed text-rhino-400">
          We may have moved it, retired it, or it hasn&apos;t shipped yet.
          The site is actively being built — if you followed an old link,
          that&apos;s why.
        </p>

        {/* Clinical note card */}
        <div className="mt-8 inline-block rounded-xl border border-rhino-700 bg-rhino-800/60 px-5 py-4 font-mono text-sm">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-rhino-500">
            Chart note
          </p>
          <p className="mt-1.5 text-white">
            Dx: 404 — Resource not located
          </p>
          <p className="mt-0.5 text-rhino-500">
            Plan: Return to home. Follow up with community if needed.
          </p>
        </div>

        {/* CTAs */}
        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-md bg-denim-500 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-denim-600"
          >
            Back to home
          </Link>
          <Link
            href="https://app.mdplus.community/apply"
            className="inline-flex items-center justify-center rounded-md border border-rhino-600 bg-rhino-800 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-rhino-500 hover:bg-rhino-700"
          >
            Apply to MD+
          </Link>
        </div>

        {/* Quick links */}
        <div className="mt-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-rhino-600">
            Or try one of these
          </p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {POPULAR.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="inline-flex items-center rounded-full border border-rhino-700 bg-rhino-800/50 px-4 py-1.5 text-sm font-medium text-rhino-300 transition-colors hover:border-denim-500 hover:bg-denim-900/40 hover:text-denim-300"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
}
