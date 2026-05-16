import Link from "next/link";

/**
 * Renders the MDplus logo mark (animated dual-plus SVG) + wordmark text.
 *
 * On hover, the blue plus counter-rotates and the yellow plus rotates —
 * each spinning around its own center for a fun gears-like effect.
 */
export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="MDplus home"
      className={`group inline-flex items-center gap-1.5 ${className}`}
    >
      {/* Dual-plus mark. Two completely separate plus signs — no overlap.
          arm=8, centers at (13,33) [blue, bottom-left] and (33,13) [yellow,
          top-right], separated by 2.5 arm-widths in both axes on a 46×46
          canvas so the nearest arm tips are ~3px apart and never touch. */}
      <svg
        viewBox="0 0 46 46"
        className="h-7 w-7 shrink-0"
        aria-hidden
      >
        {/* Blue plus (denim-500) — counter-rotates on hover */}
        <g className="transition-transform duration-300 [transform-origin:13px_33px] group-hover:[transform:rotate(-90deg)]">
          <rect x="1" y="29" width="24" height="8" rx="2" fill="#1D7BBD" />
          <rect x="9" y="21" width="8" height="24" rx="2" fill="#1D7BBD" />
        </g>
        {/* Yellow plus (yellow-500) — rotates on hover */}
        <g className="transition-transform duration-300 [transform-origin:33px_13px] group-hover:[transform:rotate(90deg)]">
          <rect x="21" y="9" width="24" height="8" rx="2" fill="#FFCB21" />
          <rect x="29" y="1" width="8" height="24" rx="2" fill="#FFCB21" />
        </g>
      </svg>

      <span className="font-display text-2xl font-bold tracking-tight text-rhino-700">
        MD<span className="text-denim-500">plus</span>
      </span>
    </Link>
  );
}
