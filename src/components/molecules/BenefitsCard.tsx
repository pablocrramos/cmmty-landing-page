import { CheckItem } from "@/components/atoms/CheckItem";

export function BenefitsCard({ benefits }: { benefits: string[] }) {
  return (
    <div className="bg-card w-5/6 rounded-[0.38rem] p-6">
      <p className="font-heading text-foreground mb-4 text-sm font-medium">
        Contrátanos y obtén:
      </p>
      <ul className="text-md mt-16 flex flex-col gap-1">
        {benefits.map((benefit) => (
          <CheckItem key={benefit}>{benefit}</CheckItem>
        ))}
      </ul>
    </div>
  );
}
