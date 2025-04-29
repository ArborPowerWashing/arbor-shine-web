
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MessageSquare } from "lucide-react";

const QuoteButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Link
      to="/quote"
      className={`fixed bottom-6 right-6 bg-arbor-secondary text-white p-4 rounded-full shadow-lg z-40 flex items-center justify-center transition-all duration-300 hover:bg-arbor-primary ${
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-16 opacity-0"
      }`}
    >
      <MessageSquare className="animate-bounce-subtle" />
      <span className="ml-2 hidden md:inline">Get a Quote</span>
    </Link>
  );
};

export default QuoteButton;
