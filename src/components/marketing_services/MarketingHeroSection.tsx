import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";
import { Link } from "react-router";
import CommonGetInTouchBtn from "../common/CommonGetInTouchBtn";
import { ReactNode } from "react";

interface IPageProps {
  pageName?: string;
  title: string | ReactNode;
  description: string;
  quote?: string;
  img: string;
  hideBreadcrumb?: boolean;
}

const MarketingHeroSection = ({
  pageName,
  title,
  description,
  quote,
  img,
  hideBreadcrumb,
}: IPageProps) => {
  return (
    <section className="relative w-full min-h-screen flex items-center">
      <div className="px-4 sm:px-6 lg:px-8 w-full">
        {/* Animated background elements */}
        <div className="absolute inset-0 -z-10">
          {/* <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-beast-accent to-transparent opacity-30" /> */}
          <div className="absolute top-0 md:top-2/4 -right-20 md:left-[580px] w-48 md:w-72 h-48 md:h-72 rounded-full bg-beast-purple-dark blur-[100px] animate-pulse-gentle" />
          <div
            className="absolute bottom-10 md:bottom-[20%] md:right-1/4 w-40 md:w-96 h-40 md:h-96 rounded-full bg-beast-purple blur-[120px] animate-pulse-gentle"
            style={{ animationDelay: "1s" }}
          />
        </div>

        {/* Breadcrumb Navigation */}
        {!hideBreadcrumb && (
          <div className="lg:my-8 my-9">
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
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:-mt-8">
          {/* Left Content */}
          <div>
            {typeof title === "string" ? (
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-none"
              >
                {title}
              </motion.h1>
            ) : (
              title
            )}

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-white/90 text-lg mb-6"
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
              <CommonGetInTouchBtn />
            </motion.div>
          </div>

          {/* Right Content - Images */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="relative p-10"
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
                  alt={"Hero Image"}
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
