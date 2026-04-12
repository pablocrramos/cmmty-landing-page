import Image from "next/image";
import { Logo } from "@/components/atoms/Logo";

const navColumns = [
  {
    title: "Servicios",
    links: [
      { label: "Servicio MPS", href: "/#servicios" },
      { label: "Sistema Paperless", href: "/#servicios" },
      { label: "Renta Equipos", href: "/#servicios" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { label: "Nosotros", href: "/empresa" },
      { label: "Contacto", href: "/contacto" },
    ],
  },
  {
    title: "Contacto",
    links: [
      { label: "admcm@cmmonterrey.com", href: "mailto:admcm@cmmonterrey.com" },
      { label: "81 1553 8428", href: "tel:+528115538428" },
      { label: "81 1636 9486", href: "tel:+528116369486" },
    ],
  },
] as const;

export function Footer() {
  return (
    <footer className="bg-foreground relative overflow-hidden">
      <div className="relative z-10 mx-auto max-w-325 px-3 pt-24 pb-12 sm:px-4 lg:px-3 lg:pt-32 lg:pb-16">
        <div className="grid gap-16 lg:grid-cols-[1fr_2fr] lg:gap-24">
          {/* Brand column */}
          <div className="flex flex-col items-start gap-16 lg:min-h-100 lg:justify-between lg:gap-0">
            <Logo variant="dark-bg" className="h-9" />
            <div className="text-primary-foreground/50 text-sm leading-relaxed">
              <p>© {new Date().getFullYear()} CM Digital</p>
              <p className="mt-1.5">
                Reforma #802, Monterrey Centro · C.P. 64000
              </p>
            </div>
          </div>

          {/* Nav columns */}
          <nav
            aria-label="Enlaces del sitio"
            className="grid grid-cols-2 gap-x-6 gap-y-2 sm:grid-cols-3 sm:gap-x-10"
          >
            {navColumns.map(({ title, links }) => (
              <div key={title} className="min-w-0">
                <p className="text-primary-foreground text-sm font-semibold">
                  {title}
                </p>
                <ul className="mt-6">
                  {links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-primary-foreground/50 hover:text-primary-foreground text-sm wrap-break-word transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
      </div>

      {/* ── Brand glimpse (bottom-right corner decoration) ─────────────── */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-12 -bottom-16 opacity-[0.06] sm:-right-16 sm:-bottom-20 lg:-right-20 lg:-bottom-24"
      >
        <Image
          src="/assets/svgs/logos/brand/cm-dark.svg"
          alt=""
          width={690}
          height={600}
          className="h-auto w-64 sm:w-80 lg:w-md"
        />
      </div>
    </footer>
  );
}
