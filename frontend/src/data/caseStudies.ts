import laptopScreen from "../assets/laptop-screen.png";
import laptopFrame from "../assets/laptop-frame.png";

export type CaseStudy = {
  slug: string;
  title: string;
  subtitle: string;
  company: string;
  role: string;
  tags: string[];
  problem: string;
  outcome: string;
  impact?: string;
  previewImage: string;
  previewFrame?: string;
  layout: "featured" | "standard";
  status: "published" | "placeholder";
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "gamified-literacy-learning",
    title: "Transforming functional literacy into a gamified 3D learning world for teens",
    subtitle: "Making abstract literacy skills tangible through structured play",
    company: "Enterprise EdTech",
    role: "Senior Product Designer",
    tags: ["EdTech", "Gamification", "3D Learning", "Teens"],
    problem:
      "Teens struggled to stay engaged with functional literacy content that felt abstract, repetitive, and disconnected from how they learn in other digital products.",
    outcome:
      "Designed a gamified 3D learning experience that turns literacy progression into an explorable world — giving learners clear goals, feedback, and reasons to return.",
    impact: "[Metric placeholder — add when available]",
    previewImage: laptopScreen,
    previewFrame: laptopFrame,
    layout: "featured",
    status: "published",
  },
  {
    slug: "teacher-ai-workflows",
    title: "Helping teachers prepare and review lessons with AI",
    subtitle: "Reducing prep time while keeping educators in control",
    company: "Enterprise EdTech",
    role: "Senior Product Designer",
    tags: ["AI", "Teacher workflows", "Enterprise"],
    problem:
      "Teachers spent significant time preparing and reviewing lesson materials across fragmented tools, with limited support for adapting content to class needs.",
    outcome:
      "Case study in progress — focused on AI-assisted lesson prep with transparent outputs and teacher-first guardrails.",
    previewImage: laptopScreen,
    layout: "standard",
    status: "placeholder",
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}
