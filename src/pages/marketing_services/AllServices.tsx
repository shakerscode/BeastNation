import ClientLogos from "@/components/home/ClientLogos";
import CommonSubFooter from "@/components/marketing_services/CommonSubFooter";
import MarketingHeroSection from "@/components/marketing_services/MarketingHeroSection";
import OurWork from "@/components/marketing_services/OurWork";
import WhatWeOffer from "@/components/marketing_services/WhatWeOffer";
import { ourWorkData } from "@/utils/fakeData";
import AllServiceImg from "/img/services/main_services.png";

const AllServices = () => {
  return (
    <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto">
      <MarketingHeroSection 
        title={
          <h2 className="text-3xl md:text-6xl font-bold font-display mb-6 capitalize">
            Everything Social,
            <span className="text-beast-purple-light"> Under One Roof</span>
          </h2>
        }
        description="Unify your social strategy to drive measurable impact."
        img={AllServiceImg}
      />
      <ClientLogos />
      <WhatWeOffer />
      <OurWork data={ourWorkData} />
      <CommonSubFooter
        title={"Heavy lifting, offloaded"}
        description={"Ready to consolidate your marketing efforts?"}
      />
    </div>
  );
};

export default AllServices;
