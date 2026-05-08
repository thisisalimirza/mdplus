"use client";

import { useEffect, type ReactNode } from "react";
import { getCalApi } from "@calcom/embed-react";

export type BookCallVariant =
  | "primary"
  | "yellow"
  | "dark"
  | "outline"
  | "ghost";
export type BookCallSize = "default" | "lg";

type BookCallButtonProps = {
  /** Cal link without protocol — e.g. "mdplus/partner-inquiry". */
  link: string;
  variant?: BookCallVariant;
  size?: BookCallSize;
  children: ReactNode;
  className?: string;
};

const VARIANT_CLASSES: Record<BookCallVariant, string> = {
  primary:
    "bg-denim-500 text-white shadow-sm hover:bg-denim-600 active:bg-denim-700",
  yellow:
    "bg-yellow-500 text-rhino-900 shadow-sm hover:bg-yellow-400",
  dark:
    "bg-rhino-700 text-white shadow-sm hover:bg-rhino-600",
  outline:
    "border border-white/20 bg-white/5 text-white hover:bg-white/10",
  ghost:
    "text-denim-600 hover:text-denim-700",
};

const SIZE_CLASSES: Record<BookCallSize, string> = {
  default: "px-5 py-3 text-sm",
  lg: "px-6 py-3.5 text-base",
};

// Ghost variant uses no padding — it's a text link, not a button.
const VARIANT_OVERRIDES_SIZE: Record<BookCallVariant, boolean> = {
  primary: false,
  yellow: false,
  dark: false,
  outline: false,
  ghost: true,
};

/**
 * Cal.com booking trigger. Opens a popup with the configured event
 * link when clicked. Brand colors (denim primary, rhino dark mode)
 * are applied to the Cal popup via CSS variables.
 *
 * Usage:
 *   <BookCallButton link="mdplus/partner-inquiry" variant="yellow" size="lg">
 *     Book a 15-minute call
 *   </BookCallButton>
 *
 * Note: configuring `cal("ui", ...)` runs on every component mount —
 * Cal handles repeated calls idempotently, so multiple BookCallButton
 * instances on the same page are fine.
 */
export function BookCallButton({
  link,
  variant = "primary",
  size = "default",
  children,
  className = "",
}: BookCallButtonProps) {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi();
      cal("ui", {
        cssVarsPerTheme: {
          light: {
            "cal-brand": "#1D7BBD", // denim-500
          },
          dark: {
            "cal-brand": "#1D7BBD",
          },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  const isGhost = VARIANT_OVERRIDES_SIZE[variant];
  const baseClasses = isGhost
    ? "inline-flex items-center gap-1 text-sm font-semibold transition-colors"
    : `inline-flex items-center justify-center gap-1.5 rounded-md font-semibold transition-colors ${SIZE_CLASSES[size]}`;

  return (
    <button
      type="button"
      data-cal-link={link}
      data-cal-config='{"layout":"month_view"}'
      className={`${baseClasses} ${VARIANT_CLASSES[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
