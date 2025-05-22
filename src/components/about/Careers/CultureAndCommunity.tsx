import CommonHeading from "@/components/common/CommonHeading";
import { motion } from "framer-motion";

function CultureAndCommunity() {
  return (
    <section className="section-padding bg-agency-gray-100">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row-reverse justify-between gap-8 items-center">
          <div className="w-full md:w-1/2">
            <div className="mb-6">
              <CommonHeading
                beforeHighlight="Culture and "
                highlight="Community"
              />
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-lg text-white/80 mb-4"
            >
              Our team spirit extends beyond working hours. We've built a
              community where relationships flourish and personal growth is
              celebrated alongside professional achievements.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-lg text-white/80 mb-8"
            >
              From virtual coffee chats to global team retreats, we've designed
              multiple channels for team members to connect, collaborate, and
              celebrate our shared successes.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex  flex-row gap-4"
            >
              <img
                src="/img/career/badge.png"
                alt="Great Place to Work Badge"
                className="h-16 w-10 md:w-auto"
              />
              <img
                src="/img/career/badge.png"
                alt="Great Place to Work Badge"
                className="h-16 w-10 md:w-auto"
              />
            </motion.div>
          </div>

          <div className="w-full md:w-1/2">
            <motion.img
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
              alt="Team event"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CultureAndCommunity;
