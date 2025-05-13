import ClientLogos from "@/components/home/ClientLogos";
import MarketingHeroSection from "@/components/marketing_services/MarketingHeroSection";
import AllServiceImg from "/img/services/main_services.png";

const AllServices = () => {
  return (
    <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto">
      <MarketingHeroSection
        title="Everything Social, Under One Roof"
        description="Unify your social strategy to drive measurable impact."
        img={AllServiceImg}
      />
      <ClientLogos />
    </div>
  );
};

export default AllServices;
