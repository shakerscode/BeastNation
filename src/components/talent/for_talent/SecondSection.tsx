import { talentService } from "@/api/talentService";
import { useTalentStore } from "@/store/useTalentStore";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { TalentFilter } from "../find_talent/TalentFilter";
import { TalentGrid } from "../find_talent/TalentGrid";

const SecondSection = () => {
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
      <section className="py-14 md:pb-20 md:pt-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center "
        >
          <h1 className="text-3xl lg:text-6xl font-bold font-display text-center w-full">
            Your one-stop shop to evolve your <br />
            <span className="text-beast-purple">content</span> &{" "}
            <span className="text-beast-purple">brand</span>
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center "
        >
          <p className="mt-3 lg:mt-5 text-base text-justify mx-auto w-4/5">
            Trendy Nation Talent is the largest creator roster in the world,
            representing over 900 diverse creators across 35 verticals. We
            specialize in growing creator and athlete influencers into household
            names with a fully in-house experience, never limiting resources or
            outsourcing our services. Our 360 monetization engine fuels creator
            growth across content creation, brand partnerships, and bespoke
            services like OTT licensing and IP diversification. We’re in the
            business of building personal empires that go beyond viral content.
          </p>
        </motion.div>
      </section>
    </>
  );
};

export default SecondSection;
