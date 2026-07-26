import Image from "next/image";
import Link from "next/link";

/**
 * Renders the official full-color MDplus logo for light backgrounds.
 */
export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="MDplus home"
      className={`inline-flex items-center ${className}`}
    >
      <Image
        src="/MDplusBrandKit/A Logo for White Background (Use on %23FFFFFF).png"
        alt=""
        width={2908}
        height={820}
        className="h-8 w-auto"
        sizes="114px"
      />
    </Link>
  );
}
