import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Certifications from "../components/Certifications";
import Timeline from "../components/Timeline";
import Resume from "../components/Resume";
import Contact from "../components/Contact";
import HireForm from "../components/HireForm";

interface HomeProps {
  onOpenRecruiter: () => void;
}

export default function Home({ onOpenRecruiter }: HomeProps) {
  return (
    <main className="relative z-10">
      <Hero onOpenRecruiter={onOpenRecruiter} />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Timeline />
      <Resume />
      <Contact />
      <HireForm />
    </main>
  );
}