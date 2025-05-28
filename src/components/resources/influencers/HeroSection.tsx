import CommonHeading from "@/components/common/CommonHeading";
import { CalendarDays, CircleCheck, Clock } from "lucide-react";
import { motion } from "framer-motion";

interface IComponentProps {
  title: string;
  tags: string[];
  date: string;
  key_points: string[];
  image: string;
}

function HeroSection(props: IComponentProps) {
  const { title, tags, date, key_points, image } = props;
  console.log(image)

  return (
    <section className="bg-black text-white py-36 px-4 md:px-0">
      <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Side */}
        <div>
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {tags.map((tag, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-beast-purple text-xs font-semibold px-3 py-1 rounded-full"
              >
                {tag}
              </motion.span>
            ))}
          </div>

          {/* Title */}
          <div className="  mb-6">
            <CommonHeading beforeHighlight={title} />
          </div>

          {/* Key Talking Points */}
          <h2 className="text-lg font-semibold mb-3">Key Talking Points</h2>
          <ul className="text-white/90 space-y-2 text-sm">
            {key_points.map((point, index) => (
              <li key={index} className="flex items-start gap-2">
                <CircleCheck className="w-4 h-4 mt-0.5" />
                <span className="">{point}</span>
              </li>
            ))}
          </ul>

          {/* Meta info */}
          <div className="flex items-center gap-4 mt-6 text-sm text-white/70">
            <div className="flex items-center gap-1">
              <CalendarDays className="w-4 h-4" />
              <span>{date}</span>
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
            src={image}
            alt="Influencer"
            className="relative z-10 w-[400px] h-[400px] rounded-full object-cover border-4 border-black mx-auto"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
