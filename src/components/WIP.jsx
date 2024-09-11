import React from "react";
import { motion } from "framer-motion";
import { Construction } from "lucide-react";

function WIP() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="bg-gray-800 rounded-xl p-6 flex place-content-center items-center text-yellow-500">
      <Construction size={96} className="mr-4" />
      <div className="text-white font-bold text-3xl">
        <h1>Updates</h1>
        <h1>On</h1>
        <h1>Progress</h1>
      </div>
    </motion.div>
  );
}

export default WIP;
