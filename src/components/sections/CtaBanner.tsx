"use client";

import { Button } from "@/components/ui/button";
import { LetterGlitch } from "@/components/atoms/LetterGlitch";

export function CtaBanner() {
  return (
    <section
      id="contacto"
      className="bg-primary relative overflow-hidden px-4 py-28 lg:px-8 lg:py-40"
    >
      {/* LetterGlitch background — fades from left to right */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          maskImage:
            "linear-gradient(to right, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.2) 40%, rgba(0,0,0,0.05) 70%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.2) 40%, rgba(0,0,0,0.05) 70%, transparent 100%)",
        }}
      >
        <LetterGlitch
          glitchColors={["#ff9999", "#ffcccc", "#ffffff"]}
          glitchSpeed={60}
          outerVignette={false}
          smooth
          characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
        />
      </div>

      {/* Content */}
      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
        {/* Left: heading + subtext */}
        <div className="max-w-2xl">
          <h2 className="text-primary-foreground font-heading font-medium">
            Digitaliza tu gestión documental.
            <br />
            Potencializa tu espacio de trabajo.
          </h2>
        </div>

        {/* Right: CTA button */}
        <div className="shrink-0">
          <Button
            variant="alternate"
            className="border-primary-foreground text-primary-foreground hover:border-primary-foreground hover:bg-primary-foreground hover:text-primary hover:shadow-[inset_0_0_0_1px_var(--color-primary-foreground)]"
            render={<a href="mailto:contacto@cmdigital.mx" />}
          >
            Contáctanos ahora
          </Button>
        </div>
      </div>
    </section>
  );
}
