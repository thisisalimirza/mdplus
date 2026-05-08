/**
 * Curated event photos used across marketing pages.
 *
 * The collage is the single hero-sized shot (4000×3000) — used as the
 * background for `<PhotoHero>` on /community and /about.
 *
 * The square photos are individual meetup shots (~1170×1172) — used in
 * `<EventPhotoStrip>` to texture longer sections.
 *
 * Add new photos by dropping JPG/PNG into /public/event-photos/ and
 * registering them here with descriptive alt text.
 */

import type { EventPhoto } from "@/components/marketing/EventPhotoStrip";

export const HERO_COLLAGE = {
  src: "/event-photos/mdpluscollage.jpg",
  alt: "A collage of MDplus member meetups from across the country",
};

export const MEETUP_PHOTOS: EventPhoto[] = [
  {
    src: "/event-photos/IMG_7167.jpg",
    alt: "MDplus members at a community dinner",
  },
  {
    src: "/event-photos/IMG_7168.jpg",
    alt: "Members gathered at an MDplus meetup",
  },
  {
    src: "/event-photos/IMG_7169.jpg",
    alt: "MDplus members at a regional event",
  },
  {
    src: "/event-photos/IMG_7170.jpg",
    alt: "An MDplus group meetup",
  },
  {
    src: "/event-photos/IMG_7171.jpg",
    alt: "Members talking at an MDplus event",
  },
  {
    src: "/event-photos/IMG_7172.jpg",
    alt: "An MDplus meetup",
  },
  {
    src: "/event-photos/IMG_7173.jpg",
    alt: "Members at an MDplus dinner",
  },
  {
    src: "/event-photos/IMG_4221.JPG",
    alt: "An early MDplus gathering",
  },
];
