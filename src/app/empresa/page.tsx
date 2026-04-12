import type { Metadata } from "next";
import { EnvelopeSimpleIcon } from "@phosphor-icons/react/dist/ssr";
import { Navbar } from "@/components/organisms/Navbar";
import { Footer } from "@/components/organisms/Footer";
import { Section } from "@/components/atoms/Section";
import { Container } from "@/components/atoms/Container";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Empresa — CM Digital",
  description:
    "CM Digital es una empresa regiomontana fundada el 3 de octubre de 2003, dedicada a transformar la gestión documental de las PYMES en México como distribuidor oficial Ricoh.",
};

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
      <main className="">
        {/* ── Hero ─────────────────────────────────────────────────────────── */}
        <Section variant="light-gray">
          <Container>
            <div className="max-w-2xl">
              <h1 className="font-heading text-5xl font-normal tracking-tighter lg:text-6xl">
                CM Digital una historia con propósito.
              </h1>
              <p className="text-muted-foreground mt-6 text-lg leading-relaxed">
                CM Digital nació en Monterrey el 3 de octubre de 2003 con la
                convicción de que la tecnología de impresión y gestión
                documental no debía ser exclusiva de las grandes corporaciones.
                Hoy seguimos siendo el aliado operativo de las PYMES del noreste
                de México.
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
                  El 3 de octubre de 2003, dos emprendedores regiomontanos
                  hombre y mujer decidieron apostar por un negocio propio.
                  Arrancaron con pocas impresoras, pero con mucha hambre de
                  crecer, desde un pequeño local en Ruperto Martínez, en el
                  corazón del centro de Monterrey.
                </p>
                <p className="text-muted-foreground">
                  Lo que les sobraba era convicción: demostrar que desde el
                  norte de México se podían construir empresas de clase mundial,
                  y hacerlo ofreciendo a las PYMES regiomontanas algo que ningún
                  corporativo podía dar — atención personalizada, cercana y con
                  un compromiso real por cada cliente.
                </p>
                <p className="text-muted-foreground">
                  El boca en boca hizo lo demás. Año tras año sumaron clientes,
                  sumaron personas al equipo y sumaron responsabilidades. Más de
                  dos décadas después, CM Digital sigue operando desde Monterrey
                  con la misma filosofía con la que arrancó.
                </p>
              </div>

              {/* Founding card + facts */}
              <div className="flex flex-col gap-6">
                <div className="bg-card-surface rounded-2xl p-8 shadow-sm">
                  <p className="text-primary mb-3 text-xs font-medium tracking-widest uppercase">
                    Fundación
                  </p>
                  <p className="font-heading text-3xl leading-tight font-normal tracking-tighter">
                    3 de octubre de 2003
                  </p>
                  <p className="text-muted-foreground mt-4 text-sm leading-relaxed">
                    Un pequeño local en Ruperto Martínez, en el centro de
                    Monterrey, fue el punto de partida. Pocas impresoras, mucha
                    hambre de crecer.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-5">
                  {[
                    { value: "2003", label: "Año de fundación" },
                    { value: "22 años", label: "De trayectoria" },
                    { value: "Monterrey", label: "Nuestra casa" },
                    { value: "Ricoh", label: "Distribuidor oficial" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-lg bg-white p-5 shadow-sm"
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
              <div className="rounded-2xl bg-white p-8 shadow-sm">
                <p className="text-primary mb-3 text-xs font-medium tracking-widest uppercase">
                  Misión
                </p>
                <p className="font-heading text-xl leading-snug font-normal tracking-tight">
                  Simplificar la operación documental de las empresas mexicanas
                  con soluciones tecnológicas accesibles, confiables y de clase
                  mundial.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-8 shadow-sm">
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

        {/* ── Valores ───────────────────────────────────────────────────────── */}
        <Section variant="white">
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
        <Section variant="light-gray">
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
                  href="mailto:admcm@cmmonterrey.com"
                  className="flex items-center gap-3 rounded-lg bg-white px-6 py-4 shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="bg-card-surface flex h-10 w-10 shrink-0 items-center justify-center rounded-lg">
                    <EnvelopeSimpleIcon className="text-primary size-5" />
                  </div>
                  <div>
                    <p className="text-foreground text-xs font-medium">
                      Manda tu CV
                    </p>
                    <p className="text-muted-foreground text-sm">
                      admcm@cmmonterrey.com
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
