import { motion } from "framer-motion";
import DataPartnersImg from "/img/marketing_services/business-intelligence_data.png";

export const DataPartners = () => {
  return (
    <section className="py-16 px-6">
      <div className="flex justify-center text-center">
        {/* <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold mb-14"
        >
          Our Data Partners
        </motion.h2> */}

        <motion.img
          src={DataPartnersImg}
          alt={"partners"}
          className="object-contain grayscale hover:grayscale-0 transition duration-300"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 5 * 0.05 }}
        />
      </div>
    </section>
  );
};
