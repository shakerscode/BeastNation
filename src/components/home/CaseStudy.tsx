import React from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, MoveRight } from "lucide-react";
import { motion } from "framer-motion";

const CaseStudy = () => {
  return (
    <section id="case-studies" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-beast-accent/20 to-background" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="mb-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true, amount: 0.3 }}
                className="text-beast-purple-light font-medium mb-2"
              >
                FEATURED CASE STUDY
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true, amount: 0.3 }}
                className="text-3xl md:text-5xl font-bold font-display mb-4"
              >
                Transforming <span className="text-gradient">Spotify's</span>{" "}
                <br />
                Influencer Strategy
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true, amount: 0.3 }}
                className="w-20 h-1 bg-primary-gradient rounded-full mb-8"
              ></motion.div>
            </div>

            <div className="space-y-6">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true, amount: 0.3 }}
                className="text-white/80"
              >
                We partnered with Spotify to reimagine their approach to creator
                partnerships, resulting in a 220% increase in engagement and 40%
                growth in premium subscriptions driven by influencer marketing.
              </motion.p>

              <div className="flex flex-wrap gap-6">
                <div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="text-beast-purple-light font-medium"
                  >
                    Challenge
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.4 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="text-white/70"
                  >
                    Connect with Gen Z audiences authentically
                  </motion.div>
                </div>
                <div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.3 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="text-beast-purple-light font-medium"
                  >
                    Solution
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.4 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="text-white/70"
                  >
                    Micro-influencer activation program
                  </motion.div>
                </div>
                <div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.5 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="text-beast-purple-light font-medium"
                  >
                    Result
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.6 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="text-white/70"
                  >
                    220% increase in engagement
                  </motion.div>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.7 }}
                viewport={{ once: true, amount: 0.3 }}
                className="pt-4 flex items-center gap-4"
              >
                <Button className="bg-primary-gradient">
                  View Full Case Study
                  <ExternalLink className="ml-2 h-4 w-4" strokeWidth={2.5} />
                </Button>
                <Button
                  variant="outline"
                  className="group border-white/20 hover:bg-white/10 text-base transition-all ease-in-out duration-300 flex items-center"
                >
                  See More
                  <MoveRight className="ml-2 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1 " />
                </Button>
              </motion.div>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              className="aspect-video overflow-hidden rounded-xl relative group"
            >
              <div className="absolute inset-0 bg-beast-purple/30 z-10 mix-blend-overlay"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/30 z-20"></div>

              <motion.img
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true, amount: 0.3 }}
                src="https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=1200&auto=format"
                alt="Spotify Case Study"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true, amount: 0.3 }}
                className="absolute left-6 bottom-6 z-30"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/800px-Spotify_logo_without_text.svg.png"
                  alt="Spotify"
                  className="w-12 h-12"
                />
              </motion.div>
            </motion.div>

            {/* Decorative elements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true, amount: 0.3 }}
              className="absolute -top-12 -right-12 w-24 h-24 border-2 border-beast-purple-light/30 rounded-full hidden lg:block"
            ></motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
              className="absolute -bottom-8 -left-8 w-16 h-16 border border-beast-purple-light/30 rounded-full hidden lg:block"
            ></motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
