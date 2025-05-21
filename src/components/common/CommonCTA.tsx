import { motion } from "framer-motion";
import { ReactNode } from "react";
import CommonGetInTouchBtn from "./CommonGetInTouchBtn";

function CommonCTA({
  title,
  subTitle,
}: {
  title: ReactNode;
  subTitle: string;
}) {
  return (
    <section className="bg-beast-black text-center py-14 md:py-24 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true, amount: 0.2 }}
        className="text-center"
      >
        {title}
        <p className="text-white/70  max-w-2xl mx-auto mb-8 text-base md:text-lg">
          {subTitle}
        </p>
        <CommonGetInTouchBtn />
      </motion.div>
    </section>
  );
}

export default CommonCTA;
