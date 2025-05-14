import React from "react";
import { Button } from "../ui/button";
import { MoveRight } from "lucide-react";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";

function Contact() {
  const navigate = useNavigate();
  return (
    <section className="bg-beast-black text-center py-24 px-4">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.1 }}
      viewport={{ once: true, amount: 0.2 }}
      className="text-center "
    >
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
        Scale Your Business With{" "}
        <span className="text-beast-purple-light">Creator Power</span>
      </h2>
      <p className="text-white/70  max-w-2xl mx-auto mb-8 text-base md:text-lg">
        Partner with top-tier influencers and unlock authentic brand growth
        through powerful storytelling, strategy, and data.
      </p>
      <Button
        onClick={() => navigate("/contact")}
        size="sm"
        className="group bg-primary-gradient hover:bg-beast-purple shadow-glow w-auto"
      >
        Get In Touch{" "}
        <MoveRight
          className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1"
          strokeWidth={2.5}
        />
      </Button>
    </motion.div>
    </section>
  );
}

export default Contact;
