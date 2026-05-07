import Link from "next/link";

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="MDplus home"
      className={`group inline-flex items-baseline font-display text-2xl font-bold tracking-tight ${className}`}
    >
      <span className="text-rhino-700">MD</span>
      <span
        aria-hidden
        className="text-yellow-500 transition-transform duration-200 group-hover:rotate-90"
      >
        +
      </span>
      <span className="text-rhino-700">plus</span>
    </Link>
  );
}
