"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  fadeIn,
  slideIn,
  staggerContainer,
  textVariant,
  zoomIn,
} from "@/ui/motion";
import { BsArrowRight, BsListUl, BsInfoSquare } from "react-icons/bs";
import Link from "next/link";

const CTA = ({ phrase, icon, link }) => {
  const [cta, setCta] = useState(false);

  const iconDisplay = (icon) => {
    switch (true) {
      case icon == "list":
        return <BsListUl className="text-white " />;
      case icon == "about":
        return <BsInfoSquare className="text-white " />;
      default:
        return <BsListUl className="text-white " />;
    }
  };

  return (
    <Link
      href={`${link}`}
      onMouseEnter={() => setCta(true)}
      onMouseLeave={() => setCta(false)}
      className="cta-animate flex h-8 items-center gap-2 w-[100%]"
    >
      <div className="flex flex-col group">
        <div className="cursor-pointer text-[1.3rem] font-semibold uppercase">
          {phrase}
        </div>
        <div className="h-[1px] continental-gradient w-full group-hover:hidden"></div>
      </div>

      <AnimatePresence>
        {cta && (
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            exit="hidden"
            viewport={{ once: false, amount: 0.25 }}
            className="flex-center gap-0.5"
          >
            <motion.div variants={fadeIn("right", "tween", 0.2, 0.25)}>
              <BsArrowRight />
            </motion.div>
            <motion.div
              variants={zoomIn(0.5, 0.3)}
              className="continental-gradient rounded-full px-2 py-2"
            >
              {iconDisplay(icon)}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Link>
  );
};

export default CTA;
