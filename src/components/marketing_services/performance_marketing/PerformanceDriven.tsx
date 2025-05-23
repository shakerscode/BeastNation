import { motion } from "framer-motion";
import React from "react";

interface ValueItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  isRight?: boolean;
  index: number;
}

const ValueItem = ({
  icon,
  title,
  description,
  isRight,
  index,
}: ValueItemProps) => {
  return (
    <div
      className={`flex flex-col md:flex-row items-center gap-0 md:gap-12 lg:gap-16 py-0 md:py-16 ${
        isRight ? "md:flex-row-reverse" : ""
      }`}
    >
      <motion.div
        className={`w-28 h-28 flex-1 flex-shrink-0 flex items-center ${
          isRight ? "justify-start" : "justify-end"
        } p-6`}
        initial={{ x: isRight ? 100 : -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: index * 0.2 }}
        viewport={{ once: true }}
      >
        {icon}
      </motion.div>
      <div className={`flex-1 flex flex-col ${isRight ? "items-center md:items-end" : "items-center md:items-start"}`}>
        <h3 className="text-2xl md:text-3xl text-white font-bold mb-4">
          {title}
        </h3>
        <p
          className={`text-white/80 text-sm md:text-lg ${
            isRight ? "text-center md:text-end" : "text-center md:text-start"
          }`}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export const PerformanceDriven = ({ data, title }) => {
  return (
    <section className="py-10 md:py-24">
      <div className="px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-0 md:mb-12 md:max-w-3xl mx-auto"
        >
          {title}
        </motion.div>

        <div className="space-y-8 md:space-y-0">
          {data.map((value, index) => (
            <ValueItem
              key={index}
              icon={value.icon}
              title={value.title}
              description={value.description}
              isRight={index % 2 !== 0}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
