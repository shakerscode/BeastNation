import { motion } from "framer-motion";
import { ChartBar, Check, Cloud, Shield, Zap } from "lucide-react";

const features = [
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Brand Protection",
    description:
      "Advanced AI monitoring to protect your brand reputation online.",
  },
  {
    icon: <ChartBar className="h-6 w-6" />,
    title: "Analytics Dashboard",
    description:
      "Real-time data visualization of campaign performance and ROI.",
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Creator Matching",
    description:
      "AI-powered algorithm to find perfect creator matches for your brand.",
  },
  {
    icon: <Cloud className="h-6 w-6" />,
    title: "Cloud Integration",
    description:
      "Seamless integration with your existing marketing tools and platforms.",
  },
];

const ProductFeatures = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-beast-accent/10 to-transparent -z-10" />

      <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Product Features List */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-white/80 mb-4"
            >
              <Shield className="w-4 h-4 mr-2 text-beast-purple-light" />
              <span>Brand Management Platform</span>
            </motion.div>

            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true, amount: 0.3 }}
                className="text-3xl md:text-5xl font-bold font-display mb-2.5 w-full leading-tight whitespace-nowrap"
              >
                Reputation Management
              </motion.h2>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true, amount: 0.3 }}
                className="text-3xl md:text-5xl font-bold font-display pb-4 w-full text-beast-purple-light "
              >
                Reimagined
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-white/70 mb-8 text-base md:text-lg"
            >
              Our AI-powered reputation management platform monitors, analyzes,
              and protects your brand across the digital landscape, ensuring
              consistent positive presence.
            </motion.p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.5 }}
                  viewport={{ once: true, amount: 0.3 }}
                  key={index}
                  className="flex items-start"
                >
                  <div className="mr-4 mt-1 p-1.5 rounded-full bg-beast-purple-light/20 text-beast-purple-light">
                    <Check className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1 flex items-center">
                      {feature.icon}
                      <span className="ml-2">{feature.title}</span>
                    </h3>
                    <p className="text-white/70">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: UI Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative"
          >
            {/* Main device frame */}
            <div className="glass p-2 rounded-2xl shadow-glow border border-white/20 relative z-20">
              <div className="rounded-xl overflow-hidden border border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format"
                  alt="Dashboard UI"
                  className="w-full"
                />
              </div>
            </div>

            {/* Secondary device */}
            <div className="absolute -bottom-4 -left-12 w-48 glass p-2 rounded-xl shadow-glow border border-white/20 z-10 hidden md:block">
              <div className="rounded-lg overflow-hidden border border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=400&auto=format"
                  alt="Mobile UI"
                  className="w-full"
                />
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] rounded-full border border-beast-purple-light/10 z-0"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full border border-beast-purple-light/20 z-0"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] rounded-full border border-beast-purple-light/30 z-0"></div>

            {/* Floating badges */}
            <div className="absolute top-12 -right-8 glass px-3 py-1 rounded-full border border-white/20 text-sm animate-float shadow-glow z-30 hidden md:block">
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-green-400 mr-2"></div>
                <span>Active Protection</span>
              </div>
            </div>
            <div
              className="absolute -bottom-8 right-20 glass px-3 py-1 rounded-full border border-white/20 text-sm animate-float shadow-glow z-30 hidden md:block"
              style={{ animationDelay: "1s" }}
            >
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-beast-purple-light mr-2"></div>
                <span>AI Analysis</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductFeatures;
