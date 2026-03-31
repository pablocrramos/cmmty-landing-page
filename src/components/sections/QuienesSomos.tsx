import { SectionHeading } from "@/components/atoms/SectionHeading";
import { StatCard } from "@/components/molecules/StatCard";

const stats = [
  { value: "+200", label: "Empresas atendidas" },
  { value: "40%", label: "Ahorro promedio en impresión" },
  { value: "+500", label: "Equipos gestionados" },
  { value: "24h", label: "Tiempo de respuesta" },
];

export function QuienesSomos() {
  return (
    <section id="quienes-somos" className="px-4 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <span className="border-primary/20 bg-primary/5 text-primary mb-6 inline-block rounded-full border px-3 py-1 text-xs font-semibold">
              Sobre CM Digital
            </span>
            <SectionHeading title="¿Quiénes somos?" centered={false} />
            <p className="text-muted-foreground mt-6">
              CM Digital nació en el noreste de México para resolver un problema
              real: las PYMES gastan demasiado en impresión sin saberlo. Como
              Distribuidor Oficial de Ricoh, diseñamos soluciones de impresión
              gestionada, digitalización y renta de equipos que reducen costos
              hasta un 40% y liberan a tu equipo para enfocarse en lo que
              importa. No somos un proveedor más — somos el aliado operativo de
              más de 200 empresas en México.
            </p>
          </div>
          <div className="grid grid-cols-2 content-center gap-8">
            {stats.map((stat) => (
              <StatCard
                key={stat.label}
                value={stat.value}
                label={stat.label}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
