import CommonCTA from "@/components/common/CommonCTA";
import MarketingHeroSection from "@/components/marketing_services/MarketingHeroSection";
import OurWork from "@/components/marketing_services/OurWork";
import { PerformanceDriven } from "@/components/marketing_services/performance_marketing/PerformanceDriven";
import Representation from "@/components/talent/for_talent/Representation";
import SecondSection from "@/components/talent/for_talent/SecondSection";
import { for_talent_data, serviceSupportData } from "@/utils/fakeData";
import heroImg from "/img/marketing_services/for-talent.png";
import CreatorWithBrand from "@/components/talent/find_talent/CreatorWithBrand";

const ForTalentPage = () => {
  return (
    <>
      <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto">
        <MarketingHeroSection
          title="We Create Icons"
          description="Award-winning talent representation for today’s digital stars."
          img={heroImg}
          hideBreadcrumb={true}
        /> 
         <SecondSection />
      </div>
      <div className="w-full 2xl:max-w-[1536px] mx-auto overflow-x-auto md:py-10 scrollbar-hidden">
        <CreatorWithBrand />
      </div>
      <div>
        <PerformanceDriven
          data={serviceSupportData}
          title={"Industry-leading, unlimited support"}
        />

        <div className="md:-m-24">
          <OurWork data={for_talent_data} hideHeading={true} />
        </div>

        <Representation />
      </div>

      <div className="mt-8 md:mt-12 border-t">
        <CommonCTA
          title={
            <h2 className="text-4xl capitalize md:text-5xl font-bold text-white mb-4 max-w-4xl mx-auto">
              Take your content to
              <span className="text-beast-purple-light"> new heights</span>
            </h2>
          }
          subTitle="Ready to start building your personal empire?"
        />
      </div>
    </>
  );
};

export default ForTalentPage;
