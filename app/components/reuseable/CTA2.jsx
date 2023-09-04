"use client";

import { useState } from "react";
import Link from "next/link";
import { BsArrowRight, BsListUl, BsInfoSquare } from "react-icons/bs";
import { motion } from "framer-motion";

const CTA2 = ({ phrase, icon, link }) => {
  const [cta2, setCta2] = useState(false);
  const iconDisplay = (icon) => {
    switch (true) {
      case icon == "list":
        return <BsListUl className="text-white group-hover:text-purple-700" />;
      case icon == "about":
        return (
          <BsInfoSquare className="text-white group-hover:text-purple-700" />
        );
      default:
        return <BsListUl className="text-white group-hover:text-purple-700" />;
    }
  };
  return (
    <Link
      className="group"
      href={`${link}`}
      onMouseEnter={() => setCta2(true)}
      onMouseLeave={() => setCta2(false)}
    >
      <motion.div
        className="bg-gradient-to-r from-purple-700 to-rose-500 rounded-md flex items-center p-[2px]"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <div className="rounded-md bg-transparent py-2 px-6 text-white group-hover:bg-white  text-[1.3rem] font-semibold uppercase flex items-center gap-2 flex-nowrap">
          {iconDisplay(icon)}
          <span
            className={`whitespace-nowrap ${cta2 ? "cta2-animate" : ""} w-full`}
          >
            {phrase}
          </span>
        </div>
      </motion.div>
    </Link>
  );
};

export default CTA2;
