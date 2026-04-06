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
    title: "Diagnóstico gratuito.",
    description:
      "Analizamos tu operación actual de impresión y gestión documental para identificar oportunidades de mejora.",
  },
  {
    icon: FileTextIcon,
    title: "Propuesta personalizada.",
    description:
      "Diseñamos una solución a la medida de tu empresa con opciones claras de implementación y costos.",
  },
  {
    icon: HeadsetIcon,
    title: "Implementación y soporte continuo.",
    description:
      "Instalamos y configuramos la solución sin interrumpir tu operación, con monitoreo proactivo y soporte técnico permanente.",
  },
];

export function HowItWorks() {
  return (
    <Section variant="white">
      <Container>
        <h2 className="font-heading max-w-sm text-4xl font-normal tracking-tighter md:text-[2.5rem]">
          Así de fácil es trabajar con nosotros
        </h2>

        <div className="mt-16 grid gap-10 sm:grid-cols-3">
          {steps.map((step) => (
            <div key={step.title} className="flex flex-col gap-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-[0.38rem] border border-[#dde2e5]">
                <step.icon className="text-primary size-5" />
              </div>
              <p className="text-base leading-relaxed">
                <strong className="font-semibold">{step.title}</strong>{" "}
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
