import React, { useState } from "react";
import { Menu } from "lucide-react";
import MobileMenu from "./MobileMenu";
import DesktopSidebar from "./DesktopSidebar";

function Sidebar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsMenuOpen(true)} className="fixed flex gap-2 top-4 left-4 z-50 md:hidden bg-gray-800 text-white border border-gray-700 hover:bg-gray-700 hover:text-white p-2 rounded-lg shadow-2xl">
        <Menu className="h-6 w-6" />
        <h2>Menu</h2>
      </button>

      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <DesktopSidebar />
    </>
  );
}

export default Sidebar;
