import { articles } from "@/constants/fakeInfluencers";
import { create } from "zustand";

type Influencer = {
  id: string;
  name: string;
  platforms: string[];
  focus_areas: string[];
  image: string;
  highlights: string[];
};

type InfluencerArticle = {
  title: string;
  tags: string[];
  date: string;
  reading_time: string;
  key_points: string[];
  intro: string[];
  image: string;
  influencers: Influencer[];
};

type ArticleListItem = {
  title: string;
  date: string;
  image: string;
  category: string;
  slug: string;
};

type InfluencerStore = {
  list: ArticleListItem[];
  details: Map<string, InfluencerArticle>;
  getArticleList: () => ArticleListItem[];
  getDetailedArticle: (slug: string) => InfluencerArticle | undefined;
};

export const useInfluencerStore = create<InfluencerStore>((set, get) => ({
  list: [
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
      title:
        "Trailblazers of Culture: 10 LatinX Creators Changing Social Media",
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
  ],

  details: new Map(articles.map((article) => [article.slug, article])),

  getArticleList: () => get().list,

  getDetailedArticle: (slug) => get().details.get(slug),
}));
