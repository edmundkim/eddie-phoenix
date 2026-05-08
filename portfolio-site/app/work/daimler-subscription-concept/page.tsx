import type { Metadata } from "next";

import {
  CaseStudyArticle,
  CaseStudyCard,
  CaseStudyFigure,
  CaseStudyHeader,
  CaseStudyHero,
  CaseStudyProse,
  CaseStudySection,
  CaseStudyShell,
} from "@/components/case-study/CaseStudy";
import CaseStudyEndNav from "@/components/CaseStudyEndNav";

import heroMockup from "../../../content/legacy-projects/daimler-subscription/assets/Clay_Mockup___7_.png";
import decisionsEvidence from "../../../content/legacy-projects/daimler-subscription/assets/Screenshot+2022-04-11+at+16.11.37.png";
import outcomeEvidence from "../../../content/legacy-projects/daimler-subscription/assets/Screenshot+2022-04-11+at+16.22.34.png";
import flowArtifact from "../../../content/legacy-projects/daimler-subscription/assets/flow_v3.png";
import closingMockup from "../../../content/legacy-projects/daimler-subscription/assets/Mockup.png";

export const metadata: Metadata = {
  title: "Daimler Vehicle Subscription Concept | Eddie Kim",
  description:
    "Supporting case study on making an unfamiliar Daimler subscription service model clear enough to test, align around, and move toward MVP definition.",
};

const heroFacts = [
  {
    label: "Project type",
    value: "Greenfield vehicle subscription concept",
  },
  {
    label: "Timeframe",
    value: "Two-month concept engagement",
  },
  {
    label: "Role",
    value: "Experience Design Lead, Deloitte Digital Germany",
  },
  {
    label: "Scope",
    value: "Selection through lifecycle management on desktop and mobile web",
  },
  {
    label: "Status",
    value: "Pre-launch concept, approved and tested",
  },
  {
    label: "Outcome",
    value: "Shared service model and testing findings for MVP definition",
  },
];

const decisionCards = [
  {
    title: "Define the full relationship, not just the signup",
    body: "I treated sign-up as the first service moment. The journey connected vehicle selection, configuration, account setup, verification, delivery, Mercedes Me, dealer handoffs, and ongoing management so users and client stakeholders could evaluate one service.",
  },
  {
    title: "Lower the barrier to commitment",
    body: "The key call was to separate intent from eligibility. Users could understand and choose the subscription first; Daimler could still verify identity before delivery. That reduced early data-entry friction without removing a necessary trust and compliance step.",
  },
  {
    title: "Use testing to tighten high-friction moments",
    body: "Testing pushed specific refinements rather than broad redesign: clearer navigation, payment before review, better step progression, stronger policy visibility, and clearer explanation of lifecycle actions after sign-up.",
  },
];

export default function DaimlerSubscriptionConceptPage() {
  return (
    <CaseStudyShell>
      <CaseStudyHeader backLabel="Back to portfolio" />

      <CaseStudyArticle>
        <CaseStudyHero
          eyebrow="Daimler Mercedes-Benz · Vehicle Subscription Concept"
          title="Daimler Vehicle Subscription Concept"
          lede="Daimler was exploring a vehicle subscription offer before the model was familiar to consumers or fully defined internally. As a supporting case, this shows how I led UX definition for a two-month concept that helped drivers understand cost, commitment, responsibility, delivery, and post-subscription management before choosing a vehicle or plan."
          secondaryLede="Best read as an earlier service-design example: I structured an unfamiliar mobility model across acquisition, delivery, and lifecycle management under senior client scrutiny."
          facts={heroFacts}
        />

        <CaseStudyFigure
          image={heroMockup}
          alt="Full-width hero mockup showing repeated mobile subscription concept screens from the Daimler vehicle subscription concept."
          caption="I used the mockups to frame subscription as a service relationship: plan choice, included services, account setup, and ongoing management had to explain the model together."
          sizes="100vw"
          fullBleed
          className="mb-16 sm:mb-20 lg:mb-24"
          imageClassName="h-auto w-full"
        />

        <CaseStudySection
          eyebrow="The Problem"
          title="Clarifying a new subscription model end to end"
          intro="The brief was as much about clarifying the product as designing the interface."
          className="border-t-0"
        >
          <CaseStudyProse>
            <p>
              Drivers had to consider a new way to access a car: more flexible
              than ownership or leasing, but less familiar than either. Before
              they could choose a vehicle or plan, they needed clear answers
              about cost, commitment, responsibility, delivery, and what they
              would manage after subscribing.
            </p>
            <p>
              The scope went beyond an acquisition funnel. I had to define a
              journey that made the service understandable from vehicle
              selection through delivery and ongoing management while the
              business requirements were still evolving. I used that journey to
              give users, executives, and delivery partners one structure to
              evaluate together.
            </p>
          </CaseStudyProse>

          <CaseStudyFigure
            label="Scope proof"
            image={flowArtifact}
            alt="High-level Daimler subscription flow showing the acquisition journey, checkout steps, lifecycle management, Mercedes Me management, and dealer management touchpoints."
            caption="I used this flow to connect acquisition, checkout, lifecycle management, Mercedes Me, and dealer handoffs so client teams could discuss service scope and handoff risk together."
            preserveWidthOnSmallScreens
            preservedWidthClassName="min-w-0 sm:min-w-[52rem]"
          />
        </CaseStudySection>

        <CaseStudySection
          eyebrow="My Role"
          title="Leading UX definition with clear ownership boundaries"
          intro="I led UX definition on a small cross-functional concept team and presented the work directly to Daimler and Mercedes-Benz executives."
        >
          <div className="grid gap-5 2xl:grid-cols-2">
            <CaseStudyCard title="What I owned">
              <p className="homepage-type-body text-[color:var(--color-muted)]">
                As Experience Design Lead at Deloitte Digital Germany, I owned
                research synthesis, competitive review, journey and flow
                definition, wireframes, and executive presentations.
              </p>
            </CaseStudyCard>

            <CaseStudyCard title="What stayed shared">
              <p className="homepage-type-body text-[color:var(--color-muted)]">
                The team included an automotive strategist, systems architect,
                UI designer, and design leadership. The business model, visual
                execution, and any later MVP delivery were shared or outside my
                direct ownership.
              </p>
            </CaseStudyCard>
          </div>
        </CaseStudySection>

        <CaseStudySection
          eyebrow="Key Decisions"
          title="The most important calls were about clarity and commitment"
          intro="The strongest part of the work was choosing where users needed clarity, where Daimler needed certainty, and where the flow could reduce friction without hiding responsibility."
        >
          <div className="grid gap-5 2xl:grid-cols-3">
            {decisionCards.map((card) => (
              <CaseStudyCard key={card.title} title={card.title}>
                <p className="homepage-type-body text-[color:var(--color-muted)]">
                  {card.body}
                </p>
              </CaseStudyCard>
            ))}
          </div>

          <CaseStudyFigure
            label="Decision proof"
            image={decisionsEvidence}
            alt="Subscription concept screen showing included services, price summary, five-step progression, and a clear call to configure the subscription."
            caption="I kept included services, price, step progression, and commitment details visible, then moved identity verification later in the broader flow."
            className="max-w-4xl"
          />
        </CaseStudySection>

        <CaseStudySection
          eyebrow="Outcome"
          title="What the concept clarified"
          intro="The work aligned Daimler around a testable service model and exposed the points that needed refinement before MVP definition."
        >
          <CaseStudyProse>
            <p>
              Testing with seven relevant participants was too light to prove
              market demand. It gave the team useful direction, confirmed that
              the service structure was understandable enough to continue, and
              showed where details still broke down.
            </p>
            <p>
              Daimler left with a shared model for acquisition, checkout,
              delivery, and lifecycle management, plus specific issues to refine
              around navigation, payment and review order, policy visibility,
              step progression, and post-sign-up communication. Because this
              phase remained pre-launch, the strongest claim is validated
              learning: a shared acquisition-to-lifecycle model, concrete
              refinements, and a clearer path into MVP definition.
            </p>
          </CaseStudyProse>

          <CaseStudyFigure
            label="Validation evidence"
            image={outcomeEvidence}
            alt="Testing summary slide showing the six subscription scenarios, overall task completion, and difficulty markers from participant validation."
            caption="Testing covered six scenarios and showed where users still needed clearer navigation, step progression, and lifecycle communication."
            className="max-w-4xl"
          />
        </CaseStudySection>

        <CaseStudyFigure
          image={closingMockup}
          alt="Full-width closing mockup showing the Daimler subscription lifecycle dashboard concept."
          caption="In the lifecycle dashboard concept, drivers could see the status, account, and vehicle-management surfaces they would need after checkout."
          sizes="100vw"
          fullBleed
          className="mt-8"
          imageClassName="h-auto w-full"
        />

        <CaseStudyEndNav
          currentSlug="daimler-subscription-concept"
          showDivider={false}
        />
      </CaseStudyArticle>
    </CaseStudyShell>
  );
}
