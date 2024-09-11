import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
// import { projects } from "../lib/projectsData";
// import ProjectCard from "../components/ProjectCard";
import WIP from "../components/WIP";

export default function ProjectsPage() {
  document.title = "Projects | Avav Abdillah Sam";
  return (
    <main className="w-full md:w-3/4">
      <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-2xl font-semibold md:text-4xl md:font-bold mb-4 text-center py-2 md:py-3 px-4 rounded-lg bg-gray-800">
        My Projects
      </motion.h1>
      <WIP />
      {/* <div className="flex flex-wrap -mx-4">
        {projects.map((project) => (
          <div key={project.id} className="w-full sm:w-1/2 lg:w-1/3 p-4">
            <div className="h-full">
              <ProjectCard project={project} />
            </div>
          </div>
        ))}
      </div> */}
      <motion.a
        href="https://www.github.com/AvavSam"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-4 block text-center py-2 px-4 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors border border-white"
      >
        <span className="flex items-center justify-center">
          Checkout more on my Github
          <ExternalLink size={18} className="ml-2" />
        </span>
      </motion.a>
    </main>
  );
}
