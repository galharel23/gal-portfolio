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

type FunFactWithColor = FunFact & { gradient: string };

const funFacts: FunFactWithColor[] = [
  {
    title: "The Debug Marathon",
    fact: "I once spent 6 hours hunting a bug that turned out to be a single wrong variable name. Zero regrets — I learned more in those 6 hours than in a week of lectures.",
    gradient: "from-[#915EFF] to-[#4B1FA8]",
  },
  {
    title: "Paper Addict",
    fact: "I've read more AI research papers this year than novels in my entire life. My bookmarks folder is basically a second degree.",
    gradient: "from-[#00D4FF] to-[#0066CC]",
  },
  {
    title: "Two Languages at Once",
    fact: "I think in code and speak in metaphors. I can explain how a neural network works using only a pizza analogy — and it actually makes sense.",
    gradient: "from-[#FF6B6B] to-[#9B1515]",
  },
  {
    title: "Built From Scratch",
    fact: "Every project I've ever been proud of started the same way: a blank file, a vague idea, and way too much coffee. The blank file always wins eventually.",
    gradient: "from-[#00FFA3] to-[#007A4E]",
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
  fact: FunFact | null;
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

            {/* Image placeholder */}
            <div className="mb-5 flex h-48 w-full items-center justify-center rounded-xl border-2 border-dashed border-white/20 bg-white/5">
              <div className="flex flex-col items-center gap-2 text-white/30">
                <span className="text-4xl">🖼️</span>
                <span className="text-sm">Image coming soon</span>
              </div>
            </div>

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
  const [activeFact, setActiveFact] = useState<FunFact | null>(null);

  return (
    <>
      <Header useMotion={true} {...config.sections.about} />

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="text-secondary mt-4 max-w-3xl text-[17px] leading-[30px]"
      >
        {config.sections.about.content}
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
