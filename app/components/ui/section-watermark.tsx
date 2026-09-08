"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Giant background number that drifts as the section crosses the viewport.
 * Mirrors the parallax watermark used on the editorial sections.
 */
export default function SectionWatermark({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const ticking = useRef(false);

  useEffect(() => {
    const compute = () => {
      ticking.current = false;
      const section = ref.current?.parentElement;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      // -1 when the section sits below the fold, +1 once it has passed above.
      const progress =
        (window.innerHeight / 2 - (rect.top + rect.height / 2)) /
        (window.innerHeight / 2 + rect.height / 2);
      setOffset(Math.max(-1, Math.min(1, progress)) * 70);
    };

    const onScroll = () => {
      if (!ticking.current) {
        ticking.current = true;
        requestAnimationFrame(compute);
      }
    };

    compute();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", compute);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", compute);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="section-watermark"
      style={{ transform: `translateY(${offset.toFixed(2)}px)` }}
      aria-hidden="true"
    >
      {children}
    </div>
  );
}
