"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Search, FileText, BookOpen, Mic, Calendar, FlaskConical, X } from "lucide-react";

export type ArchiveItem = {
  id: string;
  type: "article" | "publication" | "journal-club" | "podcast" | "event";
  title: string;
  date: string | null;
  summary: string | null;
  href: string;
  badge: string | null;
  meta: string | null;
};

const TYPE_CONFIG = {
  article: {
    label: "Article",
    icon: FileText,
    style: "bg-denim-50 text-denim-700",
  },
  publication: {
    label: "Publication",
    icon: FlaskConical,
    style: "bg-yellow-50 text-yellow-700",
  },
  "journal-club": {
    label: "Journal Club",
    icon: BookOpen,
    style: "bg-rhino-50 text-rhino-700",
  },
  podcast: {
    label: "Podcast",
    icon: Mic,
    style: "bg-neutral-100 text-neutral-700",
  },
  event: {
    label: "Event",
    icon: Calendar,
    style: "bg-green-50 text-green-700",
  },
} as const;

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function normalize(item: ArchiveItem, query: string) {
  const q = query.toLowerCase();
  return (
    item.title?.toLowerCase().includes(q) ||
    item.summary?.toLowerCase().includes(q) ||
    item.badge?.toLowerCase().includes(q) ||
    item.meta?.toLowerCase().includes(q)
  );
}

const TYPE_FILTERS = [
  { value: "all", label: "All" },
  { value: "article", label: "Articles" },
  { value: "publication", label: "Publications" },
  { value: "journal-club", label: "Journal Club" },
  { value: "podcast", label: "Podcast" },
  { value: "event", label: "Events" },
] as const;

type FilterValue = (typeof TYPE_FILTERS)[number]["value"];

export function ArchiveSearch({ items }: { items: ArchiveItem[] }) {
  const [query, setQuery] = useState("");
  const [activeType, setActiveType] = useState<FilterValue>("all");

  const results = useMemo(() => {
    return items.filter((item) => {
      const matchesType = activeType === "all" || item.type === activeType;
      const matchesQuery = query.trim() === "" || normalize(item, query);
      return matchesType && matchesQuery;
    });
  }, [items, query, activeType]);

  return (
    <div>
      {/* Search input */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-neutral-400" aria-hidden />
        <input
          type="search"
          placeholder="Search everything…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full rounded-xl border border-neutral-200 bg-neutral-0 py-3.5 pl-11 pr-10 text-base text-neutral-700 placeholder:text-neutral-400 focus:border-denim-400 focus:outline-none focus:ring-2 focus:ring-denim-100"
        />
        {query && (
          <button
            onClick={() => setQuery("")}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600"
            aria-label="Clear search"
          >
            <X className="size-4" />
          </button>
        )}
      </div>

      {/* Type filters */}
      <div className="mt-4 flex flex-wrap gap-2">
        {TYPE_FILTERS.map((f) => (
          <button
            key={f.value}
            onClick={() => setActiveType(f.value)}
            className={`rounded-full px-4 py-1.5 text-sm font-semibold transition-colors ${
              activeType === f.value
                ? "bg-rhino-700 text-white"
                : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Count */}
      <p className="mt-6 text-sm text-neutral-400">
        {results.length} {results.length === 1 ? "result" : "results"}
        {query && <span> for &ldquo;{query}&rdquo;</span>}
      </p>

      {/* Results */}
      {results.length === 0 ? (
        <div className="mt-10 py-16 text-center">
          <p className="text-neutral-500">No results found. Try a different search or filter.</p>
        </div>
      ) : (
        <ul className="mt-4 divide-y divide-neutral-100">
          {results.map((item) => {
            const config = TYPE_CONFIG[item.type];
            const Icon = config.icon;
            return (
              <li key={item.id}>
                <Link
                  href={item.href}
                  className="group flex items-start gap-4 py-5 transition-colors hover:bg-neutral-50 -mx-4 px-4 rounded-lg"
                >
                  <span className={`mt-0.5 inline-flex size-8 shrink-0 items-center justify-center rounded-md ${config.style}`}>
                    <Icon className="size-4" aria-hidden />
                  </span>

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className={`rounded-full px-2 py-0.5 text-xs font-semibold ${config.style}`}>
                        {config.label}
                      </span>
                      {item.badge && (
                        <span className="text-xs text-neutral-400">{item.badge}</span>
                      )}
                      {item.date && (
                        <time className="text-xs text-neutral-400" dateTime={item.date}>
                          {formatDate(item.date)}
                        </time>
                      )}
                    </div>
                    <h3 className="mt-1 font-display text-base font-bold leading-snug text-rhino-700 group-hover:text-denim-700">
                      {item.title}
                    </h3>
                    {item.meta && (
                      <p className="mt-0.5 text-sm text-neutral-500">{item.meta}</p>
                    )}
                    {item.summary && (
                      <p className="mt-1 text-sm leading-relaxed text-neutral-600 line-clamp-2">
                        {item.summary}
                      </p>
                    )}
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
