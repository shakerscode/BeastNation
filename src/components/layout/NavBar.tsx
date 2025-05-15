import { Button } from "@/components/ui/button";
import { navLinks } from "@/constants/navLinks";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Search, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import CommonGetInTouchBtn from "../common/CommonGetInTouchBtn";

const mobileMenuVariants = {
  hidden: {
    x: "100%",
    opacity: 0,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  exit: {
    x: "100%",
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
      when: "afterChildren",
      staggerDirection: -1,
    },
  },
};

const linkVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

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

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-4 `}>
      <div
        className={`glass max-w-7xl 2xl:max-w-[1536px] mx-auto flex items-center justify-between transition-all ease-in-out duration-300 ${
          isScrolled ? " bg-beast-accent" : "bg-transparent"
        }`}
      >
        <Link to={"/"} className="flex items-center space-x-2 px-4 py-3">
          <div className="bg-white text-xl md:text-3xl font-bold font-display text-[#4c0fa1] p-1.5 rounded-lg">
            TN
          </div>
          <div
            className={`text-3xl font-bold font-display hidden md:block  ${
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
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => setActiveMenu(link.name)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <span className="cursor-pointer text-nowrap font-medium text-sm hover:text-beast-700 dark:hover:text-beast-400 transition-colors">
                  {link.name}
                </span>

                <AnimatePresence>
                  {activeMenu === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute -left-10 mt-2 p-2 min-w-48 bg-beast-accent shadow-2xl rounded-md z-50"
                    >
                      {link.children.map((sublink) => (
                        <Link
                          key={sublink.name}
                          to={sublink.path}
                          className="block px-4 py-2 text-base rounded-md text-nowrap text-white hover:bg-beast-purple-dark hover:text-beast-700"
                        >
                          {sublink.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={link.name}
                to={link.path}
                className="font-medium text-sm hover:text-beast-700 dark:hover:text-beast-400 transition-colors"
              >
                {link.name}
              </Link>
            )
          )}

          <CommonGetInTouchBtn />
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden px-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white hover:bg-white/10"
          >
            <Menu className="h-6 w-6" strokeWidth={2.5} />
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="mobile-menu"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={mobileMenuVariants}
              className="fixed -top-[18px] -right-[17px] z-50 w-[100vw] rounded-none bg-black px-4 py-6 glass md:hidden flex flex-col space-y-4 h-screen"
            >
              {/* Header (Search + Close) */}
              <div className="flex items-center justify-between mb-4 gap-4">
                <div className="flex items-center gap-3 w-full">
                  <Search className="h-4 w-4" />
                  <input
                    type="text"
                    name="search"
                    id="search"
                    placeholder="Search"
                    className="outline-none text-sm w-full placeholder:text-sm bg-transparent transition-all ease-in-out duration-300 focus:border-b border-b-beast-white"
                  />
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:bg-white/10 bg-black/50 p-1.5 rounded-lg"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <motion.div
                className="flex flex-col justify-center items-center text-3xl gap-4"
                variants={mobileMenuVariants}
              >
                {navLinks.map((link) => {
                  const hasChildren = !!link.children;

                  return (
                    <motion.div
                      key={link.name}
                      className="w-full text-center"
                      variants={linkVariant}
                    >
                      {hasChildren ? (
                        <>
                          <button
                            onClick={() =>
                              setOpenMenu((prev) =>
                                prev === link.name ? null : link.name
                              )
                            }
                            className="w-full text-white font-medium hover:text-beast-700 dark:hover:text-beast-400 transition-colors"
                          >
                            {link.name}
                          </button>

                          <AnimatePresence initial={false}>
                            {openMenu === link.name && (
                              <motion.div
                                initial="collapsed"
                                animate="open"
                                exit="collapsed"
                                variants={{
                                  open: { opacity: 1, height: "auto" },
                                  collapsed: { opacity: 0, height: 0 },
                                }}
                                transition={{
                                  duration: 0.1,
                                  ease: "easeInOut",
                                }}
                                className="overflow-hidden mt-2"
                              >
                                {link.children!.map((sublink) => (
                                  <Link
                                    key={sublink.name}
                                    to={sublink.path}
                                    onClick={() => setIsOpen(false)}
                                    className="block px-4 py-2 text-base text-white hover:bg-beast-purple-dark hover:text-beast-700"
                                  >
                                    {sublink.name}
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </>
                      ) : (
                        <Link
                          to={link.path}
                          onClick={() => setIsOpen(false)}
                          className="font-medium text-white hover:text-beast-700 dark:hover:text-beast-400 transition-colors"
                        >
                          {link.name}
                        </Link>
                      )}
                    </motion.div>
                  );
                })}
                <motion.div variants={linkVariant}>
                  <Button
                    onClick={() => {
                      setIsOpen(false);
                      navigate("/contact");
                    }}
                    size="sm"
                    className={`shadow-glow w-full ${
                      isScrolled
                        ? "bg-white text-beast-purple-dark"
                        : "bg-primary-gradient"
                    }`}
                  >
                    Get In Touch
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;
