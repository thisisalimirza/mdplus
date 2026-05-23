"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  /** ms delay before the transition starts once in view */
  delay?: number;
  /** px to slide up from */
  y?: number;
};

/**
 * Wraps children in a div that fades + slides up when the element
 * scrolls into the viewport. Uses IntersectionObserver — no library
 * required. Animates once; stays visible after triggering.
 */
export function Reveal({ children, className = "", delay = 0, y = 28 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -32px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : `translateY(${y}px)`,
        transition: `opacity 0.65s cubic-bezier(0.2,0.8,0.2,1) ${delay}ms, transform 0.65s cubic-bezier(0.2,0.8,0.2,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
