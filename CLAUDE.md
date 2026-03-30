@AGENTS.md

# CM Digital Landing Page — NextJS MVP

## Project

Landing page for CM Digital, a Mexican MPS (Managed Printing Services) company and official Ricoh distributor targeting SMBs (PYMES).

## Stack

- NextJS 14+ (App Router)
- TypeScript strict mode
- React functional components
- Tailwind CSS
- Shadcn UI

## Commands

- Dev: `npm run dev`
- Build: `npm run build`
- Lint: `npm run lint`
- Format: `npx prettier --write .`
- Type check: `npx tsc --noEmit`

## Code Standards

- Mobile-first responsive design
- Semantic HTML5 (section, article, nav, main, footer)
- All text content in Spanish
- CSS via Tailwind utilities — no inline styles, no separate CSS files
- Components go in `src/components/` organized by atomic design: atoms/, molecules/, organisms/, sections/
- Pages go in `src/app/`
- Design tokens in `tailwind.config.ts` under `theme.extend`
- Images in `public/images/`

## Business Context

CM Digital offers ONLY these 3 services (never add others):

1. Servicio de Impresión Gestionada (MPS)
2. Solución Paperless (digitalización)
3. Renta y Venta de Multifuncionales (Ricoh)

Primary color: red (not blue). See SPEC.md for full design details.

## Verification

After any implementation: run `npm run build && npx tsc --noEmit` to verify. Fix errors before moving on.
