# SPEC — CM Digital Landing Page MVP

## Objetivo

Construir el MVP de la landing page de CM Digital siguiendo un proceso por fases.
Cada fase debe completarse y verificarse antes de pasar a la siguiente.

---

## Contexto del negocio

### ¿Qué es CM Digital?

Empresa mexicana de servicios digitales de impresión y gestión documental.
Distribuidor oficial de Ricoh. Mercado objetivo: PYMES (oficinas, escuelas, hospitales, negocios).

### Servicios (SOLO estos 3)

1. **Servicio de Impresión Gestionada (MPS)** — Impresión administrada todo incluido: monitoreo, mantenimiento preventivo/correctivo, suministro automático de consumibles, soporte técnico. El cliente se olvida de la gestión de impresión.

2. **Solución Paperless** — Digitalización de archivos físicos, procesamiento de datos, flujos de trabajo digitales, trazabilidad, acceso remoto seguro.

3. **Renta y Venta de Multifuncionales** — Equipos Ricoh. Producto "puerta de entrada" a los demás servicios. Opciones de renta (leasing) y venta directa.

### Qué NO somos (nunca incluir)

- NO cómputo corporativo (laptops, PCs, servidores)
- NO artes gráficas / impresión comercial de producción
- NO movilidad, café/hospitality

---

## Análisis competitivo — Dileo Technology

Competidor directo: https://www.dileo.mx/dileo-technology
Ambos distribuidores oficiales de Ricoh.

### Replicar de Dileo (en nuestro estilo)

- Presentación de servicios como soluciones claras con beneficios listados
- Sección de aliados/partners (nosotros: logo Ricoh como aliado principal)
- Sección de testimonios de clientes
- CTA claro al final → contacto/contratación
- Propuesta de valor: "nos encargamos de tu operación para que te enfoques en tu negocio"
- Tono profesional pero accesible para PYMES

### NO replicar de Dileo

- Soluciones de Cómputo Corporativo (Lenovo) → no tenemos
- Impresoras para Artes Gráficas → no tenemos
- Dileo Mobility / Hospitality → no tenemos

### Diferenciación visual

- Paleta roja (no azul)
- Estética más moderna tipo cotool.ai
- Lenguaje más directo, menos corporativo

---

## Referencias visuales

1. **cotool.ai** (https://www.cotool.ai/) — referencia de ESTÉTICA: layout, componentes, cards, hero, footer, responsive behavior
2. **Dileo Technology** (https://www.dileo.mx/dileo-technology) — referencia de ESTRATEGIA DE CONTENIDO: cómo presentar servicios MPS, estructura de beneficios, testimonios, CTAs

---

## Fases de implementación

### FASE 1 — Design tokens y configuración base

**Input:** Imagen del sistema de diseño que compartiré (paleta, botones, tipografía).

**Tareas:**

1. Analizar la imagen y extraer todos los valores: colores hex, font sizes, weights, border radius, spacing
2. Configurar `tailwind.config.ts` con los tokens extraídos bajo `theme.extend`:
   - `colors` (primary, secondary, neutral, accent con sus variantes)
   - `fontSize` (headings h1-h6, body, caption)
   - `borderRadius`, `spacing`, `boxShadow` si aplica
3. Crear componentes base de botones si la imagen los define

**Verificación:** `npm run build && npx tsc --noEmit` pasa sin errores.

**STOP** → Muéstrame los tokens extraídos y la config propuesta. Espera mi confirmación antes de continuar.

---

### FASE 2 — Análisis de referencias

**Tareas:**

1. Fetch y analizar https://www.cotool.ai/ — documentar:
   - Secciones identificadas y su orden
   - Componentes clave (cards, hero, features, CTAs)
   - Comportamiento responsive
   - Estructura del footer
2. Analizar https://www.dileo.mx/dileo-technology — documentar:
   - Cómo presentan servicios y beneficios
   - Sección partners, testimonios, CTA
   - Qué funciona bien, qué podemos mejorar
3. Proponer estructura de secciones para CM Digital mapeando ambas referencias

**STOP** → Presenta el análisis y la propuesta de estructura. Espera mi confirmación.

---

### FASE 3 — Revisión de mocks

**Input:** Imágenes de mocks que compartiré.

**Tareas:**

1. Describir cada sección de cada mock
2. Comparar contra cotool.ai: ¿layout coincide? ¿componentes tienen el comportamiento esperado?
3. Comparar contra estrategia Dileo: ¿cubrimos la misma propuesta de valor? ¿falta algo?
4. Listar inconsistencias, mejoras sugeridas, y elementos que necesitan más definición

**STOP** → Presenta comparación detallada. NO generar código. Espera aprobación.

---

### FASE 4 — Plan de implementación

**Tareas:**

1. Confirmar que todo el contexto necesario está disponible
2. Definir estructura de archivos:
   ```
   src/
     app/
       layout.tsx
       page.tsx
       globals.css
     components/
       atoms/       (Button, Badge, etc.)
       molecules/   (ServiceCard, TestimonialCard, etc.)
       organisms/   (Navbar, ServiceSection, Footer, etc.)
       sections/    (Hero, Services, Partners, Testimonials, CTA, etc.)
   public/
     images/
   tailwind.config.ts
   ```
3. Listar componentes en orden de creación (dependencias primero)
4. Proponer copy/textos para cada sección basado en contexto de negocio

**STOP** → Espera aprobación de estructura y plan.

---

### FASE 5 — Implementación

**Solo después de aprobación de TODAS las fases anteriores.**

Orden de ejecución:

1. Tailwind config con design tokens
2. Layout global (fonts, metadata SEO)
3. Componentes átomo → molécula → organismo → sección
4. Ensamblaje de page.tsx
5. Responsive mobile-first en cada componente
6. Accesibilidad: alt texts, semántica HTML, contraste WCAG AA
7. Metadata SEO: title, description, Open Graph

**Verificación final:** `npm run build && npx tsc --noEmit` sin errores. Revisar en dev server.

---

## Reglas para Claude Code

- Ejecutar una fase a la vez. Parar en cada STOP y esperar confirmación.
- Nunca agregar servicios que no están en la lista de 3.
- Todo el copy en español.
- Tono: profesional, accesible, orientado a PYMES, directo.
- Después de cada cambio significativo: verificar con build + typecheck.
- Si algo no es claro: preguntar antes de asumir.
- Mantener componentes simples. No sobre-abstraer.
