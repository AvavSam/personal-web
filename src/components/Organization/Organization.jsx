import React from "react";
import { motion } from "framer-motion";
import { organizationData } from "../../lib/constants";
import OrganizationItem from "./OrganizationItem";

function Organization() {
  return (
    <motion.section initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }} className="bg-gray-800 rounded-xl p-6 mb-8">
      <h2 className="text-2xl font-semibold mb-4">Organization</h2>
      <div className="space-y-4">
        {organizationData.map((org, index) => (
          <OrganizationItem key={index} org={org} index={index} />
        ))}
      </div>
    </motion.section>
  );
}

export default Organization;
