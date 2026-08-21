# Design · Pixel Town Resident Template

A locked design system for the resident template. The public site should feel like a
small, useful place in Pixel Town rather than a generic portfolio theme.

## Genre

Playful, with restrained 16-bit interface details and highly readable long-form text.

## Macrostructure family

- Marketing/home: Split Studio — resident plot card beside identity and recent writing.
- Content: Long Document — a quiet reading column with pixel utility details.
- App pages: not applicable; this repository ships a static personal site.

## Theme

- Paper: pale sky `oklch(96% 0.024 220)`
- Raised paper: notice-board ivory `oklch(98% 0.018 88)`
- Ink: deep town navy `oklch(25% 0.055 250)`
- Muted ink: blue slate `oklch(47% 0.035 240)`
- Accent: construction coral `oklch(62% 0.20 34)`
- Terrain: quiet grass `oklch(62% 0.09 150)`

Coral identifies actions and live status. Terrain green is decorative only and never
competes with the action colour.

## Typography

- Main headline: Noto Sans SC, weight 900, with a restrained two-step pixel shadow.
- Pixel data and controls: DotGothic16, weight 400.
- Body: Noto Sans SC, weights 400–900.
- Utility fallback: ui-monospace and the platform monospace stack.
- Long-form prose stays on the body face; the pixel face is never used for paragraphs.

## Spacing and shape

- All layout rhythm follows a 4 px base grid.
- Cards have square corners, a 2 px hard border and a one-direction pixel shadow.
- Content uses one containment layer; cards are not nested for decoration.

## Motion and interaction

- Hover feedback is colour plus a one-pixel lift.
- Active feedback is a one-pixel press.
- Focus rings appear immediately.
- Reduced motion removes spatial movement and smooth scrolling.

## What pages must share

- The compact town-status header, mobile menu and inline footer.
- Pale sky paper, navy ink, coral action colour and hard pixel rules.
- DotGothic16 display labels with Noto Sans SC body copy.
- Direct, descriptive navigation and visible keyboard focus.

## Per-page allowances

- The homepage may use the plot card and low-contrast CSS townscape.
- Article pages use typography and rules only; no decorative skyline behind prose.
- The beginner guide uses the Long Document family with semantic pixel diagrams,
  ordered steps and one containment layer. Diagrams explain relationships without
  imitating browser, phone or editor chrome.
- No page may add gradients, rounded pills, glass effects or generic feature-card grids.

## Exports

The canonical browser export is [`tokens.css`](./tokens.css). Equivalent mappings:

### Tailwind v4 `@theme`

```css
@theme {
  --color-paper: oklch(96% 0.024 220);
  --color-paper-raised: oklch(98% 0.018 88);
  --color-ink: oklch(25% 0.055 250);
  --color-muted: oklch(47% 0.035 240);
  --color-accent: oklch(62% 0.20 34);
  --font-display: "Noto Sans SC", sans-serif;
  --font-body: "Noto Sans SC", sans-serif;
  --font-utility: "DotGothic16", monospace;
  --spacing-md: 1rem;
  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
}
```

### DTCG `tokens.json`

```json
{
  "color": {
    "paper": { "$value": "oklch(96% 0.024 220)", "$type": "color" },
    "ink": { "$value": "oklch(25% 0.055 250)", "$type": "color" },
    "accent": { "$value": "oklch(62% 0.20 34)", "$type": "color" }
  },
  "font": {
    "display": { "$value": "Noto Sans SC", "$type": "fontFamily" },
    "body": { "$value": "Noto Sans SC", "$type": "fontFamily" },
    "utility": { "$value": "DotGothic16", "$type": "fontFamily" }
  },
  "space": { "md": { "$value": "1rem", "$type": "dimension" } }
}
```

### shadcn/ui CSS variables

```css
:root {
  --background: 96% 0.024 220;
  --foreground: 25% 0.055 250;
  --primary: 62% 0.20 34;
  --primary-foreground: 98% 0.018 88;
  --muted: 91% 0.025 225;
  --muted-foreground: 47% 0.035 240;
  --border: 72% 0.04 230;
  --ring: 48% 0.19 34;
  --radius: 0px;
}
```
