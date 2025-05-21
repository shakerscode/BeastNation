import { motion } from "framer-motion";
import creatorImg from "/img/marketing_services/creator.png";

const CreatorSection = () => {
  return (
    <div className="md:flex pt-16 md:pt-24 px-4 md:px-0 pb-0 md:pb-36 items-center gap-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex-1"
      >
        <h2 className="text-3xl md:text-5xl font-bold font-display leading-8 mb-6 -mt-5">
          Every Community, <br />
          <span className="text-beast-purple-light">Niche,</span>
          <span className="text-beast-purple-light">and Hobby</span> — We Have a
          Creator for That.
        </h2>

        <p className="text-white/70 text-base md:text-lg mb-8 md:mb-0">
          Industry-leading and award-winning, Trendy Nation’s talent roster of
          over 900 creators across 35 diverse verticals is home to today’s most
          exciting social media stars. From mega-influencers and celebrities to
          athletes and niche creators, unlock bespoke partnerships,
          endorsements, and media campaigns that drive deep value for both
          talent and brands.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="w-full overflow-hidden rounded-xl border border-white/10 z-20 flex-1"
      >
        <img
          src={creatorImg}
          alt="Team photo"
          className="w-full h-full object-cover"
        />
      </motion.div>
    </div>
  );
};

export default CreatorSection;
