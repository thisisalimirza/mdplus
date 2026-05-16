"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Avatar } from "@/components/marketing/Avatar";
import type { PastYear } from "@/data/team";

export function PastYearsSection({ years }: { years: PastYear[] }) {
  const [openYear, setOpenYear] = useState<string | null>(null);

  return (
    <section className="border-t border-neutral-100 bg-neutral-50 py-20 md:py-28">
      <div className="mx-auto max-w-(--container-max) px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
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
        </div>

        <div className="mt-12 space-y-3">
          {years.map((yearData) => {
            const isOpen = openYear === yearData.year;
            return (
              <div
                key={yearData.year}
                className="overflow-hidden rounded-xl border border-neutral-200 bg-neutral-0"
              >
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

                {isOpen && (
                  <div className="border-t border-neutral-100 px-6 py-6">
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      {yearData.members.map((member) => (
                        <div key={member.name} className="flex items-center gap-3">
                          <Avatar name={member.name} size="sm" />
                          <div className="min-w-0">
                            <p className="text-sm font-semibold text-rhino-700">
                              {member.name}
                            </p>
                            <p className="truncate text-xs text-neutral-400">
                              {member.role}
                              {member.school ? ` · ${member.school}` : ""}
                            </p>
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
