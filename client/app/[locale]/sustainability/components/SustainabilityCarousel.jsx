"use client";

import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export default function SustainabilityCarousel({ slides = [], loop = true, autoplay = true, delay = 4000 }) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop, skipSnaps: false, align: "center", dragFree: false },
    autoplay ? [Autoplay({ delay, stopOnInteraction: false })] : []
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo   = useCallback((i) => emblaApi && emblaApi.scrollTo(i), [emblaApi]);

  return (
    <section className="w-full flex flex-col items-center">
      {/* Viewport */}
      <div
        className="w-full max-w-screen-xl px-3 md:px-6"
        aria-roledescription="carousel"
      >
        <div
          ref={emblaRef}
          className="overflow-hidden rounded-2xl shadow-xl border border-neutral-200/50 bg-white"
        >
          {/* Container */}
          <div className="flex touch-pan-y">
            {slides.map((img, idx) => (
              <div
                key={idx}
                className="relative min-w-0 flex-[0_0_100%] sm:flex-[0_0_100%]"
                aria-label={`Slide ${idx + 1} of ${slides.length}`}
              >
                {/* Slide box: yüksekliği ekrana göre ayarladık */}
                <div className="relative w-full h-[75vh] md:h-[80vh] xl:h-[85vh] bg-neutral-50">
                  <Image
                    src={img}
                    alt={`Report page ${idx + 1}`}
                    fill
                    priority={idx < 2}
                    sizes="100vw"
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="mt-4 flex items-center justify-between gap-3">
          <button
            onClick={scrollPrev}
            className="px-4 py-2 rounded-xl border border-neutral-300 hover:border-neutral-400 active:scale-[.98] transition"
            aria-label="Previous slide"
          >
            ←
          </button>
          {/* Dots */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {scrollSnaps.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={[
                  "h-2.5 w-2.5 rounded-full transition",
                  selectedIndex === i ? "bg-neutral-900" : "bg-neutral-300 hover:bg-neutral-400"
                ].join(" ")}
              />
            ))}
          </div>
          <button
            onClick={scrollNext}
            className="px-4 py-2 rounded-xl border border-neutral-300 hover:border-neutral-400 active:scale-[.98] transition"
            aria-label="Next slide"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
