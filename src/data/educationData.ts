export interface EducationItem {
  type: "degree" | "course" | "certification";
  title: string;
  institution: string;
  period: string;
  description?: string;
  badge?: string;
}

export const educationData: EducationItem[] = [
  {
    type: "degree",
    title: "Bachelor's Degree in Computer Science",
    institution: "Kharkiv National University",
    period: "2018 — 2022",
    description:
      "Core algorithms, data structures, software engineering principles, and web development fundamentals.",
  },
  {
    type: "course",
    title: "Fullstack Developer Course",
    institution: "GoIT",
    period: "2026 — Present",
    badge: "In Progress",
    description:
      "Intensive training covering modern JavaScript, React ecosystem, Node.js, and team project workflows.",
  },
  {
    type: "certification",
    title: "Responsive Web Design Certification",
    institution: "freeCodeCamp",
    period: "2025",
    description:
      "Hands-on experience with HTML5, CSS3, Flexbox, CSS Grid, and responsive layout principles.",
  },
  {
    type: "certification",
    title: "JavaScript Algorithms and Data Structures",
    institution: "freeCodeCamp",
    period: "2025",
    description:
      "In-depth study of JavaScript (ES6+), object-oriented and functional programming, and core algorithms.",
  },
];
