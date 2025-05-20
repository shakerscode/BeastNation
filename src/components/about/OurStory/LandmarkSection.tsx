import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CommonHeading from "@/components/common/CommonHeading";

const LandmarkSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const timelineItems = [
    {
      year: "2010",
      title: "Agency Founded",
      description: "Started with a team of 5 in New York",
      image:
        "https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg",
      detailedTitle: "The Origin Story",
      detailedDesc:
        "In a small Brooklyn loft, five visionaries came together to build something extraordinary. That spark of ambition laid the foundation for everything to come.",
    },
    {
      year: "2013",
      title: "First Major Campaign",
      description: "Award-winning work for global tech brand",
      image:
        "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
      detailedTitle: "Breakthrough Moment",
      detailedDesc:
        "Our collaboration with a global tech brand marked our rise — creative that connected, and results that impressed the industry.",
    },
    {
      year: "2016",
      title: "European Expansion",
      description: "Opened offices in London and Berlin",
      image:
        "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
      detailedTitle: "Crossing Borders",
      detailedDesc:
        "With strategic offices in London and Berlin, we embraced the European market, expanding our global reach and diversifying our creative edge.",
    },
    {
      year: "2018",
      title: "Asian Presence",
      description: "New headquarters in Singapore",
      image:
        "https://images.pexels.com/photos/3183173/pexels-photo-3183173.jpeg",
      detailedTitle: "Touching Asia",
      detailedDesc:
        "Singapore became our Asian anchor, enabling culturally tuned campaigns and deeper connections across Southeast Asia.",
    },
    {
      year: "2021",
      title: "Innovation Lab",
      description: "Launched AI-driven creative studio",
      image:
        "https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg",
      detailedTitle: "Where AI Meets Art",
      detailedDesc:
        "We launched our Innovation Lab to explore the intersection of creativity and artificial intelligence — leading a new wave of tech-first storytelling.",
    },
    {
      year: "2023",
      title: "Industry Recognition",
      description: "Agency of the Year at Cannes Lions",
      image:
        "https://images.pexels.com/photos/3171837/pexels-photo-3171837.jpeg",
      detailedTitle: "Crowned at Cannes",
      detailedDesc:
        "Earning the Cannes Lions Grand Prix was more than an honor — it was a testament to our team’s relentless pursuit of excellence and innovation.",
    },
  ];

  // Auto-slide every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % timelineItems.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const activeItem = timelineItems[activeIndex];

  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto">
        <div className="mb-4">
          <CommonHeading
            beforeHighlight="Landmark"
            highlight="Moments"
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
            <div className="relative bg-gray-100 shadow-xl rounded-xl overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                >
                  <img
                    src={activeItem.image}
                    alt={activeItem.detailedTitle}
                    className="w-full max-h-96 h-full object-cover"
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
