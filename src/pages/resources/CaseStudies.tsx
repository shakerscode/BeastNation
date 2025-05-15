import CaseStudiesGrid from "@/components/caseStudies/CaseStudiesGrid";
import CaseStudiesHeader from "@/components/caseStudies/CaseStudiesHeader";
import CommonCTA from "@/components/common/CommonCTA";
import useScrollToTop from "@/hooks/useScrollToTop";

function CaseStudies() {
  useScrollToTop();
  return (
    <div className=" bg-gray-900/50 w-full space-y-8 space-y-12">
      <div className="max-w-7xl mx-auto space-y-8 md:space-y-12">
        {/* Hero Section */}
        <CaseStudiesHeader />

        {/* Case Studies Grid */}
        <CaseStudiesGrid />
        {/* CTA Section */}
      </div>
      <CommonCTA
        title={
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Let’s Write A{" "}
            <span className="text-beast-purple-light"> Success</span> Story
          </h2>
        }
        subTitle="Connect with our team to learn how we can propel your brand into the era of social-first."
      />
    </div>
  );
}

export default CaseStudies;
