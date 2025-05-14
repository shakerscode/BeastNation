 
import NewsAndPressArticles from "@/components/resources/news/NewsAndPressArticles";
import NewsAndPressHeader from "@/components/resources/news/NewsAndPressHeader";
import PlaybookCTA from "@/components/resources/news/PlaybookCTA";
import useScrollToTop from "@/hooks/useScrollToTop"; 

const NewsAndPress = () => {
  useScrollToTop();

  return (
    <section className="bg-beast-black pt-32 md:pt-40 pb-20">
      <div className="">
        {/* Section Header */}
        <NewsAndPressHeader />
        {/* Playbook CTA  */}
        <PlaybookCTA />

        {/* Grid of Articles */}
        <NewsAndPressArticles />
      </div>
    </section>
  );
};

export default NewsAndPress;
