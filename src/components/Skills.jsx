import React from "react";
import { motion } from "framer-motion";
import { skills } from "../lib/constants";

function Skills() {
  return (
    <motion.section initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }} className="bg-gray-800 rounded-xl p-6 mb-8">
      <h2 className="text-2xl font-semibold mb-4">Skills</h2>
      <div className="flex flex-wrap gap-2 justify-center">
        {skills.map((skill) => (
          <span key={skill.name} className={`${skill.color} text-white px-10 py-2 rounded-xl text-sm flex items-center`}>
            <skill.icon size={16} className="mr-1" />
            {skill.name}
          </span>
        ))}
      </div>
    </motion.section>
  );
}

export default Skills;
