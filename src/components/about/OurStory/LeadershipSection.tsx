import CommonHeading from "@/components/common/CommonHeading";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { directors, executives, seniorLeaders } from "@/constants/fakeOurStory";

const LeadershipSection = () => {
  return (
    <section className="my-28 py-14 px-5 bg-gray-50">
      <div className="container mx-auto">
        <div className="mb-10 text-black">
          <CommonHeading
            beforeHighlight="Meet Our"
            highlight="Executive Leadership"
          />
        </div>

        <div className="space-y-20 text-black">
          {/* Executive Leadership */}
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              {executives.map((person) => (
                <EmployeeCard
                  key={person.name}
                  image={person.image}
                  name={person.name}
                  title={person.title}
                  onClick={() => console.log(`Viewing bio for ${person.name}`)}
                />
              ))}
            </div>
          </div>

          {/* Senior Leadership */}
          <div>
            <div className="mb-10 text-black">
              <CommonHeading
                beforeHighlight="Meet Our"
                highlight="Senior Leadership"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {seniorLeaders.map((person) => (
                <EmployeeCard
                  key={person.name}
                  image={person.image}
                  name={person.name}
                  title={person.title}
                  onClick={() => console.log(`Viewing bio for ${person.name}`)}
                />
              ))}
            </div>
          </div>

          {/* Board of Directors */}
          <div>
            <div className="mb-10 text-black">
              <CommonHeading
                beforeHighlight="Meet Our"
                highlight="Board of Directors"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-5">
              {directors.map((person) => (
                <EmployeeCard
                  key={person.name}
                  image={person.image}
                  name={person.name}
                  title={person.title}
                  variant="circle"
                  onClick={() => console.log(`Viewing bio for ${person.name}`)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;

type ExecutiveCardProps = {
  image: string;
  name: string;
  title: string;
  onClick?: () => void;
  variant?: "portrait" | "circle";
};

const EmployeeCard = ({
  image,
  name,
  title,
  onClick,
  variant = "portrait",
}: ExecutiveCardProps) => {
  const isCircle = variant === "circle";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      viewport={{ once: true, amount: 0.3 }}
      className={`group ${
        isCircle ? "flex flex-col gap-4 items-center" : ""
      } cursor-pointer`}
    >
      <div
        className={`relative overflow-hidden ${
          isCircle ? "w-60 h-60 rounded-full" : "mb-4"
        } group-hover:border-2 group-hover:border-beast-purple-light transition-all duration-300 ${
          isCircle ? "" : "hover:border-2 border-beast-purple-light"
        }`}
      >
        <img
          src={image}
          alt={name}
          className={`grayscale object-cover object-center transition-transform duration-500 ${
            isCircle
              ? "w-full h-full rounded-full"
              : "w-full aspect-[4/5] group-hover:scale-105"
          }`}
        />
      </div>

      <div className={isCircle ? "text-center" : ""}>
        <h4 className="text-xl font-semibold">{name}</h4>
        <p className="text-gray-600 mb-2 text-sm">{title}</p>
      </div>

      <div
        onClick={onClick}
        className="flex items-center text-sm text-brand-red hover:text-beast-purple-light transition-all ease-in-out duration-300"
      >
        View Bio
        <ArrowRight size={16} className="ml-1 text-brand-red" />
      </div>
    </motion.div>
  );
};
