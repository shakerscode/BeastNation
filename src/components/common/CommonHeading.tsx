import { motion } from "framer-motion";

type CommonHeadingProps = {
  beforeHighlight: string;
  highlight?: string;
  afterHighlight?: string;
  lineBreakAfterHighlight?: boolean;
};

function CommonHeading({
  beforeHighlight,
  highlight,
  afterHighlight,
  lineBreakAfterHighlight = true,
}: CommonHeadingProps) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      viewport={{ once: true, amount: 0.3 }}
      className="text-3xl md:text-5xl font-bold font-display"
    >
      {beforeHighlight}{" "}
      <span className="text-beast-purple-light">{highlight}</span>{" "}
      {lineBreakAfterHighlight && <br />}
      {afterHighlight}
    </motion.h2>
  );
}

export default CommonHeading;
