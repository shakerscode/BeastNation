import NewsAndPressArticles from "@/components/resources/news/NewsAndPressArticles";
import NewsAndPressHeader from "@/components/resources/news/NewsAndPressHeader";
import PlaybookCTA from "@/components/common/PlaybookCTA";
import useScrollToTop from "@/hooks/useScrollToTop";

const NewsAndPress = () => {
  useScrollToTop();

  return (
    <section className="bg-gray-900/50 pt-32 md:pt-40 pb-20">
      <div className="">
        {/* Section Header */}
        <NewsAndPressHeader />
        {/* Playbook CTA  */}
        <div className="px-4 md:px-12 py-6 md:py-16">
          <PlaybookCTA />
        </div>

        {/* Grid of Articles */}
        <NewsAndPressArticles />
      </div>
    </section>
  );
};

export default NewsAndPress;
