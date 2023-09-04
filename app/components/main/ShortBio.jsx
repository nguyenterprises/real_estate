"use client";

import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/ui/motion";
import Keanu from "../images/Keanu";
import useWidth from "@/ui/useWidth";
import useHeight from "@/ui/useHeight";
import Title from "../reuseable/Title";
import { shortBioVerbiage } from "@/constants/verbiage";
import CTA from "../reuseable/CTA";
import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";

const ShortBio = () => {
  const width = useWidth();
  const height = useHeight();

  const bioPhotoWidth = width < 1024 ? width : width * 0.91 * 0.45;
  const bioWidth = width < 1024 ? width * 0.91 : width - bioPhotoWidth;

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="padding-section-y relative"
    >
      <div className="flex items-center justify-center pb-10">
        <Title
          one={width < 640 ? "KEANU" : "ABOUT"}
          two={width < 640 ? "REEVES" : "KEANU REEVES"}
        />
      </div>
      <motion.div
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="blue-gradient mx-auto w-[91%] rounded text-white drop-shadow-xl"
      >
        <div className="flex flex-col">
          <div className="relative flex flex-col items-center justify-center bg-transparent pb-8 lg:flex-row lg:justify-start lg:pb-0 ">
            <Keanu number="9" height={height} width={bioPhotoWidth} />
            <div
              className="flex flex-col items-center justify-center gap-10 px-12 py-12 text-center lg:gap-5 lg:px-6 lg:py-4 lg:text-left xl:gap-10 xl:px-9 xl:leading-[1.8] [word-spacing:.025em] tracking-[.01em 2xl:px-48"
              style={{ width: bioWidth }}
            >
              <p className="font-bold text-[1.45rem] capitalize">
                {shortBioVerbiage.intro}
              </p>
              <div className="flex flex-col gap-8 text-[.95rem] leading-[1.6rem] md:w-[85%] lg:w-[100%] ">
                <p>{shortBioVerbiage.body}</p>
                <p>{shortBioVerbiage.body2}</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <div className="flex items-center pl-[5.25rem] pt-8 xl:pl-[5rem]">
        <div className="mx-auto w-[300px]">
          <CTA phrase="More About Keanu" icon="about" link="/about" />
        </div>
      </div>
      <div className="flex items-center justify-center gap-6 rounded px-3 py-6 xl:absolute xl:right-0 xl:top-1/2 xl:-translate-y-1/2 xl:flex-col xl:gap-3 xl:border-b xl:border-l xl:border-t xl:border-slate-400/60">
        <BsFacebook style={{ fontSize: "2rem" }} />
        <BsYoutube style={{ fontSize: "2rem" }} />
        <BsInstagram style={{ fontSize: "2rem" }} />
      </div>
    </motion.div>
  );
};

export default ShortBio;
