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
      {/* Dual-plus mark. viewBox 36×36, arm width 8.
          Centers match the actual logo proportions:
          blue (bottom-left) at (12,23), yellow (top-right) at (24,13).
          Each plus occupies 24×24 of the 36×36 canvas; they share only
          a small corner-arm overlap — matching the real brand mark. */}
      <svg
        viewBox="0 0 36 36"
        className="h-7 w-7 shrink-0"
        aria-hidden
      >
        {/* Blue plus (denim-500) — counter-rotates on hover */}
        <g className="transition-transform duration-300 [transform-origin:12px_23px] group-hover:[transform:rotate(-90deg)]">
          <rect x="0" y="19" width="24" height="8" rx="1.5" fill="#1D7BBD" />
          <rect x="8" y="11" width="8" height="24" rx="1.5" fill="#1D7BBD" />
        </g>
        {/* Yellow plus (yellow-500) — rotates on hover */}
        <g className="transition-transform duration-300 [transform-origin:24px_13px] group-hover:[transform:rotate(90deg)]">
          <rect x="12" y="9" width="24" height="8" rx="1.5" fill="#FFCB21" />
          <rect x="20" y="1" width="8" height="24" rx="1.5" fill="#FFCB21" />
        </g>
      </svg>

      <span className="font-display text-2xl font-bold tracking-tight text-rhino-700">
        MD<span className="text-denim-500">plus</span>
      </span>
    </Link>
  );
}
