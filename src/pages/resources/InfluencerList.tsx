import CommonCard from "@/components/common/CommonCard";
import BlogsHeader from "@/components/resources/blogs/BlogsHeader";
import { useInfluencerStore } from "@/store/useInfluencerStore";
import { useCallback } from "react";
import { useNavigate } from "react-router";

function InfluencerList() {
  const navigate = useNavigate();
  const { list } = useInfluencerStore();

  const handleNavigate = useCallback(
    (title: string) => {
      let isMounted = true;

      const slug = title
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^\w-]+/g, "");

      if (isMounted) {
        navigate(`/resources/influencer-lists/${slug}`, {
          replace: false,
          preventScrollReset: true,
        });
      }

      return () => {
        isMounted = false;
      };
    },
    [navigate]
  );

  return (
    <>
      <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto space-y-8 md:space-y-12">
        <BlogsHeader />
        <div className="pb-20 pt-0 px-4 md:px-0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            {list?.map((influencer, index) => (
              <CommonCard
                key={index}
                item={influencer}
                index={index}
                onClick={(title) => handleNavigate(influencer?.slug)}
              />
            ))}
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
}

export default InfluencerList;
