import { ShieldCheck } from "lucide-react";

const clientLogos = [
  "Cliente 1",
  "Cliente 2",
  "Cliente 3",
  "Cliente 4",
  "Cliente 5",
];

export function SocialProof() {
  return (
    <section className="border-border bg-accent border-y px-4 py-12 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Ricoh badge */}
        <div className="flex justify-center">
          <div className="border-primary/20 bg-primary/5 inline-flex items-center gap-2 rounded-full border px-4 py-2">
            <ShieldCheck className="text-primary size-5" />
            <span className="font-heading text-primary text-sm font-semibold">
              Distribuidor Oficial Ricoh
            </span>
          </div>
        </div>

        {/* Client logos */}
        <p className="text-muted-foreground mt-8 text-center text-sm">
          Empresas que confían en nosotros
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-8 lg:gap-12">
          {clientLogos.map((name) => (
            <div
              key={name}
              className="bg-muted text-muted-foreground flex h-10 w-24 items-center justify-center rounded text-xs"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
