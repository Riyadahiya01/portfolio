import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProjectCaseStudy from "./pages/ProjectCaseStudy";
import { useState } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import FloatingBackground from "./components/FloatingBackground";
import Navbar from "./components/Navbar";
import SocialHub from "./components/SocialHub";
import RecruiterDashboard from "./components/RecruiterDashboard";
import AIAssistant from "./components/AIAssistant";
import Footer from "./components/Footer";

export default function App() {
  const [recruiterOpen, setRecruiterOpen] = useState(false);

  return (
    <ThemeProvider>
      <div className="relative min-h-screen overflow-x-hidden">
        <FloatingBackground />

        <Navbar onOpenRecruiter={() => setRecruiterOpen(true)} />
        <SocialHub />

        <Routes>
  <Route
    path="/"
    element={
      <Home onOpenRecruiter={() => setRecruiterOpen(true)} />
    }
  />

  <Route
    path="/projects/:slug"
    element={<ProjectCaseStudy />}
  />
</Routes>

        <Footer />

        <RecruiterDashboard open={recruiterOpen} onClose={() => setRecruiterOpen(false)} />
        <AIAssistant />
      </div>
    </ThemeProvider>
  );
}
