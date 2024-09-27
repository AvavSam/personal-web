import { Github, Linkedin, Instagram, Mail, Code, FileCode, GitBranch, PenTool, Cpu, Home, User, StickyNote, Briefcase, Database, Atom, BrainCircuit, AppWindow} from "lucide-react";

export const navItems = [
  { name: "Home", icon: Home, path: "" },
  { name: "About", icon: User, path: "about" },
  { name: "Projects", icon: Briefcase, path: "projects" },
  { name: "Certificate", icon: StickyNote, path: "certificates" },
];

export const skills = [
  { name: "HTML", color: "bg-orange-600/50", icon: AppWindow},
  { name: "CSS", color: "bg-blue-600/50", icon: FileCode },
  { name: "JavaScript", color: "bg-yellow-500/50", icon: Code },
  { name: "TailwindCSS", color: "bg-blue-700/50", icon: FileCode },
  { name: "React", color: "bg-blue-500/50", icon: Atom },
  { name: "C++", color: "bg-blue-800/50", icon: Cpu },
  { name: "Python", color: "bg-blue-500/50", icon: BrainCircuit },
  { name: "MySQL", color: "bg-orange-500/50", icon: Database },
  { name: "Git", color: "bg-red-500/50", icon: GitBranch },
  { name: "Figma", color: "bg-purple-500/50", icon: PenTool },
];

export const contactLinks = [
  { name: "Github", desc: "@AvavSam", icon: Github, color: "bg-gray-700/50", link: "https://www.github.com/AvavSam" },
  { name: "LinkedIn", desc: "@avavsam", icon: Linkedin, color: "bg-blue-700/50", link: "https://www.linkedin.com/in/avavsam" },
  { name: "Instagram", desc: "@avav_sam", icon: Instagram, color: "bg-pink-600/50", link: "https://www.instagram.com/avav_sam/" },
  { name: "Gmail", desc: "avav2608005@gmail.com", icon: Mail, color: "bg-red-600/50", link: "mailto:avav2608005@gmail.com" },
];

export const educationData = [
  {
    institution: "Tadulako University",
    degree: "Bachelor Degree",
    field: "Faculty of Engineering | Informatics Engineering (S.Kom)",
    period: "Sep 2023 - Present",
    logo: "/Untad.webp",
    color: "bg-red-900/40",
  },
  {
    institution: "Programming Tadulako",
    degree: "Batch Astroshphere",
    field: "",
    period: "Dec 2023 - May 2024",
    logo: "/ProgrammingTadulako.webp",
    color: "bg-blue-900/30",
  },
  {
    institution: "Al-Azhar Mandiri Senior High School",
    degree: "Mathematics and Nature Science",
    field: "",
    period: "2021 - 2023",
    logo: "/AlAzhar.webp",
    color: "bg-red-900/30",
  },
];

export const organizationData = [
  {
    name: "Informatics Engineering Student Association (HMTI)",
    role: "Member",
    period: "Nov 2023 - Present",
    logo: "/HMTI.webp",
    color: "bg-blue-900/30",
  },
  {
    name: "Programming Tadulako",
    role: "Member",
    period: "May 2024 - Present",
    logo: "/ProgrammingTadulako.webp",
    color: "bg-blue-900/30",
  },
];

export const certificatesdata = [
  {
    name: "PROXOCORIS2024: UI/UX Design Competition",
    organization: "Universitas Klabat",
    issuedDate: "Issued 30 April 2024",
    credentialId: "PXC/CER/2024/UIX/043",
    skills: ["UI/UX Design"],
    image: "/certificate/Sertifikat Proxo-UIUX.webp",
    color: "bg-green-900/30",
  },
  {
    name: "Belajar Dasar Pemrograman JavaScript",
    organization: "Dicoding Indonesia",
    issuedDate: "Issued Feb 2024 - Expires Feb 2027",
    credentialId: "XVS3OETDV2YQ",
    skills: ["JavaScript"],
    image: "/certificate/Dicoding Belajar Dasar Pemrograman JavaScript.webp",
    color: "bg-blue-900/30",
    link: "https://www.dicoding.com/certificates/2VX3OEYDVZYQ",
  },
  {
    name: "Belajar Dasar Pemrograman Web",
    organization: "Dicoding Indonesia",
    issuedDate: "Issued Sep 2024 - Expires Sep 2027",
    credentialId: "EYX4V35VWZDL",
    skills: ["HTML", "CSS"],
    image: "/certificate/Dicoding Belajar Dasar Pemrograman Web.webp",
    color: "bg-blue-900/30",
    link: "https://www.dicoding.com/certificates/EYX4V35VWZDL",
  },
  {
    name: "Belajar Membuat Front-End Web untuk Pemula",
    organization: "Dicoding Indonesia",
    issuedDate: "Issued Sep 2024 - Expires Sep 2027",
    credentialId: "GRX5O7QW2P0M",
    skills: ["HTML", "JavaScript"],
    image: "/certificate/Dicoding Belajar Membuat Front-End Web.webp",
    color: "bg-blue-900/30",
    link: "https://www.dicoding.com/certificates/GRX5O7QW2P0M",
  },
  {
    name: "Intro to Software engineering",
    organization: "Revou",
    issuedDate: "Issued Feb 2024",
    skills: ["Software Development"],
    image: "/certificate/avav-abdillah-certificate-attendance-sefc.webp",
    color: "bg-yellow-900/30",
  },
  {
    name: "Bootcamp UI-UX Research and Design",
    organization: "MySkill",
    issuedDate: "Issued Oct 2023",
    credentialId: "MS-28/10/2023-HWC2oqo20RomaBhK",
    skills: ["UI/UX Design"],
    image: "/certificate/MySkill_UI-UX RESEARCH AND DESIGN.webp",
    color: "bg-green-900/30",
  },
];
