"use client";

import useWidth from "@/ui/useWidth";
import Keanu from "@/app/components/images/Keanu";
import useHeight from "@/ui/useHeight";
import Title from "@/app/components/reuseable/Title";
import { aboutVerbiage } from "@/constants/verbiage";
import Footer from "@/app/components/footer/Footer";
import CTA from "@/app/components/reuseable/CTA";
import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";
import Background from "../components/reuseable/Background";
import useMeasure from "react-use-measure";
import Image from "next/image";
import Address from "../components/reuseable/Address";
import AboutSpecs from "../components/about/AboutSpecs";
import InstaFeed from "../components/about/InstaFeed";
import BuyFromUs from "../components/reuseable/BuyFromUs";

const AboutPage = () => {
  const width = useWidth();
  const height = useHeight();
  const [bgRef, bgBounds] = useMeasure();
  const detailRatio = width < 1500 ? "12/6" : "14/6";

  return (
    <div
      className="absolute left-0 flex w-[100%] flex-col items-center top-0"
      ref={bgRef}
    >
      <div className="relative flex flex-col">
        <div className="w-[100%]">
          <Keanu number="13" width={width} height={height} />
        </div>
        <div className="pt-12 sm:py-12 l flex flex-col items-center  gap-3 sm:absolute sm:right-[10%] sm:top-16 md:top-[12%] lg:top-[16%]">
          <div className="">
            <Title
              one="keanu"
              colorOne={width < 640 ? " black" : "white"}
              two="reeves"
              colorTwo={width < 640 ? " black" : "white"}
            />
          </div>
          <div className="flex flex-row items-center justify-center gap-8 text-lg uppercase tracking-widest sm:text-white">
            <span>Founder | Realtor</span>
            <span className="hidden lg:flex">DRE #20485720</span>
          </div>
        </div>

        <div className="padding-section-y flex flex-col items-center justify-center px-10 lg:px-24">
          <div className="flex flex-col items-center justify-center gap-8  [word-spacing:.025em] tracking-[.01em]">
            <div className="capitalize font-bold text-[1.45rem]">
              {aboutVerbiage.intro}
            </div>
            <div className="flex flex-col gap-8 text-[.95rem] leading-[1.6rem]">
              {aboutVerbiage.body1}
            </div>
            <div className="flex flex-col gap-8 text-[.95rem] leading-[1.6rem]">
              {aboutVerbiage.body2}
            </div>
          </div>
        </div>
      </div>

      <div className="w-[100%]">
        <div className="flex flex-col sm:flex-row w-[100%] mx-auto items-center gap-[4rem] justify-center 2xl:justify-start">
          <div className="w-[25%] h-[50%] min-w-[300px] overflow-hidden rounded">
            <Image
              src="/keanu5.jpg"
              alt="/keanu5.jpg"
              placeholder="blur"
              blurDataURL="/keanu5.jpg"
              width={500}
              height={1000}
              className="object-contain overflow-hidden"
            />
          </div>

          <div className="flex flex-col gap-[1.6rem] z-10 relative 2xl:w-[64%]">
            <div className="flex flex-col gap-6">
              <h1 className="uppercase font-bold text-[1.45rem]">
                Keanu Reeves
              </h1>
              <Address textSize=".95rem" lineHeight="1rem" />
            </div>
            <div className="flex items-center gap-3">
              <BsFacebook
                style={{ fontSize: "1.25rem", color: "rgba(0,0,0,.6)" }}
              />
              <BsYoutube
                style={{ fontSize: "1.25rem", color: "rgba(0,0,0,.6)" }}
              />
              <BsInstagram
                style={{ fontSize: "1.25rem", color: "rgba(0,0,0,.6)" }}
              />
            </div>

            {width >= 1536 && <AboutSpecs />}

            <div className="w-[200px] lg:w-[300px]">
              <CTA
                phrase={width < 1024 ? "contact" : "contact keanu"}
                icon="about"
                link="/contact"
              />
            </div>
          </div>
        </div>

        <div className="w-[91%] mx-auto flex items-center justify-center py-[2.5rem]">
          <InstaFeed />
        </div>

        <div className="w-[91%] mx-auto">{width < 1536 && <AboutSpecs />}</div>
      </div>

      <div className="">
        <BuyFromUs />
      </div>
      <div className="relative flex flex-col items-center">
        <div className="w-[100%] bg-black">
          <Keanu number="15" width={width} height={height} />
        </div>
        <div className="padding-section-y flex flex-col items-center justify-center px-10 lg:px-24">
          <div className="flex flex-col items-center justify-center gap-8 [word-spacing:.025em] tracking-[.01em]">
            <div className="flex flex-col gap-8 text-[.95rem] leading-[1.6rem]">
              {aboutVerbiage.body3}
            </div>
            <div className="flex flex-col gap-8 text-[.95rem] leading-[1.6rem]">
              {aboutVerbiage.body4}
            </div>
          </div>
        </div>
      </div>

      <div className="padding-section-y flex flex-col gap-8 sm:flex-row sm:gap-0 sm:pl-[5em] z-10">
        <div className="w-[200px] lg:w-[300px]">
          <CTA
            phrase={width < 1024 ? "listings" : "current listings"}
            icon="list"
            link="/active"
          />
        </div>
        <div className="w-[200px] lg:w-[300px]">
          <CTA
            phrase={width < 1024 ? "contact" : "contact keanu"}
            icon="about"
            link="/contact"
          />
        </div>
      </div>

      <div className="flex items-center justify-center gap-6 rounded py-6 pb-24 pt-3 z-10">
        <BsFacebook style={{ fontSize: "2rem" }} />
        <BsYoutube style={{ fontSize: "2rem" }} />
        <BsInstagram style={{ fontSize: "2rem" }} />
      </div>

      <Footer />
      <Background
        src="keanu16"
        width={bgBounds.width}
        height={bgBounds.height}
      />
    </div>
  );
};

export default AboutPage;
