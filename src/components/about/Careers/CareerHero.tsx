import CommonBtn from "@/components/common/CommonBtn";
import CommonHeading from "@/components/common/CommonHeading";
import { motion } from "framer-motion";

function CareerHero() {
  return (
    <section className="pt-36 w-full md:pb-5">
      <div className="w-full px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between gap-8 items-center">
          <div className="w-full md:w-1/2">
            <div className="mb-6">
              <CommonHeading
                beforeHighlight="Calling All "
                highlight="Trailblazers"
              />
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-sm md:text-lg mb-4 md:mb-8 text-white/80"
            >
              Join our dynamic team and help shape the future of digital
              marketing. We're looking for passionate, creative minds to drive
              innovation.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <CommonBtn title="Join Our Team" />
            </motion.div>
          </div>
          <div className="w-full md:w-1/2">
            <motion.img
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
              alt="Energetic team"
              className="shadow-2xl w-full md:h-[450px] h-[300px] object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CareerHero;
