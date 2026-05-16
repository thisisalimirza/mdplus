"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Avatar } from "@/components/marketing/Avatar";
import type { HistoricalMember, PastYear } from "@/data/team";

// ── Grouping ──────────────────────────────────────────────────────────────────

type PastGroup = { label: string; members: HistoricalMember[] };

function groupPastMembers(members: HistoricalMember[]): PastGroup[] {
  const groups: PastGroup[] = [];
  const seen = new Set<string>();

  function push(label: string, subset: HistoricalMember[]) {
    if (!subset.length) return;
    groups.push({ label, members: subset });
    subset.forEach((m) => seen.add(m.name));
  }

  // Co-Chairs (role contains "Co-Chair", including "Founder, Co-Chair")
  push(
    "Co-Chairs",
    members.filter((m) => m.role.includes("Co-Chair")),
  );

  // VPs — one group per unique role, preserving data order
  const vpRoles = [
    ...new Set(
      members.filter((m) => m.role.startsWith("VP")).map((m) => m.role.trim()),
    ),
  ];
  for (const role of vpRoles) {
    push(role, members.filter((m) => m.role.trim() === role));
  }

  // Directors — one group per unique role, alphabetical so same-vertical
  // directors always appear together
  const dirRoles = [
    ...new Set(
      members
        .filter((m) => m.role.startsWith("Director"))
        .map((m) => m.role.trim()),
    ),
  ].sort();
  for (const role of dirRoles) {
    push(role, members.filter((m) => m.role.trim() === role));
  }

  // Advisors
  push(
    "Advisors",
    members.filter((m) => m.role.startsWith("Advisor")),
  );

  // Anything not yet categorised (e.g. "Committee Chair, Crypto")
  push(
    "Other",
    members.filter((m) => !seen.has(m.name)),
  );

  return groups;
}

// ── Past years section ────────────────────────────────────────────────────────

export function PastYearsSection({ years }: { years: PastYear[] }) {
  const [openYear, setOpenYear] = useState<string | null>(null);

  return (
    <section className="border-t border-neutral-100 bg-neutral-50 py-20 md:py-28">
      <div className="mx-auto max-w-(--container-max) px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-rhino-500">
            Past leadership
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold text-rhino-700 md:text-4xl">
            The folks who built it.
          </h2>
          <p className="mt-6 text-lg text-neutral-600">
            Past executive teams who shaped what MDplus is today. Many remain
            active members and informal advisors.
          </p>
        </div>

        <div className="mt-12 space-y-3">
          {years.map((yearData) => {
            const isOpen = openYear === yearData.year;
            const groups = groupPastMembers(yearData.members);

            return (
              <div
                key={yearData.year}
                className="overflow-hidden rounded-xl border border-neutral-200 bg-neutral-0"
              >
                {/* Accordion header */}
                <button
                  onClick={() => setOpenYear(isOpen ? null : yearData.year)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left transition-colors hover:bg-neutral-50"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-display text-lg font-bold text-rhino-700">
                      {yearData.year} Executive Team
                    </span>
                    <span className="rounded-full bg-neutral-100 px-2.5 py-0.5 text-xs font-medium text-neutral-500">
                      {yearData.members.length} members
                    </span>
                  </div>
                  <ChevronDown
                    className={`size-5 shrink-0 text-neutral-400 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden
                  />
                </button>

                {/* Expanded content — grouped */}
                {isOpen && (
                  <div className="border-t border-neutral-100 px-6 pb-8 pt-6">
                    <div className="space-y-7">
                      {groups.map((group) => (
                        <div key={group.label}>
                          {/* Group header */}
                          <div className="mb-3 flex items-center gap-3">
                            <span className="text-xs font-semibold uppercase tracking-widest text-neutral-400">
                              {group.label}
                            </span>
                            <div className="h-px flex-1 bg-neutral-100" />
                            <span className="text-xs text-neutral-300">
                              {group.members.length}
                            </span>
                          </div>

                          {/* Member rows */}
                          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                            {group.members.map((member) => (
                              <div
                                key={member.name}
                                className="flex items-center gap-3"
                              >
                                <Avatar name={member.name} size="sm" />
                                <div className="min-w-0">
                                  <p className="text-sm font-semibold text-rhino-700">
                                    {member.name}
                                  </p>
                                  {member.school && (
                                    <p className="truncate text-xs text-neutral-400">
                                      {member.school}
                                    </p>
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
