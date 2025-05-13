import ClientLogos from "@/components/home/ClientLogos";
import MarketingHeroSection from "@/components/marketing_services/MarketingHeroSection";
import ExperientialImg from "/img/services/experiential_marketing.png";

const ExperientialMarketing = () => {
  return (
    <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto">
      <MarketingHeroSection
        pageName="Experiential Marketing"
        title="Turn Stories Into Sentiment"
        description="Drive revenue before, during, and after the experience has wrapped up."
        img={ExperientialImg}
      />
      <ClientLogos />
    </div>
  );
};

export default ExperientialMarketing;
