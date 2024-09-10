import React, { useState } from "react";
import { motion } from "framer-motion";
import { Download, X, Menu } from "lucide-react";
import { navItems } from "../lib/constants";
import { Link } from "react-router-dom";

function Sidebar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Mobile menu state
  const [activeTab, setActiveTab] = useState("Home"); // Active tab state

  return (
    <>
      {/* Hamburger Menu for mobile */}
      <button onClick={() => setIsMenuOpen(true)} className="fixed top-4 left-4 z-50 md:hidden bg-gray-800 text-white border border-gray-700 hover:bg-gray-700 hover:text-white p-2 rounded-lg">
        <Menu className="h-6 w-6" />
      </button>

      {/* Mobile Menu Drawer */}
      {isMenuOpen && (
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} className="bg-gray-800 rounded-xl p-4 absolute top-0 left-0 w-3/4 h-full z-50">
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden">
            <div className="absolute left-0 top-0 bottom-0 w-[300px] sm:w-[400px] bg-gray-800 p-4">
              {/* Close Button */}
              <button onClick={() => setIsMenuOpen(false)} className="absolute top-4 right-4 text-white">
                <X className="h-6 w-6" />
              </button>

              {/* Mobile Navigation Content */}
              <nav className="mt-12 h-full">
                <img src="/profile.jpg" alt="Profile" className="w-32 h-32 rounded-full mx-auto mb-4" />
                <h2 className="text-xl font-semibold text-center">Avav Abdillah Sam</h2>
                <h2 className="text-neutral-400 text-sm font-light text-center mb-4">@avav_sam</h2>

                <ul className="space-y-2">
                  {navItems.map((item) => (
                    <li key={item.name}>
                      <Link
                        to={`/${item.name.toLowerCase()}`}
                        onClick={() => setActiveTab(item.name)} // Close menu after navigation
                        className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${activeTab === item.name ? "bg-gray-700" : "hover:bg-gray-700"} flex items-center`}
                      >
                        <item.icon size={18} className="mr-2" />
                        {item.name}
                      </Link>
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
        </motion.div>
      )}

      {/* Regular Sidebar for Desktop */}
      <nav className="hidden md:block md:w-1/4">
        <div className="bg-gray-800 rounded-xl p-4">
          <img src="/profile.jpg" alt="Profile" className="w-32 h-32 rounded-full mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-center">Avav Abdillah Sam</h2>
          <h2 className="text-neutral-400 text-sm font-light text-center mb-4">@avav_sam</h2>

          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={`/${item.name.toLowerCase()}`}
                  onClick={() => setActiveTab(item.name)} // Close menu after navigation
                  className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${activeTab === item.name ? "bg-gray-700" : "hover:bg-gray-700"} flex items-center`}
                >
                  <item.icon size={18} className="mr-2" />
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <button className="w-full mt-4 bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg transition-colors flex items-center justify-center">
            <Download className="mr-2" size={18} />
            Download CV
          </button>
        </div>
      </nav>
    </>
  );
}

export default Sidebar;
