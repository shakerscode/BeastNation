import { Influencer } from "@/types/influencerInterface";
import { CircleCheck } from "lucide-react";

function ArticleBox({
  influencers,
  intro,
}: {
  influencers: Influencer[];
  intro: string[];
}) {
  return (
    <div className="space-y-6">
      {intro.map((paragraph, index) => (
        <p key={index} className="text-sm md:text-md text-white/80">
          {paragraph}
        </p>
      ))}

      <h4 className="text-2xl font-bold">
        Below are the Rising Pawprints of Canine Content Creators:
      </h4>
      <div>
        {influencers?.map((influencer, index) => (
          <div key={index} id={influencer?.id} className="space-y-6 py-10 scroll-mt-[100px]">
            <h1 className="text-4xl font-bold font-display">
              {influencer?.name}
            </h1>
            {influencer?.highlights?.map((highlight, idx) => (
              <p key={idx} className="text-sm md:text-md text-white/80">
                {highlight}
              </p>
            ))}
            <img
              src="https://lh7-rt.googleusercontent.com/docsz/AD_4nXf9PhdwR_G_Y4S1qEo6kV-OKRB5mHobmOKPYr_snD5M-6NsWRcjHl3ztpw9QemggajKD9Zr_hnr-DEaonIsyCrXdVmovo6L5czC3jEsRe8YBo-T2aDvUg--OdBqRRxy3F2U9-YUlA?key=wxHHH8YkeByvrcjGJyIiNLS7"
              alt="influencer_details"
              className="border border-white/80 h-[300px]"
            />
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="flex items-center gap-1">
                  <CircleCheck className="w-4 h-4" />
                  <b>Platforms:</b>
                </span>
                <p>{influencer?.platforms?.join(", ")}</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="flex items-center gap-1">
                  <CircleCheck className="w-4 h-4" />
                  <b>Focus Areas:</b>
                </span>
                <p>{influencer?.focus_areas?.join(", ")}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ArticleBox;
