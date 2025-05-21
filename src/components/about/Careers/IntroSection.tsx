import CommonHeading from "@/components/common/CommonHeading";
import { Users } from "lucide-react";
import { motion } from "framer-motion";

function IntroSection() {
  const featureBlocks = [
    {
      title: "The Biggest Brands",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-agency-pink"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
      ),
      description:
        "We partner with Fortune 500 companies and leading brands across industries to drive results.",
    },
    {
      title: "The Greatest Moments",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-agency-pink"
        >
          <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"></path>
          <path d="M19 8.71a8 8 0 0 1 0 6.58"></path>
          <path d="M22 6.72a12 12 0 0 1 0 10.56"></path>
          <path d="M5 8.71a8 8 0 0 0 0 6.58"></path>
          <path d="M2 6.72a12 12 0 0 0 0 10.56"></path>
        </svg>
      ),
      description:
        "We create viral campaigns and unforgettable digital experiences that captivate audiences.",
    },
    {
      title: "The Largest Talent",
      icon: <Users size={24} className="text-agency-pink" />,
      description:
        "We work with top influencers and creators, connecting brands with authentic voices.",
    },
  ];
  return (
    <section className="">
      <div className="">
        <div className="text-center mb-16">
          <div className="mb-6">
            <CommonHeading
              beforeHighlight="Living and Breathing"
              highlight="Social Media"
            />
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-lg text-white/80 max-w-3xl mx-auto"
          >
            We are a collective of creative minds, data enthusiasts, and digital
            strategists united by our passion for innovative marketing. Our
            social-first approach puts authentic connections at the heart of
            everything we do.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featureBlocks.map((block, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true, amount: 0.3 }}
              key={block.title}
              style={{ animationDelay: `${index * 0.1}s` }}
              className={`bg-white p-4 md:p-8 rounded-lg shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl`}
            >
              <div className="mb-4 bg-beast-purple-light w-fit p-2 rounded-lg">
                {block.icon}
              </div>
              <h3 className="text-xl text-black font-bold mb-3">
                {block.title}
              </h3>
              <p className="text-gray-600">{block.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default IntroSection;
