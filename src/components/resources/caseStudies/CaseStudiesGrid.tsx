import { MoveRight } from "lucide-react";
import { motion } from "framer-motion";
import { useCallback } from "react";
import { useNavigate } from "react-router";
import { detailedCaseStudies } from "@/constants/fakeCaseStudy";

const caseStudies = [
  {
    productImage:
      "https://images.pexels.com/photos/1628086/pexels-photo-1628086.jpeg",
    title: "Increased Holiday resorts profit 40% to 120% ",
    logoURL: "/img/caseStudy/logo_one.png",
    link: "#",
  },

  {
    productImage:
      "https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg",
    title: "A lipstick brand just gone viral after collaborating with us",
    logoURL: "/img/caseStudy/logo_two.png",
    link: "#",
  },
  {
    productImage:
      "https://images.pexels.com/photos/5704841/pexels-photo-5704841.jpeg", // fashion
    title: "Fashion startup reached 2M+ Gen Zs through TikTok reels",
    logoURL: "/img/caseStudy/logo_three.png",
    link: "#",
  },
  {
    productImage:
      "https://images.pexels.com/photos/5980866/pexels-photo-5980866.jpeg",
    title: "Fintech app installs surged 180% in 30 days post launch campaign",
    logoURL: "/img/caseStudy/logo_four.png",
    link: "#",
  },
  {
    productImage:
      "https://images.pexels.com/photos/3299905/pexels-photo-3299905.jpeg",
    title: "Pet supply brand's loyalty campaign hit 500K active users",
    logoURL: "/img/caseStudy/logo_five.png",
    link: "#",
  },
  {
    productImage:
      "https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg",
    title: "Fitness app’s Instagram campaign grew engagement by 700%",
    logoURL: "/img/caseStudy/logo_six.png",
    link: "#",
  },
];

function CaseStudiesGrid() {
  const navigate = useNavigate();

  //  Safe navigation with cleanup
  const handleNavigate = useCallback(
    (title: string) => {
      let isMounted = true;

      const slug = title
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^\w-]+/g, "");

      if (isMounted) {
        navigate(`/resources/case-studies/${slug}`, {
          replace: false,
          preventScrollReset: true,
        });
      }

      return () => {
        isMounted = false;
      };
    },
    [navigate]
  );
  return (
    <section className="md:p-5">
      <div className="max-w-7xl mx-auto px-4 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {detailedCaseStudies.map((study, index) => (
          <motion.div
            onClick={() => handleNavigate(study?.slug)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.3 }}
            viewport={{ once: true, amount: 0.3 }}
            key={index}
            className="min-h-[400px] h-full w-full min-w-[350px] group cursor-pointer transition-all duration-300 ease-in-out relative rounded-lg overflow-hidden shadow-glow"
          >
            <img
              src={study.coverImage}
              alt=""
              className="w-full object-cover h-full group-hover:opacity-20 transition-all duration-300 ease-in-out"
            />
            <div className="absolute bottom-3 left-0 right-0 w-[90%] h-[100px] mx-auto bg-white/80 shadow rounded-lg group-hover:opacity-0 overflow-hidden">
              <img
                src={study.logo}
                alt=""
                className="w-full h-full object-contain transform scale-150 transition-all duration-300 ease-in-out"
              />
            </div>
            <div className="absolute top-0 bottom-0 right-0 left-0 w-full h-full bg-black/50 opacity-0 group:hover:opacity-55 transition-all duration-300 ease-in-out"></div>
            <div className="group-hover:flex flex-col items-start justify-end gap-3 absolute top-0 bottom-0 right-0 left-0 w-full h-full hidden p-4 transition-all duration-300 ease-in-out overflow-hidden">
              <div className="w-full h-48 overflow-hidden">
                <img
                  src={study.logo}
                  alt=""
                  className="w-full h-full object-contain transform overflow-hidden group-hover:scale-150 transition-all duration-300 ease-in-out"
                />
              </div>
              <h2 className="text-2xl font-bold font-display">{study.title}</h2>
              <button className="flex items-center hover:text-beast-purple-light transition-all duration-300 ease-in-out gap-2 text-sm font-normal">
                <span>Read more</span> <MoveRight className="w-5 h-5 mt-0.5" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default CaseStudiesGrid;
