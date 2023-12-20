import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Midland University - Code Academy",
    location: "USA, Omaha-NE/Atlanta-GA",
    description:
      "A 6-month intensive studying program focused on training UI/UX junior developers. The program emphasized hands-on projects, fostering collaboration and problem-solving skills in a real-world development environment. The experience has equipped me with a robust skill set and a deep understanding of the end-to-end development process.",
    icon: React.createElement(LuGraduationCap),
    date: "2024",
  },
  {
    title: "Midland University - Code Academy",
    location: "Orlando, FL",
    description:
    "A 6-month intensive studying program focused on training UI/UX junior developers. The program emphasized hands-on projects, fostering collaboration and problem-solving skills in a real-world development environment. The experience has equipped me with a robust skill set and a deep understanding of the end-to-end development process.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Midland University - Code Academy",
    location: "Houston, TX",
    description:
    "A 6-month intensive studying program focused on training UI/UX junior developers. The program emphasized hands-on projects, fostering collaboration and problem-solving skills in a real-world development environment. The experience has equipped me with a robust skill set and a deep understanding of the end-to-end development process.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "A 6-month intensive studying program focused on training UI/UX junior developers.",
    tags: ["React", "HTML", "JavaScript"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "A 6-month intensive studying program focused on training UI/UX junior developers.",
    tags: ["React", "HTML", "JavaScript"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A 6-month intensive studying program focused on training UI/UX junior developers.",
    tags: ["React", "HTML", "JavaScript"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
