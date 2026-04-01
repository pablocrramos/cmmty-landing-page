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
      <h2 className="font-heading text-4xl font-normal tracking-tighter md:text-[2.5rem]">
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "text-muted-foreground mt-6 w-[45%] text-lg leading-snug tracking-tighter font-stretch-normal",
            centered && "mx-auto",
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
