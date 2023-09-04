"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/ui/motion";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";

const PrevNext = ({ page, setPage, totalPages }) => {
  const [prevArrow, setPrevArrow] = useState(false);
  const [nextArrow, setNextArrow] = useState(false);
  return (
    <div className="flex-center gap-3 text-xl font-medium">
      <div
        className="flex-center cursor-pointer gap-1 duration-500 hover:text-slate-400 hover:ease-in-out"
        onMouseEnter={() => setPrevArrow(true)}
        onMouseLeave={() => setPrevArrow(false)}
        onClick={() => setPage(page === 0 ? totalPages : page - 1)}
      >
        {prevArrow ? (
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            exit="hidden"
            viewport={{ once: false, amount: 0.25 }}
          >
            <motion.div variants={fadeIn("left", "tween", 0.2, 0.25)}>
              <BsArrowLeft />
            </motion.div>
          </motion.div>
        ) : (
          <BsArrowLeft />
        )}
        <div>PREV</div>
      </div>

      <div>|</div>

      <div
        className="flex-center cursor-pointer gap-1 duration-500 hover:text-slate-400 hover:ease-in-out"
        onMouseEnter={() => setNextArrow(true)}
        onMouseLeave={() => setNextArrow(false)}
        onClick={() => setPage(page === totalPages ? 0 : page + 1)}
      >
        <div>NEXT</div>
        {nextArrow ? (
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            exit="hidden"
            viewport={{ once: false, amount: 0.25 }}
            className="flex-center"
          >
            <motion.div variants={fadeIn("right", "tween", 0.2, 0.25)}>
              <BsArrowRight />
            </motion.div>
          </motion.div>
        ) : (
          <BsArrowRight />
        )}
      </div>
    </div>
  );
};

export default PrevNext;
