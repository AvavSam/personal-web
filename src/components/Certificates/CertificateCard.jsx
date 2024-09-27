import React from "react";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import SkillTags from "./SkillTags";

const CertificateCard = ({ cert, index }) => (
  <motion.a
    href={cert.link}
    target="_blank"
    rel="noreferrer"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className={`${cert.color} rounded-xl p-4 flex flex-col md:flex-row items-start md:items-center gap-4`}
  >
    <div className="flex-grow">
      <h2 className="text-xl font-semibold mb-2">{cert.name}</h2>
      <p className="text-sm text-gray-300 mb-1">{cert.organization}</p>
      <p className="text-sm text-gray-400 mb-1">{cert.issuedDate}</p>
      {cert.credentialId && <p className="text-sm text-gray-400 mb-1">Credential ID: {cert.credentialId}</p>}
      <SkillTags skills={cert.skills} />
    </div>
    <LazyLoadImage src={cert.image} alt={`${cert.name} Certificate`} effect="blur" className="w-full md:w-40 h-auto object-cover rounded" wrapperClassName="w-full md:w-40" />
  </motion.a>
);

export default CertificateCard;
