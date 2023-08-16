"use client";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

const Project = (Props: {
  title: string;
  description: string;
  link: string;
}) => {
  return (
    <>
      <Card
        heading={Props.title}
        description={Props.description}
        imgSrc={Props.link}
      />
    </>
  );
};

const Card = (Props: {
  heading: string;
  description: string;
  imgSrc: string;
}) => {
  return (
    <motion.div
      transition={{
        staggerChildren: 0.035,
      }}
      whileHover="hover"
      className="w-full h-96 bg-slate-300 rounded-lg overflow-hidden cursor-pointer group relative"
    >
      <div
        className="absolute inset-0 saturate-100 md:saturate-0 md:group-hover:saturate-100 group-hover:scale-110 transition-all duration-500"
        style={{
          backgroundImage: `url(${Props.imgSrc})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="p-4 relative z-20 h-full text-slate-300 group-hover:text-white transition-colors duration-500 flex flex-col justify-between">
        <FiArrowRight className="text-3xl group-hover:-rotate-45 transition-transform duration-500 ml-auto" />
        <div>
          <h4 className="text-sky-600">
            {Props.heading.split("").map((l, i) => (
              <ShiftLetter letter={l} key={i} />
            ))}
          </h4>
          <p className="text-sky-400">{Props.description}</p>
        </div>
      </div>
    </motion.div>
  );
};

const ShiftLetter = (Props: { letter: string; key: number }) => {
  return (
    <div className="inline-block overflow-hidden h-[36px] font-semibold text-3xl">
      <motion.span
        className="flex flex-col min-w-[4px]"
        style={{
          y: "0%",
        }}
        variants={{
          hover: {
            y: "-50%",
          },
        }}
        transition={{
          duration: 0.5,
        }}
      >
        <span>{Props.letter}</span>
        <span>{Props.letter}</span>
      </motion.span>
    </div>
  );
};

export default Project;
