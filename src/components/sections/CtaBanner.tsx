import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/atoms/Section";

export function CtaBanner() {
  return (
    <Section variant="white" id="contacto" className="pb-20 lg:pb-28">
      <div className="relative overflow-hidden rounded-[0.38rem] bg-gradient-to-b from-red-950 via-red-800 to-rose-400 px-10 py-14 lg:min-h-56 lg:px-14 lg:py-16">
        {/* Left: text + CTA */}
        <div className="relative z-10 max-w-xs lg:max-w-sm">
          <h2 className="font-heading text-2xl leading-snug font-medium text-white lg:text-3xl">
            Consulta nuestras soluciones que te ayudan a optimizar tu impresión
            y escaneo
          </h2>
          <div className="mt-8">
            <Button
              render={<a href="mailto:contacto@cmdigital.mx" />}
              className="bg-red-800 text-white hover:bg-red-900"
            >
              Contáctanos ahora
            </Button>
          </div>
        </div>

        {/* Right: printer — desktop only */}
        <div className="absolute right-0 -bottom-[15%] hidden h-full md:right-[10%] lg:block">
          <Image
            src="/assets/imgs/render-printer.png"
            alt="Impresora Ricoh"
            width={500}
            height={500}
            className="h-full w-auto object-contain object-bottom"
          />
        </div>
      </div>
    </Section>
  );
}
