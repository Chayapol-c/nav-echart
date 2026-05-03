# Design Document: Mastering NAV Charts with Apache ECharts Presentation

## 1. Overview
A professional, high-density developer slide deck created with Reveal.js. The presentation is designed for a frontend team, focusing on the technical evolution of handling Net Asset Value (NAV) data in ECharts.

## 2. Technical Stack
- **Framework:** Reveal.js (latest)
- **Styling:** Custom Vanilla CSS (High-contrast Dark Theme)
- **Resolution:** Fixed 1280x720px containers
- **Theme Palette:**
    - Background: Deep Navy (#0a192f)
    - Accents: Sky Blue (#64ffda), Slate Blue (#233554)
    - Text: Off-white (#e6f1ff)
    - Code: Monospace (Fira Code/Source Code Pro)

## 3. Project Structure
```text
/
├── index.html          # Main Reveal.js entry point
├── css/
│   └── theme.css       # Custom slide styling
├── js/
│   └── main.js        # Reveal.js config and logic
└── assets/            # Placeholder for icons/images
```

## 4. Narrative Flow
1. **Title Slide:** Professional branding and tech intro.
2. **The Problem:** Technical nuances of NAV (discontinuity, fund pricing gaps).
3. **Evolution 1 (Time):** `type: 'time'` limitations (visual gaps, weekend spacing issues).
4. **Evolution 2 (Category):** `type: 'category'` trade-offs (linear spacing, tooltip complexity).
5. **Evolution 3 (Value):** `type: 'value'` as the gold standard for financial data.
6. **Code Deep-Dive:** Manual tick calculation logic.
7. **Optimization:** Data sampling for performance.
8. **UI/UX Polishing:** `visualMap` (up/down colors) and `markLine` (thresholds).
9. **Final Checklist:** Developer implementation summary.
10. **Q&A:** Interactive placeholders.

## 5. Slide Layouts
- **High-Density Code:** 80% screen width code blocks with descriptive sidebars.
- **Comparison Views:** Horizontal splits for "Old vs New" logic.
- **Chart Placeholders:** Explicit `div` containers labeled for the user to inject their ECharts code.

## 6. Implementation Plan Highlights
- Scaffolding the directory structure.
- Implementing the custom CSS theme.
- Writing the HTML structure for each slide with placeholder areas for user demonstrations.
- Including commented-out boilerplate for ECharts integration within `js/main.js`.
