import { talentService } from "@/api/talentService";
import CommonCTA from "@/components/common/CommonCTA";
import MarketingHeroSection from "@/components/marketing_services/MarketingHeroSection";
import CategorySection from "@/components/talent/find_talent/CategorySection";
import CreatorSection from "@/components/talent/find_talent/CreatorSection";
import CreatorWithBrand from "@/components/talent/find_talent/CreatorWithBrand";
import useScrollToTop from "@/hooks/useScrollToTop";
import { useTalentStore } from "@/store/useTalentStore";
import { useEffect } from "react";
import heroImg from "/img/marketing_services/FindTalent.png";

export const TalentPage = () => {
  useScrollToTop();
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
      <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto pt-10 md:pt-10">
        <MarketingHeroSection
          title={
            <h2 className="text-3xl md:text-6xl font-bold font-display mb-6 capitalize">
              Your Campaign,
              <span className="text-beast-purple-light"> Our Creators</span>
            </h2>
          }
          description="Tap into the in-house agency representing the largest global creator roster."
          img={heroImg}
          hideBreadcrumb={true}
        />
      </div>
      <div className="w-full 2xl:max-w-[1536px] mx-auto overflow-x-auto md:py-10 scrollbar-hidden">
        <CreatorWithBrand />
      </div>
      <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto pt-10 md:pt-10">
        <CreatorSection />
        <CategorySection />
      </div>
      <div className="mt-8 md:mt-0 border-t">
        <CommonCTA
          title={
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 max-w-4xl mx-auto capitalize">
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
