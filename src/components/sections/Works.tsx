import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { github } from "../../assets";
import { SectionWrapper } from "../../hoc";
import { projects } from "../../constants";
import { fadeIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";
import { TProject } from "../../types";

const ProjectCard: React.FC<{ index: number } & TProject> = ({
  index,
  name,
  description,
  tags,
  image,
  sourceCodeLink,
  liveLink,
  underDevelopment,
  imageContain,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        glareEnable
        tiltEnable
        tiltMaxAngleX={30}
        tiltMaxAngleY={30}
        glareColor="#aaa6c3"
      >
        <div className="flex w-full flex-col rounded-2xl bg-[#0e2148] p-6 sm:h-[680px] sm:w-[360px]">
          <div className="relative h-[300px] w-full">
            <img
              src={image}
              alt={name}
              className={`h-full w-full rounded-2xl ${
                imageContain ? "bg-white object-contain p-4" : "object-cover"
              }`}
            />
            {underDevelopment && (
              <div className="absolute right-3 top-3 flex items-center justify-center rounded-full bg-yellow-400 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-black shadow-md">
                Under Development
              </div>
            )}
            <div className="card-img_hover absolute inset-0 m-3 flex justify-end gap-2">
              {sourceCodeLink && (
                <div
                  onClick={() => window.open(sourceCodeLink, "_blank")}
                  className="black-gradient flex h-10 w-10 cursor-pointer items-center justify-center rounded-full"
                >
                  <img
                    src={github}
                    alt="github"
                    className="h-1/2 w-1/2 object-contain"
                  />
                </div>
              )}
              {liveLink && (
                <div
                  onClick={() => window.open(liveLink, "_blank")}
                  className="black-gradient flex h-10 w-10 cursor-pointer items-center justify-center rounded-full"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-1/2 w-1/2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="white"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </div>
              )}
            </div>
          </div>
          <div className="mt-5">
            <h3 className="text-[26px] font-bold text-white">{name}</h3>
            <p className="text-secondary mt-2 text-[15px]">{description}</p>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p key={tag.name} className={`text-[15px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <Header useMotion={true} {...config.sections.works} />

      <div className="flex w-full flex-col gap-4">
        {config.sections.works.content.split("\n\n").map((para, i) => (
          <motion.p
            key={i}
            variants={fadeIn("", "", 0.1 + i * 0.1, 1)}
            className="text-secondary max-w-3xl text-[17px] leading-[30px]"
          >
            {para}
          </motion.p>
        ))}
      </div>

      <div className="mt-20 flex flex-wrap justify-center gap-7 lg:flex-nowrap">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
