"use client";

import { useEffect, useRef, useState } from "react";
import { CheckCircleIcon } from "@phosphor-icons/react";
import { Section } from "@/components/atoms/Section";
import { Container } from "../atoms/Container";
import { services } from "@/lib/services-data";
import { cn } from "@/lib/utils";

export function ServicesShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    videoRefs.current.forEach((video, i) => {
      if (!video) return;
      if (i === activeIndex) {
        video.play().catch(() => {});
      } else {
        video.pause();
        video.currentTime = 0;
      }
    });
  }, [activeIndex]);

  const active = services[activeIndex];

  return (
    <Section variant="light-gray" id="servicios">
      <Container>
        {/* ── Header ──────────────────────────────────────────────────────── */}
        <div className="mb-8 max-w-2xl">
          <p className="text-primary mb-3 text-xs font-medium tracking-widest uppercase">
            Servicios
          </p>
          <h2 className="font-heading text-3xl font-normal tracking-tighter lg:text-4xl">
            Soluciones digitales y resultados reales
          </h2>
        </div>

        {/* ── Tab navigation ──────────────────────────────────────────────── */}
        <div
          role="tablist"
          aria-label="Servicios disponibles"
          className="mb-6 flex flex-wrap gap-2"
        >
          {services.map((service, i) => {
            const isActive = i === activeIndex;
            return (
              <button
                key={service.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={`service-panel-${service.id}`}
                onClick={() => setActiveIndex(i)}
                className={cn(
                  "rounded-xl border px-5 py-2 text-sm font-medium transition-all duration-200",
                  isActive
                    ? "border-primary bg-primary text-primary-foreground shadow-sm"
                    : "hover:border-primary/40 hover:text-foreground border-border text-muted-foreground bg-white",
                )}
              >
                {service.label}
              </button>
            );
          })}
        </div>

        {/* ── Active service panel ────────────────────────────────────────── */}
        <div
          id={`service-panel-${active.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${active.id}`}
          className="overflow-hidden rounded-2xl bg-white shadow-[0_2px_24px_rgba(0,0,0,0.06)]"
        >
          <div className="grid lg:grid-cols-[1.1fr_1fr]">
            {/* Video */}
            <div className="relative aspect-16/10 overflow-hidden bg-black lg:aspect-auto lg:min-h-115">
              {services.map((service, i) => (
                <video
                  key={service.id}
                  ref={(el) => {
                    videoRefs.current[i] = el;
                  }}
                  src={service.video}
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-hidden={i !== activeIndex}
                  className={cn(
                    "absolute inset-0 h-full w-full object-cover transition-opacity duration-500",
                    i === activeIndex ? "opacity-100" : "opacity-0",
                  )}
                />
              ))}
            </div>

            {/* Content */}
            <div className="flex flex-col justify-between gap-8 p-8 lg:p-10">
              <div>
                <p className="text-primary text-xs font-medium tracking-widest uppercase">
                  {active.label}
                </p>
                <h3 className="font-heading mt-2 text-2xl font-medium tracking-tight lg:text-[1.75rem] lg:leading-tight">
                  {active.heading}
                </h3>
                <p className="text-muted-foreground mt-3 text-base leading-relaxed">
                  {active.description}
                </p>

                {/* Benefits */}
                <ul className="mt-6 grid gap-3">
                  {active.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2.5">
                      <CheckCircleIcon
                        weight="fill"
                        className="text-primary mt-0.5 size-4.5 shrink-0"
                      />
                      <span className="text-sm leading-snug">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA — commented out for future use
              <Button
                size="sm"
                className="self-start"
                render={<a href="/contacto" />}
              >
                {active.ctaLabel} <ArrowRightIcon className="size-3.5" />
              </Button>
              */}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
