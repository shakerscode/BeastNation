import CommonCTA from "@/components/common/CommonCTA";
import ArticleBox from "@/components/resources/influencers/ArticleBox";
import HeroSection from "@/components/resources/influencers/HeroSection";

function InfluencerDetails() {
  return (
    <section className="relative">
      <HeroSection />
      {/* Main content container - NO overflow restrictions here */}
      <section className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 md:px-0 flex gap-10 py-10">
        {/* Article content (scrolls with page) */}
        <article className="w-2/3">
          <ArticleBox />
        </article>

        {/* Sidebar with sticky TOC */}
        <aside className="w-1/3">
          <div className="sticky top-4 space-y-4">
            <InfoBox />
            <div className="sticky top-[calc(4rem+1rem)] z-10">
              {" "}
              {/* Adjust based on InfoBox height */}
              <TOC />
            </div>
          </div>
        </aside>
      </section>
      <CommonCTA
        title={
          <h2 className="text-3xl text-white md:text-5xl lg:text-6xl font-bold font-display mb-4">
            The Largest{" "}
            <span className="text-beast-purple-light">Creator Agency</span> in
            the World
          </h2>
        }
        subTitle="Partner with top-tier influencers and unlock authentic brand growth through powerful storytelling, strategy, and data."
      />
    </section>
  );
}
export default InfluencerDetails;

const InfoBox = () => {
  return (
    <div className="flex items-start gap-4  bg-white/10 backdrop-blur-xl rounded-lg p-4">
      <img
        src="/LOGO.png"
        alt="Trendy_nation_logo"
        className="w-20 h-20 rounded-full"
      />
      <div>
        <h2 className="text-lg font-medium">Trendy Nation</h2>
        <p className="text-sm text-white/90">
          Trendy Nation is a leading global social media agency powering
          cultural relevance for brands with a social-first approach to
          marketing.{" "}
        </p>
      </div>
    </div>
  );
};

const TOC = () => {
  return (
    <div className="bg-white/10 backdrop-blur-xl rounded-lg p-4">
      <h2 className="text-2xl font-medium">Table of Contents </h2>
      <div className="h-0.5 bg-white w-full mt-2.5"></div>
      <ul className="list-disc space-y-2 text-white/90 p-4">
        <li className="hover:underline cursor-pointer">
          Doug the Pug – The Original Dogfluencer Magnus the Therapy Dog –
          Healing Hearts One Visit at a Time
        </li>
        <li className="hover:underline cursor-pointer">
          Robby and Penny – The Dynamic Dachshund Duo
        </li>
        <li className="hover:underline cursor-pointer">
          Lumi the Samoyed – The Arctic Beauty Queen
        </li>
        <li className="hover:underline cursor-pointer">
          Pearl the Golden Girl – Senior Dog Advocate
        </li>
        <li className="hover:underline cursor-pointer">
          My Dogs Dope – The Streetwear Icon{" "}
        </li>
        <li className="hover:underline cursor-pointer">
          Tika the Iggy – Fashion Forward Canine{" "}
        </li>
        <li className="hover:underline cursor-pointer">
          Crusoe the Celebrity Dachshund – The Storytelling Sensation
        </li>
        <li className="hover:underline cursor-pointer">
          Maui the Golden Doodle{" "}
        </li>
        <li className="hover:underline cursor-pointer">Loki the Wolfdog</li>
        <li className="hover:underline cursor-pointer">
          Conclusion: Why These Dog Influencers Matter To Marketers
        </li>
      </ul>
    </div>
  );
};
