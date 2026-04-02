"use client";
import {
  MagnifyingGlassIcon,
  FileTextIcon,
  GearSixIcon,
  HeadsetIcon,
} from "@phosphor-icons/react";
import { SectionHeading } from "@/components/atoms/SectionHeading";

const steps = [
  {
    number: "1",
    icon: MagnifyingGlassIcon,
    title: "Diagnóstico gratuito",
    description:
      "Analizamos tu operación actual de impresión y gestión documental para identificar oportunidades de mejora.",
  },
  {
    number: "2",
    icon: FileTextIcon,
    title: "Propuesta personalizada",
    description:
      "Diseñamos una solución a la medida de tu empresa con opciones claras de implementación y costos.",
  },
  {
    number: "3",
    icon: GearSixIcon,
    title: "Implementación",
    description:
      "Instalamos, configuramos y ponemos en marcha la solución sin interrumpir tu operación diaria.",
  },
  {
    number: "4",
    icon: HeadsetIcon,
    title: "Soporte continuo",
    description:
      "Monitoreo proactivo, mantenimiento y soporte técnico permanente para que nunca te preocupes.",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-white px-8 py-28 lg:px-16 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Así de fácil es trabajar con nosotros"
          subtitle="En 4 simples pasos transformamos tu operación de impresión y gestión documental."
          className="[&_p]:text-muted-foreground [&_h2]:text-black"
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              <div className="mt-4">
                <step.icon className="text-primary t size-8" />
                <h4 className="mt-4 text-lg font-normal text-black">
                  {step.title}
                </h4>
                <p className="text-muted-foreground mt-6 text-lg leading-snug tracking-tighter font-stretch-normal">
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
