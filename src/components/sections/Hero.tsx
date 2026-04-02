import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative flex h-svh flex-col items-center overflow-hidden px-4 pt-28 pb-12 lg:px-8 lg:pt-32">
      <Image
        src="/assets/imgs/hero-cm.png"
        alt=""
        fill
        className="scale-110 object-cover object-center"
        priority
      />
      <div className="absolute inset-0 bg-red-950/25" />
      <div className="relative mx-auto max-w-7xl">
        <div className="font-heading mx-auto max-w-3xl text-center">
          <h1 className="leading-tighter text-3xl font-medium tracking-tighter text-white sm:text-4xl lg:text-5xl">
            Optimizacion, <br /> en cada impresion de tu negocio
          </h1>
          <p className="mt-6 text-base text-white/85 sm:text-lg lg:text-xl">
            Gestión de impresión, documentos y tareas sin fricción.
          </p>
          <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button render={<a href="#servicios" />}>
              Conoce nuestros servicios
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
