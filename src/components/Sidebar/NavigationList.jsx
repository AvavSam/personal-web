import React from "react";
import { Link, useLocation } from "react-router-dom";
import { navItems } from "../../lib/constants";

function NavigationList({ onItemClick = () => {} }) {
  const location = useLocation();

  const isActive = (path) => location.pathname === `/${path}`;

  return (
    <ul className="space-y-2">
      {navItems.map((item) => (
        <li key={item.name}>
          <Link to={`/${item.path}`} onClick={onItemClick} className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${isActive(item.path) ? "bg-gray-700" : "hover:bg-gray-700"} flex items-center`}>
            <item.icon size={18} className="mr-2" />
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default NavigationList;
