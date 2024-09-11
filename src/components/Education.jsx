import React from "react";
import { motion } from "framer-motion";
import { educationData } from "../lib/constants";

function Education() {
  return (
    <motion.section initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="bg-gray-800 rounded-xl p-6 mb-8">
      <h2 className="text-2xl font-semibold mb-4">Education</h2>
      <div className="space-y-4">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`p-4 rounded-xl flex items-center ${index % 2 === 0 ? "bg-red-900/30" : "bg-blue-900/30"}`}
          >
            <img src={edu.logo} alt={edu.institution} className="w-16 h-16 mr-4" />
            <div>
              <h3 className="font-semibold">{edu.institution}</h3>
              <p className="text-sm text-gray-300">{edu.degree}</p>
              {edu.field && <p className="text-sm text-gray-300">{edu.field}</p>}
              <p className="text-sm text-gray-400">{edu.period}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Education;
