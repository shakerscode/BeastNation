import CommonLoading from "@/components/common/CommonLoading";
import { RootLayout } from "@/components/layout/RootLayout";
import { AboutPage } from "@/pages/AboutPage";
import { ContactPage } from "@/pages/ContactPage";
import { HomePage } from "@/pages/HomePage";
import InfluencerBlog from "@/pages/InfluencerBlog";
import InfluencerMarketingTrendsReport from "@/pages/InfluencerMarketingTrendsReport";
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
            hydrateFallbackElement: <CommonLoading />,
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
    ],
  },
]);
