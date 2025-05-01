
import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Sample gallery items with before/after images
const galleryItems = [
  {
    id: 1,
    title: "Roof Cleaning",
    description: "Removal of black streaks and algae",
    beforeImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3",
    afterImage: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?ixlib=rb-4.0.3",
    category: "Roof"
  },
  {
    id: 2,
    title: "Fence Restoration",
    description: "Removing years of dirt and mildew",
    beforeImage: "/lovable-uploads/9354ac1f-520a-4685-b5be-5869daf60ea5.png",
    afterImage: "/lovable-uploads/9354ac1f-520a-4685-b5be-5869daf60ea5.png",
    category: "Fence"
  },
  {
    id: 3,
    title: "Driveway Cleaning",
    description: "Removing oil stains and grime",
    beforeImage: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3",
    afterImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3",
    category: "Driveway"
  },
];

const Gallery = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev === galleryItems.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? galleryItems.length - 1 : prev - 1));
  };

  return (
    <section className="py-16 bg-arbor-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Before & After</h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            See the dramatic difference our professional power washing services can make.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div
            className="relative overflow-hidden rounded-xl shadow-xl"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Current Slide */}
            <div className="relative h-[500px]">
              {/* Before Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-in-out"
                style={{ 
                  backgroundImage: `url(${galleryItems[activeSlide].beforeImage})`,
                  clipPath: isHovered
                    ? "polygon(0 0, 50% 0, 50% 100%, 0 100%)"
                    : "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
                }}
              >
                <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded">
                  Before
                </div>
              </div>
              
              {/* After Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-in-out"
                style={{ 
                  backgroundImage: `url(${galleryItems[activeSlide].afterImage})`,
                  clipPath: isHovered
                    ? "polygon(50% 0, 100% 0, 100% 100%, 50% 100%)"
                    : "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)"
                }}
              >
                <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded">
                  After
                </div>
              </div>

              {/* Vertical Slider Indicator */}
              <div className="absolute top-1/2 left-1/2 bottom-0 w-1 -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center">
                <div className="h-full w-1 bg-white/80"></div>
                <div className="absolute top-1/2 -translate-y-1/2">
                  {isHovered && (
                    <div className="bg-white rounded-full p-1 shadow-lg">
                      <div className="h-8 w-8 bg-arbor-primary rounded-full flex items-center justify-center">
                        <ChevronLeft className="text-white w-4 h-4" />
                        <ChevronRight className="text-white w-4 h-4" />
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Caption */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <div className="text-white">
                  <h3 className="text-xl font-bold">{galleryItems[activeSlide].title}</h3>
                  <p>{galleryItems[activeSlide].description}</p>
                  <span className="inline-block mt-2 px-3 py-1 bg-arbor-primary text-white text-sm rounded">
                    {galleryItems[activeSlide].category}
                  </span>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              className="absolute top-1/2 left-3 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white transition-all"
              onClick={prevSlide}
            >
              <ChevronLeft className="text-arbor-dark w-5 h-5" />
            </button>
            <button
              className="absolute top-1/2 right-3 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white transition-all"
              onClick={nextSlide}
            >
              <ChevronRight className="text-arbor-dark w-5 h-5" />
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {galleryItems.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full ${
                    index === activeSlide ? "bg-white" : "bg-white/50"
                  }`}
                  onClick={() => setActiveSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <Link to="/gallery" className="btn-primary">
            View Full Gallery
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
