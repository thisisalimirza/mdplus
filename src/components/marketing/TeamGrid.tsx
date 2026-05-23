"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { Avatar } from "@/components/marketing/Avatar";
import type { CurrentMember, DirectorVertical } from "@/data/team";
import { DIRECTOR_VERTICALS } from "@/data/team";

// ── Fallback avatar helpers (for no-photo cards) ──────────────────────────────

const FALLBACK_COLORS = [
  { bg: "bg-denim-200", text: "text-denim-800" },
  { bg: "bg-yellow-200", text: "text-yellow-900" },
  { bg: "bg-rhino-200", text: "text-rhino-800" },
  { bg: "bg-denim-100", text: "text-denim-700" },
] as const;

function initialsFor(name: string) {
  return name.split(/\s+/).filter(Boolean).slice(0, 2).map((p) => p[0]?.toUpperCase() ?? "").join("");
}

function fallbackColor(name: string) {
  const hash = [...name].reduce((acc, ch) => acc + ch.charCodeAt(0), 0);
  return FALLBACK_COLORS[hash % FALLBACK_COLORS.length];
}

// ── Filter config ─────────────────────────────────────────────────────────────

type FilterValue = "all" | "leadership" | DirectorVertical;

const FILTERS: { label: string; value: FilterValue }[] = [
  { label: "All", value: "all" },
  { label: "Leadership", value: "leadership" },
  { label: "AI & Data", value: "AI & Data Science" },
  { label: "Health Policy", value: "Health Policy" },
  { label: "Venture Capital", value: "Venture Capital" },
  { label: "Devices", value: "Medical Devices" },
  { label: "Biotech", value: "Biotech" },
  { label: "Research", value: "Research" },
  { label: "Consulting", value: "Consulting" },
  { label: "Alumni", value: "Alumni Engagement" },
];

// ── Helpers ───────────────────────────────────────────────────────────────────

function getBadge(m: CurrentMember): { label: string; className: string } {
  if (m.tier === "co-chair") {
    return { label: "Co-Chair", className: "bg-yellow-200 text-yellow-800" };
  }
  if (m.tier === "vp") {
    return {
      label: m.role.replace("VP of ", ""),
      className: "bg-denim-100 text-denim-700",
    };
  }
  const label = (m.vertical ?? "Director")
    .replace(" & Data Science", " & Data")
    .replace(" Engagement", "")
    .replace("Medical ", "");
  return { label, className: "bg-neutral-100 text-neutral-600" };
}

function getModalHeaderBg(tier: string): string {
  if (tier === "co-chair") return "bg-yellow-50";
  if (tier === "vp") return "bg-denim-50/40";
  return "bg-neutral-50";
}

// ── Grouping ──────────────────────────────────────────────────────────────────

type Section = { label: string; members: CurrentMember[] };

/**
 * Returns grouped sections for "all" and "leadership" filters.
 * Returns null for vertical filters — those render as a flat grid.
 */
function buildSections(members: CurrentMember[], filter: FilterValue): Section[] | null {
  if (filter !== "all" && filter !== "leadership") return null;

  const sections: Section[] = [];

  // Co-Chairs first
  const chairs = members.filter((m) => m.tier === "co-chair");
  if (chairs.length) sections.push({ label: "Co-Chairs", members: chairs });

  // VPs grouped by their exact role — Set preserves insertion order (data order)
  const vpRoles = [
    ...new Set(members.filter((m) => m.tier === "vp").map((m) => m.role)),
  ];
  for (const role of vpRoles) {
    const group = members.filter((m) => m.role === role);
    if (group.length) sections.push({ label: role, members: group });
  }

  // Directors by vertical — only when showing all
  if (filter === "all") {
    for (const vertical of DIRECTOR_VERTICALS) {
      const group = members.filter((m) => m.vertical === vertical);
      if (group.length) sections.push({ label: vertical, members: group });
    }
  }

  return sections;
}

// ── Card ──────────────────────────────────────────────────────────────────────

function MemberCard({
  member,
  onClick,
}: {
  member: CurrentMember;
  onClick: () => void;
}) {
  const badge = getBadge(member);
  const fallback = fallbackColor(member.name);

  return (
    <button
      onClick={onClick}
      className="group relative aspect-[3/4] w-full overflow-hidden rounded-xl text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-denim-500"
    >
      {/* Background: photo or colored initials */}
      {member.imageSrc ? (
        <Image
          src={member.imageSrc}
          alt={member.name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <div className={`absolute inset-0 flex items-center justify-center ${fallback.bg}`}>
          <span className={`font-display text-5xl font-bold ${fallback.text}`}>
            {initialsFor(member.name)}
          </span>
        </div>
      )}

      {/* Persistent gradient — stronger at bottom for legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-black/20" />

      {/* Role badge — top left */}
      <div className="absolute left-3 top-3">
        <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${badge.className}`}>
          {badge.label}
        </span>
      </div>

      {/* Name + school — bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <h3 className="font-display text-sm font-bold leading-tight text-white">
          {member.name}
        </h3>
        {member.school && (
          <p className="mt-0.5 text-xs leading-snug text-white/65">{member.school}</p>
        )}
        <p className="mt-2 text-xs font-semibold text-white/0 transition-colors duration-200 group-hover:text-white/80">
          View profile →
        </p>
      </div>
    </button>
  );
}

// ── Grouped grid ──────────────────────────────────────────────────────────────

type GridItem =
  | { kind: "label"; label: string; idx: number }
  | { kind: "card"; member: CurrentMember };

function GroupedGrid({
  sections,
  onSelect,
}: {
  sections: Section[];
  onSelect: (m: CurrentMember) => void;
}) {
  const items: GridItem[] = sections.flatMap((s, i) => [
    { kind: "label" as const, label: s.label, idx: i },
    ...s.members.map((m) => ({ kind: "card" as const, member: m })),
  ]);

  return (
    <div className="mt-8 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
      {items.map((item) =>
        item.kind === "label" ? (
          <div
            key={`label-${item.label}`}
            className={`col-span-full flex items-center gap-3${item.idx > 0 ? " mt-2" : ""}`}
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-neutral-400">
              {item.label}
            </span>
            <div className="h-px flex-1 bg-neutral-100" />
          </div>
        ) : (
          <MemberCard
            key={item.member.name}
            member={item.member}
            onClick={() => onSelect(item.member)}
          />
        )
      )}
    </div>
  );
}

// ── Modal ─────────────────────────────────────────────────────────────────────

function MemberModal({
  member,
  onClose,
}: {
  member: CurrentMember;
  onClose: () => void;
}) {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    panelRef.current?.focus();
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  const badge = getBadge(member);
  const headerBg = getModalHeaderBg(member.tier);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
      <div
        className="absolute inset-0 bg-rhino-900/70 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden
      />
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label={`${member.name} profile`}
        tabIndex={-1}
        className="relative z-10 flex max-h-[90vh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl bg-neutral-0 shadow-2xl outline-none"
      >
        <button
          onClick={onClose}
          aria-label="Close profile"
          className="absolute right-4 top-4 z-10 rounded-full bg-white/80 p-1.5 text-neutral-500 backdrop-blur-sm transition-colors hover:bg-neutral-100 hover:text-neutral-800"
        >
          <X className="size-4" />
        </button>

        <div className="overflow-y-auto">
          <div className={`px-8 py-8 ${headerBg}`}>
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
              <Avatar name={member.name} src={member.imageSrc} size="xl" className="shrink-0" />
              <div className="min-w-0 pt-1">
                <span className={`rounded-full px-3 py-0.5 text-xs font-semibold ${badge.className}`}>
                  {badge.label}
                </span>
                <h2 className="mt-2 font-display text-2xl font-bold text-rhino-700">
                  {member.name}
                </h2>
                <p className="mt-0.5 text-sm font-medium text-denim-600">{member.role}</p>
                {member.school && (
                  <p className="mt-0.5 text-xs text-neutral-500">{member.school}</p>
                )}
              </div>
            </div>
          </div>

          <div className="divide-y divide-neutral-100">
            {member.bio && (
              <div className="px-8 py-6">
                <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-neutral-400">
                  About
                </p>
                <p className="text-sm leading-relaxed text-neutral-700">{member.bio}</p>
              </div>
            )}
            {member.plus && (
              <div className="px-8 py-6">
                <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-yellow-700">
                  My Plus
                </p>
                <blockquote className="border-l-2 border-yellow-400 pl-4">
                  <p className="text-sm leading-relaxed text-neutral-700">{member.plus}</p>
                </blockquote>
              </div>
            )}
            {member.whyJoined && (
              <div className="px-8 py-6">
                <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-neutral-400">
                  Why I Joined MD+
                </p>
                <p className="text-sm italic leading-relaxed text-neutral-600">{member.whyJoined}</p>
              </div>
            )}
            {member.funFact && (
              <div className="px-8 py-6">
                <div className="rounded-xl border border-yellow-100 bg-yellow-50 px-5 py-4">
                  <p className="mb-1.5 text-xs font-semibold uppercase tracking-widest text-yellow-700">
                    Fun Fact
                  </p>
                  <p className="text-sm text-neutral-700">{member.funFact}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ── TeamGrid ──────────────────────────────────────────────────────────────────

export function TeamGrid({ members }: { members: CurrentMember[] }) {
  const [filter, setFilter] = useState<FilterValue>("all");
  const [selected, setSelected] = useState<CurrentMember | null>(null);

  const filtered = members.filter((m) => {
    if (filter === "all") return true;
    if (filter === "leadership") return m.tier !== "director";
    return m.vertical === filter;
  });

  const sections = buildSections(filtered, filter);
  const handleClose = useCallback(() => setSelected(null), []);

  return (
    <>
      {/* Filter pills */}
      <div className="mt-10 flex flex-wrap items-center gap-2">
        {FILTERS.map((f) => (
          <button
            key={f.value}
            onClick={() => setFilter(f.value)}
            className={`rounded-full px-4 py-1.5 text-sm font-semibold transition-colors ${
              filter === f.value
                ? "bg-rhino-700 text-white"
                : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
            }`}
          >
            {f.label}
          </button>
        ))}
        <span className="ml-auto text-sm text-neutral-400">
          {filtered.length} member{filtered.length !== 1 ? "s" : ""}
        </span>
      </div>

      {/* Grouped or flat grid */}
      {sections ? (
        <GroupedGrid sections={sections} onSelect={setSelected} />
      ) : (
        <div className="mt-8 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
          {filtered.map((m) => (
            <MemberCard key={m.name} member={m} onClick={() => setSelected(m)} />
          ))}
        </div>
      )}

      {/* Profile modal */}
      {selected && <MemberModal member={selected} onClose={handleClose} />}
    </>
  );
}
