import Image from "next/image";
import { cn } from "@/lib/utils";

const stats = [
  {
    value: "Desde 2003",
    description: "Dos décadas creciendo junto a las PYMES del noreste.",
  },
  {
    value: "Monterrey",
    description: "Operamos desde el corazón del centro de la ciudad.",
  },
  {
    value: "Ricoh",
    description: "Distribuidor oficial Ricoh en Monterrey.",
  },
];

const partnerLogos = [
  { src: "/assets/svgs/logos/aliados/ricoh.svg", alt: "Ricoh" },
  { src: "/assets/svgs/logos/aliados/zebra.svg", alt: "Zebra" },
  { src: "/assets/svgs/logos/aliados/lenovo.svg", alt: "Lenovo" },
  { src: "/assets/svgs/logos/aliados/sharp.svg", alt: "Sharp" },
];

export function WhyUs() {
  return (
    <section
      id="nosotros"
      className="bg-neutral-100 px-4 py-20 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <p className="text-primary mb-3 text-xs font-medium tracking-widest uppercase">
            CM Digital
          </p>
          <h2 className="font-heading text-3xl font-normal tracking-tighter lg:text-4xl">
            ¿Por qué elegirnos?
          </h2>
          <p className="text-muted-foreground mt-3 text-base">
            Combinamos tecnología Ricoh con un servicio cercano y personalizado
            para PYMES.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {/* Row 1 — stat cards */}
          {stats.map((stat, i) => (
            <div
              key={stat.value}
              className={cn(
                "border-border flex min-h-48 flex-col justify-between rounded-2xl border bg-white p-8",
                i === 2 && "sm:col-span-2 lg:col-span-1",
              )}
            >
              <p className="text-5xl font-medium tracking-tight">
                {stat.value}
              </p>
              <p className="text-muted-foreground mt-6 text-base leading-snug">
                {stat.description}
              </p>
            </div>
          ))}

          {/* Row 2 — wide card: aliados */}
          <div className="border-border flex flex-col justify-between rounded-2xl border bg-white p-8 sm:col-span-2 lg:col-span-2">
            <p className="max-w-lg text-base leading-snug font-medium">
              Contamos con los mejores aliados tecnológicos en la industria.
            </p>
            <div className="mt-8 grid grid-cols-4 gap-3">
              {partnerLogos.map((logo) => (
                <div
                  key={logo.alt}
                  className="border-border flex items-center justify-center rounded-xl border p-4"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={80}
                    height={32}
                    className="h-8 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 — narrow card: value prop */}
          <div className="border-border flex min-h-48 flex-col rounded-2xl border bg-white p-8 sm:col-span-2 lg:col-span-1">
            <p className="text-base leading-snug font-medium">
              Simplificamos tus espacios, así tú solo te preocupas por lo
              importante.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
