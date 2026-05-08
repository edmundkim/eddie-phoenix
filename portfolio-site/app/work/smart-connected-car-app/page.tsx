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

import heroMockup from "../../../content/legacy-projects/smart-connected-car-app/assets/smart-connected-car-mockup-spashl-wide.png";
import conceptDirection from "../../../content/legacy-projects/smart-connected-car-app/assets/Frame+16.png";
import conceptScreens from "../../../content/legacy-projects/smart-connected-car-app/assets/Frame+18.png";
import flowArtifact from "../../../content/legacy-projects/smart-connected-car-app/assets/flow_v4.png";
import geofenceFlow from "../../../content/legacy-projects/smart-connected-car-app/assets/geofence_workspace_v2.png";
import journeyMap from "../../../content/legacy-projects/smart-connected-car-app/assets/Smart_user_journey_map+(1).png";
import productContextVisual from "../../../content/legacy-projects/smart-connected-car-app/assets/smart-connected-car-mockup-wide.png";
import researchPrioritization from "../../../content/legacy-projects/smart-connected-car-app/assets/Screenshot+2022-04-01+at+19.14.44.png";
import testingMatrix from "../../../content/legacy-projects/smart-connected-car-app/assets/Screenshot+2022-04-04+at+00.34.54.png";
import vehiclePairingFlow from "../../../content/legacy-projects/smart-connected-car-app/assets/vehicle_pairing_playground_v2__1_.png";

export const metadata: Metadata = {
  title: "smart Connected Car App Design | Eddie Kim",
  description:
    "Supporting case study on shaping trust-critical states for smart's native EV companion app before key vehicle and backend behaviours had settled.",
};

const heroFacts = [
  {
    label: "Project type",
    value: "Native iOS and Android connected-car companion app",
  },
  {
    label: "Role",
    value: "Experience Design Lead, Deloitte Digital Germany",
  },
  {
    label: "Scope",
    value: "Research synthesis, IA, state flows, prototypes, testing, and delivery support",
  },
  {
    label: "Stage",
    value: "Pre-launch engagement; app later shipped after my involvement",
  },
];

const constraints = [
  "smart was defining the car and companion app in parallel, so UX had to describe access, status, remote-control, and ownership moments before hardware behaviour had settled.",
  "smart was moving away from the physical key, so pairing, access, phone-key behaviour, and remote commands had to earn trust.",
  "Drivers needed immediate feedback on charging, climate, range, readiness, and vehicle status.",
  "Partner integrations across public charging, wall box charging, maps, and backend systems kept requirements moving during implementation.",
];

const roleScope = [
  {
    title: "What I led",
    items: [
      "Research synthesis from EV-owner interviews, survey input, and connected-car landscape analysis",
      "Information architecture, navigation, user flows, wireframes, and prototypes for core vehicle moments",
      "Testing plans, scripts, facilitation, synthesis, and design iteration",
      "Implementation support through flow artefacts, requirements clarification, and prioritisation conversations",
    ],
  },
  {
    title: "How the work helped the team decide",
    items: [
      "smart product owners used the artefacts to connect business priorities with user needs and delivery constraints",
      "Engineering, QA, scrum, and Deloitte delivery teams used flows to discuss states, dependencies, and edge cases before build",
      "Final UI, technical implementation, QA, and release readiness remained shared across the broader design, engineering, and delivery team",
    ],
  },
];

const researchSignals = [
  "I sourced and interviewed five EV owners across Europe to understand how they managed charging, range anxiety, vehicle status, and control.",
  "Survey input from EV communities helped prioritise planned features from a user perspective rather than relying only on internal assumptions.",
  "A landscape review of 14 connected-car apps clarified feature coverage, navigation patterns, and expectation gaps in the market.",
  "The research pointed toward a practical core: drivers needed better visibility and control over when, where, and how their vehicle would be charged and ready.",
];

const researchDirection = [
  "Vehicle status and charging had to sit closer to the front of the experience because they shaped driver confidence.",
  "Climate and remote controls needed clearer hierarchy and feedback because users were acting on a vehicle they could not always see.",
  "The IA needed to group the broad feature set around driver jobs rather than internal workstreams or partner systems.",
];

const productDecisionCards = [
  {
    title: "Make vehicle status the home-screen anchor",
    body: "EV owners treated battery, range, charging, and readiness as confidence signals. I pushed those signals toward the front of the experience instead of hiding them in controls. The tradeoff was keeping the home screen scannable without turning it into a dashboard of every vehicle state.",
  },
  {
    title: "Treat charging as a confidence journey, not a utility",
    body: "Survey input and the competitor review showed that charging shaped planning, not only setup. Charging stayed visible as a core journey across status, cost, range, public charging, and readiness. The IA had to support routine checks without burying deeper charging details.",
  },
  {
    title: "Separate frequent remote actions from deeper controls",
    body: "Locking, climate, and remote commands could affect a vehicle the driver could not see. I separated frequent actions from lower-frequency controls and treated feedback states as part of the interaction. The tradeoff was giving drivers enough control without making the default screen feel like a control drawer.",
  },
  {
    title: "Turn pairing, geofence, and edge-state logic into buildable flows",
    body: "Pairing, QR activation, saved places, geofence edits, notification preferences, and error paths crossed app, account, vehicle, and backend logic. Detailed flows gave product owners, engineers, and QA a shared way to discuss edge cases before build.",
  },
];

const iterationEvidence = [
  {
    title: "Home moved from feature access to status confidence",
    before: "The early home direction had to represent a wide connected-car feature set.",
    after:
      "The later direction put vehicle status, readiness, and everyday controls closer to the default surface.",
  },
  {
    title: "Controls moved from dense drawer to clearer hierarchy",
    before:
      "The controls concept initially carried more actions than the default view could explain well.",
    after:
      "Research, testing, and team review moved lower-frequency actions into more appropriate sections.",
  },
  {
    title: "Navigation elevated the driver jobs that shaped confidence",
    before:
      "The app could have followed internal workstreams, partner systems, or feature categories.",
    after:
      "Vehicle control, climate, and charging moved into the primary structure because drivers looked for them in live vehicle moments.",
  },
];

const deliveryCards = [
  {
    title: "Flows made risk visible",
    body: "Pairing, geofencing, charging, climate, and remote controls depended on state changes across the app, vehicle, account, and backend systems. Flow artefacts helped the team review those dependencies before build.",
  },
  {
    title: "Concepts tested hierarchy",
    body: "Early home, charging, and climate directions moved into wireframes and click dummies. Product-owner feedback, feasibility checks, and user testing helped narrow the hierarchy.",
  },
  {
    title: "Testing sharpened comprehension",
    body: "Testing checked whether drivers understood the structure, control hierarchy, and vehicle-status language. Findings informed navigation, screen hierarchy, and control clarity before implementation continued.",
  },
];

const trustCriticalStates = [
  {
    moment: "Pairing and activation",
    risk: "A driver cannot trust the phone-key experience if account, car, QR, or in-car confirmation states do not line up.",
    response:
      "Map pairing as a sequence across account state, QR scanning, in-car confirmation, failed pairing, and successful vehicle connection.",
    artifact: "Vehicle pairing flow",
  },
  {
    moment: "Remote command feedback",
    risk: "A driver can doubt whether the car responded when lock, climate, or remote-control actions take time.",
    response:
      "Treat vehicle actions as state changes that need confirmation, delay handling, and recovery paths.",
    artifact: "Remote-control and state flows",
  },
  {
    moment: "Charging and readiness",
    risk: "A driver loses confidence when battery, range, charging, and climate readiness sit too far from planning moments.",
    response:
      "Keep battery, range, charging status, and climate readiness close to the driver's main decision points.",
    artifact: "IA flow and core screen concepts",
  },
  {
    moment: "Geofence and permissions",
    risk: "A driver may not understand why location access, saved places, and notifications matter to the feature.",
    response:
      "Connect saved places, edit states, notification preferences, permission logic, and success feedback in one flow.",
    artifact: "Geofence workspace",
  },
];

const testingFindings = [
  {
    title: "Vehicle switching validated the garage model",
    body: "The matrix records successful task completion for changing to a second vehicle. That supported keeping the garage model intact.",
  },
  {
    title: "Seat-heating levels needed clearer labels",
    body: "Two participants did not understand the seat-heating level at first. The follow-up recommendation: add the seat-heat level to the label.",
  },
  {
    title: "Loading feedback affected control confidence",
    body: "Participants struggled more when the loading state appeared during the seat-heating task. That made feedback part of the control design.",
  },
  {
    title: "Controls and climate needed a clean boundary",
    body: "The formal test covered Controls and Climate prototypes. The follow-up work kept frequent controls visible while moving deeper actions into more appropriate sections.",
  },
];

const mobileSafePreservedWidthClassName = "min-w-0";

export default function SmartConnectedCarAppPage() {
  return (
    <CaseStudyShell>
      <CaseStudyHeader backLabel="Back to portfolio" />

      <CaseStudyArticle>
        <CaseStudyHero
          eyebrow="smart · Connected Car Mobile App"
          title="smart Connected Car App Design"
          lede="As Experience Design Lead at Deloitte Digital, I helped shape smart's native EV companion app before key vehicle behaviours, backend logic, and partner integrations had settled."
          secondaryLede="The core design challenge was trust: drivers needed to know what the app knew, what the car had done, and what to do when pairing, charging, climate, or remote-control states changed."
          facts={heroFacts}
        />

        <CaseStudyFigure
          image={heroMockup}
          alt="Wide dark hero mockup with a hand holding a phone showing a bright yellow smart splash screen."
          sizes="100vw"
          fullBleed
          priority
          className="bg-[#1f1f1f]"
          imageClassName="h-auto w-full"
        />

        <CaseStudySection
          eyebrow="The Problem"
          title="Design the companion app before the car existed"
          intro="The team had to define how a driver would pair a phone, trust vehicle access, read charging status, control climate, manage geofences, and recover when app, car, account, or backend states did not line up."
          className="border-t-0"
        >
          <BulletList items={constraints} />
        </CaseStudySection>

        <CaseStudySection
          eyebrow="My Role"
          title="Lead the UX work that product and delivery teams could use"
          intro="I worked on a year-long programme with Deloitte Digital Germany and Portugal, smart product owners, engineering, QA, scrum, and delivery partners. My role was to turn research, requirements, and shifting constraints into UX artefacts the team could make decisions from."
        >
          <div className="grid gap-5 2xl:grid-cols-2">
            {roleScope.map((group) => (
              <CaseStudyCard key={group.title} title={group.title}>
                <BulletList items={group.items} />
              </CaseStudyCard>
            ))}
          </div>

          <CaseStudyProse>
            <p>
              The programme ran for a year with a fifteen-person scrum team and
              a new smart product-owner group. Because requirements kept moving,
              the UX artefacts had to do more than document screens: they gave
              product, engineering, QA, and delivery partners a shared way to
              review decisions before build.
            </p>
          </CaseStudyProse>
        </CaseStudySection>

        <CaseStudySection
          eyebrow="Research"
          title="Start with how EV drivers manage control and confidence"
          intro="The research work turned a broad connected-car brief into clearer user needs around range, charging, reliability, visibility, and readiness. It informed direction rather than proving market outcomes."
        >
          <BulletList items={researchSignals} />

          <div className="max-w-[50rem] border-t border-[color:var(--color-line)] pt-6">
            <h3 className="homepage-type-item-title text-[color:var(--foreground)]">
              What research changed
            </h3>
            <div className="mt-5">
              <BulletList items={researchDirection} />
            </div>
          </div>

          <CaseStudyFigure
            label="prioritisation"
            image={researchPrioritization}
            alt="Feature prioritisation table for the smart app showing planned functionality scored and ranked from a user perspective."
            caption="The prioritisation table turned survey input into product-discussion material, helping compare user desirability across planned functionality before IA and roadmap conversations."
            preserveWidthOnSmallScreens
            preservedWidthClassName={mobileSafePreservedWidthClassName}
          />

          <CaseStudyFigure
            label="journey map"
            image={journeyMap}
            alt="Journey map for a smart connected-car driver showing actions, touchpoints, expectations, and emotional notes across charging, access, control, and lifecycle moments."
            caption="The journey map showed that access, charging, status, service, and ownership moments needed to be considered as one connected driver journey, not as unrelated feature areas."
            preserveWidthOnSmallScreens
            preservedWidthClassName={mobileSafePreservedWidthClassName}
          />
        </CaseStudySection>

        <CaseStudySection
          eyebrow="Product Decisions"
          title="Key Product Decisions"
          intro="The central design move was to organise the app around the driver's recurring jobs while making state logic explicit enough for product, engineering, QA, and delivery partners to review."
        >
          <div className="overflow-hidden border-y border-[color:var(--color-line)]">
            {productDecisionCards.map((card, index) => (
              <div
                key={card.title}
                className="grid gap-4 border-b border-[color:var(--color-line)] py-7 last:border-b-0 sm:grid-cols-[4rem_minmax(0,1fr)] sm:gap-6"
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

          <CaseStudyFigure
            label="IA proof"
            image={flowArtifact}
            alt="High-level flow for the smart connected-car app showing entry states, authenticated and unauthenticated experiences, tab navigation, vehicle control, phone key, climate, charging, account, service, and map areas."
            caption="The high-level flow made product complexity visible: entry states, authenticated and unauthenticated paths, primary navigation, and backend-dependent feature areas could be discussed in one shared map."
            preserveWidthOnSmallScreens
            preservedWidthClassName={mobileSafePreservedWidthClassName}
          />

          <div className="border-t border-[color:var(--color-line)] pt-8">
            <h3 className="homepage-type-item-title max-w-2xl text-[color:var(--foreground)]">
              What changed in the designs
            </h3>
            <div className="mt-5 grid gap-5 lg:grid-cols-3">
              {iterationEvidence.map((item) => (
                <CaseStudyCard key={item.title} title={item.title}>
                  <div className="space-y-4">
                    <div>
                      <p className="homepage-type-eyebrow text-[color:var(--color-muted)]">
                        Earlier pressure
                      </p>
                      <p className="homepage-type-body mt-2 text-[color:var(--color-muted)]">
                        {item.before}
                      </p>
                    </div>
                    <div>
                      <p className="homepage-type-eyebrow text-[color:var(--color-muted)]">
                        Later direction
                      </p>
                      <p className="homepage-type-body mt-2 text-[color:var(--color-muted)]">
                        {item.after}
                      </p>
                    </div>
                  </div>
                </CaseStudyCard>
              ))}
            </div>
          </div>
        </CaseStudySection>

        <CaseStudySection
          eyebrow="Technical UX"
          title="Trust-critical states shaped the UX"
          intro="Risk sat in the moments where a driver could lose trust: a phone would not pair, a command took time, a geofence needed permission, or charging status depended on systems outside the app."
        >
          <div className="grid gap-5 md:grid-cols-2">
            {trustCriticalStates.map((state) => (
              <CaseStudyCard key={state.moment} title={state.moment}>
                <dl className="space-y-4">
                  <div>
                    <dt className="homepage-type-eyebrow text-[color:var(--color-muted)]">
                      Risk
                    </dt>
                    <dd className="homepage-type-body mt-2 text-[color:var(--color-muted)]">
                      {state.risk}
                    </dd>
                  </div>
                  <div>
                    <dt className="homepage-type-eyebrow text-[color:var(--color-muted)]">
                      Design response
                    </dt>
                    <dd className="homepage-type-body mt-2 text-[color:var(--color-muted)]">
                      {state.response}
                    </dd>
                  </div>
                  <div>
                    <dt className="homepage-type-eyebrow text-[color:var(--color-muted)]">
                      Artifact
                    </dt>
                    <dd className="homepage-type-body mt-2 text-[color:var(--foreground)]">
                      {state.artifact}
                    </dd>
                  </div>
                </dl>
              </CaseStudyCard>
            ))}
          </div>
        </CaseStudySection>

        <CaseStudySection
          eyebrow="Delivery"
          title="Move from concepts to flows the team could build"
          intro="The work became concrete through state diagrams, wireframes, click dummies, and concept screens for high-risk flows such as pairing, geofencing, charging, climate, and remote vehicle control."
        >
          <div className="grid gap-5 2xl:grid-cols-3">
            {deliveryCards.map((card) => (
              <CaseStudyCard key={card.title} title={card.title}>
                <p className="homepage-type-body text-[color:var(--color-muted)]">
                  {card.body}
                </p>
              </CaseStudyCard>
            ))}
          </div>

          <div className="grid gap-8">
            <CaseStudyFigure
              label="Pairing flow"
              image={vehiclePairingFlow}
              alt="Vehicle activation flow showing in-car steps, login, QR code scanning, pairing, error handling, and successful vehicle connection states."
              caption="The pairing flow made access concrete for implementation: account, vehicle, QR and in-car steps, error handling, and success states had to line up for users to trust the connection."
              preserveWidthOnSmallScreens
              preservedWidthClassName={mobileSafePreservedWidthClassName}
            />

            <CaseStudyFigure
              label="Geofence flow"
              image={geofenceFlow}
              alt="Geofence workspace showing map selection, list management, edit states, notification preferences, and successful geofence creation."
              caption="The geofence artefact made location and notification logic concrete, including saved places, edit states, preferences, and success moments that could not be understood from isolated screens."
              preserveWidthOnSmallScreens
              preservedWidthClassName={mobileSafePreservedWidthClassName}
            />
          </div>

          <CaseStudyFigure
            label="Concept development"
            image={conceptDirection}
            alt="Three smart app mobile screen directions showing a home/control screen evolving into later vehicle dashboard concepts."
            caption="The home experience was simplified from a denser dashboard of feature tiles toward a clearer status and control surface, making the most important vehicle signals easier to scan."
            preserveWidthOnSmallScreens
            preservedWidthClassName={mobileSafePreservedWidthClassName}
          />

          <CaseStudyFigure
            label="Core screens"
            image={conceptScreens}
            alt="Three smart app mobile wireframes showing home, charging, and climate control concepts."
            caption="The home, charging, and climate concepts show how everyday driver confidence shaped core surfaces rather than sitting behind secondary navigation."
            preserveWidthOnSmallScreens
            preservedWidthClassName={mobileSafePreservedWidthClassName}
          />
        </CaseStudySection>

        <CaseStudySection
          eyebrow="Testing"
          title="Usability testing narrowed the fixes"
          intro="In one formal round, eight participants tested core Controls and Climate functionality. Participants completed the main tasks, while the notes pointed to smaller changes in labels, feedback, hierarchy, and comprehension."
        >
          <div className="grid gap-5 md:grid-cols-2">
            {testingFindings.map((finding) => (
              <CaseStudyCard key={finding.title} title={finding.title}>
                <p className="homepage-type-body text-[color:var(--color-muted)]">
                  {finding.body}
                </p>
              </CaseStudyCard>
            ))}
          </div>

          <CaseStudyFigure
            label="Testing evidence"
            image={testingMatrix}
            alt="Testing results matrix for the smart app showing task outcomes, observations, and recommendations for core app scenarios."
            caption="The matrix captured task outcomes, observations, and follow-up decisions around navigation, comprehension, labels, and control clarity before the work continued into implementation."
            className="max-w-4xl"
          />
        </CaseStudySection>

        <CaseStudySection
          eyebrow="Outcome"
          title="A pre-launch product direction moved into implementation"
          intro="My engagement ended before public launch, so I do not claim adoption or business impact. The useful outcome happened earlier: the team moved from a broad connected-car brief into implementation with a clearer product model, tested flows, and artefacts that exposed state logic before build."
        >
          <CaseStudyProse>
            <p>
              The case shows how I reduced ambiguity across access, status,
              charging, climate, controls, and service moments while the car,
              app, and partner systems were still moving.
            </p>
            <p>
              The programme reached implementation with a native-app structure,
              detailed flows, prototypes, and testing inputs that helped the
              team clarify product behaviour before the experience reached
              users publicly.
            </p>
            <p>
              Because I was not involved after release, this page intentionally
              avoids adoption, business-impact, or post-launch quality claims.
            </p>
          </CaseStudyProse>

        </CaseStudySection>

        <CaseStudyFigure
          image={productContextVisual}
          alt="Wide black-and-white car interior mockup with a phone at the right edge showing a dark map interface and nearby charging stations."
          sizes="100vw"
          fullBleed
          imageClassName="h-auto w-full"
        />

        <CaseStudyEndNav currentSlug="smart-connected-car-app" />
      </CaseStudyArticle>
    </CaseStudyShell>
  );
}
