import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import logo from "../../assets/logo.png";


const ScrollToTop = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed right-4 bottom-4">
      {showScrollButton ? (
        <button
          onClick={scrollToTop}
          className="bg-black text-white rounded-full p-3 shadow-lg hover:bg-gray-800 transition-colors"
          aria-label="Scroll to top"
        >
          <ArrowUp size={24} />
        </button>
      ) : (
        <img
          src={logo}
          alt="Hero image"
          className="w-32 h-32 rounded-full object-cover"
        />
      )}
    </div>
  );
};

export default ScrollToTop;
