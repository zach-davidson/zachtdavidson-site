// content manifest for start-here page
// update this file as work progresses — in-progress titles build anticipation

export interface ContentItem {
  title: string;
  href: string;
  type?: "essay" | "podcast" | "resource" | "site";
  external?: boolean;
}

export interface ExploreItem {
  label: string;
  href: string;
  external?: boolean;
}

export interface Pillar {
  id: string;
  title: string;
  tagline: string;
  description: string;
  published: ContentItem[];
  inProgress: string[];
  explore: ExploreItem[];
}

export const pillars: Pillar[] = [
  {
    id: "magic",
    title: "magic",
    tagline: "attention as technology. the trick as epistemology.",
    description:
      "I was a magician before I was a founder. Performance taught me that reality is constructed through attention — what we notice, what we miss, what we're directed toward. Sleight of hand isn't deception; it's applied epistemology.",
    published: [
      { title: "the trick as epistemology", href: "#", type: "essay" },
    ],
    inProgress: ["attention as technology", "misdirection as design pattern"],
    explore: [
      { label: "performance philosophy", href: "#" },
      { label: "magic theory resources", href: "#" },
    ],
  },
  {
    id: "memes",
    title: "memes",
    tagline: "ideas that spread. what gets transmitted and why.",
    description:
      "Culture is contagion. The books, podcasts, and essays that shaped how I think — and the patterns I notice in what spreads vs. what dies. Media as mind-shaping technology.",
    published: [
      { title: "reading list", href: "/reading", type: "resource" },
    ],
    inProgress: ["the media diet audit", "mcluhan was right"],
    explore: [
      { label: "podcast appearances", href: "#" },
      { label: "curated clippings", href: "#" },
    ],
  },
  {
    id: "meaning",
    title: "meaning",
    tagline: "consciousness, perception, purpose. building things that mean something.",
    description:
      "This is what I work on with founders at Heliotrope. Conscious companies in the intelligence age. Not just building products — building systems that matter, for people who care.",
    published: [
      {
        title: "consciousness as sovereign infrastructure",
        href: "#",
        type: "essay",
      },
      { title: "the great liquefaction", href: "#", type: "essay" },
    ],
    inProgress: ["heliotrope thesis v2", "perception technology manifesto"],
    explore: [
      {
        label: "heliotrope.partners",
        href: "https://heliotrope.partners",
        external: true,
      },
      { label: "coaching philosophy", href: "#" },
      { label: "founder frameworks", href: "#" },
    ],
  },
];

// connect section
export const connect = {
  email: "zach@heliotrope.partners",
  twitter: "https://x.com/zachtdavidson",
  heliotrope: "https://heliotrope.partners",
};
