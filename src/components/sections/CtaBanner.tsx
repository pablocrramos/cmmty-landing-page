import { Button } from "@/components/ui/button";

export function CtaBanner() {
  return (
    <section id="contacto" className="bg-primary px-4 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-primary-foreground">
          ¿Listo para optimizar tu operación?
        </h2>
        <p className="text-primary-foreground/80 mt-4 text-lg">
          Solicita tu diagnóstico gratuito y recibe una cotización en 24 horas.
          Sin compromiso.
        </p>
        <div className="mt-10">
          <Button
            variant="alternate"
            className="border-primary-foreground text-primary-foreground hover:border-primary-foreground hover:bg-primary-foreground hover:text-primary hover:shadow-[inset_0_0_0_1px_var(--color-primary-foreground)]"
            render={<a href="mailto:contacto@cmdigital.mx" />}
          >
            Contáctanos ahora
          </Button>
        </div>
      </div>
    </section>
  );
}
