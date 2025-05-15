import { Variants, motion } from "framer-motion";

const CommonLoading = () => {
  const dotVariants: Variants = {
    jump: {
      y: -30,
      transition: {
        duration: 0.8,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      animate="jump"
      transition={{ staggerChildren: -0.2, staggerDirection: -1 }}
      className="loading-container"
    >
      <motion.div className="loading-dot" variants={dotVariants} />
      <motion.div className="loading-dot" variants={dotVariants} />
      <motion.div className="loading-dot" variants={dotVariants} />
    </motion.div>
  );
};

export default CommonLoading;
