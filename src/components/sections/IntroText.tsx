import { Section } from "@/components/atoms/Section";

export function IntroText() {
  return (
    <Section variant="light-gray">
      <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:py-20">
        <p className="font-heading text-2xl leading-snug font-normal tracking-tight sm:text-3xl lg:text-4xl">
          CMdigital equipa tu negocio con impresión gestionada 🖨️ digitalización
          de documentos 📄 y soporte especializado 🔧 que se adapta a ti.
        </p>
      </div>
    </Section>
  );
}
