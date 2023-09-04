"use client";
import { motion } from "framer-motion";
import { fadeIn, slideIn, staggerContainer, textVariant } from "@/ui/motion";
import useHeight from "@/ui/useHeight";
import Title from "../reuseable/Title";
import { introMediaVerbiage } from "@/constants/verbiage";
import useWidth from "@/ui/useWidth";
import CTA from "../reuseable/CTA";
import PreserveRatio from "@/app/components/reuseable/PreserveRatio";
import PressFeed from "./PressFeed";

const IntroMedia = () => {
  const height = useHeight();
  const width = useWidth();
  const mediaWidth =
    width < 1024 ? "100%" : width >= 1024 && width < 1280 ? "65%" : "70%";
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="w-full"
    >
      <motion.div
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="padding-section-y mx-auto flex w-[91%] flex-col items-center justify-between gap-8 lg:flex-row lg:gap-0"
      >
        <div className="flex w-[100%] flex-col items-center gap-8 px-4 lg:w-[30%] lg:items-start">
          <Title one="MEDIA" two={width < 1024 ? "RECOGNITION" : "PRESS"} />
          <p className="lg: pr-4 text-center text-[1.05rem] lg:text-left">
            {introMediaVerbiage}
          </p>
          {/* For large screens */}
          <div className="mx-auto hidden w-[300px] items-center lg:flex">
            <CTA phrase="View More" icon="list" link="" />
          </div>
          {/* End for large screens */}
        </div>

        <PreserveRatio
          width={mediaWidth}
          aspectRatio="1.5/3"
          twStyles="rounded bg-[rgba(0,0,0,0.8)] text-white"
        >
          <PressFeed />
        </PreserveRatio>
      </motion.div>
    </motion.div>
  );
};

export default IntroMedia;
