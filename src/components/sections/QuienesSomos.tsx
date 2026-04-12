import { StatCard } from "@/components/molecules/StatCard";

const stats = [
  { value: "2003", label: "Año de fundación" },
  { value: "22 años", label: "De trayectoria" },
  { value: "Monterrey", label: "Nuestra casa" },
  { value: "Ricoh", label: "Distribuidor oficial" },
];

export function QuienesSomos() {
  return (
    <section id="quienes-somos" className="px-4 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <p className="text-primary mb-3 text-xs font-medium tracking-widest uppercase">
              Sobre CM Digital
            </p>
            <h2 className="font-heading text-3xl font-normal tracking-tighter lg:text-4xl">
              ¿Quiénes somos?
            </h2>
            <p className="text-muted-foreground mt-6">
              CM Digital nació en Monterrey en 2003 para resolver un problema
              real: las PYMES gastan demasiado en impresión sin saberlo. Como
              Distribuidor Oficial de Ricoh, diseñamos soluciones de impresión
              gestionada, digitalización y renta de equipos que simplifican tu
              operación y liberan a tu equipo para enfocarse en lo que importa.
              No somos un proveedor más — somos el aliado operativo de las PYMES
              del noreste de México.
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
