import React from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { contactLinks } from "../lib/constants";

function Contact() {
  return (
    <motion.section initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.6 }} className="bg-gray-800 rounded-xl p-6">
      <h2 className="text-2xl font-semibold mb-4">Contact Me</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {contactLinks.map((link) => (
          <a key={link.name} href={link.link} target="_blank" className={`${link.color} flex items-center justify-between p-4 rounded-xl hover:opacity-80 transition-opacity`} rel="noreferrer">
            <div className="flex items-center">
              <link.icon size={24} className="mr-2" />
              <span className="font-semibold">{link.name}</span>
              <span className="text-sm font-light text-slate-300 ml-2">{link.desc}</span>
            </div>
            <ChevronRight size={18} />
          </a>
        ))}
      </div>
    </motion.section>
  );
}

export default Contact;
