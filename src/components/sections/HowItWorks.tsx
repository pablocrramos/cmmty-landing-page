import {
  MagnifyingGlassIcon,
  FileTextIcon,
  HeadsetIcon,
} from "@phosphor-icons/react/dist/ssr";
import { Section } from "@/components/atoms/Section";
import { Container } from "../atoms/Container";

const steps = [
  {
    icon: MagnifyingGlassIcon,
    number: "01",
    title: "Diagnóstico gratuito",
    description:
      "Analizamos tu operación actual de impresión y gestión documental para identificar oportunidades de mejora.",
  },
  {
    icon: FileTextIcon,
    number: "02",
    title: "Propuesta personalizada",
    description:
      "Diseñamos una solución a la medida de tu empresa con opciones claras de implementación y costos.",
  },
  {
    icon: HeadsetIcon,
    number: "03",
    title: "Implementación y soporte",
    description:
      "Instalamos y configuramos sin interrumpir tu operación, con monitoreo proactivo y soporte permanente.",
  },
];

export function HowItWorks() {
  return (
    <Section variant="white" id="como-funciona">
      <Container>
        {/* Centered heading */}
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-heading text-2xl font-medium tracking-tight sm:text-3xl lg:text-4xl">
            Así de fácil es empezar
          </h2>
          <p className="text-muted-foreground mt-3 text-base">
            Tres pasos para optimizar tu operación de impresión.
          </p>
        </div>

        {/* Steps */}
        <div className="mt-12 grid gap-8 sm:grid-cols-3 lg:mt-14">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col gap-4">
              {/* Number + icon */}
              <div className="flex items-center gap-3">
                <span className="text-primary text-xs font-semibold tracking-widest">
                  {step.number}
                </span>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#dde2e5]">
                  <step.icon className="text-primary size-5" />
                </div>
              </div>

              {/* Text */}
              <p className="text-base leading-relaxed">
                <strong className="font-medium">{step.title}.</strong>{" "}
                <span className="text-muted-foreground">
                  {step.description}
                </span>
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
