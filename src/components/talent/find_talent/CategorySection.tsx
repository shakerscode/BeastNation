import { find_talent_categories } from "@/utils/fakeData";
import { motion } from "framer-motion";

export default function CategorySection() {
  return (
    <section className="py-12 pb-20 px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {find_talent_categories.map((category, index) => (
          <motion.div
            key={index}
            className="relative group overflow-hidden rounded-xl shadow-md"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <img
              src={category.image}
              alt={category.title}
              className="object-cover w-full md:h-[450px] h-48 group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bottom-0 bg-black bg-opacity-40 w-full text-center h-full flex items-end justify-center">
              <span className="text-white text-lg md:text-5xl mb-3 md:mb-6 font-semibold">
                {category.title}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
