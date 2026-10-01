# Edition 02 method addendum — 1 October 2026

The dashboard has been redesigned. The research review below remains a **30 September 2026 evidence snapshot**. This addendum introduces author-designed modeling and interface changes, not new empirical findings. The original three-path tables below retain their original inputs and remain reproducible at default settings. The current dashboard additionally includes the setback stress path and user modifiers.

## A01 v2 calculation

For task i, scenario s and future horizon t:

`gross = Σ w_i × min(0.98, p_i,t × c_s,t × P) × min(1, a_s,t × A)`

`net = gross − clip(h_s,t + H, 0, 0.50)`

P is the user potential multiplier; A is the user realization multiplier; H adjusts the added-review burden. Defaults are P=1, A=1, H=0. Existing review and automation are already in the baseline. All additional savings are zero in 2026. Negative net savings mean added labor. Task hours are normalized to determine w. Baseline shares and alternative role profiles are author assumptions, not measured weeks. Context: [S02], [S03], [S04], [S13], [S15] in the source register below.

The displayed envelope runs the selected model with P×0.8 and H+0.03 for the lower endpoint, and P×1.2 and H−0.03 for the upper endpoint. The realization input stays fixed. These are chosen stress bounds, **not confidence intervals or probabilities**. They do not measure growing long-horizon uncertainty. One-at-a-time sensitivities are also shown. Context: [S13], [S15], [S17].

## Integration-setback stress scenario

This invented conditional scenario represents adoption retreat and increased integration/assurance work, followed by partial recovery. It does not claim an actual incident, assign a probability or extrapolate a reported failure. Context: [S05], [S14], [S15], [S17].

| Year | Capability c | Realization a | Added review h |
|---|---:|---:|---:|
| 2031 | 0.75 | 0.55 | 7% |
| 2036 | 0.75 | 0.40 | 10% |
| 2046 | 0.80 | 0.55 | 9% |
| 2056 | 0.85 | 0.65 | 8% |

Table: author inputs under A01 v2; all modifiers default to neutral. Research citations provide context, not these numerical estimates.

## Role profiles and reproducibility

Profiles include balanced team, junior engineer, project engineer, technical specialist, BIM professional, principal/team lead and existing-building/field work. They are explicitly illustrative allocations informed by the role taxonomy [S02–S04]. Users should replace them with measured hours. The exact weights are in `data/research.json`.

The labor-demand accounting identity remains unchanged: `index = 100 × (1+g)^T × (1−net+n)`. It is not an employment forecast. g and n are editable assumptions; n is zero at the 2026 baseline. Context: [S01], [S19], [S24].

A downloadable blank measurement CSV proposes recording comparable scope, tool version, setup, production, review, correction, downstream rework and acceptance. This is an author-proposed protocol informed by [S13], [S15], [S17], not a collected dataset.

---

# Original research synthesis — 30 September 2026

# Structural engineering in the age of AI

**Research cut-off: 30 September 2026. Horizons: 2031, 2036, 2046 and 2056.**

## Prediction and evidence boundary

My central prediction is substantial compression of routine digital production, followed by a shift toward setting design intent, verifying automated output, managing uncertainty and resolving construction realities. This can reduce labor per project without necessarily reducing total employment. Current policy retains human responsibility, but neither policy nor professional status guarantees the size of future engineering teams. This is an author inference, not a published forecast. [S03](https://teterae.isolvedhire.com/jobs/job_description_files.php?id=1560867&site_id=610) [S13](https://www.istructe.org/resources/technology-digital/artificial-intelligence-guidance/) [S15](https://ncees.org/wp-content/uploads/2025/10/Policy-manual_August-2025_web.pdf) [S20](https://www.arup.com/news/arup-partners-yjk-to-launch-ai-designer-in-hong-kong-to-advance-ai-enabled-structural-engineering/) [S24](https://www.ilo.org/publications/generative-ai-and-jobs-refined-global-index-occupational-exposure)

This selected online review found no representative empirical measurement of AI productivity across the entire structural-engineering workload. The future percentages below are therefore explicit author assumptions, not research-derived job-loss rates, probabilities or confidence intervals. A01 records the complete calculation method.

## Actual data and what it does—and does not—measure

| Finding | Evidence / scope | Interpretation limit | Source |
|---|---|---|---|
| 380,600 civil engineering jobs in 2025; 6% projected employment growth during 2025–2035; 22,700 average annual openings. | Government statistics; United States; civil engineers, including structural and other specialties. | Not a structural-only series or an AI employment forecast. Openings include replacements, not just new positions. | [S01](https://www.bls.gov/ooh/architecture-and-engineering/civil-engineers.htm) |
| Over 2,200 responses: about 45% no implementation, 34% pilots, under 12% regular specific-process use, 1.5% multi-process use and under 1% fully embedded. Skills (46%), integration (37%) and data (30%) lead barriers. | Industry survey; Global construction professionals; Q1 2025; 48% of responses from UK. | Self-reported, broader than structural design firms; not directly comparable with RIBA practice adoption. Percentages are rounded. | [S05](https://www.rics.org/news-insights/artificial-intelligence-in-construction-report) |
| 74% of surveyed practices use AI in at least some projects. | Industry survey; Architecture practices; adjacent to structural engineering. | Any use is not end-to-end automation, audited productivity or structural-engineering adoption. Sample details not exposed on summary page. | [S06](https://www.riba.org/work/insights-and-resources/ai-report/) |
| Practice AI use rose from 41% in 2024 to 59% in 2025. | Industry survey; Architecture practice annual surveys. | Changing respondents and use cases may affect comparisons. Does not measure hours automated. | [S07](https://www.riba.org/work/insights-and-resources/ai-report/riba-ai-report-2025/) |
| A tailored Custom GPT scored 82–86% on statics exam variants versus a 75% student average; errors included tension/compression identification. | Peer-reviewed study; Foundational statics; GPT-4o and o1-preview. | Exam score is not design approval, current-frontier capability or whole-role accuracy. Public abstract read; full study data not independently audited. | [S08](https://doi.org/10.1002/cae.70210) |
| Table 2 structural-design average pass rates include GPT-4o 25.64%, o3-high 41.03% and Gemini-2.5-Pro 50.00%. | Research preprint; Nine engineering domains; model trials averaged over three runs; structural sizing subset. | A bounded benchmark with 2025 models, not actual building commissions or a 2026 frontier evaluation. Pass rates and partial-credit scores differ. | [S09](https://arxiv.org/html/2509.16204v2) |
| Authors report 32% success for their BIM agent versus 0% for baselines. | Workshop research preprint; Architectural building modeling through GUI operations. | Specific experimental task set; not structural detailing accuracy, safe autonomy or a whole-model production guarantee. | [S10](https://arxiv.org/abs/2506.07217v2) |
| Domain tuning improved average G-Eval score by 21.0% over the base model. | Research preprint; BIM-derived textual datasets and domain-specific evaluation. | G-Eval is an evaluation score, not a 21% reduction in BIM labor or independent safety verification. | [S11](https://arxiv.org/abs/2602.20812) |
| Review of over 900 CROSS reports: 43% involved digital processes, including 22% calculation, 13% BIM/modeling and 8% monitoring issues. | Safety report synthesis; Selected confidential structural safety reports. | Reporting sample, not all projects. These are not AI error rates or the probability of a structural failure. | [S14](https://www.istructe.org/resources/blog/digital-reflections-calum-lockhart/) |
| Published version: 5,172 customer-support agents; 15% more issues resolved per hour with AI assistance. | Peer-reviewed field study; Staggered deployment in one customer-support setting. | Different domain; cannot import the percentage into engineering. Earlier working-paper versions report different figures; this uses the published version. | [S16](https://doi.org/10.1093/qje/qjae044) |
| 16 developers, 246 tasks: AI access increased completion time by 19%. | Randomized field experiment; Experienced maintainers working in familiar mature repositories; Feb–Jun 2025 tools. | Small specialized software sample, not structural engineering or a forecast of future systems. | [S17](https://metr.org/Early_2025_AI_Experienced_OS_Devs_Study-paper.pdf) |
| Reports about 82% less design iteration time with the same model, loads and code and engineer review retained; RC/steel and piled-foundation optimization. | Company controlled benchmark; Narrow controlled workflow; company-reported. | Not independent or whole-job savings. Given endpoints 2.5→0.5 days imply 80%, rather than reported 82%; 64→6 over-limit components imply 90.6%, rather than reported 88%. No reconciliation offered. | [S20](https://www.arup.com/news/arup-partners-yjk-to-launch-ai-designer-in-hong-kong-to-advance-ai-enabled-structural-engineering/) |

**Table 1 source note:** Each row links its own source; the measures cannot be pooled into an overall capability percentage. In particular, an exam score, a benchmark pass rate, an adoption rate and a labor saving have different denominators.

**Version and arithmetic checks.** The published QJE study uses 5,172 agents and 15% productivity gain; older working-paper versions differ. Arup reports ~82% less iteration time, but its 2.5-to-0.5-day endpoints imply 80%; its reported ~88% reduction in over-limit components differs from 64-to-6 endpoints, which imply 90.625%. No unsupported reconciliation is made. [S16](https://doi.org/10.1093/qje/qjae044) [S20](https://www.arup.com/news/arup-partners-yjk-to-launch-ai-designer-in-hong-kong-to-advance-ai-enabled-structural-engineering/)

## How AI is used today

Professional structural guidance identifies assistance with code retrieval, FE model creation, member design, reporting, condition assessment and BIM. These are use cases rather than evidence of universal deployment. Solver calculations, Dynamo, conventional scripting and parametric optimization are not inherently AI; the distinction is whether an AI system learns, generates or orchestrates parts of the workflow. [S13](https://www.istructe.org/resources/technology-digital/artificial-intelligence-guidance/)

Arup describes controlled specialist optimization and new agentic structural/foundation platform commissions. A commission announcement is a development signal, not proof that full autonomous delivery is complete. Official Autodesk material documents selected Revit authoring assistance in the 2027 version; that does not establish availability in earlier Revit releases. [S12](https://help.autodesk.com/cloudhelp/2027/ENU/Revit-Assistant/files/GUID-620ECD98-53F7-47F1-B700-EEE84F15EBF7.html) [S20](https://www.arup.com/news/arup-partners-yjk-to-launch-ai-designer-in-hong-kong-to-advance-ai-enabled-structural-engineering/) [S21](https://www.arup.com/news/bringing-ai-into-the-heart-of-public-building-design-with-archsd-in-hong-kong/)

## The full task cluster

Role synthesis combines O*NET/BLS occupational descriptions, TETER’s employer duties and ACEC role-level guidance. The 59 task examples below are an author-organized taxonomy, not a verbatim list or a measured time-use study. Structural engineers may do these personally, delegate to BIM staff or specialists, or review work provided by others. The allocation is for a building-structures delivery team and varies by project and contract. [S01](https://www.bls.gov/ooh/architecture-and-engineering/civil-engineers.htm) [S02](https://www.onetonline.org/link/details/17-2051.00) [S03](https://teterae.isolvedhire.com/jobs/job_description_files.php?id=1560867&site_id=610) [S04](https://jobopenings.acec.org/career-resources/finding-talent-4/structural-engineer-job-description-template-requirements-135)

| Cluster | Assumed team effort | Current AI direction / use case | Human decision or accountability | Context |
|---|---:|---|---|---|
| Project intake & existing information | 5% | Document extraction, summaries and question drafting; source confirmation remains necessary. | Define actual scope, verify provenance and decide what remains unknown. | A01; [S02](https://www.onetonline.org/link/details/17-2051.00) [S03](https://teterae.isolvedhire.com/jobs/job_description_files.php?id=1560867&site_id=610) [S13](https://www.istructe.org/resources/technology-digital/artificial-intelligence-guidance/) |
| Structural concept & load path | 8% | Constrained optimization can explore alternatives; conventional parametric tools are also used. | Choose framing concept and assess brittle, discontinuous or impractical load paths. | A01; [S03](https://teterae.isolvedhire.com/jobs/job_description_files.php?id=1560867&site_id=610) [S09](https://arxiv.org/html/2509.16204v2) [S20](https://www.arup.com/news/arup-partners-yjk-to-launch-ai-designer-in-hong-kong-to-advance-ai-enabled-structural-engineering/) [S21](https://www.arup.com/news/bringing-ai-into-the-heart-of-public-building-design-with-archsd-in-hong-kong/) |
| Design basis, loads & code interpretation | 7% | Code retrieval and draft checks can assist; edition and applicability need verification. | Resolve ambiguous provisions and verify project-specific demands. | A01; [S02](https://www.onetonline.org/link/details/17-2051.00) [S13](https://www.istructe.org/resources/technology-digital/artificial-intelligence-guidance/) [S15](https://ncees.org/wp-content/uploads/2025/10/Policy-manual_August-2025_web.pdf) [S22](https://arxiv.org/abs/2506.20551) |
| Analysis modeling & result interpretation | 12% | AI can help write scripts and set up models; deterministic solvers perform the analysis. | Validate boundary conditions, mechanisms and physical reasonableness. | A01; [S09](https://arxiv.org/html/2509.16204v2) [S13](https://www.istructe.org/resources/technology-digital/artificial-intelligence-guidance/) [S20](https://www.arup.com/news/arup-partners-yjk-to-launch-ai-designer-in-hong-kong-to-advance-ai-enabled-structural-engineering/) |
| Members, connections & foundations | 10% | Bounded design routines and optimization assist sizing; full design responsibility remains with engineers. | Assess applicability, ductility, failure hierarchy and construction feasibility. | A01; [S03](https://teterae.isolvedhire.com/jobs/job_description_files.php?id=1560867&site_id=610) [S08](https://doi.org/10.1002/cae.70210) [S13](https://www.istructe.org/resources/technology-digital/artificial-intelligence-guidance/) [S20](https://www.arup.com/news/arup-partners-yjk-to-launch-ai-designer-in-hong-kong-to-advance-ai-enabled-structural-engineering/) |
| BIM authoring & model management | 14% | Scripts automate repetition; AI assistance and experimental agents can author or modify selected BIM elements. | Approve model intent, analytical idealization and data completeness. | A01; [S03](https://teterae.isolvedhire.com/jobs/job_description_files.php?id=1560867&site_id=610) [S10](https://arxiv.org/abs/2506.07217v2) [S11](https://arxiv.org/abs/2602.20812) [S12](https://help.autodesk.com/cloudhelp/2027/ENU/Revit-Assistant/files/GUID-620ECD98-53F7-47F1-B700-EEE84F15EBF7.html) [S18](https://technical.buildingsmart.org/standards/IFC/) |
| Drawings, detailing & specifications | 8% | AI-assisted view operations and script generation help production; standard-detail reuse predates AI. | Resolve detailing that governs installation, tolerance, continuity and behavior. | A01; [S03](https://teterae.isolvedhire.com/jobs/job_description_files.php?id=1560867&site_id=610) [S12](https://help.autodesk.com/cloudhelp/2027/ENU/Revit-Assistant/files/GUID-620ECD98-53F7-47F1-B700-EEE84F15EBF7.html) [S13](https://www.istructe.org/resources/technology-digital/artificial-intelligence-guidance/) |
| Multidiscipline coordination | 8% | Meeting summaries, issue classification and model checks assist coordination. | Negotiate trade-offs, assign responsibility and secure agreement. | A01; [S03](https://teterae.isolvedhire.com/jobs/job_description_files.php?id=1560867&site_id=610) [S05](https://www.rics.org/news-insights/artificial-intelligence-in-construction-report) [S18](https://technical.buildingsmart.org/standards/IFC/) |
| QA, independent checking & assurance | 7% | AI can flag inconsistencies; repeatable independent calculations remain essential. | Challenge assumptions and recognize correlated errors across tools. | A01; [S03](https://teterae.isolvedhire.com/jobs/job_description_files.php?id=1560867&site_id=610) [S13](https://www.istructe.org/resources/technology-digital/artificial-intelligence-guidance/) [S14](https://www.istructe.org/resources/blog/digital-reflections-calum-lockhart/) [S15](https://ncees.org/wp-content/uploads/2025/10/Policy-manual_August-2025_web.pdf) |
| Construction administration | 6% | Document comparison and response drafting assist; contractual authority stays project-specific. | Judge field consequences and resolve incomplete or conflicting evidence. | A01; [S03](https://teterae.isolvedhire.com/jobs/job_description_files.php?id=1560867&site_id=610) [S13](https://www.istructe.org/resources/technology-digital/artificial-intelligence-guidance/) [S15](https://ncees.org/wp-content/uploads/2025/10/Policy-manual_August-2025_web.pdf) |
| Site observation & existing assessment | 5% | Image/document assistance is a use case; visibility and measurement limit what can be inferred. | Select investigations, access hidden conditions and judge context. | A01; [S02](https://www.onetonline.org/link/details/17-2051.00) [S03](https://teterae.isolvedhire.com/jobs/job_description_files.php?id=1560867&site_id=610) [S13](https://www.istructe.org/resources/technology-digital/artificial-intelligence-guidance/) [S14](https://www.istructe.org/resources/blog/digital-reflections-calum-lockhart/) |
| Project management & commercial work | 4% | Drafting, summaries and forecasting assist administration. | Negotiate, lead relationships and decide acceptable risk. | A01; [S03](https://teterae.isolvedhire.com/jobs/job_description_files.php?id=1560867&site_id=610) [S05](https://www.rics.org/news-insights/artificial-intelligence-in-construction-report) |
| Sustainability, quantities & lifecycle | 3% | Optimization and BIM quantities assist comparison; data quality matters. | Set objectives and validate product, lifecycle and durability assumptions. | A01; [S13](https://www.istructe.org/resources/technology-digital/artificial-intelligence-guidance/) [S18](https://technical.buildingsmart.org/standards/IFC/) [S19](https://infrastructurereportcard.org/making-the-grade/) [S20](https://www.arup.com/news/arup-partners-yjk-to-launch-ai-designer-in-hong-kong-to-advance-ai-enabled-structural-engineering/) |
| Professional responsibility & people | 3% | AI tutors and drafts can support learning and communication. | Own consequential decisions, demonstrate competence and maintain trust. | A01; [S03](https://teterae.isolvedhire.com/jobs/job_description_files.php?id=1560867&site_id=610) [S04](https://jobopenings.acec.org/career-resources/finding-talent-4/structural-engineer-job-description-template-requirements-135) [S13](https://www.istructe.org/resources/technology-digital/artificial-intelligence-guidance/) [S15](https://ncees.org/wp-content/uploads/2025/10/Policy-manual_August-2025_web.pdf) |

**Table 2 source note:** Work categories are synthesized from the row sources; effort shares are A01 assumptions. Do not attribute the percentages to the cited organizations. Existing routine automation is already included in the 2026 baseline.

### Project intake & existing information

- Scope and deliverable definition
- Drawing, survey and geotechnical intake
- Existing-record and as-built reconciliation
- Identify missing inputs and exclusions

Source context: [S02](https://www.onetonline.org/link/details/17-2051.00) [S03](https://teterae.isolvedhire.com/jobs/job_description_files.php?id=1560867&site_id=610) [S13](https://www.istructe.org/resources/technology-digital/artificial-intelligence-guidance/). These are synthesized task examples.

### Structural concept & load path

- Select gravity and lateral systems
- Set grids, spans and structural depth
- Establish diaphragm and foundation load paths
- Balance cost, constructability and robustness

Source context: [S03](https://teterae.isolvedhire.com/jobs/job_description_files.php?id=1560867&site_id=610) [S09](https://arxiv.org/html/2509.16204v2) [S20](https://www.arup.com/news/arup-partners-yjk-to-launch-ai-designer-in-hong-kong-to-advance-ai-enabled-structural-engineering/) [S21](https://www.arup.com/news/bringing-ai-into-the-heart-of-public-building-design-with-archsd-in-hong-kong/). These are synthesized task examples.

### Design basis, loads & code interpretation

- Determine occupancy, risk category and criteria
- Compile dead, live, snow, wind and seismic loads
- Set load combinations and serviceability limits
- Interpret applicable code editions and exceptions

Source context: [S02](https://www.onetonline.org/link/details/17-2051.00) [S13](https://www.istructe.org/resources/technology-digital/artificial-intelligence-guidance/) [S15](https://ncees.org/wp-content/uploads/2025/10/Policy-manual_August-2025_web.pdf) [S22](https://arxiv.org/abs/2506.20551). These are synthesized task examples.

### Analysis modeling & result interpretation

- Idealize supports, releases and stiffness
- Build and synchronize FE models
- Run gravity, lateral and stability cases
- Check equilibrium, sensitivity, dynamics and governing modes

Source context: [S09](https://arxiv.org/html/2509.16204v2) [S13](https://www.istructe.org/resources/technology-digital/artificial-intelligence-guidance/) [S20](https://www.arup.com/news/arup-partners-yjk-to-launch-ai-designer-in-hong-kong-to-advance-ai-enabled-structural-engineering/). These are synthesized task examples.

### Members, connections & foundations

- Size steel, concrete, timber and masonry members
- Design connections, anchorage and collectors
- Design foundations with geotechnical constraints
- Check strength, deflection, vibration and durability

Source context: [S03](https://teterae.isolvedhire.com/jobs/job_description_files.php?id=1560867&site_id=610) [S08](https://doi.org/10.1002/cae.70210) [S13](https://www.istructe.org/resources/technology-digital/artificial-intelligence-guidance/) [S20](https://www.arup.com/news/arup-partners-yjk-to-launch-ai-designer-in-hong-kong-to-advance-ai-enabled-structural-engineering/). These are synthesized task examples.

### BIM authoring & model management

- Set levels, grids, coordinates and linked models
- Author framing, slabs, walls and foundations
- Manage families, parameters, schedules and quantities
- Maintain physical/analytical alignment
- Handle IFC exports, versions and model health
- Control worksharing, phasing and design options

Source context: [S03](https://teterae.isolvedhire.com/jobs/job_description_files.php?id=1560867&site_id=610) [S10](https://arxiv.org/abs/2506.07217v2) [S11](https://arxiv.org/abs/2602.20812) [S12](https://help.autodesk.com/cloudhelp/2027/ENU/Revit-Assistant/files/GUID-620ECD98-53F7-47F1-B700-EEE84F15EBF7.html) [S18](https://technical.buildingsmart.org/standards/IFC/). These are synthesized task examples.

### Drawings, detailing & specifications

- Create plans, sections, views and sheets
- Annotate, dimension, tag and schedule
- Develop reinforcement and connection design details
- Apply office standards and specification clauses
- Issue revisions and coordinated drawing sets

Source context: [S03](https://teterae.isolvedhire.com/jobs/job_description_files.php?id=1560867&site_id=610) [S12](https://help.autodesk.com/cloudhelp/2027/ENU/Revit-Assistant/files/GUID-620ECD98-53F7-47F1-B700-EEE84F15EBF7.html) [S13](https://www.istructe.org/resources/technology-digital/artificial-intelligence-guidance/). These are synthesized task examples.

### Multidiscipline coordination

- Coordinate openings and penetrations with MEP
- Resolve façade and architectural interfaces
- Review clashes, elevations and tolerances
- Track actions and communicate design changes

Source context: [S03](https://teterae.isolvedhire.com/jobs/job_description_files.php?id=1560867&site_id=610) [S05](https://www.rics.org/news-insights/artificial-intelligence-in-construction-report) [S18](https://technical.buildingsmart.org/standards/IFC/). These are synthesized task examples.

### QA, independent checking & assurance

- Review calculations and design assumptions
- Cross-check loads, models and drawings
- Perform independent simplified checks
- Document review decisions and issue controls

Source context: [S03](https://teterae.isolvedhire.com/jobs/job_description_files.php?id=1560867&site_id=610) [S13](https://www.istructe.org/resources/technology-digital/artificial-intelligence-guidance/) [S14](https://www.istructe.org/resources/blog/digital-reflections-calum-lockhart/) [S15](https://ncees.org/wp-content/uploads/2025/10/Policy-manual_August-2025_web.pdf). These are synthesized task examples.

### Construction administration

- Review shop drawings and delegated designs
- Respond to RFIs and substitutions
- Evaluate changes and nonconforming work
- Support sequencing and temporary-works interfaces

Source context: [S03](https://teterae.isolvedhire.com/jobs/job_description_files.php?id=1560867&site_id=610) [S13](https://www.istructe.org/resources/technology-digital/artificial-intelligence-guidance/) [S15](https://ncees.org/wp-content/uploads/2025/10/Policy-manual_August-2025_web.pdf). These are synthesized task examples.

### Site observation & existing assessment

- Observe framing and concealed-condition exposures
- Document defects, tests and deviations
- Assess existing capacity and repair options
- Conduct condition surveys and investigation planning

Source context: [S02](https://www.onetonline.org/link/details/17-2051.00) [S03](https://teterae.isolvedhire.com/jobs/job_description_files.php?id=1560867&site_id=610) [S13](https://www.istructe.org/resources/technology-digital/artificial-intelligence-guidance/) [S14](https://www.istructe.org/resources/blog/digital-reflections-calum-lockhart/). These are synthesized task examples.

### Project management & commercial work

- Plan staffing, fees, schedules and scope
- Track budget, progress and earned value
- Manage client expectations and changes
- Prepare proposals and win work

Source context: [S03](https://teterae.isolvedhire.com/jobs/job_description_files.php?id=1560867&site_id=610) [S05](https://www.rics.org/news-insights/artificial-intelligence-in-construction-report). These are synthesized task examples.

### Sustainability, quantities & lifecycle

- Compare quantities, cost and embodied carbon
- Assess reuse, retrofit and material efficiency
- Support maintenance and lifecycle decisions
- Test alternatives under multiple objectives

Source context: [S13](https://www.istructe.org/resources/technology-digital/artificial-intelligence-guidance/) [S18](https://technical.buildingsmart.org/standards/IFC/) [S19](https://infrastructurereportcard.org/making-the-grade/) [S20](https://www.arup.com/news/arup-partners-yjk-to-launch-ai-designer-in-hong-kong-to-advance-ai-enabled-structural-engineering/). These are synthesized task examples.

### Professional responsibility & people

- Exercise responsible charge and approve issue
- Mentor engineers and develop competence
- Maintain technical knowledge and licensure
- Explain decisions to clients, authorities and public

Source context: [S03](https://teterae.isolvedhire.com/jobs/job_description_files.php?id=1560867&site_id=610) [S04](https://jobopenings.acec.org/career-resources/finding-talent-4/structural-engineer-job-description-template-requirements-135) [S13](https://www.istructe.org/resources/technology-digital/artificial-intelligence-guidance/) [S15](https://ncees.org/wp-content/uploads/2025/10/Policy-manual_August-2025_web.pdf). These are synthesized task examples.

## Timeline beginning today

### 2026 — Today · 30 September

**Assistants, bounded automation, early agents**

AI helps retrieve documents, draft reports and write scripts. Specialist optimization is deployed in bounded settings; broader agents are emerging. FE solving, Dynamo and parameterized design are not inherently AI.

**BIM:** Selected view, tagging and model operations; experimental GUI agents. Structural model meaning still needs deliberate validation.

**People and firms:** No defensible structural-specific AI displacement percentage. BLS civil employment growth is a broad baseline, not a structural forecast.

**Confidence:** Observed evidence; uneven deployment. Observed-source context: [S01](https://www.bls.gov/ooh/architecture-and-engineering/civil-engineers.htm) [S08](https://doi.org/10.1002/cae.70210) [S10](https://arxiv.org/abs/2506.07217v2) [S12](https://help.autodesk.com/cloudhelp/2027/ENU/Revit-Assistant/files/GUID-620ECD98-53F7-47F1-B700-EEE84F15EBF7.html) [S13](https://www.istructe.org/resources/technology-digital/artificial-intelligence-guidance/) [S20](https://www.arup.com/news/arup-partners-yjk-to-launch-ai-designer-in-hong-kong-to-advance-ai-enabled-structural-engineering/)

### 2031 — +5 years

**Connected project copilots**

Likely: context-aware assistants connect approved code libraries, calculation templates, BIM and change logs. Routine load schedules, member iterations and document production compress first.

**BIM:** Agents create/revise framing, views, sheets, schedules and issue registers under model validation.

**People and firms:** Junior production hours and pure drafting roles face pressure. More output per team may offset some losses; firms need deliberate training pathways.

**Confidence:** Moderate directional confidence; low numeric confidence. Author projection; A01. Research context: [S03](https://teterae.isolvedhire.com/jobs/job_description_files.php?id=1560867&site_id=610) [S05](https://www.rics.org/news-insights/artificial-intelligence-in-construction-report) [S10](https://arxiv.org/abs/2506.07217v2) [S12](https://help.autodesk.com/cloudhelp/2027/ENU/Revit-Assistant/files/GUID-620ECD98-53F7-47F1-B700-EEE84F15EBF7.html) [S13](https://www.istructe.org/resources/technology-digital/artificial-intelligence-guidance/) [S20](https://www.arup.com/news/arup-partners-yjk-to-launch-ai-designer-in-hong-kong-to-advance-ai-enabled-structural-engineering/)

### 2036 — +10 years

**Supervised design-to-document workflows**

Possible central case: agents run bounded design packages through deterministic solvers, code checks and document generation, with structured human approvals and exception handling.

**BIM:** Bidirectional geometry/analysis workflows, automated change propagation and machine-readable model QA become common in digitally mature firms.

**People and firms:** Teams may become smaller per project; advanced analysis, rehabilitation, client leadership and assurance take a larger share of human time.

**Confidence:** Low-to-moderate directional confidence. Author projection; A01. Research context: [S09](https://arxiv.org/html/2509.16204v2) [S13](https://www.istructe.org/resources/technology-digital/artificial-intelligence-guidance/) [S15](https://ncees.org/wp-content/uploads/2025/10/Policy-manual_August-2025_web.pdf) [S18](https://technical.buildingsmart.org/standards/IFC/) [S20](https://www.arup.com/news/arup-partners-yjk-to-launch-ai-designer-in-hong-kong-to-advance-ai-enabled-structural-engineering/) [S21](https://www.arup.com/news/bringing-ai-into-the-heart-of-public-building-design-with-archsd-in-hong-kong/)

### 2046 — +20 years

**Automation diverges by project type**

Repeatable new-build packages could be highly automated. Complex retrofits, uncertain soil/conditions, nonlinear behavior and unusual interfaces remain harder. Connected sensing may expand assessment services.

**BIM:** Models may become lifecycle data infrastructure rather than drawing containers, if interoperability and data quality improve.

**People and firms:** A bifurcated market is plausible: inexpensive platform-led standard delivery alongside specialist risk, field and forensic services.

**Confidence:** Low confidence; scenario exploration. Author projection; A01. Research context: [S05](https://www.rics.org/news-insights/artificial-intelligence-in-construction-report) [S13](https://www.istructe.org/resources/technology-digital/artificial-intelligence-guidance/) [S14](https://www.istructe.org/resources/blog/digital-reflections-calum-lockhart/) [S15](https://ncees.org/wp-content/uploads/2025/10/Policy-manual_August-2025_web.pdf) [S18](https://technical.buildingsmart.org/standards/IFC/) [S19](https://infrastructurereportcard.org/making-the-grade/)

### 2056 — +30 years

**Profession persists, or becomes a different profession**

Central scenario: engineers define intent, assess uncertainty and certify evidence produced by automated systems. Faster scenarios permit much deeper role substitution; constrained scenarios retain substantial conventional work.

**BIM:** Autonomous digital delivery and asset updates are plausible but conditional, not an extrapolation of today’s demo success.

**People and firms:** Whether engineer employment grows or contracts depends on service demand, fees, new assurance work, regulation and training—not automation alone. No numerical probability is assigned.

**Confidence:** Very low confidence; laws and institutions may change. Author projection; A01. Research context: [S09](https://arxiv.org/html/2509.16204v2) [S10](https://arxiv.org/abs/2506.07217v2) [S15](https://ncees.org/wp-content/uploads/2025/10/Policy-manual_August-2025_web.pdf) [S18](https://technical.buildingsmart.org/standards/IFC/) [S24](https://www.ilo.org/publications/generative-ai-and-jobs-refined-global-index-occupational-exposure)

## Three projected outcomes

All savings are additional labor hours removed relative to a fixed-scope, fixed-quality 2026 project. They deduct new checking/integration/rework overhead. They are not shares of engineers made redundant.

| Scenario | 2031 (+5) | 2036 (+10) | 2046 (+20) | 2056 (+30) | Source / assumptions |
|---|---:|---:|---:|---:|---|
| Constrained adoption | 11.5% | 21.1% | 31.3% | 37.6% | A01; [S05](https://www.rics.org/news-insights/artificial-intelligence-in-construction-report) [S14](https://www.istructe.org/resources/blog/digital-reflections-calum-lockhart/) [S15](https://ncees.org/wp-content/uploads/2025/10/Policy-manual_August-2025_web.pdf) [S17](https://metr.org/Early_2025_AI_Experienced_OS_Devs_Study-paper.pdf) |
| Managed transformation | 25.8% | 42.1% | 53.8% | 59.1% | A01; [S12](https://help.autodesk.com/cloudhelp/2027/ENU/Revit-Assistant/files/GUID-620ECD98-53F7-47F1-B700-EEE84F15EBF7.html) [S13](https://www.istructe.org/resources/technology-digital/artificial-intelligence-guidance/) [S18](https://technical.buildingsmart.org/standards/IFC/) [S20](https://www.arup.com/news/arup-partners-yjk-to-launch-ai-designer-in-hong-kong-to-advance-ai-enabled-structural-engineering/) [S21](https://www.arup.com/news/bringing-ai-into-the-heart-of-public-building-design-with-archsd-in-hong-kong/) |
| Accelerated substitution | 44.1% | 67.2% | 80.1% | 85.9% | A01; [S09](https://arxiv.org/html/2509.16204v2) [S10](https://arxiv.org/abs/2506.07217v2) [S15](https://ncees.org/wp-content/uploads/2025/10/Policy-manual_August-2025_web.pdf) [S20](https://www.arup.com/news/arup-partners-yjk-to-launch-ai-designer-in-hong-kong-to-advance-ai-enabled-structural-engineering/) [S21](https://www.arup.com/news/bringing-ai-into-the-heart-of-public-building-design-with-archsd-in-hong-kong/) |

**Table 3 source note:** Every numerical cell is an A01 model output. Research sources inform the scenario mechanisms and ordering, not the exact values. No probability is assigned to these scenarios.

### Constrained adoption

Tools improve, but fragmented data, integration cost and conservative procurement keep adoption uneven. Small practices and complex existing buildings lag.

**Evidence that would support this path:** Independent structural trials fail to show broad savings; insurers or clients require substantial duplicate review.

A01 author inference; [S05](https://www.rics.org/news-insights/artificial-intelligence-in-construction-report) [S14](https://www.istructe.org/resources/blog/digital-reflections-calum-lockhart/) [S15](https://ncees.org/wp-content/uploads/2025/10/Policy-manual_August-2025_web.pdf) [S17](https://metr.org/Early_2025_AI_Experienced_OS_Devs_Study-paper.pdf)

### Managed transformation

AI connects documents, BIM and deterministic analysis. Engineers supervise larger scopes; production staffing per project falls while assurance and investigation retain value.

**Evidence that would support this path:** Repeatable audited workflows save time without increasing design or construction errors; major BIM/analysis platforms interoperate.

A01 author inference; [S12](https://help.autodesk.com/cloudhelp/2027/ENU/Revit-Assistant/files/GUID-620ECD98-53F7-47F1-B700-EEE84F15EBF7.html) [S13](https://www.istructe.org/resources/technology-digital/artificial-intelligence-guidance/) [S18](https://technical.buildingsmart.org/standards/IFC/) [S20](https://www.arup.com/news/arup-partners-yjk-to-launch-ai-designer-in-hong-kong-to-advance-ai-enabled-structural-engineering/) [S21](https://www.arup.com/news/bringing-ai-into-the-heart-of-public-building-design-with-archsd-in-hong-kong/)

### Accelerated substitution

Reliable agents execute most repeatable digital delivery. Firms concentrate around software platforms and expert reviewers; standardized design work faces strong fee and staffing pressure.

**Evidence that would support this path:** Broad end-to-end structural delivery becomes independently verifiable and insurable, with accepted standards and reliable field data.

A01 author inference; [S09](https://arxiv.org/html/2509.16204v2) [S10](https://arxiv.org/abs/2506.07217v2) [S15](https://ncees.org/wp-content/uploads/2025/10/Policy-manual_August-2025_web.pdf) [S20](https://www.arup.com/news/arup-partners-yjk-to-launch-ai-designer-in-hong-kong-to-advance-ai-enabled-structural-engineering/) [S21](https://www.arup.com/news/bringing-ai-into-the-heart-of-public-building-design-with-archsd-in-hong-kong/)

### Additional alternative: a safety or integration setback

A major safety incident, repeated correlated design errors, poor interoperability or an unfavorable insurer/client response could stall adoption despite stronger models. The numeric scenario curves assume continued progress and do not model an abrupt reversal. They are not exhaustive. A much stronger general AI with accepted authority could also change the profession more radically than the central case; no date or probability is supported for that outcome. Author inference; [S05](https://www.rics.org/news-insights/artificial-intelligence-in-construction-report) [S09](https://arxiv.org/html/2509.16204v2) [S14](https://www.istructe.org/resources/blog/digital-reflections-calum-lockhart/) [S15](https://ncees.org/wp-content/uploads/2025/10/Policy-manual_August-2025_web.pdf)

## Why productivity and employment can diverge

Use the conditional accounting relationship:

$$\frac{J}{J_0}=(1+g)^T(1-S+n)$$

- $J/J_0$: relative total engineering labor required; the dashboard index multiplies this ratio by $100$.
- $g$: assumed annual growth in engineering-service output, not construction spending or wage growth.
- $T$: years since 2026.
- $S$: net additional saving in labor per baseline project.
- $n$: new scope/assurance labor per project as a fraction of baseline project labor.

This is not an econometric estimate of headcount. It assumes constant task mix and output quality. Demand growth and new work are user inputs; defaults of $g=2\%$ and $n=10\%$ are illustrative and not calibrated to BLS. ASCE’s unfunded needs are not guaranteed funded work. A01; [S01](https://www.bls.gov/ooh/architecture-and-engineering/civil-engineers.htm) [S19](https://infrastructurereportcard.org/making-the-grade/) [S24](https://www.ilo.org/publications/generative-ai-and-jobs-refined-global-index-occupational-exposure)

### Example: central case in 2036

The assumed net saving is $S=0.420816$ (about $42.1\%$). For $T=10$ and $n=0.10$:

| Assumed service-output growth | Modeled labor-demand index (2026 = 100) | Change from baseline | Source |
|---|---:|---:|---|
| 0.0% / year | 67.9 | -32.1% | A01 author model; [S01](https://www.bls.gov/ooh/architecture-and-engineering/civil-engineers.htm) [S24](https://www.ilo.org/publications/generative-ai-and-jobs-refined-global-index-occupational-exposure) |
| 1.5% / year | 78.8 | -21.2% | A01 author model; [S01](https://www.bls.gov/ooh/architecture-and-engineering/civil-engineers.htm) [S24](https://www.ilo.org/publications/generative-ai-and-jobs-refined-global-index-occupational-exposure) |
| 3.0% / year | 91.3 | -8.7% | A01 author model; [S01](https://www.bls.gov/ooh/architecture-and-engineering/civil-engineers.htm) [S24](https://www.ilo.org/publications/generative-ai-and-jobs-refined-global-index-occupational-exposure) |

**Table 4 source note:** Conditional demand sensitivities, not published job forecasts. New project/assurance work and output growth can offset some capacity released; changing the assumptions changes the result.

## Career and firm implications

| Role / issue | Author projection | Context |
|---|---|---|
| Routine BIM and document production | Repetition becomes less scarce; standards, model quality and dependable automation become more valuable. | A01; [S03](https://teterae.isolvedhire.com/jobs/job_description_files.php?id=1560867&site_id=610) [S10](https://arxiv.org/abs/2506.07217v2) [S11](https://arxiv.org/abs/2602.20812) [S12](https://help.autodesk.com/cloudhelp/2027/ENU/Revit-Assistant/files/GUID-620ECD98-53F7-47F1-B700-EEE84F15EBF7.html) [S18](https://technical.buildingsmart.org/standards/IFC/) |
| Junior engineers | Routine production hours may shrink before the whole occupation does. Training must preserve mechanics, detailing, modeling and site exposure. | A01; [S03](https://teterae.isolvedhire.com/jobs/job_description_files.php?id=1560867&site_id=610) [S08](https://doi.org/10.1002/cae.70210) [S13](https://www.istructe.org/resources/technology-digital/artificial-intelligence-guidance/) [S15](https://ncees.org/wp-content/uploads/2025/10/Policy-manual_August-2025_web.pdf) |
| Technical specialists | Unusual structures, rehabilitation, forensic work and uncertain conditions provide relative resilience, not permanent immunity. | A01; [S03](https://teterae.isolvedhire.com/jobs/job_description_files.php?id=1560867&site_id=610) [S09](https://arxiv.org/html/2509.16204v2) [S13](https://www.istructe.org/resources/technology-digital/artificial-intelligence-guidance/) |
| Engineer of record / principal | Human responsibility can persist alongside smaller production teams and larger review loads. | A01; [S03](https://teterae.isolvedhire.com/jobs/job_description_files.php?id=1560867&site_id=610) [S15](https://ncees.org/wp-content/uploads/2025/10/Policy-manual_August-2025_web.pdf) [S20](https://www.arup.com/news/arup-partners-yjk-to-launch-ai-designer-in-hong-kong-to-advance-ai-enabled-structural-engineering/) |
| Firms | Fee pressure may erode revenue unless new scope, demand or differentiation captures some productivity benefit. | A01; [S05](https://www.rics.org/news-insights/artificial-intelligence-in-construction-report) [S19](https://infrastructurereportcard.org/making-the-grade/) [S24](https://www.ilo.org/publications/generative-ai-and-jobs-refined-global-index-occupational-exposure) |

**Table 5 source note:** These are conditional author implications, not measured employment outcomes.

A practical preparation strategy is to develop mechanics and failure-behavior expertise, learn BIM data/API/IFC workflows, measure one bounded automation project including correction/review time, and broaden field and client-facing judgment. This is an author recommendation informed by the following evidence, not a tested career intervention: [S03](https://teterae.isolvedhire.com/jobs/job_description_files.php?id=1560867&site_id=610) [S13](https://www.istructe.org/resources/technology-digital/artificial-intelligence-guidance/) [S15](https://ncees.org/wp-content/uploads/2025/10/Policy-manual_August-2025_web.pdf) [S17](https://metr.org/Early_2025_AI_Experienced_OS_Devs_Study-paper.pdf) [S18](https://technical.buildingsmart.org/standards/IFC/)

## A01: reproducible forecast method

Illustrative U.S. building-structures delivery workload spanning engineer and BIM-production duties. Task examples are a synthesized taxonomy. Weights are assumed team effort shares, not a time-use survey or one engineer’s observed week. Existing 2026 automation is already in the baseline; savings are additional by horizon. No model is statistically fitted.

$$S_{s,t}=\sum_i w_i\min(0.98,p_{i,t}c_{s,t})a_{s,t}-h_{s,t}$$

| Term | Definition |
|---|---|
| $w_i$ | Assumed effort share; normalized to sum to 1 |
| $p_{i,t}$ | Assumed removable share inside each task cluster at full deployment |
| $c_{s,t}$ | Scenario capability multiplier |
| $a_{s,t}$ | Realization through adoption/integration; not the share of firms adopting |
| $h_{s,t}$ | Extra review/integration/rework as a fraction of baseline labor |

**Table 6:** Author model definitions (A01). Subscripts $i$, $t$, $s$ denote task cluster, horizon and scenario. The $0.98$ category cap is an arbitrary safeguard. Existing QA is already in the baseline; overhead adds only new work. For 2026, additional saving is set to zero by definition.

### Category potential inputs

| Cluster | Weight | 2031 p | 2036 p | 2046 p | 2056 p | Sources / assumptions |
|---|---:|---:|---:|---:|---:|---|
| Project intake & existing information | 5% | 40% | 60% | 75% | 85% | A01; [S02](https://www.onetonline.org/link/details/17-2051.00) [S03](https://teterae.isolvedhire.com/jobs/job_description_files.php?id=1560867&site_id=610) [S13](https://www.istructe.org/resources/technology-digital/artificial-intelligence-guidance/) |
| Structural concept & load path | 8% | 25% | 45% | 65% | 75% | A01; [S03](https://teterae.isolvedhire.com/jobs/job_description_files.php?id=1560867&site_id=610) [S09](https://arxiv.org/html/2509.16204v2) [S20](https://www.arup.com/news/arup-partners-yjk-to-launch-ai-designer-in-hong-kong-to-advance-ai-enabled-structural-engineering/) [S21](https://www.arup.com/news/bringing-ai-into-the-heart-of-public-building-design-with-archsd-in-hong-kong/) |
| Design basis, loads & code interpretation | 7% | 35% | 55% | 70% | 80% | A01; [S02](https://www.onetonline.org/link/details/17-2051.00) [S13](https://www.istructe.org/resources/technology-digital/artificial-intelligence-guidance/) [S15](https://ncees.org/wp-content/uploads/2025/10/Policy-manual_August-2025_web.pdf) [S22](https://arxiv.org/abs/2506.20551) |
| Analysis modeling & result interpretation | 12% | 45% | 65% | 80% | 90% | A01; [S09](https://arxiv.org/html/2509.16204v2) [S13](https://www.istructe.org/resources/technology-digital/artificial-intelligence-guidance/) [S20](https://www.arup.com/news/arup-partners-yjk-to-launch-ai-designer-in-hong-kong-to-advance-ai-enabled-structural-engineering/) |
| Members, connections & foundations | 10% | 50% | 70% | 85% | 93% | A01; [S03](https://teterae.isolvedhire.com/jobs/job_description_files.php?id=1560867&site_id=610) [S08](https://doi.org/10.1002/cae.70210) [S13](https://www.istructe.org/resources/technology-digital/artificial-intelligence-guidance/) [S20](https://www.arup.com/news/arup-partners-yjk-to-launch-ai-designer-in-hong-kong-to-advance-ai-enabled-structural-engineering/) |
| BIM authoring & model management | 14% | 60% | 80% | 90% | 96% | A01; [S03](https://teterae.isolvedhire.com/jobs/job_description_files.php?id=1560867&site_id=610) [S10](https://arxiv.org/abs/2506.07217v2) [S11](https://arxiv.org/abs/2602.20812) [S12](https://help.autodesk.com/cloudhelp/2027/ENU/Revit-Assistant/files/GUID-620ECD98-53F7-47F1-B700-EEE84F15EBF7.html) [S18](https://technical.buildingsmart.org/standards/IFC/) |
| Drawings, detailing & specifications | 8% | 65% | 82% | 93% | 97% | A01; [S03](https://teterae.isolvedhire.com/jobs/job_description_files.php?id=1560867&site_id=610) [S12](https://help.autodesk.com/cloudhelp/2027/ENU/Revit-Assistant/files/GUID-620ECD98-53F7-47F1-B700-EEE84F15EBF7.html) [S13](https://www.istructe.org/resources/technology-digital/artificial-intelligence-guidance/) |
| Multidiscipline coordination | 8% | 35% | 55% | 72% | 82% | A01; [S03](https://teterae.isolvedhire.com/jobs/job_description_files.php?id=1560867&site_id=610) [S05](https://www.rics.org/news-insights/artificial-intelligence-in-construction-report) [S18](https://technical.buildingsmart.org/standards/IFC/) |
| QA, independent checking & assurance | 7% | 25% | 40% | 55% | 65% | A01; [S03](https://teterae.isolvedhire.com/jobs/job_description_files.php?id=1560867&site_id=610) [S13](https://www.istructe.org/resources/technology-digital/artificial-intelligence-guidance/) [S14](https://www.istructe.org/resources/blog/digital-reflections-calum-lockhart/) [S15](https://ncees.org/wp-content/uploads/2025/10/Policy-manual_August-2025_web.pdf) |
| Construction administration | 6% | 30% | 50% | 70% | 82% | A01; [S03](https://teterae.isolvedhire.com/jobs/job_description_files.php?id=1560867&site_id=610) [S13](https://www.istructe.org/resources/technology-digital/artificial-intelligence-guidance/) [S15](https://ncees.org/wp-content/uploads/2025/10/Policy-manual_August-2025_web.pdf) |
| Site observation & existing assessment | 5% | 10% | 25% | 45% | 65% | A01; [S02](https://www.onetonline.org/link/details/17-2051.00) [S03](https://teterae.isolvedhire.com/jobs/job_description_files.php?id=1560867&site_id=610) [S13](https://www.istructe.org/resources/technology-digital/artificial-intelligence-guidance/) [S14](https://www.istructe.org/resources/blog/digital-reflections-calum-lockhart/) |
| Project management & commercial work | 4% | 35% | 55% | 70% | 80% | A01; [S03](https://teterae.isolvedhire.com/jobs/job_description_files.php?id=1560867&site_id=610) [S05](https://www.rics.org/news-insights/artificial-intelligence-in-construction-report) |
| Sustainability, quantities & lifecycle | 3% | 50% | 70% | 85% | 93% | A01; [S13](https://www.istructe.org/resources/technology-digital/artificial-intelligence-guidance/) [S18](https://technical.buildingsmart.org/standards/IFC/) [S19](https://infrastructurereportcard.org/making-the-grade/) [S20](https://www.arup.com/news/arup-partners-yjk-to-launch-ai-designer-in-hong-kong-to-advance-ai-enabled-structural-engineering/) |
| Professional responsibility & people | 3% | 10% | 20% | 35% | 50% | A01; [S03](https://teterae.isolvedhire.com/jobs/job_description_files.php?id=1560867&site_id=610) [S04](https://jobopenings.acec.org/career-resources/finding-talent-4/structural-engineer-job-description-template-requirements-135) [S13](https://www.istructe.org/resources/technology-digital/artificial-intelligence-guidance/) [S15](https://ncees.org/wp-content/uploads/2025/10/Policy-manual_August-2025_web.pdf) |

**Table 7:** Every weight and potential is an author assumption; multiply potential by scenario capability and realization, then subtract overall extra overhead once. No published study supplies these category percentages.

### Scenario inputs

| Scenario | Year | Capability multiplier | Realization factor | Extra overhead |
|---|---:|---:|---:|
| Constrained adoption | 2031 | 0.65 | 0.55 | 3% |
| Constrained adoption | 2036 | 0.65 | 0.65 | 4% |
| Constrained adoption | 2046 | 0.65 | 0.75 | 5% |
| Constrained adoption | 2056 | 0.65 | 0.80 | 6% |
| Managed transformation | 2031 | 0.95 | 0.80 | 5% |
| Managed transformation | 2036 | 0.90 | 0.90 | 6% |
| Managed transformation | 2046 | 0.85 | 0.96 | 7% |
| Managed transformation | 2056 | 0.80 | 1.00 | 8% |
| Accelerated substitution | 2031 | 1.25 | 0.95 | 4% |
| Accelerated substitution | 2036 | 1.20 | 1.00 | 4% |
| Accelerated substitution | 2046 | 1.15 | 1.00 | 4% |
| Accelerated substitution | 2056 | 1.10 | 1.00 | 4% |

**Table 8:** A01 judgmental inputs, not fitted parameters. The central capability discount grows at distant horizons to moderate long-range extrapolation. Context: [S05](https://www.rics.org/news-insights/artificial-intelligence-in-construction-report) [S09](https://arxiv.org/html/2509.16204v2) [S13](https://www.istructe.org/resources/technology-digital/artificial-intelligence-guidance/) [S15](https://ncees.org/wp-content/uploads/2025/10/Policy-manual_August-2025_web.pdf) [S20](https://www.arup.com/news/arup-partners-yjk-to-launch-ai-designer-in-hong-kong-to-advance-ai-enabled-structural-engineering/)

### Limits

- Research informs mechanisms and scenario ordering, not the individual percentages.
- No representative whole-role structural-engineering AI time-use trial was found in this selected review.
- Savings do not include downstream construction cost, schedule or failure reductions.
- Capability, adoption and overhead are simplified scalars; they vary by firm and task.
- The occupation index assumes constant task mix and linear labor scaling; it excludes wage, fee, capital and general-equilibrium effects.
- The model is conditional; decades-ahead output is not a confidence interval or a probability.
- The fast scenario presumes assurance works; an alternative safety setback could delay or reverse adoption.
- Task percentages are illustrative totals; task overlap is allocated once by primary activity.

### Review protocol

A curated primary-source online review conducted on 30 September 2026. Full accessible pages and relevant tables were examined; some studies were read through public abstracts and official Revit documentation through indexed excerpts where page extraction failed. This is not a systematic meta-analysis. No source after the cut-off is intentionally used. Refer to each source’s scope and access limitation.

## Website architecture decision

Plain HTML/CSS/JavaScript is selected because the dashboard is a finite static research artifact with interactive filters and a simple numerical model. It needs no server, package installation or build framework. Jekyll adds a content generator; React adds a UI runtime/build layer; Astro is useful for a growing content site but unnecessary here. This is an author architecture judgment. GitHub Pages supports the static deployment: [S23](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)

## References

### [S01] Civil Engineers: Occupational Outlook Handbook

U.S. Bureau of Labor Statistics. 2026-08-27. Accessed 2026-09-30.

[Original source](https://www.bls.gov/ooh/architecture-and-engineering/civil-engineers.htm)

**Evidence type:** Government statistics.

**Location read:** Summary; Duties; Job Outlook.

**Finding used:** 380,600 civil engineering jobs in 2025; 6% projected employment growth during 2025–2035; 22,700 average annual openings.

**Scope:** United States; civil engineers, including structural and other specialties.

**Limit:** Not a structural-only series or an AI employment forecast. Openings include replacements, not just new positions.

### [S02] 17-2051.00: Civil Engineers

O*NET OnLine. Current profile accessed 2026-09-30. Accessed 2026-09-30.

[Original source](https://www.onetonline.org/link/details/17-2051.00)

**Evidence type:** Occupational task database.

**Location read:** Tasks; Work Activities; Technology Skills.

**Finding used:** Role spans calculations, design, site inspection, compliance, advice, coordination and management.

**Scope:** Broad civil engineering occupational profile.

**Limit:** No measured structural-engineer time allocation; not every civil task applies to building structures.

### [S03] Structural Project Engineer I–II job description

TETER. 2025-05-30. Accessed 2026-09-30.

[Original source](https://teterae.isolvedhire.com/jobs/job_description_files.php?id=1560867&site_id=610)

**Evidence type:** Employer role description.

**Location read:** PDF pp. 1–3.

**Finding used:** Includes vertical/lateral systems, Revit drawings, RFIs, submittals, site visits, QA, staffing, budgeting and mentoring.

**Scope:** Building structural project engineer; California; mid/senior role.

**Limit:** One employer and level, not a representative survey of the profession.

### [S04] Structural Engineer Job Description Template

ACEC Engineering Career Center. 2026 resource; accessed 2026-09-30. Accessed 2026-09-30.

[Original source](https://jobopenings.acec.org/career-resources/finding-talent-4/structural-engineer-job-description-template-requirements-135)

**Evidence type:** Professional role guidance.

**Location read:** Templates 1–3.

**Finding used:** Distinguishes EIT production, PE review/responsible charge and senior client/team leadership.

**Scope:** U.S. structural role templates grounded in O*NET.

**Limit:** Template, not a job-posting sample or empirical study; used for role structure only.

### [S05] Artificial intelligence in construction report 2025

RICS; Anil Sawhney and Katherine Pitman. 2025. Accessed 2026-09-30.

[Original source](https://www.rics.org/news-insights/artificial-intelligence-in-construction-report)

**Evidence type:** Industry survey.

**Location read:** Sections 2, 3.1 and 3.4.

**Finding used:** Over 2,200 responses: about 45% no implementation, 34% pilots, under 12% regular specific-process use, 1.5% multi-process use and under 1% fully embedded. Skills (46%), integration (37%) and data (30%) lead barriers.

**Scope:** Global construction professionals; Q1 2025; 48% of responses from UK.

**Limit:** Self-reported, broader than structural design firms; not directly comparable with RIBA practice adoption. Percentages are rounded.

### [S06] RIBA AI Report 2026

Royal Institute of British Architects. 2026. Accessed 2026-09-30.

[Original source](https://www.riba.org/work/insights-and-resources/ai-report/)

**Evidence type:** Industry survey.

**Location read:** How are architects using AI?.

**Finding used:** 74% of surveyed practices use AI in at least some projects.

**Scope:** Architecture practices; adjacent to structural engineering.

**Limit:** Any use is not end-to-end automation, audited productivity or structural-engineering adoption. Sample details not exposed on summary page.

### [S07] RIBA AI Report 2025

Royal Institute of British Architects. 2025. Accessed 2026-09-30.

[Original source](https://www.riba.org/work/insights-and-resources/ai-report/riba-ai-report-2025/)

**Evidence type:** Industry survey.

**Location read:** Report overview.

**Finding used:** Practice AI use rose from 41% in 2024 to 59% in 2025.

**Scope:** Architecture practice annual surveys.

**Limit:** Changing respondents and use cases may affect comparisons. Does not measure hours automated.

### [S08] Assessment of ChatGPT for Engineering Statics Analysis

Benjamin Hope, Jayden Bracey, Sahar Choukir and Derek Warner. 2026-05-28. Accessed 2026-09-30.

[Original source](https://doi.org/10.1002/cae.70210)

**Evidence type:** Peer-reviewed study.

**Location read:** Abstract.

**Finding used:** A tailored Custom GPT scored 82–86% on statics exam variants versus a 75% student average; errors included tension/compression identification.

**Scope:** Foundational statics; GPT-4o and o1-preview.

**Limit:** Exam score is not design approval, current-frontier capability or whole-role accuracy. Public abstract read; full study data not independently audited.

### [S09] Toward Engineering AGI: EngDesign

Xingang Guo et al.. 2025-11-06, v2. Accessed 2026-09-30.

[Original source](https://arxiv.org/html/2509.16204v2)

**Evidence type:** Research preprint.

**Location read:** Table 2; evaluation metrics.

**Finding used:** Table 2 structural-design average pass rates include GPT-4o 25.64%, o3-high 41.03% and Gemini-2.5-Pro 50.00%.

**Scope:** Nine engineering domains; model trials averaged over three runs; structural sizing subset.

**Limit:** A bounded benchmark with 2025 models, not actual building commissions or a 2026 frontier evaluation. Pass rates and partial-credit scores differ.

### [S10] BIMgent: Towards Autonomous Building Modeling via Computer-use Agents

Zihan Deng, Changyu Du, Stavros Nousias and André Borrmann. 2025-06-30, v2. Accessed 2026-09-30.

[Original source](https://arxiv.org/abs/2506.07217v2)

**Evidence type:** Workshop research preprint.

**Location read:** Abstract.

**Finding used:** Authors report 32% success for their BIM agent versus 0% for baselines.

**Scope:** Architectural building modeling through GUI operations.

**Limit:** Specific experimental task set; not structural detailing accuracy, safe autonomy or a whole-model production guarantee.

### [S11] Qwen-BIM: domain-specific benchmark and dataset

Jia-Rui Lin et al.. 2026-02-24. Accessed 2026-09-30.

[Original source](https://arxiv.org/abs/2602.20812)

**Evidence type:** Research preprint.

**Location read:** Abstract.

**Finding used:** Domain tuning improved average G-Eval score by 21.0% over the base model.

**Scope:** BIM-derived textual datasets and domain-specific evaluation.

**Limit:** G-Eval is an evaluation score, not a 21% reduction in BIM labor or independent safety verification.

### [S12] Autodesk Assistant in Revit

Autodesk. Revit 2027 documentation; accessed 2026-09-30. Accessed 2026-09-30.

[Original source](https://help.autodesk.com/cloudhelp/2027/ENU/Revit-Assistant/files/GUID-620ECD98-53F7-47F1-B700-EEE84F15EBF7.html)

**Evidence type:** Vendor documentation.

**Location read:** Assistant guide; support availability article.

**Finding used:** Documents AI-driven view creation, templates, tagging and reuse across levels. Support documentation identifies Revit 2027 availability.

**Scope:** Vendor-documented authoring assistance, version-specific.

**Limit:** Product documentation is not an independent productivity trial; does not imply availability in Revit 2022–2025. Full help page retrieval failed; official indexed excerpts and support entries used.

Supplementary official entries: [availability](https://www.autodesk.com/support/technical/article/caas/sfdcarticles/sfdcarticles/How-to-enable-Autodesk-Assistant-in-Revit.html), [AI features](https://www.autodesk.com/support/technical/article/caas/sfdcarticles/sfdcarticles/What-AI-features-are-available-in-Revit.html). Indexed excerpts only; the full help page could not be retrieved.

### [S13] Implementing AI in structural engineering

Institution of Structural Engineers. Current guidance accessed 2026-09-30. Accessed 2026-09-30.

[Original source](https://www.istructe.org/resources/technology-digital/artificial-intelligence-guidance/)

**Evidence type:** Professional guidance.

**Location read:** Introduction; section 1.1.1.

**Finding used:** Lists AI use cases for code search, FE models, member design, reports, assessment and BIM, with review and competence concerns.

**Scope:** Structural-engineering-specific guidance.

**Limit:** Lists possible applications, not a measured adoption or productivity rate.

### [S14] Digital reflections: Calum Lockhart

Institution of Structural Engineers. 2026-02-23. Accessed 2026-09-30.

[Original source](https://www.istructe.org/resources/blog/digital-reflections-calum-lockhart/)

**Evidence type:** Safety report synthesis.

**Location read:** Summary of analysis of CROSS reports.

**Finding used:** Review of over 900 CROSS reports: 43% involved digital processes, including 22% calculation, 13% BIM/modeling and 8% monitoring issues.

**Scope:** Selected confidential structural safety reports.

**Limit:** Reporting sample, not all projects. These are not AI error rates or the probability of a structural failure.

### [S15] PS 6.10: Responsible Use of Artificial Intelligence

NCEES. 2025-08 policy manual. Accessed 2026-09-30.

[Original source](https://ncees.org/wp-content/uploads/2025/10/Policy-manual_August-2025_web.pdf)

**Evidence type:** Licensure policy position.

**Location read:** PDF p. 47 (printed p. 42), PS 6.10.

**Finding used:** Licensed professionals retain ultimate responsibility and independently validate critical AI outputs.

**Scope:** Engineering and surveying professional policy.

**Limit:** NCEES position statement is not itself the law in every jurisdiction; future law may change.

### [S16] Generative AI at Work

Erik Brynjolfsson, Danielle Li and Lindsey Raymond. 2025-02-04. Accessed 2026-09-30.

[Original source](https://doi.org/10.1093/qje/qjae044)

**Evidence type:** Peer-reviewed field study.

**Location read:** QJE 140(2), 889–942; abstract.

**Finding used:** Published version: 5,172 customer-support agents; 15% more issues resolved per hour with AI assistance.

**Scope:** Staggered deployment in one customer-support setting.

**Limit:** Different domain; cannot import the percentage into engineering. Earlier working-paper versions report different figures; this uses the published version.

### [S17] Early-2025 AI and Experienced Open-Source Developer Productivity

Joel Becker, Nate Rush, Beth Barnes and David Rein; METR. 2025-07-10. Accessed 2026-09-30.

[Original source](https://metr.org/Early_2025_AI_Experienced_OS_Devs_Study-paper.pdf)

**Evidence type:** Randomized field experiment.

**Location read:** Abstract; section 2.

**Finding used:** 16 developers, 246 tasks: AI access increased completion time by 19%.

**Scope:** Experienced maintainers working in familiar mature repositories; Feb–Jun 2025 tools.

**Limit:** Small specialized software sample, not structural engineering or a forecast of future systems.

### [S18] Industry Foundation Classes (IFC)

buildingSMART International. IFC / ISO 16739-1:2024; accessed 2026-09-30. Accessed 2026-09-30.

[Original source](https://technical.buildingsmart.org/standards/IFC/)

**Evidence type:** Official technical standard.

**Location read:** Standard overview.

**Finding used:** IFC provides an open, vendor-neutral standard for BIM data exchange.

**Scope:** Interoperability infrastructure for digital workflows.

**Limit:** An exchange standard does not ensure model completeness or engineering correctness.

### [S19] Making the Grade: 2025 Infrastructure Report Card

American Society of Civil Engineers. 2025. Accessed 2026-09-30.

[Original source](https://infrastructurereportcard.org/making-the-grade/)

**Evidence type:** Infrastructure needs estimate.

**Location read:** Investment needs paragraph.

**Finding used:** Estimates $9.1 trillion needed and a $3.7 trillion investment gap to reach good repair across 18 categories.

**Scope:** U.S. infrastructure, broadly defined.

**Limit:** Unfunded need is not funded project demand or guaranteed structural-engineering employment.

### [S20] Arup–YJK AI Designer launch

Arup. 2026-07-15. Accessed 2026-09-30.

[Original source](https://www.arup.com/news/arup-partners-yjk-to-launch-ai-designer-in-hong-kong-to-advance-ai-enabled-structural-engineering/)

**Evidence type:** Company controlled benchmark.

**Location read:** Key features.

**Finding used:** Reports about 82% less design iteration time with the same model, loads and code and engineer review retained; RC/steel and piled-foundation optimization.

**Scope:** Narrow controlled workflow; company-reported.

**Limit:** Not independent or whole-job savings. Given endpoints 2.5→0.5 days imply 80%, rather than reported 82%; 64→6 over-limit components imply 90.6%, rather than reported 88%. No reconciliation offered.

### [S21] AI-enabled structural and foundation commissions with ArchSD

Arup. 2026-09-02. Accessed 2026-09-30.

[Original source](https://www.arup.com/news/bringing-ai-into-the-heart-of-public-building-design-with-archsd-in-hong-kong/)

**Evidence type:** Company project announcement.

**Location read:** Project description.

**Finding used:** Announces long-span and piled-foundation platforms using agent orchestration and optimization.

**Scope:** Hong Kong public-building platform commissions.

**Limit:** Announcement and development scope, not a demonstrated end-to-end delivery trial.

### [S22] LLM-Driven Code Compliance Checking in BIM

Soumya Madireddy et al.. 2025-06-25. Accessed 2026-09-30.

[Original source](https://arxiv.org/abs/2506.20551)

**Evidence type:** Research preprint.

**Location read:** Abstract.

**Finding used:** Combines LLMs, Python and Revit for semi-automated compliance checks in two building examples.

**Scope:** Room dimensions, material use and object placement examples.

**Limit:** Not a validation of ASCE 7, ACI, AISC or complete structural code compliance.

### [S23] Creating a GitHub Pages site

GitHub Docs. Current documentation accessed 2026-09-30. Accessed 2026-09-30.

[Original source](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)

**Evidence type:** Hosting documentation.

**Location read:** Creating your site.

**Finding used:** GitHub Pages can serve static entry files from a configured branch or Actions artifact.

**Scope:** Deployment choice only.

**Limit:** Does not support any engineering forecast; public Pages availability depends on account/repository plan.

### [S24] Generative AI and Jobs: Refined Global Index

International Labour Organization and NASK. 2025-05-20. Accessed 2026-09-30.

[Original source](https://www.ilo.org/publications/generative-ai-and-jobs-refined-global-index-occupational-exposure)

**Evidence type:** Task exposure research.

**Location read:** Report summary.

**Finding used:** Study emphasizes that occupations contain human-input tasks; exposure often implies transformation rather than full replacement.

**Scope:** Global occupational exposure to generative AI.

**Limit:** Potential exposure, not measured displacement; not a structural-specific forecast.

