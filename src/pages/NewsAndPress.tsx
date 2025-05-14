import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router";
import useScrollToTop from "@/hooks/useScrollToTop";
import { useEffect } from "react";
import CommonSubHeading from "@/components/common/CommonSubHeading";
import { newsItems } from "@/constants/fakeNews";
 

const NewsAndPress = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", // or "auto"
    });
  }, []);

  return (
    <section className="bg-beast-black pt-40 pb-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <CommonSubHeading subHead="News & Updates" shouldCol />
          <h2 className="text-4xl md:text-5xl font-bold font-display mt-2 mb-4 text-white">
            Stay Ahead of the{" "}
            <span className="text-beast-purple-light">Buzz</span>
          </h2>
          <p className="text-white/70 text-base md:text-lg">
            From headline-worthy campaigns to media coverage, explore how we’re
            shaping the future of influencer marketing.
          </p>
        </div>

        {/* Grid of Articles */}
        <div className="grid md:grid-cols-2 gap-8">
          {newsItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="group cursor-pointer rounded-xl overflow-hidden border border-white hover:border-beast-purple-light transition-all ease-in-out duration-500 h-[500px]"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-2/3 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="p-4 bg-black/80 group-hover:bg-white h-full transition-all ease-in-out duration-500">
                <p className="text-xs text-beast-purple-light  uppercase mb-1">
                  {item.category}
                </p>
                <h3 className="text-lg font-semibold text-white group-hover:text-black/80 mb-2">
                  {item.title}
                </h3>
                <p className="text-white/70 group-hover:text-black/80 text-sm">{item.excerpt}</p>
                <div className="mt-4 flex items-center justify-between text-beast-purple-light">
                  <span className="text-xs">{item.date}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        {/* <div className="text-center mt-12">
          <Link
            to="/resources"
            className="inline-flex items-center gap-2 text-beast-purple-light font-medium hover:underline"
          >
            View All Articles <ArrowRight className="w-4 h-4" />
          </Link>
        </div> */}
      </div>
    </section>
  );
};

export default NewsAndPress;
