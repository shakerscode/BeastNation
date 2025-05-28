import CommonCTA from "@/components/common/CommonCTA";
import ClientLogos from "@/components/home/ClientLogos";
import MarketingHeroSection from "@/components/marketing_services/MarketingHeroSection";
import { PerformanceDriven } from "@/components/marketing_services/performance_marketing/PerformanceDriven";
import { PhoneShowcase } from "@/components/marketing_services/performance_marketing/PhoneShowcase";
import { ServicesShowcaseSection } from "@/components/marketing_services/performance_marketing/ServicesShowcaseSection";
import useScrollToTop from "@/hooks/useScrollToTop";
import { brandEngagementData, socialSolutionsData } from "@/utils/fakeData";
import NEW_Rooted from "/img/marketing_services/NEW_Rooted.png";
import CommunityImg from "/img/services/community_management.png";

const CommunityManagement = () => {
  useScrollToTop();
  return (
    <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto">
      <MarketingHeroSection
        pageName="Community Management"
        title={
          <h2 className="text-3xl md:text-6xl font-bold font-display mb-6 capitalize">
            Social ROI
            <span className="text-beast-purple-light"> Made Real</span>
          </h2>
        }
        description="Humanize your brand with community-centric, commerce-driving strategy."
        img={CommunityImg}
      />
      <ClientLogos />
      <PhoneShowcase
        title={
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 capitalize">
            Rooted In{" "}
            <span className="text-beast-purple-light"> Relationships</span>
          </h1>
        }
        description="Trendy Nation’s 360 Community and Social Management cultivates an always-on social persona for your brand, unlocking a community-driven feedback loop that fuels awareness, engagement, and conversion across every social touchpoint. So you can humanize your social presence and build brand loyalty with a holistic strategy that elevates the customer journey while driving commerce."
        photo={NEW_Rooted}
      />
      <ServicesShowcaseSection services={brandEngagementData} />
      <PerformanceDriven
        data={socialSolutionsData}
        title={
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 capitalize">
            Be always-on for{" "}
            <span className="text-beast-purple-light">your audience</span>
          </h2>
        }
      />

      <CommonCTA
        title={
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold font-display text-white mb-4 md:max-w-4xl mx-auto capitalize">
            Humanize Your
            <span className="text-beast-purple-light">
              {" "}
              Community Management
            </span>
          </h1>
        }
        subTitle="Connect with Trendy Nation today to learn how we can help you elevate your social presence."
      />
    </div>
  );
};

export default CommunityManagement;
