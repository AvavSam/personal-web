import React from "react";
import { ShootingStars } from "../components/ui/shooting-stars";
import { StarsBackground } from "../components/ui/stars-background";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="min-h-screen bg-gray-900 mix-blend-overlay text-white p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <Header />
        <div className="flex flex-col md:flex-row gap-8">
          <Sidebar />
          <main className="w-full md:w-3/4">
            <section className="bg-gray-800 rounded-xl p-6 mb-8">
              <h2 className="text-2xl font-semibold">Hi, I'm Avav 👋</h2>
              <p className="text-gray-400 mb-4">Palu, Indonesia</p>
              <p className="text-gray-300">
                An undergraduate student majoring in Computer Science with a specialization in IT. Skilled in software engineering and front-end development. Passionate about learning and innovating in the technology sector. Seeking
                opportunities to enhance technical skills and contribute to challenging projects.
              </p>
            </section>
            <Skills />
            <Contact />
          </main>
        </div>
        <Footer />
      </div>
      <ShootingStars className="-z-10" maxDelay={2700} minDelay={1000} maxSpeed={11} />
      <StarsBackground className="-z-20" starDensity={0.00035} />
    </div>
  );
}

export default Home;
