# Structural Futures

A research dashboard on structural engineering in the age of AI, with an evidence cut-off of **30 September 2026** and conditional scenarios for **2031, 2036, 2046 and 2056**.

## What's included

- A 59-task atlas in 14 clusters covering engineering, BIM, documentation, coordination, construction administration, field assessment, QA, commercial work and professional responsibility.
- 24 references with claim-level links, dates, scopes, locations and limitations.
- Three transparent task-weighted scenarios; forecast assumptions are labeled A01, not attributed to research institutions.
- An editable scenario lab with task mixes, demand growth, additional assurance labor and JSON export.
- Responsive dark/light layouts, accessible SVG chart descriptions, keyboard navigation and a written research breakdown.

## Architecture decision

**Plain HTML, CSS and JavaScript.** No framework, bundler, package install, remote fonts or chart CDN. This finite research site does not require React state infrastructure, Jekyll content generation or Astro compilation. Static relative paths work on a GitHub Pages project URL and locally. Native MathML displays equations.

`data/research.json` is the canonical dataset; `data/research.js` mirrors it to support opening the site without a server. `model.js` contains the model. Tests verify the mirror, references and forecast math.

## Preview

Open `index.html` directly, or run:

```sh
python3 -m http.server 8000
```

Open `http://localhost:8000`. To validate the model:

```sh
node --test tests/model.test.cjs
```

## Publish on GitHub Pages

Create a repository named `structural-engineering-ai`, push this `main` branch, and set **Settings → Pages → Source → GitHub Actions**. The included workflow validates and publishes the static site. The user must enable Pages at the repository level before a successful first deploy. See [GitHub's official instructions](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site) [S23].

For a personal public repository under `Isaiah-Narvaez-42`, the expected project URL is `https://isaiah-narvaez-42.github.io/structural-engineering-ai/`. This is an expected URL, **not a claim that deployment has happened**.

## Updating the research

1. Add a source with stable ID, URL, evidence type, finding, scope, limitation, locator and access date to the JSON.
2. Add citations wherever a research-derived claim is shown.
3. Distinguish measured results from author inferences and assumptions.
4. Regenerate the JavaScript data mirror from JSON:

```sh
python3 - <<'PY'
import json
from pathlib import Path
p = Path('data')
d = json.loads((p / 'research.json').read_text())
(p / 'research.js').write_text('window.RESEARCH = ' + json.dumps(d, ensure_ascii=False) + ';\n')
PY
```

5. Update the written research and rerun tests. Snapshot date and citations must remain consistent.

## Interpretive limits

The task weights and future percentages are illustrative assumptions, not measured time allocations or statistically calibrated forecasts. The labor-demand index is a sensitivity model, not an employment prediction. Technology capability, actual adoption and legal authority differ. Company benchmarks and research prototypes are clearly labeled.

Third-party papers and product documentation remain the property of their publishers. Only short factual summaries and links are included; the repo does not redistribute the papers. This dashboard contains no user financial, employer-project or private engineering data.
