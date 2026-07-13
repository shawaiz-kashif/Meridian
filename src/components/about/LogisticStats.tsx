"use client";

import { useEffect, useRef, useState } from "react";
import Container from "@/components/ui/Container";

interface Stat {
  percent: number;
  label: string;
}

const stats: Stat[] = [
  { percent: 84, label: "Sea Delivery" },
  { percent: 71, label: "Ground Shipping" },
  { percent: 94, label: "Air Delivery" },
  { percent: 61, label: "Other Delivery" },
];

const RADIUS = 54;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;
const DURATION_MS = 1200;

function StatRing({ percent, label, animate }: Stat & { animate: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!animate) return;
    const start = performance.now();
    let frame: number;

    function tick(now: number) {
      const progress = Math.min((now - start) / DURATION_MS, 1);
      setCount(Math.round(progress * percent));
      if (progress < 1) frame = requestAnimationFrame(tick);
    }

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [animate, percent]);

  const offset = CIRCUMFERENCE * (1 - (animate ? percent : 0) / 100);

  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative h-28 w-28 sm:h-36 sm:w-36">
        <svg viewBox="0 0 120 120" className="h-full w-full -rotate-90">
          <circle cx="60" cy="60" r={RADIUS} fill="none" stroke="#e5e7eb" strokeWidth="4" />
          <circle
            cx="60"
            cy="60"
            r={RADIUS}
            fill="none"
            stroke="#1c2a5e"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray={CIRCUMFERENCE}
            strokeDashoffset={offset}
            style={{ transition: `stroke-dashoffset ${DURATION_MS}ms ease-out` }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-extrabold text-navy-dark sm:text-3xl">
            {count}
            <span className="align-top text-sm">%</span>
          </span>
        </div>
      </div>
      <p className="mt-4 text-xs font-bold uppercase tracking-wide text-navy-dark sm:text-sm">
        {label}
      </p>
    </div>
  );
}

export default function LogisticStats() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-gray-section py-16 md:py-20">
      <Container>
        <p className="text-sm font-semibold uppercase tracking-widest text-gray-400">
          Statistics
        </p>
        <h2 className="mt-2 text-2xl font-extrabold uppercase tracking-tight text-navy-dark md:text-3xl">
          Logistic In Numbers
        </h2>

        <div className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-4 sm:gap-6">
          {stats.map((stat) => (
            <StatRing key={stat.label} {...stat} animate={animate} />
          ))}
        </div>
      </Container>
    </section>
  );
}
