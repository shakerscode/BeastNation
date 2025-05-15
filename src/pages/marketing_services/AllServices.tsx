import ClientLogos from "@/components/home/ClientLogos";
import CommonSubFooter from "@/components/marketing_services/CommonSubFooter";
import MarketingHeroSection from "@/components/marketing_services/MarketingHeroSection";
import OurWork from "@/components/marketing_services/OurWork";
import WhatWeOffer from "@/components/marketing_services/WhatWeOffer";
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
      <WhatWeOffer />
      <OurWork />
      <CommonSubFooter
        title={"Heavy lifting, offloaded"}
        description={"Ready to consolidate your marketing efforts?"}
      />
    </div>
  );
};

export default AllServices;
