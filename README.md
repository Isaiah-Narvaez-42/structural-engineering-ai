# Structural Futures — Edition 02

An interactive research dashboard about AI across the complete structural-engineering workflow. The evidence snapshot is **30 September 2026**; the dashboard was redesigned **1 October 2026**.

[Open the dashboard](https://isaiah-narvaez-42.github.io/structural-engineering-ai/)

## Explore

- **Overview:** concise synthesis, horizon controls, four distinguishable scenario paths and observed evidence with boundaries.
- **Task atlas + BIM:** 59 tasks in 14 clusters; a clickable current-evidence/future-scenario heatmap with calculation and source details.
- **My workload:** seven illustrative role/workload profiles, editable weekly hours, technology and review assumptions, demand sensitivity, local persistence, shareable URLs, JSON import/export and a print-ready report with the full source register.
- **Future scenarios:** 2026, 2031, 2036, 2046 and 2056; constrained adoption, managed transformation, accelerated substitution and an integration-setback stress case.
- **Evidence room:** scoped findings, source panels and a blank CSV measurement template for comparing full workflows.
- **Career playbook:** practical preparation and a proposed 90-day measurement plan.
- **Methods / References:** complete inputs, formulas, limitations and 24 source entries.

## Forecast boundaries

A01 v2 is a conditional accounting model, not a fitted prediction. Baseline weights, role profiles, future task potentials, scenario factors and sensitivity bounds are author assumptions. Citations support context and mechanisms, not the exact future percentages.

The headline sensitivity envelope combines potential ×0.8 / ×1.2 with +3 / −3 percentage points of additional review. It is **not a confidence interval**. Negative savings are supported. The setback case deliberately allows a temporary decline in realized savings. Research access dates remain unchanged: this redesign does not claim a fresh literature review.

The original written synthesis remains in [RESEARCH.md](RESEARCH.md), preceded by an Edition 02 method addendum. The app and `data/research.json` define the current model.

## Architecture

Plain **HTML, CSS and JavaScript**. No package install, third-party chart CDN, remote fonts, server, login or framework build is required. A finite research calculator benefits from easy inspection and static GitHub Pages deployment; a framework migration is unnecessary here.

`data/research.json` is canonical. `data/research.js` mirrors it for browser loading. `model.js` provides pure calculations, snapshot validation and exact workload allocation. `app.js` handles the views and interactions.

Local saves remain in browser storage. Shared links include the selected hours and assumptions. Import accepts the supported v2 numeric schema and rejects invalid or oversized input. No analytics or outbound data collection is included.

## Run and validate

```sh
python3 -m http.server 8000
node --test tests/*.test.cjs
```

Open `http://localhost:8000`. The responsive review harness is `tests/responsive.html` locally and `_qa/` in the deployed artifact; it is unlinked from the dashboard and marked noindex. It tests constrained viewport layouts, not a physical mobile browser.

The GitHub Actions workflow tests and publishes each push to `main`. Pages uses GitHub Actions. Official hosting reference: [GitHub Pages creation guide](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site), S23.

## Update research

Add a stable source ID, original URL, finding, scope, limitation, document location and actual access date to the JSON. Link evidence at point of use. Clearly label author inferences. Update the written synthesis and regenerate the mirror:

```sh
python3 - <<'PY'
import json
from pathlib import Path
p = Path('data')
d = json.loads((p / 'research.json').read_text())
(p / 'research.js').write_text('window.RESEARCH = ' + json.dumps(d, ensure_ascii=False) + ';\n')
PY
```

Bump asset query versions in `index.html` after changes and rerun the tests. See [VALIDATION.md](VALIDATION.md) and [CHANGELOG.md](CHANGELOG.md).
