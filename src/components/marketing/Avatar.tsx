import Image from "next/image";

type AvatarSize = "sm" | "md" | "lg" | "xl";

type AvatarProps = {
  name: string;
  src?: string;
  size?: AvatarSize;
  className?: string;
};

const SIZE_CLASS: Record<AvatarSize, string> = {
  sm: "size-8 text-xs",
  md: "size-12 text-sm",
  lg: "size-20 text-xl",
  xl: "size-28 text-2xl",
};

const SIZE_PX: Record<AvatarSize, number> = {
  sm: 32,
  md: 48,
  lg: 80,
  xl: 112,
};

/**
 * Brand-tied palette for initials avatars. Deterministic per-name
 * selection so the same person always gets the same swatch — visual
 * identity is part of how you remember someone.
 */
const COLORS = [
  "bg-denim-100 text-denim-700",
  "bg-yellow-200 text-yellow-800",
  "bg-rhino-100 text-rhino-700",
  "bg-denim-50 text-denim-700",
] as const;

function initialsFor(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

function colorFor(name: string): string {
  // Deterministic hash → color index. SSR-safe, no Math.random.
  const hash = [...name].reduce((acc, ch) => acc + ch.charCodeAt(0), 0);
  return COLORS[hash % COLORS.length];
}

/**
 * Person avatar. Uses next/image for real photos, falls back to
 * deterministic colored initials when no `src` is provided.
 */
export function Avatar({ name, src, size = "md", className = "" }: AvatarProps) {
  const baseRing = "ring-1 ring-rhino-100";
  const sizeClasses = SIZE_CLASS[size];

  if (src) {
    return (
      <div
        className={`relative overflow-hidden rounded-full ${baseRing} ${sizeClasses} ${className}`}
      >
        <Image
          src={src}
          alt={name}
          width={SIZE_PX[size]}
          height={SIZE_PX[size]}
          className="size-full object-cover"
        />
      </div>
    );
  }

  return (
    <div
      aria-label={name}
      className={`flex shrink-0 items-center justify-center rounded-full font-display font-semibold ${colorFor(name)} ${baseRing} ${sizeClasses} ${className}`}
    >
      {initialsFor(name)}
    </div>
  );
}
