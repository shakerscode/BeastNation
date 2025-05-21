import { motion } from "framer-motion";
import React from "react";

interface ServiceItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const ServiceItem = ({
  icon,
  title,
  description,
  delay = 0,
}: ServiceItemProps) => {
  return (
    <motion.div
      className="flex flex-col items-start"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <div className="text-beast-purple-dark mb-4">
        <div className="w-16 h-16 flex items-center justify-center border-2 border-beast-purple-light text-beast-purple-light rounded-md ">
          {icon}
        </div>
      </div>
      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </motion.div>
  );
};

export const ServicesShowcaseSection = ({ services }) => {
  return (
    <section className="py-16 md:py-24">
      <div className="px-4">
        <motion.div
          className={`grid grid-cols-1 md:grid-cols-2 ${
            services.length >= 4 && "lg:grid-cols-4"
          } ${services.length == 3 && "lg:grid-cols-3"} ${
            services.length <= 2 && "lg:grid-cols-2"
          } gap-10 md:gap-6 lg:gap-8`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <ServiceItem
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={index * 0.1}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};
