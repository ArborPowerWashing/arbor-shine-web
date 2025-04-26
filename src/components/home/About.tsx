
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
            <p className="text-lg text-gray-600 mb-6">
              At Arbor Power Washing, we're committed to preserving and enhancing 
              your property's appearance and value through our professional 
              cleaning services.
            </p>
            <p className="text-gray-600 mb-8">
              Founded on the principles of quality, integrity, and environmental 
              responsibility, we use industry-leading techniques and eco-friendly 
              products to deliver exceptional results without harming your surfaces 
              or the environment.
            </p>
            
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
          
          {/* Image */}
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
    </section>
  );
};

export default About;
