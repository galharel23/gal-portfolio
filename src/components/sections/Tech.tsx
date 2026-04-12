import { useState } from "react";
import { motion } from "framer-motion";

import { SectionWrapper } from "../../hoc";
import { technologies } from "../../constants";
import { fadeIn } from "../../utils/motion";

const Tech = () => {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <>
      <motion.div variants={fadeIn("", "", 0.1, 1)}>
        <p className="text-secondary text-[14px] uppercase tracking-wider">
          What I work with
        </p>
        <h2 className="text-white font-black text-[40px] xs:text-[50px] md:text-[60px]">
          Skills.
        </h2>
      </motion.div>

      <div className="mt-16 flex flex-row flex-wrap justify-center gap-6">
        {technologies.map((technology, index) => (
          <motion.div
            key={technology.name}
            variants={fadeIn("up", "spring", index * 0.05, 0.5)}
            className="relative flex flex-col items-center gap-2"
            onMouseEnter={() => setHovered(technology.name)}
            onMouseLeave={() => setHovered(null)}
          >
            <div
              className={`bg-tertiary rounded-2xl p-4 w-[90px] h-[90px] flex items-center justify-center transition-all duration-200 cursor-default ${
                hovered === technology.name
                  ? "scale-110 shadow-lg shadow-[#915eff55]"
                  : "scale-100"
              }`}
            >
              <img
                src={technology.icon}
                alt={technology.name}
                className="w-14 h-14 object-contain"
              />
            </div>

            {hovered === technology.name && (
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-3 py-1 rounded-md whitespace-nowrap pointer-events-none z-50 shadow-lg">
                {technology.name}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "skills");
