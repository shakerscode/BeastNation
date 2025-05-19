import { talentService } from "@/api/talentService";
import CommonCTA from "@/components/common/CommonCTA";
import MarketingHeroSection from "@/components/marketing_services/MarketingHeroSection";
import CategorySection from "@/components/talent/find_talent/CategorySection";
import CreatorSection from "@/components/talent/find_talent/CreatorSection";
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
    <>
      <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto pt-10 md:pt-0">
        <MarketingHeroSection
          title="Your Campaign, Our Creators"
          description="Tap into the in-house agency representing the largest global creator roster."
          img={heroImg}
          hideBreadcrumb={true}
        />
        <CategorySection />
        <div className="pb-6 px-4">
          <TalentFilter />
          <TalentGrid />
        </div>
        <CreatorSection />
      </div>
      <div className="mt-8 md:mt-12 border-t">
        <CommonCTA
          title={
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 max-w-4xl mx-auto">
              Your one-stop shop for perfect
              <span className="text-beast-purple-light">
                {" "}
                creator partnerships
              </span>
            </h2>
          }
          subTitle="Access the world’s largest roster of verified content creators, celebrities, and athletes with an affinity for your target audience."
        />
      </div>
    </>
  );
};
