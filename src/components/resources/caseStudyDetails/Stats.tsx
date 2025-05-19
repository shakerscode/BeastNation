import CountUp from "@/components/common/CountUp";
import { formatWithSuffix, parseMetricValue } from "@/lib/utils";
import React, { useEffect, useRef } from "react";

const StatsStrip = ({ metrics }) => {
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in-visible");
        }
      },
      { threshold: 0.1 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  return (
    <section className="max-w-5xl mx-auto py-10">
      <div className="container-wide">
        <div
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-5 gap-8 fade-in-scroll"
        >
          {Object.entries(metrics).map(([key, rawValue], index) => {
            const targetValue = parseMetricValue(rawValue as string);
            return (
              <div
                key={index}
                className="text-center"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-2xl md:text-5xl font-display font-bold text-black mb-2">
                  <CountUp
                    to={targetValue}
                    formatter={(val) =>
                      formatWithSuffix(val, rawValue as string)
                    }
                  />
                </div>
                <div className="text-sm text-gray-600 uppercase font-medium tracking-wider">
                  {key}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsStrip;
