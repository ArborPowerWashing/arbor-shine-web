
import { useState, FormEvent } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import QuoteButton from "../components/ui/QuoteButton";
import { Phone, Mail, MapPin, Clock, Send, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setLoading(false);
      toast({
        title: "Message Sent!",
        description: "We'll get back to you as soon as possible."
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Page Header */}
      <div className="pt-24 pb-12 bg-arbor-dark">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="max-w-2xl mx-auto text-lg">
            Get in touch with our team for inquiries or to schedule a service.
          </p>
        </div>
      </div>
      
      {/* Contact Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6 text-arbor-dark">Send Us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-arbor-primary focus:border-arbor-primary"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-arbor-primary focus:border-arbor-primary"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-arbor-primary focus:border-arbor-primary"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-arbor-primary focus:border-arbor-primary"
                    >
                      <option value="" disabled>Select a subject</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Request a Quote">Request a Quote</option>
                      <option value="Schedule Service">Schedule Service</option>
                      <option value="Feedback">Feedback</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-arbor-primary focus:border-arbor-primary"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full md:w-auto flex items-center justify-center"
                >
                  {loading ? (
                    <>
                      <Loader2 size={20} className="mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} className="mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
            
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-arbor-dark">Contact Information</h2>
              
              <div className="space-y-8 mb-10">
                <div className="flex items-start">
                  <div className="bg-arbor-primary rounded-full p-3 mr-4 text-white">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-arbor-dark">Phone</h3>
                    <p className="text-gray-600">(555) 123-4567</p>
                    <p className="text-sm text-gray-500">For inquiries and scheduling</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-arbor-primary rounded-full p-3 mr-4 text-white">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-arbor-dark">Email</h3>
                    <p className="text-gray-600">info@arborpowerwashing.com</p>
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
                
                <div className="flex items-start">
                  <div className="bg-arbor-primary rounded-full p-3 mr-4 text-white">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-arbor-dark">Business Hours</h3>
                    <div className="grid grid-cols-2 gap-x-4 text-gray-600">
                      <p>Monday - Friday</p>
                      <p>8:00 AM - 6:00 PM</p>
                      <p>Saturday</p>
                      <p>9:00 AM - 4:00 PM</p>
                      <p>Sunday</p>
                      <p>Closed</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Map */}
              <div className="rounded-lg overflow-hidden shadow-lg h-64">
                {/* Placeholder for an actual map */}
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
        </div>
      </div>
      
      {/* FAQ Teaser */}
      <div className="py-16 bg-arbor-light">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-arbor-dark">Have Questions?</h2>
          <p className="max-w-2xl mx-auto text-lg mb-8 text-gray-600">
            Check out our frequently asked questions for quick answers to common inquiries.
          </p>
          <a href="/#faq" className="btn-primary">
            View FAQs
          </a>
        </div>
      </div>
      
      <Footer />
      <QuoteButton />
    </div>
  );
};

export default Contact;
