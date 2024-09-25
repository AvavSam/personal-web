import React from "react";

const SkillTags = ({ skills }) => (
  <div className="flex flex-wrap gap-2 mt-2">
    {skills.map((skill, index) => (
      <span key={index} className="border border-white border-opacity-40 text-sm px-2 py-1 rounded">
        {skill}
      </span>
    ))}
  </div>
);

export default SkillTags;
