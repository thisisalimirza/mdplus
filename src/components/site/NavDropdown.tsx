"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { LucideIcon } from "lucide-react";

export type DropdownItem = {
  href: string;
  title: string;
  description?: string;
  icon?: LucideIcon;
  badge?: string;
  external?: boolean;
};

type NavDropdownProps = {
  /** The hub page the parent nav item links to (e.g. /community). */
  href: string;
  label: string;
  items: DropdownItem[];
  /** Two-column layout when items count exceeds this. Default 5. */
  twoColAfter?: number;
};

/**
 * Hover + click + keyboard-accessible dropdown for a navbar item that
 * also has a destination page. The trigger is a Link (so click =
 * navigate to hub), the dropdown opens on hover and on focus-within,
 * closes on Esc, click-outside, and route change.
 *
 * Items are passed in — typically sourced from the same data file the
 * destination page itself uses. Add an entry to that data file and
 * both the hub page and the dropdown stay in sync.
 */
export function NavDropdown({
  href,
  label,
  items,
  twoColAfter = 5,
}: NavDropdownProps) {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const containerRef = useRef<HTMLLIElement>(null);
  const pathname = usePathname();

  const handleEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(true);
  };

  const handleLeave = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  };

  // Close on route change.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Close on Esc + click-outside.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onClickOutside);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onClickOutside);
    };
  }, [open]);

  const useTwoCol = items.length > twoColAfter;

  return (
    <li
      ref={containerRef}
      className="relative"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onFocus={handleEnter}
      onBlur={(e) => {
        // Only close if focus has moved outside the entire dropdown container.
        if (
          containerRef.current &&
          !containerRef.current.contains(e.relatedTarget as Node)
        ) {
          handleLeave();
        }
      }}
    >
      <Link
        href={href}
        aria-haspopup="true"
        aria-expanded={open}
        className="inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-neutral-600 transition-colors hover:bg-neutral-50 hover:text-rhino-700"
      >
        {label}
        <ChevronDown
          className={`size-3.5 text-neutral-400 transition-transform duration-150 ${open ? "rotate-180" : ""}`}
          aria-hidden
        />
      </Link>

      {/* Dropdown panel — pt-2 leaves a hover-bridge so cursor moving
          from the trigger to the panel doesn't fall into a gap and
          close the menu. */}
      <div
        className={`absolute left-0 top-full pt-2 transition-opacity duration-150 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div
          role="menu"
          aria-label={label}
          className={`overflow-hidden rounded-lg border border-neutral-200 bg-neutral-0 p-2 shadow-lg ${
            useTwoCol ? "w-[640px]" : "w-80"
          }`}
        >
          <ul
            className={useTwoCol ? "grid grid-cols-2 gap-1" : "grid gap-0.5"}
          >
            {items.map((item) => {
              const Icon = item.icon;
              const isExternal = item.external;
              const linkProps = isExternal
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {};
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    {...linkProps}
                    onClick={() => setOpen(false)}
                    role="menuitem"
                    className="group flex gap-3 rounded-md px-3 py-2.5 transition-colors hover:bg-neutral-50 focus-visible:bg-neutral-50"
                  >
                    {Icon && (
                      <span className="mt-0.5 inline-flex size-8 shrink-0 items-center justify-center rounded-md bg-rhino-50 text-rhino-700 transition-colors group-hover:bg-denim-50 group-hover:text-denim-600">
                        <Icon className="size-4" aria-hidden />
                      </span>
                    )}
                    <div className="min-w-0 flex-1">
                      <div className="flex items-baseline gap-2">
                        <p className="font-display text-sm font-semibold text-rhino-700 group-hover:text-denim-700">
                          {item.title}
                        </p>
                        {item.badge && (
                          <span className="rounded-pill bg-yellow-100 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-yellow-700">
                            {item.badge}
                          </span>
                        )}
                      </div>
                      {item.description && (
                        <p className="mt-0.5 line-clamp-2 text-xs leading-relaxed text-neutral-500">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Footer link — "View all X →" — points at the hub itself. */}
          <div className="mt-1 border-t border-neutral-100 pt-1">
            <Link
              href={href}
              onClick={() => setOpen(false)}
              className="block rounded-md px-3 py-2 text-xs font-semibold uppercase tracking-wider text-denim-600 transition-colors hover:bg-denim-50 hover:text-denim-700"
            >
              View all {label.toLowerCase()} →
            </Link>
          </div>
        </div>
      </div>
    </li>
  );
}
