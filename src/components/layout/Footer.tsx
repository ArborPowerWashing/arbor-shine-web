
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, ArrowRight, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-arbor-dark text-white pt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Arbor Power Washing</h3>
            <p className="text-gray-300 mb-4">
              Professional pressure washing services for residential and commercial properties.
              We protect, restore, and make your surfaces shine.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                className="hover:text-arbor-secondary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                className="hover:text-arbor-secondary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                className="hover:text-arbor-secondary transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: "Home", path: "/" },
                { name: "Services", path: "/services" },
                { name: "Gallery", path: "/gallery" },
                { name: "About Us", path: "/about" },
                { name: "Contact", path: "/contact" },
                { name: "Get a Quote", path: "/quote" },
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="flex items-center text-gray-300 hover:text-arbor-secondary transition-colors">
                    <ArrowRight size={16} className="mr-2" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {[
                "Roof Washing",
                "Fence Washing",
                "Gutter Cleaning",
                "Window Cleaning",
                "House Washing",
                "Driveway & Patio Cleaning",
              ].map((service) => (
                <li key={service}>
                  <Link to="/services" className="flex items-center text-gray-300 hover:text-arbor-secondary transition-colors">
                    <ArrowRight size={16} className="mr-2" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone size={20} className="mr-3 mt-1 text-arbor-secondary" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <Mail size={20} className="mr-3 mt-1 text-arbor-secondary" />
                <span>info@arborpowerwashing.com</span>
              </li>
              <li className="flex items-start">
                <MapPin size={20} className="mr-3 mt-1 text-arbor-secondary" />
                <span>123 Pressure Lane, Washville, USA</span>
              </li>
              <li className="flex items-start">
                <Clock size={20} className="mr-3 mt-1 text-arbor-secondary" />
                <div>
                  <p>Mon-Fri: 8am - 6pm</p>
                  <p>Sat: 9am - 4pm</p>
                  <p>Sun: Closed</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">
              &copy; {new Date().getFullYear()} Arbor Power Washing. All rights reserved.
            </p>
            <p className="text-gray-400 mt-2 md:mt-0">
              <Link to="/privacy" className="hover:text-white">Privacy Policy</Link> |{" "}
              <Link to="/terms" className="hover:text-white">Terms of Service</Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
