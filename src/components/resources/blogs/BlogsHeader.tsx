import CommonSubHeading from "@/components/common/CommonSubHeading";
import PlaybookCTA from "@/components/common/PlaybookCTA";
import { motion } from "framer-motion";
import { useLocation } from "react-router";

function BlogsHeader() {
  const { pathname } = useLocation();

  // Filter lists based on search query
  const isBlogPage = pathname === "/resources/blogs";

  return (
    <section className="pt-32 md:pt-36 px-4 md:px-0">
      <CommonSubHeading subHead={isBlogPage ? "Our Blog" : "Our Influence's"} />
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl font-bold font-display mb-4 max-w-6xl"
      >
        The <span className="text-beast-purple-light">Trendy Nation {" "}</span>
        {isBlogPage ? "Blog" : "Influencer List"}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-sm md:text-lg mb-6 max-w-3xl"
      >
        Stay ahead with expert insights, creator-driven strategies, and the
        latest trends shaping the future of influencer marketing and the digital
        creator economy.
      </motion.p>
      <div className="px-4 md:px-12 md:py-6 "></div>
      <PlaybookCTA />
    </section>
  );
}

export default BlogsHeader;
