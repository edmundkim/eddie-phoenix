# Phoenix Portfolio Slide Manuscript

Status: working presenter manuscript  
Date: 2026-05-11  
Purpose: modular Figma Slides content plan for Eddie Kim portfolio reviews  
Case menu order: New Search -> Declutter -> Strategic AI

## How to use this manuscript

Treat this as a presentation manuscript and menu of standalone 10-15 minute case studies, so Eddie can pick the right case for the conversation. Each slide has a title, visible copy, speaker intent, visual direction, source notes, and claim-safety guidance.

Use `recruitment/phoenix-deck-visible-outline.md` as the clean Figma transport layer. It now includes scoped, interview-private metric callouts. Remove those metric callouts for share-safe deck links unless Eddie has cleared them for that audience.

Eddie can add visuals that do not exist in the repo. Those are marked as `new visual`. Existing repo assets are marked as `existing asset`. Do not present a new visual as proof unless it is a recreated or abstracted explanation of already supported evidence.

## Core deck thesis

Visible thesis:

> I design complex product surfaces that help people understand their options, compare tradeoffs, and stay in control: search, listing comparison, and AI-assisted experiences.

Speaker intent:

- Position Eddie as a Principal Product Designer and AI Design Lead without sounding like an AI generalist.
- Make the through-line broader than cars: intent, decision quality, system behavior, evidence, and AI judgment.
- Keep the opening short so the cases carry the proof.

## Source base checked

Primary repo sources:

- `portfolio-site/app/work/new-search/page.tsx`
- `portfolio-site/content/case-studies/new-search/overview.md`
- `portfolio-site/content/case-studies/new-search/facts.md`
- `portfolio-site/content/case-studies/new-search/facts-case-study.md`
- `portfolio-site/content/case-studies/new-search/timeline.md`
- `portfolio-site/content/case-studies/new-search/source-analyses.md`
- `portfolio-site/content/case-studies/new-search/assets.md`
- `portfolio-site/app/work/declutter-list-page/page.tsx`
- `portfolio-site/content/case-studies/declutter-LP/overview.md`
- `portfolio-site/content/case-studies/declutter-LP/facts.md`
- `portfolio-site/content/case-studies/declutter-LP/timeline.md`
- `portfolio-site/content/case-studies/declutter-LP/source-analyses.md`
- `portfolio-site/content/case-studies/declutter-LP/assets.md`
- `portfolio-site/app/work/strategic-ai-design-leadership/page.tsx`
- `portfolio-site/content/case-studies/strategic-AI/overview.md`
- `portfolio-site/content/case-studies/strategic-AI/facts.md`
- `portfolio-site/content/case-studies/strategic-AI/assets.md`

Presentation and positioning sources:

- `portfolio-site/content/reference-pack/case-study-presentation-architecture-reference.md`
- `portfolio-site/content/reference-pack/case-study-writing-reference.md`
- `portfolio-site/content/reference-pack/faang-ai-case-study-presentation-research-brief.md`
- `portfolio-site/TONE-OF-VOICE.md`
- `portfolio-site/PORTFOLIO-BEST-PRACTICES.md`
- `portfolio-site/REVIEW-CHECKLIST.md`
- `recruitment/portfolio-positioning.md`
- `recruitment/messaging.md`
- `recruitment/company-prioritisation.md`

## Evidence rules for this deck

- Keep measured impact, forecast impact, rollout status, and qualitative leadership proof separate.
- Keep platform-specific evidence platform-specific.
- Use `I` for direct ownership and `we` or `the team` for shared outcomes.
- Do not claim direct shipped conversational AI or sole company AI strategy ownership.
- Do not use internal source names, experiment IDs, stakeholder names, dashboards, or confidential screenshots in visible slides.
- Exact metrics are useful for live portfolio review only if Eddie is comfortable discussing them. For shared deck links, use the generalized versions.

## Sharing modes

Use two modes from the same manuscript:

1. Interview-private mode
   - Eddie can speak to exact repo-supported metrics where he is comfortable and where the scope/caveat is stated.
   - Source notes, caveats, and exact evidence boundaries stay in speaker notes, not on visible slides.

2. Share-safe mode
   - Use generalized outcome language.
   - Remove exact internal metric callouts unless they are already cleared for the intended audience.
   - Keep all source notes, internal file references, and caveat language out of the visible deck.

Figma generation rule:

- Do not generate Figma slides directly from this full manuscript.
- Use `recruitment/phoenix-deck-visible-outline.md` or extract only slide titles, visible copy, and high-level visual placeholders.
- Keep speaker intent, source notes, and claim-safety notes in this presenter manuscript or a speaker-notes layer.
- If generating a share-safe version, remove exact metric callouts from the visible outline and keep generalized outcome language.

## Modular case menu

Each case is designed to work as a standalone 10-15 minute case study.

Pick the case or cases that fit the company and interview format:

- New Search: systems thinking, IA, cross-platform search, evidence calibration.
- Declutter: consumer craft, prioritization, marketplace decision surfaces, commercial tradeoffs.
- Strategic AI: AI visibility, review, control, design leadership, stakeholder alignment.

As of 2026-05-12, Cleo-specific tags and guidance in this manuscript are archived reference only after the Cleo rejection. Do not tailor or present a Cleo-specific version unless a materially better-fit Cleo role appears.

Standalone module rules:

- New Search standalone: use NS-01 through NS-12.
- Declutter standalone: use DCL-01 through DCL-12.
- Strategic AI standalone: use AI-01 through AI-11.
- Do not add process filler to reach time. Spend the time on tradeoffs, evidence, role clarity, and questions.

## Opening Slides

### OP-01 - Current Positioning

Time: 30 seconds

Visible copy:

- Eddie Kim
- Principal Product Designer and AI Design Lead
- Marketplace search, cross-platform product systems, and AI design standards for review and control

Speaker intent:

- Give the room a clean mental model of who Eddie is now.
- Do not start with a biography.
- Name the combination: systems, product judgment, AI, shipped product work.

Visual direction:

- Simple title slide.
- Optional subtle three-column proof themes: Search systems, decision surfaces, AI trust.

Source notes:

- `portfolio-site/RESUME.md`
- `portfolio-site/components/PROFILE.md`
- `recruitment/messaging.md`

Claim safety:

- Safe.

Tags:

- Neutral
- Parloa
- Cleo

### OP-02 - What I Will Show

Time: 45 seconds

Visible copy:

- New Search: resetting a fragmented search system
- Declutter: simplifying a high-traffic decision surface
- Strategic AI: defining visibility, review, and control for AI work

Speaker intent:

- Set expectations and show that the deck is modular.
- Signal that each case proves a different part of the level: systems, craft/product judgment, AI leadership.

Visual direction:

- Three-part agenda.
- Keep each case visually distinct but not over-designed.

Source notes:

- `portfolio-site/lib/case-study-navigation.ts`
- `recruitment/portfolio-positioning.md`

Claim safety:

- Safe.

Tags:

- Neutral
- Parloa
- Cleo

### OP-03 - Through-Line

Time: 45 seconds

Visible copy:

- The shared problem: helping people make better decisions when the system behind the interface is complex.
- The design work: clarify intent, reduce noise, expose the right controls, and use evidence without overstating it.

Speaker intent:

- Make the automotive context transferable.
- Prepare AI/customer-service/fintech audiences to hear the cases as decision-system work.

Visual direction:

- Simple flow: Complexity -> Product judgment -> User confidence.
- New visual.

Source notes:

- `recruitment/portfolio-positioning.md`
- `portfolio-site/content/reference-pack/faang-ai-case-study-presentation-research-brief.md`

Claim safety:

- Safe as synthesis.

Tags:

- Neutral
- Parloa
- Cleo

## Module 1 - New Search

Target length: 10-15 minutes  
Best signal: systems thinking, IA, cross-platform search, evidence calibration  
Use for: marketplace/search, product systems, AI-adjacent decision support, Cleo, Parloa support

### NS-01 - Resetting A Fragmented Search System

Time: 45 seconds

Visible copy:

- New Search reset how buyers narrowed complex car inventory across app and web.
- The work shipped in phases, with platform-specific evidence and decisions.

Speaker intent:

- State the case in one sentence.
- Set the launch and metric caveats early.

Visual direction:

- Existing asset: `new-search-hero-mockup-wide.png` or `apps_mockup_video_light.mp4`.

Source notes:

- `portfolio-site/app/work/new-search/page.tsx`
- `portfolio-site/content/case-studies/new-search/overview.md`

Claim safety:

- Safe.

Tags:

- Neutral
- Cleo
- Parloa support

### NS-02 - Outcome Preview

Time: 60 seconds

Visible copy:

- Before: fragmented filter models and weak evidence for the existing direction.
- After: a clearer baseline that could be tested, rolled out, and adapted by platform.

Speaker intent:

- Show the outcome early.
- Let the panel see product craft before the deeper decision story.

Visual direction:

- Existing assets: `desktop_before.png` + `desktop_search_after.png`.
- Optional app comparison strip: `apps_search_v1_baseline.png`, `apps_search_v2_failed.png`, `apps_search_V3_after.png`.

Source notes:

- `portfolio-site/content/case-studies/new-search/assets.md`
- `portfolio-site/app/work/new-search/page.tsx`

Claim safety:

- Safe if framed as before/after visual comparison, not as proof of all-platform impact.

Tags:

- Neutral
- Cleo
- Parloa

### NS-03 - Why Search Needed A Reset

Time: 75 seconds

Visible copy:

- Search and filters were part of the path from browsing to enquiry.
- App and web patterns had diverged.
- Earlier validation weakened confidence in the direction.

Speaker intent:

- Make the problem more than UI cleanup.
- Show that the trigger was evidence, not preference.

Visual direction:

- New visual: simple map of search -> list page -> detail page -> enquiry.
- Optional callouts for app/web divergence.

Source notes:

- `portfolio-site/content/case-studies/new-search/overview.md`
- `portfolio-site/content/case-studies/new-search/facts-case-study.md`
- `portfolio-site/app/work/new-search/page.tsx`

Claim safety:

- Safe.
- Avoid exact background conversion numbers unless primary analytics are available.

Tags:

- Neutral
- Cleo
- Parloa support

### NS-04 - My Role

Time: 60 seconds

Visible copy:

- Directly drove: app filter IA, filter-entry hierarchy, make/model placement, completion behavior.
- Influenced: cross-platform baseline decisions across product, research, engineering, analytics, and app/web design.
- Collaborated on: research interpretation, experimentation readouts, rollout decisions, and commercial signal framing.

Speaker intent:

- Make authorship legible early.
- Keep direct app ownership separate from shared programme outcomes.

Visual direction:

- Two-column ownership map: Owned directly / Influenced and shared.

Source notes:

- `portfolio-site/app/work/new-search/page.tsx`
- `portfolio-site/content/case-studies/new-search/facts-case-study.md`
- `portfolio-site/components/PROFILE.md`

Claim safety:

- Mostly safe.
- Note that some source-analysis files say personal role evidence is weaker inside the kept source set; live page and profile support stronger role framing.

Tags:

- Neutral
- Cleo
- Parloa

### NS-05 - What Made This Hard

Time: 60 seconds

Visible copy:

- The same product problem behaved differently by platform.
- iOS gave the clearest evidence first.
- Android and web had narrower or later evidence.

Speaker intent:

- Establish why senior judgment mattered.
- Show why the team calibrated consistency against platform behavior and evidence.

Visual direction:

- New visual: three-lane timeline for iOS, Android, Web.

Source notes:

- `portfolio-site/content/case-studies/new-search/timeline.md`
- `portfolio-site/content/case-studies/new-search/facts.md`

Claim safety:

- Safe.

Tags:

- Neutral
- Cleo

### NS-06 - Decision 1: Reset Instead Of Polishing

Time: 75 seconds

Visible copy:

- Earlier app validation exposed a weak direction.
- The team reset the baseline around clearer hierarchy, reviewable selections, and a model that could be validated.

Speaker intent:

- Show how evidence changed the direction.
- Keep the focus on the decision, not the method.

Visual direction:

- Existing assets: legacy baseline -> intermediate direction -> stronger baseline.

Source notes:

- `portfolio-site/app/work/new-search/page.tsx`
- `portfolio-site/content/case-studies/new-search/facts.md`
- `portfolio-site/content/case-studies/new-search/timeline.md`

Claim safety:

- Safe.

Tags:

- Neutral
- Cleo
- Parloa support

### NS-07 - Decision 2: Bring High-Intent Choices Forward

Time: 75 seconds

Visible copy:

- Make/model stopped being a simple hierarchy once generation, variant, motor, and trim mattered.
- The design challenge was richer intent expression without turning search into configuration work.

Speaker intent:

- Prove IA and product model thinking.
- Connect the filter work to structured decision support.

Visual direction:

- Existing asset: `mweb_search_after_make_model.png`.
- New visual: simplified taxonomy path showing make -> model -> generation/variant/motor/trim.

Source notes:

- `portfolio-site/content/case-studies/new-search/facts-case-study.md`
- `portfolio-site/app/work/new-search/page.tsx`
- `portfolio-site/components/PROFILE.md`

Claim safety:

- Safe if framed as a workstream inside New Search.
- Do not claim resolved standalone outcome; the source says this work is still evolving.

Tags:

- Neutral
- Cleo

### NS-08 - Decision 3: Validate Where Evidence Was Clearest

Time: 90 seconds

Visible copy:

- iOS gave the clearest measured signal.
- The winning direction improved list-page enquiry signals while total detail-page views stayed stable.
- Rollout evidence later confirmed broad iOS launch across AutoScout24 markets and white labels.

Speaker intent:

- Show measured impact with caveats.
- Let the clearest platform evidence carry the impact slide.

Visual direction:

- Existing app screens or short iOS demo.
- Optional metric callout, if comfortable: `about +5-6% list-page enquiry/leads; DPVs stable`.

Source notes:

- `portfolio-site/content/case-studies/new-search/facts.md`
- `portfolio-site/content/case-studies/new-search/timeline.md`
- `portfolio-site/content/case-studies/new-search/source-analyses.md`

Claim safety:

- Use rounded language: `about +5-6%`.
- Do not state one exact unreconciled number.
- Keep DPV stability in the same slide to avoid overselling.

Tags:

- Neutral
- Cleo
- Parloa

### NS-09 - Decision 4: Adapt By Surface

Time: 90 seconds

Visible copy:

- Android: AutoSave was preferred, with a narrower Germany new-user enquiry signal and remaining clarity work.
- Web: shipped a simpler 2026 baseline first, with richer enhancements deferred.

Speaker intent:

- Show judgment under uneven evidence.
- Explain why platform divergence was mature, not inconsistent.

Visual direction:

- New visual: platform decision matrix.
- Optional existing desktop modal asset: `desktop_search_after_modal.png`.

Source notes:

- Android: `portfolio-site/content/case-studies/new-search/facts.md`, `timeline.md`
- Web: `portfolio-site/content/case-studies/new-search/facts.md`, `source-analyses.md`

Claim safety:

- Android: safe wording is `+12% Germany new-user enquiry/conversion signal`; do not claim clean Android launch or post-launch business impact from the visible corpus.
- Web: safe wording is `Feb 2026 launch update reported +7% Italy desktop dealer leads, with mWeb leads and DPVs stable`; do not generalize to all web markets.

Tags:

- Neutral
- Cleo
- Parloa support

### NS-10 - Evidence Calibration

Time: 60 seconds

Visible copy:

- iOS: strongest validation and rollout evidence.
- Android: useful but narrower benchmark and recommendation evidence.
- Web: phased rollout evidence with summary-level impact.

Speaker intent:

- Build credibility by showing limits.
- Make it obvious Eddie can handle evidence without flattening it into a neat story.

Visual direction:

- Evidence ladder or three-card confidence matrix.

Source notes:

- `portfolio-site/content/case-studies/new-search/facts.md`
- `portfolio-site/content/case-studies/new-search/source-analyses.md`

Claim safety:

- Safe.

Tags:

- Neutral
- Cleo

### NS-11 - What Changed Beyond The Screens

Time: 60 seconds

Visible copy:

- A fragmented search experience became a stronger cross-platform baseline.
- The team gained a clearer model for future iteration across app and web.

Speaker intent:

- Show senior signal beyond individual UI screens.
- Mention iOS rollout rationale around reduced complexity and faster future experimentation as stated rationale, not measured engineering impact.

Visual direction:

- New visual: `old fragmented model -> clearer baseline -> future experiments`.

Source notes:

- `portfolio-site/content/case-studies/new-search/facts.md`
- `portfolio-site/app/work/new-search/page.tsx`

Claim safety:

- Safe if phrased as baseline and stated rationale.
- Do not claim measured long-run engineering productivity.

Tags:

- Neutral
- Cleo
- Parloa support

### NS-12 - Reflection

Time: 45 seconds

Visible copy:

- The lesson: align the product model, but let platform behavior and evidence decide the final interaction.

Speaker intent:

- End with maturity.
- Transition into Declutter as another case about platform-specific decision surfaces.

Visual direction:

- Minimal text slide or closing app mockup.

Source notes:

- `portfolio-site/content/case-studies/new-search/overview.md`

Claim safety:

- Safe as reflection.

Tags:

- Neutral
- Cleo
- Parloa

## Module 2 - Declutter

Target length: 10-15 minutes  
Best signal: consumer craft, marketplace decision surfaces, tradeoffs, evidence calibration  
Use for: high-craft product companies, Parloa, marketplace/listing, consumer AI trust and clarity

### DCL-01 - A High-Traffic Decision Surface

Time: 45 seconds

Visible copy:

- Declutter redesigned the list-page card to help buyers decide what deserved a closer look.
- The case is about scarce attention, signal hierarchy, and commercial tradeoffs.

Speaker intent:

- Prevent the case from sounding tactical.
- Establish consumer craft and marketplace judgment.

Visual direction:

- Existing asset: `declutter-hero-mockup-wide-red.png` or `mockup-mobile-web-cropped.png`.

Source notes:

- `portfolio-site/app/work/declutter-list-page/page.tsx`
- `portfolio-site/content/case-studies/declutter-LP/overview.md`

Claim safety:

- Safe.

Tags:

- Neutral
- Parloa
- Cleo support

### DCL-02 - Outcome Preview

Time: 60 seconds

Visible copy:

- Before: denser cards with competing signals.
- After: clearer hierarchy, sharper comparison cues, and platform-specific rules.

Speaker intent:

- Show craft early.
- Make the hierarchy shift visible before talking about experiments.

Visual direction:

- Existing assets: `declutter-desktop-before.png` + `declutter-desktop-after.png`.
- Optional: add annotation overlays manually in Figma.

Source notes:

- `portfolio-site/content/case-studies/declutter-LP/assets.md`
- `portfolio-site/app/work/declutter-list-page/page.tsx`

Claim safety:

- Safe.

Tags:

- Neutral
- Parloa
- Cleo

### DCL-03 - Why This Mattered

Time: 75 seconds

Visible copy:

- Buyers used the card to compare dozens of offers.
- The same space carried dealer, finance, insurance, and media goals.
- Every hierarchy decision had second-order effects.

Speaker intent:

- Translate "clutter" into marketplace stakes.
- Show why this needed prioritization and stakeholder alignment.

Visual direction:

- New visual: one card with competing demand labels around it.

Source notes:

- `portfolio-site/content/case-studies/declutter-LP/overview.md`
- `portfolio-site/content/case-studies/declutter-LP/facts.md`

Claim safety:

- Safe.

Tags:

- Neutral
- Parloa
- Cleo support

### DCL-04 - My Role

Time: 60 seconds

Visible copy:

- I reframed the work from card cleanup to scarce attention and buyer progression.
- I led concept exploration and validation planning across information density, commercial entry points, and image behavior.
- I partnered with product, analytics, engineering, and business partners on analysis, implementation, and rollout decisions.

Speaker intent:

- Show direct design leadership while respecting shared analytics and rollout ownership.

Visual direction:

- Ownership map: Directly drove / Shared with partners.

Source notes:

- `portfolio-site/app/work/declutter-list-page/page.tsx`
- `portfolio-site/content/case-studies/declutter-LP/overview.md`
- `portfolio-site/content/case-studies/declutter-LP/facts.md`

Claim safety:

- Good for interview deck, but role attribution in source analyses is partly user-clarified rather than source-derived. Avoid over-precise claims about owning analytics or final rollout operations.

Tags:

- Neutral
- Parloa
- Cleo

### DCL-05 - What Made This Hard

Time: 60 seconds

Visible copy:

- Cleaner cards could improve scanability and dealer-lead signals.
- But the same changes could pressure finance, insurance, partner exposure, media, and reporting.
- The right answer varied by platform.

Speaker intent:

- Make tradeoff quality visible.
- Position the work as principal-level prioritization, not surface-level UI.

Visual direction:

- New visual: tradeoff scale, buyer clarity vs commercial surfaces.

Source notes:

- `portfolio-site/content/case-studies/declutter-LP/overview.md`
- `portfolio-site/content/case-studies/declutter-LP/facts.md`

Claim safety:

- Safe.

Tags:

- Neutral
- Parloa
- Cleo support

### DCL-06 - Decision 1: Back Stronger Simplification

Time: 90 seconds

Visible copy:

- Early mobile-web testing favored the more reduced card direction.
- The signal was strong enough to keep simplifying, not retreat to a conservative cleanup.

Speaker intent:

- Show a decision backed by evidence.
- Use metrics as scoped supporting evidence.

Visual direction:

- Existing assets: `declutter-mweb-before.png` + `declutter-mweb-after.png`.
- Optional metric callout if comfortable: IT mWeb no-links test reported +8% and +12% total dealer leads from List Page for the two decluttered variants.

Source notes:

- `portfolio-site/content/case-studies/declutter-LP/facts.md`
- `portfolio-site/content/case-studies/declutter-LP/overview.md`

Claim safety:

- Safe if scoped to `IT mWeb no-links test`.
- Do not use as all-platform impact.

Tags:

- Neutral
- Parloa

### DCL-07 - Decision 2: Treat Partner Links As Product Tradeoffs

Time: 90 seconds

Visible copy:

- No-links protected card focus.
- With-links preserved Check24 outcomes better.
- Finance still underperformed, so the team kept iterating placement and touch targets.

Speaker intent:

- Show ability to balance user clarity and business realities without becoming cynical.
- Frame partner exposure as a product decision.

Visual direction:

- New visual: no-links vs with-links decision matrix.

Source notes:

- `portfolio-site/content/case-studies/declutter-LP/facts.md`
- `portfolio-site/content/case-studies/declutter-LP/source-analyses.md`

Claim safety:

- Safe.
- Avoid exact finance revenue numbers and provisional business-case math.

Tags:

- Neutral
- Parloa
- Cleo support

### DCL-08 - Decision 3: Trust Actual Progression

Time: 90 seconds

Visible copy:

- Richer on-card interaction could make proxy metrics look healthier while weakening actual detail-page progression.
- The desktop evidence made No Gallery the safer web direction.

Speaker intent:

- Show evidence sophistication.
- This is one of the strongest senior moments in the case: choosing the right metric interpretation.

Visual direction:

- Existing desktop before/after.
- New visual: reported DPVs vs actual DPVs.
- Optional metric callout if comfortable: DE No Gallery actual dealer DPVs +6%, leads stable; IT No Gallery actual dealer DPVs -2%, leads stable; Gallery variants weakened actual dealer DPVs.

Source notes:

- `portfolio-site/content/case-studies/declutter-LP/facts.md`
- `portfolio-site/content/case-studies/declutter-LP/source-analyses.md`

Claim safety:

- Safe if scoped to desktop validation.
- Include that dealer leads were stable to avoid overstating DPV movement.

Tags:

- Neutral
- Parloa
- Cleo

### DCL-09 - Decision 4: Let Platforms Diverge

Time: 75 seconds

Visible copy:

- Mobile web and desktop moved toward No Gallery.
- Apps kept a different image balance.
- Finance moved closer to price; insurance was separated above seller information.

Speaker intent:

- Show mature platform judgment.
- Connect Declutter to New Search: both cases avoid forced consistency.

Visual direction:

- Existing assets: `declutter-apps-before.png` + `declutter-apps-after.png`.
- New visual: platform rollout rules.

Source notes:

- `portfolio-site/content/case-studies/declutter-LP/facts.md`
- `portfolio-site/app/work/declutter-list-page/page.tsx`

Claim safety:

- Safe.
- Shipped status is supported by user clarification, but exact shipped dates by platform/market are not clean in retained materials.

Tags:

- Neutral
- Parloa
- Cleo

### DCL-10 - Evidence Boundaries

Time: 60 seconds

Visible copy:

- Strongest evidence: repeated validation that simplification improved or protected key progression signals, with platform-specific limits.
- Important boundary: forecasted rollout impact is not the same as clean measured all-market impact.

Speaker intent:

- Make the deck credible by naming the evidence limit.
- Keep forecast and measured evidence separate.

Visual direction:

- Evidence table: measured / rollout / forecast / unresolved.

Source notes:

- `portfolio-site/content/case-studies/declutter-LP/facts.md`
- `portfolio-site/content/case-studies/declutter-LP/timeline.md`

Claim safety:

- Do not present `+25% dealer DPVs` or `+3% dealer leads` as measured impact. They are forecast/user-clarified rollout uplift.
- Exact all-market post-rollout measurement is not cleanly documented.

Tags:

- Neutral
- Parloa
- Cleo

### DCL-11 - Role Fit

Time: 60 seconds

Visible copy:

- Protected buyer clarity while balancing dealer, finance, insurance, and media pressure.
- Chose actual progression over healthier-looking proxy metrics.
- Turned card simplification into platform-specific product rules.

Speaker intent:

- Translate the case into hiring signal.
- For Parloa, connect to customer clarity, trust, and complex AI-assisted decision moments without claiming support-AI experience.

Visual direction:

- Three role-fit cards.

Source notes:

- `recruitment/portfolio-positioning.md`
- `portfolio-site/content/reference-pack/faang-ai-case-study-presentation-research-brief.md`

Claim safety:

- Safe as synthesis.

Tags:

- Neutral
- Parloa
- Cleo support

### DCL-12 - Reflection

Time: 45 seconds

Visible copy:

- Simplification only held up when the team named what the card should optimize for and which measures deserved trust.

Speaker intent:

- Close with a specific principle.
- Transition to Strategic AI as another trust/control problem, but at framework level.

Visual direction:

- Existing closing asset: `declutter-desktop-macbook-clean.png`.

Source notes:

- `portfolio-site/app/work/declutter-list-page/page.tsx`
- `portfolio-site/content/case-studies/declutter-LP/overview.md`

Claim safety:

- Safe.

Tags:

- Neutral
- Parloa
- Cleo

## Module 3 - Strategic AI

Target length: 10-12 minutes  
Best signal: AI design leadership, reusable standards, trust/control, senior stakeholder alignment  
Use for: Parloa, Cleo, AI enterprise/workflow, frontier AI support

### AI-01 - Defining AI Visibility, Review, And Control

Time: 45 seconds

Visible copy:

- At AutoScout24, I led a Visual AI Framework for when AI should stay quiet, explain itself, invite review, or require confirmation.
- Evidence: framework content, decision model, education paths, and early concept guidance.

Speaker intent:

- Set the evidence boundary in speech: this case proves leadership mechanism, not shipped feature metrics.
- Present the case as strategic design leadership, not an AI product launch case.

Visual direction:

- Existing asset: `strategic-ai-mockup-hero.png`.

Source notes:

- `portfolio-site/app/work/strategic-ai-design-leadership/page.tsx`
- `portfolio-site/content/case-studies/strategic-AI/overview.md`

Claim safety:

- Safe.
- Do not claim shipped AI feature impact or adoption metrics.

Tags:

- Neutral
- Parloa
- Cleo

### AI-02 - Why This Work Existed

Time: 60 seconds

Visible copy:

- AI work was accelerating before shared standards existed.
- Teams needed clearer rules for visibility, explanation, review, and control.
- UX needed practical ways to prototype, discuss, and evaluate AI work.

Speaker intent:

- Avoid generic AI transformation language.
- Show the organizational problem precisely.

Visual direction:

- New visual: fragmented AI ideas -> shared decision language.

Source notes:

- `portfolio-site/content/case-studies/strategic-AI/facts.md`
- `portfolio-site/app/work/strategic-ai-design-leadership/page.tsx`

Claim safety:

- Safe.

Tags:

- Neutral
- Parloa
- Cleo

### AI-03 - My Role: Owned, Shaped, Enabled

Time: 75 seconds

Visible copy:

- Direct ownership: Visual AI Framework, AI design guidance, UX education paths, prototyping enablement.
- Influence: early AI concept direction, key flows, experience principles, senior stakeholder alignment.
- Enablement: practical ways for UX teams to prototype, critique, and discuss AI behavior.

Speaker intent:

- Make role boundaries explicit.
- This slide should lower skepticism before the framework details begin.

Visual direction:

- Three-column role map.

Source notes:

- `portfolio-site/content/case-studies/strategic-AI/facts.md`
- `portfolio-site/content/case-studies/strategic-AI/overview.md`
- `portfolio-site/app/work/strategic-ai-design-leadership/page.tsx`

Claim safety:

- Safe.
- Do not claim sole company AI strategy or shipped product impact.
- Keep concept names out of visible slides unless the interview context allows it.

Tags:

- Neutral
- Parloa
- Cleo

### AI-04 - The Core Principle

Time: 60 seconds

Visible copy:

- AI visibility should scale with its impact on user understanding, decisions, and control.

Speaker intent:

- Give the audience one memorable principle.
- Make the framework easy to understand before showing levels.

Visual direction:

- Existing safe asset if desired: `Principles.png`.
- New visual: impact/risk scale.

Source notes:

- `portfolio-site/content/case-studies/strategic-AI/facts.md`
- `portfolio-site/content/case-studies/strategic-AI/assets.md`

Claim safety:

- Safe.
- `Principles.png` is safe; `Visual Signals.png` should not be used as-is.

Tags:

- Neutral
- Parloa
- Cleo

### AI-05 - The Decision Model

Time: 90 seconds

Visible copy:

- Quiet assistance: normal edit or undo.
- Generated content: label, edit, regenerate, dismiss.
- Recommendations: explain, compare, override.
- Decision-shaping summaries: disclose, show sources, correct.
- AI actions: confirm, undo, audit.

Speaker intent:

- Show practical AI product judgment.
- Tie AI behavior to controls, not visual treatment alone.

Visual direction:

- Recreate the decision model as a clean table or ladder.
- New visual recommended for readability.

Source notes:

- `portfolio-site/app/work/strategic-ai-design-leadership/page.tsx`
- `portfolio-site/content/case-studies/strategic-AI/facts.md`

Claim safety:

- Safe when examples are generalized.

Tags:

- Neutral
- Parloa
- Cleo

### AI-06 - Decision Guidance In Practice

Time: 75 seconds

Visible copy:

- Low-impact help could stay lightweight.
- Generated and recommended outputs needed review paths.
- Decision-shaping summaries needed sources and correction.
- AI actions needed explicit confirmation.

Speaker intent:

- Move from principle to decision examples.
- For Parloa, this is the strongest customer-service AI bridge: escalation, control, and trust without claiming direct Parloa-domain experience.

Visual direction:

- New visual: four example cards.

Source notes:

- `portfolio-site/app/work/strategic-ai-design-leadership/page.tsx`
- `portfolio-site/content/case-studies/strategic-AI/facts.md`

Claim safety:

- Safe if examples remain generalized.

Tags:

- Neutral
- Parloa
- Cleo

### AI-07 - Abstracted Example: Decision-Shaping Summary

Time: 90 seconds

Visible copy:

- Product risk: a neutral-looking AI summary could influence judgment without making the source or limits clear.
- Direction: visible AI signal, source access, correction path, and review before action.

Speaker intent:

- Show how Eddie applied the framework to an actual product risk while protecting confidential context.
- Make the concept concrete enough for AI panels.

Visual direction:

- New visual: abstracted before/after flow with no product-specific details.
- Do not show confidential product screens.

Source notes:

- `portfolio-site/app/work/strategic-ai-design-leadership/page.tsx`
- `portfolio-site/content/case-studies/strategic-AI/facts.md`

Claim safety:

- Safe if kept abstract.
- Do not name unreleased concept details unless already approved for the interview context.

Tags:

- Neutral
- Parloa
- Cleo

### AI-08 - How Teams Judged AI Concepts

Time: 75 seconds

Visible copy:

- AI presence scale.
- Review criteria for input, output, uncertainty, control, and failure.
- Correction, override, and recovery paths.
- Prototype prompts that helped teams test behavior before production.

Speaker intent:

- Show the operating mechanism behind the framework.
- Make evaluation concrete without claiming shipped feature metrics.

Visual direction:

- Existing asset optional: `Presence Scale.png` only after reviewing labels.
- Safer: recreate a generic scale and review checklist as a new visual.
- New visual: concept review checklist with `input`, `output`, `uncertainty`, `control`, `failure`, `recovery`.

Source notes:

- `portfolio-site/app/work/strategic-ai-design-leadership/page.tsx`
- `portfolio-site/content/case-studies/strategic-AI/assets.md`

Claim safety:

- Avoid `Visual Signals.png` as-is.
- If using `Presence Scale.png`, review and abstract examples first.

Tags:

- Neutral
- Parloa
- Cleo

### AI-09 - Capability Building

Time: 75 seconds

Visible copy:

- UX education paths for AI-assisted workflows.
- Prototyping enablement across the broader product organization.
- Taskforce work around agentic coding and AI-assisted product-development change.
- Alignment with the CPO and senior stakeholders.

Speaker intent:

- Prove organizational leverage without claiming broad company AI ownership.
- Show senior influence through mechanism: education, prototyping, taskforce, stakeholder alignment.

Visual direction:

- New visual: framework -> concept reviews -> education -> prototyping capability.

Source notes:

- `portfolio-site/content/case-studies/strategic-AI/facts.md`
- `portfolio-site/content/case-studies/strategic-AI/overview.md`

Claim safety:

- Safe as user-provided and role-summary supported.
- No adoption metrics or business impact are supported.

Tags:

- Neutral
- Parloa
- Cleo

### AI-10 - Evidence Boundaries

Time: 60 seconds

Visible copy:

- Strongest evidence: framework content, reusable decision model, education and enablement scope, early concept guidance.
- Boundary: no shipped AI feature impact or adoption metrics are claimed here.

Speaker intent:

- Make the evidence-safe nature of the case explicit.
- Protect against the case sounding like abstract AI strategy.

Visual direction:

- Evidence matrix: direct outputs / influence / not claimed.

Source notes:

- `portfolio-site/content/case-studies/strategic-AI/facts.md`
- `portfolio-site/content/case-studies/strategic-AI/assets.md`

Claim safety:

- Safe.

Tags:

- Neutral
- Parloa
- Cleo

### AI-11 - Role Fit

Time: 60 seconds

Visible copy:

- AI product judgment: visibility, control, review, failure recovery.
- Systems thinking: shared standards for ambiguous product behavior.
- Senior influence: turning unclear technology shifts into usable decision criteria.

Speaker intent:

- Translate the case into role fit.
- For Cleo, emphasize platform coherence and AI-native interaction.
- For Parloa, emphasize customer understanding, trust, controls, and practical execution.

Visual direction:

- Three role-fit cards.

Source notes:

- `recruitment/portfolio-positioning.md`
- `portfolio-site/content/reference-pack/faang-ai-case-study-presentation-research-brief.md`

Claim safety:

- Safe as synthesis.

Tags:

- Neutral
- Parloa
- Cleo

## Optional Closing Slides

Use these only when presenting more than one case in the same interview.

### CL-01 - Cross-Case Synthesis

Time: 90 seconds

Visible copy:

- New Search: a search reset under uneven platform evidence.
- Declutter: consumer craft and prioritization on a crowded marketplace surface.
- Strategic AI: reusable standards for AI visibility, review, and control.

Speaker intent:

- Do the work of interpretation for the panel.
- Make the case selection feel intentional.

Visual direction:

- Three-case synthesis grid.

Source notes:

- `recruitment/portfolio-positioning.md`

Claim safety:

- Safe.

Tags:

- Neutral
- Parloa
- Cleo

### CL-02 - Role-Fit Bridge

Time: 60 seconds

Visible copy:

- I am strongest where the product surface looks simple, but the system behind it is complex.
- I bring product judgment, hands-on design craft, careful evidence habits, and AI design leadership grounded in review and control.

Speaker intent:

- Close by tying experience to the target company.
- Adapt live based on interview target.

Visual direction:

- Minimal close slide.

Source notes:

- `recruitment/messaging.md`
- `recruitment/company-prioritisation.md`

Claim safety:

- Safe.

Tags:

- Neutral
- Parloa
- Cleo

## Adaptation Notes

### Parloa Emphasis

Use this framing:

- Lead with consumer craft and decision clarity.
- Make Declutter feel especially relevant: the card is a compact, high-stakes surface where users need to understand options quickly.
- Use Strategic AI to show trust, control, review, and failure recovery for AI-assisted experiences.
- Use New Search as support for intent expression and guidance in a complex decision space.
- Safely bridge to multimodal/AI-adjacent judgment through signal clarity, source access, review paths, image/information hierarchy, and recovery from uncertain system output.
- Emphasize practical execution: shipped product surfaces, validation, stakeholder tradeoffs, and usable standards.

Avoid:

- Claiming direct customer-support AI experience.
- Overfitting marketplace evidence to contact-center workflows.
- Making the AI case sound like abstract governance rather than product execution.
- Saying "voice AI", "conversation automation", or "agentic customer support" as direct experience unless Eddie chooses to discuss adjacent reasoning live.

Suggested Parloa picks if presenting more than one module:

1. Declutter
2. Strategic AI
3. New Search

Live bridge line:

> The relevant overlap is designing moments where the system has complexity behind the interface, and the user needs clear options, trustworthy guidance, and control.

### Cleo Emphasis

Status: archived reference only after the 2026-05-12 Cleo rejection.

Use this framing only if a materially better-fit Cleo role appears:

- Lead with systems thinking and IA.
- Make New Search the strongest case: search, filter structure, taxonomy, cross-platform baseline, and evidence calibration.
- Use Strategic AI for AI-native interaction standards and platform coherence.
- Use Declutter to show craft and decision-surface discipline.

Avoid:

- Over-indexing on automotive details.
- Treating AI as the only headline.
- Letting Declutter sound like simple visual cleanup.

Suggested Cleo picks if presenting more than one module:

1. New Search
2. Strategic AI
3. Declutter

Live bridge line:

> The strongest relevance is how I structure complex decision systems: what users express, what the product infers, what stays visible, and how the experience stays coherent across surfaces.

## Appendix Map

Use appendices only for Q&A. Do not crowd the main flow.

Recommended appendix groups:

- Evidence quality by case
- Metric definitions and caveats
- New Search platform timeline
- Declutter platform decision matrix
- Strategic AI decision model
- Safe visual assets and visual placeholders
- Role and ownership clarification

## Evidence Matrix

### New Search

Measured or reported evidence:

- iOS benchmark selected a winning direction by 28 Aug 2024.
- iOS benchmark commonly summarized around +5-6% list-page enquiry/leads, while total DPVs stayed stable.
- iOS rollout communication on 02 Oct 2024 stated broad rollout across AutoScout24 markets and white labels.
- Android AutoSave evidence includes +12% Germany new-user enquiry/conversion signal and stable dealer/private leads in Germany and Italy, but launch confirmation is not clean in the visible corpus.
- Web launch communication on 05 Feb 2026 states Germany and Italy desktop/mWeb live, with Italy desktop dealer leads +7% from List Page and mWeb leads/DPVs stable.

Forecast/context only:

- Strategy material modeled expected upside for New Baseline Search and related filter work.

Do not claim:

- One simultaneous all-platform launch.
- One universal search impact metric.
- Clean Android post-launch impact.
- Exact iOS uplift as one definitive number without caveat.

### Declutter

Measured or reported evidence:

- IT mWeb no-links test: Slightly Decluttered +8% total dealer leads from List Page; Most Decluttered +12%.
- DE partner-link testing: decluttered variants improved dealer-lead-related signals; no-links protected private-performance metrics better; with-links preserved Check24 better; finance remained a tradeoff.
- Desktop No Gallery: DE actual dealer DPVs +6%, dealer leads stable; IT actual dealer DPVs -2%, dealer leads stable.
- Gallery desktop variants materially weakened actual dealer DPVs while dealer leads stayed stable.
- Final platform logic: mobile web No Gallery, desktop No Gallery, apps Gallery; finance below price, insurance separated above seller information.

Forecast/context only:

- +25% dealer DPVs and +3% dealer leads are forecast/user-clarified rollout uplift, not clean measured all-market impact.

Do not claim:

- Declutter was just card cleanup.
- One universal winning card pattern.
- Exact measured all-market post-rollout impact from the retained source set.
- Ownership of analytics, partner negotiation, or rollout operations.

### Strategic AI

Direct evidence:

- Visual AI Framework existed and included principles, AI presence scale, visibility/control guidance, and visual signal guidance.
- Framework direction: AI visibility should scale with impact on user understanding, decisions, and control.
- Role summary and user context support ownership of framework, AI education/enablement, prototyping enablement, taskforce leadership, and senior stakeholder alignment.
- Live page supports abstracted product-direction example around decision-shaping AI summaries.

Weak or unavailable evidence:

- Shipped AI feature metrics.
- Adoption metrics.
- Business impact metrics.
- Formal company-wide integration status.

Do not claim:

- Sole company AI strategy ownership.
- Shipped conversational AI feature impact.
- Publicly shareable concept screens or internal AI roadmaps.
- Direct authorship of internal builders decks unless separately verified.

## Visual Backlog

Existing visuals to use:

- New Search hero/video and app/desktop before-after assets.
- Declutter desktop/mobile/app before-after assets.
- Strategic AI hero and `Principles.png`.

New visuals worth creating:

- Case opening synthesis grid.
- Search/list/detail/enquiry funnel map.
- New Search platform evidence timeline.
- New Search taxonomy/intent-expression sketch.
- Declutter competing-demands card map.
- Declutter no-links/with-links decision matrix.
- Declutter reported vs actual DPV explanation.
- Strategic AI decision ladder.
- Strategic AI framework-to-enablement operating model.

Visuals to avoid:

- Confidential AI concept screens.
- `Visual Signals.png` as-is.
- Raw internal dashboards or source screenshots.
- Decorative process canvases without decision value.
