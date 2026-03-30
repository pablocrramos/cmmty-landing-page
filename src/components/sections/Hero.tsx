import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="bg-background relative overflow-hidden px-4 py-20 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <h1>Tu operación de impresión, resuelta</h1>
          <p className="text-muted-foreground mt-6 text-lg lg:text-xl">
            Somos el aliado tecnológico que las PYMES necesitan. Nos encargamos
            de tu impresión, digitalización y equipos para que te enfoques en
            hacer crecer tu negocio.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button render={<a href="#contacto" />}>
              Solicita tu diagnóstico gratuito
            </Button>
            <Button variant="alternate" render={<a href="#servicios" />}>
              Conoce nuestros servicios
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
