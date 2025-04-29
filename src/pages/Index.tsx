
import { useEffect } from "react";
import Hero from "../components/home/Hero";
import Services from "../components/home/Services";
import Gallery from "../components/home/Gallery";
import About from "../components/home/About";
import Testimonials from "../components/home/Testimonials";
import FAQ from "../components/home/FAQ";
import Contact from "../components/home/Contact";
import QuoteButton from "../components/ui/QuoteButton";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const Index = () => {
  // Scroll animation effect
  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll(".reveal, .reveal-left, .reveal-right");
      
      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <div className="reveal">
        <Services />
      </div>
      <div className="reveal">
        <Gallery />
      </div>
      <div className="reveal">
        <About />
      </div>
      <div className="reveal">
        <Testimonials />
      </div>
      <div className="reveal">
        <FAQ />
      </div>
      <div className="reveal">
        <Contact />
      </div>
      <Footer />
      <QuoteButton />
    </div>
  );
};

export default Index;
