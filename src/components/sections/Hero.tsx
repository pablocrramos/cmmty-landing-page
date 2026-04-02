import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative h-svh overflow-hidden px-4 py-20 lg:px-8 lg:pt-14 lg:pb-24">
      <Image
        src="/assets/imgs/hero-cm.png"
        alt=""
        fill
        className="scale-x-220 scale-y-125 object-fill object-center lg:scale-120 lg:scale-x-105"
        priority
      />
      <div className="absolute inset-0" />
      <div className="relative mx-auto max-w-7xl">
        <div className="font-heading mx-auto max-w-3xl text-center">
          <h1 className="leading-tighter text-5xl font-medium tracking-tighter text-white">
            Optimizacion, <br /> en cada impresion de tu negocio
          </h1>
          <p className="mt-6 text-lg text-white/85 lg:text-xl">
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
