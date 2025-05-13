import React, { useState } from "react";
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
  const [activeService, setActiveService] = useState<number | null>(null);

  return (
    <section id="services" className="py-20 relative h-full">
      <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-beast-purple-dark/10 to-transparent -z-10" />
      {/* Gradient  */}
      <div className="-z-20 absolute top-0 -right-20 w-48 md:w-80 h-48 md:h-80 rounded-full bg-beast-purple-dark blur-[100px] animate-pulse-gentle" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex flex-col items-center justify-start gap-2 mb-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-beast-purple-light font-medium uppercase"
          >
            What we offer
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true, amount: 0.3 }}
            className="w-48 h-[2px] bg-beast-purple-light rounded-lg "
          ></motion.div>
        </div>
        <div className="text-center mb-5 md:mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-3xl md:text-5xl font-bold font-display mb-2.5"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#8445ff] to-[#4c0fa1]">
              Services{" "}
            </span>
            That Drive Results
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-white/70 max-w-2xl mx-auto text-base md:text-lg px-2 md:px-0"
          >
            Comprehensive solutions to elevate your brand in the digital
            landscape and creator economy.
          </motion.p>
        </div>

        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
        </div> */}

        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="relative group p-6 rounded-2xl bg-beast-black/30 backdrop-blur-md border border-white/10 hover:shadow-glow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-beast-purple/10 text-beast-purple text-2xl mb-4">
                {service.icon}
              </div>

              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-white/70 mb-4">
                {service.description}
              </p>

              <div className="text-sm font-medium text-beast-purple-light opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Learn More →
              </div>
            </div>
          ))}
        </div>  */}

        {/* <div className="flex flex-wrap justify-center gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative w-56 h-56 transform rotate-45 bg-white shadow-xl group hover:scale-105 transition-all"
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 transform -rotate-45">
                <div className="text-3xl text-beast-500 mb-2">
                  {service.icon}
                </div>
                <h3 className="font-bold text-lg text-beast-800">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  {service.description}
                </p>
                <div className="mt-2 text-beast-700 text-sm font-medium hover:underline">
                  Learn More →
                </div>
              </div>
            </div>
          ))}
        </div> */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const isActive = activeService === index;

            return (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true, amount: 0.3 }}
                key={index}
                className={`
                  group relative cursor-pointer bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl transform transition-all duration-300
                  hover:shadow-lg hover:shadow-[#8445ff]/20 hover:-translate-y-1
                  ${
                    isActive
                      ? "shadow-lg shadow-[#8445ff]/20 -translate-y-1"
                      : ""
                  }
                  border border-transparent hover:border-[#8445ff]/20
                `}
                onMouseEnter={() => setActiveService(index)}
                onMouseLeave={() => setActiveService(null)}
              >
                {/* Diamond Background Shape */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#8445ff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 rounded-xl"></div>

                {/* Service Content */}
                <div className="mb-4">
                  <div className="w-12 h-12 text-beast-purple-light rounded-lg bg-gray-800 flex items-center justify-center transform transition-transform duration-300 group-hover:rotate-12">
                    {service.icon}
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-400 mb-6 text-sm md:text-base">{service.description}</p>

                <Button variant="ghost" className="text-[#8445ff]">
                  Learn More →
                </Button>

                {/* Animated Border */}
                <span
                  className={`
                    absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#8445ff] to-[#4c0fa1] rounded-full transition-all duration-500 ease-out
                    ${isActive ? "w-full" : "w-0"}
                  `}
                ></span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
