import clsx from "clsx";
import { motion } from "framer-motion";

function CommonSubHeading({
  subHead,
  shouldCol = false,
}: {
  subHead: string;
  shouldCol?: boolean;
}) {
  return (
    <div className={clsx(shouldCol ? "flex-col" : "flex-row", "flex items-center justify-start gap-2 mb-2")}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true, amount: 0.3 }}
        className="text-beast-purple-light font-semibold uppercase"
      >
        {subHead}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true, amount: 0.3 }}
        className="w-48 h-[2px] bg-beast-purple-light rounded-lg "
      ></motion.div>
    </div>
  );
}

export default CommonSubHeading;
