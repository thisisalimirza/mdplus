"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { X } from "lucide-react";
import { Avatar } from "@/components/marketing/Avatar";
import type { CurrentMember, DirectorVertical } from "@/data/team";
import { DIRECTOR_VERTICALS } from "@/data/team";

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

function getCardAccent(tier: string): string {
  if (tier === "co-chair") return "bg-yellow-50 group-hover:bg-yellow-100";
  if (tier === "vp") return "bg-denim-50/50 group-hover:bg-denim-50";
  return "bg-neutral-50 group-hover:bg-neutral-100";
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
  const accent = getCardAccent(member.tier);

  return (
    <button
      onClick={onClick}
      className="group flex w-full cursor-pointer flex-col overflow-hidden rounded-xl border border-neutral-200 bg-neutral-0 text-left transition-all duration-200 hover:-translate-y-0.5 hover:border-denim-300 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-denim-500"
    >
      {/* Avatar area */}
      <div
        className={`flex flex-col items-center gap-3 px-6 py-8 transition-colors duration-200 ${accent}`}
      >
        <Avatar name={member.name} src={member.imageSrc} size="xl" />
        <span className={`rounded-full px-3 py-0.5 text-xs font-semibold ${badge.className}`}>
          {badge.label}
        </span>
      </div>

      {/* Text area */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-base font-bold text-rhino-700 group-hover:text-denim-700">
          {member.name}
        </h3>
        {member.school && (
          <p className="mt-0.5 text-xs leading-snug text-neutral-400">{member.school}</p>
        )}
        {member.bio && (
          <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-neutral-600">
            {member.bio}
          </p>
        )}
        <p className="mt-4 text-xs font-semibold text-denim-500 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          View profile →
        </p>
      </div>
    </button>
  );
}

// ── Grouped grid ──────────────────────────────────────────────────────────────

function GroupedGrid({
  sections,
  onSelect,
}: {
  sections: Section[];
  onSelect: (m: CurrentMember) => void;
}) {
  return (
    <div className="mt-8 space-y-10">
      {sections.map((section) => (
        <div key={section.label}>
          <div className="mb-5 flex items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-neutral-400">
              {section.label}
            </span>
            <div className="h-px flex-1 bg-neutral-100" />
            <span className="text-xs text-neutral-300">{section.members.length}</span>
          </div>
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
            {section.members.map((m) => (
              <MemberCard key={m.name} member={m} onClick={() => onSelect(m)} />
            ))}
          </div>
        </div>
      ))}
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
