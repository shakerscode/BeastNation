import { motion } from "framer-motion";

function Hero({ data }) {
  return (
    <div
      className="h-[600px] bg-cover bg-center flex items-center justify-center relative"
      style={{ backgroundImage: `url(${data.coverImage})` }}
    >
      <div className="bg-black bg-opacity-60 p-4 md:p-6 rounded absolute top-0 left-0 right-0 bottom-0  w-full h-full">
        <div className="pb-6 md:pb-12 max-w-5xl mx-auto flex flex-col h-full justify-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 md:gap-2.5"
          >
            <div className="w-6 md:w-8 h-6 md:h-8 rounded-md md:rounded-lg bg-white p-1">
              <img
                src={data.logo}
                alt="brand logo"
                className="w-full object-cover"
              />
            </div>
            <h5 className="text-lg md:text-2xl font-bold text-white">
              {data.brand}
            </h5>
          </motion.div>
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-3xl md:text-6xl font-display font-bold mt-2 md:mt-2.5 max-w-5xl text-white"
            >
              {data?.title}
            </motion.h1>
            <div className="flex flex-wrap gap-2 mt-2 md:mt-4 font-medium">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-xs md:text-sm text-black bg-white text-wrap w-fit px-2 md:px-3.5 py-1 md:py-2 rounded-full shadow"
              >
                Campaign Date: {data?.campaignDate}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-xs md:text-sm text-black bg-white text-wrap w-fit px-2 md:px-3.5 py-1 md:py-2 rounded-full shadow"
              >
                Creators:{" "}
                {data?.creators?.map((creator) => creator.name).join(", ")}
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-xs md:text-sm text-black bg-white text-wrap w-fit px-2 md:px-3.5 py-1 md:py-2 rounded-full shadow"
              >
                Platforms:{" "}
                {data?.platforms?.map((platform) => platform).join(", ")}
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
