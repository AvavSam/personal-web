import { Code, Terminal, Brain } from "lucide-react";

export const projects = [
  {
    title: "HMTI UNTAD Website",
    description: "Website of the Informatics Engineering Student Association of Tadulako University.",
    icon: Code,
    technologies: ["HTML", "TailwindCSS", "JavaScript", "PHP"],
    github: "https://github.com/intelektual21/Website-HMTI",
    live: "",
  },
  {
    title: "Light Control System",
    description: "This project implements a fuzzy logic system in Python to control light brightness based on ambient light levels and activity, using fuzzy sets and rules for decision-making.",
    icon: Brain,
    technologies: ["Python", "NumPy", "scikit-fuzzy", "Matplotlib"],
    github: "https://github.com/AvavSam/Light-Control-System",
    live: "",
  },
  {
    title: "Hotel Room Management System",
    description: "A C++ console-based hotel room management system that allows users to add, remove, search rooms, handle reservations, and process check-ins/check-outs.",
    icon: Terminal, 
    technologies: ["C++ "],
    github: "https://github.com/AvavSam/Hotel-Reservation",
    live: "",
  },
  {
    title: "Explore/",
    description: "Explore/ is a website designed to highlight various travel destinations in Central Sulawesi, featuring individual pages for areas like Bangkep, Donggala, and Poso.",
    icon: Code,
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/AvavSam/astro_submission",
    live: "https://avavsam.github.io/astro_submission/index.html",
  },
];
