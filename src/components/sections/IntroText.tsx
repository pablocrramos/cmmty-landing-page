import { Section } from "@/components/atoms/Section";
import { TextBlock } from "../atoms/TextBlock";

export function IntroText() {
  return (
    <Section variant="light-gray">
      <TextBlock className="py-16">
        Tu operación de impresión, resuelta por completo.
        <p className="text-muted-foreground/70">
          Equipa tu negocio con servicios gestionados de impresión,
          digitalización y soporte técnico que se adaptan a lo que necesitas.
        </p>
      </TextBlock>
    </Section>
  );
}
