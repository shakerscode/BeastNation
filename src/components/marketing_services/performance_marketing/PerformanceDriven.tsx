import { performanceDrivenData } from "@/utils/fakeData";
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
      className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-16 py-12 md:py-16 ${
        isRight ? "md:flex-row-reverse" : ""
      }`}
    >
      <motion.div
        className={`w-32 h-32 flex-1 flex-shrink-0 flex items-center ${
          isRight ? "justify-start" : "justify-end"
        } p-6`}
        initial={{ x: isRight ? 100 : -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: index * 0.2 }}
        viewport={{ once: true }}
      >
        {icon}
      </motion.div>
      <div className={`flex-1 flex flex-col ${isRight ? "items-end" : ""}`}>
        <h3 className="text-2xl md:text-3xl font-bold mb-4">{title}</h3>
        <p
          className={`text-gray-600 dark:text-gray-400 text-lg ${
            isRight ? "text-end" : "text-start"
          }`}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export const PerformanceDriven = () => {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Performance-Driven And Social-First
          </h2>
        </motion.div>

        <div className="space-y-8 md:space-y-0">
          {performanceDrivenData.map((value, index) => (
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
