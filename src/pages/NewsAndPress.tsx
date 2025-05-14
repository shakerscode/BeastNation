import { ArrowRight } from "lucide-react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Link } from "react-router";
import useScrollToTop from "@/hooks/useScrollToTop";
import { useEffect, useRef } from "react";
import CommonSubHeading from "@/components/common/CommonSubHeading";
import { newsItems } from "@/constants/fakeNews";

const useAnimationTrigger = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  return controls;
};

const NewsAndPress = () => {
  return (
    <section className="bg-beast-black pt-32 md:pt-40 pb-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <CommonSubHeading subHead="News & Updates" shouldCol />
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold font-display mt-2 mb-4 text-white"
          >
            Stay Ahead of the{" "}
            <span className="text-beast-purple-light">Buzz</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
            className="text-white/70 text-base md:text-lg"
          >
            From headline-worthy campaigns to media coverage, explore how we're
            shaping the future of influencer marketing.
          </motion.p>
        </div>

        {/* Grid of Articles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {newsItems.map((item, i) => (
            <div
              key={i}
              className="group cursor-pointer rounded-xl overflow-hidden border border-white hover:border-beast-purple-light transition-all ease-in-out duration-500"
            >
              <div className="aspect-[3/2] w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Text Content */}
              <div className="flex flex-col justify-between overflow-hidden p-4 h-[210px] md:h-[180px] transition-all duration-500  group-hover:bg-white">
                <div>
                  <p className="text-xs text-beast-purple-light font-display font-semibold uppercase mb-1">
                    {item.category}
                  </p>
                  <h3 className="text-lg font-semibold text-white group-hover:text-black/80 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/70 group-hover:text-black/80">
                    {item.excerpt}
                  </p>
                </div>

                <div className="flex justify-between items-center text-beast-purple-light">
                  <span className="text-xs">{item.date}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default NewsAndPress;
