import {
  PhoneIcon,
  EnvelopeSimpleIcon,
  MapPinIcon,
} from "@phosphor-icons/react/dist/ssr";
import { Section } from "@/components/atoms/Section";

type ContactValue = { text: string; href: string | null };

type ContactItem = {
  icon: typeof PhoneIcon;
  label: string;
  values: ContactValue[];
};

const contactItems: ContactItem[] = [
  {
    icon: PhoneIcon,
    label: "Teléfonos",
    values: [
      { text: "81 1553 8428", href: "tel:+528115538428" },
      { text: "81 1636 9486", href: "tel:+528116369486" },
    ],
  },
  {
    icon: EnvelopeSimpleIcon,
    label: "Correos",
    values: [
      {
        text: "admcm@cmmonterrey.com",
        href: "mailto:admcm@cmmonterrey.com",
      },
      {
        text: "edith.garcia@cmmonterrey.com",
        href: "mailto:edith.garcia@cmmonterrey.com",
      },
    ],
  },
  {
    icon: MapPinIcon,
    label: "Dirección",
    values: [
      {
        text: "Reforma #802, Monterrey Centro, C.P. 64000",
        href: null,
      },
    ],
  },
];

export function ContactInfo() {
  return (
    <Section variant="white">
      <div className="mx-auto max-w-3xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mb-10">
          <p className="text-primary mb-3 text-xs font-medium tracking-widest uppercase">
            Contacto directo
          </p>
          <h2 className="font-heading text-3xl font-normal tracking-tighter lg:text-4xl">
            También puedes contactarnos directamente
          </h2>
        </div>

        <div className="grid gap-10 sm:grid-cols-2">
          {/* Contact details */}
          <div className="flex flex-col gap-6">
            {contactItems.map(({ icon: Icon, label, values }) => (
              <div key={label} className="flex items-start gap-4">
                <div className="bg-card-surface flex h-10 w-10 shrink-0 items-center justify-center rounded-lg shadow-sm">
                  <Icon className="text-primary size-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-muted-foreground text-xs font-medium tracking-wide uppercase">
                    {label}
                  </p>
                  <div className="mt-1 flex flex-col gap-0.5">
                    {values.map(({ text, href }) =>
                      href ? (
                        <a
                          key={text}
                          href={href}
                          className="hover:text-primary text-base font-medium break-words transition-colors"
                        >
                          {text}
                        </a>
                      ) : (
                        <p
                          key={text}
                          className="text-base font-medium break-words"
                        >
                          {text}
                        </p>
                      ),
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Google Maps */}
          <div className="overflow-hidden rounded-2xl shadow-sm">
            <iframe
              title="Ubicación CM Digital"
              src="https://maps.google.com/maps?q=Reforma+802,+Monterrey+Centro,+64000&output=embed&z=16"
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
