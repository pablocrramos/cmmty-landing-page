# Section Grid Layout Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Crear el componente `<Section>` reutilizable con líneas guía laterales de 1px y migrar las 5 secciones activas de la landing page para usarlo.

**Architecture:** El componente `Section` (atom) encapsula un `<section>` full-width con background color y un inner `div` con `max-w-[1200px]`, padding responsivo y `border-l/border-r` condicionales (ocultos en mobile, visibles en tablet+). Las secciones existentes eliminan su propio `px-*` horizontal y su inner container, delegando ambos al nuevo componente.

**Tech Stack:** Next.js 14+ App Router, TypeScript strict, Tailwind CSS v4, `cn()` utility en `src/lib/utils.ts`

---

## File Map

| Acción | Archivo                                        | Responsabilidad                           |
| ------ | ---------------------------------------------- | ----------------------------------------- |
| Modify | `src/app/globals.css`                          | Agregar token `--surface: #FBFBFB`        |
| Create | `src/components/atoms/Section.tsx`             | Componente base con grid lines            |
| Modify | `src/components/sections/SocialProof.tsx`      | Migrar a `<Section variant="white">`      |
| Modify | `src/components/sections/ServicesShowcase.tsx` | Migrar a `<Section variant="light-gray">` |
| Modify | `src/components/sections/FactsBento.tsx`       | Migrar a `<Section variant="light-gray">` |
| Modify | `src/components/sections/HowItWorks.tsx`       | Migrar a `<Section variant="white">`      |
| Modify | `src/components/sections/CtaBanner.tsx`        | Migrar a `<Section variant="white">`      |

---

## Task 1: Agregar token CSS `--surface` y crear el componente `Section`

**Files:**

- Modify: `src/app/globals.css`
- Create: `src/components/atoms/Section.tsx`

- [ ] **Step 1: Agregar token `--surface` en `globals.css`**

En `src/app/globals.css`, dentro del bloque `:root {}` (después de `--radius: 0.525rem;`), agregar:

```css
/* Section surface — light-gray variant */
--surface: #fbfbfb;
```

El bloque `:root` queda con esta línea antes de `/* Chart colors */`:

```css
/* Border radius base — 8.4px */
--radius: 0.525rem;

/* Section surface — light-gray variant */
--surface: #fbfbfb;

/* Chart colors */
```

- [ ] **Step 2: Crear `src/components/atoms/Section.tsx`**

```tsx
import { cn } from "@/lib/utils";

interface SectionProps {
  variant?: "white" | "light-gray";
  id?: string;
  className?: string;
  innerClassName?: string;
  children: React.ReactNode;
}

const variantMap = {
  white: {
    bg: "bg-white",
    border: "border-[#D7D7D7]",
  },
  "light-gray": {
    bg: "bg-[var(--surface)]",
    border: "border-[#B9B9B9]",
  },
} as const;

export function Section({
  variant = "white",
  id,
  className,
  innerClassName,
  children,
}: SectionProps) {
  const { bg, border } = variantMap[variant];

  return (
    <section id={id} className={cn(bg, className)}>
      <div
        className={cn(
          "mx-auto max-w-[1200px] px-4 sm:border-r sm:border-l sm:px-6 lg:px-8",
          border,
          innerClassName,
        )}
      >
        {children}
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Verificar TypeScript**

```bash
npx tsc --noEmit
```

Esperado: sin errores.

- [ ] **Step 4: Commit**

```bash
git add src/app/globals.css src/components/atoms/Section.tsx
git commit -m "feat: add Section atom with lateral grid lines"
```

---

## Task 2: Migrar `SocialProof`

**Files:**

- Modify: `src/components/sections/SocialProof.tsx`

Antes:

```tsx
<section className="bg-white px-4 py-12 pb-14 lg:px-8 lg:pb-16">
  <div className="mx-auto max-w-5xl">{/* contenido */}</div>
</section>
```

- [ ] **Step 1: Reemplazar `<section>` + inner `div` por `<Section>`**

Reemplazar el contenido completo de `src/components/sections/SocialProof.tsx`:

```tsx
import Image from "next/image";
import { Section } from "@/components/atoms/Section";

const clientLogos = [
  {
    key: "innovasport",
    src: "/assets/svgs/logos/clients/inova_logo.svg",
    alt: "Logo Innovasport",
  },
  {
    key: "magna",
    src: "/assets/svgs/logos/clients/magna.svg",
    alt: "Logo Magna",
  },
  {
    key: "javer",
    src: "/assets/svgs/logos/clients/javer.svg",
    alt: "Logo Javer",
  },
  { key: "uanl", src: "/assets/svgs/logos/clients/uanl.svg", alt: "Logo UANL" },
  {
    key: "nuevoleon",
    src: "assets/svgs/logos/clients/nuevoleon.svg",
    alt: "Logo Gobierno de Nuevo León",
  },
  { key: "acre", src: "/assets/svgs/logos/clients/acre.svg", alt: "Logo ACRE" },
];

export function SocialProof() {
  return (
    <Section variant="white" className="py-12 pb-14 lg:pb-16">
      <p className="text-foreground text-md text-center font-normal tracking-tight">
        Confiados por empresas que construyen el futuro
      </p>
      <div className="border-border mt-8 grid grid-cols-2 rounded-[0.38rem] border sm:grid-cols-3 lg:grid-cols-6">
        {clientLogos.map((logo) => (
          <div
            key={logo.key}
            className="border-border relative h-16 border-r border-b grayscale transition-all duration-300 [&:nth-child(2n)]:border-r-0 sm:[&:nth-child(2n)]:border-r sm:[&:nth-child(3n)]:border-r-0 lg:[&:nth-child(3n)]:border-r lg:[&:nth-child(6n)]:border-r-0 [&:nth-last-child(-n+2)]:border-b-0 sm:[&:nth-last-child(-n+3)]:border-b-0 lg:[&:nth-last-child(-n+6)]:border-b-0"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              fill
              sizes="100px"
              className="object-contain px-10 py-3.5"
            />
          </div>
        ))}
      </div>
    </Section>
  );
}
```

- [ ] **Step 2: Verificar TypeScript y build**

```bash
npx tsc --noEmit
```

Esperado: sin errores.

- [ ] **Step 3: Commit**

```bash
git add src/components/sections/SocialProof.tsx
git commit -m "refactor: migrate SocialProof to Section component"
```

---

## Task 3: Migrar `ServicesShowcase`

**Files:**

- Modify: `src/components/sections/ServicesShowcase.tsx`

Antes (líneas 48-50 y 99-101):

```tsx
<section id="servicios" className="bg-accent px-4 py-20 lg:px-8 lg:py-36">
  <div className="mx-auto max-w-6xl">{/* contenido */}</div>
</section>
```

- [ ] **Step 1: Reemplazar `<section>` + inner `div` por `<Section>`**

En `src/components/sections/ServicesShowcase.tsx`:

1. Agregar el import en la línea 1 (después de `"use client"`):

```tsx
import { Section } from "@/components/atoms/Section";
```

2. Reemplazar el `<section>` y su inner `div` (líneas 48-50):

```tsx
    <Section variant="light-gray" id="servicios" className="py-20 lg:py-36">
```

3. Reemplazar el cierre de `<div>` y `</section>` (líneas 99-101) por:

```tsx
    </Section>
```

El resultado de las líneas 48-101 queda así:

```tsx
return (
  <Section variant="light-gray" id="servicios" className="py-20 lg:py-36">
    {/* Mobile: tabs */}
    <div className="mb-8 flex gap-2 overflow-x-auto lg:hidden">
      {services.map((service) => (
        <button
          key={service.id}
          type="button"
          onClick={() => handleSelect(service.id)}
          className={`font-heading shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
            service.id === activeId
              ? "bg-primary text-primary-foreground"
              : "bg-muted text-muted-foreground"
          }`}
        >
          {service.label}
        </button>
      ))}
    </div>

    {/* Desktop: two-column sticky layout */}
    <div className="flex gap-12 lg:gap-16">
      {/* Left column — sticky */}
      <div className="hidden w-96 shrink-0 lg:block">
        <div className="sticky top-40 space-y-8">
          <ServiceNav activeId={activeId} onSelect={handleSelect} />
          <BenefitsCard benefits={activeService.benefits} />
        </div>
      </div>

      {/* Right column — scrollable */}
      <div className="min-w-0 flex-1 space-y-20 lg:space-y-32">
        {services.map((service) => (
          <div
            key={service.id}
            ref={(el) => {
              if (el) sectionRefs.current.set(service.id, el);
            }}
          >
            <ServiceBlock service={service} />

            {/* Mobile: benefits card below each service */}
            <div className="mt-8 lg:hidden">
              <BenefitsCard benefits={service.benefits} />
            </div>
          </div>
        ))}
      </div>
    </div>
  </Section>
);
```

- [ ] **Step 2: Verificar TypeScript**

```bash
npx tsc --noEmit
```

Esperado: sin errores.

- [ ] **Step 3: Commit**

```bash
git add src/components/sections/ServicesShowcase.tsx
git commit -m "refactor: migrate ServicesShowcase to Section component"
```

---

## Task 4: Migrar `FactsBento`

**Files:**

- Modify: `src/components/sections/FactsBento.tsx`

Antes (líneas 17-20 y 73-74):

```tsx
<section className="bg-accent px-4 pb-20 lg:px-8 lg:pb-36">
  <div className="mx-auto max-w-6xl">{/* contenido */}</div>
</section>
```

- [ ] **Step 1: Reemplazar `<section>` + inner `div` por `<Section>`**

En `src/components/sections/FactsBento.tsx`:

1. Agregar el import (después de los imports existentes):

```tsx
import { Section } from "@/components/atoms/Section";
```

2. Reemplazar el componente completo:

```tsx
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Section } from "@/components/atoms/Section";

const stats = [
  { value: "25 años", description: "Creciendo en la industria de impresión." },
  { value: "9,000+", description: "Equipos instalados en todo México." },
  { value: "Top 10", description: "Mayor rendimiento por Ricoh en 2009." },
];

const partnerLogos = [
  { src: "/assets/svgs/logos/aliados/ricoh.svg", alt: "Ricoh" },
  { src: "/assets/svgs/logos/aliados/zebra.svg", alt: "Zebra" },
  { src: "/assets/svgs/logos/aliados/lenovo.svg", alt: "Lenovo" },
  { src: "/assets/svgs/logos/aliados/sharp.svg", alt: "Sharp" },
];

export function FactsBento() {
  return (
    <Section variant="light-gray" className="pb-20 lg:pb-36">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {/* Row 1 — stat cards */}
        {stats.map((stat, i) => (
          <div
            key={stat.value}
            className={cn(
              "bg-card flex min-h-44 flex-col justify-between rounded-[0.38rem] p-7",
              i === 2 && "sm:col-span-2 lg:col-span-1",
            )}
          >
            <span className="font-heading text-4xl leading-none font-bold lg:text-5xl">
              {stat.value}
            </span>
            <p className="text-muted-foreground text-sm">{stat.description}</p>
          </div>
        ))}

        {/* Row 2 — wide card: aliados */}
        <div className="bg-card flex flex-col justify-between rounded-[0.38rem] p-7 sm:col-span-2 lg:col-span-2">
          <p className="max-w-lg text-base leading-snug font-medium">
            Contamos con los mejores aliados tecnológicos en la industria.
          </p>
          <div className="mt-8 grid grid-cols-4 gap-3">
            {partnerLogos.map((logo) => (
              <div
                key={logo.alt}
                className="border-border flex items-center justify-center rounded-lg border bg-white p-4"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={80}
                  height={32}
                  className="h-7 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 — narrow card: value prop */}
        <div className="bg-card flex min-h-44 flex-col rounded-[0.38rem] p-7 sm:col-span-2 lg:col-span-1">
          <p className="text-base leading-snug font-medium">
            Simplificamos tus espacios, así tú solo te preocupas por lo
            importante.
          </p>
        </div>
      </div>
    </Section>
  );
}
```

- [ ] **Step 2: Verificar TypeScript**

```bash
npx tsc --noEmit
```

Esperado: sin errores.

- [ ] **Step 3: Commit**

```bash
git add src/components/sections/FactsBento.tsx
git commit -m "refactor: migrate FactsBento to Section component"
```

---

## Task 5: Migrar `HowItWorks`

**Files:**

- Modify: `src/components/sections/HowItWorks.tsx`

Antes (línea 42-44):

```tsx
<section className="bg-white px-8 py-28 lg:px-16 lg:py-32">
  <div className="mx-auto max-w-6xl">
```

Nota: este archivo usaba `px-8 lg:px-16` (inconsistente con el resto). El `Section` lo estandariza a `px-4 sm:px-6 lg:px-8`.

- [ ] **Step 1: Reemplazar `<section>` + inner `div` por `<Section>`**

En `src/components/sections/HowItWorks.tsx`:

1. Agregar el import (después de los imports existentes):

```tsx
import { Section } from "@/components/atoms/Section";
```

2. Reemplazar el componente completo:

```tsx
"use client";
import {
  MagnifyingGlassIcon,
  FileTextIcon,
  GearSixIcon,
  HeadsetIcon,
} from "@phosphor-icons/react";
import { SectionHeading } from "@/components/atoms/SectionHeading";
import { Section } from "@/components/atoms/Section";

const steps = [
  {
    number: "1",
    icon: MagnifyingGlassIcon,
    title: "Diagnóstico gratuito",
    description:
      "Analizamos tu operación actual de impresión y gestión documental para identificar oportunidades de mejora.",
  },
  {
    number: "2",
    icon: FileTextIcon,
    title: "Propuesta personalizada",
    description:
      "Diseñamos una solución a la medida de tu empresa con opciones claras de implementación y costos.",
  },
  {
    number: "3",
    icon: GearSixIcon,
    title: "Implementación",
    description:
      "Instalamos, configuramos y ponemos en marcha la solución sin interrumpir tu operación diaria.",
  },
  {
    number: "4",
    icon: HeadsetIcon,
    title: "Soporte continuo",
    description:
      "Monitoreo proactivo, mantenimiento y soporte técnico permanente para que nunca te preocupes.",
  },
];

export function HowItWorks() {
  return (
    <Section variant="white" className="py-28 lg:py-32">
      <SectionHeading
        title="Así de fácil es trabajar con nosotros"
        subtitle="En 4 simples pasos transformamos tu operación de impresión y gestión documental."
        className="[&_p]:text-muted-foreground [&_h2]:text-black"
      />

      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step) => (
          <div key={step.number} className="relative">
            <div className="mt-4">
              <step.icon className="text-primary t size-8" />
              <h4 className="mt-4 text-lg font-normal text-black">
                {step.title}
              </h4>
              <p className="text-muted-foreground mt-6 text-lg leading-snug tracking-tighter font-stretch-normal">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
```

- [ ] **Step 2: Verificar TypeScript**

```bash
npx tsc --noEmit
```

Esperado: sin errores.

- [ ] **Step 3: Commit**

```bash
git add src/components/sections/HowItWorks.tsx
git commit -m "refactor: migrate HowItWorks to Section component"
```

---

## Task 6: Migrar `CtaBanner`

**Files:**

- Modify: `src/components/sections/CtaBanner.tsx`

Antes (líneas 5-7):

```tsx
<section id="contacto" className="bg-white px-4 pb-20 lg:px-8 lg:pb-28">
  <div className="mx-auto max-w-6xl">
```

- [ ] **Step 1: Reemplazar `<section>` + inner `div` por `<Section>`**

Reemplazar el contenido completo de `src/components/sections/CtaBanner.tsx`:

```tsx
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/atoms/Section";

export function CtaBanner() {
  return (
    <Section variant="white" id="contacto" className="pb-20 lg:pb-28">
      <div className="relative overflow-hidden rounded-[0.38rem] bg-gradient-to-b from-red-950 via-red-800 to-rose-400 px-10 py-14 lg:min-h-56 lg:px-14 lg:py-16">
        {/* Left: text + CTA */}
        <div className="relative z-10 max-w-xs lg:max-w-sm">
          <h2 className="font-heading text-2xl leading-snug font-medium text-white lg:text-3xl">
            Consulta nuestras soluciones que te ayudan a optimizar tu impresión
            y escaneo
          </h2>
          <div className="mt-8">
            <Button
              render={<a href="mailto:contacto@cmdigital.mx" />}
              className="bg-red-800 text-white hover:bg-red-900"
            >
              Contáctanos ahora
            </Button>
          </div>
        </div>

        {/* Right: printer — desktop only */}
        <div className="absolute right-0 -bottom-[15%] hidden h-full md:right-[10%] lg:block">
          <Image
            src="/assets/imgs/render-printer.png"
            alt="Impresora Ricoh"
            width={500}
            height={500}
            className="h-full w-auto object-contain object-bottom"
          />
        </div>
      </div>
    </Section>
  );
}
```

- [ ] **Step 2: Verificar TypeScript**

```bash
npx tsc --noEmit
```

Esperado: sin errores.

- [ ] **Step 3: Commit**

```bash
git add src/components/sections/CtaBanner.tsx
git commit -m "refactor: migrate CtaBanner to Section component"
```

---

## Task 7: Verificación final

- [ ] **Step 1: Build completo**

```bash
npm run build
```

Esperado: build exitoso sin errores ni warnings de TypeScript.

- [ ] **Step 2: Type check final**

```bash
npx tsc --noEmit
```

Esperado: sin errores.

- [ ] **Step 3: Checklist visual (dev server)**

```bash
npm run dev
```

Abrir `http://localhost:3000` y verificar:

| Check            | Mobile (<768px) | Tablet (≥768px) | Desktop (≥1024px) |
| ---------------- | --------------- | --------------- | ----------------- |
| SocialProof      | sin líneas      | línea #D7D7D7   | línea #D7D7D7     |
| ServicesShowcase | sin líneas      | línea #B9B9B9   | línea #B9B9B9     |
| FactsBento       | sin líneas      | línea #B9B9B9   | línea #B9B9B9     |
| HowItWorks       | sin líneas      | línea #D7D7D7   | línea #D7D7D7     |
| CtaBanner        | sin líneas      | línea #D7D7D7   | línea #D7D7D7     |
| Hero             | sin líneas      | sin líneas      | sin líneas        |
| Navbar           | sin líneas      | sin líneas      | sin líneas        |
| Footer           | sin líneas      | sin líneas      | sin líneas        |

- [ ] **Step 4: Commit final**

```bash
git add -A
git commit -m "feat: complete Section grid layout system"
```
