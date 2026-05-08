# Eddie Kim Portfolio Site

Public portfolio site for Eddie Kim, built with Next.js, TypeScript, and Tailwind CSS.

The site presents Eddie as a Principal Product Designer and AI Design Lead, with case studies across AutoScout24 search and discovery, AI design leadership, automotive product concepts, and connected mobility.

## Commands

```bash
npm run dev
npm run lint
npm run build
./node_modules/.bin/tsc --noEmit
```

Run commands from this folder, or use the root scripts from one level up.

## Key Files

- `app/page.tsx` - homepage composition.
- `components/homepage/content.ts` - selected work data and homepage project ordering.
- `app/work/*/page.tsx` - case-study pages.
- `components/case-study/CaseStudy.tsx` - shared case-study layout primitives.
- `components/SiteFooter.tsx` - global footer.
- `RESUME.md` - source resume/profile facts.
- `TONE-OF-VOICE.md` - portfolio copy guidance.

## Current Routes

- `/`
- `/work/new-search`
- `/work/declutter-list-page`
- `/work/strategic-ai-design-leadership`
- `/work/daimler-subscription-concept`
- `/work/smart-connected-car-app`

## Editing Notes

- Keep public claims grounded in existing source material.
- Do not add new metrics or achievements unless Eddie provides the source.
- Preserve the minimal editorial visual direction.
- Keep architecture simple and dependency-light.
- For homepage ordering, remember that `featuredProjects[0]` drives the hero-to-work handoff.

## Verification

Before pushing visible portfolio changes, run:

```bash
npm run lint
./node_modules/.bin/tsc --noEmit
npm run build
```

When possible, also smoke check the homepage and case-study routes locally.
