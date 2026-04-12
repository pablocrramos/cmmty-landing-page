# Paper & Precision Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Shift the CM Digital landing page from cool grays to a warm "paper-inspired" visual language with Plain.com-inspired spacing and shadow-based card depth.

**Architecture:** All color changes flow from CSS custom properties in `globals.css`, so updating tokens propagates everywhere those tokens are used. Hardcoded color values (`#dde2e5`, `#fbfbfb`, `bg-white`) in individual components must be replaced with token references or the new `--card-surface` token. Spacing increases happen in `Container.tsx` and per-component gap values.

**Tech Stack:** Next.js 16 (App Router), Tailwind CSS v4, TypeScript

---

### Task 1: Update color tokens and dot grid in globals.css

**Files:**

- Modify: `src/app/globals.css:86-130`

- [ ] **Step 1: Update warm neutral tokens**

In `src/app/globals.css`, replace the current `:root` neutral and surface values:

```css
/* Before */
--muted-foreground: #7a7a7c;
--muted: #dde2e5;
--accent: #eeeded;
--border: #dde2e5;
--input: #dde2e5;
--surface: #fbfbfb;

/* After */
--muted-foreground: #78756f;
--muted: #e0dbd6;
--accent: #edeae6;
--border: #e0dbd6;
--input: #e0dbd6;
--surface: #f8f6f3;
```

- [ ] **Step 2: Update red harmony tokens**

```css
/* Before */
--primary-dark: #801e20;
--secondary: #f2d8da;

/* After */
--primary-dark: #7a1f22;
--secondary: #f5e0dc;
```

- [ ] **Step 3: Add card-surface token**

Add this new token inside `:root`, after `--surface`:

```css
--card-surface: #f5f2ee;
```

- [ ] **Step 4: Add card-surface to @theme inline block**

Add this line inside the `@theme inline` block, near the other color mappings:

```css
--color-card-surface: var(--card-surface);
```

- [ ] **Step 5: Update sidebar token to match warm surface**

```css
/* Before */
--sidebar: #fafafa;
--sidebar-accent: #f5f5f5;

/* After */
--sidebar: #f8f6f3;
--sidebar-accent: #f5f2ee;
```

- [ ] **Step 6: Update dot grid background**

In the `body` rule inside `@layer base`, change the dot grid:

```css
/* Before */
background-image: radial-gradient(
  circle at 1px 1px,
  rgba(20, 20, 20, 0.07) 1px,
  transparent 0
);

/* After */
background-image: radial-gradient(
  circle at 1px 1px,
  rgba(60, 50, 40, 0.05) 1px,
  transparent 0
);
```

- [ ] **Step 7: Verify build**

Run: `npm run build && npx tsc --noEmit`
Expected: Clean build, no errors.

- [ ] **Step 8: Commit**

```bash
git add src/app/globals.css
git commit -m "update color tokens to warm paper palette and softer dot grid"
```

---

### Task 2: Increase section spacing in Container.tsx

**Files:**

- Modify: `src/components/atoms/Container.tsx:10`

- [ ] **Step 1: Update vertical padding**

In `src/components/atoms/Container.tsx`, change the padding classes:

```tsx
// Before
<div className={`mx-auto py-14 sm:py-16 md:py-20 ${className}`}>

// After
<div className={`mx-auto py-16 sm:py-20 md:py-28 ${className}`}>
```

- [ ] **Step 2: Verify build**

Run: `npm run build && npx tsc --noEmit`
Expected: Clean build.

- [ ] **Step 3: Commit**

```bash
git add src/components/atoms/Container.tsx
git commit -m "increase section vertical padding for more breathing room"
```

---

### Task 3: Warm card treatment in FactsBento.tsx

**Files:**

- Modify: `src/components/sections/FactsBento.tsx:17-18,32,104,114`

- [ ] **Step 1: Replace cardClass — remove border, add shadow, use card-surface bg**

Replace the `cardClass` constant:

```tsx
// Before
const cardClass =
  "relative flex flex-col justify-between overflow-hidden rounded-2xl p-7 bg-white border border-[#dde2e5] transition-[border-color,box-shadow] duration-300 hover:border-[rgba(192,24,38,0.35)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)]";

// After
const cardClass =
  "relative flex flex-col justify-between overflow-hidden rounded-2xl p-7 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md";
```

FactsBento lives on a `light-gray` section (which uses `--surface`), so cards get `bg-white` to contrast.

- [ ] **Step 2: Update grid gap**

```tsx
// Before
<div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">

// After
<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
```

- [ ] **Step 3: Update partner logo pill styling in marquee**

Replace the hardcoded border and bg on the partner logo containers:

```tsx
// Before
className =
  "flex shrink-0 items-center justify-center rounded-lg border border-[#dde2e5] bg-[#fbfbfb] px-5 py-3";

// After
className =
  "flex shrink-0 items-center justify-center rounded-lg bg-card-surface px-5 py-3";
```

- [ ] **Step 4: Verify build**

Run: `npm run build && npx tsc --noEmit`
Expected: Clean build.

- [ ] **Step 5: Commit**

```bash
git add src/components/sections/FactsBento.tsx
git commit -m "apply warm card treatment to FactsBento — shadows instead of borders"
```

---

### Task 4: Warm card treatment in ServicesShowcase.tsx

**Files:**

- Modify: `src/components/sections/ServicesShowcase.tsx:66-67,80-81`

- [ ] **Step 1: Update tab pill inactive state — remove hardcoded border**

```tsx
// Before
"hover:border-primary/40 hover:text-foreground border-[#dde2e5] bg-white text-muted-foreground",

// After
"hover:border-primary/40 hover:text-foreground border-border bg-white text-muted-foreground",
```

- [ ] **Step 2: Update main panel card — remove hardcoded border, warm shadow**

```tsx
// Before
className =
  "overflow-hidden rounded-2xl border border-[#dde2e5] bg-white shadow-[0_4px_30px_rgba(0,0,0,0.04)]";

// After
className =
  "overflow-hidden rounded-2xl bg-white shadow-[0_2px_24px_rgba(0,0,0,0.06)]";
```

- [ ] **Step 3: Verify build**

Run: `npm run build && npx tsc --noEmit`
Expected: Clean build.

- [ ] **Step 4: Commit**

```bash
git add src/components/sections/ServicesShowcase.tsx
git commit -m "apply warm shadow treatment to ServicesShowcase cards"
```

---

### Task 5: Warm card treatment in HowItWorks.tsx

**Files:**

- Modify: `src/components/sections/HowItWorks.tsx:51,59`

HowItWorks lives on a `white` section (bg-transparent, dot grid shows through). Cards here should use `--card-surface` for the "framed bento" effect.

- [ ] **Step 1: Update grid gap**

```tsx
// Before
<div className="mt-12 grid gap-8 sm:grid-cols-3 lg:mt-14">

// After
<div className="mt-12 grid gap-10 sm:grid-cols-3 lg:mt-14">
```

- [ ] **Step 2: Update icon box — remove hardcoded border, add card-surface bg**

```tsx
// Before
<div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#dde2e5]">

// After
<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-card-surface shadow-sm">
```

- [ ] **Step 3: Verify build**

Run: `npm run build && npx tsc --noEmit`
Expected: Clean build.

- [ ] **Step 4: Commit**

```bash
git add src/components/sections/HowItWorks.tsx
git commit -m "apply warm card-surface treatment to HowItWorks icon boxes"
```

---

### Task 6: Warm treatment on Navbar island

**Files:**

- Modify: `src/components/organisms/Navbar.tsx:42`

- [ ] **Step 1: Replace border with warm shadow on desktop island**

```tsx
// Before
<nav className="border-border/60 flex h-14 w-full max-w-3xl items-center justify-between rounded-2xl border bg-white px-3 pl-6 shadow-[0_2px_20px_rgba(0,0,0,0.06)]">

// After
<nav className="flex h-14 w-full max-w-3xl items-center justify-between rounded-2xl bg-white px-3 pl-6 shadow-[0_2px_20px_rgba(0,0,0,0.08)]">
```

- [ ] **Step 2: Verify build**

Run: `npm run build && npx tsc --noEmit`
Expected: Clean build.

- [ ] **Step 3: Commit**

```bash
git add src/components/organisms/Navbar.tsx
git commit -m "remove border from navbar island, use shadow only"
```

---

### Task 7: Warm treatment on Empresa page cards

**Files:**

- Modify: `src/app/empresa/page.tsx:94,108,117,140-141,150,172-173,207-208`

- [ ] **Step 1: Update founding card — remove hardcoded border, add shadow**

```tsx
// Before
<div className="rounded-2xl border border-[#dde2e5] bg-[#fbfbfb] p-8">

// After
<div className="rounded-2xl bg-card-surface p-8 shadow-sm">
```

- [ ] **Step 2: Update stat grid cards — remove hardcoded border, add shadow**

```tsx
// Before
className = "rounded-[0.38rem] border border-[#dde2e5] bg-white p-5";

// After
className = "rounded-lg bg-white p-5 shadow-sm";
```

- [ ] **Step 3: Update stat grid gap**

```tsx
// Before
<div className="grid grid-cols-2 gap-4">

// After
<div className="grid grid-cols-2 gap-5">
```

- [ ] **Step 4: Update Mision/Vision cards — remove hardcoded border, add shadow**

Both cards follow the same pattern:

```tsx
// Before
<div className="rounded-2xl border border-[#dde2e5] bg-white p-8">

// After
<div className="rounded-2xl bg-white p-8 shadow-sm">
```

- [ ] **Step 5: Update valores divider — keep as-is (accent line)**

The `<div className="bg-primary h-px w-8" />` in valores is a design accent, not a card border. No change needed.

- [ ] **Step 6: Update CV card link — remove hardcoded border, add shadow**

```tsx
// Before
className =
  "hover:border-primary/40 flex items-center gap-3 rounded-lg border border-[#dde2e5] bg-white px-6 py-4 transition-colors hover:bg-[#fbfbfb]";

// After
className =
  "flex items-center gap-3 rounded-lg bg-white px-6 py-4 shadow-sm transition-shadow hover:shadow-md";
```

- [ ] **Step 7: Update icon box inside CV card**

```tsx
// Before
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[0.38rem] border border-[#dde2e5]">

// After
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-card-surface">
```

- [ ] **Step 8: Verify build**

Run: `npm run build && npx tsc --noEmit`
Expected: Clean build.

- [ ] **Step 9: Commit**

```bash
git add src/app/empresa/page.tsx
git commit -m "apply warm card treatment across empresa page"
```

---

### Task 8: Warm treatment on ContactInfo and ContactForm

**Files:**

- Modify: `src/components/sections/ContactInfo.tsx:69,102`
- Modify: `src/components/sections/ContactForm.tsx:17,45`

- [ ] **Step 1: ContactInfo — update icon boxes**

```tsx
// Before
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#dde2e5]">

// After
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-card-surface shadow-sm">
```

- [ ] **Step 2: ContactInfo — update Google Maps container**

```tsx
// Before
<div className="overflow-hidden rounded-2xl border border-[#dde2e5]">

// After
<div className="overflow-hidden rounded-2xl shadow-sm">
```

- [ ] **Step 3: ContactForm — update inputClass border token**

```tsx
// Before
const inputClass =
  "w-full rounded-lg border border-[#dde2e5] bg-white px-4 py-3 text-base text-foreground placeholder:text-muted-foreground/50 transition-colors focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/10";

// After
const inputClass =
  "w-full rounded-lg border border-border bg-white px-4 py-3 text-base text-foreground placeholder:text-muted-foreground/50 transition-colors focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/10";
```

- [ ] **Step 4: ContactForm — update form card container**

```tsx
// Before
<div className="rounded-2xl border border-[#dde2e5] bg-white p-8 shadow-sm md:p-12">

// After
<div className="rounded-2xl bg-white p-8 shadow-[0_2px_24px_rgba(0,0,0,0.06)] md:p-12">
```

- [ ] **Step 5: Verify build**

Run: `npm run build && npx tsc --noEmit`
Expected: Clean build.

- [ ] **Step 6: Commit**

```bash
git add src/components/sections/ContactInfo.tsx src/components/sections/ContactForm.tsx
git commit -m "apply warm treatment to contact info and form cards"
```

---

### Task 9: Warm treatment on CtaBanner info cards

**Files:**

- Modify: `src/components/sections/CtaBanner.tsx:59`

CtaBanner is a dark section — the cards inside use `bg-white/5` with `border-white/10`. These stay as-is since the dark section has its own visual language. Only the icon box border changes to match warm token.

- [ ] **Step 1: Verify — no changes needed**

The CtaBanner dark section uses `border-white/10`, `bg-white/5` — these are correct for dark backgrounds and don't use the cool gray tokens. No modification required.

- [ ] **Step 2: Commit (skip — nothing to commit)**

---

### Task 10: Final verification and cleanup

**Files:**

- All modified files

- [ ] **Step 1: Search for remaining hardcoded #dde2e5**

Run: `grep -rn "#dde2e5" src/`
Expected: Zero matches (all instances replaced with token references or removed).

- [ ] **Step 2: Search for remaining hardcoded #fbfbfb**

Run: `grep -rn "#fbfbfb" src/`
Expected: Zero matches (all instances now use `--surface` or `--card-surface` tokens).

- [ ] **Step 3: Full build and type check**

Run: `npm run build && npx tsc --noEmit`
Expected: Clean build, no errors, no warnings.

- [ ] **Step 4: Visual review checklist**

Run: `npm run dev`

Verify in browser:

- Dot grid has warm tone, not cool gray
- All cards have subtle shadows instead of hard borders
- FactsBento cards contrast against warm surface background
- HowItWorks icon boxes use card-surface warm tone
- Navbar island floats with shadow, no border
- Empresa page cards all shadow-based
- Contact form card has warm shadow
- Contact info icon boxes use card-surface
- Tab pills in ServicesShowcase use border token
- Dark sections (CtaBanner, Footer) unchanged

- [ ] **Step 5: Fix any remaining hardcoded values found in Step 1-2**

If grep found remaining instances, replace them with the appropriate token (`border-border`, `bg-card-surface`, `bg-[var(--surface)]`).

- [ ] **Step 6: Final commit if cleanup was needed**

```bash
git add -A
git commit -m "clean up remaining hardcoded color values"
```
