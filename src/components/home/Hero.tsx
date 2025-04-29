
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-arbor-dark overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-arbor-dark/80 to-arbor-dark/60"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center text-white">
        <div className="max-w-3xl mx-auto animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Professional Power Washing Solutions
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            <span className="font-semibold">Protect, Restore, Shine.</span> 
            <br className="md:hidden" />
            <span className="hidden md:inline"> - </span>
            Keep your property looking its best.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <Link
              to="/quote?type=residential"
              className="btn-primary group flex items-center justify-center w-full md:w-auto"
            >
              Get Residential Quote
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </Link>
            
            <Link
              to="/quote?type=commercial"
              className="btn-secondary group flex items-center justify-center w-full md:w-auto"
            >
              Get Commercial Quote
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </Link>
          </div>
        </div>
        
        {/* Scroll Down Indicator - Center the text */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce-subtle">
          <a 
            href="#services" 
            className="flex flex-col items-center justify-center text-white/80 hover:text-white transition-colors text-center"
          >
            <span className="text-sm mb-2">Explore Our Services</span>
            <svg 
              width="20" 
              height="12" 
              viewBox="0 0 20 12" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M1 1L10 10L19 1" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
