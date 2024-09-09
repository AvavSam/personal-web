import React from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { navItems } from "../lib/constants";

function Sidebar() {
  const [activeTab, setActiveTab] = React.useState("Home");

  return (
    <nav className="hidden md:block md:w-1/4">
      <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="bg-gray-800 rounded-xl p-4">
        <img src="/profile.jpg" alt="Profile" className="w-32 h-32 rounded-full mx-auto mb-4" />
        <h2 className="text-xl font-semibold text-center">Avav Abdillah Sam</h2>
        <h2 className="text-neutral-400 text-sm font-light text-center mb-4">@avav_sam</h2>
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.name}>
              <button onClick={() => setActiveTab(item.name)} className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${activeTab === item.name ? "bg-gray-700" : "hover:bg-gray-700"} flex items-center`}>
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
      </motion.div>
    </nav>
  );
}

export default Sidebar;
