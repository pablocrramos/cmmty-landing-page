import { cn } from "@/lib/utils";

interface SectionProps {
  variant?: "white" | "light-gray";
  id?: string;
  className?: string;
  innerClassName?: string;
  children: React.ReactNode;
}

const variantMap = {
  white: "bg-transparent",
  "light-gray": "bg-[var(--surface)]",
} as const;

export function Section({
  variant = "white",
  id,
  className,
  innerClassName,
  children,
}: SectionProps) {
  return (
    <section id={id} className={cn(variantMap[variant], className)}>
      <div
        className={cn("mx-auto max-w-325 px-4 sm:px-4 lg:px-3", innerClassName)}
      >
        {children}
      </div>
    </section>
  );
}
