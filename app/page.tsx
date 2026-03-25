
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import DomainTabs from "@/components/DomainTabs";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-dark text-white overflow-hidden scroll-smooth">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <DomainTabs />
      <Experience />
      <Testimonials />
      <Contact />
      <Footer />

      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 h-1 bg-gradient-to-r from-primary to-secondary z-50 animate-scroll" />
    </main>
  );
}
