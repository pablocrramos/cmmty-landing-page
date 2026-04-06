import type { Metadata } from "next";
import {
  LinkedinLogoIcon,
  EnvelopeSimpleIcon,
  QuotesIcon,
} from "@phosphor-icons/react/dist/ssr";
import { Navbar } from "@/components/organisms/Navbar";
import { Footer } from "@/components/organisms/Footer";
import { Section } from "@/components/atoms/Section";
import { Container } from "@/components/atoms/Container";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Empresa — CM Digital",
  description:
    "Conoce la historia de CM Digital, empresa regiomontana fundada con el propósito de transformar la gestión documental de las PYMES en México.",
};

const hitos = [
  {
    year: "1999",
    title: "El inicio",
    description:
      "Carlos Montemayor y Miguel Garza fundan CM Digital desde una pequeña oficina en Monterrey Centro, con una fotocopiadora rentada y una visión clara.",
  },
  {
    year: "2004",
    title: "Distribuidor oficial Ricoh",
    description:
      "Tras cinco años de crecimiento sostenido, CM Digital se convierte en distribuidor oficial de Ricoh para el noreste de México.",
  },
  {
    year: "2009",
    title: "Reconocimiento nacional",
    description:
      "Ricoh reconoce a CM Digital entre sus Top 10 distribuidores de mayor rendimiento en toda Latinoamérica.",
  },
  {
    year: "Hoy",
    title: "Más de 9,000 equipos instalados",
    description:
      "Con 25 años de trayectoria, presencia en todo México y un equipo de más de 80 personas, seguimos creciendo.",
  },
];

const valores = [
  {
    title: "Compromiso con la comunidad",
    description:
      "Nacimos en Monterrey y para Monterrey. Cada empleo que generamos es una familia que crece junto a nosotros.",
  },
  {
    title: "Excelencia técnica",
    description:
      "Capacitamos a nuestro equipo continuamente para ofrecer siempre la solución más avanzada y confiable.",
  },
  {
    title: "Relaciones de largo plazo",
    description:
      "No buscamos clientes, buscamos socios. Nuestro éxito depende directamente del éxito de quienes nos contratan.",
  },
];

export default function EmpresaPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* ── Hero ─────────────────────────────────────────────────────────── */}
        <Section variant="light-gray">
          <Container>
            <div className="max-w-2xl">
              <p className="text-primary mb-4 text-sm font-medium tracking-widest uppercase">
                Nuestra empresa
              </p>
              <h1 className="font-heading text-5xl font-normal tracking-tighter lg:text-6xl">
                Dos emprendedores,
                <br />
                una ciudad, un propósito.
              </h1>
              <p className="text-muted-foreground mt-6 text-lg leading-relaxed">
                CM Digital nació en Monterrey con la convicción de que la
                tecnología de impresión y gestión documental no debía ser
                exclusiva de las grandes corporaciones. Hoy somos el aliado de
                cientos de empresas en todo México.
              </p>
            </div>
          </Container>
        </Section>

        {/* ── Historia ─────────────────────────────────────────────────────── */}
        <Section variant="white">
          <Container>
            <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
              {/* Story */}
              <div className="space-y-6 text-base leading-relaxed">
                <h2 className="font-heading text-3xl font-normal tracking-tighter">
                  Cómo comenzó todo
                </h2>
                <p className="text-muted-foreground">
                  Corría 1999 cuando Carlos Montemayor y Miguel Garza, dos
                  ingenieros egresados del Tecnológico de Monterrey, se
                  encontraron en una exposición tecnológica en el centro de la
                  ciudad. Ambos habían trabajado en grandes corporativos y
                  compartían la misma frustración: las pequeñas y medianas
                  empresas regiomontanas no tenían acceso a soluciones
                  profesionales de impresión. Lo que existía era caro,
                  complicado y diseñado para otro tipo de cliente.
                </p>
                <p className="text-muted-foreground">
                  Con ahorros propios, una oficina pequeña en Monterrey Centro y
                  una fotocopiadora rentada, decidieron apostar. No solo por un
                  negocio rentable, sino por algo más grande: demostrar que
                  desde el norte de México se podían construir empresas de clase
                  mundial. Desde el primer día, cada equipo que instalaban venía
                  acompañado de algo que ningún corporativo podía dar: atención
                  personalizada y un compromiso real con el cliente.
                </p>
                <p className="text-muted-foreground">
                  El boca en boca hizo lo demás. Año tras año sumaron clientes,
                  sumaron personas al equipo y sumaron responsabilidades. Para
                  Carlos y Miguel, generar empleo de calidad en su ciudad
                  siempre fue parte del objetivo, no una consecuencia.
                </p>
              </div>

              {/* Quote + founding stats */}
              <div className="flex flex-col gap-6">
                <div className="rounded-2xl border border-[#dde2e5] bg-[#fbfbfb] p-8">
                  <QuotesIcon className="text-primary mb-4 size-8" />
                  <blockquote className="font-heading text-xl leading-snug font-normal tracking-tight">
                    &ldquo;No queríamos solo salir adelante. Queríamos que
                    Monterrey supiera que aquí también se construyen empresas
                    que duran.&rdquo;
                  </blockquote>
                  <p className="text-muted-foreground mt-4 text-sm">
                    — Carlos Montemayor, co-fundador de CM Digital
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: "1999", label: "Año de fundación" },
                    { value: "80+", label: "Personas en el equipo" },
                    { value: "9,000+", label: "Equipos instalados" },
                    { value: "25 años", label: "En la industria" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-[0.38rem] border border-[#dde2e5] bg-white p-5"
                    >
                      <p className="font-heading text-3xl font-normal tracking-tighter">
                        {stat.value}
                      </p>
                      <p className="text-muted-foreground mt-1 text-sm">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* ── Misión y Visión ───────────────────────────────────────────────── */}
        <Section variant="light-gray">
          <Container>
            <h2 className="font-heading mb-12 text-3xl font-normal tracking-tighter">
              Lo que nos mueve
            </h2>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-[#dde2e5] bg-white p-8">
                <p className="text-primary mb-3 text-xs font-medium tracking-widest uppercase">
                  Misión
                </p>
                <p className="font-heading text-xl leading-snug font-normal tracking-tight">
                  Simplificar la operación documental de las empresas mexicanas
                  con soluciones tecnológicas accesibles, confiables y de clase
                  mundial.
                </p>
              </div>
              <div className="rounded-2xl border border-[#dde2e5] bg-white p-8">
                <p className="text-primary mb-3 text-xs font-medium tracking-widest uppercase">
                  Visión
                </p>
                <p className="font-heading text-xl leading-snug font-normal tracking-tight">
                  Ser la empresa líder en gestión documental del noreste de
                  México, reconocida por transformar cómo las empresas gestionan
                  su información y su gente.
                </p>
              </div>
            </div>
          </Container>
        </Section>

        {/* ── Hitos ─────────────────────────────────────────────────────────── */}
        <Section variant="white">
          <Container>
            <h2 className="font-heading mb-12 text-3xl font-normal tracking-tighter">
              25 años de historia
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {hitos.map((hito) => (
                <div key={hito.year} className="flex flex-col gap-3">
                  <p className="font-heading text-primary text-4xl font-normal tracking-tighter">
                    {hito.year}
                  </p>
                  <p className="font-heading text-base font-medium">
                    {hito.title}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {hito.description}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* ── Valores ───────────────────────────────────────────────────────── */}
        <Section variant="light-gray">
          <Container>
            <h2 className="font-heading mb-12 text-3xl font-normal tracking-tighter">
              Lo que nos define
            </h2>
            <div className="grid gap-8 sm:grid-cols-3">
              {valores.map((valor) => (
                <div key={valor.title} className="flex flex-col gap-3">
                  <div className="bg-primary h-px w-8" />
                  <p className="font-heading text-base font-semibold">
                    {valor.title}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {valor.description}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* ── Únete ─────────────────────────────────────────────────────────── */}
        <Section variant="white">
          <Container>
            <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-24">
              <div className="max-w-lg">
                <p className="text-primary mb-4 text-sm font-medium tracking-widest uppercase">
                  Trabaja con nosotros
                </p>
                <h2 className="font-heading text-3xl font-normal tracking-tighter lg:text-4xl">
                  ¿Quieres formar parte del equipo?
                </h2>
                <p className="text-muted-foreground mt-4 text-base leading-relaxed">
                  Buscamos personas con ganas de crecer, aprender y contribuir
                  al desarrollo tecnológico de las empresas mexicanas. Si te
                  identificas con nuestra historia, nos encantaría conocerte.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <a
                  href="mailto:talento@cmdigital.mx"
                  className="hover:border-primary/40 flex items-center gap-3 rounded-[0.38rem] border border-[#dde2e5] px-6 py-4 transition-colors hover:bg-[#fbfbfb]"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[0.38rem] border border-[#dde2e5]">
                    <EnvelopeSimpleIcon className="text-primary size-5" />
                  </div>
                  <div>
                    <p className="text-foreground text-xs font-medium">
                      Manda tu CV
                    </p>
                    <p className="text-muted-foreground text-sm">
                      talento@cmdigital.mx
                    </p>
                  </div>
                </a>

                <a
                  href="https://linkedin.com/company/cmdigital"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:border-primary/40 flex items-center gap-3 rounded-[0.38rem] border border-[#dde2e5] px-6 py-4 transition-colors hover:bg-[#fbfbfb]"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[0.38rem] border border-[#dde2e5]">
                    <LinkedinLogoIcon className="text-primary size-5" />
                  </div>
                  <div>
                    <p className="text-foreground text-xs font-medium">
                      Síguenos en LinkedIn
                    </p>
                    <p className="text-muted-foreground text-sm">
                      CM Digital · Monterrey
                    </p>
                  </div>
                </a>

                <Button render={<a href="/contacto" />} className="mt-2">
                  Contactar al equipo
                </Button>
              </div>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
