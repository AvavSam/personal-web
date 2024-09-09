import { Github, Linkedin, Instagram, Mail, Code, FileCode, GitBranch, PenTool, Cpu, Home, User, StickyNote, Briefcase } from "lucide-react";

export const navItems = [
  { name: "Home", icon: Home },
  { name: "About", icon: User },
  { name: "Projects", icon: Briefcase },
  { name: "Certificate", icon: StickyNote },
];

export const skills = [
  { name: "HTML", color: "bg-orange-600", icon: FileCode },
  { name: "CSS", color: "bg-blue-600", icon: FileCode },
  { name: "TailwindCSS", color: "bg-blue-700", icon: FileCode },
  { name: "JavaScript", color: "bg-yellow-500", icon: Code },
  { name: "React", color: "bg-blue-500", icon: Code },
  { name: "C++", color: "bg-blue-800", icon: Cpu },
  { name: "Git", color: "bg-red-500", icon: GitBranch },
  { name: "Python", color: "bg-blue-500", icon: Code },
  { name: "Figma", color: "bg-purple-500", icon: PenTool },
];

export const contactLinks = [
  { name: "Github", desc: "@AvavSam", icon: Github, color: "bg-gray-700", link: "https://www.github.com/AvavSam" },
  { name: "LinkedIn", desc: "@avavsam", icon: Linkedin, color: "bg-blue-700", link: "https://www.linkedin.com/in/avavsam" },
  { name: "Instagram", desc: "@avav_sam", icon: Instagram, color: "bg-pink-600", link: "https://www.instagram.com/avav_sam/" },
  { name: "Gmail", desc: "avav2608005@gmail.com", icon: Mail, color: "bg-red-600", link: "mailto:avav2608005@gmail.com" },
];
