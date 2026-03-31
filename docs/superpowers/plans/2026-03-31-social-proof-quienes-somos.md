# Social Proof Refactor + Quiénes Somos Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Refactor the SocialProof section to use real client logos with grayscale/border styling, and add a new QuienesSomos section between SocialProof and ServicesShowcase.

**Architecture:** Replace placeholder text in SocialProof with a real `next/image` logo grid; create a standalone `QuienesSomos` section component that reuses existing `SectionHeading` and `StatCard` atoms; wire both into `page.tsx`.

**Tech Stack:** Next.js 16 App Router, TypeScript strict, Tailwind CSS v4, `next/image` fill mode

---

## File Map

| File                                       | Action  | Responsibility                                                  |
| ------------------------------------------ | ------- | --------------------------------------------------------------- |
| `src/components/sections/SocialProof.tsx`  | Rewrite | Logo grid with grayscale + bordered containers                  |
| `src/components/sections/QuienesSomos.tsx` | Create  | About section with copy + stats grid                            |
| `src/app/page.tsx`                         | Modify  | Add `<QuienesSomos />` between SocialProof and ServicesShowcase |

---

## Task 1: Rewrite SocialProof.tsx

**Files:**

- Modify: `src/components/sections/SocialProof.tsx`

- [ ] **Step 1: Replace the entire file content**

```tsx
import Image from "next/image";

const clientLogos = [
  {
    key: "innovasport",
    src: "/logos/clients/inova_logo.svg",
    alt: "Logo Innovasport",
  },
  { key: "magna", src: "/logos/clients/magna.svg", alt: "Logo Magna" },
  { key: "fanasa", src: "/logos/clients/fanasa.svg", alt: "Logo Fanasa" },
  { key: "javer", src: "/logos/clients/javer.svg", alt: "Logo Javer" },
  { key: "uanl", src: "/logos/clients/uanl.svg", alt: "Logo UANL" },
  {
    key: "nuevoleon",
    src: "/logos/clients/nuevoleon.svg",
    alt: "Logo Gobierno de Nuevo León",
  },
  { key: "acre", src: "/logos/clients/acre.svg", alt: "Logo ACRE" },
  {
    key: "redexpress",
    src: "/logos/clients/redexpress.svg",
    alt: "Logo Red Express",
  },
];

export function SocialProof() {
  return (
    <section className="border-border bg-accent border-y px-4 py-12 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="text-muted-foreground text-center text-sm">
          Confiados por marcas que construyen el futuro
        </p>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {clientLogos.map((logo) => (
            <div
              key={logo.key}
              className="border-border relative h-16 rounded border grayscale transition-all duration-300 hover:grayscale-0"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                sizes="120px"
                className="object-contain p-3"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify TypeScript compiles**

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add src/components/sections/SocialProof.tsx
git commit -m "feat: refactor SocialProof with real logos, grayscale, and bordered containers"
```

---

## Task 2: Create QuienesSomos.tsx

**Files:**

- Create: `src/components/sections/QuienesSomos.tsx`

- [ ] **Step 1: Create the file**

```tsx
import { SectionHeading } from "@/components/atoms/SectionHeading";
import { StatCard } from "@/components/molecules/StatCard";

const stats = [
  { value: "+200", label: "Empresas atendidas" },
  { value: "40%", label: "Ahorro promedio en impresión" },
  { value: "+500", label: "Equipos gestionados" },
  { value: "24h", label: "Tiempo de respuesta" },
];

export function QuienesSomos() {
  return (
    <section id="quienes-somos" className="px-4 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <span className="border-primary/20 bg-primary/5 text-primary mb-6 inline-block rounded-full border px-3 py-1 text-xs font-semibold">
              Sobre CM Digital
            </span>
            <SectionHeading title="¿Quiénes somos?" centered={false} />
            <p className="text-muted-foreground mt-6">
              CM Digital nació en el noreste de México para resolver un problema
              real: las PYMES gastan demasiado en impresión sin saberlo. Como
              Distribuidor Oficial de Ricoh, diseñamos soluciones de impresión
              gestionada, digitalización y renta de equipos que reducen costos
              hasta un 40% y liberan a tu equipo para enfocarse en lo que
              importa. No somos un proveedor más — somos el aliado operativo de
              más de 200 empresas en México.
            </p>
          </div>
          <div className="grid grid-cols-2 content-center gap-8">
            {stats.map((stat) => (
              <StatCard
                key={stat.label}
                value={stat.value}
                label={stat.label}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify TypeScript compiles**

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add src/components/sections/QuienesSomos.tsx
git commit -m "feat: add QuienesSomos section with copy and stats grid"
```

---

## Task 3: Wire QuienesSomos into page.tsx

**Files:**

- Modify: `src/app/page.tsx`

- [ ] **Step 1: Add import and component to page.tsx**

Replace the existing file content with:

```tsx
import { Navbar } from "@/components/organisms/Navbar";
import { Hero } from "@/components/sections/Hero";
import { SocialProof } from "@/components/sections/SocialProof";
import { QuienesSomos } from "@/components/sections/QuienesSomos";
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
        <QuienesSomos />
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

- [ ] **Step 2: Verify build passes**

```bash
npm run build && npx tsc --noEmit
```

Expected: Build completes with no errors or type errors.

- [ ] **Step 3: Commit**

```bash
git add src/app/page.tsx
git commit -m "feat: add QuienesSomos to page between SocialProof and ServicesShowcase"
```
