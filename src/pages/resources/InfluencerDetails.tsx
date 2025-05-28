import CommonCTA from "@/components/common/CommonCTA";
import ArticleBox from "@/components/resources/influencers/ArticleBox";
import HeroSection from "@/components/resources/influencers/HeroSection";
import { InfoBox } from "@/components/resources/influencers/InfoBox";
import ShareButtons from "@/components/resources/influencers/ShareButton";
import SimilarPosts from "@/components/resources/influencers/SimilarPosts";
import SubscriptionSection from "@/components/resources/influencers/SubscriptionSection";
import { TOC } from "@/components/resources/influencers/TOC";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import useScrollToTop from "@/hooks/useScrollToTop";
import { useInfluencerStore } from "@/store/useInfluencerStore";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";

// export default function InfluencerDetails() {
//   useScrollToTop();
//   const { influencers, tags, title, date, key_points, intro } = article;
//   const activeId = useScrollSpy(influencers.map((i) => i.id));
//   const asideRef = useRef(null);
//   const containerRef = useRef(null);
//   const [isFixed, setIsFixed] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (!asideRef.current || !containerRef.current) return;
//       const containerRect = containerRef.current.getBoundingClientRect();

//       if (containerRect.top <= 150 && containerRect.bottom - 200 >= 300) {
//         setIsFixed(true);
//       } else {
//         setIsFixed(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <section>
//       <HeroSection
//         tags={tags}
//         title={title}
//         date={date}
//         key_points={key_points}
//       />
//       <section className="px-4 md:px-0 py-10 bg-black">
//         <div
//           className="max-w-7xl 2xl:max-w-[1536px] mx-auto grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-10"
//           ref={containerRef}
//         >
//           <article className="max-h-[900px] overflow-scroll scrollbar-hidden">
//             <ArticleBox influencers={influencers} intro={intro} />
//           </article>
//           <aside className="h-fit">
//              <InfoBox />
//             <div
//               className={`flex flex-col mt-5 gap-4 space-y-2`}
//               ref={asideRef}
//             >
//               <TOC items={influencers} activeId={activeId} />
//               <ShareButtons/>
//               <SubscriptionSection/>
//             </div>
//           </aside>
//         </div>
//       </section>
//       <CommonCTA
//         title={
//           <h2 className="text-3xl text-white md:text-5xl lg:text-6xl font-bold font-display mb-4">
//             The Largest{" "}
//             <span className="text-beast-purple-light">Creator Agency</span> in
//             the World
//           </h2>
//         }
//         subTitle="Partner with top-tier influencers and unlock authentic brand growth through powerful storytelling, strategy, and data."
//       />
//     </section>
//   );
// }

export default function InfluencerDetails() {
  useScrollToTop();
  const { slug } = useParams();
  const article = useInfluencerStore((s) => s.getDetailedArticle(slug));

  const { influencers, tags, title, date, key_points, intro, image } = article;
 

  const containerRef = useRef<HTMLDivElement>(null);
  const articleRef = useRef<HTMLDivElement>(null);
  const activeId = useScrollSpy(influencers.map((i) => i.id));

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      const container = containerRef.current;
      const article = articleRef.current;
      if (!container || !article) return;

      const containerRect = container.getBoundingClientRect();
      const containerTop = containerRect.top;
      const containerBottom = containerRect.bottom;

      // Only apply this logic if container is in viewport
      if (containerTop <= 0 && containerBottom >= window.innerHeight) {
        const delta = e.deltaY;

        const atTop = article.scrollTop === 0;
        const atBottom =
          article.scrollTop + article.clientHeight >= article.scrollHeight - 1;

        const shouldScrollArticle =
          (delta > 0 && !atBottom) || (delta < 0 && !atTop);

        if (shouldScrollArticle) {
          e.preventDefault();
          article.scrollBy({ top: delta, behavior: "auto" });
        }
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  const handleTOCClick = (id: string) => {
    if (!articleRef.current) return;
    const el = articleRef.current.querySelector(`#${id}`);
    if (el) {
      const top =
        el.getBoundingClientRect().top -
        articleRef.current.getBoundingClientRect().top +
        articleRef.current.scrollTop;

      articleRef.current.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section>
      <HeroSection
        tags={tags}
        title={title}
        date={date}
        key_points={key_points}
        image={image}
      />
      <div className="block md:hidden px-4">
        <TOC
          items={influencers}
          activeId={activeId}
          onItemClick={handleTOCClick}
        />
      </div>
      <section
        ref={containerRef}
        className="px-4 lg:px-0 py-10 bg-black h-full overflow-hidden"
      >
        <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-10 h-full">
          <article
            ref={articleRef}
            className="overflow-y-scroll pr-4 scrollbar-hidden h-[1100px]"
          >
            <ArticleBox influencers={influencers} intro={intro} />
          </article>

          <aside className="h-full overflow-hidden">
            <div className="sticky top-0 space-y-6">
              <InfoBox />
              <div className="hidden md:block">
                <TOC
                  items={influencers}
                  activeId={activeId}
                  onItemClick={handleTOCClick}
                />
              </div>

              <ShareButtons />
              <SubscriptionSection />
            </div>
          </aside>
        </div>
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

      <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 lg:px-0">
        <SimilarPosts />
      </div>
    </section>
  );
}
