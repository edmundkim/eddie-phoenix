# Case Study Presentation Slide Content Working Document

## Clean Handoff For Continuing Elsewhere

Use this section to restart the case study presentation work in a fresh Codex folder/thread.

### Current Goal

- Build Eddie Kim's case-study presentation around three works: New Search, Declutter, and Strategic AI.
- The presentation should feel sharp, source-grounded, concise, and senior.
- The goal is not to show every process step. The goal is to show big decisions, evidence, tradeoffs, and impact.
- The talk should make Eddie feel like a Principal Product Designer who clarifies messy product areas, helps teams make hard calls, and leaves behind stronger systems.

### Core Positioning

- Overall thesis: Eddie turns messy product systems into clearer decisions.
- Intro / philosophy slide direction:
  - Title: "How I think about design"
  - Principle 1: "Diagnose before designing"
    - Meaning: find the real problem, the decision underneath it, and the tradeoff the team needs to face.
  - Principle 2: "Make complexity navigable"
    - Meaning: turn messy systems into clearer paths for people to compare, choose, trust, or move forward.
  - Principle 3: "Create leverage beyond the screen"
    - Meaning: leave behind patterns, principles, or foundations that help teams make better decisions later.
  - Speaker idea: across these projects, the visible experience is only part of the problem. The work is to diagnose what is really at stake, make complexity easier to act on, and create something reusable so the team is not solving the same problem from scratch again.
- Personality should be a thin thread throughout, not a heavy intro. Let personality show through phrasing, judgment, and the way Eddie explains tradeoffs.
- Lowercase titles can work visually, but sentence case is safer for a hiring presentation. If using lowercase, keep it intentional and consistent.
- Motion / prototype recordings are useful when they prove behavior, not as decoration. Best candidates: New Search interactions, platform differences, before/after flows, and safe AI concept behavior. Keep clips short and always have static fallback screenshots.

### Source And Evidence Rules

- Current repo: `/Users/edkim/Documents/00_Eddie/Employment/Portfolio/phoenix`
- GitHub remote: `https://github.com/edmundkim/eddie-phoenix.git`
- Main working doc: `recruitment/case-study-slide-content-working.md`
- Primary source areas:
  - `portfolio-site/content/case-studies/`
  - `portfolio-site/app/work/`
  - `portfolio-site/components/`
  - `portfolio-site/TONE-OF-VOICE.md`
- Do not rely on old presentation/manuscript assumptions unless explicitly asked to compare later.
- Do not invent metrics, dates, ownership, shipped status, business impact, or project scope.
- Keep weak claims qualified as forecasts, user-provided context, or narrower signals.
- Avoid generic UX jargon, corporate phrasing, and overly technical role language.

### New Search Current Framing

- Setup: fragmented app/web search created too much complexity in a core journey.
- Decision 1: prove the reset was necessary.
  - V1 exposed too much filter structure and weak hierarchy.
  - V2 had more than a year of work behind it, but the benchmark failed on key business KPIs.
  - Eddie pushed with a PM partner for the test that made the reset unavoidable.
  - Speaker context: this was hard because the team had invested heavily in V2 and there was emotional baggage.
- Decision 2: make filters easier to scan and refine.
  - Move away from the "open-face sandwich" of filters: hard to scan, scroll, and refine, with multiple inconsistent inputs.
  - Rebuild the IA with clearer grouping, consistent inputs, and a calmer visual system.
- Decision 3 and 4 still need more refinement.
  - User suggested one decision around auto-save vs save/apply on apps.
  - User suggested one web decision around mWeb staying similar to apps while desktop moved to a modal experience.
- Impact:
  - iOS: about +6% leads from the list page, with DPVs stable.
  - Android: +12% new-user lead signal in Germany.
  - Web: +7% total dealer leads from the list page on desktop in Italy.
  - Bigger win: a scalable foundation for faster experiments and future iteration.
- Evidence caution: iOS is the cleanest proof point. Android and web are useful but narrower signals.

### Declutter Current Framing

- Setup / problem:
  - The list card had too many jobs.
  - Buyers needed to scan, compare, and decide quickly.
  - The same surface carried dealer, partner, finance, insurance, and media goals.
  - Based on discovery/research, this was a problem of decision friction and weak hierarchy, not just visual clutter.
- Decision 1: take the bigger swing.
  - The team chose to test a more radical simplification rather than a safer cleanup.
  - Early mobile-web testing favored the stronger reduction.
  - That bigger swing later created alignment work around what to keep, restore, or adapt.
- Decision 2: decide what earned space.
  - The card could not carry every business surface equally.
  - Dealer, finance, insurance, and media goals competed with scanability.
  - The team tested which entry points deserved space, size, and placement.
- Decision 3: separate activity from progress.
  - Gallery made the card feel richer.
  - Desktop evidence showed richer interaction could weaken actual detail-page progression.
  - Movement to detail was treated as the stronger signal.
- Decision 4: let platforms diverge.
  - Mobile web: no gallery.
  - Desktop: no gallery.
  - iOS and Android: gallery.
  - The direction followed platform evidence over symmetry.
- Impact slide needs careful metric handling.
  - First fully/most-decluttered no-links experiment against baseline:
    - The strongest source-safe readout is double-digit growth in total leads and dealer leads from list page.
    - DE mWeb first test is summarized as +130-140% total DPVs and dealer DPVs from list page.
    - Winning version did not include finance or insurance links.
    - Finance conversions were described as stable despite removing those links.
    - The DPV uplift reportedly increased ad impressions, worth about 200K EUR.
    - Exact lead percentage for the first DE fully decluttered test is not cleanly isolated in retained source notes.
  - Later / separate metrics:
    - IT mWeb: +8% dealer leads from list page for lighter declutter, +12% for stronger no-links variant.
    - Same stronger IT variant: +26% ad impressions and +16% ad clicks, with ad conversion rate down 4.5%.
    - Desktop: no-gallery safer; gallery variants reduced actual dealer DPVs by 9% in DE and 27% in IT.
    - Broader rollout forecast: +25% dealer DPVs and +3% dealer leads across markets.
  - Do not mix first-test, IT mWeb, and later DE partner-link metrics without labeling them.

### Strategic AI Current Framing

- Treat this as a supporting standalone case, not a classic shipped-metrics case.
- The strongest story is AI design leadership: preparing the org, turning research into principles, creating visual/product guidance, and guiding real feature teams.
- Current slide structure:
  - Slide 16: Strategic AI: make AI usable before it scales.
    - AI was no longer just a future concept; it was entering product, process, and leadership conversations.
    - There was a bigger push to bring AI-powered features into customer experiences.
    - Without shared principles, AI patterns could fragment quickly across teams.
    - The opportunity was to turn uncertainty into responsible product guidance.
  - Slide 17: Build readiness before AI became urgent.
    - Eddie led UX AI Guild research and education across emerging GenAI patterns.
    - The work helped UX and senior stakeholders understand what was coming.
    - It created the foundation for more practical AI product guidance.
  - Slide 18: Turn research into principles.
    - Eddie contributed to the Responsible AI Communication Framework.
    - Eddie owned the four research-backed principles underneath it.
    - The principles translated AI risk into visibility, review, and control.
    - Be precise: Eddie was not the core author of the initial Responsible AI Communication Framework.
  - Slide 19: Make AI visible when it matters.
    - Low-risk assistance could stay quiet.
    - Generated, summarized, or recommended content needed clearer signals.
    - Visibility and control scaled with impact on what users understood or chose.
  - Slide 20: Apply it to real product work.
    - Visual signals mapped AI roles to labels, icons, states, and controls.
    - Eddie used the guidance with Conversational AI Search and Lead Assistant teams.
    - Concept reviews became more specific before patterns hardened.
    - `Visual Signals.png` and confidential concept UI are allowed for this presentation, per user.
    - AutoScout24 Intelligence product-branding / design-system work is early; mention only as emerging context, not a proof point.
  - Slide 21: What Strategic AI proved.
    - CPO and VP Design aligned on the framework direction.
    - Teams got shared language for AI visibility, review, and control.
    - Conversational AI Search and Lead Assistant had clearer product-design guidance.
    - Eddie is now applying the work directly as the Apps designer for Conversational AI Search.
- Conversational AI Search Apps work has just started. It can be included later as a WIP/current application slide when there is a safe artifact, but not as completed impact.
- Lead Assistant is the current naming the user gave for the second main AI feature; older repo notes may say Lead Enrichment AI.
- Avoid claiming shipped user/business metrics for Strategic AI.

### Visual / Figma Slide Guidance

- User has a rough first pass in Figma Slides.
- The "How I think about design" slide screenshot showed a minimal layout with a large left title and three right-side numbered lines.
- Lowercase title is not weird visually, but sentence case is safer and more polished for hiring.
- Use motion/prototype recordings only to show behavior:
  - New Search: highly valuable for search/filter behavior, selected choices, auto-save/apply, platform differences.
  - Declutter: useful for scroll, scan, gallery/no-gallery, and platform differences, but static before/after may carry much of the proof.
  - Strategic AI: valuable only if safe; show signals, review, or control behavior, not confidential product detail unless approved.
- Use short clips, 10-20 seconds max, with static fallback.

### Copy-Ready Prompt For A New Codex Thread

```markdown
Task:
- Continue building Eddie Kim's case-study presentation from the existing working document.
- Start by reading `/Users/edkim/Documents/00_Eddie/Employment/Portfolio/phoenix/recruitment/case-study-slide-content-working.md`, especially the "Clean Handoff For Continuing Elsewhere" section and the "Final Slide Outline".
- Then inspect the relevant source material in the portfolio repo before changing content:
  - `portfolio-site/content/case-studies/`
  - `portfolio-site/app/work/`
  - `portfolio-site/TONE-OF-VOICE.md`

Context:
- Presentation covers New Search, Declutter, and Strategic AI.
- Goal is a sharp, source-grounded case-study presentation for hiring/interview contexts.
- The deck should highlight big decisions, tradeoffs, evidence, and impact.
- Current positioning:
  - Overall: Eddie turns messy product systems into clearer decisions.
  - New Search: reset a fragmented search system and create a scalable foundation.
  - Declutter: simplify a crowded decision surface while balancing buyer progress and commercial surfaces.
  - Strategic AI: prepare teams before AI patterns scale; translate research into principles, visual signals, and product guidance.
- The user is working in Figma Slides and may ask for slide-by-slide copy, visual structure, motion/prototype guidance, or source validation.

Constraints:
- Do not invent metrics, ownership, dates, shipped status, or impact.
- Separate confirmed facts from user-provided context and interpretation.
- Do not rely on older presentation manuscripts or outlines unless the user explicitly asks to compare.
- Avoid generic UX jargon, corporate phrasing, and overly technical role language.
- Keep Strategic AI framed as leadership, readiness, principles, visual signals, and feature guidance; do not imply shipped product metrics.
- Use exact project caveats:
  - New Search: iOS is the cleanest proof point; Android and web are narrower signals.
  - Declutter: do not mix first fully-decluttered DE test metrics with later IT mWeb or DE partner-link metrics.
  - Strategic AI: Eddie contributed to the Responsible AI Communication Framework but was not the core initial author; he owned the four principles underneath and visual signals/product guidance.

Done when:
- The next requested presentation section is updated or drafted in a way that is concise, impactful, and source-safe.
- Any changes to the working doc keep the top final outline and lower notes in sync.
- Any uncertain claim is qualified or flagged.

Verification:
- Run a short validation pass after substantive changes:
  - Does the content match source material and user-provided clarifications?
  - Does it avoid overclaiming?
  - Is it clear enough for a non-technical hiring audience?
  - Does it preserve the presentation's throughline: clarify decisions, make complexity navigable, leave stronger foundations?
```

### Remaining Open Threads

- New Search Decision 3 and Decision 4 still need refinement around:
  - auto-save vs save/apply on apps
  - mWeb staying similar to apps while desktop moved toward a modal experience
- Declutter impact slide should likely be revisited to avoid mixing experiment phases.
- Strategic AI may later include a WIP Apps Conversational AI slide when safe artifacts exist.
- Figma slide visuals, exact titles, and speaker-note pacing still need polish.

## Final Slide Outline

Use this section as the clean presentation outline. The working process, variations, prompt notes, and validation details start after this section.

### Slide 2: How I Think

Title:
- I turn messy systems into clearer decisions

Slide content:
- Find the decision users are trying to make.
- Name the constraints the product cannot ignore.
- Decide what to simplify, keep, or split by surface.

Speaker note:
- The throughline in this talk is decision quality: how I clarify the problem, choose what matters, and help teams move.

### Slide 3: What We Will Cover

Title:
- Three examples, same pattern

Slide content:
- New Search: reset a fragmented search system.
- Declutter: simplify a crowded decision surface.
- Strategic AI: prepare teams before AI patterns scale.

Speaker note:
- I am going to focus on the decisions that changed the work.

### Slide 4: New Search Setup

Title:
- New Search: too many fragments in a core journey

Slide content:
- App and web search patterns had drifted.
- Buyers needed clearer ways to narrow inventory and review choices.
- The team needed a stronger baseline it could test, launch, and extend.

Speaker note:
- My role was strongest in the app filter direction and the baseline decisions around how the model should work across surfaces.

### Slide 5: New Search Decision 1

Title:
- Decision 1: prove the reset was necessary

Slide content:
- V1 exposed too much filter structure and weak hierarchy.
- V2 had more than a year of work behind it, but the benchmark failed on key business KPIs.
- I pushed with my PM partner for the test that made the reset unavoidable.

Speaker note:
- This was hard because V2 carried emotional baggage. The team had invested heavily in it, and the test became the nail in the coffin: we could stop defending the direction and build a cleaner baseline.

### Slide 6: New Search Decision 2

Title:
- Decision 2: make filters easier to scan and refine

Slide content:
- The old experience exposed too many filter controls at once.
- Buyers had to scan, scroll, and refine through inconsistent inputs.
- We rebuilt the IA with clearer grouping, consistent inputs, and a cleaner visual system.

Speaker note:
- We moved away from an open-face sandwich of filters toward a scalable filter architecture: easier to scan, easier to refine, and calmer to look at.

### Slide 7: New Search Decision 3

Title:
- Decision 3: same logic, different behavior

Slide content:
- Keep the product model consistent across surfaces.
- Adapt interaction details to the platform.
- Let Android and web extend the foundation with platform-specific interaction choices.

Speaker note:
- We reused the decision logic and redesigned the interaction for each surface.

### Slide 8: New Search Decision 4

Title:
- Decision 4: ship the web baseline first

Slide content:
- Web needed a useful first release before the full future vision.
- The team launched a simpler baseline first.
- That created a measurable foundation for later improvements.

Speaker note:
- The team made the first web version useful and extendable, then left richer enhancements for later.

### Slide 9: New Search Impact

Title:
- What New Search proved

Slide content:
- iOS: about +6% leads from the list page, with DPVs stable.
- Android: +12% new-user lead signal in Germany.
- Web: +7% total dealer leads from the list page on desktop in Italy.
- Bigger win: a scalable foundation for faster experiments and future iteration.

Speaker note:
- I would present this as a staged product-system outcome. iOS is the cleanest proof point; Android and web are useful but narrower signals. The foundation mattered because it reduced structural complexity and made future testing easier.

### Slide 10: Declutter Setup

Title:
- Declutter: a small card with too many jobs

Slide content:
- Buyers used the card to scan, compare, and decide whether to open detail.
- The same space carried dealer, partner, finance, insurance, and media goals.
- Simplifying it meant deciding what deserved attention.

Speaker note:
- This mattered because the list page is one of the highest-traffic decision surfaces in the product. Even small hierarchy changes could affect buyer progress and commercial outcomes.

### Slide 11: Declutter Decision 1

Title:
- Decision 1: take the bigger swing

Slide content:
- We chose to test a more radical simplification.
- Early mobile-web testing favored the stronger reduction.
- That bigger swing created later alignment work around what to keep, restore, or adapt.

Speaker note:
- This was the first real fork in the road. We could make a safer cleanup, or we could test a version that challenged how much the card needed to carry. The stronger direction gave us momentum, but it also created the later work: partner concerns, rollout alignment, and some changes that needed to be reintroduced or adapted.

### Slide 12: Declutter Decision 2

Title:
- Decision 2: decide what earned space

Slide content:
- The card could not carry every business surface equally.
- Dealer, finance, insurance, and media goals competed with scanability.
- We tested which entry points deserved space, size, and placement.

Speaker note:
- This was less about removing links and more about deciding what deserved attention. Partner links protected important outcomes like Check24, but finance still needed iteration, so the card had to balance buyer clarity with commercial responsibility.

### Slide 13: Declutter Decision 3

Title:
- Decision 3: separate activity from progress

Slide content:
- Gallery made the card feel richer.
- Desktop evidence showed richer interaction could weaken actual detail-page progression.
- We treated movement to detail as the stronger signal.

Speaker note:
- This was the measurement lesson: activity on the card was not automatically progress. If richer previews kept people interacting but weakened movement to detail, the team had to privilege the deeper buyer action.

### Slide 14: Declutter Decision 4

Title:
- Decision 4: let platforms diverge

Slide content:
- Mobile web: no gallery.
- Desktop: no gallery.
- iOS and Android: gallery.
- The direction followed platform evidence over symmetry.

Speaker note:
- This evidence supported platform-specific card behavior instead of one universal rule.

### Slide 15: Declutter Impact

Title:
- What Declutter proved

Slide content:
- IT mWeb: +8% dealer leads from list page for lighter declutter, +12% for the stronger no-links variant.
- Same stronger variant: +26% ad impressions and +16% ad clicks, with ad conversion rate down 4.5%.
- Desktop: no-gallery was safer; gallery variants reduced actual dealer DPVs by 9% in DE and 27% in IT.
- Broader rollout forecast: +25% dealer DPVs and +3% dealer leads across markets.

Speaker note:
- I would present this as impact with tradeoffs, not a clean every-metric win. Finance still needed work, desktop gallery underperformed on actual DPVs, and the broader cross-market number is a forecast and user-approved presentation claim from outside the retained source set.

### Slide 16: Strategic AI Setup

Title:
- Strategic AI: make AI usable before it scales

Slide content:
- AI was no longer just a future concept; it was entering product, process, and leadership conversations.
- There was a bigger push to bring AI-powered features into customer experiences.
- Without shared principles, AI patterns could fragment quickly across teams.
- The opportunity was to turn uncertainty into responsible product guidance.

Speaker note:
- This case is about a different kind of impact: helping the organisation move from scattered AI curiosity toward clearer judgment, reusable guidance, and real feature application before patterns hardened.

### Slide 17: Strategic AI Build Readiness

Title:
- Build readiness before AI became urgent

Slide content:
- I led UX AI Guild research and education across emerging GenAI patterns.
- The work helped UX and senior stakeholders understand what was coming.
- It created the foundation for more practical AI product guidance.

Speaker note:
- This is the upstream leadership layer: before the feature work became concrete, I helped the organisation build literacy and shared judgment around AI.

### Slide 18: Strategic AI Principles

Title:
- Turn research into principles

Slide content:
- I contributed to the Responsible AI Communication Framework.
- I owned the four research-backed principles underneath it.
- The principles translated AI risk into visibility, review, and control.

Speaker note:
- Be precise on authorship here: I was not the core author of the initial Responsible AI Communication Framework. My stronger ownership was the research-backed principles beneath it and the product guidance that followed.

### Slide 19: Strategic AI Visual Signals

Title:
- Make AI visible when it matters

Slide content:
- Low-risk assistance could stay quiet.
- Generated, summarized, or recommended content needed clearer signals.
- Visibility and control scaled with impact on what users understood or chose.

Speaker note:
- This is where the principle became practical: not every AI moment needs to be loud, but AI should be visible and controllable when it shapes interpretation, recommendation, personalization, or decision-making.

### Slide 20: Strategic AI Product Guidance

Title:
- Apply it to real product work

Slide content:
- Visual signals mapped AI roles to labels, icons, states, and controls.
- I used the guidance with Conversational AI Search and Lead Assistant teams.
- Concept reviews became more specific before patterns hardened.

Speaker note:
- This is where `Visual Signals.png` or a confidential concept UI can help: show how research and principles moved into concrete feature guidance. The AI product-branding work for AutoScout24 Intelligence is worth mentioning as an emerging design-system thread, but not as a major proof point yet.

### Slide 21: Strategic AI Impact

Title:
- What Strategic AI proved

Slide content:
- CPO and VP Design aligned on the framework direction.
- Teams got shared language for AI visibility, review, and control.
- Conversational AI Search and Lead Assistant had clearer product-design guidance.
- I am now applying the work directly as the Apps designer for Conversational AI Search.

Speaker note:
- Keep user and business metrics out of this section. The value sits in organisational readiness, reviewed guidance, clearer feature critique, and practical application. The Apps work has just started, so present it as current application rather than completed impact.

### Slide 22: Close

Title:
- The pattern across the work

Slide content:
- New Search: clearer foundations for complex search.
- Declutter: sharper tradeoffs on a crowded decision surface.
- Strategic AI: prepared teams before AI patterns scaled.
- Clarify the problem and help teams make the hard choice.

Speaker note:
- Across the work, I am trying to make the important decision easier to see: for users, for product teams, and for the business.

## Working Process And Validation Notes

### Clean Outline Prompt

```markdown
Task:
- Add a clean final slide outline to the top of `recruitment/case-study-slide-content-working.md`.

Context:
- The document already contains slide-by-slide variations, selected bits, revisions, source notes, and validation passes.
- The user wants the final content separated from the thinking process.

Constraints:
- Put the clean outline before all working process notes.
- Include only the final slide title, slide content, and speaker note for slides 2-22.
- Keep all process notes, variations, and validation details below the clean outline.
- Do not change the final slide content unless needed for clarity or source safety.

Done when:
- The top of the document can be read as a standalone slide outline.
- The working process starts below a clear divider.
- A validation pass confirms the clean outline is complete and separated from the process notes.
```

### Clean Outline Prompt Validation

| Question | Answer | Adjustment |
|---|---|---|
| Does the prompt directly answer the request? | Pass. It asks for a clean final outline at the top of the document. | None. |
| Does it preserve the existing thinking process? | Pass. It keeps process notes below the outline. | None. |
| Is the expected format clear? | Pass. It specifies title, slide content, and speaker note for slides 2-22. | None. |
| Is the stopping point clear? | Pass. The task stops after insertion and validation. | None. |

### Clean Outline Val Pass

| Question | Answer | Adjustment |
|---|---|---|
| Is the final outline at the top of the document? | Pass. It starts immediately after the document title. | None. |
| Does the clean outline cover slides 2-22? | Pass. The top section contains 21 slide sections. | None. |
| Is the thinking process separated below the outline? | Pass. Working notes start under `Working Process And Validation Notes`. | None. |
| Does the clean outline exclude variations, drafts, and validation markers? | Pass. No process markers appear before the working-process divider. | None. |
| Does the clean outline preserve the post-review final content? | Pass. It reuses the final slide titles, slide content, and speaker notes. | None. |

Working file for constructing the case-study presentation slide by slide.

Scope: slides 2-22 only, per request.

Selected projects:
- New Search
- Declutter
- Strategic AI

Primary source material:
- `portfolio-site/content/case-studies/new-search/facts-case-study.md`
- `portfolio-site/content/case-studies/declutter-LP/facts.md`
- `portfolio-site/content/case-studies/strategic-AI/facts.md`
- `portfolio-site/app/work/new-search/page.tsx`
- `portfolio-site/app/work/declutter-list-page/page.tsx`
- `portfolio-site/app/work/strategic-ai-design-leadership/page.tsx`
- `portfolio-site/TONE-OF-VOICE.md`

Do not use:
- Existing presentation outline or manuscript documents.
- Previously generated deck copy as source material.

User clarifications:
- Exact all-platform or all-market impact claims where evidence is weak are allowed for this presentation.
- Confidential AI concept UI and `Visual Signals.png` are allowed for this presentation.

## Skill Routing

Task:
- Construct the presentation content slide by slide, from slide 2 through the end, with variations, selection, revisions, and validation.

Recommended skills used:
- `$skill-router`: chose the smallest useful workflow before drafting.
- `$codex-library`: pulled validated guidance for case-study storytelling, design-decision communication, strategic clarity, and concise memorable messaging.
- `$prompt`: turned the work into a clear execution prompt.
- `$val`: validated the prompt before running it and validates each slide against the full presentation.

Codex Library guidance used:
- `How to Get a UX Design Job`: case studies should show thinking, constraints, decisions, outcomes, and tradeoffs.
- `Articulating Design Decisions`: decisions should connect to user goals, constraints, options, evidence, and tradeoffs.
- `Good Strategy Bad Strategy`: strong strategy needs diagnosis, a guiding policy, and coherent action.
- `Made to Stick`: keep each idea concrete, credible, and repeatable.
- `Don't Make Me Think`: cut needless words and reduce cognitive load.

## Validated Working Prompt

```markdown
Task:
- Construct slide content for slides 2-22 of Eddie Kim's case-study presentation.
- Work consecutively, one slide at a time, without skipping steps.
- For each slide, create 3 content variations, select the strongest pieces, assemble a draft, revise it 2 times if needed, then run a validation pass against the rest of the presentation.

Context:
- The presentation covers New Search, Declutter, and Strategic AI.
- The presentation should be concise, sharp, digestible, and impact-oriented.
- The most important throughline is big decisions that shaped the experience.
- Each project should be presentable in under 15 minutes.
- Use the portfolio repo and case-study source files as ground truth.
- Existing presentation-specific docs should not be used.

Constraints:
- Start at slide 2.
- Do not invent metrics, dates, ownership, impact, or project details.
- Keep language plain, senior, and non-corporate.
- Avoid overly technical role language and generic UX jargon.
- Separate source-backed claims from user-allowed presentation claims where needed.
- Do not over-caveat the actual slide copy, but preserve evidence notes in the working document.

Done when:
- Slides 2-22 each have variations, selected bits, final slide content, speaker notes, and a validation pass.
- The full sequence feels coherent and non-repetitive.
- New Search, Declutter, and Strategic AI each have a clear setup, decision slides, and impact slide.
- The content is ready to move into slide design or manuscript drafting.
```

### Prompt Validation Before Running

| Question | Answer | Adjustment |
|---|---|---|
| Does the prompt directly answer the user's request? | Pass. It asks for slide-by-slide construction from slide 2 through 22. | None. |
| Does it require variations, selection, revision, and per-slide validation? | Pass. Those steps are explicit. | None. |
| Does it protect source safety? | Pass. It forbids invented facts and separates source-backed claims from user-allowed presentation claims. | None. |
| Does it keep the output practical rather than over-engineered? | Pass. The deliverable is a working slide-content document, not a full deck build. | None. |
| Does it keep the audience and tone clear? | Pass. It specifies concise, plain, senior language. | None. |

Prompt status: validated and run.

## Objective Review Prompt

```markdown
Task:
- Review `recruitment/case-study-slide-content-working.md` objectively against the source material and revise it where needed.

Context:
- The deck content covers New Search, Declutter, and Strategic AI.
- The working document should stay concise, source-safe, and presentation-facing.
- The strongest source files are the project facts files, the live case-study page implementations, and `portfolio-site/TONE-OF-VOICE.md`.

Constraints:
- Do not use the existing Phoenix presentation outline or manuscript documents as source material.
- Do not invent ownership, metrics, dates, shipped status, or business impact.
- Keep user-approved weak-evidence presentation claims, but label or phrase them so they do not read as stronger than the evidence.
- Use `$stop-slop` to remove predictable AI phrasing from final slide content and speaker notes.

Done when:
- Any inaccurate, overclaimed, vague, or slop-prone slide content has been revised.
- The document records the review findings and final validation pass.
```

### Objective Review Prompt Validation

| Question | Answer | Adjustment |
|---|---|---|
| Does the prompt ask for the actual review task? | Pass. It asks for objective accuracy and source-material review. | None. |
| Does it name the artifact and sources? | Pass. It names the working document, facts files, page implementations, and tone guide. | None. |
| Does it preserve the user's constraints? | Pass. It excludes prior presentation docs and preserves user-approved weak-evidence claims with clearer phrasing. | None. |
| Does it include stop-slop? | Pass. It explicitly applies stop-slop to final slide content and speaker notes. | None. |
| Is the stopping point clear? | Pass. Revise only inaccurate, overclaimed, vague, or slop-prone content. | None. |

Prompt status: validated and run.

## Slide 2 - How I Think

Purpose:
- Warm the audience into the lens for the rest of the deck.
- Establish that the talk is about judgment, not a portfolio tour of screens.

Variations:
1. "I work where product complexity becomes user confusion." Focus: find the confusing decision, simplify the path, keep the business constraints visible.
2. "My strongest work turns messy systems into clearer decisions." Focus: diagnose the mess, choose what matters, create a foundation teams can build on.
3. "I design by asking what decision needs to get easier." Focus: user decision, product constraint, evidence, tradeoff.

Best bits selected:
- "Messy systems into clearer decisions" is the strongest repeatable framing.
- "What decision needs to get easier" keeps the language human.
- "Constraints the product cannot ignore" sets up business tradeoffs without sounding corporate.

Draft V1:
- Title: "I turn messy systems into clearer decisions"
- Bullets:
  - Find the decision users are trying to make.
  - Name the constraints the product cannot ignore.
  - Use evidence to decide what to simplify, keep, or split by platform.

Revision V2:
- Tightened "use evidence" so it sounds less like research-process language and more like design judgment.

Final slide content:
- Title: "I turn messy systems into clearer decisions"
- Body:
  - Find the decision users are trying to make.
  - Name the constraints the product cannot ignore.
  - Decide what to simplify, keep, or split by surface.
- Speaker note:
  - "The throughline in this talk is decision quality: how I clarify the problem, choose what matters, and help teams move."

Val pass:
- Source-safe: Pass. This is positioning, not a factual project claim.
- Fits deck flow: Pass. It frames all three projects without previewing too much detail.
- Tone: Pass. Plain, senior, and not jargon-heavy.

## Slide 3 - What We Will Cover

Purpose:
- Give the audience a fast map.
- Preview the three works as three different kinds of senior product design.

Variations:
1. "Three examples, same pattern." New Search = system reset; Declutter = tradeoff decision; Strategic AI = standards before scale.
2. "Three places where clarity mattered." Search clarity, card clarity, AI clarity.
3. "I will focus on the decisions, not the process theatre." Clear, direct, a little sharper.

Best bits selected:
- "Three examples, same pattern" is simple and memorable.
- The project labels should name the type of judgment each one proves.
- "Decisions, not process theatre" is useful for speaker note, not on-slide.

Draft V1:
- Title: "Three examples, same pattern"
- Bullets:
  - New Search: reset a fragmented search system.
  - Declutter: simplify a crowded marketplace decision surface.
  - Strategic AI: prepare teams before AI patterns scale.

Revision V2:
- Kept the labels parallel and removed extra explanation.

Final slide content:
- Title: "Three examples, same pattern"
- Body:
  - New Search: reset a fragmented search system.
  - Declutter: simplify a crowded decision surface.
  - Strategic AI: prepare teams before AI patterns scale.
- Speaker note:
  - "I am going to focus on the decisions that changed the work."

Val pass:
- Source-safe: Pass. All three framings match portfolio site content.
- Fits deck flow: Pass. It sets up the sections cleanly.
- Tone: Pass. Concise and easy to digest.

## Slide 4 - New Search Setup

Purpose:
- Establish the stakes of New Search before the decision slides.
- Make clear this was a staged system reset, not a simple UI refresh.

Variations:
1. "New Search: one search system, too many fragments." Strong system framing.
2. "Search was too important to stay fragmented." Stronger business angle.
3. "The problem was not filters. It was intent." More design-specific and memorable.

Best bits selected:
- Use the fragmentation frame because it is directly supported by the facts file.
- Bring in intent because it sets up the filter hierarchy and IA decision.
- Save metrics for the impact slide.

Draft V1:
- Title: "New Search: one search system, too many fragments"
- Bullets:
  - Search and filters had drifted across app and web.
  - Buyers needed clearer ways to express intent and review choices.
  - The business needed stronger lead progression and a baseline teams could extend.

Revision V2:
- "One search system" could imply one simultaneous launch, so keep the body careful.

Final slide content:
- Title: "New Search: too many fragments in a core journey"
- Body:
  - App and web search patterns had drifted.
  - Buyers needed clearer ways to narrow inventory and review choices.
  - The team needed a stronger baseline it could test, launch, and extend.
- Speaker note:
  - "My role was strongest in the app filter direction and the baseline decisions around how the model should work across surfaces."

Val pass:
- Source-safe: Pass. Matches New Search facts: fragmented surfaces, baseline reset, staged work.
- Fits deck flow: Pass. Sets up decision 1 naturally.
- Tone: Pass. Avoids internal rollout detail.

## Slide 5 - New Search Decision 1: Prove The Reset Was Necessary

Purpose:
- Show why the team had to reset the baseline rather than keep iterating the existing direction.
- Name the difference between the V1 baseline, the V2 failure, and the decisive benchmark.
- Capture the emotional difficulty of moving away from a direction the team had invested in for over a year.

Variations:
1. "Prove the reset was necessary." Strongest decision framing.
2. "Stop defending a direction the evidence had rejected." Strong, best for speaker note.
3. "Use the benchmark to move past sunk cost." Good for the team-dynamics angle.

Best bits selected:
- The slide should explain why the reset happened, not only state that it happened.
- V1 was structurally weak: too much filter structure, weak hierarchy, and hard-to-review selections.
- V2 had more than a year of work behind it, so the decision carried team and emotional weight.
- The decisive test should be attributed to user-provided context: Eddie pushed for it with his PM partner.

Draft V1:
- Title: "Decision 1: prove the reset was necessary"
- Bullets:
  - V1 exposed too much filter structure and weak hierarchy.
  - V2 had more than a year of work behind it, but the benchmark failed on key business KPIs.
  - I pushed with my PM partner for the test that made the reset unavoidable.

Revision V2:
- Kept "nail in the coffin" in the speaker note rather than the slide body. The slide stays credible; the note carries the human cost.

Final slide content:
- Title: "Decision 1: prove the reset was necessary"
- Body:
  - V1 exposed too much filter structure and weak hierarchy.
  - V2 had more than a year of work behind it, but the benchmark failed on key business KPIs.
  - I pushed with my PM partner for the test that made the reset unavoidable.
- Speaker note:
  - "This was hard because V2 carried emotional baggage. The team had invested heavily in it, and the test became the nail in the coffin: we could stop defending the direction and build a cleaner baseline."

Val pass:
- Source-safe: Pass with user-context caveat. The failed benchmark and weaker baseline are source-supported; the year-plus effort, emotional baggage, and Eddie/PM push come from user-provided context.
- Fits deck flow: Pass. Creates the project turning point.
- Tone: Pass. More specific, more human, and still concise.

## Slide 6 - New Search Decision 2: Make Filters Easier To Scan And Refine

Purpose:
- Show the broader filter-architecture decision, not only make/model placement.
- Explain the move from a hard-to-scan filter surface to a scalable IA.
- Keep the visual-quality point, but subordinate it to structure and usability.

Variations:
1. "Move away from an open-face sandwich of filters." Vivid and memorable, best for speaker note.
2. "Make filters easier to scan and refine." Clear and presentation-safe.
3. "Create a stronger filter architecture." Senior and source-aligned.

Best bits selected:
- "Easier to scan and refine" is the clearest slide-level idea.
- "Open-face sandwich" is useful as a spoken metaphor, not the title.
- The strongest source-safe framing is information architecture, consistent inputs, clearer grouping, and reviewable selections.

Draft V1:
- Title: "Decision 2: make filters easier to scan and refine"
- Bullets:
  - The old experience exposed too many filters at once.
  - Buyers had to scan, scroll, and refine through inconsistent inputs.
  - We rebuilt the IA with clearer grouping, consistent inputs, and a cleaner visual system.

Revision V2:
- Kept the slide focused on architecture and input consistency. Moved the more casual "open-face sandwich" phrasing to the speaker note.

Final slide content:
- Title: "Decision 2: make filters easier to scan and refine"
- Body:
  - The old experience exposed too many filter controls at once.
  - Buyers had to scan, scroll, and refine through inconsistent inputs.
  - We rebuilt the IA with clearer grouping, consistent inputs, and a cleaner visual system.
- Speaker note:
  - "We moved away from an open-face sandwich of filters toward a scalable filter architecture: easier to scan, easier to refine, and calmer to look at."

Val pass:
- Source-safe: Pass. Matches source notes on filter hierarchy, grouped choices, reviewable selections, and too much filter depth.
- Fits deck flow: Pass. Builds from baseline reset into a broader architecture decision before platform behavior.
- Tone: Pass. Keeps the slide polished while preserving the user's vivid metaphor in the speaker note.

## Slide 7 - New Search Decision 3: Align Logic, Adapt Interaction

Purpose:
- Show platform judgment: same model, different interaction choices.
- Avoid flattening app, Android, and web into one identical solution.

Variations:
1. "Align the model, adapt the interaction." Clean and balanced.
2. "Same product logic. Different platform behavior." Very concise.
3. "Do not copy the screen. Copy the decision logic." Sharp and presentation-friendly.

Best bits selected:
- Use "same product logic, different platform behavior" for clarity.
- Speaker note can carry the "do not copy the screen" line.

Draft V1:
- Title: "Decision 3: align the model, adapt the interaction"
- Bullets:
  - Keep the same product logic across surfaces.
  - Adapt interaction details where platform behavior demanded it.
  - Android and web did not need to copy iOS to benefit from the same foundation.

Revision V2:
- Tightened the third bullet so it does not sound dismissive of iOS.

Final slide content:
- Title: "Decision 3: same logic, different behavior"
- Body:
  - Keep the product model consistent across surfaces.
  - Adapt interaction details to the platform.
  - Let Android and web extend the foundation with platform-specific interaction choices.
- Speaker note:
  - "We reused the decision logic and redesigned the interaction for each surface."

Val pass:
- Source-safe: Pass. Matches platform nuance in New Search source.
- Fits deck flow: Pass. Prevents the story from becoming a generic cross-platform rollout.
- Tone: Pass. Crisp and memorable.

## Slide 8 - New Search Decision 4: Ship Web In Stages

Purpose:
- Show scope discipline and staged delivery.
- Make the web story evidence-safe.

Variations:
1. "Ship the web baseline first." Direct and source-aligned.
2. "A simpler launch beat waiting for the full vision." Strong decision framing.
3. "Make the first version useful, measurable, and extensible." Practical and senior.

Best bits selected:
- Use "baseline first" because source explicitly supports phased web baseline.
- Keep "full vision" in speaker note to avoid making the slide too broad.

Draft V1:
- Title: "Decision 4: ship the web baseline first"
- Bullets:
  - Web had richer ambition than the team could safely ship at once.
  - We launched a simpler baseline first.
  - That gave the team a measurable foundation for later improvements.

Revision V2:
- Removed "safely" because it might imply risk beyond the source. Use "usefully" instead.

Final slide content:
- Title: "Decision 4: ship the web baseline first"
- Body:
  - Web needed a useful first release before the full future vision.
  - The team launched a simpler baseline first.
  - That created a measurable foundation for later improvements.
- Speaker note:
  - "The team made the first web version useful and extendable, then left richer enhancements for later."

Val pass:
- Source-safe: Pass. Supported by web phased launch and deferred enhancements.
- Fits deck flow: Pass. Completes the New Search decision arc.
- Tone: Pass. Practical and presentation-friendly.

## Slide 9 - New Search Impact

Purpose:
- Close the New Search section with impact without flattening evidence.
- Make the outcome clear but not overclaimed.

Variations:
1. "A stronger baseline, validated first on iOS." Most source-safe.
2. "The reset moved key progression signals in the right direction." Strong but slightly abstract.
3. "The larger win was a scalable foundation for future experiments." Best strategic close.

Best bits selected:
- Lead with iOS as strongest proof.
- Include Android and web as narrower supporting signals.
- End with the larger product-system win: scalability, faster experiments, and future iteration.

Draft V1:
- Title: "What New Search proved"
- Bullets:
  - iOS: about +6% leads from the list page, with DPVs stable.
  - Android: +12% new-user lead signal in Germany.
  - Web: +7% total dealer leads from the list page on desktop in Italy.
  - Bigger win: a scalable foundation for faster experiments and future iteration.

Revision V2:
- Added evidence nuance in the speaker note and made the foundation line more specific.

Final slide content:
- Title: "What New Search proved"
- Body:
  - iOS: about +6% leads from the list page, with DPVs stable.
  - Android: +12% new-user lead signal in Germany.
  - Web: +7% total dealer leads from the list page on desktop in Italy.
  - Bigger win: a scalable foundation for faster experiments and future iteration.
- Speaker note:
  - "I would present this as a staged product-system outcome. iOS is the cleanest proof point; Android and web are useful but narrower signals. The foundation mattered because it reduced structural complexity and made future testing easier."

Val pass:
- Source-safe: Pass with nuance. Metrics match source notes; speaker note preserves evidence strength.
- Fits deck flow: Pass. Closes the section and sets up a different kind of decision story in Declutter.
- Tone: Pass. Clear impact without pretending every surface proved the same thing.

## Slide 10 - Declutter Setup

Purpose:
- Establish why a list card redesign was strategically important.
- Show that this was not cosmetic cleanup.

Variations:
1. "Declutter: a small card with too many jobs." Strong and memorable.
2. "The list card was a decision surface, not just a component." More senior.
3. "Simplifying the card meant choosing what deserved attention." Sharp decision framing.

Best bits selected:
- "Small card with too many jobs" is sticky and easy.
- "Decision surface" connects to portfolio page language.
- Use business constraints to set up the later tradeoffs.

Draft V1:
- Title: "Declutter: a small card with too many jobs"
- Bullets:
  - Buyers used the card to scan, compare, and decide whether to open detail.
  - The same card carried dealer, partner, finance, insurance, and media goals.
  - Simplifying it meant deciding what deserved attention.

Revision V2:
- Added one evidence point, but kept it simple.

Final slide content:
- Title: "Declutter: a small card with too many jobs"
- Body:
  - Buyers used the card to scan, compare, and decide whether to open detail.
  - The same space carried dealer, partner, finance, insurance, and media goals.
  - Simplifying it meant deciding what deserved attention.
- Speaker note:
  - "This mattered because the list page is one of the highest-traffic decision surfaces in the product. Even small hierarchy changes could affect buyer progress and commercial outcomes."

Val pass:
- Source-safe: Pass. Directly supported by Declutter facts and page copy.
- Fits deck flow: Pass. Distinguishes Declutter from New Search.
- Tone: Pass. Concrete and concise.

## Slide 11 - Declutter Decision 1: Take The Bigger Swing

Purpose:
- Show that the team chose to test a more radical simplification rather than a safer cleanup.
- Explain why that bigger swing was useful, but also why it created downstream alignment work.

Variations:
1. "Take the bigger swing." Strongest and most presentation-friendly.
2. "Test the radical version first." Clear and specific.
3. "Use the bolder card to learn faster." Good evidence-learning angle.

Best bits selected:
- "Take the bigger swing" carries the decision energy.
- Anchor the bigger swing with early mobile-web testing.
- Make the consequences explicit: later alignment, rollback, and reintroduction/adaptation work.

Draft V1:
- Title: "Decision 1: take the bigger swing"
- Bullets:
  - We chose to test a more radical simplification.
  - Early mobile-web testing favored the stronger reduction.
  - That bigger swing created later alignment work around what to keep, restore, or adapt.

Revision V2:
- Kept the slide decisive, then moved the alignment and rollback nuance into the final bullet and speaker note.

Final slide content:
- Title: "Decision 1: take the bigger swing"
- Body:
  - We chose to test a more radical simplification.
  - Early mobile-web testing favored the stronger reduction.
  - That bigger swing created later alignment work around what to keep, restore, or adapt.
- Speaker note:
  - "This was the first real fork in the road. We could make a safer cleanup, or we could test a version that challenged how much the card needed to carry. The stronger direction gave us momentum, but it also created the later work: partner concerns, rollout alignment, and some changes that needed to be reintroduced or adapted."

Val pass:
- Source-safe: Pass. Supported by mWeb concept testing, stronger declutter evidence, later partner-link iteration, and rollout alignment notes.
- Fits deck flow: Pass. Sets up partner and measurement tradeoffs.
- Tone: Pass. More forceful, with consequences clearly tied to later decisions.

## Slide 12 - Declutter Decision 2: What Earned Space

Purpose:
- Show commercial maturity.
- Make limited card space understandable as a product decision, not a layout detail.

Variations:
1. "Decide what earned space on the card." Strongest and most presentation-friendly.
2. "Every removed element had a business owner." More stakeholder-heavy.
3. "Cleaner cards created commercial tradeoffs." Balanced but less specific.

Best bits selected:
- "Earned space" makes the design judgment sharper.
- Include dealer, finance, insurance, media, and Check24 because the source supports the commercial pressure without turning the slide into a stakeholder list.

Draft V1:
- Title: "Decision 2: decide what earned space"
- Bullets:
  - The card could not carry every business surface equally.
  - Dealer, finance, insurance, and media goals competed with scanability.
  - We tested which entry points deserved space, size, and placement.

Revision V2:
- Shifted from a narrow partner-links framing to the larger decision: what deserved attention on a scarce card surface.
- Kept Check24 and finance in the speaker note where the tradeoff can be explained without crowding the slide.

Final slide content:
- Title: "Decision 2: decide what earned space"
- Body:
  - The card could not carry every business surface equally.
  - Dealer, finance, insurance, and media goals competed with scanability.
  - We tested which entry points deserved space, size, and placement.
- Speaker note:
  - "This was less about removing links and more about deciding what deserved attention. Partner links protected important outcomes like Check24, but finance still needed iteration, so the card had to balance buyer clarity with commercial responsibility."

Val pass:
- Source-safe: Pass. Supported by partner-links phase and tradeoff notes.
- Fits deck flow: Pass. Expands from user clarity into commercial constraints.
- Tone: Pass. Clear and not corporate.

## Slide 13 - Declutter Decision 3: Activity Vs Progress

Purpose:
- Show measurement judgment.
- Explain why not every positive-looking interaction was trusted equally.

Variations:
1. "Separate activity from progress." Strongest and easiest to understand.
2. "Not every healthy-looking metric meant a healthier journey." Good insight but wordier.
3. "The gallery felt richer, but progress mattered more." Concrete.

Best bits selected:
- Use "activity from progress" instead of "proxy metrics" to stay digestible.
- Explain gallery activity as the concrete example.

Draft V1:
- Title: "Decision 3: separate activity from progress"
- Bullets:
  - Gallery made the card feel richer.
  - Desktop evidence showed richer interaction could weaken actual detail-page progression.
  - We treated movement to detail as the stronger signal.

Revision V2:
- Grounded the slide in the desktop gallery/no-gallery evidence.
- Avoided "flattering proxies" on the slide because it reads more editorial than sourced.

Final slide content:
- Title: "Decision 3: separate activity from progress"
- Body:
  - Gallery made the card feel richer.
  - Desktop evidence showed richer interaction could weaken actual detail-page progression.
  - We treated movement to detail as the stronger signal.
- Speaker note:
  - "This was the measurement lesson: activity on the card was not automatically progress. If richer previews kept people interacting but weakened movement to detail, the team had to privilege the deeper buyer action."

Val pass:
- Source-safe: Pass. Supported by desktop synthesis separating reported and actual DPVs.
- Fits deck flow: Pass. Gives Declutter a strong senior-judgment moment.
- Tone: Pass. Very digestible.

## Slide 14 - Declutter Decision 4: Let Platforms Diverge

Purpose:
- Show that consistency was not treated as a default good.
- Make final platform differences understandable.

Variations:
1. "Let the answer differ by platform." Direct and source-aligned.
2. "Consistency was less important than the right behavior." Clear tradeoff.
3. "One card system, different platform rules." Balanced.

Best bits selected:
- Use the final platform variants because they are memorable.
- Do not over-explain why apps still moved to gallery despite some weaker signals; keep nuance in speaker note.

Draft V1:
- Title: "Decision 4: let the answer differ by platform"
- Bullets:
  - Mobile web: no gallery.
  - Desktop: no gallery.
  - iOS and Android: gallery.
  - The final rule came from evidence by surface, not symmetry.

Revision V2:
- "Rule" could sound too rigid. Use "direction."

Final slide content:
- Title: "Decision 4: let platforms diverge"
- Body:
  - Mobile web: no gallery.
  - Desktop: no gallery.
  - iOS and Android: gallery.
  - The direction followed platform evidence over symmetry.
- Speaker note:
  - "This evidence supported platform-specific card behavior instead of one universal rule."

Val pass:
- Source-safe: Pass. Final rollout strategy is directly supported.
- Fits deck flow: Pass. Resolves the decision sequence cleanly.
- Tone: Pass. Simple and confident.

## Slide 15 - Declutter Impact

Purpose:
- Close the Declutter section with measurable impact and clear proof boundaries.
- Use the user-approved broader impact claim without making the whole story depend on it.

Variations:
1. "The outcome: cleaner cards, clearer platform rules." Good strategic close.
2. "Simplification worked, but only with tradeoffs visible." Best lesson.
3. "Impact came from deciding what each surface should do." Strongly tied to decisions.

Best bits selected:
- Lead with validation evidence.
- Include the all-market claim as a presentation-allowed impact line.
- Keep the lesson focused on platform-specific rules and tradeoff handling.

Draft V1:
- Title: "What Declutter proved"
- Bullets:
  - Early mobile-web testing favored stronger simplification and improved dealer-lead signals.
  - Desktop no-gallery was the safer direction, with dealer leads stable.
  - The final rollout used different card behavior by platform.
  - Broader rollout forecast: +25% dealer DPVs and +3% dealer leads across markets.

Revision V2:
- Removed "presentation impact claim" from slide body because it sounds like a footnote. Keep evidence note here in the working doc.

Revision V3:
- Added more sourced metrics to make the impact feel concrete.
- Kept the caveat in the speaker note so the slide does not imply every metric moved cleanly.
- Used IT mWeb, media, and desktop gallery/no-gallery evidence because those are the clearest retained-source numbers.

Final slide content:
- Title: "What Declutter proved"
- Body:
  - IT mWeb: +8% dealer leads from list page for lighter declutter, +12% for the stronger no-links variant.
  - Same stronger variant: +26% ad impressions and +16% ad clicks, with ad conversion rate down 4.5%.
  - Desktop: no-gallery was safer; gallery variants reduced actual dealer DPVs by 9% in DE and 27% in IT.
  - Broader rollout forecast: +25% dealer DPVs and +3% dealer leads across markets.
- Speaker note:
  - "I would present this as impact with tradeoffs, not a clean every-metric win. Finance still needed work, desktop gallery underperformed on actual DPVs, and the broader cross-market number is a forecast and user-approved presentation claim from outside the retained source set."

Val pass:
- Source-safe: Pass with user-allowed caveat. IT mWeb, media, and desktop gallery/no-gallery metrics are sourced; the broad rollout forecast is user-approved but weaker in retained source material.
- Fits deck flow: Pass. Closes Declutter with impact and tradeoff maturity.
- Tone: Pass. More metric-heavy, but still presentable.

## Slide 16 - Strategic AI Setup

Purpose:
- Shift from shipped marketplace surfaces to strategic design leadership.
- Make clear the proof type is different: organisational readiness, research-backed guidance, feature direction, and capability building.

Variations:
1. "Make AI usable before it scales." Strongest and most active.
2. "Prepare the org before patterns harden." Senior, but slightly internal.
3. "Turn AI uncertainty into product guidance." Clear and directly tied to the story.

Best bits selected:
- Zoom out from team process to product and organisational risk.
- Keep "before patterns harden" as the urgency, but make the title more active.

Draft V1:
- Title: "Strategic AI: make AI usable before it scales"
- Bullets:
  - AI was no longer just a future concept; it was entering product, process, and leadership conversations.
  - There was a bigger push to bring AI-powered features into customer experiences.
  - Without shared principles, AI patterns could fragment quickly across teams.
  - The opportunity was to turn uncertainty into responsible product guidance.

Revision V2:
- Moved the "not shipped metrics" caveat into the speaker note.
- Moved the AI Guild specifics to Slide 17 so Slide 16 can stay as the broader setup.

Revision V3:
- Zoomed out from "teams needed shared language" to the larger risk: fragmented AI patterns across product and process.
- Replaced the passive setup title with a more active product-leadership title.

Final slide content:
- Title: "Strategic AI: make AI usable before it scales"
- Body:
  - AI was no longer just a future concept; it was entering product, process, and leadership conversations.
  - There was a bigger push to bring AI-powered features into customer experiences.
  - Without shared principles, AI patterns could fragment quickly across teams.
  - The opportunity was to turn uncertainty into responsible product guidance.
- Speaker note:
  - "This case is about a different kind of impact: helping the organisation move from scattered AI curiosity toward clearer judgment, reusable guidance, and real feature application before patterns hardened."

Val pass:
- Source-safe: Pass with user-provided clarification. AI Guild references exist in the Strategic AI facts; months of research / org-wide education are user-provided detail.
- Fits deck flow: Pass. Clearly signals a different evidence type.
- Tone: Pass. Human and non-theatrical.

## Slide 17 - Strategic AI: Build Readiness

Purpose:
- Show the upstream leadership work before feature execution.
- Establish that the later guidance came from research, education, and organisational preparation.

Variations:
1. "Build readiness before AI became urgent." Strongest and most senior.
2. "Prepare teams for the GenAI wave." Clear but slightly informal.
3. "Create shared AI literacy before feature pressure." Accurate but wordier.

Best bits selected:
- Lead with the AI Guild because it is the broadest leadership signal.
- Keep this as readiness and education, not a claim of owning company AI strategy.

Draft V1:
- Title: "Build readiness before AI became urgent"
- Bullets:
  - I led UX AI Guild research and education across emerging GenAI patterns.
  - The work helped UX and senior stakeholders understand what was coming.
  - It created the foundation for more practical AI product guidance.

Revision V2:
- Removed "Decision 1" label after validation. This is a phase of influence, not a product fork.

Final slide content:
- Title: "Build readiness before AI became urgent"
- Body:
  - I led UX AI Guild research and education across emerging GenAI patterns.
  - The work helped UX and senior stakeholders understand what was coming.
  - It created the foundation for more practical AI product guidance.
- Speaker note:
  - "This is the upstream leadership layer: before the feature work became concrete, I helped the organisation build literacy and shared judgment around AI."

Val pass:
- Source-safe: Pass with user-provided clarification. AI Guild references exist in the Strategic AI facts; months of research, stakeholder education, and org-wide presentation are user-provided detail.
- Fits deck flow: Pass. Makes Strategic AI feel like a leadership case rather than a forced decision sequence.
- Tone: Pass. Senior and clear.

## Slide 18 - Strategic AI: Principles

Purpose:
- Clarify authorship and ownership.
- Show that the product principles came from research, not taste.

Variations:
1. "Turn research into principles." Direct and accurate.
2. "Make AI guidance research-backed." Clear but less presentation-friendly.
3. "Translate AI research into product rules." Good, but slightly technical.

Best bits selected:
- Be explicit that the initial Responsible AI Communication Framework was shared/contributed-to work.
- Make the four principles and visual signals the stronger ownership claim.

Draft V1:
- Title: "Turn research into principles"
- Bullets:
  - I contributed to the Responsible AI Communication Framework.
  - I owned the four research-backed principles underneath it.
  - The principles translated AI risk into visibility, review, and control.

Revision V2:
- Added speaker-note authorship precision so the slide stays strong without overclaiming the initial framework.

Final slide content:
- Title: "Turn research into principles"
- Body:
  - I contributed to the Responsible AI Communication Framework.
  - I owned the four research-backed principles underneath it.
  - The principles translated AI risk into visibility, review, and control.
- Speaker note:
  - "Be precise on authorship here: I was not the core author of the initial Responsible AI Communication Framework. My stronger ownership was the research-backed principles beneath it and the product guidance that followed."

Val pass:
- Source-safe: Pass with user clarification on authorship and ownership.
- Fits deck flow: Pass. Separates framework contribution from stronger principle ownership.
- Tone: Pass. Precise and not inflated.

## Slide 19 - Strategic AI: Visual Signals

Purpose:
- Explain how principles became visible interaction guidance.
- Keep the focus on user understanding, not AI novelty.

Variations:
1. "Make AI visible when it matters." Strongest and easiest to understand.
2. "Signal AI when it shapes judgment." More framework-specific.
3. "Users should know when AI is influencing what they see." Plain and human.

Best bits selected:
- Use "when it matters" because it includes both visibility and restraint.
- Fold control into the slide so the framework logic stays compact.

Draft V1:
- Title: "Make AI visible when it matters"
- Bullets:
  - Low-risk assistance could stay quiet.
  - Generated, summarized, or recommended content needed clearer signals.
  - Visibility and control scaled with impact on what users understood or chose.

Revision V2:
- Removed the separate "raise control" slide because it was valid but too framework-mechanical for the new arc.

Final slide content:
- Title: "Make AI visible when it matters"
- Body:
  - Low-risk assistance could stay quiet.
  - Generated, summarized, or recommended content needed clearer signals.
  - Visibility and control scaled with impact on what users understood or chose.
- Speaker note:
  - "This is where the principle became practical: not every AI moment needs to be loud, but AI should be visible and controllable when it shapes interpretation, recommendation, personalization, or decision-making."

Val pass:
- Source-safe: Pass. Directly supported by framework decision guidance.
- Fits deck flow: Pass. Turns the principles into a concrete visual/interaction layer.
- Tone: Pass. Concrete and digestible.

## Slide 20 - Strategic AI: Product Guidance

Purpose:
- Show the move from principles into feature-team guidance.
- Position the Visual Signals work as a practical review tool, not only a framework artifact.

Variations:
1. "Turn principles into product guidance." Strongest and most accurate.
2. "Make AI review concrete before patterns harden." Good but longer.
3. "Give teams a shared AI design language." Clear but less decision-oriented.

Best bits selected:
- "Before patterns harden" is a strong reason this mattered.
- Name Conversational AI Search and Lead Assistant to make the work concrete.

Draft V1:
- Title: "Apply it to real product work"
- Bullets:
  - Visual signals mapped AI roles to labels, icons, states, and controls.
  - I used the guidance with Conversational AI Search and Lead Assistant teams.
  - Concept reviews became more specific before patterns hardened.

Revision V2:
- Kept AutoScout24 Intelligence branding as speaker-note context only because the work is early.
- Removed "Decision 4" label after validation so this reads as application, not another abstract decision.

Final slide content:
- Title: "Apply it to real product work"
- Body:
  - Visual signals mapped AI roles to labels, icons, states, and controls.
  - I used the guidance with Conversational AI Search and Lead Assistant teams.
  - Concept reviews became more specific before patterns hardened.
- Speaker note:
  - "This is where `Visual Signals.png` or a confidential concept UI can help: show how research and principles moved into concrete feature guidance. The AI product-branding work for AutoScout24 Intelligence is worth mentioning as an emerging design-system thread, but not as a major proof point yet."

Val pass:
- Source-safe: Pass. Supported by Strategic AI facts and user clarification on visuals.
- Fits deck flow: Pass. Converts individual AI decisions into a leadership artifact.
- Tone: Pass. Strong and non-corporate.

## Slide 21 - Strategic AI Impact

Purpose:
- Close Strategic AI with the right kind of impact.
- Avoid pretending there are shipped user or business metrics.

Variations:
1. "Impact: better AI decisions before patterns scaled." Strong and safe.
2. "The output was not one screen. It was a way to make AI decisions." Good leadership framing.
3. "The framework gave teams language for visibility, review, and control." Concrete and source-backed.

Best bits selected:
- Lead with clearer standards and decision language.
- Include capability building and senior alignment.
- Keep source limits in speaker note.

Draft V1:
- Title: "What Strategic AI proved"
- Bullets:
  - CPO and VP Design aligned on the framework direction.
  - Teams got shared language for AI visibility, review, and control.
  - Conversational AI Search and Lead Assistant had clearer product-design guidance.
  - I am now applying the work directly as the Apps designer for Conversational AI Search.

Revision V2:
- Avoided shipped-impact language.
- Kept Apps design ownership as current application, not completed proof.

Final slide content:
- Title: "What Strategic AI proved"
- Body:
  - CPO and VP Design aligned on the framework direction.
  - Teams got shared language for AI visibility, review, and control.
  - Conversational AI Search and Lead Assistant had clearer product-design guidance.
  - I am now applying the work directly as the Apps designer for Conversational AI Search.
- Speaker note:
  - "Keep user and business metrics out of this section. The value sits in organisational readiness, reviewed guidance, clearer feature critique, and practical application. The Apps work has just started, so present it as current application rather than completed impact."

Val pass:
- Source-safe: Pass. Avoids unsupported shipped-impact claims.
- Fits deck flow: Pass. Shows a different but credible form of impact.
- Tone: Pass. Clear, senior, and measured.

## Slide 22 - Close

Purpose:
- Tie the three case studies together.
- Leave the audience with the kind of design leadership Eddie brings.

Variations:
1. "The pattern across the work." Simple and clean.
2. "Different projects, same design leadership." Direct but slightly generic.
3. "Clarity, judgment, momentum." Strong closing triad.

Best bits selected:
- Use the project-by-project recap plus the closing triad.
- Keep it short enough to invite discussion.

Draft V1:
- Title: "The pattern across the work"
- Bullets:
  - New Search: turn fragmented systems into clearer foundations.
  - Declutter: make hard product tradeoffs visible.
  - Strategic AI: prepare teams before AI patterns scale.
  - That is the design leadership I bring: clarity, judgment, and momentum.

Revision V2:
- "That is the design leadership I bring" is strong, but could sound too declarative. Keep it for the final sentence if delivered naturally.

Final slide content:
- Title: "The pattern across the work"
- Body:
  - New Search: clearer foundations for complex search.
  - Declutter: sharper tradeoffs on a crowded decision surface.
  - Strategic AI: prepared teams before AI patterns scaled.
  - Clarify the problem and help teams make the hard choice.
- Speaker note:
  - "Across the work, I am trying to make the important decision easier to see: for users, for product teams, and for the business."

Val pass:
- Source-safe: Pass. This is synthesis, not new factual claim.
- Fits deck flow: Pass. Recaps all three cases and lands the throughline.
- Tone: Pass. Concise and polished.

## Full Sequence Fit Check

| Check | Result | Notes |
|---|---|---|
| Starts at slide 2 | Pass | Slide 1 intentionally omitted per request. |
| Covers slides 2-22 consecutively | Pass | No slide gaps. |
| Includes 3 variations per slide | Pass | Each slide has exactly 3 variations. |
| Selects best bits and drafts final content | Pass | Each slide has selected bits, draft, revision, final content. |
| Revises each slide | Pass | Each slide includes at least one revision pass, usually V2 to final. |
| Runs per-slide validation | Pass | Each slide includes source-safety, flow, and tone checks. |
| Uses source-grounded claims | Pass | Project claims are tied to source files or user clarifications. |
| Keeps each work under 15 minutes | Pass with timing discipline | Decision slides should be about 60-90 seconds each. Setup and impact slides should stay short. |
| Avoids generic UX jargon | Pass | Language is plain, decision-oriented, and concrete. |

## Objective Review Findings

| Finding | Change made |
|---|---|
| Slide 5 needed the real reset story, not only the result of the reset. | Reframed it around V1 structural weakness, V2 benchmark failure, Eddie/PM test push, and the emotional cost of abandoning a year-plus direction. |
| Slide 6 needed the broader filter-architecture decision. | Reframed it around moving away from hard-to-scan filters toward clearer IA, consistent inputs, and a cleaner visual system. |
| Slide 9 needed the longer-term system value of New Search. | Added the scalable foundation point: faster experiments, future iteration, reduced structural complexity, and easier future testing. |
| Slide 15 made the broad Declutter number read like measured post-rollout impact. | Reframed it as "Broader rollout forecast" and clarified the speaker note. |
| Several speaker notes used formulaic "not X, but Y" phrasing. | Rewrote final slide content and speaker notes into direct statements. |
| Strategic AI could drift into unsupported impact if metrics were implied. | Kept the impact section tied to standards, review language, and capability work. |
| New Search impact needed the staged-evidence caveat. | Preserved the iOS / Android / web split and kept the caveat in the speaker note. |

## Post-Review Val Pass

| Question | Answer | Adjustment |
|---|---|---|
| Does the revised content match the source material? | Pass. New Search remains staged, its reset story uses both source-backed benchmark evidence and user-provided team context, Declutter uses validation plus forecast language, and Strategic AI avoids shipped-impact claims. | None. |
| Are weaker or user-approved claims clearly marked? | Pass. The Declutter all-market number reads as a rollout forecast, and the Slide 5 PM-push / emotional-baggage detail is noted as user-provided context. | None. |
| Does the language avoid obvious AI writing patterns? | Pass. Final slide content and speaker notes remove the main binary contrasts and filler. | Left process notes intact because they document earlier options. |
| Does the sequence still feel concise and presentation-facing? | Pass. The edits sharpened claims without adding slide clutter; Slide 5 carries the human context in the speaker note rather than overloading the slide. | None. |
| Does any uncertainty remain? | Minor. New Search role evidence is strongest for app direction and shared baseline decisions; the year-plus V2 effort, emotional baggage, and Eddie/PM push come from user context. | Keep role claims specific during manuscript drafting. |

Stop-slop score for final slide content and speaker notes:
- Directness: 8/10
- Rhythm: 8/10
- Trust: 9/10
- Authenticity: 8/10
- Density: 8/10
- Total: 41/50

## Latest Consistency Pass

| Check | Result | Notes |
|---|---|---|
| Clean outline matches detailed slide sections | Pass | Slides 5, 6, and 9 now match in both places. |
| Slide 5 context is properly qualified | Pass | Source-backed test evidence is separated from user-provided context about the PM push and team dynamics. |
| Slide 6 no longer reads as a make/model-only decision | Pass | It now centers on IA, scanability, input consistency, and visual calm. |
| Slide 9 includes scalability and iteration value | Pass | It now includes a scalable foundation for faster experiments and future iteration. |
| Slide count stayed intact | Pass | The clean outline still covers slides 2-22. |

## Recommended Timing

- Slide 2-3: 3 minutes total.
- New Search, slides 4-9: 11-13 minutes.
- Declutter, slides 10-15: 11-13 minutes.
- Strategic AI, slides 16-21: 10-12 minutes.
- Close, slide 22: 1-2 minutes.

Total target: 36-43 minutes, depending on discussion.

## Notes For Next Step

- Slide 1 still needs to be created separately if this becomes a full deck.
- The current content is slide-content ready, not yet a visual deck layout.
- The next pass should decide visuals per slide, using the asset manifests and user-approved confidential AI visuals.
- Speaker notes are intentionally short; a later manuscript pass can expand them without changing slide copy.
