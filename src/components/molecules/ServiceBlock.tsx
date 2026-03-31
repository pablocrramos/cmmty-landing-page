import { Button } from "@/components/ui/button";
import type { Service } from "@/lib/services-data";

export function ServiceBlock({ service }: { service: Service }) {
  return (
    <div>
      <div className="flex items-start justify-between gap-4">
        <div className="max-w-xl">
          <h1 className="text-4xl font-normal">{service.heading}</h1>
          <div className="flex">
            <p className="text-muted-foreground mt-4">{service.description}</p>
            <Button size="sm" className="shrink-0">
              {service.ctaLabel}
            </Button>
          </div>
        </div>
      </div>
      {/* Image placeholder */}
      <div className="bg-muted mt-8 aspect-video w-full rounded-xl" />
    </div>
  );
}
