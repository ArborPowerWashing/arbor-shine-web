import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const benefits = [
    "Eco-friendly cleaning solutions",
    "Fully insured and licensed professionals", 
    "Latest pressure washing technology",
    "Surface-appropriate techniques",
    "Affordable and transparent pricing",
    "Satisfaction guaranteed",
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <h2 className="section-title">About Arbor Power Washing</h2>
            <div className="mb-6">
              <p className="text-lg text-gray-600 mb-4">
                Founded by a young entrepreneur with a vision for excellence, 
                Arbor Power Washing represents the perfect blend of youthful 
                innovation and professional expertise.
              </p>
              <div className="bg-arbor-light p-6 rounded-lg border-l-4 border-arbor-primary mb-6">
                <h3 className="text-xl font-semibold mb-3 text-arbor-dark">A Story of Young Ambition</h3>
                <p className="text-gray-600 italic">
                  "I started Arbor Power Washing at age 15 with a simple goal: 
                  to provide exceptional cleaning services that protect and enhance 
                  our customers' properties. Today, at 17, that vision has grown into 
                  a full-service operation, proving that passion and dedication know 
                  no age limit."
                </p>
              </div>
              <p className="text-gray-600">
                Our commitment to using eco-friendly solutions and industry-leading 
                techniques has made us a trusted name in property maintenance. Every 
                service we provide reflects our dedication to excellence and 
                customer satisfaction.
              </p>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-arbor-dark">Why Choose Us?</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="text-arbor-accent mt-1 mr-2 shrink-0" size={18} />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <Link to="/about" className="btn-primary">
              Learn More About Us
            </Link>
          </div>
          
          {/* Image and Stats */}
          <div className="order-1 lg:order-2 relative">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?ixlib=rb-4.0.3" 
                alt="Arbor Power Washing Team" 
                className="w-full h-auto object-cover"
              />
            </div>
            
            {/* Floating Stats */}
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-3xl font-bold text-arbor-primary">500+</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-3xl font-bold text-arbor-primary">5000+</div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Customer Service Banner */}
      <div className="mt-16 bg-gradient-to-r from-arbor-primary to-arbor-secondary text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-semibold mb-4">Our Customer Service Promise</h3>
          <p className="text-lg max-w-3xl mx-auto">
            At Arbor Power Washing, customer service isn't just a promise — it's the 
            foundation of everything we do. Your satisfaction is guaranteed.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
