"use client";

import { Logo } from "@/components/atoms/Logo";
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
    <nav aria-label="Navegación de servicios">
      <ul className="flex flex-col gap-1">
        {services.map((service) => {
          const isActive = service.id === activeId;
          return (
            <li key={service.id}>
              <button
                type="button"
                onClick={() => onSelect(service.id)}
                className={cn(
                  "font-heading flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-lg transition-colors",
                  isActive
                    ? "text-foreground font-bold"
                    : "text-muted-foreground/50 hover:text-muted-foreground font-medium",
                )}
              >
                {isActive && <Logo className="scale-75" />}
                {!isActive && <span>{service.label}</span>}
              </button>
              {isActive && (
                <span className="font-heading text-foreground ml-3 text-lg font-bold">
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
