import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { services } from "@/constants/fakeService";
import CommonSubHeading from "../common/CommonSubHeading";

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 relative h-full">
      <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-beast-purple-dark/10 to-transparent -z-10" />
      {/* Gradient  */}
      <div className="-z-20 absolute top-0 -right-20 w-48 md:w-80 h-48 md:h-80 rounded-full bg-beast-purple-dark blur-[100px] animate-pulse-gentle" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <CommonSubHeading subHead=" What we offer" shouldCol />
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.3 }}
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
