import React from "react";
import { motion } from "framer-motion";

function OrganizationItem({ org, index }) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} className={`${org.color} p-4 rounded-xl flex items-center`}>
      <img src={org.logo} alt={org.name} className="w-16 h-16 mr-4" />
      <div>
        <h3 className="font-semibold">{org.name}</h3>
        <p className="text-sm text-gray-300">{org.role}</p>
        <p className="text-sm text-gray-400">{org.period}</p>
      </div>
    </motion.div>
  );
}

export default OrganizationItem;
