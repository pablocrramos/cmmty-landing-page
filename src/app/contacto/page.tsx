import type { Metadata } from "next";
import { Navbar } from "@/components/organisms/Navbar";
import { Footer } from "@/components/organisms/Footer";
import { ContactForm } from "@/components/sections/ContactForm";
import { ContactInfo } from "@/components/sections/ContactInfo";

export const metadata: Metadata = {
  title: "Contacto — CM Digital",
  description:
    "Cotiza tu solución de impresión gestionada, digitalización o renta de multifuncionales Ricoh. Uno de nuestros expertos te contactará en menos de 24 horas.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="">
        <ContactForm />
        <ContactInfo />
      </main>
      <Footer />
    </>
  );
}
