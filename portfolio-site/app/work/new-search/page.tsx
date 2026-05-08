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

import appsSearchAfter from "../../../content/case-studies/new-search/assets/apps_search_V3_after.png";
import appsMockupDark from "../../../content/case-studies/new-search/assets/apps_mockup_dark.png";
import appsSearchV1Baseline from "../../../content/case-studies/new-search/assets/apps_search_v1_baseline.png";
import appsSearchV2Intermediate from "../../../content/case-studies/new-search/assets/apps_search_v2_failed.png";
import desktopBefore from "../../../content/case-studies/new-search/assets/desktop_before.png";
import desktopSearchAfter from "../../../content/case-studies/new-search/assets/desktop_search_after.png";
import desktopSearchAfterModal from "../../../content/case-studies/new-search/assets/desktop_search_after_modal.png";
import mwebSearchAfterMakeModel from "../../../content/case-studies/new-search/assets/mweb_search_after_make_model.png";

export const metadata: Metadata = {
  title: "New Search | Eddie Kim",
  description:
    "Case study on resetting AutoScout24's marketplace search, intent expression, and filters through a staged app and web baseline.",
};

const appsMockupVideoSrc = "/case-studies/new-search/apps_mockup_video_light.mp4";

const heroFacts = [
  {
    label: "Role",
    value: "Principal Product Designer, Native Apps Design Lead",
  },
  {
    label: "Scope",
    value: "Search across iOS, Android, desktop, and mobile web",
  },
  {
    label: "Timeframe",
    value: "2024-2026 staged rollout",
  },
  {
    label: "Team",
    value: "Product, research, engineering, analytics, and app/web design",
  },
  {
    label: "Reset",
    value: "Triggered by mixed earlier results",
  },
  {
    label: "Evidence",
    value:
      "Research, experimentation, and post-launch analysis with proof that differed by platform",
  },
];

const heroHighlights = [
  {
    label: "Weak direction reset",
    metricLines: ["Reset", "after", "evidence"],
    body: "Earlier app validation exposed a weak direction. We rebuilt the baseline around clearer filter hierarchy, earlier intent entry, and reviewable selections before buyers returned to results.",
  },
  {
    label: "iOS benchmark and rollout",
    metricLines: ["iOS", "proof"],
    body: "iOS gave the team its cleanest proof point: about +6% leads from the list page, with detail-page engagement stable, before broad rollout.",
  },
  {
    label: "Platform judgment",
    metricLines: ["Adapted", "by", "surface"],
    body: "Android and web extended the same product model with narrower proof. We adapted save behaviour and rollout scope by platform, then shipped web as a simpler baseline the team could build on.",
  },
];

const roleSignals = [
  "Directly drove: app filter information architecture, the main filter overview, filter-entry hierarchy, make/model placement, and completion behaviour across iOS and Android.",
  "Influenced: cross-platform baseline decisions with product, research, engineering, analytics, and another senior designer as the direction moved into web.",
  "Why I pushed it: make/model carried high buyer intent, while the old structure asked people to manage too much filter depth before the product understood their search.",
  "Framed risk: helped move the team away from a weak earlier direction and toward a baseline we could test, launch, and extend.",
  "Shared outcomes: research, experimentation, rollout, and commercial results were team-owned, so I treat them as shared evidence rather than personal attribution.",
];

const problemSignals = [
  "Search sat close to one of the marketplace's most valuable moments: moving from browsing to enquiry. When filtering was hard to use, buyers had a harder time finding relevant cars and the path to enquiries weakened.",
  "The reset was triggered by evidence, not preference. Earlier validation showed the existing app direction underperforming on core enquiry signals, which made another cleanup pass hard to justify.",
  "Cross-platform discovery showed the same structural issues repeating across desktop, mobile web, iOS, and Android: filters were hard to find, hard to edit from results, and not clearly organised once applied.",
  "Strategy work later showed that filter engagement on mobile web was shallow. That same work framed New Search as growth work tied to stronger enquiry paths.",
];

const experienceChanges = [
  "Before the reset, buyers met too much filter structure before the product understood their intent. Make and model sat too deep, applied filters took work to review, and app and web patterns had drifted.",
  "The reset brought important narrowing decisions forward, grouped filters around clearer choices, and let buyers drill into one decision at a time.",
  "The hard part was exposing richer vehicle data while keeping the experience light enough to use. The system needed to support nuanced intent without turning every search into configuration work.",
  "The baseline was adapted rather than cloned: Android moved toward platform-appropriate save behaviour with extra clarity work still needed, while web launched a narrower baseline first and deferred richer enhancements until later.",
];

const taxonomyWorkstream = {
  title: "New Make/Model Taxonomy and Filter Experience",
  paragraphs: [
    "As part of the broader New Search reset, I helped shape a new make-and-model experience for more nuanced vehicle data. The legacy interaction assumed buyers could move cleanly from make to model, but that stopped scaling once generation, variant, and engine choices started to matter.",
    "This became a mental-model and intent-expression problem: how to expose a richer structure without overwhelming people. I explored search, drilldown, grouped dimensions, and clearer selection management so the system could feel more precise without feeling heavier. The work is still evolving, so I treat it as strategically important work in progress rather than a resolved win.",
  ],
};

const makeModelDecisionAnnotations = [
  {
    label: "Old problem",
    body: "The old make-to-model path assumed a simple hierarchy and buried a high-intent narrowing decision too late.",
  },
  {
    label: "Design move",
    body: "I pushed make/model earlier and explored search, drilldown, grouped dimensions, and clearer selected-state management.",
  },
  {
    label: "Tradeoff",
    body: "The richer taxonomy needed to stay precise without turning search into configuration work.",
  },
  {
    label: "Why it mattered",
    body: "A clearer intent entry gave buyers a faster path to relevant inventory and gave the team a cleaner model to test.",
  },
];

const proofSignals = [
  "Intent expression: helped buyers express complex vehicle choices without making the filter system feel heavier.",
  "Search systems: clarified hierarchy, taxonomy, selection management, and return-to-results behaviour.",
  "Evidence discipline: reset the direction after weak validation and used the strongest proof to sequence rollout.",
  "Platform judgment: aligned the product model across surfaces while adapting interaction details by platform.",
  "Commercial awareness: connected buyer clarity to list-page progression and enquiry paths without overstating causality.",
];

const decisionCards = [
  {
    title: "Reset the baseline instead of polishing a weak direction",
    body: "Earlier app validation weakened confidence in the existing direction. We reset the filter model, reduced structural complexity, and created a baseline the team could validate and extend.",
  },
  {
    title: "Validate the new direction where the proof was strongest",
    body: "iOS became the first clean proof point. The redesigned baseline moved commercial progression signals in the right direction while maintaining downstream engagement.",
  },
  {
    title: "Adapt the baseline by platform and ship web in stages",
    body: "We adapted the same product model to each surface. Android evidence supported the direction more narrowly, while web shipped later as a simpler baseline with richer enhancements deferred.",
  },
];

const platformSignals = [
  {
    label: "iOS",
    metric: "Strongest validation",
    body: "The iOS benchmark selected the new direction and later rollout evidence confirmed broad launch across AutoScout24 markets and white labels.",
  },
  {
    label: "Android",
    metric: "Supporting signal",
    body: "Android supported the same direction through narrower evidence. Research and validation favoured platform-appropriate save behaviour, but the available proof is less complete than the iOS story.",
  },
  {
    label: "Web",
    metric: "Phased baseline",
    body: "Web launched later as a simpler baseline. Post-launch analysis indicated positive movement on key progression signals while mobile web and downstream engagement stayed broadly stable.",
  },
];

const heroComparisonImages = [
  {
    label: "Before reset",
    image: desktopBefore,
    alt: "Desktop results page before the New Search reset, with a longer filter rail and weaker visual hierarchy.",
    caption: "Longer filter rail and weaker hierarchy on results.",
    priority: true,
  },
  {
    label: "Reset baseline",
    image: desktopSearchAfter,
    alt: "Desktop results page after the New Search reset, with a clearer filter model and stronger applied-state control.",
    caption: "Clearer filter model and stronger control from results.",
    priority: true,
  },
];

const decisionComparisonImages = [
  {
    label: "Legacy baseline",
    image: appsSearchV1Baseline,
    alt: "An older app search baseline with broader filter clutter, heavier visual noise, and weaker structure.",
    caption: "The older app baseline carried heavier noise and weaker structure.",
    contentClassName: "flex items-start justify-center",
    imageClassName:
      "h-auto max-h-[26rem] !w-auto max-w-full sm:max-h-[30rem]",
  },
  {
    label: "Intermediate direction",
    image: appsSearchV2Intermediate,
    alt: "An intermediate app search direction with layered filter cards that still carried structural friction.",
    caption: "An intermediate direction that still carried structural friction.",
    contentClassName: "flex items-start justify-center",
    imageClassName:
      "h-auto max-h-[26rem] !w-auto max-w-full sm:max-h-[30rem]",
  },
  {
    label: "Stronger baseline",
    image: appsSearchAfter,
    alt: "The stronger app search baseline with a clearer filter overview and simpler hierarchy.",
    caption: "The clearer baseline the team could validate and extend.",
    contentClassName: "flex items-start justify-center",
    imageClassName:
      "h-auto max-h-[26rem] !w-auto max-w-full sm:max-h-[30rem]",
  },
];

export default function NewSearchPage() {
  return (
    <CaseStudyShell>
      <CaseStudyHeader />

      <CaseStudyArticle>
        <CaseStudyHero
          eyebrow="Case Study · AutoScout24 · Search & Discovery"
          title="New Search"
          lede="New Search reset how buyers narrow complex car inventory across app and web. I led the app filter direction and helped shape a cross-platform baseline after earlier validation exposed a weak search model. The work brought clearer intent entry, platform-specific interaction choices, and stronger evidence discipline to one of AutoScout24's highest-value buyer journeys."
          facts={heroFacts}
        >
          <div className="mt-12 grid gap-5 md:grid-cols-2 2xl:grid-cols-3">
            {heroHighlights.map((item, index) => (
              <CaseStudyCard
                key={item.label}
                variant={index === 0 ? "dark" : "soft"}
              >
                <p className="homepage-type-eyebrow text-[color:var(--color-muted)]">
                  {item.label}
                </p>
                <p className="homepage-type-section-heading mt-5 text-[color:var(--foreground)]">
                  {item.metricLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </p>
                <p className="homepage-type-body mt-5 text-[color:var(--color-muted)]">
                  {item.body}
                </p>
              </CaseStudyCard>
            ))}
          </div>

          <CaseStudyFigure className="mt-14" framed={false}>
            <video
              className="mx-auto h-auto w-full max-w-[33rem]"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              poster={appsSearchAfter.src}
            >
              <source src={appsMockupVideoSrc} type="video/mp4" />
            </video>
          </CaseStudyFigure>
        </CaseStudyHero>

        <CaseStudySection
          eyebrow="Overview"
          title="A staged reset, not one clean launch"
          intro="This initiative moved through different levels of proof by platform, so the case study works best as one programme around intent expression and filter discovery rather than one uniform redesign story."
          className="border-t-0"
        >
          <CaseStudyProse>
            <p>
              A weaker app direction forced the reset. iOS became the first
              clear validation point, Android moved through research and
              validation, and web launched later as a narrower baseline.
            </p>

            <p>
              That sequencing mattered. The goal was not to force identical
              behaviour across surfaces, but to establish a search model each
              platform could support credibly and then ship where the evidence
              was strong enough.
            </p>
            <p>
              Because the full performance picture is confidential, I focus on
              evidence I can share: research, experimentation, and post-launch
              analysis showed positive movement in key commercial progression
              signals on the strongest surfaces while downstream engagement
              stayed broadly stable.
            </p>
          </CaseStudyProse>

          <div className="space-y-6">
            <p className="homepage-type-eyebrow text-[color:var(--color-muted)]">
              Reset at a glance
            </p>

            <div className="space-y-8 sm:space-y-10">
              {heroComparisonImages.map((item) => (
                <CaseStudyFigure
                  key={`${item.label}-${item.alt}`}
                  label={item.label}
                  image={item.image}
                  alt={item.alt}
                  caption={item.caption}
                  priority={item.priority}
                  framed={false}
                />
              ))}
            </div>
          </div>
        </CaseStudySection>

        <CaseStudySection
          eyebrow="Product Judgment"
          title="What this work proves"
          intro="My job was to help turn complex user intent, product constraints, and platform differences into a baseline teams could test and extend."
        >
          <BulletList items={proofSignals} />
        </CaseStudySection>

        <CaseStudySection
          eyebrow="Strategic Foundation"
          title="The reset originated in a strategic vision for the buyer experience"
          intro="New Search did not start as an isolated UI redesign. It came out of earlier strategic work that clarified what the buyer journey needed to do better across search and decision-making surfaces."
        >
          <CaseStudyProse>
            <p>
              Before this reset moved into execution, I was part of the
              upstream buyer-side vision work that helped reframe the experience
              around guidance, selection, and trust. That work brought together
              research synthesis, market review, concept development, and
              stakeholder alignment across search, list, and detail surfaces. It
              gave the team a clearer strategic foundation for what a stronger
              buyer journey should do, and New Search became one of the
              clearest downstream expressions of that direction.
            </p>

            <p>
              For this case study, I am not treating that broader work as a
              separate product launch or claiming sole ownership of it. I am
              including it because it materially shaped the problem framing,
              design principles, and cross-platform baseline decisions that
              followed.
            </p>
          </CaseStudyProse>
        </CaseStudySection>

        <CaseStudySection
          eyebrow="The Problem"
          title="Why search needed a reset"
          intro="This was not a cosmetic redesign. Friction in search was affecting both the buyer experience and a key commercial funnel, and the existing direction no longer had the evidence to justify incremental improvement."
        >
          <BulletList items={problemSignals} />
        </CaseStudySection>

        <CaseStudySection
          eyebrow="The Change"
          title="What changed in the baseline"
          intro="The high-value changes were structural: clearer filter hierarchy, stronger entry points to high-value choices, and interaction patterns the team could actually validate and roll out without hiding the inventory complexity buyers needed to express."
        >
          <div className="space-y-10">
            <BulletList items={experienceChanges} />

            <div className="grid gap-8 2xl:grid-cols-[minmax(0,1fr)_18rem] 2xl:items-start">
              <div>
                <p className="homepage-type-eyebrow text-[color:var(--color-muted)]">
                  Important workstream
                </p>
                <h3 className="homepage-type-item-title mt-4 max-w-3xl text-[color:var(--foreground)]">
                  {taxonomyWorkstream.title}
                </h3>
                <div className="homepage-type-body mt-5 max-w-3xl space-y-4 text-[color:var(--color-muted)]">
                  {taxonomyWorkstream.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>

              <CaseStudyFigure
                label="Annotated decision"
                image={mwebSearchAfterMakeModel}
                alt="Mobile web make and model selection flow showing how the reset brought a high-value filtering decision earlier in the experience."
                caption="On mobile web, make and model moved earlier into a clearer selection flow."
                imageClassName="h-auto max-h-[30rem] !w-auto max-w-full"
                mediaClassName="flex items-start justify-center"
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {makeModelDecisionAnnotations.map((item) => (
                <div
                  key={item.label}
                  className="rounded-lg border border-[color:var(--color-line)] p-5 sm:p-6"
                >
                  <p className="homepage-type-eyebrow text-[color:var(--color-muted)]">
                    {item.label}
                  </p>
                  <p className="homepage-type-body mt-3 text-[color:var(--color-muted)]">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>

            <CaseStudyFigure
              label="Desktop interaction state"
              image={desktopSearchAfterModal}
              alt="Desktop results page with a focused filter modal open, showing one decision at a time without forcing the buyer to manage the full filter set at once."
              caption="On desktop results, buyers could refine one filter in context instead of managing the full filter set at once."
            />
          </div>
        </CaseStudySection>

        <CaseStudySection
          eyebrow="My Role"
          title="What I owned, influenced, and shared"
          intro="My role was strongest in the app filter direction and the product decisions around the baseline. I separate direct ownership from shared team outcomes because the evidence and rollout were collaborative."
        >
          <BulletList items={roleSignals} />
        </CaseStudySection>

        <CaseStudySection
          eyebrow="Key Decisions"
          title="Three decisions changed the trajectory"
          intro="This is the clearest representation of the work: when to reset, where to trust the evidence, and where not to flatten real platform differences."
        >
          <div className="space-y-10">
            <div className="space-y-6">
              <p className="homepage-type-eyebrow text-[color:var(--color-muted)]">
                Decision 01 in practice
              </p>
              <h3 className="homepage-type-item-title max-w-3xl text-[color:var(--foreground)]">
                Legacy baseline, intermediate direction, stronger reset
              </h3>
              <p className="homepage-type-body max-w-3xl text-[color:var(--color-muted)]">
                Buyers met too much filter structure before the product
                understood their intent. The reset brought high-value narrowing
                decisions forward, made selected filters easier to review, and
                gave the team a cleaner model to validate.
              </p>

              <CaseStudyFigureGrid items={decisionComparisonImages} />
            </div>

            <div className="overflow-hidden rounded-lg border border-[color:var(--color-line)]">
              {decisionCards.map((card, index) => (
                <div
                  key={card.title}
                  className="grid gap-5 border-b border-[color:var(--color-line)] px-6 py-7 last:border-b-0 sm:px-8 lg:grid-cols-[5.5rem_minmax(0,1fr)] lg:gap-8"
                >
                  <p className="homepage-type-eyebrow text-[color:var(--color-muted)]">
                    {String(index + 1).padStart(2, "0")}
                  </p>

                  <div className="space-y-3">
                    <h3 className="homepage-type-item-title max-w-2xl text-[color:var(--foreground)]">
                      {card.title}
                    </h3>
                    <p className="homepage-type-body max-w-3xl text-[color:var(--color-muted)]">
                      {card.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CaseStudySection>

        <CaseStudySection
          eyebrow="Outcomes / Impact"
          title="A stronger baseline, validated first on iOS"
          intro="New Search gave the team a clearer search baseline and proved the direction most cleanly on iOS. Android and web extended the model with narrower evidence, so the result reads as a staged product-system outcome rather than one uniform launch story."
        >
          <CaseStudyCard variant="soft" className="!h-auto">
            <div className="space-y-8">
              {platformSignals.map((item, index) => (
                <div
                  key={item.label}
                  className={
                    index < platformSignals.length - 1
                      ? "border-b border-[color:var(--color-line)] pb-8"
                      : ""
                  }
                >
                  <p className="homepage-type-eyebrow text-[color:var(--color-muted)]">
                    {item.label}
                  </p>
                  <p className="homepage-type-section-heading homepage-type-section-heading--compact mt-3 text-[color:var(--foreground)]">
                    {item.metric}
                  </p>
                  <p className="homepage-type-body mt-3 text-[color:var(--color-muted)]">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </CaseStudyCard>

          <CaseStudyProse>
            <p>
              Broader strategy work around New Search modelled larger upside and
              tied the programme to stronger enquiry paths. I treat that as
              business-case context rather than delivered outcome. The delivered
              story is tighter: the team replaced a fragmented search model with
              a clearer baseline, validated the strongest surface first, and
              carried the direction across platforms with evidence calibrated to
              each surface.
            </p>
          </CaseStudyProse>
        </CaseStudySection>

        <CaseStudyFigure
          image={appsMockupDark}
          alt="Dark app mockup used as the closing visual for the New Search case study."
          sizes="100vw"
          fullBleed
          className="bg-[#101010]"
          imageClassName="h-auto w-full"
        />

        <CaseStudyEndNav currentSlug="new-search" showDivider={false} />
      </CaseStudyArticle>
    </CaseStudyShell>
  );
}
