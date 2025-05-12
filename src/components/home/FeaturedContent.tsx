import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, X } from "lucide-react";

// Sample video data
const videos = [
  {
    id: 1,
    title: "Viral Campaign Strategy",
    creator: "Emma Johnson",
    thumbnail:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format",
    views: "1.2M",
    duration: "3:45",
  },
  {
    id: 2,
    title: "Influencer Marketing Secrets",
    creator: "Alex Thompson",
    thumbnail:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=800&auto=format",
    views: "875K",
    duration: "5:12",
  },
  {
    id: 3,
    title: "Building Your Creator Brand",
    creator: "Sara Williams",
    thumbnail:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format",
    views: "1.5M",
    duration: "4:30",
  },
  {
    id: 4,
    title: "Social Media Analytics Mastery",
    creator: "Mark Davis",
    thumbnail:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format",
    views: "950K",
    duration: "6:18",
  },
  {
    id: 5,
    title: "Content Creation Workshop",
    creator: "Priya Sharma",
    thumbnail:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format",
    views: "720K",
    duration: "8:45",
  },
  {
    id: 6,
    title: "TikTok Growth Hacking",
    creator: "James Wilson",
    thumbnail:
      "https://www.mediamister.com/blog/wp-content/uploads/2022/02/How-to-Grow-Your-TikTok-Account-Fast.jpg",
    views: "2.1M",
    duration: "4:55",
  },
];

const FeaturedContent = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [scrollRange, setScrollRange] = useState({ top: 0, height: 0 });

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

    const updateScrollRange = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const top = window.scrollY + rect.top;
      const height = window.innerHeight;
      setScrollRange({ top, height });
    };

    updateScrollRange();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", updateScrollRange);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateScrollRange);
    };
  }, [scrollRange]);

  return (
    <div className="py-20">
      <div className="mb-12 flex items-start md:items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="text-start">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-xl md:text-5xl font-bold font-display mb-1.5 md:mb-4"
          >
            Featured <span className="text-gradient">Content</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-white/70 max-w-xl md:max-w-2xl text-sm md:text-base"
          >
            Explore our most popular videos showcasing the latest trends,
            insights, and success stories in the creator economy.{" "}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex items-center gap-2 cursor-pointer hover:text-beast-purple-light duration-300 transition-all ease-in-out text-base font-medium"
        >
          <span className="whitespace-nowrap text-sm md:text-base">View All</span>
          <ArrowRight className="w-4 md:w-6 h-4 md:h-6" />
        </motion.div>
      </div>

      <div
        ref={containerRef}
        className="h-[600px] overflow-hidden relative"
        id="content"
      >
        <div
          ref={innerRef}
          className="scroll-inner overflow-y-auto h-full flex flex-col gap-4"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 h-[600px] overflow-y-scroll px-4 md:px-28 lg:px-[140px] scrollbar-hidden">
            {videos.map((video, i) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
                key={video.id}
                className="glass-dark bg-black/30 group relative cursor-pointer overflow-hidden rounded-xl h-[400px]"
                // onClick={() => setSelectedVideo(video.id)}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="flex justify-between items-center ">
                    <div>
                      <h3 className="font-medium text-lg">{video.title}</h3>
                      <p className="text-sm font-medium text-beast-purple-light">
                        {video.creator}
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
