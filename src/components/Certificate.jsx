import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { certificatesdata } from "../lib/constants";

function Certificates() {
  return (
    <motion.section initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="bg-gray-800 rounded-xl p-6 mb-8">
      <h2 className="text-2xl font-semibold mb-4">Certificate</h2>
      <div className="space-y-6">
        {certificatesdata.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`${cert.color} rounded-xl p-4 flex flex-col md:flex-row items-start md:items-center gap-4`}
          >
            <div className="flex-grow">
              <a href={cert.link} target="_blank" rel="noreferrer">
                <h2 className="text-xl font-semibold mb-2">{cert.name}</h2>
                <p className="text-sm text-gray-300 mb-1">{cert.organization}</p>
                <p className="text-sm text-gray-400 mb-1">{cert.issuedDate}</p>
                {cert.credentialId && <p className="text-sm text-gray-400 mb-1">Credential ID: {cert.credentialId}</p>}
                <div className="flex flex-wrap gap-2 mt-2">
                  {cert.skills.map((skill, index) => (
                    <span key={index} className="border border-white border-opacity-40 text-sm px-2 py-1 rounded">
                      {skill}
                    </span>
                  ))}
                </div>
              </a>
            </div>
            <a href={cert.link} target="_blank" rel="noreferrer">
              <img src={cert.image} alt={`${cert.name} Certificate`} className="w-full md:w-40 h-auto object-cover rounded" />
            </a>
          </motion.div>
        ))}
      </div>
      <motion.a
        href="https://www.linkedin.com/in/avavsam"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-6 block text-center py-2 px-4 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors border border-white"
      >
        <span className="flex items-center justify-center">
          Checkout more on my LinkedIn
          <ExternalLink size={18} className="ml-2" />
        </span>
      </motion.a>
    </motion.section>
  );
}

export default Certificates;
