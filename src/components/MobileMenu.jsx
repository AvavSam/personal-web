import React from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import ProfileInfo from "./ProfileInfo";
import NavigationList from "./NavigationList";
import DownloadCVButton from "./DownloadCVButton";

function MobileMenu({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden">
      <div className="absolute left-0 top-0 bottom-0 w-[300px] sm:w-[400px] bg-gray-800 p-4 rounded-r-xl">
        <button onClick={onClose} className="absolute top-4 right-4 text-white">
          <X className="h-6 w-6" />
        </button>

        <nav className="mt-12 h-full">
          <ProfileInfo />
          <NavigationList onItemClick={onClose} />
          <DownloadCVButton />
        </nav>
      </div>
    </motion.div>
  );
}

export default MobileMenu;
