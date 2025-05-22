import CommonHeading from "@/components/common/CommonHeading";
import { PlanetMedia } from "@/components/marketing_services/influencer/PlanetMedia";

function DiversityInclusion() {
  return (
    <PlanetMedia
      jsxTitle={
        <div className="mb-6">
          <CommonHeading
            beforeHighlight="Diversity, Equity, "
            highlight="Inclusion, and Belonging"
          />
        </div>
      }
      description="We're committed to building a diverse team where different
                perspectives are valued and everyone feels they belong. Our DEI
                initiatives are woven into the fabric of our organization, from
                hiring practices to leadership development."
      description2=" We actively foster an environment where employees can bring
                their authentic selves to work, creating space for unique
                viewpoints that drive innovation and better serve our diverse
                client base."
      cardTitle1="300+"
      cardPara1="Employees"
      cardTitle2="10+"
      cardPara2="Countries"
      cardTitle3="56%"
      cardPara3="Women"
      cardTitle4="55%"
      cardPara4="BIPOC"
    />
  );
}

export default DiversityInclusion;
