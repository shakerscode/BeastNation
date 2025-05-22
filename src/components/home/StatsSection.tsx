import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 500, suffix: "+", label: "Successful Campaigns" },
  { value: 10, suffix: "M+", label: "Creator Reach" },
  { value: 150, suffix: "+", label: "Global Brands" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
];

// Animation function for counting up
const CountUp = ({ end, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const step = end / 30;
    const timer = setInterval(() => {
      start += step;
      if (start > end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, duration / 30);

    return () => clearInterval(timer);
  }, [end, duration, isVisible]);

  return (
    <span ref={countRef}>
      {count}
      {suffix}
    </span>
  );
};

const StatsSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-beast-accent/20" />

      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-background to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent" />

      {/* Abstract shape */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-beast-purple-dark opacity-10 blur-[100px]" />

      <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.3 }}
              viewport={{ once: true, amount: 0.2 }}
              key={index}
              className="glass p-8 rounded-2xl relative group transition-all duration-500 hover:shadow-glow cursor-pointer"
            >
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="h-5 w-5 text-beast-purple-light" />
              </div>
              <h3 className="text-4xl md:text-5xl font-bold font-display mb-2">
                <CountUp end={stat.value} suffix={stat.suffix} />
              </h3>
              <p className="text-white/70">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
