import { CircleCheck } from "lucide-react";
import { cn } from "@/lib/utils";

export function CheckItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <li className={cn("text-foreground flex items-center gap-3", className)}>
      <CircleCheck className="text-accent-green size-5 shrink-0" />
      <span>{children}</span>
    </li>
  );
}
