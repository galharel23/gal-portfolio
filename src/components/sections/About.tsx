import { useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";

import { SectionWrapper } from "../../hoc";
import { fadeIn, zoomIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";

type FunFact = {
  title: string;
  fact: string;
};

type FunFactWithColor = FunFact & { gradient: string; image: string };

const funFacts: FunFactWithColor[] = [
  {
    title: "Marathon",
    fact: "I'm a marathon finisher! My first one was the Jerusalem Marathon — 19 km of uphill climbs, 4°C temperatures, and a ton of rain. Crossing that finish line is something I'll never forget.",
    gradient: "from-[#915EFF] to-[#4B1FA8]",
    image: "/marathon.jpeg",
  },
  {
    title: "Mechina",
    fact: "Before my military service, I spent a year at a pre-army academy (Mechina) at Kibbutz Kfar HaNassi in the Upper Galilee. It was one of the most meaningful years of my life.",
    gradient: "from-[#00D4FF] to-[#0066CC]",
    image: "/mechina.jpeg",
  },
  {
    title: "Paris Olympics 2024",
    fact: "I played basketball for years and even got certified as a coach at the Wingate Institute. Sports are a huge part of who I am — a major highlight was flying to the Paris Olympics to watch the Dream Team live.",
    gradient: "from-[#FF6B6B] to-[#9B1515]",
    image: "/sport.jpeg",
  },
  {
    title: "Music",
    fact: "I play both piano and guitar, and there's barely a moment in my day without music playing. My favorite artist is Dudu Tassa — look him up, you won't regret it.",
    gradient: "from-[#00FFA3] to-[#007A4E]",
    image: "/music.jpeg",
  },
];

const MysteryBox = ({
  index,
  gradient,
  onClick,
}: {
  index: number;
  gradient: string;
  onClick: () => void;
}) => (
  <motion.button
    variants={zoomIn(0.1 + index * 0.15, 0.5)}
    onClick={onClick}
    className={`group relative flex h-36 w-36 cursor-pointer flex-col items-center justify-center rounded-2xl bg-gradient-to-br ${gradient} shadow-lg transition-all duration-300 sm:h-40 sm:w-40`}
    whileHover={{ scale: 1.06, y: -4 }}
    whileTap={{ scale: 0.97 }}
  >
    <span className="text-5xl font-black text-white/80 transition-transform duration-300 group-hover:scale-110 group-hover:text-white">
      ?
    </span>
    <span className="mt-2 text-xs uppercase tracking-widest text-white/60">
      Tap me
    </span>
  </motion.button>
);

const Popup = ({
  fact,
  onClose,
}: {
  fact: FunFactWithColor | null;
  onClose: () => void;
}) =>
  createPortal(
    <AnimatePresence>
      {fact && (
        /* Backdrop — acts as the flex centering container */
        <motion.div
          key="backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{ position: "fixed", inset: 0, zIndex: 9999 }}
          className="flex items-center justify-center bg-black/70 backdrop-blur-sm"
          onClick={onClose}
        >
          {/* Modal — stop clicks from closing when clicking inside */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.85, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 30 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="relative w-[90vw] max-w-md rounded-2xl border border-white/10 bg-[#151030] p-6 shadow-2xl shadow-[#915EFF]/20"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute right-4 top-4 text-white/40 transition-colors hover:text-white"
              aria-label="Close"
            >
              ✕
            </button>

            {/* Image */}
            <img
              src={fact.image}
              alt={fact.title}
              className="mb-5 h-48 w-full rounded-xl object-cover"
            />

            {/* Content */}
            <h3 className="mb-2 text-lg font-bold text-white">{fact.title}</h3>
            <p className="text-secondary text-[15px] leading-relaxed">
              {fact.fact}
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );

const About = () => {
  const [activeFact, setActiveFact] = useState<FunFactWithColor | null>(null);

  return (
    <>
      <Header useMotion={true} {...config.sections.about} />

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="text-secondary mt-4 max-w-3xl text-[17px] leading-[30px]"
      >
        {config.sections.about.content}
      </motion.p>

      <motion.p
        variants={fadeIn("", "", 0.2, 1)}
        className="text-secondary mt-4 max-w-3xl text-[17px] leading-[30px]"
      >
        {config.sections.about.content2}
      </motion.p>

      {/* Break the Ice section */}
      <motion.div
        variants={fadeIn("up", "tween", 0.3, 0.8)}
        className="mt-16"
      >
        <div className="mb-2 flex items-center gap-3">
          <span className="text-3xl">🧊</span>
          <h3 className="text-white font-black text-[28px] sm:text-[36px]">
            Break the Ice
          </h3>
        </div>
        <p className="text-secondary text-[15px] sm:text-[17px] mb-10 max-w-xl">
          Think you know me from the about section? Flip a box — there's always
          more beneath the surface.
        </p>

        <div className="flex flex-wrap gap-6">
          {funFacts.map((fact, index) => (
            <MysteryBox
              key={index}
              index={index}
              gradient={fact.gradient}
              onClick={() => setActiveFact(fact)}
            />
          ))}
        </div>
      </motion.div>

      <Popup fact={activeFact} onClose={() => setActiveFact(null)} />
    </>
  );
};

export default SectionWrapper(About, "about");
