# Recruitment Workspace

This folder is a file-based command center for Eddie's job search. It is meant to hold durable context across Codex and ChatGPT sessions: target companies, role research, application status, outreach, interview prep, materials, and weekly next actions.

The first version is intentionally Markdown-only. Keep the system easy to update before turning any part of it into a dashboard.

## Folder Map

| Path | Purpose |
|---|---|
| `applications.md` | Main pipeline tracker for companies, roles, statuses, next actions, and outcomes. |
| `company-prioritisation.md` | Working decision guide for target company tiers, fit logic, and refresh checks. |
| `companies/` | One note per company or opportunity when a target needs deeper research. |
| `materials.md` | Tracks resumes, cover letters, portfolio variants, outreach snippets, and interview materials. |
| `messaging.md` | Reusable positioning, outreach, interview, portfolio review, and compensation/location language. |
| `portfolio-positioning.md` | Recruitment-facing guide for choosing and framing portfolio cases against the current portfolio repo. |
| `schema/` | Status definitions, field guidance, and data conventions. |
| `templates/` | Copyable Markdown templates for recurring job-search work. |
| `inbox/chatgpt/` | Landing area for context brought over from ChatGPT before it is cleaned up. |
| `private/` | Local-only sensitive notes, drafts, raw exports, compensation details, and anything not ready for GitHub. |

## Privacy Boundary

Assume this repo may eventually be pushed to GitHub. Keep versioned files concise, factual, and safe to share in a private repo. Put raw exports, private drafts, compensation notes, and anything sensitive in ignored paths:

- `recruitment/private/`
- `recruitment/inbox/chatgpt/raw/`

Do not add invented claims, inflated metrics, or unsourced achievements to job materials. Pull career claims from existing portfolio sources such as `portfolio-site/RESUME.md`, `portfolio-site/components/PROFILE.md`, and published case studies.

## Operating Rhythm

1. Add every lead or role to `applications.md`.
2. Move the status forward only when a real event happens.
3. Create a company note from `templates/company-research.md` when the company becomes worth serious attention.
4. Capture messy ChatGPT context in `inbox/chatgpt/`, then distill only useful facts into the tracker, company notes, or materials.
5. Review `weekly-review.md` once per week to unblock stale applications and decide what to do next.

## Reference Routing

Use `codex-library` for source routing before deeper research-backed work. Useful validated reference areas:

- Content design: cover letters, profile copy, portfolio tailoring, message clarity.
- Communication: recruiter outreach, stakeholder follow-ups, interview narratives, negotiation prep.
- Strategy and systems: company research, market positioning, role-fit analysis.
- Product and UX research: role hypotheses, evidence plans, interview questions, and opportunity evaluation.

When using library-backed guidance, prefer validated notes and keep outputs paraphrased and practical.
