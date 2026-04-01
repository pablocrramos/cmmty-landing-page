import { Logo } from "@/components/atoms/Logo";
import { Phone, Mail, MapPin } from "lucide-react";

const footerLinks = {
  servicios: [
    { label: "Impresión Gestionada", href: "#servicios" },
    { label: "Solución Paperless", href: "#servicios" },
    { label: "Renta de Multifuncionales", href: "#servicios" },
  ],
  empresa: [
    { label: "Nosotros", href: "#nosotros" },
    { label: "Contacto", href: "#contacto" },
  ],
  legal: [
    { label: "Aviso de Privacidad", href: "#" },
    { label: "Términos y Condiciones", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="border-border bg-foreground px-4 py-12 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Logo className="[&_div]:bg-primary-foreground [&_div]:text-foreground [&_span]:text-primary-foreground" />
            <p className="text-primary-foreground/60 mt-4 max-w-xs text-sm">
              Tu aliado tecnológico en impresión y gestión documental.
              Distribuidor oficial Ricoh.
            </p>
            <div className="text-primary-foreground/60 mt-6 space-y-2 text-sm">
              <a
                href="tel:+521234567890"
                className="hover:text-primary-foreground flex items-center gap-2"
              >
                <Phone className="size-4" />
                <span>+52 (123) 456-7890</span>
              </a>
              <a
                href="mailto:contacto@cmdigital.mx"
                className="hover:text-primary-foreground flex items-center gap-2"
              >
                <Mail className="size-4" />
                <span>contacto@cmdigital.mx</span>
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="size-4" />
                <span>Ciudad de México, México</span>
              </div>
            </div>
          </div>

          {/* Servicios */}
          <div>
            <h5 className="text-primary-foreground text-sm font-semibold">
              Servicios
            </h5>
            <ul className="mt-4 space-y-2">
              {footerLinks.servicios.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/60 hover:text-primary-foreground text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h5 className="text-primary-foreground text-sm font-semibold">
              Empresa
            </h5>
            <ul className="mt-4 space-y-2">
              {footerLinks.empresa.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/60 hover:text-primary-foreground text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h5 className="text-primary-foreground text-sm font-semibold">
              Legal
            </h5>
            <ul className="mt-4 space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/60 hover:text-primary-foreground text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-primary-foreground/10 text-primary-foreground/40 mt-12 border-t pt-8 text-center text-xs">
          &copy; {new Date().getFullYear()} CM Digital. Todos los derechos
          reservados.
        </div>
      </div>
    </footer>
  );
}
