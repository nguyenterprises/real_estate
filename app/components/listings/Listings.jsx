"use client";

import { useState } from "react";
import PreserveRatio from "@/app/components/reuseable/PreserveRatio";
import RenderImage from "../images/RenderImage";
import useMeasure from "react-use-measure";
import { motion } from "framer-motion";
import { urlFor } from "@/app/lib/sanityImageUrl";
import Link from "next/link";

const Listings = ({ listings, sold }) => {
  const [overlayDescriptor, setOverlayDescriptor] = useState({
    display: false,
    index: null,
  });
  const [ref, bounds] = useMeasure();

  return (
    <div className="padding-y mx-auto flex w-[98%] flex-col gap-4 lg:w-[100%]">
      <div className="flex flex-wrap items-center justify-center gap-2">
        {listings &&
          listings.map((listing, index) => (
            <Link
              href={`/listing/${listing.slug.current}`}
              ref={ref}
              key={index}
              className="group relative flex w-[100%] h-auto justify-center overflow-hidden rounded transition lg:w-[49%]"
              onMouseEnter={() =>
                setOverlayDescriptor({ display: true, index: index })
              }
              onMouseLeave={() =>
                setOverlayDescriptor({ display: false, index: null })
              }
            >
              <PreserveRatio
                width="100%"
                aspectRatio="6/9"
                twStyles={`rounded text-white transition ease-in-out hover:scale-125 cursor-pointer ${
                  sold === true
                    ? "brightness-50 hover:brightness-100"
                    : "hover:brightness-50"
                }`}
              >
                <RenderImage
                  source={urlFor(listing.mainImage.asset._ref).url()}
                  width={bounds.width}
                  height={bounds.height}
                />
              </PreserveRatio>
              {sold === true && (
                <div className="letter-shadow absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] -rotate-12 rounded border-8 border-rose-500/75 p-3 text-8xl font-bold uppercase text-rose-500/75 transition group-hover:hidden 2xl:text-9xl">
                  Sold
                </div>
              )}
              <div className="absolute bottom-3 left-3 text-white transition 2xl:flex 2xl:items-center 2xl:gap-[6rem] 2xl:pl-[1rem] 2xl:group-hover:hidden">
                <div className="text-2xl font-medium 2xl:text-4xl">
                  $
                  {sold === true
                    ? `${new Intl.NumberFormat("en-US").format(
                        listing.soldPrice
                      )}`
                    : `${new Intl.NumberFormat("en-US").format(
                        listing.askPrice
                      )}`}
                </div>
                <div className="text-lg font-light 2xl:hidden">
                  {listing.street}
                </div>
              </div>
              <div className="hidden font-light text-white transition 2xl:absolute 2xl:bottom-4 2xl:left-[50%] 2xl:flex 2xl:-translate-x-[50%] 2xl:text-2xl 2xl:group-hover:hidden">
                {listing.street}
              </div>
              {overlayDescriptor.display === true &&
                overlayDescriptor.index === index && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute bottom-0 left-0 flex w-[100%] flex-row-reverse font-semibold text-white transition 2xl:flex-row"
                  >
                    <div className="relative hidden w-[80%] flex-nowrap items-center gap-8 bg-white pl-2 text-black 2xl:flex 2xl:py-2 2xl:pl-[1rem]">
                      <div className="text-2xl 2xl:text-4xl">
                        $
                        {sold === true
                          ? `${new Intl.NumberFormat("en-US").format(
                              listing.soldPrice
                            )}`
                          : `${new Intl.NumberFormat("en-US").format(
                              listing.askPrice
                            )}`}
                      </div>
                      <div className="text-md absolute left-[50%] top-[50%] -translate-y-[50%] font-light 2xl:text-xl">
                        {listing.street}
                      </div>
                    </div>
                    <div className="flex w-[30%] flex-nowrap items-center justify-center bg-black py-6 text-center text-sm uppercase 2xl:py-4 2xl:text-xl">
                      View Details +
                    </div>
                  </motion.div>
                )}
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Listings;
