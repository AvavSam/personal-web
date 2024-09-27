import React from "react";
import { ChevronRight } from "lucide-react";

function ContactLink({ link }) {
  return (
    <a href={link.link} target="_blank" rel="noreferrer" className={`${link.color} flex items-center justify-between p-4 rounded-xl hover:opacity-80 transition-opacity`}>
      <div className="flex items-center">
        <link.icon size={24} className="mr-2" />
        <span className="font-semibold">{link.name}</span>
        <span className="text-sm font-light text-slate-300 ml-2">{link.desc}</span>
      </div>
      <ChevronRight size={18} />
    </a>
  );
}

export default ContactLink;
