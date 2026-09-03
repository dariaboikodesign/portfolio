export type ExperienceEntry = {
  role: string;
  period: string;
  highlight?: boolean;
};

export const experience: ExperienceEntry[] = [
  { role: "Physics student and teacher", period: "2017 – 2021" },
  { role: "Freelance designer", period: "Apr 20 – now" },
  { role: "UX/UI Designer in GameDev", period: "Sept 21 – June 22" },
  { role: "Middle Product Designer", period: "Jul 22 – Dec 24" },
  { role: "Senior Product Designer", period: "Jun 25 – now", highlight: true },
];

export const aboutCopy = {
  physics:
    "Studying Fundamental Physics in English at MPGU trained me to think in systems, work with uncertainty, and solve complex problems step by step.",
  designPath:
    "My path in design started with the Uprock UX/UI Designer internship, followed by the Google UX Design Professional Certificate, and was further refined through advanced training in creative layout, grid systems, and typography.",
  craft:
    "Beyond structure and logic, I focus on how design communicates emotion and intent — translating product intent into interfaces that feel clear, credible, and human.",
};
