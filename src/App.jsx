import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Services from './components/Services';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';
import CursorGlow from './components/CursorGlow';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0B0B0F] overflow-x-hidden">
      {/* Futuristic ambient effects — always behind content */}
      <ParticleBackground />
      <CursorGlow />

      <Navbar />
      <main>
        <Hero />
        {/* Section dividers */}
        <div className="section-divider max-w-5xl mx-auto" />
        <About />
        <div className="section-divider max-w-5xl mx-auto" />
        <Experience />
        <div className="section-divider max-w-5xl mx-auto" />
        <Services />
        <div className="section-divider max-w-5xl mx-auto" />
        <TechStack />
        <div className="section-divider max-w-5xl mx-auto" />
        <Projects />
        <div className="section-divider max-w-5xl mx-auto" />
        <Testimonials />
        <div className="section-divider max-w-5xl mx-auto" />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
