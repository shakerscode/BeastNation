import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

type CardItemProps = {
  item: {
    title?: string;
    image?: string;
    date?: string;
    category?: string;
    excerpt?: string;
  };
  index: number;
  onClick?: (title: string) => void;
};

export default function CommonCard({ item, index, onClick }: CardItemProps) {
  const {
    title = "Untitled",
    image = "/fallback-image.jpg",
    date = "Unknown Date",
    category = "Uncategorized",
    excerpt,
  } = item;

  const handleNavigate = () => {
    if (onClick && title) onClick(title);
  };
  return (
    <motion.div
      key={`${title}-${index}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 * index }}
      whileHover={{ scale: 1.02 }}
      onClick={handleNavigate}
      className="group cursor-pointer rounded-xl overflow-hidden border-2 border-white hover:border-beast-purple-light transition-all ease-in-out duration-500"
    >
      <div
        className={`${
          excerpt ? "aspect-[3/2]" : "h-fit md:h-[420px]"
        } w-full overflow-hidden`}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "/fallback-image.jpg";
          }}
        />
      </div>

      <div
        className={`flex flex-col justify-between overflow-hidden p-4  ${
          excerpt ? "h-[210px] md:h-[180px]" : "md:h-[150px] h-[150px]"
        } transition-all duration-500 group-hover:bg-white`}
      >
        <div>
          <p className="text-xs text-beast-purple-light font-display font-semibold uppercase mb-1">
            {category}
          </p>
          <h3 className="text-lg font-semibold text-white group-hover:text-black/80 mb-2">
            {title}
          </h3>
          {excerpt && (
            <p className="text-sm text-white/70 group-hover:text-black/80">
              {excerpt}
            </p>
          )}
        </div>

        <div className="flex justify-between items-center text-beast-purple-light">
          <span className="text-xs">{date}</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-all" />
        </div>
      </div>
    </motion.div>
  );
}
