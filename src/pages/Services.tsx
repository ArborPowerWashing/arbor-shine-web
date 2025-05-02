import { useEffect } from "react";
import { 
  House, 
  Fence, 
  Wind, 
  Droplet, 
  CheckCircle 
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import QuoteButton from "../components/ui/QuoteButton";

const services = [
  {
    id: "roof-washing",
    title: "Roof Washing",
    description: "Our low-pressure soft wash roof cleaning system safely removes black streaks, algae, moss, and lichen from your roof without causing damage to the shingles or underlayment.",
    benefits: [
      "Extends roof life by removing damaging organisms",
      "Improves energy efficiency by reducing heat absorption",
      "Enhances curb appeal with a clean, stain-free roof",
      "Prevents costly repairs from moisture damage",
      "Safe for all roof types including asphalt, tile, and metal"
    ],
    icon: House,
    image: "/lovable-uploads/d16ab718-56f8-4000-9958-57fc7233fdc3.png",
    color: "bg-arbor-primary"
  },
  {
    id: "fence-washing",
    title: "Fence Washing",
    description: "Restore your fence's appearance and extend its lifespan with our specialized fence cleaning service, removing dirt, grime, mold, and mildew from wood, vinyl, or metal fences.",
    benefits: [
      "Removes unsightly stains, mold, and mildew",
      "Prepares surfaces for staining or sealing",
      "Prevents wood rot and deterioration",
      "Extends fence lifespan by years",
      "Improves property appearance instantly"
    ],
    icon: Fence,
    image: "/lovable-uploads/e9aa0fba-8fb7-40d4-8186-de08054030f5.png",
    color: "bg-arbor-secondary"
  },
  {
    id: "gutter-cleaning",
    title: "Gutter Cleaning",
    description: "Keep your gutters functioning properly with our comprehensive gutter cleaning service. We remove debris, check for proper water flow, and ensure your drainage system is working effectively.",
    benefits: [
      "Prevents water damage to foundations and basements",
      "Reduces risk of roof damage from backed-up water",
      "Eliminates breeding grounds for pests",
      "Prevents gutter damage from excessive weight",
      "Extends the lifespan of your gutter system"
    ],
    icon: House,
    image: "/lovable-uploads/d16ab718-56f8-4000-9958-57fc7233fdc3.png",
    color: "bg-arbor-accent"
  },
  {
    id: "window-cleaning",
    title: "Window Cleaning",
    description: "Our professional window cleaning service removes dirt, water spots, and streaks from your windows, leaving them crystal clear. We use specialized equipment and solutions for spotless results.",
    benefits: [
      "Improves natural light penetration",
      "Enhances views and appearance",
      "Removes built-up dirt, pollen, and contaminants",
      "Extends window lifespan by removing corrosive substances",
      "Professional tools reach high and difficult windows safely"
    ],
    icon: Wind,
    image: "/lovable-uploads/b44cb1d1-7540-4fd1-b6d3-39c0bdcdf6c1.png",
    color: "bg-arbor-dark"
  },
  {
    id: "house-washing",
    title: "House Washing",
    description: "Our exterior house washing service gently removes dirt, mildew, algae and other contaminants from your home's siding, brick, or stucco surfaces without damaging the materials.",
    benefits: [
      "Prevents damage from mold and mildew growth",
      "Improves air quality by removing allergens",
      "Increases property value with improved curb appeal",
      "Prepares surfaces for painting or refinishing",
      "Removes cobwebs, insect debris, and bird droppings"
    ],
    icon: House,
    image: "/lovable-uploads/e9aa0fba-8fb7-40d4-8186-de08054030f5.png",
    color: "bg-arbor-primary"
  },
  {
    id: "driveway-patio",
    title: "Driveway & Patio Cleaning",
    description: "Transform your outdoor concrete, brick, or stone surfaces with our high-pressure cleaning service. We remove oil stains, weed growth, and years of built-up grime.",
    benefits: [
      "Removes stubborn oil and automotive fluid stains",
      "Eliminates slippery algae and moss growth",
      "Prevents weed growth between pavers",
      "Extends pavement lifespan by removing damaging substances",
      "Dramatically improves your property's first impression"
    ],
    icon: Droplet,
    image: "/lovable-uploads/89c0a564-9f64-4e84-828e-f104b1260e78.png",
    color: "bg-arbor-secondary"
  },
];

const Services = () => {
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
      
      <div className="pt-24 pb-12 bg-arbor-dark">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="max-w-2xl mx-auto text-lg">
            Comprehensive power washing solutions for residential and commercial properties.
          </p>
        </div>
      </div>
      
      <div className="py-16">
        <div className="container mx-auto px-4">
          {services.map((service, index) => (
            <div 
              id={service.id} 
              key={service.id}
              className={`mb-20 ${
                index % 2 === 0 ? "reveal-left" : "reveal-right"
              }`}
            >
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}>
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" 
                  />
                </div>
                
                <div className={`${index % 2 !== 0 ? "lg:text-right" : ""}`}>
                  <div className="flex items-center mb-4">
                    <div 
                      className={`${service.color} w-12 h-12 rounded-full flex items-center justify-center text-white`}
                    >
                      <service.icon size={24} />
                    </div>
                    <h2 className="text-3xl font-bold ml-4 text-arbor-dark">
                      {service.title}
                    </h2>
                  </div>
                  
                  <p className="text-lg text-gray-600 mb-6">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-4 text-arbor-dark">Benefits</h3>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="text-arbor-accent mr-2 shrink-0 mt-1" size={18} />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className={`flex ${index % 2 !== 0 ? "justify-end" : "justify-start"}`}>
                    <Link 
                      to="/quote" 
                      className="btn-primary"
                    >
                      Get a Quote
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="py-16 bg-gradient-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Property?</h2>
          <p className="max-w-2xl mx-auto text-lg mb-8">
            Contact us today for a free quote and discover the difference professional 
            power washing can make for your home or business.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link to="/quote" className="btn-outline border-white text-white hover:bg-white hover:text-arbor-primary">
              Request a Quote
            </Link>
            <Link to="/contact" className="btn-secondary bg-white text-arbor-primary hover:bg-gray-100">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
      <QuoteButton />
    </div>
  );
};

export default Services;
