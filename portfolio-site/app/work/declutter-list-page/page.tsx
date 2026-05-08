import type { Metadata } from "next";

import BulletList from "@/components/BulletList";
import {
  CaseStudyArticle,
  CaseStudyCard,
  CaseStudyFigure,
  CaseStudyFigureGrid,
  CaseStudyHeader,
  CaseStudyHero,
  CaseStudyProse,
  CaseStudySection,
  CaseStudyShell,
} from "@/components/case-study/CaseStudy";
import CaseStudyEndNav from "@/components/CaseStudyEndNav";

import appsAfter from "../../../content/case-studies/declutter-LP/assets/declutter-apps-after.png";
import appsBefore from "../../../content/case-studies/declutter-LP/assets/declutter-apps-before.png";
import desktopAfter from "../../../content/case-studies/declutter-LP/assets/declutter-desktop-after.png";
import desktopBefore from "../../../content/case-studies/declutter-LP/assets/declutter-desktop-before.png";
import desktopMacbookClean from "../../../content/case-studies/declutter-LP/assets/declutter-desktop-macbook-clean.png";
import declutterHeroMockupWide from "../../../content/case-studies/declutter-LP/assets/declutter-hero-mockup-wide-red.png";
import mwebAfter from "../../../content/case-studies/declutter-LP/assets/declutter-mweb-after.png";
import mwebBefore from "../../../content/case-studies/declutter-LP/assets/declutter-mweb-before.png";

export const metadata: Metadata = {
  title: "Declutter the List Page | Eddie Kim",
  description:
    "Case study on redesigning AutoScout24's list-page card as a high-traffic marketplace decision surface across web and app.",
};

const heroFacts = [
  {
    label: "Outcome",
    value:
      "Rolled out after validation across buyer progression, partner, and platform tradeoffs",
  },
  { label: "Company", value: "AutoScout24" },
  {
    label: "Role",
    value: "Senior Product Designer to Principal Product Designer",
  },
  { label: "Scope", value: "mWeb, desktop, iOS, Android" },
];

const whyItMattered = [
  "Buyers used the card to decide which vehicles deserved a closer look.",
  "Dealer, partner, and media teams also needed the same space to carry commercial signals.",
  "Reducing clutter meant making explicit choices about which signals stayed visible, moved, or lost prominence.",
  "The work mattered because small hierarchy changes on a high-traffic marketplace surface could affect progression, enquiries, and partner outcomes.",
];

const roleDetails = [
  {
    title: "What I directly drove",
    items: [
      "Reframed the brief from card cleanup to scarce attention and buyer progression",
      "Led concept exploration and validation planning across information density, commercial entry points, and image behaviour",
      "Translated research and measurement signals into concrete web and app recommendations",
      "Supported delivery, QA, and rollout decisions with product and engineering partners",
    ],
  },
  {
    title: "What stayed shared",
    items: [
      "Worked with product and analytics to evaluate tradeoffs across browsing progression, enquiry quality, and commercial surfaces",
      "Helped challenge proxy engagement signals when they did not reflect meaningful progression",
      "Engineering, analytics, and rollout partners owned implementation, deeper analysis, and operational rollout",
    ],
  },
];

const keyDecisions = [
  {
    title: "Back the stronger simplification",
    body: "Early mWeb testing favoured the more reduced card direction. That gave the team a reason to keep simplifying while testing which comparison and commercial signals still needed space.",
  },
  {
    title: "Treat commercial entry points as product tradeoffs",
    body: "Dealer, finance, insurance, and media goals could not all receive equal prominence. Partner links, touch targets, and placement had to prove their value against scanability and buyer progression.",
  },
  {
    title: "Trust actual progression over flattering proxies",
    body: "Follow-up validation exposed a measurement trap: richer on-card interaction could look healthy in proxy metrics while weakening actual detail-page progression. The team treated actual progression as the stronger decision signal.",
  },
  {
    title: "Let platforms diverge when the evidence diverged",
    body: "Web and native apps needed different balances of image emphasis, detail, and action density. The final direction kept shared product principles without forcing one card pattern across every surface.",
  },
];

const decisionFlow = [
  {
    decision: "Declutter level",
    evidence: "Early mWeb testing favoured the more reduced direction.",
    tradeoff: "Less density risked removing useful comparison context.",
    call: "Continue with stronger simplification and test the commercial side effects.",
  },
  {
    decision: "Partner links",
    evidence: "Declutter improved core signals, but partner outcomes diverged.",
    tradeoff:
      "No-links protected card focus; with-links protected insurance outcomes better.",
    call: "Iterate placement, touch targets, and finance treatment instead of treating the first positive result as final.",
  },
  {
    decision: "Gallery behaviour",
    evidence:
      "Users wanted richer imagery, but desktop validation showed gallery could weaken actual progression.",
    tradeoff:
      "More preview could keep users interacting on-card instead of opening detail.",
    call: "Use No Gallery on web surfaces and keep a different image balance in apps.",
  },
  {
    decision: "Measurement",
    evidence: "Reported DPVs and actual DPVs told different stories.",
    tradeoff:
      "Proxy engagement could reward interaction without proving buyer progress.",
    call: "Prioritise actual progression when deciding rollout direction.",
  },
];

const confirmedOutcomes = [
  {
    label: "Early validation",
    metric: "Stronger simplification held up",
    summary: "mWeb tests favoured the more reduced card direction",
    body: "The signal was strong enough to keep simplifying, but it also exposed finance, partner, and media tradeoffs for later iteration.",
  },
  {
    label: "Platform decision",
    metric: "No universal card",
    summary: "desktop validation made No Gallery the safer web direction",
    body: "Richer on-card interaction could weaken actual detail-page progression, so web and app surfaces kept different balances of imagery and information.",
  },
  {
    label: "Rollout",
    metric: "Shipped across markets",
    summary: "the programme moved from experiment stream into rollout",
    body: "The public case keeps all-market post-rollout impact generalized because the retained evidence is stronger on validation and rollout direction than exact final measurement.",
  },
];

const supportingOutcomes = [
  {
    label: "Transferable signal",
    title: "Product judgment under constraint",
    body: "This case shows how I handle scarce attention, competing business goals, mixed evidence, and cross-platform delivery while preserving platform differences.",
  },
];

const desktopCompareImages = [
  {
    label: "Before",
    image: desktopBefore,
    alt: "Desktop list card before declutter with more competing information and weaker hierarchy.",
  },
  {
    label: "After",
    image: desktopAfter,
    alt: "Desktop list card after declutter with clearer hierarchy and simplified information layout.",
  },
];

const mobileWebCompareImages = [
  {
    label: "Before",
    image: mwebBefore,
    alt: "Mobile web list card before declutter with denser content and more visual competition.",
    contentClassName:
      "flex min-h-[28rem] items-start justify-center sm:min-h-[32rem]",
    imageClassName:
      "h-auto max-h-[28rem] !w-auto max-w-full sm:max-h-[32rem]",
  },
  {
    label: "After",
    image: mwebAfter,
    alt: "Mobile web list card after declutter with simplified hierarchy and more focused comparison signals.",
    contentClassName:
      "flex min-h-[28rem] items-start justify-center sm:min-h-[32rem]",
    imageClassName:
      "h-auto max-h-[28rem] !w-auto max-w-full sm:max-h-[32rem]",
  },
];

const appCompareImages = [
  {
    label: "Before",
    image: appsBefore,
    alt: "Native app list card before declutter with a denser balance of imagery, details, and controls.",
    contentClassName:
      "flex min-h-[24rem] items-start justify-center sm:min-h-[26rem]",
    imageClassName:
      "h-auto max-h-[24rem] !w-auto max-w-full sm:max-h-[26rem]",
  },
  {
    label: "After",
    image: appsAfter,
    alt: "Native app list card after declutter with a different platform-specific balance of imagery and information.",
    contentClassName:
      "flex min-h-[24rem] items-start justify-center sm:min-h-[26rem]",
    imageClassName:
      "h-auto max-h-[24rem] !w-auto max-w-full sm:max-h-[26rem]",
  },
];

export default function DeclutterListPage() {
  return (
    <CaseStudyShell>
      <CaseStudyHeader />

      <CaseStudyArticle>
        <CaseStudyHero
          eyebrow="Case Study · AutoScout24 · Search & Discovery"
          title="Declutter the List Page"
          lede="Redesigning a high-traffic marketplace decision surface."
          secondaryLede="Buyers used AutoScout24's list card to compare vehicles; product teams used the same space for dealer, partner, and media goals. I led the design work across mWeb, desktop, iOS, and Android to reduce scan friction, test commercial tradeoffs, and define platform-specific card rules."
          facts={heroFacts}
        >
          <CaseStudyFigure
            image={declutterHeroMockupWide}
            alt="Wide mockup showing the decluttered AutoScout24 list page experience."
            sizes="(max-width: 767px) 1500px, 120vw"
            priority
            fullBleed
            className="mt-14"
            mediaClassName="relative h-[600px] overflow-hidden md:h-auto md:overflow-visible"
            imageClassName="absolute left-1/2 top-1/2 !h-full !w-auto max-w-none -translate-x-1/2 -translate-y-1/2 md:relative md:top-auto md:!h-auto md:!w-[120vw] md:translate-y-0"
          />
        </CaseStudyHero>

        <CaseStudySection
          eyebrow="Overview"
          title="A list card redesign aimed at faster decisions"
          intro="The list card had to answer one question fast: is this vehicle worth opening? Research and behavioural analysis showed that competing signals slowed comparison, weakened hierarchy, and made buyers work too hard before the detail page."
          className="border-t-0"
        >
          <CaseStudyProse>
            <p>
              Early research pointed to too many elements competing for
              attention, unclear hierarchy, and weak visual cues for what
              deserved a closer look.
            </p>
            <p>
              The card still had to do three jobs: make the list feel scannable,
              signal that detail lived one level deeper, and provide enough
              context for fast comparison.
            </p>
            <p>
              That meant reducing density, showing more offers above the fold,
              clarifying image behaviour, and reworking commercial entry points
              so internal demands did not all receive equal space.
            </p>
            <p>
              The work was tested through A/B experiments and follow-up
              analysis across buyer progression and enquiry behaviour. Exact
              values are not included publicly, so the case focuses on the
              validation method, decision logic, and rollout direction.
            </p>
          </CaseStudyProse>
        </CaseStudySection>

        <CaseStudySection
          eyebrow="Visual Proof"
          title="The desktop card made the hierarchy shift obvious"
          intro="The desktop comparison shows the core move: fewer competing signals, stronger scanability, and a more disciplined balance between vehicle information and commercial surfaces."
        >
          <div className="space-y-8 sm:space-y-10">
            {desktopCompareImages.map((item) => (
              <CaseStudyFigure
                key={`${item.label}-${item.alt}`}
                label={item.label}
                image={item.image}
                alt={item.alt}
              />
            ))}
          </div>
        </CaseStudySection>

        <CaseStudySection
          eyebrow="Strategic Context"
          title="This work sat inside a broader buyer reset"
          intro="The list-card redesign sat inside a wider effort to improve how buyers moved from search results to confident decisions."
        >
          <CaseStudyProse>
            <p>
              The team was improving guidance, selection, and trust across
              search and decision-making surfaces. The list page mattered
              because buyers needed to scan, compare, and progress from results
              before improvements elsewhere in the journey could matter.
            </p>
            <p>
              This case focuses on the card because it became the surface where
              buyer needs, commercial entry points, and platform differences had
              to be reconciled.
            </p>
          </CaseStudyProse>
        </CaseStudySection>

        <CaseStudySection
          eyebrow="Why This Mattered"
          title="This was a marketplace prioritisation problem"
          intro="A small hierarchy change on the list card could affect how buyers progressed and how commercial surfaces performed."
        >
          <BulletList items={whyItMattered} />
        </CaseStudySection>

        <CaseStudySection
          eyebrow="My Role"
          title="What I directly drove, and what stayed shared"
          intro="I led the design problem across multiple phases: clarify what the card should optimise for, validate the riskiest tradeoffs, and help turn repeated findings into rollout direction."
        >
          <div className="grid gap-5 2xl:grid-cols-2">
            {roleDetails.map((group) => (
              <CaseStudyCard key={group.title} title={group.title}>
                <BulletList items={group.items} />
              </CaseStudyCard>
            ))}
          </div>
        </CaseStudySection>

        <CaseStudySection
          eyebrow="Key Decisions"
          title="The most important calls were about evidence and priorities"
          intro="The work became consequential when the team had to decide what evidence to trust and what the card should prioritise on each platform."
        >
          <div className="grid gap-5 2xl:grid-cols-2">
            {keyDecisions.map((decision) => (
              <CaseStudyCard key={decision.title} title={decision.title}>
                <p className="homepage-type-body text-[color:var(--color-muted)]">
                  {decision.body}
                </p>
              </CaseStudyCard>
            ))}
          </div>
        </CaseStudySection>

        <CaseStudySection
          eyebrow="Decision Flow"
          title="How evidence became rollout rules"
          intro="In each phase, the team narrowed the card around what buyers needed to decide, while testing which business signals could move, lose prominence, or stay on-card."
        >
          <div className="grid gap-5 xl:grid-cols-2">
            {decisionFlow.map((item) => (
              <CaseStudyCard key={item.decision} title={item.decision}>
                <dl className="space-y-5">
                  <div>
                    <dt className="homepage-type-eyebrow text-[color:var(--color-muted)]">
                      Evidence
                    </dt>
                    <dd className="homepage-type-body mt-2 text-[color:var(--foreground)]">
                      {item.evidence}
                    </dd>
                  </div>
                  <div>
                    <dt className="homepage-type-eyebrow text-[color:var(--color-muted)]">
                      Tradeoff
                    </dt>
                    <dd className="homepage-type-body mt-2 text-[color:var(--foreground)]">
                      {item.tradeoff}
                    </dd>
                  </div>
                  <div>
                    <dt className="homepage-type-eyebrow text-[color:var(--color-muted)]">
                      Call
                    </dt>
                    <dd className="homepage-type-body mt-2 text-[color:var(--foreground)]">
                      {item.call}
                    </dd>
                  </div>
                </dl>
              </CaseStudyCard>
            ))}
          </div>
        </CaseStudySection>

        <CaseStudySection
          eyebrow="Platform Divergence"
          title="Apps kept a different balance of imagery and information"
          intro="The final direction kept shared principles without forcing one universal card. Apps retained a different mix of image emphasis and details because the evidence and interaction context differed from web."
        >
          <CaseStudyFigureGrid items={appCompareImages} />
        </CaseStudySection>

        <CaseStudySection
          eyebrow="Outcome / Impact"
          title="Evidence and rollout"
          intro="The team had enough evidence to move toward a cleaner card, with platform-specific limits. Early mWeb tests favoured stronger simplification; later desktop and iOS validation showed why gallery behaviour needed separate treatment."
        >
          <div className="grid gap-5 xl:grid-cols-3">
            {confirmedOutcomes.map((outcome, index) => (
              <CaseStudyCard
                key={outcome.summary}
                variant={index === 0 ? "dark" : "soft"}
              >
                <p className="homepage-type-eyebrow text-[color:var(--color-muted)]">
                  {outcome.label}
                </p>
                <p className="mt-6 text-3xl font-medium leading-tight sm:text-4xl">
                  {outcome.metric}
                </p>
                <p className="homepage-type-subhead mt-4 text-[color:var(--foreground)]">
                  {outcome.summary}
                </p>
                <p className="homepage-type-body mt-6 text-[color:var(--color-muted)]">
                  {outcome.body}
                </p>
              </CaseStudyCard>
            ))}
          </div>

          {supportingOutcomes.map((outcome) => (
            <CaseStudyCard key={outcome.title} className="!h-auto">
              <p className="homepage-type-eyebrow text-[color:var(--color-muted)]">
                {outcome.label}
              </p>
              <h3 className="homepage-type-item-title mt-5 text-[color:var(--foreground)]">
                {outcome.title}
              </h3>
              <p className="homepage-type-body mt-5 text-[color:var(--color-muted)]">
                {outcome.body}
              </p>
            </CaseStudyCard>
          ))}
        </CaseStudySection>

        <CaseStudySection
          eyebrow="Mobile Web"
          title="The same declutter logic had to hold up in tighter space"
          intro="On mobile web, the reduced card made comparison cues easier to read within tighter space and forced sharper decisions about which signals deserved prominence."
          className="py-10 sm:py-20 lg:py-24"
          contentClassName="space-y-6 sm:space-y-8"
        >
          <CaseStudyFigureGrid items={mobileWebCompareImages} />
        </CaseStudySection>

        <CaseStudySection
          eyebrow="Reflection"
          title="What this project clarified"
          intro="Simplification held up only when the team named what the card should optimise for and which measures deserved trust."
          className="py-10 sm:py-20 lg:py-24"
          contentClassName="space-y-6 sm:space-y-8"
        >
          <CaseStudyProse>
            <p>
              High-traffic marketplace surfaces get clearer when teams define
              the buyer decision, choose the right progress measures, and let
              platforms diverge when the tradeoffs differ.
            </p>
          </CaseStudyProse>
        </CaseStudySection>

        <CaseStudyFigure
          image={desktopMacbookClean}
          alt="Forward-facing MacBook mockup showing the decluttered AutoScout24 desktop list page."
          sizes="(min-width: 1280px) 64rem, 100vw"
          framed={false}
        />

        <CaseStudyEndNav currentSlug="declutter-list-page" showDivider={false} />
      </CaseStudyArticle>
    </CaseStudyShell>
  );
}
