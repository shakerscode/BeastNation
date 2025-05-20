import CommonHeading from "@/components/common/CommonHeading";
import { icons } from "@/constants/fakeOurStory";

import { motion } from "framer-motion"; 

const IntroSection = () => {
  return (
    <section className="py-10 md:py-20">
      <div className="w-full md:container mx-auto">
        <div className="w-full md:max-w-5xl mx-auto mb-4 text-center">
          <CommonHeading
            beforeHighlight="A Global Leader In"
            highlight="Social Media Innovation"
          />
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-sm md:text-lg text-center mb-16 max-w-2xl mx-auto text-white/80"
        >
          We bridge the gap between brands and audiences through data-driven
          creativity and strategic thinking that drives measurable business
          results.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {icons.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true, amount: 0.3 }}
              key={item.title}
              className="flex flex-col items-center text-center p-8 border border-gray-400/40 bg-black/90 shadow-sm animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4">
                <item.icon size={20} className="text-beast-purple-light" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
