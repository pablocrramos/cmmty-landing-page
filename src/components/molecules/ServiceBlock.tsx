import { Button } from "@/components/ui/button";
import type { Service } from "@/lib/services-data";

export function ServiceBlock({ service }: { service: Service }) {
  return (
    <div>
      <div className="flex w-full items-start justify-between gap-4">
        <div>
          <h1 className="font-heading text-4xl font-normal tracking-tighter md:text-[2.5rem]">
            {service.heading}
          </h1>
          <div className="flex flex-col gap-6 md:flex-row md:justify-between">
            <p className="text-muted-foreground mt-5 w-[55%] text-lg leading-snug tracking-tighter font-stretch-normal">
              {service.description}
            </p>
            <div className="flex items-end">
              <Button size="sm">{service.ctaLabel}</Button>
            </div>
          </div>
        </div>
      </div>
      {/* Image placeholder */}
      <div className="mt-5 aspect-video w-full rounded-[0.38rem] bg-black/40" />
    </div>
  );
}
