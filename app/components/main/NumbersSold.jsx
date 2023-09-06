"use client";

import { motion } from "framer-motion";
import { fadeIn, staggerContainer, zoomIn } from "@/ui/motion";
import SoldNumber from "../reuseable/SoldNumber";
import Title from "../reuseable/Title";
import useWidth from "@/ui/useWidth";

const NumbersSold = () => {
  const width = useWidth();
  return (
    <>
      <div className="padding-section-y">
        <Title
          one={width < 640 ? "Selling" : "Sales"}
          two={width < 640 ? "Machine" : "Performance"}
        />
      </div>
      <div className="flex w-full flex-col items-center bg-slate-100">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="padding-x flex w-[100%] flex-col items-center gap-8 py-10 lg:flex-row lg:py-24 2xl:w-[90%]"
        >
          <div className="flex flex-col items-center gap-8 lg:w-[55%]">
            <div className="2xl:w-[80%] 2xl:pl-8">
              <motion.div
                variants={zoomIn(0.2, 1)}
                className="flex items-center justify-center lg:justify-start"
              >
                <span className="text-[5rem] md:text-[6rem] lg:text-[8rem]">
                  $
                </span>
                <span className="text-[6rem] md:text-[7rem] lg:text-[12rem]">
                  4
                </span>
                <span className="text-[6rem] md:text-[7rem] lg:text-[12rem]">
                  B+
                </span>
              </motion.div>
              <motion.div
                variants={fadeIn("up", "tween", 1, 1)}
                className="text-gradient mt-[-1.25em] text-center text-[2rem] font-medium uppercase tracking-widest lg:text-left lg:text-[3rem]"
              >
                in sales
              </motion.div>
              <div className="mt-8 text-center text-[1.1rem] lg:text-left lg:text-[1.4rem]">
                Keanu has a history of impeccably marketing distinguished
                properties
              </div>
            </div>
          </div>

          <div className=" flex flex-col items-center gap-8 lg:w-[45%] lg:items-start lg:gap-20 lg:px-12 2xl:pl-0">
            <div className="text-center text-3xl font-semibold uppercase lg:text-left lg:text-[2.5rem]">
              Record Breaking Sales
            </div>
            <div className="flex flex-col gap-6 lg:gap-20">
              <SoldNumber
                number="94"
                address="924 Bel Air Rd"
                delay="2"
                link="/listing/924-bel-air-rd-los-angeles-california-90077-na"
              />
              <SoldNumber
                number="70"
                address="1181 Hillcrest"
                delay="2.75"
                link="/listing/1181-n-hillcrest-rd-beverly-hills-90210-na"
              />
              <SoldNumber
                number="29"
                address="53 Beverly Park"
                delay="3.25"
                link="/listing/53-beverly-parkway-beverly-hills-california-na"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default NumbersSold;
