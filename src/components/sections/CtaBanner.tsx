import {
  PrinterIcon,
  BuildingsIcon,
  ArrowRightIcon,
} from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/button";

const cards = [
  {
    icon: PrinterIcon,
    title: "Soluciones a tu medida",
    description:
      "Impresión gestionada, digitalización y renta de equipos Ricoh para tu operación.",
    link: { label: "Ver servicios", href: "#servicios" },
  },
  {
    icon: BuildingsIcon,
    title: "25 años respaldándonos",
    description:
      "Conoce nuestra historia, aliados tecnológicos y por qué más de 9,000 equipos confían en nosotros.",
    link: { label: "Conoce la empresa", href: "/empresa" },
  },
];

export function CtaBanner() {
  return (
    <section className="bg-foreground px-4 pt-20 pb-16 sm:px-6 lg:px-8 lg:pt-28 lg:pb-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left — heading + CTAs */}
          <div className="max-w-lg">
            <h2 className="font-heading text-3xl leading-snug font-medium tracking-tight text-white lg:text-4xl">
              ¿Listo para optimizar tu operación?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/60">
              Ponte en contacto con nosotros para diseñar una solución a la
              medida de tu empresa. Sin compromisos.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button render={<a href="/contacto" />}>
                Cotiza ahora <ArrowRightIcon className="size-4" />
              </Button>
              <Button
                variant="alternate"
                render={<a href="/empresa" />}
                className="border-white/20 text-white hover:border-white/40 hover:text-white hover:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.4)]"
              >
                Conoce nuestra empresa
              </Button>
            </div>
          </div>

          {/* Right — info cards */}
          <div className="flex flex-col gap-6 lg:pt-2">
            {cards.map(({ icon: Icon, title, description, link }) => (
              <div key={title} className="group flex gap-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 transition-colors group-hover:border-white/20 group-hover:bg-white/10">
                  <Icon className="text-primary size-5" weight="duotone" />
                </div>
                <div>
                  <h3 className="text-[0.95rem] font-medium text-white">
                    {title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-white/50">
                    {description}
                  </p>
                  <a
                    href={link.href}
                    className="text-primary mt-2 inline-flex items-center gap-1 text-sm font-medium transition-colors hover:text-red-400"
                  >
                    {link.label}{" "}
                    <ArrowRightIcon className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
