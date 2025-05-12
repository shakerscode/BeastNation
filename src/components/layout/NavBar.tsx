import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import React, { useEffect, useState } from "react";
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
    {
      name: "Resources",
      path: "#",
      children: [
        { name: "Influencer List", path: "/influencer-lists" },
        { name: "Influencer Blogs", path: "/influencer-blogs" },
      ],
    },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-4 ${
        isScrolled
          ? "bg-beast-500 dark:bg-gray-900 shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="glass max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4 px-4 py-3">
          <div className="text-2xl font-bold text-gradient">BEAST</div>
          <div className="h-6 w-px bg-white/20 hidden md:block" />
          <div className="hidden md:block text-sm font-medium text-white/70">
            Influencer Marketing Agency
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 pr-4">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.name} className="relative group">
                <span className="cursor-pointer font-medium hover:text-beast-700 dark:hover:text-beast-400 transition-colors">
                  {link.name}
                </span>
                <div className="absolute -left-6 shadow-2xl text-white mt-2 w-48 bg-beast-accent rounded-md opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transform transition duration-200 origin-top z-50">
                  {link.children.map((sublink) => (
                    <Link
                      key={sublink.name}
                      to={sublink.path}
                      className="block px-4 py-2 text-base text-white hover:bg-beast-purple-dark hover:text-beast-700"
                    >
                      {sublink.name}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={link.name}
                to={link.path}
                className="font-medium hover:text-beast-700 dark:hover:text-beast-400 transition-colors"
              >
                {link.name}
              </Link>
            )
          )}

          <Button
            size="sm"
            className="bg-primary-gradient hover:bg-beast-purple shadow-glow w-full"
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
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 glass mt-2 py-4 px-6 flex flex-col space-y-4 md:hidden">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.name} className="relative group">
                  <span className="cursor-pointer font-medium hover:text-beast-700 dark:hover:text-beast-400 transition-colors">
                    {link.name}
                  </span>
                  <div className="absolute -left-6 shadow-2xl text-white mt-2 w-48 bg-beast-accent rounded-md opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transform transition duration-200 origin-top z-50">
                    {link.children.map((sublink) => (
                      <Link
                        key={sublink.name}
                        to={sublink.path}
                        className="block px-4 py-2 text-base text-white hover:bg-beast-purple-dark hover:text-beast-700"
                      >
                        {sublink.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.name}
                  to={link.path}
                  className="font-medium hover:text-beast-700 dark:hover:text-beast-400 transition-colors"
                >
                  {link.name}
                </Link>
              )
            )}
            <Button
              size="sm"
              className="bg-primary-gradient hover:bg-beast-purple shadow-glow w-full"
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
