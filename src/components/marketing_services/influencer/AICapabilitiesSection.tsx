import { AspectRatio } from "@/components/ui/aspect-ratio";
import { motion } from "framer-motion";
import { BarChart, FileText, Globe, Link, Search, Shield } from "lucide-react";

export const AICapabilitiesSection = () => {
  return (
    <section className="py-16 md:py-24 ">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 text-center max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          The Social-First <span className="text-beast-purple-light">Agency Powered By Cutting</span>-Edge AI
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-16">
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-beast-purple to-beast-accent opacity-80 blur-3xl -z-10"></div>
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden">
              <AspectRatio ratio={16 / 11} className="bg-white p-4">
                <img
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt="AI platform dashboard"
                  className="rounded-lg object-cover w-full h-full"
                />
              </AspectRatio>
            </div>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-lg md:text-xl mb-6">
              Leverage our proprietary AI-driven platform infused with next-gen
              intelligence to ensure brand safety, maximize campaign
              effectiveness, and scale influencer vetting with precision.
              Empowering brands with trust, transparency, and unmatched
              innovation in the dynamic world of social.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-3">
                <Search className="h-6 w-6 text-beast-600 mt-1 dark:text-beast-400" />
                <div>
                  <h4 className="font-bold text-xl mb-1">
                    Comprehensive Creator Vetting
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Historical scans analyze text, images, videos, audio, and
                    logos across all major platforms, uncovering risks and
                    identifying creators naturally aligned with your brand.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <FileText className="h-6 w-6 text-beast-600 mt-1 dark:text-beast-400" />
                <div>
                  <h4 className="font-bold text-xl mb-1">
                    AI-Enhanced Insights
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Detect unpaid brand mentions, past sponsorships, and organic
                    fans while ensuring precise brand fit.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Shield className="h-6 w-6 text-beast-600 mt-1 dark:text-beast-400" />
                <div>
                  <h4 className="font-bold text-xl mb-1">
                    Customizable Risk Management
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Tailor safety scans to your risk tolerance across 15+
                    categories with multi-lingual support in 35+ languages.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <BarChart className="h-6 w-6 text-beast-600 mt-1 dark:text-beast-400" />
                <div>
                  <h4 className="font-bold text-xl mb-1">
                    Advanced Analytics & Measurement
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Conduct brand lift studies natively and access advanced
                    mixed media models for seamless performance measurement.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Link className="h-6 w-6 text-beast-600 mt-1 dark:text-beast-400" />
                <div>
                  <h4 className="font-bold text-xl mb-1">
                    Integrated Social APIs
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Tap into the highest-level social platform APIs for
                    real-time data, ensuring insights and optimizations are
                    always up-to-date.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Globe className="h-6 w-6 text-beast-600 mt-1 dark:text-beast-400" />
                <div>
                  <h4 className="font-bold text-xl mb-1">
                    Scalable, Social-First Approach
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Classifies creators by topic, style, and age rating to find
                    ideal partners and deliver campaigns at the speed of social.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
