import { bulletPoints } from "@/utils/fakeData";
import { motion } from "framer-motion";

export const ReportContent = () => {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.2 + custom * 0.1, duration: 0.5 },
    }),
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="space-y-6 text-gray-200 max-w-xl"
    >
      <motion.p variants={fadeInUpVariants} custom={0}>
        With brands projected to spend $39 billion on influencer marketing in
        2025 — a 10% increase from previous years — the question is no longer
        whether influencer marketing works, but how brands can make it work at
        scale.
      </motion.p>

      <motion.p variants={fadeInUpVariants} custom={1}>
        With brand fit, brand safety, and cultural moments happening at the
        rapid pace of social, scaling influencer marketing efforts is both the
        biggest hurdle and opportunity for brands.
      </motion.p>

      <motion.p
        variants={fadeInUpVariants}
        custom={2}
        className="font-semibold"
      >
        Dive into the how and why with our latest white paper:
      </motion.p>

      <motion.ul variants={fadeInUpVariants} custom={3} className="space-y-4">
        {bulletPoints.map((point, index) => (
          <motion.li
            key={index}
            variants={fadeInUpVariants}
            custom={index + 4}
            className="flex items-start"
          >
            <span className="text-beast-purple mr-2">•</span>
            <span>
              <strong>{point.title}</strong> {point.content}
            </span>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
};
