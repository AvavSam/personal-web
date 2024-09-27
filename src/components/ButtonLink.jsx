import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const ButtonLink = ({ link, name }) => (
  <motion.a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.5 }}
    className="mt-6 block text-center py-2 px-4 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors border border-white"
  >
    <span className="flex items-center justify-center">
      Checkout more on my {name}
      <ExternalLink size={18} className="ml-2" />
    </span>
  </motion.a>
);

export default ButtonLink;
