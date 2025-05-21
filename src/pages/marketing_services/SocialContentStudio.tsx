import ClientLogos from "@/components/home/ClientLogos";
import CommonSubFooter from "@/components/marketing_services/CommonSubFooter";
import MarketingHeroSection from "@/components/marketing_services/MarketingHeroSection";
import { ContentTracks } from "@/components/marketing_services/performance_marketing/ContentTracks";
import { PerformanceDriven } from "@/components/marketing_services/performance_marketing/PerformanceDriven";
import { PhoneShowcase } from "@/components/marketing_services/performance_marketing/PhoneShowcase";
import { ServicesShowcaseSection } from "@/components/marketing_services/performance_marketing/ServicesShowcaseSection";
import { embeddingBrands, servicesShowcaseSocial } from "@/utils/fakeData";
import InterviewStar from "/img/marketing_services/Interview_star.png";
import SocialContentImg from "/img/services/social_content_studio.png";

const SocialContentStudio = () => {
  return (
    <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto">
      <MarketingHeroSection
        pageName="Social Content Studio"
        title={
          <h2 className="text-3xl md:text-6xl font-bold font-display mb-6 capitalize">
            Creating{" "}
            <span className="text-beast-purple-light">Award-Winning</span>{" "}
            Moments
          </h2>
        }
        description="Light the spark on unforgettable cultural moments."
        img={SocialContentImg}
      />
      <ClientLogos />
      <PhoneShowcase
        title={"Where Strategy, Creative, and Production Come Together"}
        description={
          "Strategizing angles, brainstorming creative, and iterating in production – Viral Nation Studio reaches millions of people across platforms and channels who share and amplify the message far and wide."
        }
        photo={InterviewStar}
      />
      <ServicesShowcaseSection services={servicesShowcaseSocial} />
      <ContentTracks />
      <PerformanceDriven
        data={embeddingBrands}
        title={
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 capitalize">
            <span className="text-beast-purple-light">Embedding Brands</span>{" "}
            Into Culture
          </h2>
        }
      />
      <CommonSubFooter
        title="Create Award-Winning Moments"
        description="Get in touch with our culture-first team of specialists."
      />
    </div>
  );
};

export default SocialContentStudio;
