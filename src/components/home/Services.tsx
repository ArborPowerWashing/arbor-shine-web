import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  House, 
  Fence, 
  Wind, 
  Droplet,
  ArrowRight
} from "lucide-react";

const services = [
  {
    id: 1,
    name: "Roof Washing",
    description: "Low-pressure soft wash to gently remove mold, algae, and debris without damaging your roof's surface.",
    icon: House,
    color: "bg-arbor-primary",
    link: "/services#roof-washing"
  },
  {
    id: 2,
    name: "Fence Washing",
    description: "Restore your fence's appearance by removing dirt, mold, and mildew, enhancing its longevity.",
    icon: Fence,
    color: "bg-arbor-secondary",
    link: "/services#fence-washing"
  },
  {
    id: 3,
    name: "Window Cleaning",
    description: "Professional window cleaning to remove streaks, water spots, and grime for crystal clear views.",
    icon: Wind,
    color: "bg-arbor-accent",
    link: "/services#window-cleaning"
  },
  {
    id: 4,
    name: "House Washing",
    description: "Complete exterior cleaning that removes dirt, mold, and mildew to protect your home's appearance.",
    icon: House,
    color: "bg-arbor-dark",
    link: "/services#house-washing"
  },
  {
    id: 5,
    name: "Driveway & Patio Cleaning",
    description: "Powerful cleaning for concrete, brick, and stone surfaces to remove stains and restore appearance.",
    icon: Droplet,
    color: "bg-arbor-primary",
    link: "/services#driveway-patio"
  },
];

const Services = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="services" className="section-container bg-arbor-light">
      <div className="text-center mb-12">
        <h2 className="section-title text-arbor-dark">Our Services</h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-600">
          We offer comprehensive power washing solutions to maintain and enhance 
          your property's appearance and value.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {services.map((service) => (
          <div
            key={service.id}
            className={`
              bg-white rounded-lg shadow-md overflow-hidden
              transform transition-all duration-300
              ${hoveredId === service.id ? "scale-[1.02]" : ""}
              hover:shadow-lg
            `}
            onMouseEnter={() => setHoveredId(service.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <div className="p-6">
              <div
                className={`${
                  service.color
                } w-16 h-16 rounded-full flex items-center justify-center text-white mb-4 transition-all duration-300 ${
                  hoveredId === service.id ? "scale-110" : ""
                }`}
              >
                <service.icon size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-arbor-dark">
                {service.name}
              </h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Link
                to={service.link}
                className="group inline-flex items-center text-arbor-primary hover:text-arbor-secondary font-medium transition-colors"
              >
                Learn More
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <Link to="/services" className="btn-primary">
          View All Services
        </Link>
      </div>

      <div className="mt-16 text-center">
        <p className="text-lg text-arbor-dark italic">
          "Your property deserves the best care, and that's exactly what we deliver."
        </p>
      </div>
    </section>
  );
};

export default Services;
