import { CheckItem } from "@/components/atoms/CheckItem";

export function BenefitsCard({ benefits }: { benefits: string[] }) {
  return (
    <div className="bg-card w-5/6 rounded-[0.38rem] p-6">
      <p className="text-foreground mb-4 text-lg font-normal tracking-tight">
        Contrátanos y obtén:
      </p>
      <ul className="mt-16 flex flex-col gap-1 text-lg tracking-tighter">
        {benefits.map((benefit) => (
          <CheckItem key={benefit}>
            {<p className="text-lg">{benefit}</p>}
          </CheckItem>
        ))}
      </ul>
    </div>
  );
}
