"use client";

import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/ui/motion";
import Title from "../reuseable/Title";
import useWidth from "@/ui/useWidth";
import SoldPaginate from "./SoldPaginate";
import CTA2 from "../reuseable/CTA2";

const IntroRecentSold = ({ properties }) => {
  const width = useWidth();

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="w-[100%] flex-col items-center padding-section-y"
    >
      {/* Header Section */}
      <div className="mx-auto flex w-[85%] items-center justify-center pb-10 lg:flex-row lg:justify-between">
        <Title
          one={width < 640 ? "RECENT" : "KEANU'S"}
          two={width < 640 ? "SALES" : "RECENT SALES"}
        />

        <div className="hidden items-center lg:flex">
          <CTA2 phrase="View All" icon="list" link="/sold" />
        </div>
      </div>
      {/* End Header Section */}

      <motion.div variants={fadeIn("up", "tween", 0.2, 1)}>
        {/* Listings Section */}
        <div className="flex flex-col items-center justify-center">
          <SoldPaginate properties={properties} />
        </div>
        {/* End Listings Section */}

        {/* Mobile screen layout */}
        <div className="lg:hidden flex items-center justify-center">
          <CTA2 phrase="View All" icon="list" link="/sold" />
        </div>
        {/* End Mobile screen layout */}
      </motion.div>
    </motion.div>
  );
};

export default IntroRecentSold;
