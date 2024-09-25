import React from "react";
import { motion } from "framer-motion";
import { contactLinks } from "../lib/constants";
import ContactLink from "./ContactLink";

function Contact() {
  return (
    <motion.section initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.6 }} className="bg-gray-800 rounded-xl p-6">
      <h2 className="text-2xl font-semibold mb-4">Contact Me</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {contactLinks.map((link) => (
          <ContactLink key={link.name} link={link} />
        ))}
      </div>
    </motion.section>
  );
}

export default Contact;
