import { motion } from "framer-motion";

export const BlogSubFooter = () => {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 bg-black">
      <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Text Content */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-4xl font-bold mb-4"
          >
            The Largest Creator Agency in the World
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg mb-6"
          >
            Elevate your brand’s influence with award-winning, always-on
            marketing services.
          </motion.p>

          <motion.a
            href="#contact"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="inline-block bg-beast-purple hover:bg-beast-purple-dark font-semibold px-6 py-3 rounded-md shadow-lg"
          >
            Work With Us
          </motion.a>
        </div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-full flex justify-center lg:justify-end"
        >
          <img
            src="/img/marketing_services/kids-and-family.png"
            alt="Happy family on a bed"
            className="w-full max-w-md rounded-lg object-cover shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
};
