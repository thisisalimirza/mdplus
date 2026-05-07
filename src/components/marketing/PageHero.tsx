import { ReactNode } from "react";

type PageHeroProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
  variant?: "yellow" | "neutral" | "rhino";
};

const VARIANT_STYLES = {
  yellow: "bg-yellow-50",
  neutral: "bg-neutral-50",
  rhino: "bg-rhino-700 text-white",
} as const;

export function PageHero({
  eyebrow,
  title,
  description,
  children,
  variant = "yellow",
}: PageHeroProps) {
  const isDark = variant === "rhino";
  return (
    <section
      className={`relative overflow-hidden ${VARIANT_STYLES[variant]}`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(29,123,189,0.08),_transparent_60%)]"
      />
      <div className="relative mx-auto max-w-(--container-max) px-6 pt-20 pb-16 md:pt-28 md:pb-20">
        {eyebrow && (
          <p
            className={`text-sm font-semibold uppercase tracking-widest ${
              isDark ? "text-yellow-500" : "text-denim-600"
            }`}
          >
            {eyebrow}
          </p>
        )}
        <h1
          className={`mt-4 font-display text-4xl font-bold leading-[1.1] tracking-tight md:text-6xl ${
            isDark ? "text-white" : "text-rhino-700"
          }`}
        >
          {title}
        </h1>
        {description && (
          <div
            className={`mt-6 max-w-2xl text-lg leading-relaxed md:text-xl ${
              isDark ? "text-rhino-100/90" : "text-neutral-600"
            }`}
          >
            {description}
          </div>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
