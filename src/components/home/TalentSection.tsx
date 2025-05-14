import { useEffect, useState } from "react";
import { ArrowRight, ArrowLeft, MoveRight } from "lucide-react";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { influencer } from "@/constants/fakeInfluencers";
import CommonSubHeading from "../common/CommonSubHeading";

const TalentSection = () => {
  return (
    <section id="talent" className="py-10 md:py-20 relative">
      {/* Gradient  */}
      <div className="-z-20 absolute bottom-0 -right-10 w-48 md:w-80 h-96 md:h-96 rounded-full bg-beast-purple-dark blur-[100px] animate-pulse-gentle" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center flex-col mb-12 w-full">
           <CommonSubHeading subHead="TELNETS" shouldCol/>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-3xl md:text-5xl font-bold font-display mb-4 w-full md:max-w-5xl text-center"
          >
            Elevating <span className="text-beast-purple-light">Brands</span> Through
            Creator Excellence
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-white/70 max-w-3xl text-center text-base md:text-lg"
          >
            We connect you with world-class influence's who embody your vision,
            spark real conversations, and deliver lasting impact across digital
            platforms.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true, amount: 0.3 }}
            className="bg-primary-gradient mt-4 flex items-center gap-2 py-2 hover:bg-beast-purple-dark rounded-lg shadow-glow hover:shadow-glow-lg text-white text-base px-6 transition-all ease-in-out duration-300"
          >
            View All Talent <MoveRight className="w-4 h-4" strokeWidth={2.5} />
          </motion.button>
        </div>

        <FeaturedWork />
      </div>
    </section>
  );
};

export default TalentSection;

const FeaturedWork = () => {
  const [index, setIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);

  const prevSlide = () => {
    setPrevIndex(index);
    setIndex((prev) => (prev === 0 ? influencer.length - 1 : prev - 1));
  };
  

  const nextSlide = () => {
    setIndex((prevIndex) =>
      prevIndex === influencer.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setPrevIndex(index);
      setIndex((prev) => (prev + 1) % influencer.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [index]);

  const current = influencer[index];
  const previous = influencer[prevIndex];

  return (
    <section className="flex flex-col md:flex-row items-start justify-between md:py-6 md:px-16 w-full relative">
      <div className="flex flex-col absolute right-0 md:right-10 top-[55%] md:top-[50%] gap-4">
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true, amount: 0.2 }}
          onClick={prevSlide}
          className="border border-white rounded-full p-4 hover:bg-white hover:text-beast-purple-light transition-all ease-in-out duration-500"
        >
          <ArrowLeft className="w-5 h-5 rotate-90" />
        </motion.button>
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
          onClick={nextSlide}
          className="border border-white rounded-full p-4 hover:bg-white hover:text-beast-purple-light transition-all ease-in-out duration-500"
        >
          <ArrowRight className="w-5 h-5 rotate-90" />
        </motion.button>
      </div>

      {/* Image section  */}
      <div className="w-[300px] md:w-[450px] h-[400px] md:h-[650px] relative mx-auto md:mx-0">
        {/* Previous image (visible on exit) */}
        <motion.img
          key={`prev-${previous.imageUrl}`}
          src={previous.imageUrl}
          initial={{ opacity: 1, x: 0, zIndex: 20 }}
          animate={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="absolute w-full h-full object-cover rounded-xl"
        />

        {/* Current image (behind and revealed) */}
        <motion.img
          key={`curr-${current.imageUrl}`}
          src={current.imageUrl}
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute w-full h-full object-cover rounded-xl"
        />
      </div>
      {/* Text section  */}
      <div className="md:max-w-2xl md:mb-0 w-full h-full md:p-10 mt-10">
        <div className="h-full">
          {/* Index */}
          <div className="flex items-center gap-1 mb-2">
            <motion.h3
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, amount: 0.2 }}
              className="text-3xl font-bold font-display"
            >
              {index + 1}
            </motion.h3>
            <span className="text-3xl font-semibold">/</span>
            <h6 className="text-xl font-medium">{influencer.length}</h6>
          </div>

          {/* Name */}
          <motion.h2
            key={`name-${index}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
            className="text-4xl md:text-6xl lg:text-[80px] md:leading-[90px] font-bold font-display mt-4"
          >
            {current?.firstName} <br className="hidden md:block"/>
            <span className="text-beast-purple-light">{current?.lastName}</span>
          </motion.h2>

          {/* Tagline */}
          <motion.h4
            key={`tagline-${index}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true, amount: 0.2 }}
            className="text-xl font-semibold text-white/80 mt-4 md:mt-6"
          >
            {current?.tagline}
          </motion.h4>

          {/* Bio */}
          <motion.p
            key={`bio-${index}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true, amount: 0.2 }}
            className="text-white/70 mt-4 max-w-xl text-sm md:text-base"
          >
            {current?.description}
          </motion.p>

          {/* Social stats */}
          <motion.div
            key={`social-stats-${index}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-wrap gap-4 mt-6"
          >
            <SocialStat
              icon={<FaYoutube />}
              label={current?.socials?.youtube}
              shouldDelay={1}
            />
            <SocialStat
              icon={<FaInstagram />}
              label={current?.socials?.instagram}
              shouldDelay={2}
            />
            <SocialStat
              icon={<FaTiktok />}
              label={current?.socials?.tiktok}
              shouldDelay={3}
            />
            <SocialStat
              icon={<FaTwitter />}
              label={current?.socials?.twitter}
              shouldDelay={4}
            />
            <SocialStat
              icon={<FaFacebookF />}
              label={current?.socials?.facebook}
              shouldDelay={5}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const SocialStat = ({ icon, label, shouldDelay }) => (
  <motion.div
    key={`stats-${shouldDelay}`}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: shouldDelay * 0.4 }}
    viewport={{ once: true, amount: 0.2 }}
    className="flex items-center gap-2 bg-white/10 cursor-pointer px-4 py-2 rounded-full text-white text-sm font-medium hover:bg-white/20 transition-colors duration-300"
  >
    <span className="text-lg">{icon}</span>
    {label}
  </motion.div>
);
