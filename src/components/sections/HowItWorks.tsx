import { Search, FileText, Settings, Headphones } from "lucide-react";
import { SectionHeading } from "@/components/atoms/SectionHeading";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Diagnóstico gratuito",
    description:
      "Analizamos tu operación actual de impresión y gestión documental para identificar oportunidades de mejora.",
  },
  {
    number: "02",
    icon: FileText,
    title: "Propuesta personalizada",
    description:
      "Diseñamos una solución a la medida de tu empresa con opciones claras de implementación y costos.",
  },
  {
    number: "03",
    icon: Settings,
    title: "Implementación",
    description:
      "Instalamos, configuramos y ponemos en marcha la solución sin interrumpir tu operación diaria.",
  },
  {
    number: "04",
    icon: Headphones,
    title: "Soporte continuo",
    description:
      "Monitoreo proactivo, mantenimiento y soporte técnico permanente para que nunca te preocupes.",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-foreground px-4 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="Así de fácil es trabajar con nosotros"
          subtitle="En 4 simples pasos transformamos tu operación de impresión y gestión documental."
          className="[&_h2]:text-primary-foreground [&_p]:text-primary-foreground/60"
        />

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              <span className="font-heading text-primary-foreground/10 text-5xl font-bold">
                {step.number}
              </span>
              <div className="mt-4">
                <step.icon className="text-primary size-8" />
                <h4 className="text-primary-foreground mt-4">{step.title}</h4>
                <p className="text-primary-foreground/60 mt-2 text-sm">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
