import CommonGetInTouchBtn from "@/components/common/CommonGetInTouchBtn";
import CommonSubHeading from "@/components/common/CommonSubHeading";
import { motion } from "framer-motion";

function HeroSection() {
  return (
    <section className="pt-36 pb-16 md:pt-48 md:pb-20">
      <div className="lg:px-6">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="w-full md:w-[60%] md:flex flex-col justify-start items-start">
            <CommonSubHeading subHead="Our Story" />
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold font-display mb-4 "
            >
              Know More about{" "}
              <span className="text-beast-purple-light">Trendy Nation </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-sm md:text-lg mb-8 text-white/80 md:max-w-xl"
            >
              Since 2010, we've been pioneering digital strategies for brands
              ready to transform their social presence. Our journey from a small
              creative team to a global agency reflects our commitment to
              innovation and measurable results.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <CommonGetInTouchBtn />
            </motion.div>
          </div>

          <div className="w-full md:w-auto px-8 md:px-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -top-6 -left-6 w-24 h-24 border-t-2 border-l-2 border-beast-purple-light"></div>
              <img
                src="https://img.freepik.com/free-photo/group-people-working-out-business-plan-office_1303-15872.jpg"
                alt="Our team in action"
                className="w-full object-cover border border-white md:h-[450px] h-[300px]"
                // style={{ height: "450px" }}
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 border-b-2 border-r-2 border-beast-purple-light"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
