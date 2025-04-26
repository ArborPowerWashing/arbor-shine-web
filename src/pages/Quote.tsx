
import { useEffect } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import QuoteForm from "../components/quote/QuoteForm";
import { Check } from "lucide-react";

const Quote = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    "Professional, detailed assessment of your needs",
    "Surface-appropriate cleaning methods",
    "Eco-friendly cleaning solutions",
    "Experienced, trained technicians",
    "Comprehensive service options",
    "Flexible scheduling",
    "Satisfaction guaranteed"
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Page Header */}
      <div className="pt-24 pb-12 bg-arbor-dark">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Get a Free Quote</h1>
          <p className="max-w-2xl mx-auto text-lg">
            Tell us about your project, and we'll provide a detailed, no-obligation estimate.
          </p>
        </div>
      </div>
      
      {/* Quote Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Quote Form */}
            <div className="lg:col-span-2">
              <QuoteForm />
            </div>
            
            {/* Sidebar */}
            <div>
              {/* Why Choose Us */}
              <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                <h2 className="text-2xl font-bold mb-4 text-arbor-dark">Why Choose Us</h2>
                
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="text-arbor-accent mr-2 shrink-0 mt-1" size={18} />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Testimonial */}
              <div className="bg-gradient-blue text-white rounded-xl shadow-lg p-8">
                <div className="relative">
                  <svg className="absolute -top-6 -left-6 w-12 h-12 text-white/30" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.896 3.456-8.352 9.12-8.352 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="relative text-lg font-medium">
                    The Arbor team did an amazing job cleaning our house and driveway. Everything looks brand new! Their quote was fair, and they were professional from start to finish.
                  </p>
                </div>
                <footer className="mt-6">
                  <p className="font-medium">Sarah Johnson</p>
                  <p className="text-sm opacity-80">Homeowner</p>
                </footer>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Process Section */}
      <div className="py-16 bg-arbor-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title mx-auto">How It Works</h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-600">
              Our simple process from quote to completion.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between max-w-4xl mx-auto">
            {[
              {
                step: 1,
                title: "Submit Request",
                description: "Fill out our quick quote form with details about your project."
              },
              {
                step: 2,
                title: "Get Your Quote",
                description: "Receive a detailed, no-obligation estimate within 24 hours."
              },
              {
                step: 3,
                title: "Schedule Service",
                description: "Choose a convenient date and time for your power washing service."
              },
              {
                step: 4,
                title: "Enjoy Results",
                description: "Sit back and enjoy your clean, refreshed property."
              }
            ].map((item, index) => (
              <div key={index} className="text-center mb-8 md:mb-0">
                <div className="w-16 h-16 bg-arbor-primary rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-2 text-arbor-dark">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Quote;
