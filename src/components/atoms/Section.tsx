import { cn } from "@/lib/utils";

interface SectionProps {
  variant?: "white" | "light-gray";
  id?: string;
  className?: string;
  innerClassName?: string;
  children: React.ReactNode;
}

const variantMap = {
  white: {
    bg: "bg-white",
    border: "border-[#D7D7D7]",
  },
  "light-gray": {
    bg: "bg-[var(--surface)]",
    border: "border-[#B9B9B9]",
  },
} as const;

export function Section({
  variant = "white",
  id,
  className,
  innerClassName,
  children,
}: SectionProps) {
  const { bg, border } = variantMap[variant];

  return (
    <section id={id} className={cn(bg, className)}>
      <div
        className={cn(
          "mx-auto max-w-325 px-3 sm:border-r sm:border-l sm:px-4 lg:px-3",
          border,
          innerClassName,
        )}
      >
        {children}
      </div>
    </section>
  );
}
