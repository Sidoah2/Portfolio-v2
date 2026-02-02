
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-dark text-white overflow-hidden">
      <Navbar />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Testimonials />
      <Footer />

      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 h-1 bg-gradient-to-r from-primary to-secondary z-50 animate-scroll" />
    </main>
  );
}
