import { talentService } from "@/api/talentService";
import { TalentFilter } from "@/components/talent/TalentFilter";
import { TalentGrid } from "@/components/talent/TalentGrid";
import { useTalentStore } from "@/store/useTalentStore";
import { motion } from "framer-motion";
import { useEffect } from "react";

export const TalentPage = () => {
  const {
    talents,
    setTalents,
    categories,
    setCategories,
    setLoading,
    filterTalents,
  } = useTalentStore();

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const [talentsData, categoriesData] = await Promise.all([
          talentService.fetchTalents(),
          talentService.fetchCategories(),
        ]);

        setTalents(talentsData);
        setCategories(categoriesData);
        filterTalents();
      } catch (error) {
        console.error("Failed to fetch data:", error);
      } finally {
        setLoading(false);
      }
    };

    // Check if data needs to be loaded
    // Safely check if talents and categories exist and have length
    const talentsExist = Array.isArray(talents) && talents.length > 0;
    const categoriesExist = Array.isArray(categories) && categories.length > 0;

    if (!talentsExist || !categoriesExist) {
      loadData();
    } else {
      filterTalents();
    }
  }, [
    talents,
    categories,
    setTalents,
    setCategories,
    setLoading,
    filterTalents,
  ]);

  return (
    <>
      <div className="md:pt-32 pt-24 pb-12 bg-gray-100 dark:bg-gray-900 w-full">
        <div className="container mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold font-display mb-4">
              Our <span className="text-beast-purple-light">Talent</span>
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Discover our diverse roster of talented creators and influencers
              across various industries. Filter by category or search to find
              the perfect match for your brand.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="py-12 bg-white dark:bg-black">
        <div className="container mx-auto px-4">
          <TalentFilter />
          <TalentGrid />
        </div>
      </div>
    </>
  );
};
