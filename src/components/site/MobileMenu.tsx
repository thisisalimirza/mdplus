"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  Menu,
  X,
  ArrowUpRight,
  ChevronDown,
  type LucideIcon,
} from "lucide-react";

export type NavChild = {
  href: string;
  title: string;
  icon?: LucideIcon;
  badge?: string;
  external?: boolean;
};

export type NavItem = {
  href: string;
  label: string;
  external?: boolean;
  /** When present, the row gets a chevron that toggles a sub-list. */
  children?: NavChild[];
};

type MobileMenuProps = {
  nav: readonly NavItem[];
};

/**
 * Hamburger button + slide-in drawer for mobile navigation.
 *
 * Behavior:
 * - Closes on Esc, backdrop click, link click, route change.
 * - Locks body scroll while open.
 * - Returns focus to the trigger button on close.
 * - Items with `children` get a chevron-toggle that expands an inline
 *   accordion of sub-pages. The label itself is still a link (taps go to
 *   the hub); the chevron is a separate tap target that only toggles
 *   expansion.
 * - On open, any nav item whose href is the current path's prefix is
 *   auto-expanded — so a user on /community/biotech sees Community
 *   already expanded.
 */
export function MobileMenu({ nav }: MobileMenuProps) {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<Set<string>>(new Set());
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  // Auto-expand the parent that matches the current route. Runs on
  // pathname change so navigating in keeps the right section open.
  useEffect(() => {
    const matching = nav
      .filter(
        (item) =>
          item.children &&
          item.href !== "/" &&
          pathname.startsWith(item.href),
      )
      .map((item) => item.href);
    setExpanded(new Set(matching));
  }, [pathname, nav]);

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

    closeRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      triggerRef.current?.focus();
    };
  }, [open]);

  const toggleExpand = (href: string) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(href)) next.delete(href);
      else next.add(href);
      return next;
    });
  };

  const closeMenu = () => setOpen(false);

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
        onClick={closeMenu}
        className={`fixed inset-0 z-50 bg-rhino-900/40 backdrop-blur-sm transition-opacity duration-200 md:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Drawer */}
      <div
        id="mobile-menu-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        className={`fixed top-0 right-0 z-50 flex h-dvh w-[88%] max-w-sm flex-col bg-rhino-700 text-white shadow-lg transition-transform duration-300 ease-out md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex h-16 items-center justify-between border-b border-white/10 px-6">
          <Link
            href="/"
            onClick={closeMenu}
            className="group inline-flex items-center gap-1.5 font-display text-xl font-bold text-white"
            aria-label="MDplus home"
          >
            {/* Dark-background variant: blue plus uses white */}
            <svg viewBox="0 0 44 44" className="h-6 w-6 shrink-0" aria-hidden>
              <g className="transition-transform duration-300 [transform-origin:13px_31px] group-hover:[transform:rotate(-90deg)]">
                <rect x="1" y="27" width="24" height="8" rx="2" fill="rgba(255,255,255,0.75)" />
                <rect x="9" y="19" width="8" height="24" rx="2" fill="rgba(255,255,255,0.75)" />
              </g>
              <g className="transition-transform duration-300 [transform-origin:31px_13px] group-hover:[transform:rotate(90deg)]">
                <rect x="19" y="9" width="24" height="8" rx="2" fill="#FFCB21" />
                <rect x="27" y="1" width="8" height="24" rx="2" fill="#FFCB21" />
              </g>
            </svg>
            MDplus
          </Link>
          <button
            ref={closeRef}
            type="button"
            aria-label="Close menu"
            onClick={closeMenu}
            className="inline-flex size-10 items-center justify-center rounded-md text-white transition-colors hover:bg-white/10"
          >
            <X className="size-5" aria-hidden />
          </button>
        </div>

        {/* Nav */}
        <nav
          aria-label="Mobile primary"
          className="flex-1 overflow-y-auto px-6 py-6"
        >
          <ul className="space-y-1">
            {nav.map((item) => {
              const hasChildren =
                !!item.children && item.children.length > 0;
              const isExpanded = expanded.has(item.href);
              const childListId = `mobile-nav-${item.href.replace(/[/]/g, "-")}-children`;

              return (
                <li key={item.href}>
                  <div className="flex items-center">
                    <Link
                      href={item.href}
                      onClick={closeMenu}
                      {...(item.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="flex flex-1 items-center justify-between rounded-md px-3 py-3 font-display text-lg font-semibold text-white transition-colors hover:bg-white/10"
                    >
                      <span>{item.label}</span>
                      {item.external && (
                        <ArrowUpRight
                          className="size-4 text-rhino-200"
                          aria-hidden
                        />
                      )}
                    </Link>
                    {hasChildren && (
                      <button
                        type="button"
                        aria-label={`${isExpanded ? "Collapse" : "Expand"} ${item.label} sub-menu`}
                        aria-expanded={isExpanded}
                        aria-controls={childListId}
                        onClick={() => toggleExpand(item.href)}
                        className="ml-1 inline-flex size-11 shrink-0 items-center justify-center rounded-md text-rhino-200 transition-colors hover:bg-white/10 hover:text-white"
                      >
                        <ChevronDown
                          className={`size-5 transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}
                          aria-hidden
                        />
                      </button>
                    )}
                  </div>

                  {/* Children (accordion) */}
                  {hasChildren && (
                    <div
                      id={childListId}
                      className={`grid transition-all duration-200 ease-out ${
                        isExpanded
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <ul className="overflow-hidden">
                        <li className="pt-1">
                          <div className="ml-3 border-l border-white/15 pl-3">
                            <ul className="space-y-0.5">
                              {item.children!.map((child) => {
                                const ChildIcon = child.icon;
                                return (
                                  <li key={child.href}>
                                    <Link
                                      href={child.href}
                                      onClick={closeMenu}
                                      {...(child.external
                                        ? {
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                          }
                                        : {})}
                                      className="flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium text-rhino-100/90 transition-colors hover:bg-white/10 hover:text-white"
                                    >
                                      {ChildIcon && (
                                        <span className="inline-flex size-7 shrink-0 items-center justify-center rounded-md bg-white/10 text-white">
                                          <ChildIcon
                                            className="size-3.5"
                                            aria-hidden
                                          />
                                        </span>
                                      )}
                                      <span className="flex-1">
                                        {child.title}
                                      </span>
                                      {child.badge && (
                                        <span className="rounded-pill bg-yellow-500/90 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-rhino-900">
                                          {child.badge}
                                        </span>
                                      )}
                                      {child.external && (
                                        <ArrowUpRight
                                          className="size-3.5 text-rhino-200"
                                          aria-hidden
                                        />
                                      )}
                                    </Link>
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        </li>
                      </ul>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Footer CTAs */}
        <div className="border-t border-white/10 px-6 py-6">
          <div className="grid gap-3">
            <Link
              href="/join"
              onClick={closeMenu}
              className="inline-flex items-center justify-center rounded-md bg-yellow-500 px-5 py-3 text-base font-semibold text-rhino-900 shadow-sm transition-colors hover:bg-yellow-400"
            >
              Join free →
            </Link>
            <Link
              href="/login"
              onClick={closeMenu}
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
