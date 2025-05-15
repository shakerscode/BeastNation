import { motion } from "framer-motion";
import {
  BarChart,
  Globe,
  MessageSquare,
  Shield,
  TrendingUp,
  Users,
} from "lucide-react";

export const AgencyValueSection = () => {
  return (
    <section className="py-16 md:py-24 text-white">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          The Influencer Agency Built For Marketers Seeking Measurable Growth
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl mb-12 max-w-4xl mx-auto text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          More than an award-winning influencer marketing agency — we're your
          enterprise partner for scaling creator-led marketing campaigns from
          strategy to execution. We combine cutting-edge technology, deep
          analytics, and industry-leading expertise to deliver campaigns that
          drive measurable ROI and build lasting brand equity.
        </motion.p>

        <motion.h3
          className="text-2xl font-bold mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          Why Our Partners Choose Beast Nation:
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-beast-purple to-beast-accent opacity-80 blur-3xl -z-10"></div>
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex items-start space-x-3">
              <Users className="h-6 w-6 text-beast-400 mt-1" />
              <div>
                <h4 className="font-bold text-xl mb-2">
                  Curated Talent for Every Objective
                </h4>
                <p className="text-gray-300">
                  Effortlessly engage micro to mega influencers strategically
                  aligned with your brand and goals.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <BarChart className="h-6 w-6 text-beast-400 mt-1" />
              <div>
                <h4 className="font-bold text-xl mb-2">
                  Data-Driven Attribution
                </h4>
                <p className="text-gray-300">
                  Advanced analytics and reporting, providing performance with
                  actionable insights and transparent ROI attribution.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <MessageSquare className="h-6 w-6 text-beast-400 mt-1" />
              <div>
                <h4 className="font-bold text-xl mb-2">
                  Multi-Channel Expertise
                </h4>
                <p className="text-gray-300">
                  Specialized knowledge in leveraging influencers across all
                  platforms for maximum impact.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-start space-x-3">
              <Shield className="h-6 w-6 text-beast-400 mt-1" />
              <div>
                <h4 className="font-bold text-xl mb-2">
                  Custom Campaign Scalability
                </h4>
                <p className="text-gray-300">
                  From micro-targeted initiatives to global rollouts, we adapt
                  to meet the needs of brands with diverse goals.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <TrendingUp className="h-6 w-6 text-beast-400 mt-1" />
              <div>
                <h4 className="font-bold text-xl mb-2">
                  Scalable Ambassador Programs
                </h4>
                <p className="text-gray-300">
                  Fully managed services and tech-driven solutions designed for
                  ROI.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <BarChart className="h-6 w-6 text-beast-400 mt-1" />
              <div>
                <h4 className="font-bold text-xl mb-2">
                  Proprietary AI-driven Insights
                </h4>
                <p className="text-gray-300">
                  Advanced AI tools with human expertise to identify
                  top-performing creators, predict campaign outcome, and
                  optimize in real-time.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-start space-x-3">
              <Users className="h-6 w-6 text-beast-400 mt-1" />
              <div>
                <h4 className="font-bold text-xl mb-2">
                  Access to Exclusive Talent Pools
                </h4>
                <p className="text-gray-300">
                  Expansive network of vetted creators, ensuring access to
                  influencers who align with your brand's values and audience.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Globe className="h-6 w-6 text-beast-400 mt-1" />
              <div>
                <h4 className="font-bold text-xl mb-2">
                  Global Reach, Local Impact
                </h4>
                <p className="text-gray-300">
                  Trusted by Fortune 500 companies to deliver measurable ROI
                  with culturally tailored influencer marketing campaigns, in
                  30+ countries.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Shield className="h-6 w-6 text-beast-400 mt-1" />
              <div>
                <h4 className="font-bold text-xl mb-2">
                  Full Compliance and Brand Safety
                </h4>
                <p className="text-gray-300">
                  All partnerships adhere to regulatory guidelines, protecting
                  from legal or reputational risks. Patented social media
                  monitoring and talent verification.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
