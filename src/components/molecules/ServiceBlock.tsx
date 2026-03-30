import { Button } from "@/components/ui/button";
import type { Service } from "@/lib/services-data";

export function ServiceBlock({ service }: { service: Service }) {
  return (
    <div>
      <div className="flex items-start justify-between gap-4">
        <div className="max-w-xl">
          <h3>{service.heading}</h3>
          <p className="text-muted-foreground mt-4">{service.description}</p>
        </div>
        <Button size="sm" className="shrink-0">
          {service.ctaLabel}
        </Button>
      </div>
      {/* Image placeholder */}
      <div className="bg-muted mt-8 aspect-video w-full rounded-xl" />
    </div>
  );
}
