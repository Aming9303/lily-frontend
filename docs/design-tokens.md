# Design tokens

Lily's shared design values live in `src/app/globals.css`. Components should use these CSS variables instead of copying color, shadow, or font values so a future Figma update can be applied in one place.

## Color tokens

| CSS variable | Value | Purpose |
| --- | --- | --- |
| `--color-surface` | `#f7f7f5` | Page background and the default application canvas |
| `--color-panel` | `#ffffff` | Primary panels and raised surfaces |
| `--color-panel-muted` | `#f1f3f5` | Secondary panels, route items, and inset content |
| `--color-ink` | `#111827` | Primary text and high-emphasis controls |
| `--color-muted` | `#4b5563` | Supporting copy and secondary labels |
| `--color-line` | `#d1d5db` | Borders, dividers, and low-emphasis outlines |
| `--color-accent` | `#0f766e` | Interactive emphasis, section labels, and hover borders |

## Figma mapping

Use these semantic Figma color style names when translating approved designs. If the Figma file uses a different display name, match by semantic role and value rather than introducing a duplicate CSS variable.

| Figma semantic style | CSS variable | Current value |
| --- | --- | --- |
| `Surface / Default` | `--color-surface` | `#f7f7f5` |
| `Surface / Panel` | `--color-panel` | `#ffffff` |
| `Surface / Muted` | `--color-panel-muted` | `#f1f3f5` |
| `Text / Primary` | `--color-ink` | `#111827` |
| `Text / Muted` | `--color-muted` | `#4b5563` |
| `Border / Default` | `--color-line` | `#d1d5db` |
| `Accent / Primary` | `--color-accent` | `#0f766e` |

## Shadow token

| CSS variable | Value | Purpose |
| --- | --- | --- |
| `--shadow-soft` | `0 16px 40px rgba(17, 24, 39, 0.06)` | Subtle elevation for `.surface` panels |

The shadow's RGB channels correspond to `--color-ink` (`#111827`) at six percent opacity. Keep the shadow restrained so borders remain the primary surface boundary.

## Typography tokens

The root layout loads fonts with `next/font` and injects the following variables:

| CSS variable | Typeface | Purpose |
| --- | --- | --- |
| `--font-space-grotesk` | Space Grotesk | Default interface and editorial text |
| `--font-ibm-plex-mono` | IBM Plex Mono | Paths, code-like labels, and `.eyebrow` text |

`@theme inline` exposes the application tokens to Tailwind:

| Tailwind theme variable | Source token |
| --- | --- |
| `--color-background` | `--color-surface` |
| `--color-foreground` | `--color-ink` |
| `--font-sans` | `--font-space-grotesk` |
| `--font-mono` | `--font-ibm-plex-mono` |

## Usage

Use token-backed utilities in component markup:

```tsx
<section className="border border-[var(--color-line)] bg-[var(--color-panel)] text-[var(--color-ink)]">
  <p className="text-[var(--color-muted)]">Supporting copy</p>
</section>
```

Before adding or changing a token, compare it with the approved Figma styles, update the tables above, and check existing components for places that should adopt the shared value.
