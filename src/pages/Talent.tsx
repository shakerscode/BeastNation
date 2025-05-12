import { talentService } from "@/api/talentService";
import { TalentCard } from "@/components/talent/TalentCard";
import { Button } from "@/components/ui/button";
import { useTalentStore } from "@/store/useTalentStore";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { Link } from "react-router";

export const Talent = () => {
  const { talents, setTalents, setLoading } = useTalentStore();

  useEffect(() => {
    const loadTalents = async () => {
      setLoading(true);
      try {
        const data = await talentService.fetchTalents();
        setTalents(data);
      } catch (error) {
        console.error("Failed to fetch talents:", error);
      } finally {
        setLoading(false);
      }
    };

    if (talents.length === 0) {
      loadTalents();
    }
  }, [setTalents, setLoading, talents.length]);

  // Featured talents (first 3)
  const featuredTalents = talents.slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-beast-900/70 to-black"></div>

        {/* Optional pattern overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        ></div>

        <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Discover Exceptional{" "}
              <span className="text-beast-400">Talent</span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl mb-8 text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Connect with the world's top influencers, creators, and
              personalities to elevate your brand's presence.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button
                asChild
                size="lg"
                className="bg-beast-600 hover:bg-beast-700"
              >
                <Link to="/talent">Browse Talent</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className=" dark:text-white text-black hover:bg-beast-300"
              >
                <Link to="/contact">Work With Us</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Talent Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured Talent
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Meet some of our exceptional influencers and creators who have
              made significant impacts in their industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {featuredTalents.map((talent, index) => (
              <TalentCard key={talent.id} talent={talent} index={index} />
            ))}
          </div>

          <div className="text-center">
            <Button
              asChild
              size="lg"
              className="bg-beast-600 hover:bg-beast-700"
            >
              <Link to="/talent">View All Talent</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-4xl font-bold text-beast-600 dark:text-beast-400 mb-2">
                200+
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Talented Creators
              </p>
            </motion.div>

            <motion.div
              className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-4xl font-bold text-beast-600 dark:text-beast-400 mb-2">
                50M+
              </h3>
              <p className="text-gray-600 dark:text-gray-400">Audience Reach</p>
            </motion.div>

            <motion.div
              className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-4xl font-bold text-beast-600 dark:text-beast-400 mb-2">
                500+
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Successful Campaigns
              </p>
            </motion.div>

            <motion.div
              className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-4xl font-bold text-beast-600 dark:text-beast-400 mb-2">
                12+
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Years of Experience
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Services
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              We offer comprehensive solutions to connect brands with the
              perfect talent for their campaigns.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="p-6 border border-gray-200 dark:border-gray-800 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-3">Talent Management</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Full-service representation for creators to maximize their
                potential and build sustainable careers.
              </p>
            </motion.div>

            <motion.div
              className="p-6 border border-gray-200 dark:border-gray-800 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-3">Brand Partnerships</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Strategic collaborations between brands and creators for
                authentic, impactful campaigns.
              </p>
            </motion.div>

            <motion.div
              className="p-6 border border-gray-200 dark:border-gray-800 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-3">Content Production</h3>
              <p className="text-gray-600 dark:text-gray-400">
                End-to-end production services to create high-quality, engaging
                content that resonates with audiences.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-beast-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Elevate Your Brand?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join the ranks of successful brands that have partnered with our
            exceptional talent roster.
          </p>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white/10"
          >
            <Link to="/contact">Get Started Today</Link>
          </Button>
        </div>
      </section>
    </>
  );
};
