
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import QuoteButton from "../components/ui/QuoteButton";
import { CheckCircle, Users, Shield, Award, Leaf } from "lucide-react";

const About = () => {
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
      
      {/* Page Header */}
      <div className="pt-24 pb-12 bg-arbor-dark">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="max-w-2xl mx-auto text-lg">
            Learn about our company and our commitment to excellence in power washing.
          </p>
        </div>
      </div>
      
      {/* Our Story */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="reveal-left">
              <h2 className="section-title">Our Story</h2>
              <p className="text-lg mb-6 text-gray-600">
                Arbor Power Washing was founded in 2010 with a simple mission: to provide 
                exceptional exterior cleaning services that protect and enhance the appearance
                of our customers' properties.
              </p>
              <p className="mb-6 text-gray-600">
                What began as a small family business has grown into a trusted name in the 
                community. Our founder, Michael Arbor, started with just one pressure washer 
                and a pickup truck. Today, we operate a fleet of fully-equipped vehicles and 
                employ a team of trained professionals.
              </p>
              <p className="text-gray-600">
                Despite our growth, we've never lost sight of what matters most: providing 
                personalized service, using environmentally responsible methods, and treating 
                every property with the utmost care. Whether we're cleaning a small residential 
                deck or a large commercial building, we bring the same level of dedication and 
                expertise to every job.
              </p>
            </div>
            <div className="reveal-right">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?ixlib=rb-4.0.3" 
                  alt="Arbor Power Washing Team" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Our Values */}
      <div className="py-16 bg-arbor-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 reveal">
            <h2 className="section-title mx-auto">Our Core Values</h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-600">
              The principles that guide everything we do at Arbor Power Washing.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                title: "Customer Focus",
                description: "We prioritize your needs and satisfaction in everything we do, ensuring a positive experience from start to finish."
              },
              {
                icon: Shield,
                title: "Quality Work",
                description: "We deliver exceptional results through our attention to detail, specialized training, and premium equipment."
              },
              {
                icon: Award,
                title: "Integrity",
                description: "We operate with honesty and transparency, providing fair pricing and clear communication at every step."
              },
              {
                icon: Leaf,
                title: "Environmental Care",
                description: "We use eco-friendly cleaning solutions and techniques that are effective yet safe for people, pets, and plants."
              }
            ].map((value, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 text-center reveal"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-arbor-primary text-white mb-4">
                  <value.icon size={30} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-arbor-dark">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Our Process */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 reveal">
            <h2 className="section-title mx-auto">Our Process</h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-600">
              How we ensure every project is completed efficiently and effectively.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {[
              {
                title: "Initial Consultation",
                description: "We begin by understanding your needs and assessing your property to determine the best approach."
              },
              {
                title: "Customized Quote",
                description: "We provide a detailed, no-obligation quote based on your specific requirements."
              },
              {
                title: "Service Scheduling",
                description: "We work with your schedule to find a convenient time for our team to perform the service."
              },
              {
                title: "Professional Cleaning",
                description: "Our trained technicians use specialized equipment and techniques tailored to your surfaces."
              },
              {
                title: "Final Inspection",
                description: "We conduct a thorough inspection with you to ensure your complete satisfaction."
              }
            ].map((step, index) => (
              <div 
                key={index} 
                className={`flex mb-8 ${index % 2 !== 0 ? "flex-row-reverse" : ""} reveal`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Number */}
                <div className="relative mr-6 hidden md:block">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-arbor-primary text-white font-bold text-xl">
                    {index + 1}
                  </div>
                  {index < 4 && (
                    <div className="absolute top-12 bottom-0 left-1/2 w-1 bg-arbor-primary -translate-x-1/2 h-full"></div>
                  )}
                </div>
                
                {/* Content */}
                <div className="flex-1 bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold mb-2 text-arbor-dark flex items-center">
                    <span className="md:hidden mr-3 flex items-center justify-center w-8 h-8 rounded-full bg-arbor-primary text-white font-bold text-sm">
                      {index + 1}
                    </span>
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                
                {/* Spacer */}
                <div className="w-6 hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Why Choose Us */}
      <div className="py-16 bg-gradient-blue text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 relative inline-block">
              Why Choose Arbor Power Washing?
            </h2>
            <p className="max-w-2xl mx-auto text-lg opacity-90">
              Discover the advantages that set us apart from other power washing companies.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              "Fully licensed and insured for your protection",
              "Eco-friendly cleaning solutions safe for your family and pets",
              "Trained technicians with years of experience",
              "Advanced equipment for superior results",
              "Surface-appropriate techniques to prevent damage",
              "100% satisfaction guarantee on all our services",
              "Transparent pricing with no hidden fees",
              "Flexible scheduling to meet your needs"
            ].map((benefit, index) => (
              <div key={index} className="flex items-start reveal" style={{ animationDelay: `${index * 0.05}s` }}>
                <CheckCircle className="text-white mt-1 mr-3 shrink-0" size={22} />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/quote" className="btn-outline border-white text-white hover:bg-white hover:text-arbor-primary">
              Get a Free Quote
            </Link>
          </div>
        </div>
      </div>
      
      {/* Team */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 reveal">
            <h2 className="section-title mx-auto">Meet Our Team</h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-600">
              The dedicated professionals who make Arbor Power Washing a trusted name in exterior cleaning.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Michael Arbor",
                role: "Founder & CEO",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80",
                bio: "With over 15 years of experience in the industry, Michael founded Arbor Power Washing with a vision to provide superior cleaning services with an emphasis on environmental responsibility."
              },
              {
                name: "Sarah Johnson",
                role: "Operations Manager",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80",
                bio: "Sarah oversees our daily operations, ensuring that every project is completed to our high standards of quality and customer satisfaction."
              },
              {
                name: "David Chen",
                role: "Lead Technician",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80",
                bio: "David brings technical expertise and a commitment to excellence to every project, specializing in complex cleaning solutions for difficult surfaces."
              }
            ].map((member, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden reveal"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-arbor-dark">{member.name}</h3>
                  <p className="text-arbor-secondary font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="py-16 bg-arbor-light">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-arbor-dark">Ready to Experience the Arbor Difference?</h2>
            <p className="text-lg mb-8 text-gray-600">
              Join our satisfied customers who trust us with their power washing needs.
              Contact us today for a free, no-obligation quote.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Link to="/quote" className="btn-primary">
                Request a Quote
              </Link>
              <Link to="/contact" className="btn-outline">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
      <QuoteButton />
    </div>
  );
};

export default About;
