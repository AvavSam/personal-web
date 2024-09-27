import React from "react";
import ProfileInfo from "./ProfileInfo";
import NavigationList from "./NavigationList";
import DownloadCVButton from "./DownloadCVButton";

function DesktopSidebar() {
  return (
    <nav className="hidden md:block md:w-1/4">
      <div className="bg-gray-800 rounded-xl p-4">
        <ProfileInfo />
        <NavigationList />
        <DownloadCVButton />
      </div>
    </nav>
  );
}

export default DesktopSidebar;
