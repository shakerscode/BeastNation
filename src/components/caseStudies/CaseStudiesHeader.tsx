import CommonSubHeading from "../common/CommonSubHeading";
import PlaybookCTA from "../common/PlaybookCTA";
import { motion } from "framer-motion";

function CaseStudiesHeader(props) {
  return (
    <section className="pt-20 md:pt-36">
      <CommonSubHeading subHead="Our Work" />
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl font-bold font-display mb-4 max-w-6xl"
      >
        Campaigns That{" "}
        <span className="text-beast-purple-light">
          Move Culture, Spark Conversations
        </span>{" "}
        & Deliver Results
      </motion.h1>
      <p className="text-sm md:text-lg mb-6 max-w-3xl">
        Explore our case studies to see how we’ve helped industry leaders to
        connect with their audiences, break into new platforms, and dominate the
        digital space.
      </p>
      <div className="px-4 md:px-12 py-6 "></div>
      <PlaybookCTA />
    </section>
  );
}

export default CaseStudiesHeader;
