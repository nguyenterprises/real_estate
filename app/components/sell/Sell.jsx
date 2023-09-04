"use client";
import useWidth from "@/ui/useWidth";
import useHeight from "@/ui/useHeight";
import Image from "next/image";
import { sellKeanu } from "@/constants/verbiage";
import StandardContact from "../contact/StandardContact";
import SoldPaginate from "../listings/SoldPaginate";
import CTA2 from "../reuseable/CTA2";
import Footer from "../footer/Footer";

const SellPage = ({ properties }) => {
  const width = useWidth();
  const height = useHeight();

  return (
    <div className="overflow-x-hidden">
      <div
        style={{
          width: width,
          height: `${height * 0.75}px`,
          position: "relative",
        }}
      >
        <Image
          src="/sellphoto.webp"
          alt="/sellphoto.webp"
          placeholder="blur"
          blurDataURL="/sellphoto.webp"
          fill
          sizes="(max-width: 2000px) 100vw"
          className="object-cover"
        />
      </div>
      <div className="flex flex-col items-start text-left pt-[2.15rem] pb-[2.6rem] [word-spacing:.025em] tracking-[.01em] gap-[.9rem] bg-slate-100">
        <h1 className="w-[91%] mx-auto font-bold text-[1.45rem]">
          {sellKeanu.intro.section1}
        </h1>
        <p className="w-[91%] mx-auto text-[.95rem] leading-[1.6rem]">
          {sellKeanu.intro.section2}
        </p>
      </div>

      <div className="w-[91%] mx-auto flex flex-col 2xl:flex-row 2xl:gap-6">
        <div className="2xl:w-[60%] pt-[2rem]">
          <div className="flex flex-col items-start text-left py-[2.5rem] [word-spacing:.05em] tracking-[.01em] gap-[1.6rem]">
            <h1 className="font-bold text-[1.25rem]">
              {sellKeanu.body.section1}
            </h1>
            <p className="text-[1.0925rem] font-medium leading-7 2xl:pr-[4rem]">
              {sellKeanu.body.section2}
            </p>
            <p className="text-[1.0925rem] font-medium leading-7 2xl:pr-[4rem]">
              {sellKeanu.body.section3}
            </p>
            <p className="text-[1.0925rem] font-medium leading-7 2xl:pr-[4rem]">
              {sellKeanu.body.section4}
            </p>
          </div>

          <div className="flex flex-col items-start text-left py-[2.5rem] [word-spacing:.05em] tracking-[.01em] gap-[2.6rem]">
            <h1 className="font-bold text-[1.65rem]">
              Download Our Seller's Guide
            </h1>
            <div className="pl-36">
              <div
                className="w-[350px] pt-20 pl-36 pb-72 relative overflow-hidden"
                style={{
                  background: "linear-gradient(315deg, #3ef4d5, #2247ce 90%)",
                }}
              >
                <h3 className="font-semibold text-[.75rem] uppercase text-white">
                  Continental
                </h3>
                <p className="text-[1.5rem] text-white">Seller's Guide</p>
                <div className="absolute bottom-6 right-3 flex gap-2">
                  <p className="pr-2 border-r border-white text-white text-[.3rem]">
                    thecontinental.com
                  </p>
                  <p className="pr-2 border-r border-white text-white text-[.3rem]">
                    keanu@thecontinental.com
                  </p>
                  <p className="text-white text-[.3rem]">310.803.6889</p>
                </div>
                <div className="absolute bottom-[32%] -translate-y-[32%] -left-[56%] -rotate-90 uppercase font-extrabold text-[3.75rem] text-white">
                  Continental
                </div>
              </div>
            </div>
          </div>

          <div className="py-[2.5rem] flex flex-col items-start 2xl:flex-row">
            <div className="flex flex-col items-start text-left py-[2.5rem] 2xl:py-0 [word-spacing:.05em] tracking-[.01em] gap-[1.6rem] border-b 2xl:border-b-0 2xl:border-r border-slate-400/60 2xl:pr-[2.5rem] 2xl:w-[33%] 2xl:h-[35vh] w-full">
              <h3 className="font-bold text-[1.25rem]">Continental ADX</h3>
              <p className="text-[1rem] font-medium leading-7 text-black/50">
                {sellKeanu.points.section1}
              </p>
            </div>

            <div className="flex flex-col items-start text-left py-[2.5rem] 2xl:py-0 [word-spacing:.05em] tracking-[.01em] gap-[1.6rem] border-b 2xl:border-b-0 2xl:border-r border-slate-400/60 2xl:px-[2.5rem] 2xl:w-[33%] 2xl:h-[35vh] w-full">
              <h3 className="font-bold text-[1.25rem]">Continental Studios</h3>
              <p className="text-[1rem] font-medium leading-7 text-black/50">
                {sellKeanu.points.section2}
              </p>
            </div>

            <div className="flex flex-col items-start text-left py-[2.5rem] 2xl:py-0 [word-spacing:.05em] tracking-[.01em] gap-[1.6rem] 2xl:px-[2.5rem] 2xl:w-[33%] 2xl:h-[35vh] w-full">
              <h3 className="font-bold text-[1.25rem]">
                Your Success is Our Success.
              </h3>
              <p className="text-[1rem] font-medium leading-7 text-black/50">
                {sellKeanu.points.section3}
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto 2xl:mx-0 w-[91%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%] py-[2.5rem]">
          <div className="py-[2.5rem]  h-min gap-[1.6rem] flex flex-col px-[3rem] rounded border-2 border-slate-400/60">
            <h1 className="uppercase [word-spacing:.05em] tracking-[.01em] font-bold text-[1.45rem] text-center">
              Sell with us!
            </h1>
            <div className="h-1 continental-gradient rounded w-full"></div>
            <StandardContact textSize="sm" />
          </div>
        </div>
      </div>

      <div className="py-[2.5rem] flex flex-col gap-6">
        <div className="w-[91%] mx-auto flex flex-between">
          <h3 className="font-bold text-[1.65rem]">
            What happens when you SELL with Continental?
          </h3>
          <div className="hidden items-center lg:flex">
            <CTA2 phrase="View All" icon="list" link="/sold" />
          </div>
        </div>
        <SoldPaginate properties={properties} />
        <div className="lg:hidden flex items-center justify-center">
          <CTA2 phrase="View All" icon="list" link="/sold" />
        </div>
      </div>

      <div className="py-[2.5rem] bg-slate-100 text-center">
        <div className="w-[91%] mx-auto flex flex-col gap-3">
          <h3 className="font-bold text-[1.45rem]">
            {sellKeanu.history.section1}
          </h3>
          <p className="text-[.95rem] leading-[1.6rem]">
            {sellKeanu.history.section2}
          </p>
        </div>
      </div>

      <div className="py-[1rem] lg:py-[2.5rem] flex flex-col gap-2 items-center">
        <div className="w-[91%] lg:w-min flex mx-auto items-center justify-center flex-col lg:flex-row">
          <div className="border-b-2 lg:border-b-0 lg:border-r border-slate-400/60 text-center py-[1.5rem] lg:py-0 px-0 lg:px-[2.5rem] w-full gap-1 flex flex-col">
            <h3 className="font-bold text-[1.45rem] text-gradient">
              {new Intl.NumberFormat("en-US").format(
                sellKeanu.statistics.followNumber
              )}
              +
            </h3>
            <p className="text-[.95rem] leading-[1.6rem] whitespace-nowrap">
              {sellKeanu.statistics.followDescription}
            </p>
          </div>
          <div className="text-center py-[1.5rem] lg:py-0 px-0 lg:px-[2.5rem] w-full gap-1 flex flex-col">
            <h3 className="font-bold text-[1.45rem] text-gradient">
              {sellKeanu.statistics.impressionNumber}M
            </h3>
            <p className="text-[.95rem] leading-[1.6rem] whitespace-nowrap">
              {sellKeanu.statistics.impressionDescription}
            </p>
          </div>
        </div>
        <h3 className="font-bold text-[1.65rem]">
          {sellKeanu.statistics.closeLine}
        </h3>
      </div>

      <div className="flex items-center bg-slate-100">
        <div className="flex flex-col lg:flex-row w-[91%] mx-auto">
          <div className="flex flex-col lg:w-[60%] xl:w-[70%] pt-[2rem]">
            <div className="flex flex-col items-start text-left py-[2.5rem] [word-spacing:.05em] tracking-[.01em] gap-[1.6rem]">
              <h1 className="font-bold text-[1.25rem]">
                {sellKeanu.discover.title}
              </h1>
              <p className="text-[1.0925rem] font-medium leading-7 lg:pr-[4rem]">
                {sellKeanu.discover.body}
              </p>
            </div>
            <div className="flex flex-col items-start text-left pb-[2.5rem] [word-spacing:.05em] tracking-[.01em] gap-[1.6rem]">
              <h1 className="font-bold text-[1.25rem]">
                {sellKeanu.signature.title}
              </h1>
              <p className="text-[1.0925rem] font-medium leading-7 lg:pr-[4rem]">
                {sellKeanu.signature.body}
              </p>
            </div>
          </div>
          <div className="mx-auto w-[91%] sm:w-[80%] md:w-[70%] lg:w-[40%] xl:w-[30%] py-[2.5rem]">
            <div className="py-[2.5rem]  h-min gap-[1.6rem] flex flex-col px-[3rem] rounded border-2 border-slate-400/60">
              <h1 className="uppercase [word-spacing:.05em] tracking-[.01em] font-bold text-[1.45rem] text-center">
                Sell with us!
              </h1>
              <div className="h-1 continental-gradient rounded w-full"></div>
              <StandardContact textSize="sm" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SellPage;
