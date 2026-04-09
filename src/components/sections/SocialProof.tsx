import Image from "next/image";
import { Section } from "@/components/atoms/Section";

const clientLogos = [
  {
    key: "innovasport",
    src: "/assets/svgs/logos/clients/inova_logo.svg",
    alt: "Logo Innovasport",
  },
  {
    key: "magna",
    src: "/assets/svgs/logos/clients/magna.svg",
    alt: "Logo Magna",
  },
  {
    key: "javer",
    src: "/assets/svgs/logos/clients/javer.svg",
    alt: "Logo Javer",
  },
  { key: "uanl", src: "/assets/svgs/logos/clients/uanl.svg", alt: "Logo UANL" },
  {
    key: "nuevoleon",
    src: "assets/svgs/logos/clients/nuevoleon.svg",
    alt: "Logo Gobierno de Nuevo León",
  },
  { key: "acre", src: "/assets/svgs/logos/clients/acre.svg", alt: "Logo ACRE" },
];

export function SocialProof() {
  return (
    <Section variant="light-gray">
      <p className="text-foreground text-md pt-10 text-center font-normal tracking-tight">
        Confiados por empresas que construyen el futuro
      </p>
      <div className="border-border mt-8 grid grid-cols-2 rounded-[0.38rem] border sm:grid-cols-3 lg:grid-cols-6">
        {clientLogos.map((logo) => (
          <div
            key={logo.key}
            className="border-border relative h-16 border-r border-b grayscale transition-all duration-300 [&:nth-child(2n)]:border-r-0 sm:[&:nth-child(2n)]:border-r sm:[&:nth-child(3n)]:border-r-0 lg:[&:nth-child(3n)]:border-r lg:[&:nth-child(6n)]:border-r-0 [&:nth-last-child(-n+2)]:border-b-0 sm:[&:nth-last-child(-n+3)]:border-b-0 lg:[&:nth-last-child(-n+6)]:border-b-0"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              fill
              sizes="100px"
              className="object-contain px-10 py-3.5"
            />
          </div>
        ))}
      </div>
      <div className="pt-14" />
    </Section>
  );
}
