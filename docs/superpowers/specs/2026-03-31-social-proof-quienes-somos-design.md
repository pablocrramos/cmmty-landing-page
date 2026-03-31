# Design Spec: Social Proof Refactor + Quiénes Somos

**Date:** 2026-03-31
**Status:** Approved

---

## Scope

Two changes to `src/app/page.tsx` and related components:

1. Refactor `SocialProof` section — real logos, grayscale, bordered containers, new heading
2. Add new `QuienesSomos` section between `SocialProof` and `ServicesShowcase`

---

## 1. Social Proof Refactor

### File

`src/components/sections/SocialProof.tsx`

### Changes

**Remove:**

- Badge "Distribuidor Oficial Ricoh" (ShieldCheck + pill) — entirety of the `{/* Ricoh badge */}` block
- Placeholder `clientLogos` string array and rendered text boxes

**Add:**

- Section heading: `"Confiados por marcas que construyen el futuro"` — plain `<p>` centered, `text-muted-foreground text-sm text-center` to keep it lightweight above the logos (not a semantic heading — it's a descriptor)
- Real logo grid using `next/image`

### Logo data

Logos come from `public/logos/clients/`. Include these 8 (exclude `ricoh.svg` and `sharp.svg` — those are suppliers):

| key         | file                            | alt                         |
| ----------- | ------------------------------- | --------------------------- |
| innovasport | `/logos/clients/inova_logo.svg` | Logo Innovasport            |
| magna       | `/logos/clients/magna.svg`      | Logo Magna                  |
| fanasa      | `/logos/clients/fanasa.svg`     | Logo Fanasa                 |
| javer       | `/logos/clients/javer.svg`      | Logo Javer                  |
| uanl        | `/logos/clients/uanl.svg`       | Logo UANL                   |
| nuevoleon   | `/logos/clients/nuevoleon.svg`  | Logo Gobierno de Nuevo León |
| acre        | `/logos/clients/acre.svg`       | Logo ACRE                   |
| redexpress  | `/logos/clients/redexpress.svg` | Logo Red Express            |

### Logo container spec

```
border: 1px solid border (Tailwind: border border-border)
padding: px-6 py-4  (24px × 16px — 8pt grid multiples)
grayscale filter: grayscale (Tailwind)
hover: hover:grayscale-0 transition-all duration-300
display: flex items-center justify-center
```

Each container has a fixed height of `h-16` (64px) to keep the row uniform.

`next/image` implementation: use `fill` mode inside a relative-positioned wrapper `<div className="relative w-full h-full">`. Set `sizes="120px"` and `style={{ objectFit: "contain" }}` (or Tailwind `object-contain` via className). This is more robust than fixed width/height for SVGs whose intrinsic dimensions vary across logos.

### Grid breakpoints

| Breakpoint       | Columns |
| ---------------- | ------- |
| default (mobile) | 2       |
| sm (640px+)      | 3       |
| lg (1024px+)     | 4       |

Tailwind: `grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4`

### Section wrapper

Keep existing `bg-accent border-y border-border px-4 py-12 lg:px-8` — no structural changes to the outer section.

---

## 2. Nueva Sección: Quiénes Somos

### File (new)

`src/components/sections/QuienesSomos.tsx`

### Placement in page.tsx

```tsx
<SocialProof />
<QuienesSomos />       {/* NEW */}
<ServicesShowcase />
```

### Copy

**Heading:** `¿Quiénes somos?`
**Subheading (optional eyebrow):** `Sobre CM Digital`
**Body (72 words):**

> CM Digital nació en el noreste de México para resolver un problema real: las PYMES gastan demasiado en impresión sin saberlo. Como Distribuidor Oficial de Ricoh, diseñamos soluciones de impresión gestionada, digitalización y renta de equipos que reducen costos hasta un 40% y liberan a tu equipo para enfocarse en lo que importa. No somos un proveedor más — somos el aliado operativo de más de 200 empresas en México.

### Layout

**Desktop:** 2-column grid (`lg:grid-cols-2 gap-16`)

- Left col: eyebrow tag + `SectionHeading` (left-aligned, `centered={false}`) + body copy
- Right col: 2×2 grid of `StatCard` components (reuse existing atom)

**Mobile:** single column, stats below copy

**Stats (reuse from WhyUs data pattern):**

```
+200  Empresas atendidas
40%   Ahorro promedio en impresión
+500  Equipos gestionados
24h   Tiempo de respuesta
```

**Section wrapper:** `px-4 py-20 lg:px-8 lg:py-28` — matches WhyUs pattern. Add `id="quienes-somos"` for nav anchor.

### Eyebrow tag style

Small pill: `text-primary bg-primary/5 border border-primary/20 rounded-full px-3 py-1 text-xs font-semibold` — matches existing badge pattern.

---

## Validation Checklist

- [ ] All `next/image` tags have explicit `width` and `height`
- [ ] All logos have descriptive `alt` text in Spanish
- [ ] Grayscale filter applied via Tailwind `grayscale` class
- [ ] No inline styles — Tailwind utilities only
- [ ] All text in Spanish
- [ ] Mobile-first responsive (2→3→4 col grid)
- [ ] Run `npm run build && npx tsc --noEmit` after implementation
- [ ] WCAG contrast: grayscale logos on `bg-accent` background — SVG logos on light background maintain sufficient contrast in their bordered containers

---

## Files Touched

| File                                       | Change                                |
| ------------------------------------------ | ------------------------------------- |
| `src/components/sections/SocialProof.tsx`  | Full rewrite                          |
| `src/components/sections/QuienesSomos.tsx` | New file                              |
| `src/app/page.tsx`                         | Add `<QuienesSomos />` import + usage |
