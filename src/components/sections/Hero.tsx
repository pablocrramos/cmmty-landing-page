import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-amber-600 px-4 py-20 lg:px-8 lg:pt-14 lg:pb-32">
      <div className="mx-auto max-w-7xl">
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
