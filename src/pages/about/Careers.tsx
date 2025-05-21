import CareerHero from "@/components/about/Careers/Careerhero";
import CultureAndCommunity from "@/components/about/Careers/CultureAndCommunity";
import DiversityInclusion from "@/components/about/Careers/Diversity&Inclusion";
import IntroSection from "@/components/about/Careers/IntroSection";
import WorkplaceBenefits from "@/components/about/Careers/WorkplaceBenefits";
import CommonBtn from "@/components/common/CommonBtn";
import CommonCTA from "@/components/common/CommonCTA";
import { CheckCircle, Users } from "lucide-react";
import React from "react";

function Careers() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 md:px-0 w-full space-y-20 md:space-y-36 mb-10 md:mb-36">
        <CareerHero />
        <IntroSection />
        <WorkplaceBenefits />
        <DiversityInclusion />
        <CultureAndCommunity />
      </div>
      <CommonCTA
        title={
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 max-w-4xl mx-auto">
            Be Part of Something
            <span className="text-beast-purple-light"> Transformative </span>
          </h2>
        }
        subTitle="Looking for your next opportunity? Explore our current openings and discover how you can become a part of our team."
      />
    </>
  );
}

export default Careers;
