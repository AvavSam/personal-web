import React from "react";
import { motion } from "framer-motion";
import ButtonLink from "../components/ButtonLink";
import { projects } from "../lib/projectsData";
import ProjectCard from "../components/ProjectCard";

export default function ProjectsPage() {
  document.title = "Projects | Avav Abdillah Sam";
  return (
    <main className="w-full md:w-3/4">
      <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-2xl font-semibold md:text-4xl md:font-bold mb-4 text-center py-2 md:py-3 px-4 rounded-lg bg-gray-800">
        My Projects
      </motion.h1>
      <div className="flex flex-wrap -mx-2">
        {projects.map((project) => (
          <div key={project.id} className="basis-72 flex-grow p-2">
              <ProjectCard project={project} />
          </div>
        ))}
      </div>
      <ButtonLink link="https://github.com/AvavSam?tab=repositories" name="Github" />
    </main>
  );
}
