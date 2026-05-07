"use client";

import { useEffect, useState } from "react";

const WORDS = [
  "tech",
  "AI",
  "data",
  "consulting",
  "VC",
  "policy",
  "biotech",
  "medtech",
  "startups",
  "research",
  "a podcast",
  "your own thing",
] as const;

const ROTATE_MS = 2200;

export function RotatingHeadline() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % WORDS.length);
    }, ROTATE_MS);
    return () => clearInterval(id);
  }, [paused]);

  const current = WORDS[index];

  return (
    <h1
      className="font-display text-5xl font-bold leading-[1.05] tracking-tight text-rhino-700 md:text-7xl lg:text-[5.5rem]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      tabIndex={0}
      aria-label="MD plus tech. MD plus AI. MD plus everything else."
    >
      <span aria-hidden>
        MD<span className="text-yellow-500">+</span>{" "}
        <span
          key={current}
          className="word-animate word-underline inline-block text-denim-600"
        >
          {current}
        </span>
        <span className="text-rhino-700">.</span>
      </span>
      <span className="sr-only" aria-live="polite" aria-atomic="true">
        MD plus {current}.
      </span>
    </h1>
  );
}
