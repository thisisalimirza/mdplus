import Link from "next/link";
import { Wordmark } from "./Wordmark";
import { MobileMenu } from "./MobileMenu";

const NAV = [
  { href: "/community", label: "Community" },
  { href: "/skills", label: "Skills" },
  { href: "/learn", label: "Learn" },
  { href: "/programs", label: "Programs" },
  { href: "/partners", label: "Partners" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-neutral-100 bg-neutral-0/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-(--container-max) items-center justify-between px-6">
        <Wordmark />

        <nav
          aria-label="Primary"
          className="hidden items-center gap-1 md:flex"
        >
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              {...(("external" in item && item.external)
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="rounded-md px-3 py-2 text-sm font-medium text-neutral-600 transition-colors hover:bg-neutral-50 hover:text-rhino-700"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/login"
            className="hidden rounded-md px-3 py-2 text-sm font-medium text-neutral-600 transition-colors hover:text-rhino-700 md:inline-block"
          >
            Sign in
          </Link>
          <Link
            href="/join"
            className="hidden items-center justify-center rounded-md bg-denim-500 px-4 py-2 text-sm font-semibold text-white shadow-xs transition-colors hover:bg-denim-600 active:bg-denim-700 md:inline-flex"
          >
            Join free
          </Link>
          <Link
            href="/join"
            className="inline-flex items-center justify-center rounded-md bg-denim-500 px-3 py-1.5 text-xs font-semibold text-white shadow-xs transition-colors hover:bg-denim-600 active:bg-denim-700 md:hidden"
          >
            Join free
          </Link>
          <MobileMenu nav={NAV} />
        </div>
      </div>
    </header>
  );
}
