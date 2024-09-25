import React from "react";
import { motion } from "framer-motion";
import { certificatesdata } from "../lib/constants";
import CertificateCard from "./CertificateCard";
import LinkedInLink from "./LinkedInLink";

const Certificates = () => (
  <motion.section initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="bg-gray-800 rounded-xl p-6 mb-8">
    <h2 className="text-2xl font-semibold mb-4">Certificate</h2>
    <div className="space-y-6">
      {certificatesdata.map((cert, index) => (
        <CertificateCard key={index} cert={cert} index={index} />
      ))}
    </div>
    <LinkedInLink />
  </motion.section>
);

export default Certificates;
