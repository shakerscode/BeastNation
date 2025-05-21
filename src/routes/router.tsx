import CommonLoading from "@/components/common/CommonLoading";
import { RootLayout } from "@/components/layout/RootLayout";
import ArticlePage from "@/components/resources/newsDetails/NewsArticleDetails";
import OurStory from "@/pages/about/OurStory";
import { AboutPage } from "@/pages/AboutPage";
import BlogPage from "@/pages/BlogPage";
import { ContactPage } from "@/pages/ContactPage";
import ForTalentPage from "@/pages/ForTalentPage";
import { HomePage } from "@/pages/HomePage";
import InfluencerMarketingTrendsReport from "@/pages/InfluencerMarketingTrendsReport";
import AllServices from "@/pages/marketing_services/AllServices";
import BusinessIntelligence from "@/pages/marketing_services/BusinessIntelligence";
import CommunityManagement from "@/pages/marketing_services/CommunityManagement";
import ExperientialMarketing from "@/pages/marketing_services/ExperientialMarketing";
import InfluencerMarketing from "@/pages/marketing_services/InfluencerMarketing";
import PerformanceMarketing from "@/pages/marketing_services/PerformanceMarketing";
import SocialContentStudio from "@/pages/marketing_services/SocialContentStudio";
import NotFound from "@/pages/NotFound";
import BlogPostDetails from "@/pages/resources/BlogPostDetails";
import CaseStudies from "@/pages/resources/CaseStudies";
import DetailedCaseStudy from "@/pages/resources/DetailedCaseStudy";
import NewsAndPress from "@/pages/resources/NewsAndPress";
import { TalentDetailPage } from "@/pages/TalentDetailPage";
import { TalentPage } from "@/pages/TalentPage";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      { index: true, Component: HomePage },
      {
        path: "talent",
        hydrateFallbackElement: <CommonLoading />,
        children: [
          {
            index: true,
            path: "find-talent",
            Component: TalentPage,
          },
          {
            path: "find-talent/:id",
            Component: TalentDetailPage,
          },
          {
            path: "for-talent",
            Component: ForTalentPage,
          },
        ],
      },
      {
        path: "services",
        hydrateFallbackElement: <CommonLoading />,
        children: [
          {
            index: true,
            Component: AllServices,
          },
          {
            path: "influencer-marketing",
            Component: InfluencerMarketing,
          },
          {
            path: "performance-marketing",
            Component: PerformanceMarketing,
          },
          {
            path: "social-content-studio",
            Component: SocialContentStudio,
          },
          {
            path: "experiential-marketing",
            Component: ExperientialMarketing,
          },
          {
            path: "community-management",
            Component: CommunityManagement,
          },
          {
            path: "business-intelligence",
            Component: BusinessIntelligence,
          },
        ],
      },
      {
        path: "influencer-marketing-trends-report",
        hydrateFallbackElement: <CommonLoading />,
        Component: InfluencerMarketingTrendsReport,
      },
      {
        path: "community-white-paper",
        hydrateFallbackElement: <CommonLoading />,
        Component: InfluencerMarketingTrendsReport,
      },
      {
        path: "about",
        hydrateFallbackElement: <CommonLoading />,
        Component: AboutPage,
      },
      {
        path: "contact",
        hydrateFallbackElement: <CommonLoading />,
        Component: ContactPage,
      },

      // New routes
      {
        path: "resources",
        hydrateFallbackElement: <CommonLoading />,
        children: [
          {
            path: "news-and-press",
            Component: NewsAndPress,
          },
          {
            path: "news-and-press/:slug",
            Component: ArticlePage,
          },
          {
            path: "case-studies",
            Component: CaseStudies,
          },
          {
            path: "case-studies/:slug",
            Component: DetailedCaseStudy,
          },
          {
            path: "blogs",
            Component: BlogPage,
          },
          {
            path: "blog/:id",
            Component: BlogPostDetails,
          },
          {
            path: "influencer-lists",
            Component: BlogPage,
          },
        ],
      },
      {
        path: "about",
        hydrateFallbackElement: <CommonLoading />,
        children: [
          {
            path: "our-story",
            Component: OurStory,
          },
        ],
      },
    ],
  },
]);
