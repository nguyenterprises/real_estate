"use client";

import { motion } from "framer-motion";
import { fadeIn, slideIn, staggerContainer, textVariant } from "@/ui/motion";
import useMeasure from "react-use-measure";

const MotionContainer = () => {
  const [ref, bounds] = useMeasure();
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="absolute left-1/2 top-1/2 w-11/12 -translate-x-1/2 -translate-y-1/2 md:w-fit"
    >
      <motion.div
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="padding-y padding-x motion__gradient z-20 flex flex-col items-center gap-2 rounded text-center text-white lg:gap-3"
      >
        <div
          ref={ref}
          className="letter-shadow whitespace-nowrap text-2xl sm:text-3xl font-medium tracking-wide  md:text-6xl lg:text-7xl 2xl:text-8xl"
        >
          GUIDING YOU HOME
        </div>
        <div
          className="continental-gradient h-[.1rem] rounded align-middle lg:h-1"
          style={{ width: `${bounds.width * 0.8}px` }}
        ></div>
        <div className="padding-x letter-shadow text-base font-normal sm:text-lg md:text-xl lg:text-2xl 2xl:text-3xl">
          Serving Beverly Hills, Hollywood and Los Angeles
        </div>
      </motion.div>
    </motion.div>
  );
};

export default MotionContainer;
