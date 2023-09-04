"use client";

import { useSnapshot } from "valtio";
import state from "@/store";

import ImageSlider from "../reuseable/ImageSlider";
import { PortableText } from "@portabletext/react";
import Amenities from "./Amenities";
import Specs from "./Specs";
import Overlay from "./Overlay";
import Image from "next/image";
import CTA from "../reuseable/CTA";
import Footer from "../footer/Footer";
import Iframe from "../reuseable/Iframe";
import useMeasure from "react-use-measure";
import CTA2 from "../reuseable/CTA2";
import Background from "../reuseable/Background";
import BuyFromUs from "../reuseable/BuyFromUs";

function Detail({ data }) {
  const snap = useSnapshot(state);
  const [bgRef, bgBounds] = useMeasure();
  const featuredPhotos = data?.imageGallery?.slice(0, 3);
  const imageGallery = data?.imageGallery;

  return (
    <div ref={bgRef}>
      <div style={{ marginTop: `-${snap.navHeight}px` }} className="relative">
        <ImageSlider
          data={featuredPhotos}
          arrows={false}
          size="100"
          type="loop"
          hero={true}
        />
        <Overlay data={data} />
      </div>
      <div className="z-10 padding-section-y mx-auto flex w-[91%] flex-col justify-center gap-6 lg:gap-12 xl:gap-24 lg:w-[85%] lg:flex-row relative">
        <div className="flex flex-col items-center gap-3 lg:w-[80%]">
          <div className="text-xl font-semibold uppercase tracking-wider lg:text-2xl">
            {data?.overview}
          </div>
          <div className="py-4 text-base tracking-wider lg:px-2 lg:text-lg">
            <PortableText hardBreak={false} value={data?.content} />
            {data?.status != "sold" && (
              <div className="lg:hidden py-12 mx-auto flex flex-col md:flex-row items-center justify-between gap-9 md:gap-0 lg:gap-24 w-[100%] lg:w-[85%] md:px-12 lg:px-24 ">
                <CTA2 phrase="Ask a Question" icon="about" link="" />
                <CTA2 phrase="Schedule Tour" icon="list" link="" />
              </div>
            )}
            <div className="pb-6 lg:pt-12 lg:pb-0 flex flex-col items-center gap-12">
              <Specs data={data} />
              <Amenities data={data} />
            </div>
          </div>
        </div>
        <div className="z-10 flex min-w-[250px] flex-col items-center gap-3 lg:w-[20%]">
          <div className="text-xl font-semibold uppercase tracking-wider lg:text-2xl">
            Agent
          </div>
          <div className="flex flex-col sm:flex-row lg:flex-col lg:justify-start gap-12 items-center sm:items-start lg:items-center justify-center py-4">
            <div className="flex flex-col items-center gap-3">
              <div>
                <Image
                  alt="avatar"
                  src="/avatar.jpg"
                  width={200}
                  height={200}
                  className="rounded object-cover w-auto h-auto"
                />
              </div>

              <div className="flex flex-col items-center">
                <h3 className="text-center text-xl font-semibold uppercase lg:text-left">
                  Keanu Reeves
                </h3>
                <h4 className="">Realtor | Broker</h4>
              </div>
            </div>
            {data?.status != "sold" && (
              <div className="hidden lg:flex flex-col items-center gap-3">
                <CTA2 phrase="Ask a Question" icon="about" link="" />
                <CTA2 phrase="Schedule Tour" icon="list" link="" />
              </div>
            )}

            <div className="rounded border border-slate-400/60 w-[91%] sm:w-[50%] lg:w-[100%] py-8 px-8 flex flex-col items-center lg:items-start gap-6">
              <h1 className="uppercase font-semibold text-xl lg:text-2xl">
                In the market?
              </h1>
              <div className="h-1 continental-gradient rounded w-full"></div>
              <p className="text-center lg:text-left">
                Let's talk about how Keanu can bring his expertise to your real
                estate search.
              </p>
              <div className="flex w-[135px] items-center">
                <CTA phrase="Talk to Us!" icon="about" link="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="z-10 padding-section-y relative mx-auto w-[100%] lg:w-[85%]">
        <ImageSlider
          data={imageGallery}
          arrows={true}
          size="100"
          type="thumbnail"
        />
      </div>
      {data?.status != "sold" && (
        <div className="mx-auto flex flex-col md:flex-row items-center justify-between gap-9 md:gap-0 lg:gap-24 w-[100%] lg:w-[85%] md:px-12 lg:px-24 relative z-10">
          <CTA2 phrase="Ask a Question" icon="about" link="" />
          <CTA2 phrase="Schedule Tour" icon="list" link="" />
        </div>
      )}
      <div className="flex w-[100%] flex-col items-center border-b border-slate-400/60 py-[3rem] lg:py-[5rem]">
        <div className="w-[91%] text-center text-xl font-medium tracking-wide lg:text-2xl">
          {data?.title}
        </div>
        <Iframe src={data?.iframe} />
      </div>
      <div className="z-10">
        <BuyFromUs />
      </div>
      <div className="z-10 relative">
        <Footer />
      </div>
      <Background
        src="keanu16"
        width={bgBounds.width}
        height={bgBounds.height}
      />
    </div>
  );
}

export default Detail;
