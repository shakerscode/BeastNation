import { motion } from "framer-motion";

export const PlanetMedia = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
              Forge Authentic Connections That Drive Trust, Loyalty, And
              Measurable Growth
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Creators are the new global media, shaping consumer trust and
              driving engagement. With over 200M+ professional creators, finding
              the perfect fit for your campaign can feel overwhelming. At Beast
              Nation, we take the guesswork out of influencer marketing. Our
              end-to-end solution identifies, curates, and activates the ideal
              creators to amplify your brand across global markets — ensuring
              impact, efficiency, and measurable success.
            </p>
          </motion.div>

          {/* Right column - Statistics */}
          <div className="grid grid-cols-2 gap-8 lg:gap-12">
            {/* First row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col"
            >
              <h3 className="text-5xl sm:text-6xl font-bold mb-2">$100M+</h3>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Annual creator spend
              </p>
              <div className="mt-2 h-1 w-full bg-beast-purple-light"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col"
            >
              <h3 className="text-5xl sm:text-6xl font-bold mb-2">35+</h3>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Verticals
              </p>
              <div className="mt-2 h-1 w-full bg-beast-purple"></div>
            </motion.div>

            {/* Second row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex flex-col"
            >
              <h3 className="text-5xl sm:text-6xl font-bold mb-2">7X</h3>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Avg ROAs increase
              </p>
              <div className="mt-2 h-1 w-full bg-beast-purple-dark"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col"
            >
              <h3 className="text-5xl sm:text-6xl font-bold mb-2">-42%</h3>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Avg CAC reduction
              </p>
              <div className="mt-2 h-1 w-full bg-beast-purple-light"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
