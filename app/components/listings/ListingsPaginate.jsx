"use client";

import { useState, useEffect } from "react";
import PrevNext from "../reuseable/PrevNext";
import useWidth from "@/ui/useWidth";
import PreserveRatio from "@/app/components/reuseable/PreserveRatio";
import RenderImage from "../images/RenderImage";
import useMeasure from "react-use-measure";
import { motion } from "framer-motion";
import { urlFor } from "@/app/lib/sanityImageUrl";
import Link from "next/link";

function ListingsPaginate({ properties }) {
  const [availableProperties, setAvailableProperties] = useState();
  const [overlayDescriptor, setOverlayDescriptor] = useState({
    display: false,
    index: null,
  });
  const [page, setPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(2);
  const totalPages = Math.ceil(
    (availableProperties?.length - 1) / itemsPerPage
  );
  const indexStart = page * itemsPerPage;

  const [ref, bounds] = useMeasure();
  const width = useWidth();
  const mediaWidth = width < 1024 ? "100%" : "49%";

  useEffect(() => {
    width >= 1024 ? setItemsPerPage(4) : setItemsPerPage(2);
  }, [width]);

  useEffect(() => {
    const avp = properties.filter((status) => status.status == "available");
    setAvailableProperties(avp);
  }, [properties]);

  return (
    <div className="py-4 mx-auto flex w-[98%] flex-col gap-4 lg:w-[100%]">
      <div className="flex flex-wrap items-center justify-center gap-2">
        {availableProperties &&
          availableProperties
            .slice(indexStart, indexStart + itemsPerPage)
            .map((listing, index) => (
              <Link
                prefetch
                href={`/listing/${listing.slug.current}`}
                ref={ref}
                key={index}
                className="group relative flex w-[100%] justify-center overflow-hidden rounded transition lg:w-[49%]"
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
                  twStyles="rounded bg-[rgba(0,0,0,0.8)] text-white transition ease-in-out hover:scale-125 cursor-pointer hover:brightness-50"
                >
                  <RenderImage
                    source={urlFor(listing.mainImage.asset._ref).url()}
                    width={bounds.width}
                    height={bounds.height}
                  />
                </PreserveRatio>
                <div className="absolute bottom-3 left-3 text-white transition 2xl:flex 2xl:items-center 2xl:gap-[6rem] 2xl:pl-[1rem] 2xl:group-hover:hidden">
                  <div className="text-2xl font-medium 2xl:text-4xl">
                    ${new Intl.NumberFormat("en-US").format(listing.askPrice)}
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
                      initial={{ opacity: 1, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="absolute bottom-0 left-0 flex w-[100%] flex-row-reverse font-semibold text-white transition 2xl:flex-row"
                    >
                      <div className="relative hidden w-[80%] flex-nowrap items-center gap-8 bg-white pl-2 text-black 2xl:flex 2xl:py-2 2xl:pl-[1rem]">
                        <div className="text-2xl 2xl:text-4xl">
                          $
                          {new Intl.NumberFormat("en-US").format(
                            listing.askPrice
                          )}
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
      <div className="flex items-center justify-center py-4">
        <PrevNext page={page} setPage={setPage} totalPages={totalPages} />
      </div>
    </div>
  );
}

export default ListingsPaginate;
