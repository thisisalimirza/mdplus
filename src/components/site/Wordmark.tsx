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
      {/* Dual-plus mark. arm=8, 44×44 canvas.
          Blue center (13,31), yellow center (31,13) — 2px gap between
          nearest arm tips, no overlap. */}
      <svg
        viewBox="0 0 44 44"
        className="h-7 w-7 shrink-0"
        aria-hidden
      >
        {/* Blue plus (denim-500) — counter-rotates on hover */}
        <g className="transition-transform duration-300 [transform-origin:13px_31px] group-hover:[transform:rotate(-90deg)]">
          <rect x="1" y="27" width="24" height="8" rx="2" fill="#1D7BBD" />
          <rect x="9" y="19" width="8" height="24" rx="2" fill="#1D7BBD" />
        </g>
        {/* Yellow plus (yellow-500) — rotates on hover */}
        <g className="transition-transform duration-300 [transform-origin:31px_13px] group-hover:[transform:rotate(90deg)]">
          <rect x="19" y="9" width="24" height="8" rx="2" fill="#FFCB21" />
          <rect x="27" y="1" width="8" height="24" rx="2" fill="#FFCB21" />
        </g>
      </svg>

      <span className="font-display text-2xl font-bold tracking-tight text-rhino-700">
        MD<span className="text-denim-500">plus</span>
      </span>
    </Link>
  );
}
