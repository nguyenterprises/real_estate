"use client";
import { accessibilityVerbiage } from "@/constants/verbiage";
import NextImage from "../reuseable/NextImage";
import Address from "../reuseable/Address";
import Copyright from "./Copyright";
import Social from "./Social";
import Realtor from "./Realtor";
import FooterContact from "../contact/FooterContact";

const Footer = () => {
  return (
    <div className="z-10">
      <div className="flex w-[100%] flex-col-reverse border-y border-slate-400/60  lg:flex-row relative">
        <div className="padding-section-y flex w-[100%] flex-col items-center justify-center gap-6 lg:w-[40%] ">
          <NextImage
            src="logo_black.svg"
            alt="logo_black"
            width="250"
            height="125"
            twStyles="object-contain h-auto w-auto"
          />
          <div className="ml-16 flex flex-col gap-2">
            <Address />
          </div>
        </div>

        <div className="flex w-[100%] items-center justify-center border-b border-slate-400/60 lg:w-[60%] lg:border-b-0 lg:border-l">
          <FooterContact />
        </div>
      </div>

      <div className=" flex w-[100%] flex-col items-center">
        <div className="padding-section-y flex w-[100%] flex-col items-center justify-center gap-6 border-b border-slate-400/60 px-10 text-sm md:items-start lg:hidden">
          <div>{accessibilityVerbiage}</div>
          <div>
            <Copyright />
          </div>
        </div>
        <div className="flex w-[100%]">
          <div className="padding-section-y flex w-[50%] items-center justify-center text-3xl lg:w-[20%]">
            <Social />
          </div>
          {/* For large screens */}
          <div className="padding-section-y hidden w-[60%] flex-col items-start justify-center gap-6 border-l border-slate-400/60 px-10 text-sm lg:flex">
            <div>{accessibilityVerbiage}</div>
            <div>
              <Copyright />
            </div>
          </div>
          {/* End for large screens */}
          <div className="padding-section-y flex w-[50%] items-center justify-center border-l border-slate-400/60 lg:w-[20%]">
            <Realtor />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
