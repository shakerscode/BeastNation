import { motion } from "framer-motion";

export const AboutPage = () => {
  return (
    <div className="bg-white dark:bg-black">
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              About TrendyNation
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              TrendyNation is a premier talent management agency connecting
              exceptional creators with leading brands for impactful
              collaborations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <motion.img
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                src="/placeholder.svg"
                alt="Our Mission"
                className="rounded-xl"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Our Mission
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                At TrendyNation, we're dedicated to empowering content creators
                and influencers to build sustainable careers while helping
                brands connect with authentic voices that resonate with their
                target audiences.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                We believe in the power of genuine connections, innovative
                content, and strategic partnerships to drive meaningful
                engagement and results for both creators and brands.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 md:py-16 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Meet Our Team
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Our diverse team of industry professionals brings decades of
              combined experience in talent management, brand partnerships, and
              content creation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: item * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md"
              >
                <div className="aspect-square">
                  <img
                    src="/placeholder.svg"
                    alt="Team Member"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold">John Doe</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Co-Founder & CEO
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
              Our Story
            </h2>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-4 text-gray-700 dark:text-gray-300"
            >
              <p>
                TrendyNation was founded in 2015 with a vision to revolutionize
                the creator economy by providing comprehensive support to
                influencers while delivering exceptional value to brand
                partners.
              </p>
              <p>
                What started as a small agency representing a handful of content
                creators has grown into a global talent management powerhouse
                with offices in Los Angeles, New York, and London.
              </p>
              <p>
                Over the years, we've helped launch the careers of numerous
                content creators and have facilitated partnerships with Fortune
                500 companies and leading consumer brands around the world.
              </p>
              <p>
                Today, TrendyNation represents over 200 creators across various
                platforms and content categories, with a combined reach of more
                than 50 million followers.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 md:py-16 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              These core principles guide everything we do at TrendyNation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl"
            >
              <h3 className="text-xl font-bold mb-3 text-beast-700 dark:text-beast-400">
                Authenticity
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                We believe in fostering genuine connections between creators and
                audiences. We never compromise on authenticity and integrity.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl"
            >
              <h3 className="text-xl font-bold mb-3 text-beast-700 dark:text-beast-400">
                Innovation
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                We constantly push the boundaries of what's possible in digital
                content creation and audience engagement.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl"
            >
              <h3 className="text-xl font-bold mb-3 text-beast-700 dark:text-beast-400">
                Partnership
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                We build long-term relationships based on trust, transparency,
                and mutual success with both our talent and brand partners.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};
