"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { Section } from "@/components/atoms/Section";
import { Container } from "../atoms/Container";

const partnerLogos = [
  { src: "/assets/svgs/logos/aliados/ricoh.svg", alt: "Ricoh" },
  { src: "/assets/svgs/logos/aliados/zebra.svg", alt: "Zebra" },
  { src: "/assets/svgs/logos/aliados/lenovo.svg", alt: "Lenovo" },
  { src: "/assets/svgs/logos/aliados/sharp.svg", alt: "Sharp" },
  { src: "/assets/svgs/logos/aliados/docuware.svg", alt: "DocuWare" },
  { src: "/assets/svgs/logos/aliados/logitech.svg", alt: "Logitech" },
];

const cardClass =
  "relative flex flex-col justify-between overflow-hidden rounded-2xl p-7 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md";

export function FactsBento() {
  return (
    <Section variant="light-gray">
      <Container className="pt-4!">
        <div className="mb-8 max-w-2xl">
          <h2 className="font-heading mt-16 text-3xl font-normal tracking-tighter lg:text-4xl">
            Lo que nos respalda
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {/* ── Card 1: Desde 2003 ── */}
          <div className={cn(cardClass, "min-h-72 lg:min-h-80")}>
            {/* Decorative large "2003" */}
            <span
              aria-hidden
              className="font-heading pointer-events-none absolute -right-4 -bottom-6 text-[8rem] leading-none font-bold tracking-tighter text-[#f5f0f0] lg:text-[10rem]"
            >
              2003
            </span>
            <span className="font-heading text-primary text-4xl leading-none font-medium lg:text-5xl">
              Desde 2003
            </span>
            <p className="text-muted-foreground relative z-10 text-sm">
              Más de dos décadas creciendo junto a las PYMES de Monterrey.
            </p>
          </div>

          {/* ── Card 2: Enfocados en PYMES ── */}
          <div className={cn(cardClass, "min-h-72 lg:min-h-80")}>
            {/* Decorative printer images */}
            <div className="pointer-events-none absolute right-4 bottom-12 flex items-end gap-2 opacity-[0.12]">
              <Image
                src="/assets/imgs/render-printer-a2.png"
                alt=""
                width={80}
                height={80}
                className="w-14"
              />
              <Image
                src="/assets/imgs/render-printer-a1.png"
                alt=""
                width={100}
                height={100}
                className="w-18"
              />
            </div>
            <span className="font-heading text-4xl leading-none font-medium lg:text-5xl">
              PYMES
            </span>
            <p className="text-muted-foreground relative z-10 text-sm">
              Soluciones de impresión pensadas para pequeñas y medianas
              empresas.
            </p>
          </div>

          {/* ── Card 3: Aliados — logo marquee ── */}
          <div className={cn(cardClass, "min-h-72 lg:min-h-80")}>
            <p className="relative z-10 max-w-md text-base leading-snug font-medium">
              Contamos con los mejores aliados tecnológicos en la industria.
            </p>
            {/* Logo marquee */}
            <div className="mt-6 overflow-hidden">
              <div className="animate-marquee-slow flex w-max gap-3">
                {[...partnerLogos, ...partnerLogos].map((logo, i) => (
                  <div
                    key={`${logo.alt}-${i}`}
                    className="bg-card-surface flex shrink-0 items-center justify-center rounded-lg px-5 py-3"
                  >
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={80}
                      height={32}
                      className="h-6 w-auto object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Card 4: Monterrey ── */}
          <div className={cn(cardClass, "min-h-72 lg:min-h-80")}>
            {/* Decorative dot grid */}
            <div className="pointer-events-none absolute right-4 bottom-4 grid grid-cols-4 gap-2.5 opacity-[0.06]">
              {Array.from({ length: 16 }).map((_, i) => (
                <div
                  key={i}
                  className="bg-foreground h-1.5 w-1.5 rounded-full"
                />
              ))}
            </div>
            <span className="font-heading text-4xl leading-none font-medium lg:text-5xl">
              Monterrey
            </span>
            <p className="text-muted-foreground relative z-10 text-sm">
              Orgullosamente regiomontanos, operando desde el centro de la
              ciudad.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
