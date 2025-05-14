import { what_we_offer } from "@/constants/navLinks";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

interface ServiceCardProps {
  title: string;
  description?: string;
  imageSrc?: string;
  link: string;
}

const ServiceCard = ({
  title,
  description,
  imageSrc,
  link,
}: ServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="rounded-md min-h-[400px] overflow-hidden shadow-md relative h-full group transition-all duration-300"
      whileHover={{
        y: -5,
        transition: { duration: 0.2 },
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Link to={link} className="block h-full relative">
        {imageSrc && (
          <>
            {/* Make background fill entire card height */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-all duration-300"
              style={{
                backgroundImage: `url(${imageSrc})`,
                filter: "brightness(0.5)",
              }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent text-white z-10">
              {/* Title - moves to top on hover */}
              <motion.h3
                className={`text-2xl sm:text-3xl font-bold transition-all duration-300 ${
                  isHovered ? "mb-4 self-start" : "mt-6"
                }`}
                animate={{
                  y: isHovered ? -140 : 0,
                  scale: isHovered ? 1.05 : 1,
                }}
                transition={{ duration: 0.3 }}
              >
                {title}
              </motion.h3>

              {/* Description & Read More appear on hover */}
              <motion.div
                className="overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: isHovered ? 1 : 0,
                  y: isHovered ? 0 : 20,
                }}
                transition={{ duration: 0.3 }}
              >
                {description && <p className="text-sm mt-2">{description}</p>}
                <div className="mt-4 flex items-center justify-end font-medium text-white">
                  <span>Read More</span>
                  <ArrowRight className="h-4 w-4 ml-2" />
                </div>
              </motion.div>
            </div>
          </>
        )}
      </Link>
    </motion.div>
  );
};

export const WhatWeOffer = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12 text-gradient"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          What We Offer
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {what_we_offer.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
