"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronRight, Pause, Plane, Play } from "lucide-react";
import Container from "@/components/ui/Container";

interface Slide {
  image: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  headline: string;
}

const slides: Slide[] = [
  {
    image: "/images/hero4.jpeg",
    description:
      "Real-time visibility and IoT-powered vigilance. Transforming data into supply chain resilience.",
    ctaLabel: "Explore Technology",
    ctaHref: "/about-us",
    headline: "The Digital Pulse of Logistics.",
  },
  {
    image: "/images/hero2.JPG",
    description:
      "Purpose-built logistics and mining infrastructure, engineered for scale, safety, and continuous operation.",
    ctaLabel: "Explore Our Sites",
    ctaHref: "/about-us",
    headline: "Infrastructure Built For Industry.",
  },
  {
    image: "/images/hero4.JPG",
    description:
      "A modern, GPS-tracked fleet standing ready for nationwide distribution and cross-border dispatch.",
    ctaLabel: "Explore Our Fleet",
    ctaHref: "/services",
    headline: "A Fleet Ready To Move.",
  },
];

const AUTOPLAY_MS = 6000;

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const slide = slides[index];

  useEffect(() => {
    if (!playing) return;
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [playing]);

  return (
    <section className="relative overflow-hidden bg-navy-dark">
      <div className="absolute inset-0">
        {slides.map((s, i) => (
          <Image
            key={s.image}
            src={s.image}
            alt=""
            fill
            priority={i === 0}
            sizes="100vw"
            className={`object-cover transition-opacity duration-1000 ease-in-out ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div
          className="absolute inset-0 bg-gradient-to-t from-navy-dark/95 via-navy-dark/30 to-navy-dark/60"
          aria-hidden="true"
        />
      </div>

      <Container className="relative flex min-h-[520px] flex-col justify-end pb-10 pt-24 md:min-h-[640px] md:pb-16">
        <div
          key={index}
          className="animate-fade-in-up flex w-full max-w-3xl flex-col self-end overflow-hidden rounded-sm shadow-2xl sm:flex-row"
        >
          <div className="flex-1 bg-white p-6 md:p-8">
            <Plane className="mb-3 h-5 w-5 -rotate-45 text-gray-400" aria-hidden="true" />
            <p className="text-base leading-relaxed text-gray-700">
              {slide.description}
            </p>
            <a
              href={slide.ctaHref}
              className="mt-4 inline-flex items-center gap-1 text-sm font-bold uppercase tracking-wide text-red hover:text-red-dark"
            >
              {slide.ctaLabel}
              <ChevronRight size={16} />
            </a>
          </div>
          <div className="flex flex-1 items-center bg-navy p-6 md:p-8">
            <h1 className="text-2xl font-extrabold uppercase leading-tight text-white md:text-3xl">
              {slide.headline}
            </h1>
          </div>
        </div>

        <div className="mt-6 flex items-center gap-3 self-end">
          <button
            type="button"
            aria-label="Next slide"
            onClick={() => setIndex((i) => (i + 1) % slides.length)}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:bg-white/10"
          >
            <ChevronRight size={16} />
          </button>
          <div className="flex items-center gap-2">
            {slides.map((s, i) => (
              <button
                key={s.image}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-2.5 w-2.5 rounded-full border border-white/60 ${
                  i === index ? "bg-white" : "bg-transparent"
                }`}
              />
            ))}
          </div>
          <button
            type="button"
            aria-label={playing ? "Pause slideshow" : "Play slideshow"}
            onClick={() => setPlaying((p) => !p)}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:bg-white/10"
          >
            {playing ? <Pause size={14} /> : <Play size={14} />}
          </button>
        </div>
      </Container>
    </section>
  );
}
