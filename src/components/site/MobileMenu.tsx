"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

type NavItem = {
  href: string;
  label: string;
  external?: boolean;
};

type MobileMenuProps = {
  nav: readonly NavItem[];
};

/**
 * Hamburger button + slide-in drawer for mobile navigation.
 * - Closes on: Esc, backdrop click, link click, route change.
 * - Locks body scroll while open.
 * - Returns focus to the trigger button on close.
 */
export function MobileMenu({ nav }: MobileMenuProps) {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  // Close on route change.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Esc to close + body scroll lock + focus management.
  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Move focus into the drawer for SR / keyboard users.
    closeRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      // Return focus to the trigger when we close.
      triggerRef.current?.focus();
    };
  }, [open]);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        aria-label="Open menu"
        aria-expanded={open}
        aria-controls="mobile-menu-drawer"
        onClick={() => setOpen(true)}
        className="inline-flex size-10 items-center justify-center rounded-md text-rhino-700 transition-colors hover:bg-neutral-50 md:hidden"
      >
        <Menu className="size-5" aria-hidden />
      </button>

      {/* Backdrop */}
      <div
        aria-hidden
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-50 bg-rhino-900/40 backdrop-blur-sm transition-opacity duration-200 md:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Drawer — h-dvh so the height is explicit (some Tailwind v4 +
          fixed-position combos don't auto-resolve height from inset-y-0
          alone, leaving flex-1 children with no space to grow into). */}
      <div
        id="mobile-menu-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        className={`fixed top-0 right-0 z-50 flex h-dvh w-[88%] max-w-sm flex-col bg-rhino-700 text-white shadow-lg transition-transform duration-300 ease-out md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer header */}
        <div className="flex h-16 items-center justify-between border-b border-white/10 px-6">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="font-display text-xl font-bold"
            aria-label="MDplus home"
          >
            <span>MD</span>
            <span className="text-yellow-500">+</span>
            <span>plus</span>
          </Link>
          <button
            ref={closeRef}
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="inline-flex size-10 items-center justify-center rounded-md text-white transition-colors hover:bg-white/10"
          >
            <X className="size-5" aria-hidden />
          </button>
        </div>

        {/* Drawer nav */}
        <nav
          aria-label="Mobile primary"
          className="flex-1 overflow-y-auto px-6 py-8"
        >
          <ul className="space-y-1">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  {...(item.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="flex items-center justify-between rounded-md px-3 py-3 font-display text-lg font-semibold text-white transition-colors hover:bg-white/10"
                >
                  <span>{item.label}</span>
                  {item.external && (
                    <ArrowUpRight
                      className="size-4 text-rhino-200"
                      aria-hidden
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Drawer footer CTAs */}
        <div className="border-t border-white/10 px-6 py-6">
          <div className="grid gap-3">
            <Link
              href="/join"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center rounded-md bg-yellow-500 px-5 py-3 text-base font-semibold text-rhino-900 shadow-sm transition-colors hover:bg-yellow-400"
            >
              Join free →
            </Link>
            <Link
              href="/login"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center rounded-md border border-white/20 bg-white/5 px-5 py-3 text-base font-semibold text-white transition-colors hover:bg-white/10"
            >
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
