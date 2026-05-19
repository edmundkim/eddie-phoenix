import type { StaticImageData } from "next/image";

import declutterHeroMockupWide from "@/content/case-studies/declutter-LP/assets/declutter-hero-mockup-wide-red.png";
import newSearchHeroMockupWide from "@/content/case-studies/new-search/assets/new-search-hero-mockup-wide.png";
import strategicAiMockupHero from "@/content/case-studies/strategic-AI/assets/strategic-ai-mockup-hero.png";
import daimlerSubscriptionMockup from "@/content/legacy-projects/daimler-subscription/assets/Clay_Mockup___7_.png";
import smartConnectedCarMockupWide from "@/content/legacy-projects/smart-connected-car-app/assets/smart-connected-car-mockup-wide.png";

export type FeaturedProjectImage = {
  src: StaticImageData;
  alt: string;
  backgroundColor?: string;
  objectPosition?: string;
};

export type FeaturedProject = {
  id: string;
  label: string;
  period: string;
  title: string;
  displayTitle: string;
  navTitle: string;
  href: string;
  context: string;
  surface: string;
  role: string;
  evidence: string;
  outcome: string;
  summary: string;
  description: string;
  ctaLabel: string;
  image?: FeaturedProjectImage;
};

export type SpeakingTopic = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  imagePosition?: string;
  imageScale?: number;
};

export type ContactLink = {
  href: string;
  label: string;
  external?: boolean;
};

export type HomepageNavMode = "default" | "work";

export function formatFeaturedProjectIndex(index: number) {
  return String(index + 1).padStart(2, "0");
}

export const featuredProjects: FeaturedProject[] = [
  {
    id: "new-search",
    label: "Search redesign",
    period: "2022-present",
    title: "New Search",
    displayTitle: "New Search",
    navTitle: "New Search",
    href: "/work/new-search",
    context: "AutoScout24",
    surface: "iOS, Android, desktop web, and mobile web",
    role: "Lead product designer",
    evidence:
      "Shipped redesign, user validation, rollout across core buyer surfaces, confidential conversion impact",
    outcome:
      "Improved how buyers express intent across core search surfaces; exact conversion metrics stay confidential.",
    ctaLabel: "Open New Search project",
    summary:
      "Reset search and filters so buyers could express intent more clearly in a marketplace with complex inventory.",
    description:
      "Restructured filter hierarchy, applied states, and make-model selection into a cross-platform baseline that could be validated and extended.",
    image: {
      src: newSearchHeroMockupWide,
      alt: "AutoScout24 search-filter mockup previewing the New Search case study on the homepage.",
      objectPosition: "60% 48%",
    },
  },
  {
    id: "declutter-list-page",
    label: "Shipped product",
    period: "2022-present",
    title: "Declutter the List Page",
    displayTitle: "List Card Redesign",
    navTitle: "Declutter the List Page",
    href: "/work/declutter-list-page",
    context: "AutoScout24",
    surface: "Desktop web, mobile web, iOS, and Android",
    role: "Product design lead and UX program partner",
    evidence:
      "Shipped redesign, experiment-backed outcome category, confidential lead impact",
    outcome:
      "Improved buyer comparison and lead behavior on high-traffic listing surfaces; exact test results stay confidential.",
    ctaLabel: "Open List Card Redesign project",
    summary:
      "Reworked the vehicle list card so buyers could compare key vehicle signals and progress with less cognitive load.",
    description:
      "Clarified hierarchy, reduced visual noise, and helped align platform-specific tradeoffs around what belongs on the browsing surface.",
    image: {
      src: declutterHeroMockupWide,
      alt: "Handheld AutoScout24 mobile web mockup previewing the Declutter case study on the homepage.",
      backgroundColor: "#FFE5E6",
      objectPosition: "58% 50%",
    },
  },
  {
    id: "strategic-ai-design-leadership",
    label: "AI design standards",
    period: "2022-present",
    title: "Strategic AI Design Leadership",
    displayTitle: "Strategic AI Design Leadership",
    navTitle: "Strategic AI",
    href: "/work/strategic-ai-design-leadership",
    context: "AutoScout24",
    surface: "AI design standards, early product direction, and UX capability building",
    role: "AI Design Lead",
    evidence:
      "Internal framework, team enablement, prototypes, and early product direction",
    outcome:
      "Gave teams reusable standards for AI disclosure, control, review, and confidence before scaling AI patterns into product work.",
    ctaLabel: "Open Strategic AI Design Leadership project",
    summary:
      "Defined AI interaction standards for disclosure, control, review, and confidence.",
    description:
      "The framework helped teams expose system limits, protect user agency, and test AI patterns before committing to product direction.",
    image: {
      src: strategicAiMockupHero,
      alt: "Laptop mockup showing an AI communication framework, previewing the Strategic AI Design Leadership case study.",
      objectPosition: "50% 22%",
    },
  },
  {
    id: "daimler-subscription-concept",
    label: "Concept case study",
    period: "2021-2022",
    title: "Daimler Vehicle Subscription Concept",
    displayTitle: "Daimler Vehicle Subscription Concept",
    navTitle: "Daimler Concept",
    href: "/work/daimler-subscription-concept",
    context: "Daimler Mercedes-Benz · Deloitte Digital",
    surface: "Desktop and mobile web",
    role: "UX definition lead",
    evidence:
      "Concept system, testable flows, and executive alignment",
    outcome:
      "Turned a new service model into testable journeys that helped teams align on acquisition, checkout, and lifecycle scope.",
    ctaLabel: "Open Daimler Vehicle Subscription Concept project",
    summary:
      "Defined a greenfield subscription journey to make an unfamiliar service model concrete enough to test and align around.",
    description:
      "Led UX definition for acquisition, configuration, checkout, lifecycle management, and executive client alignment.",
    image: {
      src: daimlerSubscriptionMockup,
      alt: "Daimler vehicle subscription concept mockup previewing the homepage case study.",
    },
  },
  {
    id: "smart-connected-car-app",
    label: "Connected mobility",
    period: "2021-2022",
    title: "Smart Connected Car App",
    displayTitle: "Smart Connected Car App",
    navTitle: "Smart App",
    href: "/work/smart-connected-car-app",
    context: "smart · Deloitte Digital",
    surface: "Native iOS and Android EV companion app",
    role: "Product design lead",
    evidence:
      "Implementation-ready flows, prototypes, testing inputs, and delivery alignment",
    outcome:
      "Translated vehicle, backend, and partner constraints into app flows teams could prototype, test, and prepare for delivery.",
    ctaLabel: "Open Smart Connected Car App project",
    summary:
      "Structured a complex EV companion experience across access, status, charging, climate, and remote controls.",
    description:
      "Turned moving vehicle, backend, and partner dependencies into implementation-ready flows, prototypes, testing inputs, and delivery conversations.",
    image: {
      src: smartConnectedCarMockupWide,
      alt: "Wide smart connected-car app mockup previewing the homepage case study.",
      objectPosition: "52% 50%",
    },
  },
];

export const projectCta = "Open project";

export const speakingTopics: SpeakingTopic[] = [
  {
    title: "AI and Design UXDX Panel at SAP",
    description:
      "Panel discussion on how AI is reshaping design practice, collaboration, and productivity, with perspectives from senior leaders across design, consulting, and customer engagement.",
    imageSrc: "/speaking/uxdx-berlin-sap-panel-close.jpg",
    imageAlt:
      "Eddie Kim speaking on a UXDX Berlin panel hosted at SAP about AI, collaboration, and creativity.",
  },
  {
    title: "Beyond Human-Centred Design at Hatch Berlin Conference",
    description:
      "Workshop for senior designers on looking beyond narrow user-centred optimisation to consider longer-term outcomes, system effects, and the wider impact of design decisions.",
    imageSrc: "/speaking/beyond-human-centred-design-workshop.jpg",
    imageAlt:
      "Workshop participants discussing and mapping ideas during the Beyond Human-Centred Design session.",
  },
  {
    title:
      "Panel on AI and the future of work at University of Europe for Applied Sciences",
    description:
      "Panel talks at University of Europe for Applied Sciences (UE) and GISMA for students and early-career professionals on how AI is changing product design, technology, and the future of work.",
    imageSrc: "/speaking/ue-innovation-hub-panel-close.jpg",
    imageAlt:
      "Eddie Kim speaking on a university innovation hub panel about AI and the future of work.",
    imagePosition: "center 40%",
  },
  {
    title: "Ahead of the Curve: Embracing AI in Your Design Practice",
    description:
      "Talk on how design practitioners and teams can adopt AI more thoughtfully: where it creates leverage, where caution is needed, and how to build practical workflows without losing judgement.",
    imageSrc: "/speaking/techspace-ahead-of-the-curve-close.jpg",
    imageAlt:
      "Eddie Kim presenting a talk on embracing AI in design practice at Techspace.",
    imageScale: 1.2,
  },
];

const emailHref = "mailto:edmundhkim@gmail.com";
const linkedInHref = "https://www.linkedin.com/in/edmundhkim/";

export const contactLinks: ContactLink[] = [
  {
    href: emailHref,
    label: "Email Eddie",
  },
  {
    href: linkedInHref,
    label: "LinkedIn",
    external: true,
  },
];
