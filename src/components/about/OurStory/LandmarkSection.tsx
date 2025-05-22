import CommonHeading from "@/components/common/CommonHeading";
import { timelineItems } from "@/constants/fakeOurStory";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const LandmarkSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-slide every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % timelineItems.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const activeItem = timelineItems[activeIndex];

  return (
    <section className="py-10 md:py-20">
      <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto">
        <div className="mb-4">
          <CommonHeading
            beforeHighlight="Landmark "
            highlight="Moments "
            afterHighlight="in Our Journey"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col lg:flex-row gap-12 items-start mt-8"
        >
          {/* Left Panel: Portrait & Details */}
          <div className="w-full lg:w-1/2">
            <div className="relative shadow-xl max-h-[520px] h-full overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="max-h-[450px]"
                >
                  <img
                    src={activeItem.image}
                    alt={activeItem.detailedTitle}
                    className="w-full max-h-[450px] h-full object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-2xl md:text-3xl font-bold text-black mb-2">
                      {activeItem.detailedTitle}
                    </h3>
                    <p className="text-black">{activeItem.detailedDesc}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Right Panel: Timeline Years */}
          <div className="w-full lg:w-1/2">
            <div className="space-y-8">
              {timelineItems.map((item, index) => (
                <div
                  key={item.year}
                  className={`flex gap-6 cursor-pointer transition-all duration-300 ${
                    activeIndex === index
                      ? "opacity-100"
                      : "opacity-60 hover:opacity-90"
                  }`}
                  onClick={() => setActiveIndex(index)}
                  onMouseEnter={() => setActiveIndex(index)}
                >
                  <div className="w-16 shrink-0 pt-1">
                    <span className="text-xl font-bold text-brand-red">
                      {item.year}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-1">{item.title}</h4>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LandmarkSection;
