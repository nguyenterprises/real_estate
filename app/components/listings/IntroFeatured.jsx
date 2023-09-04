"use client";

import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/ui/motion";
import ListingsPaginate from "./ListingsPaginate";
import Title from "../reuseable/Title";
import CTA2 from "../reuseable/CTA2";

const IntroFeatured = ({ properties }) => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="w-[100%] padding-section-y flex-col items-center"
    >
      {/* Header Section */}
      <div className="mx-auto flex w-[85%] items-center justify-center py-6 lg:flex-row lg:justify-between">
        <Title one="current" two="listings" />
        <div className="hidden items-center lg:flex">
          <CTA2 phrase="See More Properties" icon="list" link="/active" />
        </div>
      </div>
      {/* End Header Section */}

      <motion.div variants={fadeIn("up", "tween", 0.2, 1)}>
        {/* Listings Section */}
        <div className="flex flex-col items-center justify-center">
          <ListingsPaginate properties={properties} />
        </div>
        {/* End Listings Section */}

        {/* Mobile screen layout */}
        <div className="lg:hidden flex items-center justify-center">
          <CTA2 phrase="See More Properties" icon="list" link="/active" />
        </div>
        {/* End Mobile screen layout */}
      </motion.div>
    </motion.div>
  );
};

export default IntroFeatured;
