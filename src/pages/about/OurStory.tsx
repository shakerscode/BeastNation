import IntroSection from "@/components/about/OurStory/IntroSection";
import LandmarkSection from "@/components/about/OurStory/LandmarkSection";
import LeadershipSection from "@/components/about/OurStory/LeadershipSection";
import HeroSection from "@/components/about/OurStory/OurStoryHeader";
import CommonCTA from "@/components/common/CommonCTA";

 
function OurStory() {
  return (
    <>
      <div className="w-full md:max-w-7xl mx-auto px-4 md:px-0">
        <HeroSection />
        <IntroSection />
        <LandmarkSection />
        <LeadershipSection />
      </div>
      <CommonCTA
        title={
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 max-w-4xl mx-auto">
            A Story in
            <span className="text-beast-purple-light"> the Making </span>
          </h2>
        }
        subTitle="In just 10 years, Viral Nation has gone from two friends and a talent agency to the global leader in social-first transformation."
      />
    </>
  );
}

export default OurStory;
