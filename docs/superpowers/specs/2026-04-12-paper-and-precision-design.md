# Paper & Precision — Visual Language Redesign

**Date:** 2026-04-12
**Status:** Approved
**Scope:** Warm visual language shift + Plain.com-inspired spacing and card treatment

## Design Concept

The warmth in this redesign is thematically justified by the printing industry itself. Paper has a naturally warm tone (cream, ivory), and printers live in office environments with warm neutrals. This gives us permission to shift from cool grays to warm grays without losing the technical, serious character of the CM Digital brand.

The name "Paper & Precision" captures both halves: warm paper tones for surfaces, precise clean layouts for structure.

## 1. Color Token Updates

### Warm neutrals (replace current cool grays)

| Token                | Current (cool) | New (warm) | Role                          |
| -------------------- | -------------- | ---------- | ----------------------------- |
| `--border`           | `#dde2e5`      | `#e0dbd6`  | Card borders, dividers        |
| `--muted`            | `#dde2e5`      | `#e0dbd6`  | Hover backgrounds, separators |
| `--input`            | `#dde2e5`      | `#e0dbd6`  | Form input borders            |
| `--surface`          | `#fbfbfb`      | `#f8f6f3`  | Section light-gray background |
| `--muted-foreground` | `#7a7a7c`      | `#78756f`  | Secondary text                |
| `--accent`           | `#eeeded`      | `#edeae6`  | Accent background             |

### Adjusted reds (harmonize with warm neutrals)

| Token            | Current   | New       | Reason                         |
| ---------------- | --------- | --------- | ------------------------------ |
| `--primary`      | `#c01826` | `#c01826` | Unchanged — already warm       |
| `--primary-dark` | `#801e20` | `#7a1f22` | Slight warmth adjustment       |
| `--secondary`    | `#f2d8da` | `#f5e0dc` | Warmer pink, like tinted paper |

### New token

| Token            | Value     | Role                                                      |
| ---------------- | --------- | --------------------------------------------------------- |
| `--card-surface` | `#f5f2ee` | Card background on white sections ("framed bento" effect) |

The `--card-surface` token creates visual separation between cards and white backgrounds without relying on heavy borders. Cards on white sections get this warm paper tone; cards on `--surface` sections get pure white. This produces the "framed bento" look from Plain.com.

## 2. Card Treatment

### Current approach

- Hard border: `border border-[#dde2e5]`
- White background on all cards
- No shadow depth

### New approach

- Cards on white background: `bg-[var(--card-surface)]` + no visible border + `shadow-sm`
- Cards on `--surface` background: `bg-white` + no visible border + `shadow-sm`
- Border radius: keep `rounded-2xl` on main cards
- Hover transition: `shadow-md` on interactive cards

Depth through surface contrast and shadow, not borders.

## 3. Spacing Updates (Plain.com-inspired)

### Section vertical padding (Container.tsx)

- Current: `py-14 sm:py-16 md:py-20`
- New: `py-16 sm:py-20 md:py-28`

### Card grid gaps

- Current: `gap-6` in most grids
- New: `gap-8` standard, `gap-10` for primary grids

### Max-width

- Keep `max-w-325` (1300px) — already correct

## 4. Dot Grid Background

- Current: `rgba(20, 20, 20, 0.07)` — cool gray dots
- New: `rgba(60, 50, 40, 0.05)` — warm, subtler dots

## 5. Files to Modify

| File                                           | Changes                                                     |
| ---------------------------------------------- | ----------------------------------------------------------- |
| `src/app/globals.css`                          | Update color tokens, dot grid color                         |
| `src/components/atoms/Container.tsx`           | Increase vertical padding                                   |
| `src/components/sections/FactsBento.tsx`       | Card-surface bg, remove borders, add shadows, increase gaps |
| `src/components/sections/ServicesShowcase.tsx` | Warm shadow on main card, remove border                     |
| `src/components/sections/HowItWorks.tsx`       | Step cards with card-surface or shadow treatment            |
| `src/components/organisms/Navbar.tsx`          | Island with warm shadow instead of border                   |
| `src/app/empresa/page.tsx`                     | All cards: warm treatment, remove borders, add shadows      |
| `src/app/contacto/page.tsx`                    | Card treatment if applicable                                |
| `src/components/sections/ContactInfo.tsx`      | Card treatment if applicable                                |

## 6. What Does NOT Change

- Primary red (`#c01826`)
- Typography (Inter headings, IBM Plex Sans body)
- Section layout structure
- Dark sections (CtaBanner, Footer) — keep current dark treatment
- Hero gradient and structure
- Text content
- Max-width constraints
