import CaseStudiesCTA from "@/components/caseStudies/CaseStudiesCTA";
import CaseStudiesGrid from "@/components/caseStudies/CaseStudiesGrid";
import CaseStudiesHeader from "@/components/caseStudies/CaseStudiesHeader";
import useScrollToTop from "@/hooks/useScrollToTop";

function CaseStudies() {
  useScrollToTop();
  return (
    <div className=" bg-gray-900/50 w-full">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Hero Section */}
        <CaseStudiesHeader />

        {/* Case Studies Grid */}
        <CaseStudiesGrid />
        {/* CTA Section */}
      </div>
      <CaseStudiesCTA />
    </div>
  );
}

export default CaseStudies;
