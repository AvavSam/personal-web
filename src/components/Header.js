import React from "react";
import { BackgroundLines } from "../components/ui/background-lines";
import { FlipWords } from "../components/ui/flip-words";
import { motion } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { navItems } from "../lib/constants";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState("Home");
  const words = ["SoftwareEngineer", "UI/UX Designer"];

  return (
    <header className="mb-8 flex justify-between items-center">
      <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="relative flex items-center h-48 md:h-64 rounded-xl overflow-hidden w-full">
        <BackgroundLines className="flex items-center justify-center w-full flex-col px-4" svgOptions={{ duration: 10 }}>
          <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-600 to-white text-4xl lg:text-7xl font-sans py-6 relative z-20 font-bold tracking-tight">
            Avav Abdillah Sam <br /> <FlipWords words={words} className="" />
          </h2>
          <p className="max-w-xl mx-auto text-sm md:text-base text-neutral-400 text-center">Undergraduate student of Informatics Engineering at Tadulako University</p>
        </BackgroundLines>
      </motion.div>
      <button onClick={() => setIsMenuOpen(true)} className="fixed top-4 right-4 z-50 md:hidden bg-gray-800 text-white border border-gray-700 hover:bg-gray-700 hover:text-white p-2 rounded-lg">
        <Menu className="h-6 w-6" />
      </button>
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden">
          <div className="absolute right-0 top-0 bottom-0 w-[300px] sm:w-[400px] bg-gray-800 p-4">
            <button onClick={() => setIsMenuOpen(false)} className="absolute top-4 right-4 text-white">
              <X className="h-6 w-6" />
            </button>
            <nav className="mt-12 h-full">
              <img src="/profile.jpg" alt="Profile" className="w-32 h-32 rounded-full mx-auto mb-4" />
              <h2 className="text-xl font-semibold text-center">Avav Abdillah Sam</h2>
              <h2 className="text-neutral-400 text-sm font-light text-center mb-4">@avav_sam</h2>
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <button
                      onClick={() => {
                        setActiveTab(item.name);
                        setIsMenuOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${activeTab === item.name ? "bg-gray-700" : "hover:bg-gray-700"} flex items-center`}
                    >
                      <item.icon size={18} className="mr-2" />
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
              <button className="w-full mt-4 bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg transition-colors flex items-center justify-center">
                <Download className="mr-2" size={18} />
                Download CV
              </button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
