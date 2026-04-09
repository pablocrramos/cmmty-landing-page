import Image from "next/image";
import { cn } from "@/lib/utils";
import { Section } from "@/components/atoms/Section";
import { Container } from "../atoms/Container";
import { TextBlock } from "../atoms/TextBlock";

const stats = [
  { value: "25 años", description: "Creciendo en la industria de impresión." },
  { value: "9,000+", description: "Equipos instalados en todo México." },
  { value: "Top 10", description: "Mayor rendimiento por Ricoh en 2009." },
];

const partnerLogos = [
  { src: "/assets/svgs/logos/aliados/ricoh.svg", alt: "Ricoh" },
  { src: "/assets/svgs/logos/aliados/zebra.svg", alt: "Zebra" },
  { src: "/assets/svgs/logos/aliados/lenovo.svg", alt: "Lenovo" },
  { src: "/assets/svgs/logos/aliados/sharp.svg", alt: "Sharp" },
];

const cardClass =
  "flex flex-col justify-between rounded-[0.38rem] p-7 bg-white border border-[#dde2e5] transition-[border-color,box-shadow] duration-300 hover:border-[rgba(192,24,38,0.35)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)]";

export function FactsBento() {
  return (
    <Section variant="light-gray">
      <Container className="pt-4!">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {/* Row 1 — stat cards */}
          {stats.map((stat, i) => (
            <div
              key={stat.value}
              className={cn(
                cardClass,
                "min-h-44",
                i === 2 && "sm:col-span-2 lg:col-span-1",
              )}
            >
              <span className="font-heading text-4xl leading-none font-medium lg:text-5xl">
                {stat.value}
              </span>
              <p className="text-muted-foreground text-sm">
                {stat.description}
              </p>
            </div>
          ))}

          {/* Row 2 — wide card: aliados */}
          <div className={cn(cardClass, "sm:col-span-2 lg:col-span-2")}>
            <p className="max-w-lg text-base leading-snug font-medium">
              Contamos con los mejores aliados tecnológicos en la industria.
            </p>
            <div className="mt-8 grid grid-cols-4 gap-3">
              {partnerLogos.map((logo) => (
                <div
                  key={logo.alt}
                  className="border-border flex items-center justify-center rounded-lg border bg-[#fbfbfb] p-4"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={80}
                    height={32}
                    className="h-7 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 — narrow card: value prop */}
          <div
            className={cn(cardClass, "min-h-44 sm:col-span-2 lg:col-span-1")}
          >
            <p className="text-base leading-snug font-medium">
              Simplificamos tus espacios, así tú solo te preocupas por lo
              importante.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
