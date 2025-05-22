import CommonBtn from "@/components/common/CommonBtn";
import CommonHeading from "@/components/common/CommonHeading";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

function WorkplaceBenefits() {
  // Workplace benefits
  const benefits = [
    "Competitive medical benefits",
    "Flexible paid time off",
    "Remote-first model",
    "Employee assistance programs",
    "Paid parental leave",
    "Group RRSP and 401(k)",
    "Volunteer days",
    "Awards program",
  ];

  return (
    <section className="section-padding bg-agency-gray-100">
      <div className="container-custom">
        <div className="flex justify-between md:flex-row-reverse flex-col gap-12 items-center">
          <div>
            <div className="mb-6">
              <CommonHeading beforeHighlight="Our " highlight="Nation" />
            </div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-sm md:text-lg text-white/80 mb-8"
            >
              We believe in fostering a workplace that celebrates individuality
              while creating a sense of belonging. Our team members have the
              autonomy to make meaningful contributions while enjoying
              comprehensive benefits that support their wellbeing.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true, amount: 0.3 }}
                  key={index}
                  className="flex items-center gap-2 mb-4"
                >
                  <CheckCircle
                    size={20}
                    className="text-beast-purple-light shrink-0"
                  />
                  <span className="text-white/80 text-sm md:text-lg">
                    {benefit}
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="mt-4 md:mt-8">
              <CommonBtn title="Learn About Our Benefits" />
            </div>
          </div>

          <div>
            <motion.img
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true, amount: 0.3 }}
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
              alt="Team bonding"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkplaceBenefits;
