import { Check, CircleCheckBig } from "lucide-react";
import { motion } from "framer-motion";

interface CaseStudyInfoSectionProps {
  title: string;
  header?: string;
  points?: string[];
  footer?: string;
  icon?: "check" | "circle";
  textColor?: string;
  image?: string;
  isRight?: boolean;
}

const CaseStudyInfoSection = ({
  title,
  header,
  points,
  footer,
  icon = "check",
  textColor = "text-white/80",
  image,
  isRight = true,
}: CaseStudyInfoSectionProps) => {
  const Icon = icon === "check" ? Check : CircleCheckBig;

  const ContentBox = (
    <div className={`space-y-5 w-full ${textColor}`}>
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="text-white font-bold font-display text-2xl md:text-4xl mb-3"
      >
        {title}
      </motion.h3>

      {header && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="font-sm"
        >
          {header}
        </motion.p>
      )}

      {points && (
        <div className="space-y-3">
          {points.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-start gap-2"
            >
              <Icon className="w-5 mt-0.5 h-5 shrink-0" />

              <p className="font-sm">{point}</p>
            </motion.div>
          ))}
        </div>
      )}

      {footer && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="font-sm"
        >
          {footer}
        </motion.p>
      )}
    </div>
  );

  const ImageBox = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 + 0.1 }}
      viewport={{ once: true }}
      className="w-full"
    >
      <img
        src={image}
        alt={title}
        className="rounded-md w-full h-auto object-cover"
      />
    </motion.div>
  );

  return (
    <div className="w-full">
      <div className="w-full">
        <div
          className={`flex flex-col md:flex-row items-center gap-10 ${
            image && isRight ? "md:flex-row-reverse" : "md:flex-row"
          }`}
        >
          {image && <div className="w-full md:w-1/2">{ImageBox}</div>}
          <div className={`w-full ${image ? "md:w-1/2" :"w-full"}`}>{ContentBox}</div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyInfoSection;
