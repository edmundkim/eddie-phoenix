import type { Metadata } from "next";

import BulletList from "@/components/BulletList";
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

import strategicAiMockupHero from "../../../content/case-studies/strategic-AI/assets/strategic-ai-mockup-hero.png";

export const metadata: Metadata = {
  title: "Defining AI Visibility, Review, and Control | Eddie Kim",
  description:
    "Work on AI product direction, reusable communication standards, review and control patterns, AI prototyping capability, and cross-team AI design leadership at AutoScout24.",
};

const heroFacts = [
  { label: "Role", value: "Principal Product Designer, AI Design Lead" },
  {
    label: "Owned Directly",
    value:
      "Visual AI Framework, AI review model, and education paths for AI-assisted workflows",
  },
  {
    label: "Focus",
    value:
      "Rules for when AI should be quiet, labelled, explainable, reviewable, or confirmed",
  },
  {
    label: "Aligned",
    value:
      "Senior product, design, and technology leaders on AI-assisted workflow change",
  },
];

const whyItMattered = [
  "Without shared standards, AI cues, labels, and interaction patterns could drift across products.",
  "Teams needed clearer rules for when AI should be obvious to users and what level of review or control it required.",
  "UX and product teams needed practical ways to prototype, discuss, and review AI as the technology changed product-development work.",
];

const roleScope = [
  {
    title: "Owned directly",
    items: [
      "The Visual AI Framework",
      "AI design guidance and education paths for the UX team",
      "Cross-functional capability work around AI-assisted product-development workflows",
      "AI prototyping capability across the broader product organisation",
    ],
  },
  {
    title: "Shaped through influence",
    items: [
      "Senior design direction on early AI-assisted product concepts",
      "Alignment with senior product, design, and technology leaders on AI-assisted workflow change",
      "Key flows and experience principles on early AI product work",
      "Guidance that shaped decisions beyond direct reporting lines",
    ],
  },
];

const frameworkPrinciples = [
  {
    title: "Visibility scaled with user impact",
    body: "I set the rule that teams should increase AI visibility as its effect on user understanding, decisions, and control increased.",
  },
  {
    title: "Different AI behaviours needed different signals",
    body: "I distinguished between low-visibility assistance and cases where AI generated, summarised, recommended, personalised in a non-obvious way, or acted on the user's behalf.",
  },
  {
    title: "Controls increased with stakes",
    body: "As AI moved closer to decision-shaping or action-taking, teams needed stronger review, consent, editability, override, and exit paths.",
  },
];

const decisionProof = [
  {
    title: "Low-impact assistance could stay quiet",
    body: "Formatting, cleanup, and small suggestions could rely on normal edit or undo controls when the risk stayed low.",
  },
  {
    title: "Generated output needed review paths",
    body: "I treated drafts, summaries, and suggested wording as outputs that needed visible AI signals, editability, regeneration, and dismissal.",
  },
  {
    title: "Recommendations needed reasons",
    body: "I paired ranked suggestions and next-best actions with a short reason, plus a way for users to compare, override, or ignore them.",
  },
  {
    title: "Decision-shaping summaries needed sources",
    body: "For AI synthesis that could affect user judgement, I pushed for source access, correction paths, and stronger review.",
  },
  {
    title: "AI actions needed confirmation",
    body: "For AI actions that changed state, sent, published, or committed something, I raised the bar to explicit consent, undo, and auditability.",
  },
];

const abstractedProductExample = [
  {
    title: "Product question",
    body: "One concept used AI to condense information that could affect a user's judgement. I focused on whether users would understand that AI had shaped the summary.",
  },
  {
    title: "Design risk",
    body: "A neutral-looking summary could make users over-trust the output or miss the source material behind the recommendation.",
  },
  {
    title: "Direction shaped",
    body: "I pushed the concept toward visible AI signalling, source access, correction paths, and a review step before the user acted on the output.",
  },
  {
    title: "Tradeoff",
    body: "Routine assistance stayed lightweight. AI that shaped interpretation needed stronger disclosure and control because the consequence for user judgement was higher.",
  },
];

const useSignals = [
  {
    title: "Early AI concept reviews",
    body: "I used the model while contributing senior design direction to early AI-assisted concepts, with a focus on visibility, review, control, and failure recovery before teams hardened patterns.",
  },
  {
    title: "UX education and enablement",
    body: "I turned the guidance into education paths and examples for designers working with AI in research, synthesis, content work, workshop planning, and prototype exploration.",
  },
  {
    title: "Senior stakeholder alignment",
    body: "I used the same decision language with senior product, design, and technology leaders when discussing how AI-assisted workflows changed design practice and product development.",
  },
];

const artifactProof = [
  {
    title: "AI presence scale",
    body: "I mapped AI behaviours from quiet assistance to action-taking so teams could judge how much signalling and control a concept needed.",
  },
  {
    title: "Visual signal guidance",
    body: "I shaped guidance for labels, badges, gradients, and iconography so AI communication stayed clear without turning every interaction into AI theatre.",
  },
  {
    title: "Prototype review prompts",
    body: "I translated the guidance into review questions teams could apply to concept flows before investing in detailed UI or implementation.",
  },
];

const technicalReviewCriteria = [
  {
    label: "Input",
    value: "Identify the data, source material, and user intent the system uses.",
  },
  {
    label: "Output",
    value: "Check what the user sees and whether AI output could read like neutral product copy.",
  },
  {
    label: "Uncertainty",
    value: "Decide where the design needs source access, confidence cues, alternatives, or correction.",
  },
  {
    label: "Control",
    value: "Confirm that users can edit, reject, undo, override, or stop the AI at the right moment.",
  },
  {
    label: "Failure",
    value: "Define the path when AI is wrong, incomplete, overconfident, or acting on weak context.",
  },
];

const aiDecisionModel = [
  {
    aiRole: "Quiet assistance",
    example: "Formatting, cleanup, or small suggestions",
    signal: "No persistent label needed",
    control: "Normal edit or undo",
  },
  {
    aiRole: "Generated or rewritten content",
    example: "A draft, summary, or suggested wording",
    signal: "Lightweight AI label",
    control: "Edit, regenerate, or dismiss",
  },
  {
    aiRole: "Recommendation",
    example: "A ranked suggestion or next-best action",
    signal: "Explain why it appears",
    control: "Compare, override, or ignore",
  },
  {
    aiRole: "Decision-shaping summary",
    example: "A synthesis that may affect user judgement",
    signal: "Clear disclosure and source access",
    control: "Review source, reject, or correct",
  },
  {
    aiRole: "Action on the user's behalf",
    example: "Changing state, sending, publishing, or committing",
    signal: "Explicit confirmation",
    control: "Consent, undo, and audit trail",
  },
];

const leverageAreas = [
  {
    title: "Early product direction",
    body: "I contributed senior design direction to early AI-assisted product concepts while the work was still upstream. My contribution focused on flows, principles, and decision criteria before patterns hardened.",
  },
  {
    title: "Internal capability building",
    body: "I led AI guidance for UX, education paths for AI-assisted workflows, and prototyping capability across the broader product organisation. I also led cross-functional capability work with senior product, design, and technology leaders on changes to design practice and product development.",
  },
];

const capabilityAreas = [
  {
    title: "Practical UX education",
    body: "I translated AI research and tool exploration into examples designers could use for discovery, synthesis, content work, workshop planning, and prototype exploration.",
  },
  {
    title: "Prototype-ready review criteria",
    body: "I helped early AI ideas move toward testable flows with review points for capability, limits, user control, and failure recovery.",
  },
];

export default function StrategicAiDesignLeadershipPage() {
  return (
    <CaseStudyShell>
      <CaseStudyHeader />

      <CaseStudyArticle>
        <CaseStudyHero
          eyebrow="AutoScout24 · Strategic AI Design Leadership"
          title="Defining AI Visibility, Review, and Control"
          lede="At AutoScout24, I led a Visual AI Framework with clear rules for when AI should stay quiet, explain itself, invite review, or require user confirmation."
          secondaryLede="Because the underlying product concepts remain confidential and early, I focus here on public-safe proof: the decision model I owned, the product direction I shaped, and the AI capability work I led across UX and the broader Builders organisation."
          facts={heroFacts}
        >
          <CaseStudyFigure
            image={strategicAiMockupHero}
            alt="Full-bleed laptop mockup showing an AI communication framework."
            sizes="100vw"
            priority
            fullBleed
            className="mt-14"
            imageClassName="h-auto w-full"
          />
        </CaseStudyHero>

        <CaseStudySection
          eyebrow="Why This Work Existed"
          title="AI work was accelerating before shared standards existed"
          intro="Teams were moving faster with AI than the product system could absorb. I turned the work into a shared way for designers and product partners to decide how visible, explainable, and controllable AI needed to be."
          className="border-t-0"
        >
          <BulletList items={whyItMattered} />
        </CaseStudySection>

        <CaseStudySection
          eyebrow="Role"
          title="Ownership and influence"
          intro="I owned the reusable standards work and the AI design guidance behind it. I also led cross-functional capability work around AI-assisted workflows, aligning the work with senior product, design, and technology leaders. On product concepts, my role was senior design direction: helping shape key flows, principles, and tradeoffs alongside other designers and cross-functional partners."
        >
          <div className="grid gap-5 2xl:grid-cols-2">
            {roleScope.map((group) => (
              <CaseStudyCard key={group.title} title={group.title}>
                <BulletList items={group.items} />
              </CaseStudyCard>
            ))}
          </div>
        </CaseStudySection>

        <CaseStudySection
          eyebrow="Visual AI Framework"
          title="The most concrete output was a reusable AI communication model"
          intro="I translated broad AI principles into product rules teams could apply during concept, prototype, and review work."
        >
          <div className="grid gap-5 2xl:grid-cols-2">
            {frameworkPrinciples.map((principle) => (
              <CaseStudyCard key={principle.title} title={principle.title}>
                <p className="homepage-type-body text-[color:var(--color-muted)]">
                  {principle.body}
                </p>
              </CaseStudyCard>
            ))}
          </div>

          <CaseStudyProse>
            <p>
              I rebuilt the model below from internal framework work with
              generalized examples to protect confidential product strategy.
            </p>
            <p>
              Subtle assistive behaviour could stay quiet. Generated summaries,
              recommendations, and non-obvious personalisation needed clearer
              labelling and a stronger review path.
            </p>
            <p>
              I combined a shared AI visibility model with reusable
              signals such as labels, badges, gradients, and icons, plus
              guidance on review and override. I used it to clarify what
              needed explicit signalling, what could remain
              lightweight, and when stronger review or control was necessary.
            </p>
          </CaseStudyProse>

          <div className="overflow-hidden rounded-lg border border-[color:var(--color-line)]">
            {aiDecisionModel.map((item, index) => (
              <div
                key={item.aiRole}
                className="grid gap-5 border-b border-[color:var(--color-line)] px-6 py-7 last:border-b-0 sm:px-8 2xl:grid-cols-[5rem_minmax(0,1fr)_minmax(0,1fr)] 2xl:gap-8"
              >
                <p className="homepage-type-eyebrow text-[color:var(--color-muted)]">
                  {String(index + 1).padStart(2, "0")}
                </p>

                <div>
                  <h3 className="homepage-type-item-title text-[color:var(--foreground)]">
                    {item.aiRole}
                  </h3>
                  <p className="homepage-type-body mt-3 text-[color:var(--color-muted)]">
                    {item.example}
                  </p>
                </div>

                <div className="space-y-4">
                  <p className="homepage-type-body text-[color:var(--color-muted)]">
                    <span className="font-medium text-[color:var(--foreground)]">
                      Signal:
                    </span>{" "}
                    {item.signal}
                  </p>
                  <p className="homepage-type-body text-[color:var(--color-muted)]">
                    <span className="font-medium text-[color:var(--foreground)]">
                      Control:
                    </span>{" "}
                    {item.control}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CaseStudySection>

        <CaseStudySection
          eyebrow="Decision Guidance"
          title="Decisions I clarified with the framework"
          intro="I used the framework to make AI concept reviews more specific before patterns hardened. I connected AI behaviour to user-facing signals, controls, and review paths."
        >
          <div className="grid gap-5 2xl:grid-cols-2">
            {decisionProof.map((decision) => (
              <CaseStudyCard key={decision.title} title={decision.title}>
                <p className="homepage-type-body text-[color:var(--color-muted)]">
                  {decision.body}
                </p>
              </CaseStudyCard>
            ))}
          </div>
        </CaseStudySection>

        <CaseStudySection
          eyebrow="Abstracted Example"
          title="How I shifted a decision-shaping AI concept"
          intro="The exact product context is confidential. I can describe the design problem safely: AI was summarising information that could influence user judgement, so the interface needed more than a lightweight AI label."
        >
          <div className="grid gap-5 2xl:grid-cols-2">
            {abstractedProductExample.map((item) => (
              <CaseStudyCard key={item.title} title={item.title}>
                <p className="homepage-type-body text-[color:var(--color-muted)]">
                  {item.body}
                </p>
              </CaseStudyCard>
            ))}
          </div>
        </CaseStudySection>

        <CaseStudySection
          eyebrow="Use In Practice"
          title="Using the guidance in practice"
          intro="I ground the case in upstream proof: early concept direction, UX enablement, prototyping support, and senior alignment."
        >
          <div className="grid gap-5 2xl:grid-cols-3">
            {useSignals.map((signal) => (
              <CaseStudyCard key={signal.title} title={signal.title}>
                <p className="homepage-type-body text-[color:var(--color-muted)]">
                  {signal.body}
                </p>
              </CaseStudyCard>
            ))}
          </div>
        </CaseStudySection>

        <CaseStudySection
          eyebrow="Working Artifacts"
          title="Making the framework usable in product reviews"
          intro="I translated principles into artifact guidance and review prompts that teams could use during concept reviews and prototype discussions."
        >
          <div className="grid gap-5 2xl:grid-cols-3">
            {artifactProof.map((artifact) => (
              <CaseStudyCard key={artifact.title} title={artifact.title}>
                <p className="homepage-type-body text-[color:var(--color-muted)]">
                  {artifact.body}
                </p>
              </CaseStudyCard>
            ))}
          </div>

          <div className="mt-5 overflow-hidden rounded-lg border border-[color:var(--color-line)]">
            {technicalReviewCriteria.map((item, index) => (
              <div
                key={item.label}
                className="grid gap-5 border-b border-[color:var(--color-line)] px-6 py-6 last:border-b-0 sm:px-8 2xl:grid-cols-[5rem_minmax(0,0.4fr)_minmax(0,1fr)] 2xl:gap-8"
              >
                <p className="homepage-type-eyebrow text-[color:var(--color-muted)]">
                  {String(index + 1).padStart(2, "0")}
                </p>

                <h3 className="homepage-type-item-title text-[color:var(--foreground)]">
                  {item.label}
                </h3>

                <p className="homepage-type-body text-[color:var(--color-muted)]">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </CaseStudySection>

        <CaseStudySection
          eyebrow="Leverage"
          title="The value was in reusable standards and organisational capability"
          intro="I used this work to create a clearer basis for early AI product decisions and more practical ways to work with AI in design and product development."
        >
          <div className="grid gap-5 2xl:grid-cols-2">
            {leverageAreas.map((group) => (
              <CaseStudyCard key={group.title} title={group.title}>
                <p className="homepage-type-body text-[color:var(--color-muted)]">
                  {group.body}
                </p>
              </CaseStudyCard>
            ))}
          </div>

          <div className="mt-5 grid gap-5 2xl:grid-cols-2">
            {capabilityAreas.map((group) => (
              <CaseStudyCard key={group.title} title={group.title}>
                <p className="homepage-type-body text-[color:var(--color-muted)]">
                  {group.body}
                </p>
              </CaseStudyCard>
            ))}
          </div>

          <CaseStudyCard variant="soft" className="!h-auto">
            <p className="homepage-type-body text-[color:var(--color-muted)]">
              I limit the proof to public-safe material: the framework, review
              model, and capability work. Confidential concepts and post-launch
              metrics stay out of this case. I show senior-level scope through
              the work I could own directly: setting standards, shaping early
              AI direction, aligning leaders, and giving teams practical ways
              to design AI with visibility, review, and control.
            </p>
          </CaseStudyCard>
        </CaseStudySection>

        <CaseStudyEndNav currentSlug="strategic-ai-design-leadership" />
      </CaseStudyArticle>
    </CaseStudyShell>
  );
}
