"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/atoms/Section";
import { Container } from "../atoms/Container";
import { services } from "@/lib/services-data";

const GAP = 16; // px — matches gap-4

export function ServicesShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const measure = () => {
      if (trackRef.current) setCardWidth(trackRef.current.offsetWidth * 0.75);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const prev = () => setActiveIndex((i) => Math.max(0, i - 1));
  const next = () =>
    setActiveIndex((i) => Math.min(services.length - 1, i + 1));

  return (
    <Section variant="light-gray" id="servicios">
      <Container>
        {/* Header + arrow buttons */}
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="font-heading text-3xl font-normal tracking-tighter lg:text-4xl">
              Nuestros servicios
            </h2>
            <p className="text-muted-foreground mt-2 text-base">
              Soluciones a la medida para la operación de tu empresa.
            </p>
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

        {/* Carousel track */}
        <div ref={trackRef} className="overflow-hidden">
          <div
            className="flex gap-4 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${activeIndex * (cardWidth + GAP)}px)`,
            }}
          >
            {services.map((service) => (
              <div
                key={service.id}
                className="h-72 flex-shrink-0 overflow-hidden rounded-[0.38rem] bg-black/10"
                style={{ width: cardWidth || "75%" }}
              />
            ))}
          </div>
        </div>

        {/* Service info below carousel */}
        <div className="mt-6 flex items-start justify-between gap-12">
          {/* Description — all stacked, active one visible */}
          <div className="grid min-w-0 flex-1">
            {services.map((service, i) => (
              <p
                key={service.id}
                className="col-start-1 row-start-1 text-base leading-relaxed transition-opacity duration-300"
                style={{ opacity: i === activeIndex ? 1 : 0 }}
              >
                <strong className="font-semibold">{service.heading}.</strong>{" "}
                <span className="text-muted-foreground">
                  {service.description}
                </span>
              </p>
            ))}
          </div>

          {/* CTA */}
          <Button size="sm" className="shrink-0">
            {services[activeIndex].ctaLabel}
          </Button>
        </div>
      </Container>
    </Section>
  );
}
