# Portfolio Project Plan

Last updated: 2026-05-08

## Current State

- Portfolio site is built in `portfolio-site/` with Next.js, TypeScript, and Tailwind CSS.
- Homepage, selected work, case-study pages, footer, and responsive layout are implemented.
- Case-study pages currently cover New Search, Declutter/List Card Redesign, Strategic AI Design Leadership, Daimler Vehicle Subscription Concept, and Smart Connected Car App.
- Recruitment workspace is active in `recruitment/` for application tracking, materials, messaging, and company prioritisation.
- Latest pushed branch is `main`.

## Completed For Current Push

- Updated case-study page content and proof framing.
- Added global site footer.
- Added public-safe recruitment workspace files and templates.
- Ignored private recruitment notes and raw ChatGPT imports.
- Updated Intercom application status in the recruitment tracker.

## Verification Baseline

Latest checks run before the current handoff:

- `npm run lint`
- `./node_modules/.bin/tsc --noEmit` from `portfolio-site`
- `npm run build`
- Local HTTP smoke checks for homepage and updated case-study routes

## Remaining Nice-To-Haves

- Decide whether to delete or ignore the root-level untracked files `New` and `Synthesia-cover-letter-Eddie-Kim.docx`.
- Do a manual visual pass on mobile, laptop, and wide desktop if more design polish resumes.
- Consider a future writing/blog section only after the core portfolio and recruitment materials stay stable.
- Consider image optimization if case-study performance becomes a concern.
