import MarketingHeroSection from "@/components/marketing_services/MarketingHeroSection";
import heroImg from "/img/marketing_services/for-talent.png";

const ForTalentPage = () => {
  return (
    <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto">
      <MarketingHeroSection
        title="We Create Icons"
        description="Award-winning talent representation for today’s digital stars."
        img={heroImg}
        hideBreadcrumb={true}
      />
    </div>
  );
};

export default ForTalentPage;
