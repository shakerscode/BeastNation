import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Track scroll position to add background on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Talent", path: "/talent" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-4 `}>
      <div
        className={`glass max-w-7xl mx-auto flex items-center justify-between transition-all ease-in-out duration-300 ${
          isScrolled ? " bg-beast-accent" : "bg-transparent"
        }`}
      >
        <div className="flex items-center space-x-2 px-4 py-3">
          <div className="bg-white text-3xl font-bold text-[#4c0fa1] p-1.5 rounded-lg">
            TN
          </div>
          <div
            className={`text-3xl font-bold hidden md:block  ${
              isScrolled
                ? "text-beast-purple-light"
                : "text-gradient"
            }`}
          >
            Trendy<span className="text-white">Nation</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 pr-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-gray-200 font-medium dark:text-gray-200 hover:text-beast-700 dark:hover:text-beast-400 transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Button
            size="sm"
            className={`shadow-glow w-full hover:shadow-glow-lg text-base p-5 ${
              isScrolled
                ? "bg-white text-beast-purple-dark hover:bg-white hover:text-beast-purple-dark"
                : "bg-primary-gradient "
            }`}
          >
            Get In Touch
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden px-4">
          <Button
            size="icon"
            variant="ghost"
            onClick={() => setIsOpen(!isOpen)}
            className="text-white hover:bg-white/10"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-8 w-8" strokeWidth={2.5} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 glass mt-2 py-4 px-6 flex flex-col space-y-4 md:hidden">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-gray-200 font-medium dark:text-gray-200 hover:text-beast-700 dark:hover:text-beast-400 transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Button
              size="sm"
              className={`shadow-glow w-full ${
                isScrolled
                  ? "bg-white text-beast-purple-dark"
                  : "bg-primary-gradient "
              }`}
            >
              Get In Touch
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
