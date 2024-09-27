import React from "react";
import Skills from "../components/Skills";
import Contact from "../components/Contact/Contact";
import Introduction from "../components/Introduction";

function Home() {
  document.title = "Home | Avav Abdillah Sam";
  return (
    <main className="w-full md:w-3/4">
      <Introduction />
      <Skills />
      <Contact />
    </main>
  );
}

export default Home;
