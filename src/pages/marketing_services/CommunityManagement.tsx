import ClientLogos from "@/components/home/ClientLogos";
import MarketingHeroSection from "@/components/marketing_services/MarketingHeroSection";
import CommunityImg from "/img/services/community_management.png";

const CommunityManagement = () => {
  return (
    <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto">
      <MarketingHeroSection
        pageName="Community Management"
        title="Social ROI Made Real"
        description="Humanize your brand with community-centric, commerce-driving strategy."
        img={CommunityImg}
      />
      <ClientLogos />
    </div>
  );
};

export default CommunityManagement;
