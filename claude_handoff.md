# Claude Handoff: Eddie Kim Portfolio

Last updated: 2026-05-08

## Purpose

Use this as the current handoff for Eddie Kim's portfolio and recruitment workspace. The live code is the source of truth; this file is a fast orientation layer for the next coding session.

## Project Goal

Build and maintain a modern, minimal portfolio site for Eddie Kim.

The site should communicate:

- Principal Product Designer at AutoScout24
- AI design leadership
- CMO and Co-Founder experience at CryptoXpress
- product thinking, systems thinking, and shipped impact

Style direction:

- clean, minimal, high-quality typography
- modern but not flashy
- avoid generic startup-site patterns
- preserve the current editorial, sparse, high-signal feel

## Working Rules

- Do not invent achievements, metrics, company details, or case-study claims.
- Prefer small, reviewable changes over broad rewrites.
- Preserve the existing Next.js, TypeScript, and Tailwind structure.
- Use minimal dependencies.
- Explain the plan before larger changes.
- For case-study edits, inspect the rendered page source and supporting content before changing claims.
- Keep confidential AI and marketplace details abstracted unless Eddie provides public-safe wording.

## Source Of Truth

Core guidance:

- `AGENTS.md`
- `portfolio-site/AGENTS.md`
- `portfolio-site/RESUME.md`
- `portfolio-site/TONE-OF-VOICE.md`
- `recruitment/README.md`

Current positioning:

- Eddie is a Principal Product Designer and AI Design Lead at AutoScout24.
- Emphasize search and discovery impact, AI leadership, systems thinking, marketplace scale, and practical design-to-build workflow change.
- AutoScout24 marketplace scale is currently stated as over 30M monthly users in `portfolio-site/RESUME.md`.
- CryptoXpress should be represented as Co-Founder / CMO experience, but do not over-expand it without sourced detail.

Tone:

- clear, credible, concise, mature, senior, high-signal
- prioritize decisions, consequences, scope, judgment, and evidence
- avoid inflated UX language such as "seamless", "holistic", "best-in-class", "user-centric", and vague process narration

## Current Repo State

Branch:

- `main`, tracking `origin/main`
- Latest pushed commit: `430f380 Update Intercom application status`

Recent commits:

- `430f380 Update Intercom application status`
- `ff3cc0d Update case studies and recruitment materials`
- `0438fd0 Update homepage positioning copy`
- `638a3d3 Polish portfolio production layout`
- `54d8407 Wrap portfolio product polish`

Known untracked files intentionally left out of commits:

- `New` - empty root-level file, likely accidental
- `Synthesia-cover-letter-Eddie-Kim.docx` - root-level Word document, outside the requested portfolio/recruitment commit scope

Do not delete or commit those without Eddie explicitly asking.

## Portfolio Site State

Primary app folder:

- `portfolio-site/`

Current public routes:

- `/`
- `/work/new-search`
- `/work/declutter-list-page`
- `/work/strategic-ai-design-leadership`
- `/work/daimler-subscription-concept`
- `/work/smart-connected-car-app`

Key files:

- `portfolio-site/app/page.tsx`
- `portfolio-site/app/layout.tsx`
- `portfolio-site/components/SiteFooter.tsx`
- `portfolio-site/components/homepage/content.ts`
- `portfolio-site/components/Work.tsx`
- `portfolio-site/components/Hero.tsx`
- `portfolio-site/components/case-study/CaseStudy.tsx`
- `portfolio-site/app/work/*/page.tsx`

Homepage project order:

1. New Search
2. Declutter the List Page, displayed on the homepage as "List Card Redesign"
3. Strategic AI Design Leadership
4. Daimler Vehicle Subscription Concept
5. Smart Connected Car App

Important behavior:

- `featuredProjects[0]` drives the hero-to-work handoff copy and anchor behavior.
- The homepage theme transition depends on the first selected-work image trigger.
- Contact links are centralized through homepage/contact components.
- Global footer is now rendered from `portfolio-site/app/layout.tsx`.

## Case Study State

Treat the current code as the latest baseline and inspect before continuing.

New Search:

- Frames the work as a cross-platform reset of buyer intent expression and complex marketplace filtering.
- Separates direct ownership, influence, and shared outcomes.
- Uses public-safe evidence and avoids exposing the full confidential performance picture.

Declutter / List Card Redesign:

- Public framing focuses on scan, compare, and decision clarity.
- Proof is kept careful around testing, analysis, progression signals, enquiry behavior, and rollout direction.

Strategic AI Design Leadership:

- Frames the work around AI visibility, review, and control.
- Uses abstracted decision guidance to protect confidential strategy.
- Avoids downstream product claims that cannot be shown publicly.

Daimler Vehicle Subscription Concept:

- Positioned as a supporting case study.
- Emphasizes making an unfamiliar service model concrete enough for users, executives, and delivery partners to evaluate.

Smart Connected Car App:

- Positioned as an earlier supporting case.
- Emphasizes implementation-ready UX across vehicle, backend, and partner dependencies.

## Recruitment Workspace State

Primary folder:

- `recruitment/`

Purpose:

- Markdown-based command center for job search, applications, materials, messaging, company prioritisation, and imported ChatGPT context.

Important files:

- `recruitment/README.md`
- `recruitment/applications.md`
- `recruitment/company-prioritisation.md`
- `recruitment/materials.md`
- `recruitment/messaging.md`
- `recruitment/portfolio-positioning.md`
- `recruitment/weekly-review.md`
- `recruitment/templates/`
- `recruitment/schema/`

Privacy boundary:

- `recruitment/private/` is ignored.
- `recruitment/inbox/chatgpt/raw/` is ignored.
- Keep raw exports, compensation details, sensitive notes, and private drafts out of versioned files.

Latest recruitment update:

- Intercom Staff Designer / Staff Product Designer moved from preparing to applied.
- Intercom Principal Product Designer remains archived as rejected.

## Verification Status

Latest checks run on 2026-05-08 before pushing:

- `npm run lint` - passed
- `./node_modules/.bin/tsc --noEmit` from `portfolio-site` - passed
- `npm run build` - passed
- `git diff --check` - passed
- Local HTTP smoke checks returned `200 OK` for the homepage and all updated case-study routes

Recommended verification commands from repo root:

```bash
npm run lint
npm run build
```

TypeScript-only check:

```bash
cd portfolio-site
./node_modules/.bin/tsc --noEmit
```

## Risks And Open Questions

- The untracked empty file `New` looks accidental; ask before deleting.
- The untracked `Synthesia-cover-letter-Eddie-Kim.docx` looks unrelated to the product site; do not commit unless Eddie asks.
- Case-study copy is intentionally careful around metrics and confidentiality. Confirm before adding or restoring exact numbers.
- `featuredProjects[0]` affects the homepage hero transition, so reorder selected work carefully.
- If more visual changes resume, manually check mobile, laptop, and wide desktop widths.

## Useful Next Prompt

If continuing from here, a good next prompt is:

> Please do a final portfolio QA pass across the homepage and case-study pages. Keep copy changes conservative, do not invent claims, preserve the minimal editorial design direction, and do not commit unrelated root-level files.
