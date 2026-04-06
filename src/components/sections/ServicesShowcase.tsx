"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/atoms/Section";
import { services } from "@/lib/services-data";

// px of scrolling dedicated to each service before transitioning to the next
const SCROLL_PER_SERVICE = 650;

export function ServicesShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const top =
        containerRef.current.getBoundingClientRect().top + window.scrollY;
      const scrolled = window.scrollY - top;
      const index = Math.min(
        Math.max(0, Math.floor(scrolled / SCROLL_PER_SERVICE)),
        services.length - 1,
      );
      setActiveIndex(index);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Section variant="white" id="servicios">
      <div
        ref={containerRef}
        className="relative"
        style={{ height: `${services.length * SCROLL_PER_SERVICE}px` }}
      >
        {/* Sticky panel — natural content height, no full-screen lock */}
        <div className="sticky top-0 pt-16 pb-8">
          {/* Progress indicator */}
          <div className="mb-8 flex items-center gap-4">
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
    </Section>
  );
}
