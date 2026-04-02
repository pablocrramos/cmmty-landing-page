import { Logo } from "@/components/atoms/Logo";
const navColumns = [
  {
    title: "Servicios",
    links: [
      { label: "Servicio MPS", href: "#servicios" },
      { label: "Sistema Paperless", href: "#servicios" },
      { label: "Renta Equipos", href: "#servicios" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { label: "Nosotros", href: "#nosotros" },
      { label: "Contactos", href: "#contacto" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Linkedin", href: "#" },
      { label: "Facebook", href: "#" },
      { label: "Gmail", href: "mailto:adm@cmty@gmail.com" },
    ],
  },
] as const;

export function Footer() {
  return (
    <footer className="bg-foreground px-4 pt-16 lg:px-8 lg:pt-20">
      <div className="mx-auto max-w-7xl">
        {/* Main grid - Columnas de navegación alineadas a la derecha */}
        <div className="flex flex-col gap-8 lg:flex-row lg:justify-between lg:gap-12">
          {/* Brand column - Se mantiene a la izquierda */}
          <div className="lg:max-w-2/3">
            <Logo variant="dark-bg" className="h-9" />
            <p className="text-primary-foreground/60 mt-4 text-lg leading-snug tracking-tight md:text-4xl">
              Tus documentos sin friccion.
            </p>
            <div className="text-primary-foreground/60 mt-6 space-y-2 text-sm">
              {/* Contact info commented out as per original */}
            </div>
          </div>

          {/* Nav columns container - Alineado a la derecha con gap reducido */}
          <nav
            className="flex flex-col gap-8 sm:flex-row sm:gap-6 lg:gap-8 xl:gap-12"
            aria-label="Enlaces del sitio"
          >
            {navColumns.map(({ title, links }) => (
              <div key={title} className="min-w-fit">
                <ul className="space-y-0.5">
                  {links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-primary-foreground/60 hover:text-primary-foreground focus-visible:outline-primary-foreground text-md inline-block transition-colors focus-visible:outline-2 focus-visible:outline-offset-2"
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

        {/* Bottom bar */}
        <div className="text-primary-foreground/40 flex flex-col justify-between gap-2 pt-32 pb-8 text-sm sm:flex-row sm:gap-4 md:text-base">
          <span>
            © {new Date().getFullYear()} CM Digital. Todos los derechos
            reservados.
          </span>
          <span>Monterrey Centro, Nuevo León</span>
        </div>
      </div>
    </footer>
  );
}

//OLD FOOTER - TODO: Agregar el texto gigante de CM Digital cuando tengamos una version mas estable de la pagina.
// import { Logo } from "@/components/atoms/Logo";
// import { Phone, Mail, MapPin } from "lucide-react";

// const navColumns = [
//   {
//     title: "Servicios",
//     links: [
//       { label: "Impresión Gestionada", href: "#servicios" },
//       { label: "Solución Paperless", href: "#servicios" },
//       { label: "Renta de Multifuncionales", href: "#servicios" },
//     ],
//   },
//   {
//     title: "Empresa",
//     links: [
//       { label: "Nosotros", href: "#nosotros" },
//       { label: "Contacto", href: "#contacto" },
//     ],
//   },
//   {
//     title: "Legal",
//     links: [
//       { label: "Aviso de Privacidad", href: "#" },
//       { label: "Términos y Condiciones", href: "#" },
//     ],
//   },
// ];

// export function Footer() {
//   return (
//     <footer className="bg-foreground px-4 pt-16 lg:px-8 lg:pt-20">
//       <div className="mx-auto max-w-7xl">
//         {/* Main grid */}
//         <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-5">
//           {/* Brand column */}
//           <div className="lg:col-span-2">
//             <Logo variant="dark-bg" className="h-9" />
//             <p className="text-primary-foreground/60 mt-4 max-w-md text-lg leading-snug tracking-tight">
//               Tu aliado tecnológico en impresión y gestión documental.
//               Distribuidor oficial Ricoh.
//             </p>
//             <div className="text-primary-foreground/60 mt-6 space-y-2 text-sm">
//               {/* <a
//                 href="tel:+521234567890"
//                 className="hover:text-primary-foreground flex items-center gap-2"
//               >
//                 <Phone className="size-4 shrink-0" />
//                 <span>+52 (123) 456-7890</span>
//               </a>
//               <a
//                 href="mailto:contacto@cmdigital.mx"
//                 className="hover:text-primary-foreground flex items-center gap-2"
//               >
//                 <Mail className="size-4 shrink-0" />
//                 <span>contacto@cmdigital.mx</span>
//               </a> */}
//             </div>
//           </div>

//           {/* Nav columns — each li has a fixed height for uniform rhythm */}
//           {navColumns.map(({ title, links }) => (
//             <div key={title}>
//               <p className="text-primary-foreground text-lg font-medium">
//                 {title}
//               </p>
//               <ul className="mt-4">
//                 {links.map((link) => (
//                   <li key={link.label} className="flex h-8 items-center">
//                     <a
//                       href={link.href}
//                       className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors"
//                     >
//                       {link.label}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>

//         {/* Giant brand watermark */}
//         {/* <div className="mt-16 h-fit overflow-hidden lg:mt-20">
//           <p
//             className="font-heading text-primary-foreground/30 leading-tight font-black tracking-tight select-none"
//             style={{ fontSize: "clamp(2rem, 17vw, 15rem)" }}
//           >
//             CMDIGITAL
//           </p>
//         </div> */}

//         {/* Bottom bar */}
//         <div className="text-primary-foreground/40 md:text-md flex flex-col justify-between pt-28 pb-8 text-sm sm:flex-row">
//           <span>
//             &copy; {new Date().getFullYear()} CM Digital. Todos los derechos
//             reservados.
//           </span>
//           <span>Monterrey Centro, Nuevo León</span>
//         </div>
//       </div>
//     </footer>
//   );
// }
