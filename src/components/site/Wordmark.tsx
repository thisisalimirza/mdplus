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
      {/* Dual-plus mark — recreates the brand icon in SVG so each plus
          can be animated independently. viewBox matches the mark's bounding
          box: blue plus (bottom-left) center at (10,20), yellow (top-right)
          center at (20,10), arm width 7. */}
      <svg
        viewBox="0 0 30 30"
        className="h-7 w-7 shrink-0"
        aria-hidden
      >
        {/* Blue plus (denim-500) — counter-rotates on hover */}
        <g className="transition-transform duration-300 [transform-origin:10px_20px] group-hover:[transform:rotate(-90deg)]">
          <rect x="0" y="16" width="21" height="7" rx="1.5" fill="#1D7BBD" />
          <rect x="7" y="9" width="7" height="21" rx="1.5" fill="#1D7BBD" />
        </g>
        {/* Yellow plus (yellow-500) — rotates on hover */}
        <g className="transition-transform duration-300 [transform-origin:20px_10px] group-hover:[transform:rotate(90deg)]">
          <rect x="9" y="7" width="21" height="7" rx="1.5" fill="#FFCB21" />
          <rect x="17" y="0" width="7" height="21" rx="1.5" fill="#FFCB21" />
        </g>
      </svg>

      <span className="font-display text-2xl font-bold tracking-tight text-rhino-700">
        MD<span className="text-denim-500">plus</span>
      </span>
    </Link>
  );
}
