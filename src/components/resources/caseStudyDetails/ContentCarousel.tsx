import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface VideoItem {
  embedUrl: string;
  creator: string;
  contentUrl: string;
}

const ContentCarousel = ({ videoItems }: { videoItems: VideoItem[] }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in-visible");
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? videoItems.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === videoItems.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (carouselRef.current && cardRef.current) {
      const cardWidth = cardRef.current.offsetWidth + 16; // 16px = tailwind gap-4
      carouselRef.current.scrollTo({
        left: activeIndex * cardWidth,
        behavior: "smooth",
      });
    }
  }, [activeIndex]);

  return (
    <section className="bg-black text-white" ref={sectionRef}>
      <div className="container-wide fade-in-scroll">
        <div className="flex justify-between items-center mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl font-bold font-display"
          >
            Creator Content
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex space-x-4"
          >
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-white text-white hover:bg-white hover:text-black"
              onClick={handlePrev}
              disabled={activeIndex === 0}
            >
              <ArrowLeft size={20} />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-white text-white hover:bg-white hover:text-black"
              onClick={handleNext}
              disabled={activeIndex === videoItems.length - 1}
            >
              <ArrowRight size={20} />
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="relative overflow-x-auto scrollbar-hidden"
          ref={carouselRef}
        >
          <div className="flex space-x-4 pb-6">
            {videoItems.map((video, index) => (
              <div
                key={index}
                ref={index === 0 ? cardRef : null}
                className="flex-none w-[325px]"
              >
                <div className="relative bg-white rounded-lg overflow-hidden h-[550px] border border-gray-300 group pointer-events-none">
                  <iframe
                    src={video.embedUrl}
                    width="100%"
                    height="600"
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
                    allowFullScreen
                    className="w-full rounded-lg"
                  />
                  <div className="absolute inset-0 bg-transparent z-10"></div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="flex justify-center mt-8">
          {videoItems.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 mx-1 rounded-full ${
                index === activeIndex ? "bg-beast-purple-light" : "bg-gray-300"
              }`}
              onClick={() => setActiveIndex(index)}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentCarousel;
