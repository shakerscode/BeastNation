import CommonLoading from "@/components/common/CommonLoading";
import { RootLayout } from "@/components/layout/RootLayout";
import ArticlePage from "@/components/resources/newsDetails/NewsArticleDetails";
import { AboutPage } from "@/pages/AboutPage";
import { ContactPage } from "@/pages/ContactPage";
import { HomePage } from "@/pages/HomePage";
import InfluencerBlog from "@/pages/InfluencerBlog";
import InfluencerMarketingTrendsReport from "@/pages/InfluencerMarketingTrendsReport";
import AllServices from "@/pages/marketing_services/AllServices";
import BusinessIntelligence from "@/pages/marketing_services/BusinessIntelligence";
import CommunityManagement from "@/pages/marketing_services/CommunityManagement";
import ExperientialMarketing from "@/pages/marketing_services/ExperientialMarketing";
import InfluencerMarketing from "@/pages/marketing_services/InfluencerMarketing";
import PerformanceMarketing from "@/pages/marketing_services/PerformanceMarketing";
import SocialContentStudio from "@/pages/marketing_services/SocialContentStudio";
import NewsAndPress from "@/pages/NewsAndPress";
import NotFound from "@/pages/NotFound";
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
            Component: TalentPage,
          },
          {
            path: ":id",
            Component: TalentDetailPage,
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
        path: "influencer-blogs",
        hydrateFallbackElement: <CommonLoading />,
        Component: InfluencerBlog,
      },
      {
        path: "influencer-lists",
        hydrateFallbackElement: <CommonLoading />,
        Component: InfluencerBlog,
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
            path: "news-press-releases",
            Component: NewsAndPress,
          },
          {
            path: "news-press-releases/:slug",
            Component: ArticlePage,
          },
        ],
      },
    ],
  },
]);
