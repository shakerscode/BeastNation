import { motion } from "framer-motion";

interface ReportHeadingProps {
  title?: string;
  subtitle?: string;
  tagline?: string;
  year?: string;
}

export const ReportHeading = ({
  title = "THE BUILDING BLOCKS OF",
  subtitle = "SOCIAL FIRST GROWTH",
  tagline = "TRENDS, STRATEGIES, INNOVATIONS",
  year = String(new Date().getFullYear()),
}: ReportHeadingProps) => {
  // Split year into two parts for stacking
  const yearParts = year.split(" ");

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="relative mb-10"
    >
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-opacity-20 text-gray-600 font-bold text-9xl md:text-[20rem] leading-none flex flex-col items-center">
          <div>{yearParts[0]}</div>
          <div className="-mt-8 md:-mt-24">{yearParts[1]}</div>
        </div>
      </div>

      {/* Main title content */}
      <div className="relative z-10">
        <div className="text-4xl md:text-5xl lg:text-6xl font-bold">
          <h1 className="text-white">{title}</h1>
          <h1 className="mt-1">
            <span className="bg-gradient-to-r from-beast-purple to-beast-accent text-transparent bg-clip-text">
              {subtitle}
            </span>
          </h1>
        </div>
        <h2 className="text-lg md:text-xl font-semibold mt-4 tracking-wide uppercase">
          {tagline}
        </h2>
      </div>
    </motion.div>
  );
};
