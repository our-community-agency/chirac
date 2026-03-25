export type ProjectStory = {
  title: string;
  location: string;
  category: string;
  summary: string;
  videoLabel: string;
  deliverables: string[];
  prompt: string;
  services: string[];
};

export type ServicePillar = {
  icon: "spotlight" | "film" | "graduation" | "sparkles" | "globe" | "layers";
  title: string;
  description: string;
};

export type PresencePillar = {
  label: string;
  title: string;
  description: string;
};

export const heroSignals = [
  "Chicago-based",
  "Cairo-ready",
  "Education fluent",
  "Built for live rooms",
];

export const featuredProjects: ProjectStory[] = [
  {
    title: "Cairo Learning Series",
    location: "Cairo, Egypt",
    category: "Education Production",
    summary:
      "Human-centered campus storytelling shaped for admissions, donor moments, and the kind of edit that still feels intimate after a dozen viewings.",
    videoLabel: "Drop in the Cairo campus reel",
    deliverables: ["Director-led interviews", "Classroom b-roll", "Admissions cutdowns"],
    prompt:
      "Ask Andrew how he approaches education shoots in Cairo, earns trust on location, and turns a campus story into a film that feels lived-in.",
    services: ["Education Films", "Travel-Ready Production", "Editorial Cutdowns"],
  },
  {
    title: "South Loop Soundcheck",
    location: "Chicago, IL",
    category: "Live Event Film",
    summary:
      "A kinetic event film built around rehearsal energy, crowd rhythm, and the split-second cues that make a room feel electric instead of merely documented.",
    videoLabel: "Swap in the Chicago show-day reel",
    deliverables: ["Show-day capture", "Artist portraits", "Next-day recap edit"],
    prompt:
      "Ask Andrew how he captures live-event momentum in Chicago without losing the scale, the crowd energy, or the tiny moments that make the room feel real.",
    services: ["Live Event Direction", "Campaign Capture", "Editorial Cutdowns"],
  },
  {
    title: "Future Campus Launch",
    location: "Midwest",
    category: "Campaign + Event Presence",
    summary:
      "One visual system stretched across keynote screens, social cutdowns, and atmosphere films so the campaign felt cohesive before, during, and after the event.",
    videoLabel: "Insert keynote and campaign footage",
    deliverables: ["Keynote visuals", "Social cutdowns", "Campaign motion toolkit"],
    prompt:
      "Ask Andrew how he builds one visual language that can hold a keynote room, a launch film, and short-form cutdowns without feeling repetitive.",
    services: ["Campaign Capture", "Motion Graphics", "Live Event Direction"],
  },
  {
    title: "After Dark City Stories",
    location: "Multi-city",
    category: "Brand Film Series",
    summary:
      "A run-and-gun night shoot system designed for moody city texture, fast moves, and edits that still feel premium when the timeline is tight.",
    videoLabel: "Replace with the night-shoot hero cut",
    deliverables: ["Location portraits", "Social reels", "Brand anthem edit"],
    prompt:
      "Ask Andrew how he plans fast-moving night shoots, keeps the footage cinematic under pressure, and builds enough structure for a series instead of a one-off.",
    services: ["Campaign Capture", "Travel-Ready Production", "Editorial Cutdowns"],
  },
];

export const serviceOptions = [
  "Live Event Direction",
  "Education Films",
  "Campaign Capture",
  "Motion Graphics",
  "Editorial Cutdowns",
  "Travel-Ready Production",
];

export const servicePillars: ServicePillar[] = [
  {
    icon: "spotlight",
    title: "Event Direction",
    description:
      "Production leadership for rooms that have to feel intentional from first cue to final recap.",
  },
  {
    icon: "film",
    title: "Brand + Culture Films",
    description:
      "Motion-first storytelling that holds on web, on stage, and in the social cutdowns that follow.",
  },
  {
    icon: "graduation",
    title: "Education Stories",
    description:
      "Interview and documentary workflows that respect students, faculty, and the environments around them.",
  },
  {
    icon: "sparkles",
    title: "Motion Systems",
    description:
      "Graphic language and editorial rhythm that give every touchpoint the same pulse.",
  },
  {
    icon: "globe",
    title: "Travel-Ready Crews",
    description:
      "Lean production planning built for location work, unfamiliar rooms, and short windows to get it right.",
  },
  {
    icon: "layers",
    title: "Atmosphere Design",
    description:
      "Visual framing, sound, lighting, and on-screen texture shaped to make the room remember itself differently.",
  },
];

export const presencePillars: PresencePillar[] = [
  {
    label: "01",
    title: "Chicago energy",
    description:
      "Fast decisions, practical crew logic, and show-day calm when timing gets tight.",
  },
  {
    label: "02",
    title: "Global range",
    description:
      "Comfortable moving from hometown venues to international productions without flattening the local texture.",
  },
  {
    label: "03",
    title: "Education fluency",
    description:
      "A way of filming students, teachers, and institutions that feels observant instead of overly polished.",
  },
  {
    label: "04",
    title: "Motion first",
    description:
      "Every frame is built to keep traveling: stage screen, homepage, pitch deck, recap, and social reel.",
  },
];
