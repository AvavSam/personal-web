import React from "react";
import { motion } from "framer-motion";
import { organizationData } from "../lib/constants";

function Organization() {
  return (
    <motion.section initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }} className="bg-gray-800 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Organization</h2>
        <div className="space-y-4">
          {organizationData.map((org, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} className="bg-blue-900/30 p-4 rounded-xl flex items-center">
              <img src={org.logo} alt={org.name} className="w-16 h-16 mr-4" />
              <div>
                <h3 className="font-semibold">{org.name}</h3>
                <p className="text-sm text-gray-300">{org.role}</p>
                <p className="text-sm text-gray-400">{org.period}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
  );
}

export default Organization;
