import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="bg-primary font-heading text-primary-foreground flex size-10 items-center justify-center rounded-lg text-lg font-bold">
        CM
      </div>
      <span className="font-heading text-foreground text-xl font-bold tracking-tight">
        CM Digital
      </span>
    </div>
  );
}

export function LogoStandAlone({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="bg-primary font-heading text-primary-foreground flex size-10 items-center justify-center rounded-lg text-lg font-bold">
        CM
      </div>
    </div>
  );
}
