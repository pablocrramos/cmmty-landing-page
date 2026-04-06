"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/services-data";

export function ServicesShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sentinelRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sentinelRefs.current.forEach((el, index) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveIndex(index);
        },
        { rootMargin: "-50% 0px -50% 0px", threshold: 0 },
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <section id="servicios" className="bg-white">
      {/* Scroll space: 100vh per service */}
      <div
        className="relative"
        style={{ height: `${services.length * 100}vh` }}
      >
        {/* Sticky viewport panel */}
        <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
          <div className="mx-auto w-full max-w-[1200px] px-4 py-12 sm:px-6 lg:px-8">
            {/* Progress indicator */}
            <div className="mb-10 flex items-center gap-4">
              {services.map((s, i) => (
                <div key={s.id} className="flex items-center gap-2">
                  <span
                    className={cn(
                      "font-heading text-xs font-medium tabular-nums transition-colors duration-500",
                      i === activeIndex
                        ? "text-foreground"
                        : "text-muted-foreground/30",
                    )}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div
                    className={cn(
                      "h-px w-10 transition-colors duration-500",
                      i === activeIndex ? "bg-primary" : "bg-[#dde2e5]",
                    )}
                  />
                </div>
              ))}
            </div>

            {/* Content panels — stacked in same grid cell */}
            <div className="grid">
              {services.map((service, i) => (
                <div
                  key={service.id}
                  className="col-start-1 row-start-1 transition-all duration-500"
                  style={{
                    opacity: i === activeIndex ? 1 : 0,
                    transform:
                      i === activeIndex ? "translateY(0)" : "translateY(1rem)",
                    pointerEvents: i === activeIndex ? "auto" : "none",
                  }}
                >
                  {/* Title left · Description right */}
                  <div className="flex items-start justify-between gap-8">
                    <div className="flex flex-col gap-5">
                      <h2 className="font-heading max-w-sm text-4xl font-normal tracking-tighter lg:text-5xl">
                        {service.heading}
                      </h2>
                      <Button size="sm" className="w-fit">
                        {service.ctaLabel}
                      </Button>
                    </div>
                    <p className="text-muted-foreground max-w-xs pt-1 text-base leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Visual */}
                  <div className="mt-6 aspect-video w-full overflow-hidden rounded-[0.38rem] bg-black/10" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Invisible sentinels — one per service, each 100vh */}
        {services.map((service, i) => (
          <div
            key={service.id}
            ref={(el) => {
              sentinelRefs.current[i] = el;
            }}
            className="pointer-events-none absolute w-full"
            style={{ top: `${i * 100}vh`, height: "100vh" }}
          />
        ))}
      </div>
    </section>
  );
}
