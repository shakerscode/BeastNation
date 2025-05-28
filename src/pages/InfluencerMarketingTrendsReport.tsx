import { ReportContent } from "@/components/reports/ReportContent";
import { ReportHeading } from "@/components/reports/ReportHeading";
import { SocialFirstGrowthForm } from "@/components/reports/SocialFirstGrowthForm";
import useScrollToTop from "@/hooks/useScrollToTop";
import { useLocation } from "react-router";
import { Toaster } from "sonner";

const InfluencerMarketingTrendsReport = () => {
  useScrollToTop();
  const { pathname } = useLocation();

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden pt-24">
      <Toaster position="top-center" />
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Report Information */}
          <div>
            <ReportHeading
              title="THE BUILDING BLOCKS OF"
              subtitle="SOCIAL FIRST GROWTH"
              tagline="TRENDS, STRATEGIES, INNOVATIONS"
            />
            {pathname !== "/community-white-paper" && <ReportContent />}
          </div>

          {/* Right column - Form */}
          <div>
            <SocialFirstGrowthForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfluencerMarketingTrendsReport;
