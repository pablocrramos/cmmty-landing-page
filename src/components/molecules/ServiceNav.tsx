"use client";

import { LogoStandAlone } from "@/components/atoms/Logo";
import { services } from "@/lib/services-data";
import { cn } from "@/lib/utils";

export function ServiceNav({
  activeId,
  onSelect,
}: {
  activeId: string;
  onSelect: (id: string) => void;
}) {
  return (
    <nav aria-label="nav-servicios">
      <ul className="flex flex-col gap-1">
        {services.map((service) => {
          const isActive = service.id === activeId;
          return (
            <li key={service.id} className="relative flex max-h-8 items-center">
              <button
                type="button"
                onClick={() => onSelect(service.id)}
                className={cn(
                  "font-heading flex items-center gap-3 rounded-lg py-2 text-left text-xl transition-colors",
                  isActive
                    ? "text-foreground font-bold"
                    : "text-muted-foreground/50 hover:text-muted-foreground font-medium",
                )}
              >
                {isActive && <LogoStandAlone className="scale-125 pr-2" />}
                {!isActive && <span>{service.label}</span>}
              </button>
              {isActive && (
                <span className="font-heading text-foreground text-xl font-medium">
                  {service.label}
                </span>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
