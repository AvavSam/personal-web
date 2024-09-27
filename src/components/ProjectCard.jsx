import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

function ProjectCard({ project }) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="bg-gray-800 rounded-xl p-6 flex flex-col h-full">
      <div className="flex items-center mb-4">
        <project.icon className="w-8 h-8 mr-3 text-blue-400" />
        <h3 className="text-xl font-semibold">{project.title}</h3>
      </div>
      <p className="text-gray-400 mb-4 flex-grow">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech, index) => (
          <span key={index} className="bg-gray-700 text-xs px-2 py-1 rounded">
            {tech}
          </span>
        ))}
      </div>
      <div className="flex justify-between">
        {project.github && (
          <a href={project.github} className="text-blue-400 hover:text-blue-300 flex items-center transition-colors">
            <Github size={18} className="mr-1" />
            GitHub
          </a>
        )}
        {project.live && (
          <a href={project.live} className="text-green-400 hover:text-green-300 flex items-center transition-colors">
            <ExternalLink size={18} className="mr-1" />
            Live Demo
          </a>
        )}
      </div>
    </motion.div>
  );
}

export default ProjectCard;
