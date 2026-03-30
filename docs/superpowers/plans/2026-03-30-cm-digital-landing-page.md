# CM Digital Landing Page — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the complete CM Digital landing page with all sections: Navbar, Hero, SocialProof, ServicesShowcase (sticky-scroll), HowItWorks, WhyUs, CtaBanner, and Footer.

**Architecture:** Mobile-first Next.js 16 App Router page assembled from atomic design components (atoms > molecules > organisms > sections). The ServicesShowcase section uses Intersection Observer for scroll-linked sticky sidebar navigation. All content in Spanish. No tests — verification is `npm run build && npx tsc --noEmit`.

**Tech Stack:** Next.js 16, React 19, TypeScript strict, Tailwind CSS v4 (CSS-based config), Shadcn UI (base-nova), lucide-react icons, class-variance-authority.

---

## File Structure

```
src/
  lib/
    utils.ts                    ← exists (cn helper)
    services-data.ts            ← CREATE: typed data for 3 services
  components/
    ui/
      button.tsx                ← exists (3 variants: default, alternate, soft)
    atoms/
      Logo.tsx                  ← CREATE: CM Digital logo placeholder
      CheckItem.tsx             ← CREATE: green check + text
      SectionHeading.tsx        ← CREATE: reusable h2 + subtitle
    molecules/
      ServiceNav.tsx            ← CREATE: vertical sticky nav (3 services)
      BenefitsCard.tsx          ← CREATE: benefits card with CheckItems
      ServiceBlock.tsx          ← CREATE: right-side service content
      StatCard.tsx              ← CREATE: metric number + label
    organisms/
      Navbar.tsx                ← CREATE: sticky header
      Footer.tsx                ← CREATE: footer with columns
    sections/
      Hero.tsx                  ← CREATE: hero with 2 CTAs
      SocialProof.tsx           ← CREATE: Ricoh badge + client logos
      ServicesShowcase.tsx       ← CREATE: sticky-scroll services component
      HowItWorks.tsx            ← CREATE: 4-step process, dark bg
      WhyUs.tsx                 ← CREATE: differentiators + stats
      CtaBanner.tsx             ← CREATE: final CTA banner
  app/
    layout.tsx                  ← exists (Poppins + Roboto configured)
    page.tsx                    ← MODIFY: assemble all sections
    globals.css                 ← exists (design tokens configured)
```

---

## Task 1: Services Data Layer

**Files:**

- Create: `src/lib/services-data.ts`

- [ ] **Step 1: Create the services data file**

```ts
// src/lib/services-data.ts

export interface Service {
  id: string;
  label: string;
  heading: string;
  description: string;
  benefits: string[];
  ctaLabel: string;
}

export const services: Service[] = [
  {
    id: "mps",
    label: "Impresión Gestionada",
    heading: "Servicio de Impresión Gestionada",
    description:
      "Olvídate de consumibles, mantenimientos y fallas técnicas. Nos encargamos de toda tu operación de impresión con monitoreo 24/7 y soporte proactivo.",
    benefits: [
      "Suministro automático de consumibles",
      "Mantenimiento preventivo y correctivo",
      "Monitoreo remoto en tiempo real",
      "Soporte técnico sin costo adicional",
    ],
    ctaLabel: "Conoce el servicio",
  },
  {
    id: "paperless",
    label: "Sistema Paperless",
    heading: "Solución Paperless",
    description:
      "Transforma tu archivo físico en un sistema digital seguro, accesible y trazable. Reduce costos operativos y acelera tus procesos.",
    benefits: [
      "Digitalización de archivos físicos",
      "Flujos de trabajo digitales",
      "Acceso remoto seguro",
      "Trazabilidad completa de documentos",
    ],
    ctaLabel: "Conoce la solución",
  },
  {
    id: "multifuncionales",
    label: "Renta de Copiadoras",
    heading: "Renta y Venta de Multifuncionales",
    description:
      "Equipos Ricoh de última generación para tu oficina. Opciones flexibles de renta o compra con soporte técnico incluido.",
    benefits: [
      "Equipos Ricoh última generación",
      "Renta flexible o compra directa",
      "Instalación y configuración incluida",
      "Soporte técnico garantizado",
    ],
    ctaLabel: "Ver equipos disponibles",
  },
];
```

- [ ] **Step 2: Verify**

Run: `npm run build && npx tsc --noEmit`
Expected: PASS

- [ ] **Step 3: Commit**

```bash
git add src/lib/services-data.ts
git commit -m "feat: add services data layer with typed interfaces"
```

---

## Task 2: Atoms — Logo, CheckItem, SectionHeading

**Files:**

- Create: `src/components/atoms/Logo.tsx`
- Create: `src/components/atoms/CheckItem.tsx`
- Create: `src/components/atoms/SectionHeading.tsx`

- [ ] **Step 1: Create Logo atom**

```tsx
// src/components/atoms/Logo.tsx
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
```

- [ ] **Step 2: Create CheckItem atom**

```tsx
// src/components/atoms/CheckItem.tsx
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
```

- [ ] **Step 3: Create SectionHeading atom**

```tsx
// src/components/atoms/SectionHeading.tsx
import { cn } from "@/lib/utils";

export function SectionHeading({
  title,
  subtitle,
  centered = true,
  className,
}: {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}) {
  return (
    <div className={cn(centered && "text-center", className)}>
      <h2>{title}</h2>
      {subtitle && (
        <p className="text-muted-foreground mt-4 max-w-2xl">{subtitle}</p>
      )}
    </div>
  );
}
```

- [ ] **Step 4: Verify**

Run: `npm run build && npx tsc --noEmit`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add src/components/atoms/
git commit -m "feat: add Logo, CheckItem, and SectionHeading atoms"
```

---

## Task 3: Navbar Organism

**Files:**

- Create: `src/components/organisms/Navbar.tsx`

- [ ] **Step 1: Create the Navbar**

```tsx
// src/components/organisms/Navbar.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/atoms/Logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#servicios", label: "Servicios" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#contacto", label: "Contacto" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="border-border bg-background/95 sticky top-0 z-50 border-b backdrop-blur-sm">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:px-8">
        <Link href="/" aria-label="CM Digital inicio">
          <Logo />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-muted-foreground hover:text-foreground font-sans text-sm font-medium transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Button size="sm" render={<a href="#contacto" />}>
            Cotiza ahora
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "border-border overflow-hidden border-t transition-all duration-300 md:hidden",
          mobileOpen ? "max-h-64" : "max-h-0 border-t-0",
        )}
      >
        <ul className="flex flex-col gap-4 px-4 py-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-foreground font-sans text-base font-medium"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <Button
              size="sm"
              className="w-full"
              render={<a href="#contacto" />}
              onClick={() => setMobileOpen(false)}
            >
              Cotiza ahora
            </Button>
          </li>
        </ul>
      </div>
    </header>
  );
}
```

- [ ] **Step 2: Verify**

Run: `npm run build && npx tsc --noEmit`
Expected: PASS

- [ ] **Step 3: Commit**

```bash
git add src/components/organisms/Navbar.tsx
git commit -m "feat: add sticky Navbar with mobile hamburger menu"
```

---

## Task 4: Hero Section

**Files:**

- Create: `src/components/sections/Hero.tsx`

- [ ] **Step 1: Create the Hero section**

```tsx
// src/components/sections/Hero.tsx
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="bg-background relative overflow-hidden px-4 py-20 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <h1>Tu operación de impresión, resuelta</h1>
          <p className="text-muted-foreground mt-6 text-lg lg:text-xl">
            Somos el aliado tecnológico que las PYMES necesitan. Nos encargamos
            de tu impresión, digitalización y equipos para que te enfoques en
            hacer crecer tu negocio.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button render={<a href="#contacto" />}>
              Solicita tu diagnóstico gratuito
            </Button>
            <Button variant="alternate" render={<a href="#servicios" />}>
              Conoce nuestros servicios
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify**

Run: `npm run build && npx tsc --noEmit`
Expected: PASS

- [ ] **Step 3: Commit**

```bash
git add src/components/sections/Hero.tsx
git commit -m "feat: add Hero section with dual CTAs"
```

---

## Task 5: SocialProof Section

**Files:**

- Create: `src/components/sections/SocialProof.tsx`

- [ ] **Step 1: Create the SocialProof section**

```tsx
// src/components/sections/SocialProof.tsx
import { ShieldCheck } from "lucide-react";

const clientLogos = [
  "Cliente 1",
  "Cliente 2",
  "Cliente 3",
  "Cliente 4",
  "Cliente 5",
];

export function SocialProof() {
  return (
    <section className="border-border bg-accent border-y px-4 py-12 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Ricoh badge */}
        <div className="flex justify-center">
          <div className="border-primary/20 bg-primary/5 inline-flex items-center gap-2 rounded-full border px-4 py-2">
            <ShieldCheck className="text-primary size-5" />
            <span className="font-heading text-primary text-sm font-semibold">
              Distribuidor Oficial Ricoh
            </span>
          </div>
        </div>

        {/* Client logos */}
        <p className="text-muted-foreground mt-8 text-center text-sm">
          Empresas que confían en nosotros
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-8 lg:gap-12">
          {clientLogos.map((name) => (
            <div
              key={name}
              className="bg-muted text-muted-foreground flex h-10 w-24 items-center justify-center rounded text-xs"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify**

Run: `npm run build && npx tsc --noEmit`
Expected: PASS

- [ ] **Step 3: Commit**

```bash
git add src/components/sections/SocialProof.tsx
git commit -m "feat: add SocialProof section with Ricoh badge and client logos"
```

---

## Task 6: ServicesShowcase — Molecules

**Files:**

- Create: `src/components/molecules/ServiceNav.tsx`
- Create: `src/components/molecules/BenefitsCard.tsx`
- Create: `src/components/molecules/ServiceBlock.tsx`

- [ ] **Step 1: Create ServiceNav molecule**

```tsx
// src/components/molecules/ServiceNav.tsx
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
```

- [ ] **Step 2: Create BenefitsCard molecule**

```tsx
// src/components/molecules/BenefitsCard.tsx
import { CheckItem } from "@/components/atoms/CheckItem";

export function BenefitsCard({ benefits }: { benefits: string[] }) {
  return (
    <div className="bg-card rounded-xl p-6 shadow-sm">
      <p className="font-heading text-foreground mb-4 text-sm font-semibold">
        Contrátanos para obtener:
      </p>
      <ul className="flex flex-col gap-3">
        {benefits.map((benefit) => (
          <CheckItem key={benefit}>{benefit}</CheckItem>
        ))}
      </ul>
    </div>
  );
}
```

- [ ] **Step 3: Create ServiceBlock molecule**

```tsx
// src/components/molecules/ServiceBlock.tsx
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
```

- [ ] **Step 4: Verify**

Run: `npm run build && npx tsc --noEmit`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add src/components/molecules/ServiceNav.tsx src/components/molecules/BenefitsCard.tsx src/components/molecules/ServiceBlock.tsx
git commit -m "feat: add ServiceNav, BenefitsCard, and ServiceBlock molecules"
```

---

## Task 7: ServicesShowcase Section (Sticky-Scroll)

**Files:**

- Create: `src/components/sections/ServicesShowcase.tsx`

- [ ] **Step 1: Create the ServicesShowcase section**

```tsx
// src/components/sections/ServicesShowcase.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { ServiceNav } from "@/components/molecules/ServiceNav";
import { BenefitsCard } from "@/components/molecules/BenefitsCard";
import { ServiceBlock } from "@/components/molecules/ServiceBlock";
import { services } from "@/lib/services-data";

export function ServicesShowcase() {
  const [activeId, setActiveId] = useState(services[0].id);
  const sectionRefs = useRef<Map<string, HTMLDivElement>>(new Map());
  const isClickScrolling = useRef(false);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sectionRefs.current.forEach((el, id) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !isClickScrolling.current) {
            setActiveId(id);
          }
        },
        { rootMargin: "-40% 0px -40% 0px", threshold: 0 },
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  function handleSelect(id: string) {
    const el = sectionRefs.current.get(id);
    if (!el) return;

    isClickScrolling.current = true;
    setActiveId(id);
    el.scrollIntoView({ behavior: "smooth", block: "start" });

    setTimeout(() => {
      isClickScrolling.current = false;
    }, 800);
  }

  const activeService = services.find((s) => s.id === activeId) ?? services[0];

  return (
    <section id="servicios" className="bg-accent px-4 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
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
          <div className="hidden w-72 shrink-0 lg:block">
            <div className="sticky top-24 space-y-8">
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
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify**

Run: `npm run build && npx tsc --noEmit`
Expected: PASS

- [ ] **Step 3: Commit**

```bash
git add src/components/sections/ServicesShowcase.tsx
git commit -m "feat: add ServicesShowcase section with sticky-scroll navigation"
```

---

## Task 8: HowItWorks Section

**Files:**

- Create: `src/components/sections/HowItWorks.tsx`

- [ ] **Step 1: Create the HowItWorks section**

```tsx
// src/components/sections/HowItWorks.tsx
import { Search, FileText, Settings, Headphones } from "lucide-react";
import { SectionHeading } from "@/components/atoms/SectionHeading";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Diagnóstico gratuito",
    description:
      "Analizamos tu operación actual de impresión y gestión documental para identificar oportunidades de mejora.",
  },
  {
    number: "02",
    icon: FileText,
    title: "Propuesta personalizada",
    description:
      "Diseñamos una solución a la medida de tu empresa con opciones claras de implementación y costos.",
  },
  {
    number: "03",
    icon: Settings,
    title: "Implementación",
    description:
      "Instalamos, configuramos y ponemos en marcha la solución sin interrumpir tu operación diaria.",
  },
  {
    number: "04",
    icon: Headphones,
    title: "Soporte continuo",
    description:
      "Monitoreo proactivo, mantenimiento y soporte técnico permanente para que nunca te preocupes.",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-foreground px-4 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="Así de fácil es trabajar con nosotros"
          subtitle="En 4 simples pasos transformamos tu operación de impresión y gestión documental."
          className="[&_h2]:text-primary-foreground [&_p]:text-primary-foreground/60"
        />

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              <span className="font-heading text-primary-foreground/10 text-5xl font-bold">
                {step.number}
              </span>
              <div className="mt-4">
                <step.icon className="text-primary size-8" />
                <h4 className="text-primary-foreground mt-4">{step.title}</h4>
                <p className="text-primary-foreground/60 mt-2 text-sm">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify**

Run: `npm run build && npx tsc --noEmit`
Expected: PASS

- [ ] **Step 3: Commit**

```bash
git add src/components/sections/HowItWorks.tsx
git commit -m "feat: add HowItWorks section with 4-step process"
```

---

## Task 9: WhyUs Section

**Files:**

- Create: `src/components/molecules/StatCard.tsx`
- Create: `src/components/sections/WhyUs.tsx`

- [ ] **Step 1: Create StatCard molecule**

```tsx
// src/components/molecules/StatCard.tsx
export function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <p className="font-heading text-primary text-4xl font-bold lg:text-5xl">
        {value}
      </p>
      <p className="text-muted-foreground mt-2 text-sm">{label}</p>
    </div>
  );
}
```

- [ ] **Step 2: Create WhyUs section**

```tsx
// src/components/sections/WhyUs.tsx
import { ShieldCheck, Clock, MapPin, Wrench } from "lucide-react";
import { SectionHeading } from "@/components/atoms/SectionHeading";
import { StatCard } from "@/components/molecules/StatCard";

const differentiators = [
  {
    icon: ShieldCheck,
    title: "Distribuidor Oficial Ricoh",
    description:
      "Acceso directo a equipos, refacciones y soporte de fábrica. Sin intermediarios.",
  },
  {
    icon: Clock,
    title: "Soporte 7 días",
    description:
      "Atención técnica disponible toda la semana para que tu operación nunca se detenga.",
  },
  {
    icon: MapPin,
    title: "Cobertura nacional",
    description:
      "Presencia en las principales ciudades de México con tiempos de respuesta garantizados.",
  },
  {
    icon: Wrench,
    title: "Servicio integral",
    description:
      "Desde el diagnóstico hasta el soporte continuo, todo en un solo proveedor.",
  },
];

const stats = [
  { value: "+200", label: "Empresas atendidas" },
  { value: "40%", label: "Ahorro promedio en impresión" },
  { value: "+500", label: "Equipos gestionados" },
  { value: "24h", label: "Tiempo de respuesta" },
];

export function WhyUs() {
  return (
    <section id="nosotros" className="px-4 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="¿Por qué elegirnos?"
          subtitle="Combinamos tecnología Ricoh con un servicio cercano y personalizado para PYMES."
        />

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {differentiators.map((item) => (
            <div
              key={item.title}
              className="border-border rounded-xl border p-6"
            >
              <item.icon className="text-primary size-8" />
              <h4 className="mt-4">{item.title}</h4>
              <p className="text-muted-foreground mt-2 text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat) => (
            <StatCard key={stat.label} value={stat.value} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Verify**

Run: `npm run build && npx tsc --noEmit`
Expected: PASS

- [ ] **Step 4: Commit**

```bash
git add src/components/molecules/StatCard.tsx src/components/sections/WhyUs.tsx
git commit -m "feat: add WhyUs section with differentiators and stats"
```

---

## Task 10: CtaBanner Section

**Files:**

- Create: `src/components/sections/CtaBanner.tsx`

- [ ] **Step 1: Create the CtaBanner section**

```tsx
// src/components/sections/CtaBanner.tsx
import { Button } from "@/components/ui/button";

export function CtaBanner() {
  return (
    <section id="contacto" className="bg-primary px-4 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-primary-foreground">
          ¿Listo para optimizar tu operación?
        </h2>
        <p className="text-primary-foreground/80 mt-4 text-lg">
          Solicita tu diagnóstico gratuito y recibe una cotización en 24 horas.
          Sin compromiso.
        </p>
        <div className="mt-10">
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
```

- [ ] **Step 2: Verify**

Run: `npm run build && npx tsc --noEmit`
Expected: PASS

- [ ] **Step 3: Commit**

```bash
git add src/components/sections/CtaBanner.tsx
git commit -m "feat: add CtaBanner section with contact CTA"
```

---

## Task 11: Footer Organism

**Files:**

- Create: `src/components/organisms/Footer.tsx`

- [ ] **Step 1: Create the Footer**

```tsx
// src/components/organisms/Footer.tsx
import { Logo } from "@/components/atoms/Logo";
import { Phone, Mail, MapPin } from "lucide-react";

const footerLinks = {
  servicios: [
    { label: "Impresión Gestionada", href: "#servicios" },
    { label: "Solución Paperless", href: "#servicios" },
    { label: "Renta de Multifuncionales", href: "#servicios" },
  ],
  empresa: [
    { label: "Nosotros", href: "#nosotros" },
    { label: "Contacto", href: "#contacto" },
  ],
  legal: [
    { label: "Aviso de Privacidad", href: "#" },
    { label: "Términos y Condiciones", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="border-border bg-foreground border-t px-4 py-12 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Logo className="[&_div]:bg-primary-foreground [&_div]:text-foreground [&_span]:text-primary-foreground" />
            <p className="text-primary-foreground/60 mt-4 max-w-xs text-sm">
              Tu aliado tecnológico en impresión y gestión documental.
              Distribuidor oficial Ricoh.
            </p>
            <div className="text-primary-foreground/60 mt-6 space-y-2 text-sm">
              <a
                href="tel:+521234567890"
                className="hover:text-primary-foreground flex items-center gap-2"
              >
                <Phone className="size-4" />
                <span>+52 (123) 456-7890</span>
              </a>
              <a
                href="mailto:contacto@cmdigital.mx"
                className="hover:text-primary-foreground flex items-center gap-2"
              >
                <Mail className="size-4" />
                <span>contacto@cmdigital.mx</span>
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="size-4" />
                <span>Ciudad de México, México</span>
              </div>
            </div>
          </div>

          {/* Servicios */}
          <div>
            <h5 className="text-primary-foreground text-sm font-semibold">
              Servicios
            </h5>
            <ul className="mt-4 space-y-2">
              {footerLinks.servicios.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/60 hover:text-primary-foreground text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h5 className="text-primary-foreground text-sm font-semibold">
              Empresa
            </h5>
            <ul className="mt-4 space-y-2">
              {footerLinks.empresa.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/60 hover:text-primary-foreground text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h5 className="text-primary-foreground text-sm font-semibold">
              Legal
            </h5>
            <ul className="mt-4 space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/60 hover:text-primary-foreground text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-primary-foreground/10 text-primary-foreground/40 mt-12 border-t pt-8 text-center text-xs">
          &copy; {new Date().getFullYear()} CM Digital. Todos los derechos
          reservados.
        </div>
      </div>
    </footer>
  );
}
```

- [ ] **Step 2: Verify**

Run: `npm run build && npx tsc --noEmit`
Expected: PASS

- [ ] **Step 3: Commit**

```bash
git add src/components/organisms/Footer.tsx
git commit -m "feat: add Footer with contact info, links, and legal"
```

---

## Task 12: Page Assembly + Cleanup

**Files:**

- Modify: `src/app/page.tsx`
- Delete: `src/app/about/page.tsx`

- [ ] **Step 1: Rewrite page.tsx to assemble all sections**

```tsx
// src/app/page.tsx
import { Navbar } from "@/components/organisms/Navbar";
import { Hero } from "@/components/sections/Hero";
import { SocialProof } from "@/components/sections/SocialProof";
import { ServicesShowcase } from "@/components/sections/ServicesShowcase";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { WhyUs } from "@/components/sections/WhyUs";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Footer } from "@/components/organisms/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <ServicesShowcase />
        <HowItWorks />
        <WhyUs />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
```

- [ ] **Step 2: Delete the about page**

```bash
rm src/app/about/page.tsx
rmdir src/app/about
```

- [ ] **Step 3: Verify**

Run: `npm run build && npx tsc --noEmit`
Expected: PASS — all pages build, no type errors.

- [ ] **Step 4: Final commit**

```bash
git add src/app/page.tsx
git rm src/app/about/page.tsx
git commit -m "feat: assemble landing page and remove about page"
```

---

## Verification Checklist

After all tasks are complete, verify manually:

- [ ] `npm run build && npx tsc --noEmit` passes
- [ ] `npm run dev` — page loads at localhost:3000
- [ ] All 7 sections render in order: Hero, SocialProof, ServicesShowcase, HowItWorks, WhyUs, CtaBanner, Footer
- [ ] Navbar sticky behavior works on scroll
- [ ] ServicesShowcase: left nav highlights change on scroll, click-to-scroll works
- [ ] Mobile responsive: hamburger menu, stacked layouts, tabs instead of sticky nav
- [ ] All text is in Spanish
- [ ] Primary red color (#C01826) is dominant, not blue
- [ ] Poppins renders on headings, Roboto on body text
