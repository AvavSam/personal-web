import React from "react";
import { motion } from "framer-motion";

function EducationItem({ edu, index }) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} className={`p-4 rounded-xl flex items-center ${index % 2 === 0 ? "bg-red-900/30" : "bg-blue-900/30"}`}>
      <img src={edu.logo} alt={edu.institution} className="w-16 h-16 mr-4" />
      <div>
        <h3 className="font-semibold">{edu.institution}</h3>
        <p className="text-sm text-gray-300">{edu.degree}</p>
        {edu.field && <p className="text-sm text-gray-300">{edu.field}</p>}
        <p className="text-sm text-gray-400">{edu.period}</p>
      </div>
    </motion.div>
  );
}

export default EducationItem;
