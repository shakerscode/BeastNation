import { motion } from "framer-motion";
import { ReactNode } from "react";

interface IPageProps {
  title?: string;
  jsxTitle?: ReactNode;
  description: string;
  description2?: string;
  cardTitle1: string;
  cardPara1: string;
  cardTitle2: string;
  cardPara2: string;
  cardTitle3: string;
  cardPara3: string;
  cardTitle4: string;
  cardPara4: string;
}

export const PlanetMedia = ({
  title,
  jsxTitle,
  description,
  description2,
  cardTitle1,
  cardPara1,
  cardTitle2,
  cardPara2,
  cardTitle3,
  cardPara3,
  cardTitle4,
  cardPara4,
}: IPageProps) => {
  return (
    <section className="md:py-20">
      <div className="md:container mx-auto md:px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            {jsxTitle ? (
              jsxTitle
            ) : (
              <h2 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
                {title}
              </h2>
            )}
            <p className="text-lg text-gray-700 dark:text-gray-300">
              {description}
            </p>
            {description2 && (
              <p className="text-lg text-gray-700 dark:text-gray-300 mt-4">
                {description2}
              </p>
            )}
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
              <h3 className="text-5xl sm:text-6xl font-bold mb-2">
                {cardTitle1}
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                {cardPara1}
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
              <h3 className="text-5xl sm:text-6xl font-bold mb-2">
                {cardTitle2}
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                {cardPara2}
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
              <h3 className="text-5xl sm:text-6xl font-bold mb-2">
                {cardTitle3}
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                {cardPara3}
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
              <h3 className="text-5xl sm:text-6xl font-bold mb-2">
                {cardTitle4}
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                {cardPara4}
              </p>
              <div className="mt-2 h-1 w-full bg-beast-purple-light"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
