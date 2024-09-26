import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Certificate from "./pages/Certificate";
import { ShootingStars } from "./components/ui/shooting-stars";
import { StarsBackground } from "./components/ui/stars-background";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import ProtectedRoute from "./pages/ProtectedRoute";
import UploadForm from "./pages/UploadForm";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 mix-blend-overlay text-white p-4 md:p-8">
        <div className="max-w-6xl mx-auto">
          <Header />
          <div className="flex flex-col md:flex-row gap-8">
            <Sidebar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/certificates" element={<Certificate />} />
              <Route path="/login" element={<Login />} />
              <Route
                path="/admin"
                element={
                  <ProtectedRoute>
                    <UploadForm />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </div>
          <Footer />
        </div>
        <ShootingStars className="-z-10" maxDelay={2700} minDelay={1000} maxSpeed={11} />
        <StarsBackground className="-z-20" starDensity={0.00035} />
      </div>
    </Router>
  );
}

export default App;
