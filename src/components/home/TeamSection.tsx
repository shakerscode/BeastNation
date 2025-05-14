import { motion } from "framer-motion";
import CommonSubHeading from "../common/CommonSubHeading";

const TeamSection = () => {
  const teamImage =
    "https://images.pexels.com/photos/2467506/pexels-photo-2467506.jpeg";
  return (
    <section className="bg-background py-24 px-6 md:px-20 border-y border-white/10 relative">
      <div
        className="absolute z-0 bottom-10 md:bottom-[20%] md:right-1/4 w-40 md:w-96 h-40 md:h-96 rounded-full bg-beast-purple blur-[120px] animate-pulse-gentle"
        style={{ animationDelay: "1s" }}
      />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12 z-20">
        {/* Left Text Content */}
        <div className="w-full">
          <CommonSubHeading
            subHead="Our Culture"
          />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold font-display leading-tight mb-6">
              Building The{" "}
              <span className="text-beast-purple-light">Future,</span>{" "}
              <br className="hidden md:block" />
              <span className="text-beast-purple-light">Together</span> With
              Creators
            </h2>

            <p className="text-white/70 text-base md:text-lg mb-6">
              We’re a team of innovators, creators, and storytellers shaping the
              next generation of influencer marketing. From strategy to culture,
              everything we do centers around passion, purpose, and people.
            </p>

            <button className="bg-primary-gradient px-6 py-3 text-white rounded-lg shadow-glow hover:shadow-glow-lg transition-all">
              Join The Crew
            </button>
          </motion.div>
        </div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full overflow-hidden rounded-xl border border-white/10 z-20"
        >
          <img
            src={teamImage}
            alt="Team photo"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
