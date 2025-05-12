import React from "react";
import { Button } from "@/components/ui/button";
import {
  Sparkles,
  Megaphone,
  TrendingUp,
  BarChart,
  Users,
  Lightbulb,
} from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: <Sparkles className="h-8 w-8" />,
    title: "AI Brand Analysis",
    description:
      "Leverage machine learning to understand your brand perception and optimize strategy.",
  },
  {
    icon: <Megaphone className="h-8 w-8" />,
    title: "Influencer Campaigns",
    description:
      "Strategic partnerships with creators who authentically connect with your audience.",
  },
  {
    icon: <TrendingUp className="h-8 w-8" />,
    title: "Growth Strategy",
    description:
      "Data-driven approaches to scale your brand presence across platforms.",
  },
  {
    icon: <BarChart className="h-8 w-8" />,
    title: "Performance Marketing",
    description:
      "Targeted campaigns with measurable results and transparent reporting.",
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Talent Management",
    description:
      "End-to-end creator support from contract negotiation to content strategy.",
  },
  {
    icon: <Lightbulb className="h-8 w-8" />,
    title: "Creative Production",
    description:
      "High-quality content creation tailored to your brand and audience.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 relative">
      <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-beast-purple-dark/10 to-transparent -z-10" />
      {/* Gradient  */}
      <div className="-z-20 absolute top-0 -right-20 w-48 md:w-80 h-48 md:h-80 rounded-full bg-beast-purple-dark blur-[100px] animate-pulse-gentle" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-xl md:text-5xl font-bold font-display mb-2.5"
          >
            Our <span className="text-gradient">Services</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-white/70 max-w-2xl mx-auto"
          >
            Comprehensive solutions to elevate your brand in the digital
            landscape and creator economy.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              key={index}
              className="hexagon-container group"
            >
              <div className="glass p-8 border border-white/10 transition-all duration-300 group-hover:shadow-glow group-hover:border-beast-purple-light/40 h-full flex flex-col">
                <div className="mb-6 p-3 rounded-lg bg-white/5 w-fit text-beast-purple-light">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-white/70 flex-grow">{service.description}</p>
                <div className="mt-6">
                  <Button
                    variant="ghost"
                    className="p-0 hover:bg-transparent hover:text-beast-purple-light"
                  >
                    Learn More →
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
