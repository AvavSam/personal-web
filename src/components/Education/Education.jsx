import React from "react";
import { motion } from "framer-motion";
import { educationData } from "../../lib/constants";
import EducationItem from "./EducationItem";

function Education() {
  return (
    <motion.section initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="bg-gray-800 rounded-xl p-6 mb-8">
      <h2 className="text-2xl font-semibold mb-4">Education</h2>
      <div className="space-y-4">
        {educationData.map((edu, index) => (
          <EducationItem key={index} edu={edu} index={index} />
        ))}
      </div>
    </motion.section>
  );
}

export default Education;
