# Eddie Portfolio

Modern portfolio site and recruitment workspace for Eddie Kim.

## What Is In This Repo

- `portfolio-site/` - the public Next.js portfolio site.
- `recruitment/` - Markdown-based job-search and application tracking workspace.
- `claude_handoff.md` - current handoff notes for the next coding session.
- `PLAN.md` - lightweight project status and next-step map.

## Portfolio Site

The portfolio is built with Next.js, TypeScript, and Tailwind CSS. It focuses on Eddie's product design leadership across search, discovery, AI design systems, marketplace UX, and automotive product work.

Common commands from the repo root:

```bash
npm run dev
npm run lint
npm run build
```

TypeScript-only check:

```bash
cd portfolio-site
./node_modules/.bin/tsc --noEmit
```

## Recruitment Workspace

The `recruitment/` folder contains public-safe Markdown trackers, templates, and positioning notes. Sensitive notes and raw exports should stay in ignored paths:

- `recruitment/private/`
- `recruitment/inbox/chatgpt/raw/`

## Current Handoff

Before starting a new round of work, read:

1. `AGENTS.md`
2. `claude_handoff.md`
3. `portfolio-site/RESUME.md`
4. `portfolio-site/TONE-OF-VOICE.md`
