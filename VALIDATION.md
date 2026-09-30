# Validation and deployment status

Checked 30 September 2026.

- Seven automated tests pass: data mirror, task taxonomy, source IDs, baseline behavior, independently recomputed scenario sums, custom weight normalization, labor-demand identities and scenario ordering.
- All eight dashboard views execute under the JavaScript template harness and were opened in the live desktop cloud browser.
- Generated markup checks pass: every figure has a source/assumption caption, every table has a caption with references, and all 448 source links in generated views resolve to known reference IDs. Reference entries link to original sources.
- JavaScript syntax checks pass; GitHub Pages workflow YAML parses.
- The public GitHub repository was created, all source files uploaded, and Pages configured to use GitHub Actions. The first deployment completed successfully with its seven model tests passing.
- The live page was opened at https://isaiah-narvaez-42.github.io/structural-engineering-ai/ . Desktop visual inspection showed a readable layout with no page-level horizontal overflow in the checked overview, timeline, evidence and reference views.
- Live browser interaction checks passed: all eight navigation sections, BIM category filtering, task search and expansion, scenario selection, horizon changes, workload presets, native keyboard slider and task-weight changes, reset, reference search, deep citation navigation, and light/dark theme switching.
- Scenario checks matched the model: central 2056 saving 59.1%, faster 2056 saving 85.9%, central 2036 default saving 42.1%. A native task-weight increment updated normalized shares and outputs.
- JSON export produced a valid downloaded file with the selected scenario, horizon, growth, new-work assumptions and all 14 task weights. The cloud browser download-event wait timed out, but the actual synchronized file was present and parsed successfully.
- The suggested search term Revit initially had no task match; the BIM current-use description was amended to include it, with the existing official product/employer citations retained.

Limits: no mobile-device or cross-browser test was performed. Source-link integrity checks confirm IDs and URLs in the dataset, not perpetual external website availability. The GitHub Actions runner emitted a non-blocking Node-action runtime deprecation warning; deployment succeeded.
