import {
  Briefcase,
  Brain,
  Coins,
  Scale,
  Network,
  type LucideIcon,
} from "lucide-react";

/**
 * One source of truth for sub-community icons. Used on the homepage,
 * /community overview, and /community/[slug] pages so the visual cue
 * for "this is the Consulting community" looks the same everywhere.
 */
export const COMMUNITY_ICON: Record<string, LucideIcon> = {
  consulting: Briefcase,
  data: Brain,
  vc: Coins,
  policy: Scale,
  blockchain: Network,
};
