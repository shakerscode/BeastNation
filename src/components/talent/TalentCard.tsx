import { Talent } from "@/types/talent";
import { formatNumber } from "@/utils/formatters";
import { motion } from "framer-motion";
import { FaInstagram, FaTiktok, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router";

interface TalentCardProps {
  talent: Talent;
  index: number;
}

export const TalentCard = ({ talent, index }: TalentCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="relative group"
    >
      <Link
        to={`/talent/${talent.id}`}
        className="block overflow-hidden rounded-xl"
      >
        <div className="aspect-[3/4] relative overflow-hidden">
          <img
            src={talent.image}
            alt={talent.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-70" />

          <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
            <h3 className="text-xl font-semibold mb-1">{talent.name}</h3>
            <p className="text-sm text-gray-200 mb-2">{talent.location}</p>

            <div className="flex flex-wrap gap-2 mb-3">
              {talent.categories.map((category) => (
                <span
                  key={category}
                  className="text-xs bg-beast-500/70 px-2 py-1 rounded"
                >
                  {category}
                </span>
              ))}
            </div>

            <div className="flex items-center space-x-2 text-gray-200 text-sm">
              <span className="font-medium">
                {formatNumber(talent.followers)}
              </span>
              <span>followers</span>
            </div>
          </div>
        </div>
      </Link>

      {/* Social Media Icons */}
      <div className="absolute top-3 right-3 flex flex-col gap-2">
        {talent.socialLinks.instagram && (
          <motion.a
            href={talent.socialLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/90 dark:bg-black/70 p-2 rounded-full text-pink-600 hover:bg-pink-600 hover:text-white transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaInstagram size={16} />
          </motion.a>
        )}
        {talent.socialLinks.tiktok && (
          <motion.a
            href={talent.socialLinks.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/90 dark:bg-black/70 p-2 rounded-full text-black hover:bg-black hover:text-white transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaTiktok size={16} />
          </motion.a>
        )}
        {talent.socialLinks.youtube && (
          <motion.a
            href={talent.socialLinks.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/90 dark:bg-black/70 p-2 rounded-full text-red-600 hover:bg-red-600 hover:text-white transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaYoutube size={16} />
          </motion.a>
        )}
        {talent.socialLinks.twitter && (
          <motion.a
            href={talent.socialLinks.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/90 dark:bg-black/70 p-2 rounded-full text-blue-500 hover:bg-blue-500 hover:text-white transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaTwitter size={16} />
          </motion.a>
        )}
      </div>
    </motion.div>
  );
};
