import CommonCTA from "@/components/common/CommonCTA";
import CaseStudyInfoSection from "@/components/resources/caseStudyDetails/CaseStudyInfoSec";
import ContentCarousel from "@/components/resources/caseStudyDetails/ContentCarousel";
import Hero from "@/components/resources/caseStudyDetails/Hero";
import StatsStrip from "@/components/resources/caseStudyDetails/Stats";
import { detailedCaseStudies } from "@/constants/fakeCaseStudy";
import { motion } from "framer-motion";
import { Check, CircleCheckBig, MoveLeft, MoveRight } from "lucide-react";
import { Link, useParams } from "react-router";

const DetailedCaseStudy = () => {
  const { slug } = useParams();

  const title = slug?.replace("-", " ");
  const newTitle = title
    ?.replace(/(?:^|-)([a-z])/g, (_, char) => ` ${char.toUpperCase()}`)
    .trim();

  const data = detailedCaseStudies[0];
  return (
    <div className="bg-black/90 text-gray-900">
      {/* Cover Image */}
      <Hero data={data} />
      <div className="bg-white">
        <StatsStrip metrics={data?.metrics} />
      </div>

      {/* Breadcrumbs */}
      <nav className="max-w-5xl mx-auto py-10 text-sm text-white/60">
        <ul className="flex items-center gap-1">
          <li className="hover:underline">
            <Link to={"/"}>Home </Link>
          </li>
          <li>/</li>
          <li className="hover:underline">
            <Link to={"/resources/case-studies"}>Case Studies</Link>
          </li>
          <li>/</li>
          <li>{newTitle}</li>
        </ul>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl text-white font-bold font-display mt-4"
        >
          {data.subtitle}
        </motion.p>
      </nav>

      <div className="border-y border-t-gray-600">
        <div className="max-w-5xl mx-auto space-y-20 py-20">
          <CaseStudyInfoSection
            title="Overview"
            header={data?.campaign_overview}
            // image="https://img.freepik.com/free-photo/top-viewtop-view-manager-employee-doing-teamwork-business-office-looking-charts-laptop-display_482257-2443.jpg"
          />
          <CaseStudyInfoSection
            title="Challenges"
            header={data?.campaign_challenge}
            // image="https://img.freepik.com/free-photo/top-viewtop-view-manager-employee-doing-teamwork-business-office-looking-charts-laptop-display_482257-2443.jpg"
          />

          <CaseStudyInfoSection
            title="The Strategy"
            header={data?.campaign_strategy?.header}
            points={data?.campaign_strategy?.points}
            footer={data?.campaign_strategy?.footer}
            // image="https://img.freepik.com/free-photo/plan-planning-strategy-bysiness-ideas-concept_53876-132300.jpg"
            // isRight={false}
          />

          <ContentCarousel videoItems={data?.content} />

          <CaseStudyInfoSection
            title="The Execution"
            header={data?.campaign_execution?.header}
            footer={data?.campaign_execution?.footer}
          />

          <CaseStudyInfoSection
            title="The Results"
            header={data?.campaign_results?.header}
            points={data?.campaign_results?.points}
            footer={data?.campaign_results?.footer}
            icon="circle"
          />
          <CaseStudyInfoSection
            title="Why It Worked"
            header={data?.reason_of_results?.header}
          />
        </div>
      </div>

      {/* Content */}

      <CommonCTA
        title={
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 max-w-5xl mx-auto capitalize">
            Elevate Your{" "}
            <span className="text-beast-purple-light"> Brand's Influence</span>
          </h2>
        }
        subTitle="Viral Nation accelerates the transition to social-first with end-to-end social marketing at scale."
      />
    </div>
  );
};

export default DetailedCaseStudy;
