import NewsAndPressArticles from "@/components/resources/news/NewsAndPressArticles";
import NewsAndPressHeader from "@/components/resources/news/NewsAndPressHeader";
import PlaybookCTA from "@/components/common/PlaybookCTA";
import useScrollToTop from "@/hooks/useScrollToTop";
import CommonCTA from "@/components/common/CommonCTA";

const NewsAndPress = () => {
  useScrollToTop();

  return (
    <section className="bg-gray-900/50 pt-32 md:pt-40 ">
      <div className="pb-16">
        {/* Section Header */}
        <NewsAndPressHeader />
        {/* Playbook CTA  */}
        <div className="px-4 md:px-12 py-6 md:py-16">
          <PlaybookCTA />
        </div>

        {/* Grid of Articles */}
        <NewsAndPressArticles />
      </div>
      <CommonCTA
        title={
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 max-w-4xl mx-auto capitalize">
            We <span className="text-beast-purple-light"> would love</span> to
            hear from you
          </h2>
        }
        subTitle="Our team of experts are ready to learn about your business needs and collaborate with you in competing and succeeding in the attention economy. For press inquiries please email pr@trendynation.com.
"
      />
    </section>
  );
};

export default NewsAndPress;
