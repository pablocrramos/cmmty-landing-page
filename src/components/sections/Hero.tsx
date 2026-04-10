import Image from "next/image";
import { Button } from "@/components/ui/button";

const clientLogos = [
  { key: "magna", src: "/assets/svgs/logos/clients/magna.svg", alt: "Magna" },
  {
    key: "fanasa",
    src: "/assets/svgs/logos/clients/fanasa.svg",
    alt: "Fanasa",
  },
  { key: "javer", src: "/assets/svgs/logos/clients/javer.svg", alt: "Javer" },
  { key: "uanl", src: "/assets/svgs/logos/clients/uanl.svg", alt: "UANL" },
  {
    key: "nuevoleon",
    src: "/assets/svgs/logos/clients/nuevoleon.svg",
    alt: "Gobierno de Nuevo León",
  },
];

const printerShadow = "drop-shadow-[0_8px_10px_rgba(0,0,0,0.12)]";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-28 pb-10 lg:pt-32 lg:pb-12">
      {/* ── Mobile: printer cluster ── */}
      <div className="relative mx-auto mb-8 flex h-[160px] items-end justify-center lg:hidden">
        <div className="animate-float relative -mr-4 mb-1 w-[95px] [animation-delay:0.4s]">
          <Image
            src="/assets/imgs/render-printer-a2.png"
            alt=""
            width={190}
            height={190}
            className={printerShadow}
          />
        </div>
        <div className="animate-float relative z-10 w-[120px]">
          <Image
            src="/assets/imgs/render-printer-a1.png"
            alt=""
            width={240}
            height={240}
            className={printerShadow}
          />
        </div>
        <div className="animate-float relative mb-1 -ml-4 w-[95px] [animation-delay:0.8s]">
          <Image
            src="/assets/imgs/render-printer-a3.png"
            alt=""
            width={190}
            height={190}
            className={printerShadow}
          />
        </div>
      </div>

      {/* ── Desktop: printers as small decorations flanking text ── */}
      <div className="relative mx-auto max-w-[100rem]">
        {/* Far-left */}
        <div className="pointer-events-none absolute top-[10%] left-[3%] hidden lg:block xl:left-[6%]">
          <div className="animate-float-slow w-[100px] -rotate-6 xl:w-[120px]">
            <Image
              src="/assets/imgs/render-printer-a2.png"
              alt=""
              width={240}
              height={240}
              className={printerShadow}
            />
          </div>
        </div>

        {/* Inner-left */}
        <div className="pointer-events-none absolute top-[35%] left-[14%] hidden lg:block xl:left-[16%]">
          <div className="animate-float w-[120px] -rotate-2 [animation-delay:0.6s] xl:w-[140px]">
            <Image
              src="/assets/imgs/render-printer-a1.png"
              alt=""
              width={280}
              height={280}
              className={printerShadow}
            />
          </div>
        </div>

        {/* Inner-right */}
        <div className="pointer-events-none absolute top-[35%] right-[14%] hidden lg:block xl:right-[16%]">
          <div className="animate-float w-[120px] rotate-2 [animation-delay:0.3s] xl:w-[140px]">
            <Image
              src="/assets/imgs/render-printer-a3.png"
              alt=""
              width={280}
              height={280}
              className={printerShadow}
            />
          </div>
        </div>

        {/* Far-right */}
        <div className="pointer-events-none absolute top-[10%] right-[3%] hidden lg:block xl:right-[6%]">
          <div className="animate-float-slow w-[100px] rotate-6 [animation-delay:0.9s] xl:w-[120px]">
            <Image
              src="/assets/imgs/render-printer-a1.png"
              alt=""
              width={240}
              height={240}
              className={`${printerShadow} -scale-x-100`}
            />
          </div>
        </div>

        {/* Center copy */}
        <div className="relative z-10 mx-auto max-w-xl px-4 py-6 text-center lg:py-10">
          <h1 className="text-foreground text-[1.75rem] leading-[1.15] font-semibold tracking-tight sm:text-4xl lg:text-[2.75rem]">
            Tu operación de impresión.
            <br />
            Resuelta por completo.
          </h1>
          <p className="text-muted-foreground mt-5 text-base leading-relaxed font-medium sm:text-lg">
            Servicios gestionados de impresión, digitalización y soporte que se
            adaptan a lo que necesitas.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button render={<a href="#servicios" />}>
              Conoce nuestros servicios &rarr;
            </Button>
            <Button variant="alternate" render={<a href="/contacto" />}>
              Cotiza con nosotros
            </Button>
          </div>
        </div>
      </div>

      {/* ── Client logos — infinite marquee ── */}
      <div className="mx-auto mt-10 max-w-3xl overflow-hidden px-4">
        <div className="animate-marquee flex w-max gap-12">
          {[...clientLogos, ...clientLogos].map((logo, i) => (
            <div
              key={`${logo.key}-${i}`}
              className="relative h-7 w-20 shrink-0 grayscale"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                sizes="80px"
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
