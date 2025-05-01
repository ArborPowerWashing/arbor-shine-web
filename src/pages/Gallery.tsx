
import { useState, useEffect } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import QuoteButton from "../components/ui/QuoteButton";
import { ArrowLeft, ArrowRight, X } from "lucide-react";

// Sample gallery items
const galleryItems = [
  {
    id: 1,
    title: "Roof Cleaning",
    category: "Roof",
    beforeImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3",
    afterImage: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?ixlib=rb-4.0.3"
  },
  {
    id: 2,
    title: "Fence Restoration",
    category: "Fence",
    beforeImage: "/lovable-uploads/e9aa0fba-8fb7-40d4-8186-de08054030f5.png",
    afterImage: "/lovable-uploads/e9aa0fba-8fb7-40d4-8186-de08054030f5.png"
  },
  {
    id: 3,
    title: "Driveway Cleaning",
    category: "Driveway",
    beforeImage: "/lovable-uploads/89c0a564-9f64-4e84-828e-f104b1260e78.png",
    afterImage: "/lovable-uploads/89c0a564-9f64-4e84-828e-f104b1260e78.png"
  },
  {
    id: 4,
    title: "House Washing",
    category: "House",
    beforeImage: "/lovable-uploads/e9aa0fba-8fb7-40d4-8186-de08054030f5.png",
    afterImage: "/lovable-uploads/e9aa0fba-8fb7-40d4-8186-de08054030f5.png"
  },
  {
    id: 5,
    title: "Deck Cleaning",
    category: "Deck",
    beforeImage: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3",
    afterImage: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3"
  },
  {
    id: 6,
    title: "Sidewalk Restoration",
    category: "Concrete",
    beforeImage: "/lovable-uploads/89c0a564-9f64-4e84-828e-f104b1260e78.png",
    afterImage: "/lovable-uploads/89c0a564-9f64-4e84-828e-f104b1260e78.png"
  }
];

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [filteredItems, setFilteredItems] = useState(galleryItems);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState<number | null>(null);
  const [showAfterImage, setShowAfterImage] = useState(false);

  const categories = ["All", ...Array.from(new Set(galleryItems.map(item => item.category)))];

  useEffect(() => {
    if (activeFilter === "All") {
      setFilteredItems(galleryItems);
    } else {
      setFilteredItems(galleryItems.filter(item => item.category === activeFilter));
    }
  }, [activeFilter]);

  const openLightbox = (id: number) => {
    setCurrentItem(id);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden"; // Prevent scrolling
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setShowAfterImage(false);
    document.body.style.overflow = ""; // Re-enable scrolling
  };

  const navigateLightbox = (direction: "next" | "prev") => {
    if (currentItem === null) return;
    
    const currentIndex = filteredItems.findIndex(item => item.id === currentItem);
    let newIndex;
    
    if (direction === "next") {
      newIndex = (currentIndex + 1) % filteredItems.length;
    } else {
      newIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    }
    
    setCurrentItem(filteredItems[newIndex].id);
    setShowAfterImage(false);
  };

  // Get current item data
  const getCurrentItem = () => {
    if (currentItem === null) return null;
    return galleryItems.find(item => item.id === currentItem) || null;
  };

  // Scroll animation effect
  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll(".reveal");
      
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
          <h1 className="text-4xl font-bold mb-4">Before & After Gallery</h1>
          <p className="max-w-2xl mx-auto text-lg">
            See the dramatic difference our professional power washing services can make.
          </p>
        </div>
      </div>
      
      {/* Filter Section */}
      <div className="py-8 bg-arbor-light">
        <div className="container mx-auto px-4">
          <div className="flex justify-center flex-wrap gap-4">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-6 py-2 rounded-full transition-all ${
                  activeFilter === cat 
                    ? "bg-arbor-primary text-white" 
                    : "bg-white text-arbor-dark hover:bg-arbor-secondary hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>
      
      {/* Gallery Grid */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <div 
                key={item.id}
                className="reveal bg-white rounded-lg shadow-lg overflow-hidden hover-effect"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-64 cursor-pointer" onClick={() => openLightbox(item.id)}>
                  {/* Before Image (showing by default) */}
                  <img
                    src={item.beforeImage}
                    alt={`${item.title} - Before`}
                    className="absolute inset-0 w-full h-full object-cover transition-opacity"
                  />
                  
                  {/* After Image (showing on hover) */}
                  <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500">
                    <img
                      src={item.afterImage}
                      alt={`${item.title} - After`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                      <p className="text-white text-sm font-medium">Hover to see the difference</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="text-xl font-bold text-arbor-dark">{item.title}</h3>
                  <p className="text-arbor-accent">{item.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Lightbox */}
      {lightboxOpen && getCurrentItem() && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
          <div className="absolute top-4 right-4">
            <button
              onClick={closeLightbox}
              className="text-white p-2 rounded-full hover:bg-white/20"
              aria-label="Close lightbox"
            >
              <X size={24} />
            </button>
          </div>
          
          <div className="relative w-full max-w-5xl max-h-[80vh] p-4">
            <div className="relative h-full">
              {/* Before Image */}
              <img
                src={getCurrentItem()?.beforeImage}
                alt={`${getCurrentItem()?.title} - Before`}
                className={`max-h-[70vh] mx-auto object-contain transition-opacity duration-500 ${
                  showAfterImage ? "opacity-0" : "opacity-100"
                }`}
              />
              
              {/* After Image */}
              <img
                src={getCurrentItem()?.afterImage}
                alt={`${getCurrentItem()?.title} - After`}
                className={`absolute inset-0 max-h-[70vh] mx-auto object-contain transition-opacity duration-500 ${
                  showAfterImage ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>
            
            <div className="mt-4 text-center text-white">
              <h3 className="text-2xl font-bold">{getCurrentItem()?.title}</h3>
              <p className="text-arbor-secondary">{getCurrentItem()?.category}</p>
              
              <div className="mt-4">
                <button
                  onClick={() => setShowAfterImage(!showAfterImage)}
                  className="px-4 py-2 bg-arbor-primary text-white rounded-md hover:bg-arbor-secondary transition-colors"
                >
                  Show {showAfterImage ? "Before" : "After"}
                </button>
              </div>
            </div>
          </div>
          
          {/* Navigation Buttons */}
          <button
            onClick={() => navigateLightbox("prev")}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full hover:bg-white/20"
            aria-label="Previous image"
          >
            <ArrowLeft size={30} />
          </button>
          
          <button
            onClick={() => navigateLightbox("next")}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full hover:bg-white/20"
            aria-label="Next image"
          >
            <ArrowRight size={30} />
          </button>
        </div>
      )}
      
      {/* CTA Section */}
      <div className="py-16 bg-arbor-light">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-arbor-dark">Ready to See These Results at Your Property?</h2>
          <p className="max-w-2xl mx-auto text-lg mb-8 text-gray-600">
            Our professional power washing services can transform your home or business.
            Contact us today for a free estimate!
          </p>
          <a href="/quote" className="btn-primary">
            Get a Free Quote
          </a>
        </div>
      </div>
      
      <Footer />
      <QuoteButton />
    </div>
  );
};

export default Gallery;
