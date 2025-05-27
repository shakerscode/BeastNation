import CommonCard from "@/components/common/CommonCard";
import { influencerList } from "@/constants/fakeInfluencers";
import React, { useCallback } from "react";
import { useNavigate } from "react-router";

function SimilarPosts() {
  const navigate = useNavigate();
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
    <section className="py-20">
      <h2 className="text-4xl font-semibold font-display mb-10">Similar Posts</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {influencerList.slice(0, 3).map((influencer, index) => (
          <CommonCard
            key={index}
            item={influencer}
            index={index}
            onClick={(title) => handleNavigate(title)}
          />
        ))}
      </div>
    </section>
  );
}

export default SimilarPosts;
