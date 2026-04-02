import Image from "next/image";
import { cn } from "@/lib/utils";

type LogoVariant = "light-bg" | "dark-bg";

interface LogoProps {
  className?: string;
  variant?: LogoVariant;
}

export function Logo({ className, variant = "light-bg" }: LogoProps) {
  const src =
    variant === "dark-bg"
      ? "/assets/svgs/logos/brand/cm-logo-dark.svg"
      : "/assets/svgs/logos/brand/cm-logo-third.svg";

  return (
    <Image
      src={src}
      alt="CM Digital"
      width={199}
      height={53}
      className={cn("h-8 w-auto", className)}
      priority
    />
  );
}

export function LogoStandAlone({ className, variant = "light-bg" }: LogoProps) {
  const src =
    variant === "dark-bg"
      ? "/assets/svgs/logos/brand/cm-dark.svg"
      : "/assets/svgs/logos/brand/cm-third.svg";

  return (
    <Image
      src={src}
      alt="CM Digital"
      width={69}
      height={60}
      className={cn("h-5 w-auto", className)}
    />
  );
}
