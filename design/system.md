# Design system — Portafolio Hilario

Synced from `src/index.css` (Tailwind v4 `@theme`) and usage in `src/*.jsx`.

## Colors (source: `src/index.css`)

| Token | Value | Usage |
|---|---|---|
| `--color-abyss` | `#0b0817` | Page background |
| `--color-panel` | `#151029` | Cards, surfaces (used at 60–70% opacity) |
| `--color-edge` | `#2a2150` | Borders, dividers |
| `--color-mist` | `#eeeafb` | Primary text |
| `--color-dusk` | `#a79fc9` | Secondary / body text |
| `--color-lilac` | `#a78bfa` | Links, outlined text, accents |
| `--color-iris` | `#7c5cf6` | Selection, glows, gradients |
| `--color-ember` | `#ffb454` | Primary CTA, highlights, "~/" prompt |

## Typography (source: `src/index.css`)

| Token | Stack | Usage |
|---|---|---|
| `--font-display` | "Syne", ui-sans-serif, sans-serif | Headings, name |
| `--font-body` | "Instrument Sans", ui-sans-serif, system-ui, sans-serif | Body |
| `--font-mono` | "JetBrains Mono", ui-monospace, monospace | Eyebrows, labels, links |

Artboards cannot load remote fonts, so they render the fallback stacks (`ui-sans-serif`, `system-ui`, `ui-monospace`).

## Spacing, radius, shadows (source: Tailwind classes in `src/*.jsx`)

- Section rhythm: `py-24`; content width `max-w-6xl`; card padding `p-6`.
- Radius: cards `rounded-3xl` (24px), panels `rounded-2xl` (16px), pills `rounded-full`.
- Shadows: glow on hover, iris (`shadow-iris/…`) for cards, ember for CTA.

## Components (source: `src/*.jsx`)

- **Eyebrow** (`motion.jsx`): mono, lowercase label, e.g. `sobre-mi`.
- **Primary button**: ember fill, abyss text, rounded-full.
- **Secondary button**: edge border, mist text, rounded-full.
- **Project card** (`Proyectos.jsx`): panel bg, edge border, image on top, title + desc + "Ver código →" in mono lilac.
- **Badge "destacado"**: ember/15 bg, ember mono text, rounded-full.
- **Background** (`Background.jsx`): `.bg-grid` blueprint grid with iris and ember blurred orbs.
- **Outlined text** (`.text-outline`): transparent fill, 2px lilac stroke.
