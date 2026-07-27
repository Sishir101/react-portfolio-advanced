/**
 * Optional per-repo overrides (key = GitHub repo name).
 * GitHub supplies title, description, homepage, and primary language automatically.
 * NOTE: "portfolio-react" is handled below in supplemental projects as "Advanced Portfolio"
 * to avoid duplicate cards — we intentionally do NOT enhance it here so the merge
 * logic filters the GitHub API copy out (since we set github to the same url).
 */
export const projectEnhancements = {
  "sishir-portfolio": {
    title: "Personal Portfolio (HTML) · Small",
    description:
      "Earlier responsive portfolio site built with vanilla stack. Sections for skills, education, projects. Works on mobile. Deployed on Vercel.",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap", "Responsive", "Minor Project"],
    gradient: "from-sky-500/40 to-indigo-600/40",
    demo: "https://sishir-portfolio.vercel.app",
  },
};

/**
 * Projects not on GitHub (or not public yet). Shown alongside API repos.
 * Set github: null to hide the Code button, or add a URL when the repo exists.
 *
 * Order: Major Projects first, then Minor / Small Projects.
 */
export const supplementalProjects = [
  /* ====== MAJOR PROJECTS ====== */
  {
    id: "meditrust",
    title: "MediTrust — Healthcare Platform · Major",
    description:
      "A full stack Healthcare Management Platform featuring appointment booking, user authentication, healthcare services, doctor consultation workflow and AI chatbot assistance. Built end-to-end with Node.js, Express, MySQL and a responsive Bootstrap frontend.",
    tags: ["Major Project", "Node.js", "Express.js", "MySQL", "Authentication", "AI Chatbot", "Bootstrap"],
    github: null,
    demo: null,
    gradient: "from-emerald-500/40 to-cyan-600/40",
    source: "local",
  },
  {
    id: "advanced-portfolio",
    title: "Advanced Portfolio · Major",
    description:
      "This portfolio website itself — a polished, responsive, animated single-page application featuring live GitHub project sync, animated skill bars, scroll-triggered counters, a contact form, and a custom tech-stack orbit animation around the profile avatar.",
    tags: ["Major Project", "Frontend", "Tailwind CSS", "Vite", "Framer Motion", "REST APIs"],
    github: "https://github.com/Sishir101/portfolio-react",
    demo: null,
    gradient: "from-fuchsia-500/40 to-purple-600/40",
    source: "local",
  },

  /* ====== MINOR / SMALL PROJECTS ====== */
  {
    id: "java-oop-practice",
    title: "Java OOP Practice · Minor",
    description:
      "Small modular Java applications focused on object-oriented design principles (classes, inheritance, polymorphism, encapsulation) plus simple JDBC integration with MySQL.",
    tags: ["Minor Project", "Java", "OOP", "MySQL", "JDBC"],
    github: null,
    demo: null,
    gradient: "from-amber-500/40 to-orange-600/40",
    source: "local",
  },
];
