import CommonHeading from "@/components/common/CommonHeading";
import { CalendarDays, CircleCheck, Clock } from "lucide-react";
import { motion } from "framer-motion";

function HeroSection() {
  return (
    <section className="bg-black text-white py-36 px-4 md:px-0">
      <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Side */}
        <div>
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            <motion.span
              key={1}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-beast-purple text-xs font-semibold px-3 py-1 rounded-full"
            >
              Talent Spotlight
            </motion.span>
            <motion.span
              key={2}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-beast-purple text-xs font-semibold px-3 py-1 rounded-full"
            >
              Find Talent
            </motion.span>
            <motion.span
              key={3}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-beast-purple text-xs font-semibold px-3 py-1 rounded-full"
            >
              Creator Partnerships
            </motion.span>
          </div>

          {/* Title */}
          <div className="  mb-6">
            <CommonHeading beforeHighlight="10 Real Estate Influencers Shaping Social Media" />
          </div>

          {/* Key Talking Points */}
          <h2 className="text-lg font-semibold mb-3">Key Talking Points</h2>
          <ul className="text-white/90 space-y-2 text-sm">
            <li className="flex items-start md:items-center gap-2">
              <CircleCheck className="w-4 h-4" />
              Top 10 diverse real estate voices across luxury, investment &
              design
            </li>
            <li className="flex items-center gap-2">
              <CircleCheck className="w-4 h-4" />
              Influencers shaping digital property marketing & education
            </li>
            <li className="flex items-center gap-2">
              <CircleCheck className="w-4 h-4" />
              Key partnerships for brands
            </li>
          </ul>

          {/* Meta info */}
          <div className="flex items-center gap-4 mt-6 text-sm text-white/70">
            <div className="flex items-center gap-1">
              <CalendarDays className="w-4 h-4" />
              <span>May 23, 2025</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>&lt; 5 minutes</span>
            </div>
          </div>
        </div>

        {/* Right Side - Image with backdrop */}
        <div className="relative w-full max-w-2xl h-full mx-auto md:mx-0 mt-10">
          <div className="absolute inset-0 rounded-full bg-gradient-to-t from-orange-500 via-beast-purple to-beast-accent opacity-30 blur-2xl"></div>
          <img
            src="/img/influencers/real-estate.png"
            alt="Influencer"
            className="relative z-10 w-[400px] h-[400px] rounded-full object-cover border-4 border-black mx-auto"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
