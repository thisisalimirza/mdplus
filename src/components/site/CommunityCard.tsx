import Link from "next/link";
import type { Community } from "@/data/communities";
import { COMMUNITY_ICON } from "@/lib/community-icons";

const THEMES = [
  {
    card: "hover:border-denim-400 hover:bg-denim-50 hover:shadow-denim-100/60",
    icon: "group-hover:bg-denim-100 group-hover:text-denim-600",
    title: "group-hover:text-denim-700",
  },
  {
    card: "hover:border-yellow-400 hover:bg-yellow-50 hover:shadow-yellow-100/60",
    icon: "group-hover:bg-yellow-100 group-hover:text-yellow-700",
    title: "group-hover:text-yellow-700",
  },
  {
    card: "hover:border-rhino-400 hover:bg-rhino-50 hover:shadow-rhino-100/60",
    icon: "group-hover:bg-rhino-100 group-hover:text-rhino-600",
    title: "group-hover:text-rhino-600",
  },
];

type Props = {
  community: Community;
  index: number;
  showMeta?: boolean;
};

export function CommunityCard({ community: c, index, showMeta = false }: Props) {
  const Icon = COMMUNITY_ICON[c.slug];
  const theme = THEMES[index % 3];

  return (
    <Link
      href={`/community/${c.slug}`}
      className={`group block rounded-lg border border-neutral-200 bg-neutral-0 p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg ${theme.card}`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <span
            className={`inline-flex size-10 items-center justify-center rounded-md bg-rhino-50 text-rhino-700 transition-colors duration-200 ${theme.icon}`}
          >
            {Icon && <Icon className="size-5" aria-hidden />}
          </span>
          <h3
            className={`font-display text-xl font-bold text-rhino-700 transition-colors duration-200 ${theme.title}`}
          >
            {c.name}
          </h3>
        </div>
        {showMeta && c.memberCount && (
          <span className="shrink-0 rounded-pill bg-yellow-50 px-2.5 py-0.5 text-xs font-semibold text-yellow-700">
            {c.memberCount}
          </span>
        )}
      </div>
      <p className="mt-3 text-sm leading-relaxed text-neutral-600">{c.tagline}</p>
      {showMeta && (
        <p className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-neutral-500">
          <span className="text-neutral-400">#</span>
          {c.slackChannel}
        </p>
      )}
    </Link>
  );
}
