import React from "react";
import Education from "../components/Education/Education";
import Organization from "../components/Organization/Organization";

function About() {
  document.title = "About | Avav Abdillah Sam";
  return (
    <main className="w-full md:w-3/4">
      <Education />
      <Organization />
    </main>
  );
};

export default About;
