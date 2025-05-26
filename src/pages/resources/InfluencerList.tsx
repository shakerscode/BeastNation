import CommonCard from "@/components/common/CommonCard";
import BlogsHeader from "@/components/resources/blogs/BlogsHeader";
import { useCallback } from "react";
import { useNavigate } from "react-router";

const influencerList = [
  {
    title: "10 Real Estate Influencers Shaping Social Media",
    date: "May 23, 2025",
    image: "/img/influencers/real-estate.png",
    category: "Real Estate",
    slug: "real-estate-influencers-2025",
  },
  {
    title: "10 Comedy Creators Building Communities on Social Platforms",
    date: "May 23, 2025",
    image: "/img/influencers/comedy.png",
    category: "Comedy",
    slug: "comedy-creators-2025",
  },
  {
    title: "10 Dog Influencers Shaping Social Media In 2025",
    date: "May 23, 2025",
    image: "/img/influencers/dog.png",
    category: "Pets",
    slug: "dog-influencers-2025",
  },
  {
    title: "Trailblazers of Culture: 10 LatinX Creators Changing Social Media",
    date: "Apr 30, 2025",
    image: "/img/influencers/latin.png",
    category: "Culture",
    slug: "latinx-creators-2025",
  },
  {
    title: "10 Food Influencers Revolutionizing Culinary Trends in 2025",
    date: "Apr 24, 2025",
    image: "/img/influencers/food.png",
    category: "Food",
    slug: "food-influencers-2025",
  },
  {
    title: "10 Beauty Influencers Redefining Style",
    date: "Apr 24, 2025",
    image: "/img/influencers/beauty.png",
    category: "Beauty",
    slug: "beauty-influencers-2025",
  },
  {
    title:
      "Top 10 Education Influencers Transforming Modern Classrooms in 2025",
    date: "Apr 16, 2025",
    image: "/img/influencers/educational.png",
    category: "Education",
    slug: "education-influencers-2025",
  },
  {
    title: "10 Lifestyle Creators Leading Culture, Wellness & Style in 2025",
    date: "Apr 16, 2025",
    image: "/img/influencers/lifestyle.png",
    category: "Lifestyle",
    slug: "lifestyle-creators-2025",
  },
  {
    title: "Top 10 Influencer Couples Redefining Relationships in 2025",
    date: "Mar 25, 2025",
    image: "/img/influencers/couple.png",
    category: "Relationships",
    slug: "influencer-couples-2025",
  },
  {
    title: "Top 10 Health Influencers Shaping Wellness Trends in 2025",
    date: "Feb 14, 2025",
    image: "/img/influencers/health.png",
    category: "Health",
    slug: "health-influencers-2025",
  },
  {
    title: "25 Fashion Influencers Redefining Style In 2025",
    date: "Feb 13, 2025",
    image: "/img/influencers/fashion.png",
    category: "Fashion",
    slug: "fashion-influencers-2025",
  },
  {
    title: "Top 10 Fitness Experts Shaping Wellness Trends This Year in 2025",
    date: "Jan 30, 2025",
    image: "/img/influencers/fitness.png",
    category: "Fitness",
    slug: "fitness-experts-2025",
  },
  {
    title: "10 Mom Influencers Redefining Motherhood on Instagram in 2025",
    date: "Jan 29, 2025",
    image: "/img/influencers/mom.png",
    category: "Parenting",
    slug: "mom-influencers-2025",
  },
  {
    title: "10 Instagram Influencers Shaping IG’s Cultural Pulse In 2025",
    date: "Jan 17, 2025",
    image: "/img/influencers/ig_model.png",
    category: "Instagram",
    slug: "instagram-influencers-2025",
  },
  {
    title: "20 Gaming Influencers Changing The Game In 2024",
    date: "Aug 16, 2024",
    image: "/img/influencers/gamer.png",
    category: "Gaming",
    slug: "gaming-influencers-2024",
  },
  {
    title: "8 Top Dogs To Follow In 2024",
    date: "Aug 13, 2024",
    image: "/img/influencers/dogs.png",
    category: "Pets",
    slug: "top-dogs-2024",
  },
  {
    title: "15 Best People To Follow On X",
    date: "Aug 13, 2024",
    image: "/img/influencers/all.png",
    category: "Social Media",
    slug: "best-x-people-2024",
  },
  {
    title:
      "15 Top Instagram Travel Influencers You Should Be Following in 2024",
    date: "Aug 13, 2024",
    image: "/img/influencers/traveler.png",
    category: "Travel",
    slug: "instagram-travel-influencers-2024",
  },
];

function InfluencerList() {
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
    <>
      <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto space-y-8 md:space-y-12">
        <BlogsHeader />
        <div className="pb-20 pt-0">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {influencerList.map((influencer, index) => (
              <CommonCard
                key={index}
                item={influencer}
                index={index}
                onClick={(title) => handleNavigate(title)}
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
