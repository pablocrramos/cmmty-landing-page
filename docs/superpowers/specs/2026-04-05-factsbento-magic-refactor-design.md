# FactsBento → MagicBento Refactor Design

**Date:** 2026-04-05  
**Status:** Approved

## Summary

Refactor `FactsBento.tsx` to use the React Bits MagicBento as a visual and animation base, adapting it to the project's white/light-gray palette and red brand color. Content, layout, and Section/Container wrappers are unchanged.

## Scope

- **In scope:** styles, animations, GSAP integration, card rendering approach
- **Out of scope:** card content, grid layout, Section/Container wrapper, business data

## Approach

Option A — full port into `FactsBento.tsx`. Three internal components are added to the file:

- `ParticleCard` — wraps each card with GSAP mouse-event listeners (particles, tilt, magnetism, ripple)
- `GlobalSpotlight` — appends a fixed radial spotlight to `document.body`, follows mouse across the grid
- Grid wrapper div — replaces `BentoCardGrid`, keeps existing Tailwind grid classes

The file gains `"use client"` at the top since GSAP requires browser APIs.

## Color Mapping

| Token               | Value                                  |
| ------------------- | -------------------------------------- |
| Card background     | `#ffffff`                              |
| Card text           | `#141414`                              |
| Glow/particle color | `192, 24, 38` (red `#c01826`)          |
| Card border         | `#dde2e5`                              |
| Section background  | unchanged (`light-gray` / `--surface`) |

## Animations

| Effect           | Default      |
| ---------------- | ------------ |
| Border glow      | enabled      |
| Global spotlight | enabled      |
| Particle stars   | enabled      |
| Click ripple     | enabled      |
| Tilt             | disabled     |
| Magnetism        | disabled     |
| Mobile (≤768px)  | all disabled |

## Dependency

- Add `gsap` to `dependencies` via `npm install gsap`
- Add `@types/gsap` if needed (gsap ships its own types)

## Grid Layout

Unchanged from current — 3-col at `lg`, 2-col at `sm`, 1-col mobile:

- Row 1: 3 stat cards
- Row 2: wide logos card (`col-span-2`) + tagline card (`col-span-1`)
- Third stat card spans `sm:col-span-2 lg:col-span-1` as today

## Verification

After implementation run:

```
npm run build && npx tsc --noEmit
```
