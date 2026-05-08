import Image from "next/image";
import { ReactNode } from "react";

type PhotoHeroProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
  /** Hero photo. Should be ~1600×900 or 4:3 for best framing. */
  imageSrc: string;
  imageAlt: string;
  /** Where the image's focal point should anchor when cropped. */
  imagePosition?: "top" | "center" | "bottom";
};

/**
 * Hero with a full-bleed photo background, dark rhino overlay, yellow
 * accent line, and white text. Used on /community and /about to inject
 * "this is a real community of real people" texture before the marketing
 * copy starts.
 */
export function PhotoHero({
  eyebrow,
  title,
  description,
  children,
  imageSrc,
  imageAlt,
  imagePosition = "center",
}: PhotoHeroProps) {
  const objectPosition =
    imagePosition === "top"
      ? "object-top"
      : imagePosition === "bottom"
        ? "object-bottom"
        : "object-center";

  return (
    <section className="relative overflow-hidden bg-rhino-900">
      {/* Background photo */}
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className={`object-cover ${objectPosition} opacity-60`}
      />

      {/* Gradient overlay — bottom-left rhino, fading up so the photo
          breathes at the top right */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-tr from-rhino-900/95 via-rhino-900/70 to-rhino-900/30"
      />

      {/* Yellow accent line, top-left */}
      <div
        aria-hidden
        className="absolute left-0 top-0 h-1.5 w-32 bg-yellow-500 md:w-48"
      />

      <div className="relative mx-auto max-w-(--container-max) px-6 pt-24 pb-20 md:pt-32 md:pb-24">
        {eyebrow && (
          <p className="text-sm font-semibold uppercase tracking-widest text-yellow-500">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-[1.1] tracking-tight text-white md:text-6xl">
          {title}
        </h1>
        {description && (
          <div className="mt-6 max-w-2xl text-lg leading-relaxed text-rhino-100/90 md:text-xl">
            {description}
          </div>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
