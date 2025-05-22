import CommonSearch from "@/components/common/CommonSearch";
import { motion } from "framer-motion";

const PlaybookCTA = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      viewport={{ once: true, amount: 0.3 }}
      className=""
    >
      {/* CTA Box */}
      <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto bg-white text-black rounded-md flex flex-col md:flex-row items-center justify-between gap-3 md:gap-8 p-5 shadow-xl">
        {/* Text Content */}
        <div className="flex-1">
          <h3 className="text-2xl md:text-2xl font-bold mb-2 text-center md:text-start w-full">
            Your 2025 Playbook for Influencer Marketing
          </h3>
          <p className="text-sm md:text-base text-gray-800 max-w-4xl text-center md:text-start w-full">
            Get exclusive insights into scaling influencer campaigns, creating
            intentional content, and redefining platform roles in the marketing
            funnel.
          </p>
        </div>

        {/* CTA Button */}
        <div>
          <button className="bg-beast-purple hover:bg-beast-accent text-white font-semibold text-sm md:text-md px-6 py-3 rounded-md transition-all duration-300">
            Get The Report
          </button>
        </div>
      </div>

      {/* Search Bar */}
      <CommonSearch />
    </motion.section>
  );
};

export default PlaybookCTA;
