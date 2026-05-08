# Applications Tracker

Use this as the main source of truth for the job-search pipeline. Keep updates short and factual so future sessions can quickly understand what is active, stale, blocked, or closed.

## Status Model

Use one of these statuses unless there is a clear reason to add another:

`Lead`, `Researching`, `Preparing`, `Applied`, `Recruiter screen`, `Interviewing`, `Assignment`, `Final stage`, `Offer`, `Rejected`, `Withdrawn`, `Archived`

See `schema/statuses.md` for definitions.

Priority labels follow the imported ChatGPT tracker:

`P0` = highest active priority, `P1` = strong target, `P2` = possible target / useful signal, `P3` = low priority / mostly exploratory, `Unknown` = not enough context.

Use one priority when possible. If imported context explicitly gives a range, such as `P1/P2`, keep the range until the company or role is revalidated.

Imported ChatGPT context may use approximate dates such as `Around 2026-05-04` or `Before 2026-05-08`. Treat those as placeholders until confirmed from email, ATS, recruiter messages, or job-platform history.

## Active Pipeline

| Company | Role | Status | Priority | Last update | Next action | Due | Links / Notes |
|---|---|---|---|---|---|---|---|
| Cleo | Principal Product Designer / Lead Product Designer | Recruiter screen | P1 | Around 2026-05-07 | Clarify exact role title, level, location constraints, work setup, and work authorization constraints if follow-up is appropriate. |  | UK-centric role context; Berlin eligibility needs confirmation. First recruiter/design-team screen recorded in prior ChatGPT context. Sources: `inbox/chatgpt/2026-05-08-001-recruitment-tracker.md`, `company-prioritisation.md`. |
| Anthropic | Product Designer, Claude Code | Applied | P0 | Around 2026-05-04 | Wait for response or plan targeted follow-up if a contact exists. |  | US role in San Francisco, New York City, or Seattle; relocation would be required if process moves forward. See `company-prioritisation.md` for P0 rationale. |
| Mistral AI | Product Designer, Mistral Cloud | Applied | P0 | Around 2026-05-04 to 2026-05-06 | Wait for response; if contacted, clarify product area, city expectations, and founding-design-team scope. |  | Paris / London, on-site. Exact application date needs confirmation. See `company-prioritisation.md` for P0 rationale. |
| Parloa | Staff Product Designer, Consumer Experience | Applied | P1 | Before 2026-05-08 | Confirm whether application is submitted and whether there is an active recruiter/process. |  | Berlin office context. Status imported from prior context but needs confirmation. |
| ElevenLabs | Product Designer | Applied | P1 | Before 2026-05-08 | Wait for response or identify relevant design/recruiting contact. |  | Role level, product area, location, and application date need confirmation. |
| Linear | Product Designer | Applied | P1 | Before 2026-05-08 | Wait for response; consider portfolio angle around craft, product systems, and clarity. |  | Exact role title/location and application date need confirmation. Company prioritisation ranks Linear as P1. |
| Intercom | Staff Designer / Staff Product Designer | Applied | P1 | 2026-05-08 | Wait for response; consider targeted follow-up if there is a relevant recruiting or design contact. |  | Reapplied after Principal Product Designer rejection. Keep this Staff application separate from the archived Principal process. Prior context identified possible UK-based AI/product design recruiting contacts. |
| Mistral AI | Product Designer - Documentation | Researching | P2 | 2026-05-06 | Keep as secondary Mistral option only if better-aligned roles stall. |  | Paris / London / Marseille, on-site. No application confirmed. |
| Mistral AI | Product Designer - Observability | Researching | P1/P2 | 2026-05-05 | Evaluate only if relocation to Paris is acceptable and role scope has enough seniority/product leverage. |  | Paris, on-site. No application confirmed. Company is P0, but this specific role remains a secondary Mistral option until fit is validated. |

## Leads To Qualify

Use this section for companies or roles that might be interesting but are not yet worth a full company note.

| Company | Priority | Signal | Why it might fit | Next check | Link |
|---|---|---|---|---|---|
| Harvey | P0 | Staff Product Designer, New York hybrid | Agentic AI, enterprise/professional-services workflows, product systems | Decide whether US relocation and legal-domain AI are worth pursuing; check whether role is still open. |  |
| Legora | P1 | Unspecified design role | AI-native legal/professional-services company with enterprise workflow complexity | Check open roles, location, level, and whether design maturity is strong enough. |  |
| Glean | P1 | Unspecified design role | Enterprise AI/search/knowledge work fit, but current role availability is unknown | Check open roles, European hiring options, location, and level. |  |
| Dust | P1 | Unspecified design role | European AI-native company with workplace AI, agents, knowledge workflows, and technical UX relevance | Check open roles, location, design maturity, and seniority. |  |
| Langdock | P1 | Unspecified design role | European enterprise AI relevance and possibly lower relocation burden | Check open roles, location policy, product traction, and seniority. |  |
| DeepL | P1 | Staff Product Designer | AI product, language AI, product craft; likely Europe/Germany-relevant | Check current openings and whether Staff-level scope exists. |  |
| Booking.com | P2 | Unspecified design role | Marketplace/platform signal with search, discovery, ranking, or personalization relevance | Only pursue if role has Staff/Principal scope and strong marketplace leverage. |  |
| Zalando | P2 | Unspecified design role | Berlin-relevant marketplace/product company | Check current Staff/Principal openings only. |  |
| GetYourGuide | P2 | Unspecified design role | Berlin-relevant marketplace/travel product with search, discovery, conversion, and growth relevance | Check current openings only if scope is senior enough. |  |
| Adyen | P2 | Unspecified design role | Strong product/platform company signal | Check current product design openings and seniority. |  |
| Personio | P2 | Senior Staff Product Designer | Europe/Germany relevance likely; senior product systems scope possible | Check whether Senior Staff role exists/currently open and whether scope fits. |  |
| Lovable | P2 | Unspecified product design role | AI/product signal, but Stockholm relocation was noted as less attractive | Keep low priority unless role/scope is exceptional. |  |
| Q4 | P3 | Unspecified design role | Previously evaluated company signal | Only revisit if a clearly strong design/product leadership role appears. |  |
| Remote | P2 | Unspecified product design role | Remote/company signal from prior comparisons, but not covered in the prioritisation import | Check current openings and role level if still interesting. |  |
| Zest Search | P2/P3 | Unspecified role | Prior company trajectory/career-signal question, but not covered in the prioritisation import | Verify company trajectory/current roles before considering. |  |

## Confirmation Queue

These are the highest-risk uncertainties from the ChatGPT imports so far.

| Item | Confirmation needed | Why it matters |
|---|---|---|
| Cleo | Exact role title, current stage, location eligibility, and whether a next step is pending. | Avoid tailoring materials to the wrong level or work setup. |
| Parloa | Whether application was submitted and whether there is an active process. | Status may be overstated. |
| ElevenLabs | Exact role title, level, location, and application date. | Needed before tailored follow-up or company note. |
| Linear | Exact role title/location and application date. | Needed before tailored follow-up or company note. |
| Mistral AI | Which roles were only researched versus actually applied to. | Avoid duplicate or confusing outreach. |
| AI research targets | Whether Harvey, Legora, Glean, Dust, Langdock, DeepL, and Personio have current open roles. | Old role availability should not be treated as current. |
| General leads | Whether Booking.com, Zalando, GetYourGuide, Adyen, Q4, Remote, Lovable, and Zest Search have specific roles worth pursuing. | Keep speculative targets from crowding the active pipeline. |
| Prioritisation tiers | Whether company priority still matches current openings, location, visa, compensation, and company trajectory. | The P0/P1/P2/P3 ranking is useful direction, not fresh market research. |

## Follow-Up Log

Track safe follow-up actions here. Use role/contact descriptors, not exact names. Keep direct contact details, private recruiter notes, and outreach strategy in `recruitment/private/`.

| Date | Company | Contact descriptor | Channel | Action | Outcome / Next step |
|---|---|---|---|---|---|

## Closed / Archived

Move items here when they are no longer active. Keep the reason short so patterns become visible over time.

| Company | Role | Final status | Closed date | Reason | Notes |
|---|---|---|---|---|---|
| Intercom | Principal Product Designer | Rejected | Around 2026-05-08 | Rejected from Principal role. | Separate Staff Designer / Staff Product Designer application is now active. |
| Synthesia | Product Designer, Growth / Staff-Principal level | Rejected | Around 2026-05-04 | Rejected. | London relocation was noted as required or likely. Exact role title/level needs confirmation. |
| n8n | Senior/Staff Product Designer | Rejected | Before 2026-05-08 | Rejected. | Exact rejection date and location/work setup were not retained in imported context. |
