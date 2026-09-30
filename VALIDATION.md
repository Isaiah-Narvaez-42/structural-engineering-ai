# Validation and deployment status

Checked 30 September 2026.

- Seven automated tests pass: data mirror, task taxonomy, source IDs, baseline behavior, independently recomputed scenario sums, custom weight normalization, labor-demand identities and scenario ordering.
- All eight dashboard views execute under the JavaScript template harness.
- Generated markup checks pass: every figure has a source/assumption caption, every table has a caption with references, and all 448 source links in generated views resolve to known reference IDs. Reference entries link to original sources.
- JavaScript syntax checks pass; GitHub Pages workflow YAML parses.
- Full browser visual/interaction verification remains pending. Playwright is installed, but its Chromium executable is unavailable and the browser download failed. No claim is made that a desktop/mobile browser test passed.
- GitHub repository creation and GitHub Pages enablement remain pending. The GitHub connector exposes file/commit operations but no repository-creation or Pages-configuration operation. Browser fallback requires user approval.

The local repository and static deployment workflow are prepared. The expected URL documented in README is not a verified live URL.
