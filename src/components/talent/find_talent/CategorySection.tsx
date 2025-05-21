import { find_talent_categories } from "@/utils/fakeData";
import { motion } from "framer-motion";

export default function CategorySection() {
  return (
    <section className="md:py-28 pt-20 md:pt-0 px-4 md:px-0">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {find_talent_categories.map((category, index) => (
          <motion.div
            key={index}
            className="relative group overflow-hidden shadow-md border border-white/20 cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <img
              src={category.image}
              alt={category.title}
              className="object-cover w-full md:h-[300px] h-48 group-hover:scale-105 transition-transform duration-300"
            />
            {/* Updated Overlay */}
            <div className="absolute inset-0 w-full h-full flex items-end justify-center bg-gradient-to-t from-black/60 via-black/10 to-transparent">
              <span className="text-white text-lg md:text-2xl mb-3 md:mb-6 font-semibold">
                {category.title}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
