import React from "react";
import Skills from "../components/Skills";
import Contact from "../components/Contact";

function Home() {
  return (
    <main className="w-full md:w-3/4">
      <section className="bg-gray-800 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-semibold">Hi, I'm Avav 👋</h2>
        <p className="text-gray-400 mb-4">Palu, Indonesia</p>
        <p className="text-gray-300">
          An undergraduate student majoring in Computer Science with a specialization in IT. Skilled in software engineering and front-end development. Passionate about learning and innovating in the technology sector. Seeking opportunities
          to enhance technical skills and contribute to challenging projects.
        </p>
      </section>
      <Skills />
      <Contact />
    </main>
  );
}

export default Home;
