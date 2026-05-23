"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { Avatar } from "@/components/marketing/Avatar";
import type { CurrentMember, DirectorVertical } from "@/data/team";

// ── Fallback avatar helpers (for no-photo cards) ──────────────────────────────

const FALLBACK_COLORS = [
  { bg: "bg-denim-200", text: "text-denim-800" },
  { bg: "bg-yellow-200", text: "text-yellow-900" },
  { bg: "bg-rhino-200", text: "text-rhino-800" },
  { bg: "bg-denim-100", text: "text-denim-700" },
] as const;

function initialsFor(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase() ?? "")
    .join("");
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
      className="group flex flex-col items-center text-center focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-denim-500"
    >
      {/* Circular photo */}
      <div className="relative size-32 overflow-hidden rounded-full shadow-md ring-2 ring-white transition-all duration-300 group-hover:shadow-xl group-hover:ring-denim-200 sm:size-36 lg:size-40">
        {member.imageSrc ? (
          <Image
            src={member.imageSrc}
            alt={member.name}
            fill
            sizes="(max-width: 640px) 128px, (max-width: 1024px) 144px, 160px"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div
            className={`absolute inset-0 flex items-center justify-center ${fallback.bg}`}
          >
            <span className={`font-display text-4xl font-bold ${fallback.text}`}>
              {initialsFor(member.name)}
            </span>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="mt-4 px-1">
        <span
          className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${badge.className}`}
        >
          {badge.label}
        </span>
        <h3 className="mt-2 font-display text-sm font-bold leading-snug text-rhino-700">
          {member.name}
        </h3>
        {member.school && (
          <p className="mt-0.5 text-xs leading-snug text-neutral-500">
            {member.school}
          </p>
        )}
        <p className="mt-2 text-xs font-semibold text-denim-500 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          View profile →
        </p>
      </div>
    </button>
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
              <Avatar
                name={member.name}
                src={member.imageSrc}
                size="xl"
                className="shrink-0"
              />
              <div className="min-w-0 pt-1">
                <span
                  className={`rounded-full px-3 py-0.5 text-xs font-semibold ${badge.className}`}
                >
                  {badge.label}
                </span>
                <h2 className="mt-2 font-display text-2xl font-bold text-rhino-700">
                  {member.name}
                </h2>
                <p className="mt-0.5 text-sm font-medium text-denim-600">
                  {member.role}
                </p>
                {member.school && (
                  <p className="mt-0.5 text-xs text-neutral-500">
                    {member.school}
                  </p>
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
                <p className="text-sm leading-relaxed text-neutral-700">
                  {member.bio}
                </p>
              </div>
            )}
            {member.plus && (
              <div className="px-8 py-6">
                <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-yellow-700">
                  My Plus
                </p>
                <blockquote className="border-l-2 border-yellow-400 pl-4">
                  <p className="text-sm leading-relaxed text-neutral-700">
                    {member.plus}
                  </p>
                </blockquote>
              </div>
            )}
            {member.whyJoined && (
              <div className="px-8 py-6">
                <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-neutral-400">
                  Why I Joined MD+
                </p>
                <p className="text-sm italic leading-relaxed text-neutral-600">
                  {member.whyJoined}
                </p>
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

      {/* Flat grid */}
      <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {filtered.map((m) => (
          <MemberCard key={m.name} member={m} onClick={() => setSelected(m)} />
        ))}
      </div>

      {/* Profile modal */}
      {selected && <MemberModal member={selected} onClose={handleClose} />}
    </>
  );
}
