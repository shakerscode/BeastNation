import { content } from "@/constants/fakeContent";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import CommonSubHeading from "../common/CommonSubHeading";

const FeaturedContent = () => {
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [scrollRange, setScrollRange] = useState({ top: 0, height: 0 });

  useEffect(() => {
    const updateScrollRange = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const top = window.scrollY + rect.top;
      const height = window.innerHeight;
      setScrollRange({ top, height });
    };

    updateScrollRange();
    window.addEventListener("resize", updateScrollRange);
    return () => {
      window.removeEventListener("resize", updateScrollRange);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !innerRef.current) return;

      const { top, height } = scrollRange;
      const scrollY = window.scrollY + window.innerHeight / 2;
      const progress = Math.min(Math.max((scrollY - top) / height, 0), 1);

      const maxScroll =
        innerRef.current.scrollHeight - containerRef.current.clientHeight;

      innerRef.current.scrollTop = maxScroll * progress;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollRange]);

  return (
    <div className="py-20">
      <div className="mb-6 flex items-end justify-between max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="text-start">
          <CommonSubHeading subHead="Press & Media" />
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-3xl md:text-5xl font-bold font-display mb-1.5 md:mb-4"
          >
            Latest{" "}
            <span className="text-beast-purple-light">
              Buzz & Breakthroughs
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-white/70 max-w-xl md:max-w-2xl text-base md:text-lg"
          >
            Dive into our most talked-about press features, product launches,
            and media moments that are shaping the future of the creator
            economy.
          </motion.p>
        </div>
        <motion.div
          onClick={() => navigate("/resources/news-and-press")}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="w-fit md:flex items-center hidden gap-2 cursor-pointer hover:text-beast-purple-light duration-300 transition-all ease-in-out text-base font-medium"
        >
          <span className="whitespace-nowrap text-sm md:text-base">
            View All
          </span>
          <ArrowRight className="w-4 md:w-6 h-4 md:h-6" />
        </motion.div>
      </div>

      <div
        ref={containerRef}
        className="h-[600px] overflow-hidden relative max-w-7xl 2xl:max-w-[1536px] mx-auto"
        id="content"
      >
        <motion.div
          onClick={() => navigate("/resources/news-and-press")}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="w-fit ml-auto flex items-center mb-5 md:mb-8 mr-4 md:hidden gap-2 cursor-pointer hover:text-beast-purple-light duration-300 transition-all ease-in-out text-base font-medium"
        >
          <span className="whitespace-nowrap text-sm md:text-base">
            View All
          </span>
          <ArrowRight className="w-4 md:w-6 h-4 md:h-6" />
        </motion.div>
        <div
          ref={innerRef}
          className="scroll-inner overflow-y-auto h-full flex flex-col gap-4"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 h-[600px] overflow-y-scroll px-4 md:px-8 scrollbar-hidden">
            {content.map((data, i) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
                key={data.id}
                className="glass-dark bg-black/30 group relative cursor-pointer overflow-hidden rounded-xl h-[300px] md:h-[400px]"
                onClick={() => navigate("/resources/news-and-press/trendynation-announces-strategic-partnership-with-tiktok-stars")}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={data.thumbnail}
                    alt={data.title}
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="flex justify-between items-center ">
                    <div>
                      <h3 className="font-medium text-lg">{data.title}</h3>
                      <p className="text-sm font-medium text-beast-purple-light">
                        {data.creator}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedContent;
