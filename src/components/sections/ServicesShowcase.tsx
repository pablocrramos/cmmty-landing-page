"use client";

import { useEffect, useRef, useState } from "react";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CheckCircleIcon,
} from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/atoms/Section";
import { Container } from "../atoms/Container";
import { services } from "@/lib/services-data";
import { cn } from "@/lib/utils";

const GAP = 16;

export function ServicesShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    const measure = () => {
      if (trackRef.current) setCardWidth(trackRef.current.offsetWidth * 0.8);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // Play active video, pause others
  useEffect(() => {
    videoRefs.current.forEach((video, i) => {
      if (!video) return;
      if (i === activeIndex) {
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  }, [activeIndex]);

  const prev = () => setActiveIndex((i) => Math.max(0, i - 1));
  const next = () =>
    setActiveIndex((i) => Math.min(services.length - 1, i + 1));

  const active = services[activeIndex];

  return (
    <Section variant="light-gray" id="servicios">
      <Container>
        {/* Header + arrow buttons */}
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="font-heading text-3xl font-normal tracking-tighter lg:text-4xl">
              Conoce Nuestros servicios
            </h2>
          </div>
          <div className="flex shrink-0 gap-2">
            <button
              type="button"
              onClick={prev}
              disabled={activeIndex === 0}
              aria-label="Servicio anterior"
              className="hover:bg-muted flex h-10 w-10 items-center justify-center rounded-lg border border-[#dde2e5] transition-colors disabled:opacity-30"
            >
              <ArrowLeftIcon className="size-4" />
            </button>
            <button
              type="button"
              onClick={next}
              disabled={activeIndex === services.length - 1}
              aria-label="Siguiente servicio"
              className="hover:bg-muted flex h-10 w-10 items-center justify-center rounded-lg border border-[#dde2e5] transition-colors disabled:opacity-30"
            >
              <ArrowRightIcon className="size-4" />
            </button>
          </div>
        </div>

        {/* Video carousel */}
        <div ref={trackRef} className="overflow-hidden">
          <div
            className="flex gap-4 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${activeIndex * (cardWidth + GAP)}px)`,
            }}
          >
            {services.map((service, i) => (
              <div
                key={service.id}
                className="flex-shrink-0 overflow-hidden rounded-2xl bg-black"
                style={{ width: cardWidth || "80%" }}
              >
                <video
                  ref={(el) => {
                    videoRefs.current[i] = el;
                  }}
                  src={service.video}
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="h-80 w-full object-cover sm:h-96 lg:h-[28rem]"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Service info — structured card layout */}
        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_auto]">
          {/* Left: label + heading + description */}
          <div className="min-w-0">
            {/* Active service content — stacked for crossfade */}
            <div className="relative">
              {services.map((service, i) => (
                <div
                  key={service.id}
                  className={cn(
                    "transition-all duration-300",
                    i === activeIndex
                      ? "relative opacity-100"
                      : "pointer-events-none absolute inset-0 opacity-0",
                  )}
                  aria-hidden={i !== activeIndex}
                >
                  <h3 className="font-heading text-xl font-medium tracking-tight sm:text-2xl">
                    {service.heading}
                  </h3>
                  <p className="text-muted-foreground mt-2 max-w-xl text-base leading-relaxed">
                    {service.description}
                  </p>

                  {/* Benefits checklist */}
                  <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                    {service.benefits.map((benefit) => (
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
              ))}
            </div>
          </div>

          {/* Right: CTA */}
          <div className="flex items-end lg:pb-1">
            <Button
              size="sm"
              className="shrink-0"
              render={<a href="/contacto" />}
            >
              {active.ctaLabel} <ArrowRightIcon className="size-3.5" />
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
