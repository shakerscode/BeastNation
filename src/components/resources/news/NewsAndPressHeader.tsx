import CommonSubHeading from "@/components/common/CommonSubHeading";
import { motion } from "framer-motion";

function NewsAndPressHeader() {
  return (
    <div className="max-w-7xl mx-auto text-center mb-0 px-4 md:px-8">
      <CommonSubHeading subHead="News & Updates" shouldCol />
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl font-bold font-display mt-2 mb-4 text-white"
      >
        Stay Ahead of the <span className="text-beast-purple-light">Buzz</span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        viewport={{ once: true }}
        className="text-white/70 text-base md:text-lg max-w-2xl mx-auto"
      >
        From headline-worthy campaigns to media coverage, explore how we're
        shaping the future of influencer marketing.
      </motion.p>
    </div>
  );
}

export default NewsAndPressHeader;
