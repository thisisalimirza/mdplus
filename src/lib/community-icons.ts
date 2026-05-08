import {
  Briefcase,
  Brain,
  Coins,
  Scale,
  FlaskConical,
  Cpu,
  Microscope,
  Palette,
  type LucideIcon,
} from "lucide-react";

/**
 * One source of truth for sub-community icons. Used on the homepage,
 * /community overview, and /community/[slug] pages so the visual cue
 * for "this is the Consulting community" looks the same everywhere.
 *
 * Eight active verticals (2025-26). Blockchain has been retired —
 * channel last active August 2024 — so it intentionally has no icon
 * here.
 */
export const COMMUNITY_ICON: Record<string, LucideIcon> = {
  data: Brain,
  vc: Coins,
  biotech: FlaskConical,
  consulting: Briefcase,
  policy: Scale,
  devices: Cpu,
  research: Microscope,
  design: Palette,
};
