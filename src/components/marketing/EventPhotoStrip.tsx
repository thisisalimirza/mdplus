import Image from "next/image";

export type EventPhoto = {
  src: string;
  alt: string;
};

type EventPhotoStripProps = {
  photos: EventPhoto[];
  /** Layout: "row" = 4 across, "mosaic" = mixed sizes (alternating tall/wide). */
  layout?: "row" | "mosaic";
};

/**
 * A horizontal strip of event photos. Use to inject "real members,
 * real meetups" texture into long marketing pages. Photos are cropped
 * square by default with subtle hover treatment.
 */
export function EventPhotoStrip({
  photos,
  layout = "row",
}: EventPhotoStripProps) {
  if (layout === "mosaic") {
    // First photo larger (col-span-2 row-span-2), the rest 1:1.
    return (
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {photos.map((photo, i) => (
          <div
            key={photo.src}
            className={`relative aspect-square overflow-hidden rounded-lg bg-neutral-100 ${
              i === 0 ? "row-span-2 sm:col-span-2 sm:aspect-square" : ""
            }`}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(max-width: 640px) 50vw, 25vw"
              className="object-cover transition-transform duration-500 hover:scale-[1.04]"
            />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
      {photos.map((photo) => (
        <div
          key={photo.src}
          className="relative aspect-square overflow-hidden rounded-lg bg-neutral-100"
        >
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover transition-transform duration-500 hover:scale-[1.04]"
          />
        </div>
      ))}
    </div>
  );
}
