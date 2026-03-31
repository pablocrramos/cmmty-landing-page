import Image from "next/image";

const clientLogos = [
  {
    key: "innovasport",
    src: "/logos/clients/inova_logo.svg",
    alt: "Logo Innovasport",
  },
  { key: "magna", src: "/logos/clients/magna.svg", alt: "Logo Magna" },
  { key: "javer", src: "/logos/clients/javer.svg", alt: "Logo Javer" },
  { key: "uanl", src: "/logos/clients/uanl.svg", alt: "Logo UANL" },
  {
    key: "nuevoleon",
    src: "/logos/clients/nuevoleon.svg",
    alt: "Logo Gobierno de Nuevo León",
  },
  { key: "acre", src: "/logos/clients/acre.svg", alt: "Logo ACRE" },
];

export function SocialProof() {
  return (
    <section className="border-border border-y bg-white px-4 py-12 lg:px-8">
      <div className="mx-auto mt-8 max-w-5xl">
        <p className="text-foreground font-heading text-md text-center font-medium">
          Confiados por marcas que construyen el futuro
        </p>
        <div className="border-border mt-8 grid grid-cols-2 border sm:grid-cols-3 lg:grid-cols-6">
          {clientLogos.map((logo) => (
            <div
              key={logo.key}
              className="border-border relative h-24 border-r border-b grayscale transition-all duration-300 [&:nth-child(2n)]:border-r-0 sm:[&:nth-child(2n)]:border-r sm:[&:nth-child(3n)]:border-r-0 lg:[&:nth-child(3n)]:border-r lg:[&:nth-child(6n)]:border-r-0 [&:nth-last-child(-n+2)]:border-b-0 sm:[&:nth-last-child(-n+3)]:border-b-0 lg:[&:nth-last-child(-n+6)]:border-b-0"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                sizes="100px"
                className="object-contain p-6"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
