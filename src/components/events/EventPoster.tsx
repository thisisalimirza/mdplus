"use client";

import { useEffect, useId, useState } from "react";
import Image from "next/image";
import { Expand, X } from "lucide-react";

type EventPosterProps = {
  src: string;
  alt: string;
  /** Full-resolution URL for the lightbox (defaults to src). */
  fullSrc?: string;
  priority?: boolean;
  className?: string;
};

export function EventPoster({
  src,
  alt,
  fullSrc,
  priority = false,
  className = "",
}: EventPosterProps) {
  const [open, setOpen] = useState(false);
  const titleId = useId();
  const lightboxSrc = fullSrc ?? src;

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <div className={`relative bg-neutral-100 ${className}`}>
        <div className="relative mx-auto flex max-h-[min(70vh,720px)] w-full items-center justify-center px-4 py-6 md:px-8 md:py-10">
          <Image
            src={src}
            alt={alt}
            width={1200}
            height={1200}
            priority={priority}
            className="h-auto max-h-[min(70vh,720px)] w-auto max-w-full object-contain"
            sizes="(max-width: 768px) 100vw, 900px"
          />
        </div>
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="absolute bottom-4 right-4 inline-flex items-center gap-1.5 rounded-md bg-neutral-900/80 px-3 py-2 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-neutral-900"
        >
          <Expand className="size-3.5" aria-hidden />
          View full poster
        </button>
      </div>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-950/90 p-4 md:p-8"
          onClick={() => setOpen(false)}
        >
          <p id={titleId} className="sr-only">
            {alt || "Event poster"}
          </p>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="absolute top-4 right-4 z-10 inline-flex size-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            aria-label="Close full poster"
          >
            <X className="size-5" aria-hidden />
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={lightboxSrc}
            alt={alt}
            className="max-h-full max-w-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
