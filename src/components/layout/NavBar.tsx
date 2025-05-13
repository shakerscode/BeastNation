import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);

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
    {
      name: "Marketing Services",
      path: "#",
      children: [
        {
          name: "All Services",
          path: "/services",
        },
        {
          name: "Influencer Marketing",
          path: "/services/influencer-marketing",
        },
        {
          name: "Performance Marketing",
          path: "/services/performance-marketing",
        },
        {
          name: "Social Content Studio",
          path: "/services/social-content-studio",
        },
        {
          name: "Experiential Marketing",
          path: "/services/experiential-marketing",
        },
        {
          name: "Community Management",
          path: "/services/community-management",
        },
        {
          name: "Business Intelligence",
          path: "/services/business-intelligence",
        },
      ],
    },
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
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-4 `}>
      <div
        className={`glass max-w-7xl 2xl:max-w-[1536px] mx-auto flex items-center justify-between transition-all ease-in-out duration-300 ${
          isScrolled ? " bg-beast-accent" : "bg-transparent"
        }`}
      >
        <Link to={"/"} className="flex items-center space-x-2 px-4 py-3">
          <div className="bg-white text-xl md:text-3xl font-bold text-[#4c0fa1] p-1.5 rounded-lg">
            TN
          </div>
          <div
            className={`text-3xl font-bold hidden md:block  ${
              isScrolled ? "text-beast-purple-light" : "text-gradient"
            }`}
          >
            Trendy<span className="text-white">Nation</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 pr-4">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.name} className="relative group">
                <span className="cursor-pointer text-nowrap font-medium hover:text-beast-700 dark:hover:text-beast-400 transition-colors">
                  {link.name}
                </span>
                <div className="absolute -left-6 shadow-2xl text-white mt-2 min-w-48 bg-beast-accent rounded-md opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transform transition duration-200 origin-top z-50">
                  {link.children.map((sublink) => (
                    <Link
                      key={sublink.name}
                      to={sublink.path}
                      className="block px-4 py-2 text-base text-nowrap text-white hover:bg-beast-purple-dark hover:text-beast-700"
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
            onClick={() => navigate("/contact")}
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
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-8 w-8" strokeWidth={2.5} />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 glass bg-beast-accent mt-2 py-4 px-6 flex flex-col space-y-4 md:hidden">
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
              onClick={() => navigate("/contact")}
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
