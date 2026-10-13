/**
 * =======================================================================
 * SARAH HAKIM'S PORTFOLIO CONTENT DATA
 * =======================================================================
 * Welcome! This is the ONE file where all the text, links, skills, and
 * projects are stored. You can edit any text here, save the file, and
 * your portfolio website will update automatically!
 * 
 * Tips:
 * - Keep quotes around text: "like this"
 * - Don't remove commas between list items
 * - If you want to change your photo, place your new image in public/
 *   and change the photo path below!
 * =======================================================================
 */

export interface NavItem {
  number: string;
  label: string;
  href: string;
}

export interface SkillItem {
  id: string;
  name: string;
  status: string; // e.g., "LEARNING", "MASTERY", "PASSION"
  category: "Technical" | "Creative & Speaking" | "Languages";
  description: string;
  badgeColor: "red" | "cyan" | "yellow";
  powerLevel: number; // 0 to 100 for comic stat bar
}

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  image: string;
  demoUrl?: string;
  repoUrl?: string;
  comicLabel: string; // comic sticker e.g. "ISSUE #01"
}

export interface AchievementItem {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  accent: "red" | "cyan" | "yellow";
}

export interface SocialLink {
  name: string;
  url: string;
  icon: "github" | "linkedin" | "instagram" | "mail";
  handle: string;
}

export const portfolioContent = {
  // ---------------------------------------------------------------------
  // 1. BRAND & PERSONAL INFO
  // ---------------------------------------------------------------------
  personal: {
    name: "SARAH HAKIM",
    firstName: "Sarah",
    lastName: "Hakim",
    tagline: "WHERE CODE MEETS CREATIVITY",
    subTagline: "First-Year B.Tech CSE Student ✦ Performer ✦ Educator",
    university: "JECRC University",
    location: "Jaipur, India",
    photo: "/sarah-photo.jpg", // Located in public/sarah-photo.jpg
    statusBadge: "⚡ DIMENSION 2026: ACTIVE",
  },

  // ---------------------------------------------------------------------
  // 2. LOADER SCREEN
  // ---------------------------------------------------------------------
  loader: {
    loadingText: "ENTERING SARAH'S UNIVERSE...",
    subText: "CALIBRATING MULTIVERSE FREQUENCIES",
    buttonPrompt: "INITIALIZING PROTOCOLS",
  },

  // ---------------------------------------------------------------------
  // 3. NAVIGATION BAR
  // ---------------------------------------------------------------------
  navigation: [
    { number: "01", label: "HOME", href: "#hero" },
    { number: "02", label: "ABOUT", href: "#about" },
    { number: "03", label: "SKILLS", href: "#skills" },
    { number: "04", label: "PROJECTS", href: "#projects" },
    { number: "05", label: "ACHIEVEMENTS", href: "#achievements" },
    { number: "06", label: "CONTACT", href: "#contact" },
  ] as NavItem[],

  // ---------------------------------------------------------------------
  // 4. HERO SECTION
  // ---------------------------------------------------------------------
  hero: {
    eyebrow: "ISSUE #01: THE ORIGIN CHRONICLES",
    headlinePart1: "WHERE CODE",
    headlineAccent: "MEETS",
    headlinePart2: "CREATIVITY",
    subtitle:
      "A B.Tech Computer Science explorer blending 7 years of theatre expression, passionate NGO teaching, and modern software craft into bold digital worlds.",
    ctaPrimary: {
      text: "VIEW MY WORK",
      href: "#projects",
    },
    ctaSecondary: {
      text: "CONTACT ME",
      href: "#contact",
    },
    marqueeUpper: "SARAH HAKIM ✦ CODER ✦ PERFORMER ✦ TEACHER ✦ B.TECH CSE ✦ INNOVATOR ✦ ",
    marqueeLower: "✦ PASSION INTO PURPOSE ✦ INTO THE MULTIVERSE ✦ 7 YEARS THEATRE ✦ JECRC UNIVERSITY ✦ ",
  },

  // ---------------------------------------------------------------------
  // 5. ABOUT SECTION
  // ---------------------------------------------------------------------
  about: {
    sectionNumber: "02",
    badge: "CHARACTER FILE",
    heading: "WHO AM I?",
    glitchText: "UNMASKING THE HERO",
    bioParagraph1:
      "I'm a first-year B.Tech Computer Science Engineering student at JECRC University with a deep curiosity for how technology shapes the human experience.",
    bioParagraph2:
      "Before writing my first line of code, I spent 7 transformative years on the theatre stage. Theatre taught me empathy, composure under pressure, and the art of telling memorable stories. Combining that with my love for teaching as an NGO volunteer, I build and learn with passion, patience, and purpose.",
    highlights: [
      { label: "DEGREE", value: "B.Tech CSE (1st Year)", sub: "JECRC University" },
      { label: "STAGE EXPERIENCE", value: "7+ Years", sub: "Theatre & Performing Arts" },
      { label: "VOLUNTEERING", value: "NGO Educator", sub: "Youth Empowerment & Teaching" },
      { label: "CORE FOCUS", value: "C, Git & Creative Tech", sub: "Building Strong Fundamentals" },
    ],
  },

  // ---------------------------------------------------------------------
  // 6. SKILLS ("MY POWERS") SECTION
  // ---------------------------------------------------------------------
  skills: {
    sectionNumber: "03",
    badge: "SUPERPOWERS & ABILITIES",
    heading: "MY POWERS",
    description:
      "Every developer has an arsenal. Here is the blend of programming logic, expressive performance, and communication superpowers I bring into every room.",
    items: [
      {
        id: "c-prog",
        name: "C Programming",
        status: "LEARNING",
        category: "Technical",
        description: "Mastering foundational computer architecture, memory allocation, pointers, and algorithmic logic.",
        badgeColor: "cyan",
        powerLevel: 75,
      },
      {
        id: "git-github",
        name: "Git & GitHub",
        status: "LEARNING",
        category: "Technical",
        description: "Version control workflows, branching, repository management, and open-source collaboration.",
        badgeColor: "cyan",
        powerLevel: 70,
      },
      {
        id: "theatre",
        name: "Public Speaking & Performance",
        status: "MASTERY",
        category: "Creative & Speaking",
        description: "7 years of active theatre stagecraft: high-energy vocal delivery, stage presence, and captivating storytelling.",
        badgeColor: "red",
        powerLevel: 95,
      },
      {
        id: "teaching",
        name: "Teaching & Mentoring",
        status: "PASSION",
        category: "Creative & Speaking",
        description: "Transforming complex concepts into simple, inspiring lessons for children through NGO community service.",
        badgeColor: "yellow",
        powerLevel: 90,
      },
      {
        id: "languages",
        name: "Multilingual Communication",
        status: "FLUENT & ACTIVE",
        category: "Languages",
        description: "Fluent across cultural boundaries in English, Arabic, Urdu, and French (conversational/learning).",
        badgeColor: "red",
        powerLevel: 88,
      },
    ] as SkillItem[],
  },

  // ---------------------------------------------------------------------
  // 7. PROJECTS ("MY WORK") SECTION
  // ---------------------------------------------------------------------
  projects: {
    sectionNumber: "04",
    badge: "MISSION ARCHIVES",
    heading: "MY WORK",
    description:
      "Interactive digital creations, learning milestones, and experiments. Built with care and designed to stand out.",
    items: [
      {
        id: "multiverse-portfolio",
        title: "Multiverse Interactive Portfolio",
        comicLabel: "SPECIAL ISSUE #01",
        tagline: "Bold Comic-Book Aesthetic with React & Motion",
        description:
          "A high-octane personal universe built with Vite, React, TypeScript, Tailwind CSS, and Framer Motion featuring custom interactive physics, 3D tilt cards, and smooth Lenis scrolling.",
        tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Lenis"],
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
        demoUrl: "#",
        repoUrl: "https://github.com",
      },
      {
        id: "c-algorithms",
        title: "C Logic & Algorithmic Lab",
        comicLabel: "RESEARCH LAB #02",
        tagline: "Core Data Structures & Computational Logic",
        description:
          "A collection of robust C programs exploring pointers, file I/O, recursion, and search-and-sort implementations built during my first-year engineering coursework.",
        tags: ["C Language", "Data Structures", "Algorithms", "Memory Mgmt"],
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
        demoUrl: "#",
        repoUrl: "https://github.com",
      },
      {
        id: "community-portal",
        title: "NGO Learning & Classroom Hub",
        comicLabel: "COMMUNITY #03",
        tagline: "Interactive Education Concepts for Kids",
        description:
          "An engaging educational resource concept designed to deliver bite-sized lessons, story-driven exercises, and creative learning modules for young students.",
        tags: ["Creative Design", "Education", "UI/UX", "Mentorship"],
        image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80",
        demoUrl: "#",
        repoUrl: "https://github.com",
      },
    ] as ProjectItem[],
  },

  // ---------------------------------------------------------------------
  // 8. ACHIEVEMENTS ("BEYOND CODE") TIMELINE
  // ---------------------------------------------------------------------
  achievements: {
    sectionNumber: "05",
    badge: "CANON EVENTS",
    heading: "BEYOND CODE",
    description:
      "Milestones that shaped who I am today. Each chapter represents dedication, empathy, and continuous growth.",
    timeline: [
      {
        year: "2019 — PRESENT",
        title: "7 Years of Stage & Theatre",
        subtitle: "Actor, Speaker & Creative Performer",
        description:
          "Dedicated 7 years to live theatrical performances, honing voice modulation, emotional expression, team synchronization, and unshakeable public confidence under the spotlight.",
        badge: "PERFORMER",
        accent: "red",
      },
      {
        year: "2023 — PRESENT",
        title: "NGO Volunteer Teacher",
        subtitle: "Empowering Next-Gen Learners",
        description:
          "Volunteered regularly with an NGO to teach underprivileged youth. Developed interactive, story-centered ways to spark curiosity in children and nurture love for knowledge.",
        badge: "EDUCATOR",
        accent: "yellow",
      },
      {
        year: "2025 — PRESENT",
        title: "Started B.Tech CSE at JECRC University",
        subtitle: "Engineering the Future",
        description:
          "Stepped into the world of Computer Science and Engineering at JECRC University, diving headfirst into C programming, algorithms, Git, and software development foundations.",
        badge: "ENGINEER IN TRAINING",
        accent: "cyan",
      },
    ] as AchievementItem[],
  },

  // ---------------------------------------------------------------------
  // 9. QUOTE BREAK
  // ---------------------------------------------------------------------
  quote: {
    statement: "IT'S JUST A LEAP OF FAITH.",
    author: "— INTO THE SPIDER-VERSE",
    caption: "Every bold journey starts with courage and curiosity.",
  },

  // ---------------------------------------------------------------------
  // 10. CONTACT SECTION
  // ---------------------------------------------------------------------
  contact: {
    sectionNumber: "06",
    badge: "TRANSMIT FREQUENCY",
    heading: "LET'S CONNECT",
    description:
      "Whether you want to discuss a collaborative project, theatrical storytelling, coding ideas, or just say hello — my frequency is always open!",
    email: "sarahhakim.work@gmail.com",
    location: "Jaipur, Rajasthan, India",
    socials: [
      {
        name: "GitHub",
        url: "https://github.com",
        icon: "github",
        handle: "@sarah-hakim",
      },
      {
        name: "LinkedIn",
        url: "https://linkedin.com",
        icon: "linkedin",
        handle: "Sarah Hakim",
      },
      {
        name: "Instagram",
        url: "https://instagram.com",
        icon: "instagram",
        handle: "@sarah.universe",
      },
      {
        name: "Email",
        url: "mailto:sarahhakim.work@gmail.com",
        icon: "mail",
        handle: "sarahhakim.work@gmail.com",
      },
    ] as SocialLink[],
  },

  // ---------------------------------------------------------------------
  // 11. FOOTER
  // ---------------------------------------------------------------------
  footer: {
    marquee: "SARAH HAKIM ✦ BUILT WITH PASSION ✦ JECRC UNIVERSITY ✦ 2026 ✦ KEEP EXPLORING ✦ ",
    copyright: "Designed & Built by Sarah Hakim © 2026",
    tagline: "Powered by React, Framer Motion & Comic Energy.",
  },
};
