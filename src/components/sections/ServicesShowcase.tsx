"use client";

import { useEffect, useRef, useState } from "react";
import { ServiceNav } from "@/components/molecules/ServiceNav";
import { BenefitsCard } from "@/components/molecules/BenefitsCard";
import { ServiceBlock } from "@/components/molecules/ServiceBlock";
import { services } from "@/lib/services-data";

export function ServicesShowcase() {
  const [activeId, setActiveId] = useState(services[0].id);
  const sectionRefs = useRef<Map<string, HTMLDivElement>>(new Map());
  const isClickScrolling = useRef(false);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sectionRefs.current.forEach((el, id) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !isClickScrolling.current) {
            setActiveId(id);
          }
        },
        { rootMargin: "-40% 0px -40% 0px", threshold: 0 },
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  function handleSelect(id: string) {
    const el = sectionRefs.current.get(id);
    if (!el) return;

    isClickScrolling.current = true;
    setActiveId(id);
    el.scrollIntoView({ behavior: "smooth", block: "start" });

    setTimeout(() => {
      isClickScrolling.current = false;
    }, 800);
  }

  const activeService = services.find((s) => s.id === activeId) ?? services[0];

  return (
    <section id="servicios" className="bg-accent px-4 py-20 lg:px-8 lg:py-36">
      <div className="mx-auto max-w-6xl">
        {/* Mobile: tabs */}
        <div className="mb-8 flex gap-2 overflow-x-auto lg:hidden">
          {services.map((service) => (
            <button
              key={service.id}
              type="button"
              onClick={() => handleSelect(service.id)}
              className={`font-heading shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                service.id === activeId
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground"
              }`}
            >
              {service.label}
            </button>
          ))}
        </div>

        {/* Desktop: two-column sticky layout */}
        <div className="flex gap-12 lg:gap-16">
          {/* Left column — sticky */}
          <div className="hidden w-96 shrink-0 lg:block">
            <div className="sticky top-24 space-y-8">
              <ServiceNav activeId={activeId} onSelect={handleSelect} />
              <BenefitsCard benefits={activeService.benefits} />
            </div>
          </div>

          {/* Right column — scrollable */}
          <div className="min-w-0 flex-1 space-y-20 lg:space-y-32">
            {services.map((service) => (
              <div
                key={service.id}
                ref={(el) => {
                  if (el) sectionRefs.current.set(service.id, el);
                }}
              >
                <ServiceBlock service={service} />

                {/* Mobile: benefits card below each service */}
                <div className="mt-8 lg:hidden">
                  <BenefitsCard benefits={service.benefits} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
