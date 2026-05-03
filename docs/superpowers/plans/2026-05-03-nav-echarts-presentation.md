# Mastering NAV Charts Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a professional Reveal.js slide deck for a frontend team presentation on NAV charts with ECharts, featuring a high-contrast dark theme and structured technical narrative.

**Architecture:** A structured HTML/CSS/JS project using Reveal.js. The logic is separated into a custom theme and a main entry point. Code blocks and slide layouts are optimized for high-density technical content.

**Tech Stack:** Reveal.js, Vanilla CSS, HTML5.

---

### Task 1: Project Scaffolding

**Files:**
- Create: `index.html`
- Create: `css/theme.css`
- Create: `js/main.js`

- [ ] **Step 1: Create the basic project structure**

Run: `mkdir -p css js assets`

- [ ] **Step 2: Create index.html with Reveal.js boilerplate**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>Mastering NAV Charts with Apache ECharts</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reveal.js@4.5.0/dist/reset.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reveal.js@4.5.0/dist/reveal.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reveal.js@4.5.0/plugin/highlight/monokai.css">
    <link rel="stylesheet" href="css/theme.css">
</head>
<body>
    <div class="reveal">
        <div class="slides">
            <!-- Slides will be added here -->
        </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/reveal.js@4.5.0/dist/reveal.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/reveal.js@4.5.0/plugin/highlight/highlight.js"></script>
    <script src="js/main.js"></script>
</body>
</html>
```

- [ ] **Step 3: Initialize js/main.js**

```javascript
Reveal.initialize({
    hash: true,
    width: 1280,
    height: 720,
    margin: 0.1,
    minScale: 0.2,
    maxScale: 2.0,
    plugins: [ RevealHighlight ]
});
```

- [ ] **Step 4: Commit scaffolding**

```bash
git add index.html js/main.js
git commit -m "chore: scaffold reveal.js project"
```

---

### Task 2: Custom High-Contrast Dark Theme

**Files:**
- Modify: `css/theme.css`

- [ ] **Step 1: Implement the base styles and color palette**

```css
:root {
    --bg-color: #0a192f;
    --text-color: #e6f1ff;
    --accent-color: #64ffda;
    --secondary-bg: #112240;
    --code-bg: #172a45;
    --heading-color: #ccd6f6;
}

.reveal {
    background-color: var(--bg-color);
    color: var(--text-color);
    font-family: 'Inter', system-ui, -apple-system, sans-serif;
}

.reveal h1, .reveal h2, .reveal h3 {
    color: var(--heading-color);
    text-transform: none;
    font-weight: 700;
}

.reveal h1 { color: var(--accent-color); }

.reveal .slides section {
    text-align: left;
    padding: 40px;
}

.reveal pre {
    background: var(--code-bg);
    border-radius: 8px;
    box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);
    width: 100%;
}

.reveal code {
    font-family: 'Fira Code', 'Source Code Pro', monospace;
    font-size: 0.85em;
    line-height: 1.4;
}

.slide-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    align-items: start;
}

.chart-placeholder {
    background: var(--secondary-bg);
    border: 2px dashed var(--accent-color);
    border-radius: 12px;
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--accent-color);
    font-weight: bold;
    margin-top: 20px;
}
```

- [ ] **Step 2: Commit theme changes**

```bash
git add css/theme.css
git commit -m "feat: implement high-contrast dark theme"
```

---

### Task 3: Introduction and Problem Statement Slides

**Files:**
- Modify: `index.html`

- [ ] **Step 1: Add Title Slide and Problem Statement**

```html
<!-- Inside <div class="slides"> -->
<section data-background-color="#0a192f">
    <h1 style="font-size: 2.5em;">Mastering NAV Charts</h1>
    <h3 style="color: #8892b0;">with Apache ECharts</h3>
    <p style="margin-top: 50px; font-size: 0.8em; color: #64ffda;">Frontend Team Presentation | May 2026</p>
</section>

<section>
    <h2>The Challenge: NAV Data</h2>
    <div class="slide-grid">
        <div>
            <ul>
                <li class="fragment">Discontinuity (Weekends/Holidays)</li>
                <li class="fragment">Fund Pricing Gaps</li>
                <li class="fragment">Irregular Sampling intervals</li>
                <li class="fragment">Precision requirements (0.0001)</li>
            </ul>
        </div>
        <div class="fragment">
            <p style="color: #8892b0; font-style: italic;">"Standard 'time' axes often create misleading visual gaps or handle missing data points poorly in financial contexts."</p>
        </div>
    </div>
</section>
```

- [ ] **Step 2: Commit slides**

```bash
git add index.html
git commit -m "feat: add intro and problem slides"
```

---

### Task 4: Evolution Phase 1 & 2 (Time & Category)

**Files:**
- Modify: `index.html`

- [ ] **Step 1: Add Evolution 1 (type: 'time')**

```html
<section>
    <h3>Evolution 1: <code>type: 'time'</code></h3>
    <div class="slide-grid">
        <pre><code class="javascript" data-trim>
xAxis: {
  type: 'time',
  splitLine: { show: false }
}
        </code></pre>
        <div style="font-size: 0.7em;">
            <p><strong style="color: #ff4d4d;">The Issue:</strong></p>
            <ul>
                <li>Visual gaps on non-trading days.</li>
                <li>Inconsistent density.</li>
                <li>Axis labels can be unpredictable.</li>
            </ul>
        </div>
    </div>
    <div class="chart-placeholder">[DEMO: TIME AXES ISSUES]</div>
</section>
```

- [ ] **Step 2: Add Evolution 2 (type: 'category')**

```html
<section>
    <h3>Evolution 2: <code>type: 'category'</code></h3>
    <div class="slide-grid">
        <pre><code class="javascript" data-trim>
xAxis: {
  type: 'category',
  data: dates // ['2024-01-01', ...]
}
        </code></pre>
        <div style="font-size: 0.7em;">
            <p><strong style="color: #ffaa00;">The Trade-off:</strong></p>
            <ul>
                <li>Eliminates visual gaps (continuous line).</li>
                <li><strong style="color: #ff4d4d;">Critical Fail:</strong> Distorts time scale (Jan 1st and Jan 2nd have same distance as Dec 20th and Jan 2nd).</li>
            </ul>
        </div>
    </div>
    <div class="chart-placeholder">[DEMO: CATEGORY AXES DISTORTION]</div>
</section>
```

- [ ] **Step 3: Commit evolution slides**

```bash
git add index.html
git commit -m "feat: add time and category evolution slides"
```

---

### Task 5: Evolution Phase 3 (The 'Value' Solution)

**Files:**
- Modify: `index.html`

- [ ] **Step 1: Add Evolution 3 (type: 'value')**

```html
<section>
    <h3>Evolution 3: <code>type: 'value'</code></h3>
    <p>The Ultimate Solution for Fund Charts</p>
    <div class="slide-grid">
        <pre><code class="javascript" data-trim>
xAxis: {
  type: 'value',
  min: startTime,
  max: endTime,
  interval: manualInterval
}
        </code></pre>
        <div style="font-size: 0.7em;">
            <ul>
                <li>Precise spatial representation.</li>
                <li>Handles gaps without visual distortion.</li>
                <li>Requires <strong>Manual Tick Calculation</strong> for readability.</li>
            </ul>
        </div>
    </div>
    <div class="chart-placeholder">[DEMO: THE PERFECT NAV CHART]</div>
</section>
```

- [ ] **Step 2: Add Manual Ticks Logic Slide**

```html
<section>
    <h3>Deep Dive: Manual Ticks</h3>
    <pre><code class="javascript" data-trim data-line-numbers="2-10|12-18">
// Logic for Calculating Readability
function getTicks(min, max, count = 5) {
  const range = max - min;
  const rawStep = range / (count - 1);
  const mag = Math.pow(10, Math.floor(Math.log10(rawStep)));
  const res = rawStep / mag;
  
  let step;
  if (res < 1.5) step = 1;
  else if (res < 3) step = 2;
  else if (res < 7) step = 5;
  else step = 10;
  
  step *= mag;
  // Generate array of values...
}
    </code></pre>
</section>
```

- [ ] **Step 3: Commit value solution slides**

```bash
git add index.html
git commit -m "feat: add value solution and logic slides"
```

---

### Task 6: Performance and UX Polishing

**Files:**
- Modify: `index.html`

- [ ] **Step 1: Add Performance and UI Enhancement slides**

```html
<section>
    <h3>Performance: LTTB Sampling</h3>
    <p style="font-size: 0.8em;">Handling 10k+ points without UI lag.</p>
    <pre><code class="javascript" data-trim>
series: [{
  type: 'line',
  sampling: 'lttb', // Largest-Triangle-Three-Buckets
  data: heavyData
}]
    </code></pre>
</section>

<section>
    <h3>UI/UX: VisualMap & MarkLine</h3>
    <div class="slide-grid">
        <pre><code class="javascript" data-trim>
visualMap: {
  pieces: [
    { gt: 0, color: '#00ff00' },
    { lte: 0, color: '#ff0000' }
  ]
}
        </code></pre>
        <pre><code class="javascript" data-trim>
markLine: {
  data: [{ type: 'average' }],
  lineStyle: { color: '#888' }
}
        </code></pre>
    </div>
    <div class="chart-placeholder">[DEMO: VISUAL ENHANCEMENTS]</div>
</section>
```

- [ ] **Step 2: Add Final Checklist and Q&A**

```html
<section>
    <h2>Implementation Checklist</h2>
    <ul style="font-size: 0.8em;">
        <li>Use <code>type: 'value'</code> for X-axis.</li>
        <li>Implement LTTB sampling for large datasets.</li>
        <li>Calculate ticks manually for clean timestamps.</li>
        <li>Leverage <code>visualMap</code> for performance indicators.</li>
    </ul>
</section>

<section data-background-color="#64ffda">
    <h1 style="color: #0a192f;">Q & A</h1>
    <p style="color: #0a192f;">Thank you!</p>
</section>
```

- [ ] **Step 3: Final commit**

```bash
git add index.html
git commit -m "feat: add performance, ux, and conclusion slides"
```
