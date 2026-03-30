import { cn } from "@/lib/utils";

export function SectionHeading({
  title,
  subtitle,
  centered = true,
  className,
}: {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}) {
  return (
    <div className={cn(centered && "text-center", className)}>
      <h2>{title}</h2>
      {subtitle && (
        <p
          className={cn(
            "text-muted-foreground mt-4 max-w-2xl",
            centered && "mx-auto",
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
