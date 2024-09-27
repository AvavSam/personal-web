import React from "react";
import { Download } from "lucide-react";

function DownloadCVButton() {
  return (
    <button className="w-full mt-4 bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg transition-colors flex items-center justify-center">
      <Download className="mr-2" size={18} />
      Download CV
    </button>
  );
}

export default DownloadCVButton;
