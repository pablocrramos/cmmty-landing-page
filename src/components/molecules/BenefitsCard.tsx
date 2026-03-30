import { CheckItem } from "@/components/atoms/CheckItem";

export function BenefitsCard({ benefits }: { benefits: string[] }) {
  return (
    <div className="bg-card rounded-xl p-6 shadow-sm">
      <p className="font-heading text-foreground mb-4 text-sm font-semibold">
        Contrátanos para obtener:
      </p>
      <ul className="flex flex-col gap-3">
        {benefits.map((benefit) => (
          <CheckItem key={benefit}>{benefit}</CheckItem>
        ))}
      </ul>
    </div>
  );
}
