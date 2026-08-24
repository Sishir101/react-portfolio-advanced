import {
  FaReact,
  FaNodeJs,
  FaJava,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaPython,
} from "react-icons/fa";
import { SiMysql, SiTailwindcss, SiExpress, SiPostman, SiC } from "react-icons/si";

export const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "Java", icon: FaJava, level: 88, detail: "OOP · Collections" },
      { name: "JavaScript", icon: FaJs, level: 85, detail: "DOM · ES6" },
      { name: "Python", icon: FaPython, level: 82, detail: "Scripting · Data" },
      { name: "C", icon: SiC, level: 80, detail: "Pointers · Memory" },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "HTML5", icon: FaHtml5, level: 92, detail: "Semantic Tags" },
      { name: "CSS3", icon: FaCss3Alt, level: 88, detail: "Flexbox · Responsive" },
      { name: "Tailwind CSS", icon: SiTailwindcss, level: 86, detail: "Utility-first" },
      { name: "Bootstrap", icon: FaBootstrap, level: 80, detail: "UI Framework" },
      { name: "React", icon: FaReact, level: 82, detail: "Components · Hooks" },
    ],
  },
  {
    title: "Backend & Data",
    skills: [
      { name: "Node.js", icon: FaNodeJs, level: 80, detail: "Backend Basics" },
      { name: "Express.js", icon: SiExpress, level: 76, detail: "Routing · APIs" },
      { name: "MySQL", icon: SiMysql, level: 85, detail: "Queries · Joins" },
    ],
  },
  {
    title: "Tools & Workflow",
    skills: [
      { name: "Git", icon: FaGitAlt, level: 88, detail: "Version Control" },
      { name: "Postman", icon: SiPostman, level: 78, detail: "API Testing" },
      { name: "REST APIs", icon: FaNodeJs, level: 82, detail: "HTTP · JSON" },
      { name: "Responsive UI", icon: FaReact, level: 90, detail: "Mobile-first" },
    ],
  },
];
