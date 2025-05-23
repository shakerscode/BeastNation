import { motion } from "framer-motion";

export const PhoneShowcase = ({ title, description, photo }) => {
  return (
    <section className="py-16 md:py-24 overflow-hidden md:min-h-[800px]">
      <div className="px-4 w-full">
        <div className="flex flex-col md:flex-row items-center">
          {/* Content - Left Side */}
          <motion.div
            className="md:w-1/2 mb-10 md:mb-0 pr-0 md:pr-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            {typeof title === "string" ? (
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
                {title}
              </h2>
            ) : (
              title
            )}
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              {description}
            </p>
          </motion.div>

          {/* Image - Right Side */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="absolute -inset-4 md:right-20 rounded-full bg-gradient-to-br from-beast-purple to-beast-accent opacity-40 blur-3xl -z-10"></div>
            {/* Phone Image */}
            <img
              src={photo}
              alt="Smartphone showing interview"
              className="w-full h-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
