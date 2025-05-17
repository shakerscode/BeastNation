import ClientLogos from "@/components/home/ClientLogos";
import CommonSubFooter from "@/components/marketing_services/CommonSubFooter";
import MarketingHeroSection from "@/components/marketing_services/MarketingHeroSection";
import { ContentTracks } from "@/components/marketing_services/performance_marketing/ContentTracks";
import { PerformanceDriven } from "@/components/marketing_services/performance_marketing/PerformanceDriven";
import { PhoneShowcase } from "@/components/marketing_services/performance_marketing/PhoneShowcase";
import { ServicesShowcaseSection } from "@/components/marketing_services/performance_marketing/ServicesShowcaseSection";
import { embeddingBrands, servicesShowcaseSocial } from "@/utils/fakeData";
import SocialContentImg from "/img/services/social_content_studio.png";

const SocialContentStudio = () => {
  return (
    <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto">
      <MarketingHeroSection
        pageName="Social Content Studio"
        title="Creating Award-Winning Moments"
        description="Light the spark on unforgettable cultural moments."
        img={SocialContentImg}
      />
      <ClientLogos />
      <PhoneShowcase />
      <ServicesShowcaseSection services={servicesShowcaseSocial} />
      <ContentTracks />
      <PerformanceDriven
        data={embeddingBrands}
        title={"Embedding Brands Into Culture"}
      />
      <CommonSubFooter
        title="Create Award-Winning Moments"
        description="Get in touch with our culture-first team of specialists."
      />
    </div>
  );
};

export default SocialContentStudio;
