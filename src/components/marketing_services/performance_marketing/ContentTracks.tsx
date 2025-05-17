import { motion } from "framer-motion";
import ImageTrack from "/img/services/influencer_markting.png";

export const ContentTracks = () => {
  return (
    <section className="py-16 px-6 md:px-16">
      <div className="flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="md:w-1/2"
        >
          <h2 className="text-3xl md:text-6xl font-bold mb-6">
            Two Content Tracks
          </h2>
          <p className="text-gray-300 mb-6 text-lg leading-relaxed">
            In an age of voluminous and fast-paced content consumption, Viral
            Nation Studio leverages both in-house and creator-led content to
            immerse audiences in their story.
          </p>

          <div className="mb-6">
            <h3 className="text-beast-purple text-2xl font-semibold mb-1">
              Agency-Led Content
            </h3>
            <p className="text-gray-300 text-base leading-relaxed">
              Brand-focused content, produced by Viral Nation Studio,
              specifically for owned channels. <br />
              Strategically, influencers can be featured in this content in
              alignment with bespoke briefs.
            </p>
          </div>

          <div>
            <h3 className="text-beast-purple text-2xl font-semibold mb-1">
              Creator-Led Content
            </h3>
            <p className="text-gray-300 text-base leading-relaxed">
              Brand-focused content that creators produce, specifically for
              owned channels. <br />
              Creators are enlisted based on the creative direction to spur
              collaborative productions.
            </p>
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className=" flex justify-end relative"
        >
          <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-beast-purple to-beast-accent opacity-40 blur-3xl -z-10"></div>
          <img
            src={ImageTrack}
            alt="Phone 1"
            className="w-full z-10 relative"
          />
        </motion.div>
      </div>
    </section>
  );
};
