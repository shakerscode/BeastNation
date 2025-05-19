import { talentService } from "@/api/talentService";
import MarketingHeroSection from "@/components/marketing_services/MarketingHeroSection";
import { TalentFilter } from "@/components/talent/find_talent/TalentFilter";
import { TalentGrid } from "@/components/talent/find_talent/TalentGrid";
import { useTalentStore } from "@/store/useTalentStore";
import { useEffect } from "react";
import heroImg from "/img/marketing_services/FindTalent.png";

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
    <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto">
      <MarketingHeroSection
        title="Your Campaign, Our Creators"
        description="Tap into the in-house agency representing the largest global creator roster."
        img={heroImg}
        hideBreadcrumb={true}
      />
      <div className="py-12">
        <div className="px-4">
          <TalentFilter />
          <TalentGrid />
        </div>
      </div>
    </div>
  );
};
