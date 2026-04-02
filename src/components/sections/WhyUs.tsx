import {
  ShieldCheckIcon,
  ClockIcon,
  MapPinIcon,
  WrenchIcon,
} from "@phosphor-icons/react";
import { SectionHeading } from "@/components/atoms/SectionHeading";
import { StatCard } from "@/components/molecules/StatCard";

const differentiators = [
  {
    icon: ShieldCheckIcon,
    title: "Distribuidor Oficial Ricoh",
    description:
      "Acceso directo a equipos, refacciones y soporte de fábrica. Sin intermediarios.",
  },
  {
    icon: ClockIcon,
    title: "Soporte 7 días",
    description:
      "Atención técnica disponible toda la semana para que tu operación nunca se detenga.",
  },
  {
    icon: MapPinIcon,
    title: "Cobertura nacional",
    description:
      "Presencia en las principales ciudades de México con tiempos de respuesta garantizados.",
  },
  {
    icon: WrenchIcon,
    title: "Servicio integral",
    description:
      "Desde el diagnóstico hasta el soporte continuo, todo en un solo proveedor.",
  },
];

const stats = [
  { value: "+200", label: "Empresas atendidas" },
  { value: "40%", label: "Ahorro promedio en impresión" },
  { value: "+500", label: "Equipos gestionados" },
  { value: "24h", label: "Tiempo de respuesta" },
];

export function WhyUs() {
  return (
    <section id="nosotros" className="px-4 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="¿Por qué elegirnos?"
          subtitle="Combinamos tecnología Ricoh con un servicio cercano y personalizado para PYMES."
        />

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {differentiators.map((item) => (
            <div
              key={item.title}
              className="border-border rounded-xl border p-6"
            >
              <item.icon className="text-primary size-8" />
              <h4 className="mt-4">{item.title}</h4>
              <p className="text-muted-foreground mt-2 text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat) => (
            <StatCard key={stat.label} value={stat.value} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
