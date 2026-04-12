import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  reactjs,
  nodejs,
  mongodb,
  git,
  css,
  python,
  angular,
  csharp,
  cplusplus,
  java,
  postgresql,
  unity,
  redis,
  rabbitmq,
  aws,
  bgu,
  comda,
  idf,
  englishcoach,
  blockchain,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "AI & Research",
    icon: creator,
  },
  {
    title: "Mobile & Systems",
    icon: mobile,
  },
];

const technologies: TTechnology[] = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React",
    icon: reactjs,
  },
  {
    name: "Node.js",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "C#",
    icon: csharp,
  },
  {
    name: "C++",
    icon: cplusplus,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "Unity",
    icon: unity,
  },
  {
    name: "Redis",
    icon: redis,
  },
  {
    name: "RabbitMQ",
    icon: rabbitmq,
  },
];

const experiences: TExperience[] = [
  {
    title: "Software Developer — Research Staff",
    companyName: "Ben-Gurion University Blockchain Research Lab",
    icon: bgu,
    iconBg: "#1d3461",
    date: "Nov 2025 - Present",
    points: [
      "Architected and developed from scratch a multiplayer trading platform for blockchain research (FastAPI & React), supporting concurrent sessions via WebSockets.",
      "Designed global research infrastructure in collaboration with Uniswap, focusing on AMM environments and information asymmetry for behavioral finance studies.",
      "Engineered an AI-driven Chatbot using LangChain and Vector Database (RAG) to automate research on-boarding and complex knowledge transfer.",
    ],
  },
  {
    title: "Full Stack Developer",
    companyName: "Comda",
    icon: comda,
    iconBg: "#383E56",
    date: "2022 - 2023",
    points: [
      "Developed backend services using C#.NET Core and MSSQL, delivering end-to-end features from concept to production.",
      "Led R&D for high-availability architecture, evaluating Redis, RabbitMQ, and Docker to enhance system scalability and performance.",
      "Built and optimized web apps and APIs with Angular, focusing on performance and user experience.",
    ],
  },
  {
    title: "Software Developer",
    companyName: "Intelligence Corps (Unit 9900)",
    icon: idf,
    iconBg: "#E6DEDD",
    date: "2019 - 2022",
    points: [
      "Developed C#.NET apps and REST APIs for high-stakes operational systems.",
      "Engineered a 3D combat simulator in Unity from scratch, serving hundreds of users for operational mission rehearsal.",
      "Refactored legacy systems, enhancing performance and maintainability.",
      "Commanded a 6-month tech training course.",
    ],
  },
];

const testimonials: TTestimonial[] = [];

const projects: TProject[] = [
  {
    name: "English Coach | AI Learning Platform",
    description:
      "I built this to explore what AI-personalized learning could actually feel like in practice. AI agents adapt each session based on real performance — not just progress bars. The most technically interesting part was integrating Azure AI Speech for live pronunciation analysis that gives instant, specific feedback.",
    tags: [
      {
        name: "AI Agents",
        color: "blue-text-gradient",
      },
      {
        name: "Azure AI Speech",
        color: "green-text-gradient",
      },
      {
        name: "Python",
        color: "pink-text-gradient",
      },
    ],
    image: englishcoach,
    sourceCodeLink: "https://github.com/galharel23/EnglishCoach",
    liveLink: "https://main.d1z8ztoexs4c9s.amplifyapp.com/",
  },
  {
    name: "Blockchain Trading Platform",
    description:
      "Built for real academic research — multiple participants trade simultaneously in a controlled AMM environment so researchers can study actual decision-making under market conditions. Collaborating with Uniswap brought hard constraints that made the design more interesting, not easier.",
    tags: [
      {
        name: "FastAPI",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "WebSockets",
        color: "pink-text-gradient",
      },
    ],
    image: blockchain,
    sourceCodeLink: "https://github.com/galharel23/amm-game",
    liveLink: "amm-experiment-bgu.com",
  },
];

export { services, technologies, experiences, testimonials, projects };
