
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="section-title">Contact Us</h2>
            <p className="text-lg text-gray-600 mb-8">
              Have questions about our services or ready to schedule your power washing? 
              Get in touch with our team today.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-arbor-primary rounded-full p-3 mr-4 text-white">
                  <Phone size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-arbor-dark">Phone</h3>
                  <p className="text-gray-600">813-778-3799</p>
                  <p className="text-sm text-gray-500">For service inquiries</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-arbor-primary rounded-full p-3 mr-4 text-white">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-arbor-dark">Email</h3>
                  <p className="text-gray-600">arborpowerwashingllc@gmail.com</p>
                  <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-arbor-primary rounded-full p-3 mr-4 text-white">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-arbor-dark">Location</h3>
                  <p className="text-gray-600">123 Pressure Lane, Washville, USA</p>
                  <p className="text-sm text-gray-500">Serving a 30-mile radius</p>
                </div>
              </div>
            </div>

            <Link to="/contact" className="group inline-flex items-center text-arbor-primary hover:text-arbor-secondary font-medium transition-colors mt-8">
              View Full Contact Details
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
            </Link>
          </div>

          {/* Map */}
          <div className="rounded-lg overflow-hidden shadow-lg h-[400px]">
            {/* Normally would use an actual map API here, using placeholder for now */}
            <div className="bg-gray-200 h-full w-full flex items-center justify-center">
              <div className="text-center">
                <MapPin className="mx-auto text-arbor-primary mb-2" size={36} />
                <h3 className="text-lg font-semibold">Arbor Power Washing</h3>
                <p className="text-gray-600">Interactive map would display here</p>
                <p className="text-sm text-gray-500 mt-2">123 Pressure Lane, Washville, USA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
