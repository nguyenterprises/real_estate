"use client";

import { motion } from "framer-motion";
import { fadeIn, staggerContainer, zoomIn } from "@/ui/motion";

import { useState } from "react";
import CTA from "./CTA";

const SoldNumber = ({ number, address, delay, link }) => {
  const [viewDetails, setViewDetails] = useState(false);

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="flex flex-col justify-start xl:flex-row xl:items-center xl:gap-14"
    >
      <motion.div
        variants={zoomIn(delay, 1)}
        className="text-gradient flex items-center font-medium"
      >
        <span className="text-5xl">$</span>
        <span className="text-6xl" data-value={number}>
          {number}
        </span>
        <span className="text-6xl">M</span>
      </motion.div>
      <motion.div
        variants={fadeIn("left", "tween", delay, 1)}
        onMouseEnter={() => setViewDetails(true)}
        onMouseLeave={() => setViewDetails(false)}
      >
        {!viewDetails ? (
          <div className="text-right text-lg xl:text-xl tracking-wide xl:text-left">
            {address}
          </div>
        ) : (
          <div className="flex justify-center xl:justify-start">
            <CTA phrase="View Details" icon="list" link={link} />
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default SoldNumber;
