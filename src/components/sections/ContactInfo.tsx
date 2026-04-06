import {
  PhoneIcon,
  EnvelopeSimpleIcon,
  MapPinIcon,
} from "@phosphor-icons/react/dist/ssr";
import { Section } from "@/components/atoms/Section";

const contactItems = [
  {
    icon: PhoneIcon,
    label: "Teléfono",
    value: "+52 (81) 8335-0000",
    href: "tel:+528183350000",
  },
  {
    icon: EnvelopeSimpleIcon,
    label: "Correo",
    value: "contacto@cmdigital.mx",
    href: "mailto:contacto@cmdigital.mx",
  },
  {
    icon: MapPinIcon,
    label: "Dirección",
    value: "Monterrey Centro, Nuevo León, México",
    href: null,
  },
];

export function ContactInfo() {
  return (
    <Section variant="white">
      <div className="mx-auto max-w-3xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="font-heading text-2xl font-normal tracking-tighter">
            También puedes contactarnos directamente
          </h2>
        </div>

        <div className="grid gap-10 sm:grid-cols-2">
          {/* Contact details */}
          <div className="flex flex-col gap-6">
            {contactItems.map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[0.38rem] border border-[#dde2e5]">
                  <Icon className="text-primary size-5" />
                </div>
                <div>
                  <p className="text-muted-foreground text-xs font-medium tracking-wide uppercase">
                    {label}
                  </p>
                  {href ? (
                    <a
                      href={href}
                      className="hover:text-primary text-base font-medium transition-colors"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-base font-medium">{value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Google Maps */}
          <div className="overflow-hidden rounded-[0.38rem] border border-[#dde2e5]">
            <iframe
              title="Ubicación CM Digital"
              src="https://maps.google.com/maps?q=Monterrey+Centro,+Nuevo+León,+México&output=embed&z=14"
              width="100%"
              height="280"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
