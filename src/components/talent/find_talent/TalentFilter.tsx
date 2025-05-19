import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTalentStore } from "@/store/useTalentStore";
import { motion } from "framer-motion";
import { FiSearch, FiX } from "react-icons/fi";

export const TalentFilter = () => {
  const {
    categories,
    activeCategory,
    searchQuery,
    setActiveCategory,
    setSearchQuery,
  } = useTalentStore();

  const handleCategoryClick = (categoryName: string) => {
    setActiveCategory(categoryName);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const clearSearch = () => {
    setSearchQuery("");
  };

  return (
    <div className="mb-8">
      <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
        <h2 className="text-2xl md:text-4xl font-bold">Our Talent</h2>

        <div className="relative">
          <Input
            type="text"
            placeholder="Search talent..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="pl-10 pr-10 w-full md:w-64"
          />
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          {searchQuery && (
            <Button
              variant="ghost"
              size="icon"
              onClick={clearSearch}
              className="absolute right-1 top-1/2 transform -translate-y-1/2 h-7 w-7"
            >
              <FiX className="h-4 w-4" />
            </Button>
          )}
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <motion.button
            key={category.id}
            onClick={() => handleCategoryClick(category.name)}
            className={`px-4 py-2 rounded-full text-sm transition-colors ${
              activeCategory === category.name
                ? "bg-beast-accent text-white"
                : "bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category.name}
            <span className="ml-1 text-xs">({category.count})</span>
          </motion.button>
        ))}
      </div>
    </div>
  );
};
