import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import CommonSubHeading from "../common/CommonSubHeading";

const images = [
  {
    id: 1,
    src: "/img/influencers/insta_hero.png",
    label: "Smartwater",
    description:
      "We crafted an innovative social campaign integrating creators and hydration with style.",
  },
  {
    id: 2,
    src: "/img/influencers/Top Couples Blog Image _Noah and Lori.png",
    label: "Walmart Land",
    description:
      "An immersive virtual experience showcasing Walmart’s community-driven activations.",
  },
  {
    id: 3,
    src: "/img/influencers/Steph-Grasso-Blog-Image.png",
    label: "Creating Fans for Call of Duty League",
    description:
      "Trendy Nation orchestrated an ambassador program with always-on coverage, converting hundreds of thousands of casual gamers into active fans.",
  },
  {
    id: 4,
    src: "/img/services/experiential_marketing.png",
    label: "PUBG",
    description:
      "From battleground to brand — this campaign brought the intensity of PUBG into real-world engagement.",
  },
];

function OurWork() {
  const [activeIndex, setActiveIndex] = useState(2); // Start from the center

  const handleClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="min-h-screen">
      <header className="container mx-auto text-4xl md:text-5xl font-bold px-4 pt-10">
        <CommonSubHeading subHead="Our Work" shouldCol />
      </header>

      <div className="container mx-auto px-4 py-10 overflow-hidden">
        <div className="relative h-[500px] md:h-[600px] w-full">
          <div className="flex items-center justify-center h-full relative">
            {images.map((image, index) => {
              const position = index - activeIndex;
              const isCenter = index === activeIndex;
              const scale = isCenter ? 1 : 0.8;
              const zIndex = isCenter ? 10 : 5;
              const opacity = Math.abs(position) > 1 ? 0 : isCenter ? 1 : 0.6;
              const xPos = `${position * 100}%`;

              return (
                <motion.div
                  key={image.id}
                  className={`absolute transition-all duration-500 ease-in-out ${
                    isCenter ? "w-full md:w-3/4" : "w-1/5"
                  } h-full cursor-pointer`}
                  animate={{ x: xPos, scale, zIndex, opacity }}
                  onClick={() => handleClick(index)}
                >
                  <div className="relative h-full overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.label}
                      className="h-full w-full object-cover"
                    />

                    {/* Vertical Labels */}
                    {!isCenter && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div
                          className={`text-white text-sm md:text-lg font-bold tracking-wider ${
                            index < activeIndex
                              ? "absolute left-2 bottom-0 rotate-90 origin-bottom-left"
                              : "absolute right-2 bottom-0 -rotate-90 origin-bottom-right"
                          }`}
                        >
                          {image.label}
                        </div>
                      </div>
                    )}

                    {/* Description Section */}
                    {isCenter && (
                      <AnimatePresence>
                        <motion.div
                          className="absolute top-0 right-0 bg-black text-white p-6 md:p-10 h-full w-full md:w-1/2 flex flex-col justify-center"
                          initial={{ opacity: 0, x: 50 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 50 }}
                          transition={{ duration: 0.5 }}
                        >
                          <h2 className="text-2xl md:text-4xl font-bold mb-4">
                            {image.label}
                          </h2>
                          <p className="text-sm md:text-base mb-6 leading-relaxed">
                            {image.description}
                          </p>
                          <button className="flex items-center text-white font-semibold group">
                            Learn more
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </button>
                        </motion.div>
                      </AnimatePresence>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurWork;
