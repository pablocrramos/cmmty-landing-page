type BentoItem =
  | {
      kind: "stat";
      id: string;
      stat: string;
      description: string;
      grid: string;
    }
  | { kind: "text"; id: string; headline: string; grid: string }
  | {
      kind: "brand";
      id: string;
      headline: string;
      brand: string;
      grid: string;
    };

const items: BentoItem[] = [
  {
    kind: "stat",
    id: "years",
    stat: "25 años",
    description: "Creciendo en la industria de impresión.",
    grid: "lg:col-start-1 lg:row-start-1 lg:row-span-2",
  },
  {
    kind: "text",
    id: "solutions",
    headline: "Soluciones que jalan en cualquier industria",
    grid: "lg:col-start-2 lg:row-start-1 lg:row-span-3",
  },
  {
    kind: "stat",
    id: "top10",
    stat: "Top 10",
    description: "Mayor rendimiento por Ricoh en 2009.",
    grid: "lg:col-start-3 lg:row-start-1 lg:row-span-2",
  },
  {
    kind: "brand",
    id: "team",
    headline:
      "Colaboradores que sustentan nuestro trabajo y transmiten confianza",
    brand: "RICOH",
    grid: "lg:col-start-1 lg:row-start-3 lg:row-span-2",
  },
  {
    kind: "stat",
    id: "equipment",
    stat: "9000+",
    description: "Equipos instalados en todo México.",
    grid: "lg:col-start-2 lg:row-start-4 lg:row-span-1",
  },
  {
    kind: "text",
    id: "simplify",
    headline:
      "Simplificamos tus espacios, así tú solo te preocupas por lo importante",
    grid: "lg:col-start-3 lg:row-start-3 lg:row-span-2",
  },
];

function Card({ item }: { item: BentoItem }) {
  const base = `flex min-h-44 flex-col rounded-2xl bg-card p-7 ${item.grid}`;

  if (item.kind === "stat") {
    return (
      <div className={`${base} justify-between`}>
        <span className="font-heading text-foreground text-4xl leading-none font-bold lg:text-5xl">
          {item.stat}
        </span>
        <p className="text-muted-foreground text-sm">{item.description}</p>
      </div>
    );
  }

  if (item.kind === "brand") {
    return (
      <div className={`${base} justify-between`}>
        <p className="text-foreground text-base leading-snug font-medium">
          {item.headline}
        </p>
        <span className="font-heading text-foreground text-xl font-black tracking-[0.18em]">
          {item.brand}
        </span>
      </div>
    );
  }

  // kind === "text"
  const isSimplify = item.id === "simplify";
  return (
    <div className={`${base} ${isSimplify ? "justify-end" : "justify-start"}`}>
      <p className="text-foreground text-base leading-snug font-medium">
        {item.headline}
      </p>
    </div>
  );
}

export function FactsBento() {
  return (
    <section className="bg-accent px-4 pb-20 lg:px-8 lg:pb-36">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-[repeat(4,minmax(10rem,1fr))]">
          {items.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
