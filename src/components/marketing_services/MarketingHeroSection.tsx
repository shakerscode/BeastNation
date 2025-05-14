import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router";

interface IPageProps {
  pageName?: string;
  title: string;
  description: string;
  quote?: string;
  img: string;
}

const MarketingHeroSection = ({
  pageName,
  title,
  description,
  quote,
  img,
}: IPageProps) => {
  return (
    <section className="relative w-full min-h-screen flex items-center py-16">
      <div className="px-4 sm:px-6 lg:px-8 w-full">
        {/* Breadcrumb Navigation */}
        <div className="mb-12">
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex text-sm text-white/70"
          >
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link
              to="/services"
              className={`${
                pageName ? "hover:text-white" : "text-beast-purple-light"
              } transition-colors"`}
            >
              Services
            </Link>
            {pageName && (
              <>
                <span className="mx-2">/</span>
                <span className="text-beast-purple-light">{pageName}</span>
              </>
            )}
          </motion.nav>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-none"
            >
              {title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-white/90 text-xl mb-12"
            >
              {description}
            </motion.p>

            {quote && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="mb-12 relative p-8 rounded-lg border border-beast-purple-light/50 bg-beast-accent/20"
              >
                <div className="absolute -left-2 top-8 text-beast-purple-light text-5xl">
                  "
                </div>
                <p className="text-white/90 relative z-10">
                  Trendy Nation transformed Dairy Management's approach to
                  influencer content, identifying a diverse group of
                  enthusiastic dairy-loving influencers for our Undeniably
                  Dairy's roster as an ongoing partnership.
                </p>
                <p className="text-white mt-4 font-medium">
                  — Dairy Management Inc.
                </p>
              </motion.div>
            )}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
            >
              <Link to={"/contact"}>
                <Button className="bg-primary-gradient text-white hover:shadow-glow transition-shadow px-8 py-6 text-lg font-medium">
                  Get In Touch
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Right Content - Images */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="relative"
          >
            <motion.div
              className="relative z-10"
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                repeatType: "mirror",
              }}
            >
              <div className="w-full max-w-2xl mx-auto overflow-hidden">
                <img
                  src={img}
                  alt={title}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MarketingHeroSection;
