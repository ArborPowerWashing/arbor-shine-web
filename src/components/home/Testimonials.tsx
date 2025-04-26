
import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Homeowner",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&h=120&q=80",
    rating: 5,
    text: "I was amazed at how my driveway and house siding looked after Arbor Power Washing finished their work. It's like we have a new home exterior! The team was professional and efficient. Highly recommend their services."
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    role: "Business Owner",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&h=120&q=80",
    rating: 5,
    text: "Our commercial building had years of grime built up. The Arbor team completely transformed our property's appearance. Their attention to detail and eco-friendly approach impressed me. Will definitely use them again."
  },
  {
    id: 3,
    name: "Emily Thompson",
    role: "Property Manager",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&h=120&q=80",
    rating: 4,
    text: "As a property manager, I need reliable service providers. Arbor Power Washing consistently delivers excellent results across our properties. Their roof cleaning service in particular has extended the life of our roofing materials."
  },
  {
    id: 4,
    name: "David Chen",
    role: "Homeowner",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&h=120&q=80",
    rating: 5,
    text: "My fence looked so dirty and old that I was considering replacing it. Then I found Arbor Power Washing. Their fence cleaning service saved me thousands in replacement costs. The fence looks almost new again!"
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="py-16 bg-gradient-blue text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="max-w-2xl mx-auto text-lg opacity-90">
            Don't just take our word for it. Hear from our satisfied customers.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 opacity-30">
            <Quote size={80} />
          </div>
          
          {/* Testimonial Card */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 shadow-lg">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* Avatar */}
              <div className="flex-shrink-0">
                <img
                  src={testimonials[activeIndex].image}
                  alt={testimonials[activeIndex].name}
                  className="w-20 h-20 object-cover rounded-full border-4 border-white/30"
                />
              </div>
              
              {/* Content */}
              <div className="flex-1">
                <div className="flex mb-2">
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" className="text-yellow-300" />
                  ))}
                  {[...Array(5 - testimonials[activeIndex].rating)].map((_, i) => (
                    <Star key={i} size={18} className="text-gray-300" />
                  ))}
                </div>
                
                <p className="mb-4 text-lg italic">"{testimonials[activeIndex].text}"</p>
                
                <div>
                  <h4 className="text-xl font-bold">{testimonials[activeIndex].name}</h4>
                  <p className="opacity-80">{testimonials[activeIndex].role}</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Navigation */}
          <div className="flex justify-center mt-8 gap-4">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            
            <div className="flex items-center space-x-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`w-3 h-3 rounded-full ${
                    i === activeIndex ? "bg-white" : "bg-white/30"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
