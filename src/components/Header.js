import React from "react";
import { BackgroundLines } from "../components/ui/background-lines";
import { FlipWords } from "../components/ui/flip-words";
import { motion } from "framer-motion";
function Header() {
  const words = ["SoftwareEngineer", "UI/UX Designer"];

  return (
    <header className="mt-4 md:mt-0 mb-8 flex justify-between items-center">
      <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="relative flex items-center h-48 md:h-64 rounded-xl overflow-hidden w-full">
        <BackgroundLines className="flex items-center justify-center w-full flex-col px-4" svgOptions={{ duration: 10 }}>
          <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-600 to-white text-4xl lg:text-7xl font-sans py-6 relative z-20 font-bold tracking-tight">
            Avav Abdillah Sam <br /> <FlipWords words={words} className="" />
          </h2>
          <p className="max-w-xl mx-auto text-sm md:text-base text-neutral-400 text-center">Undergraduate student of Informatics Engineering at Tadulako University</p>
        </BackgroundLines>
      </motion.div>
    </header>
  );
}

export default Header;
