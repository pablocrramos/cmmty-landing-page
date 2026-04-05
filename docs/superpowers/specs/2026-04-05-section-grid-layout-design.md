# Section Grid Layout — Design Spec

**Date:** 2026-04-05  
**Status:** Approved  
**Stack:** Next.js 14+, TypeScript, Tailwind CSS (v4), Shadcn UI

---

## Objetivo

Implementar un componente `<Section>` reutilizable que actúa como contenedor base para todas las secciones de la página, proveyendo líneas guía visuales laterales (1px) consistentes con el diseño de Figma.

---

## Comportamiento

### Líneas guía

- Posición: izquierda y derecha del contenedor de contenido (1px)
- Implementación: `border-l border-r` en el inner container (Approach A — border CSS)
- Colores según variante de fondo:
  - `variant="white"` → bg `#FFFFFF`, líneas `#D7D7D7`
  - `variant="light-gray"` → bg `#FBFBFB`, líneas `#B9B9B9`

### Comportamiento responsive

| Breakpoint | Rango      | Líneas   | Padding horizontal         |
| ---------- | ---------- | -------- | -------------------------- |
| Mobile     | `< 768px`  | Ocultas  | `px-4` (16px)              |
| Tablet     | `≥ 768px`  | Visibles | `sm:px-6` (24px)           |
| Desktop    | `≥ 1024px` | Visibles | `lg:px-8` (32px)           |
| XL         | `≥ 1440px` | Visibles | centrado, max-width activo |

### Contenedor

- Max-width unificado: `1200px` (custom token entre `max-w-6xl` y `max-w-7xl`)
- Centrado con `mx-auto`

---

## Excepciones (no usan `<Section>`)

- `<Navbar>` — nav fijo, full-bleed
- `<Hero>` — fondo de imagen a pantalla completa, full-bleed
- `<Footer>` — fondo oscuro, full-bleed

---

## API del componente

```tsx
// src/components/atoms/Section.tsx

interface SectionProps {
  variant?: "white" | "light-gray"; // default: 'white'
  id?: string;
  className?: string; // clases extra en el <section>
  innerClassName?: string; // clases extra en el contenedor inner
  children: React.ReactNode;
}
```

### Lógica interna

```tsx
const variantMap = {
  white: { bg: "bg-white", border: "border-[#D7D7D7]" },
  "light-gray": { bg: "bg-[var(--surface)]", border: "border-[#B9B9B9]" },
};

// <section> → bg-color, full width
// inner div → mx-auto max-w-[1200px]
//             px-4 sm:px-6 lg:px-8
//             sm:border-l sm:border-r + border-color
//
// NOTA: globals.css aplica `border-border` a `*` (solo color, no width).
// El `sm:border-l sm:border-r` establece el width en ≥768px.
// El `border-[#D7D7D7]` / `border-[#B9B9B9]` sobrescribe el color correctamente.
// La prop innerClassName usa cn() para merge con las clases base.
```

---

## Token CSS nuevo

Agregar en `globals.css` sin tocar el token `--accent` existente (usado por Shadcn):

```css
:root {
  --surface: #fbfbfb; /* light-gray sections background */
}
```

---

## Secciones a migrar

| Sección            | Variant      | Cambios adicionales                                                                 |
| ------------------ | ------------ | ----------------------------------------------------------------------------------- |
| `SocialProof`      | `white`      | Eliminar `px-4 lg:px-8` del `<section>`; quitar `max-w-5xl` del inner, usar Section |
| `ServicesShowcase` | `light-gray` | Conservar `id="servicios"`; estandarizar padding                                    |
| `FactsBento`       | `light-gray` | Estandarizar padding                                                                |
| `HowItWorks`       | `white`      | Corregir inconsistencia: actualmente usa `px-8 lg:px-16`                            |
| `CtaBanner`        | `white`      | Estandarizar padding                                                                |

---

## Validaciones post-implementación

- [ ] Contenido no toca las líneas guía en ningún breakpoint ≥ 768px
- [ ] Líneas no aparecen en mobile (< 768px)
- [ ] Color `#D7D7D7` en secciones blancas
- [ ] Color `#B9B9B9` en secciones gris claro
- [ ] `npm run build && npx tsc --noEmit` pasan sin errores
- [ ] Hero, Navbar y Footer no tienen líneas
