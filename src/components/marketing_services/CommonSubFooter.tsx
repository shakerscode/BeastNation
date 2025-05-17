import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";
import { useNavigate } from "react-router";
import { Button } from "../ui/button";

const CommonSubFooter = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  const navigate = useNavigate();
  return (
    <section className="text-center py-24 px-4 relative">
      <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-beast-purple-dark/20 to-transparent -z-10" />
      <div className="absolute left-0 top-0 w-1/3 h-full bg-gradient-to-l to-beast-purple-dark/20 from-transparent -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        viewport={{ once: true, amount: 0.2 }}
        className="text-center "
      >
        <h2 className="text-4xl text-gradient md:text-5xl font-bold text-white mb-8">
          {title}
        </h2>
        <p className="text-white/70  max-w-2xl mx-auto mb-8 text-base md:text-lg">
          {description}
        </p>
        <Button
          onClick={() => navigate("/contact")}
          size="lg"
          className="group bg-primary-gradient text-xl hover:bg-beast-purple py-7 shadow-glow w-auto"
        >
          Get In Touch{" "}
          <MoveRight
            size={32}
            className="transform transition-transform duration-300 group-hover:translate-x-1"
            strokeWidth={2.5}
          />
        </Button>
      </motion.div>
    </section>
  );
};

export default CommonSubFooter;
