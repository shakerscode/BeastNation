import { motion } from "framer-motion";
import { ChartAreaIcon, FileText, Globe, PuzzleIcon } from "lucide-react";
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
      <div className="text-beast-500 mb-4">
        <div className="w-16 h-16 flex items-center justify-center border-2 border-beast-500 rounded-md">
          {icon}
        </div>
      </div>
      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </motion.div>
  );
};

export const ServicesShowcaseSection = () => {
  const services = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Growth Consulting",
      description:
        "Drive continuous growth with the expert insights and experience that comes from powering the world's biggest brands.",
    },
    {
      icon: <PuzzleIcon className="w-8 h-8" />,
      title: "Always-on Content",
      description:
        "Deliver high volume, lo-fi social content with our award-winning marketing services team and exclusive access to our industry-leading talent roster.",
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Campaign Execution",
      description:
        "Unlock end-to-end campaign management, from ideation and strategy to execution and measurement, all under one roof.",
    },
    {
      icon: <ChartAreaIcon className="w-8 h-8" />,
      title: "Reporting & Analytics",
      description:
        "Tap into AI-powered analytics tools to help you analyze, optimize, and scale your data-driven decision making.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-6 lg:gap-8"
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
