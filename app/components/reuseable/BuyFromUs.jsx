import { sellKeanu } from "@/constants/verbiage";
import CTA from "./CTA";

const BuyFromUs = () => {
  return (
    <div className="py-[2.5rem] bg-slate-100 w-full items-center flex">
      <div className="w-[91%] mx-auto flex flex-col 2xl:flex-row 2xl:gap-6">
        <div className="2xl:w-[60%] xl:pt-[2rem]">
          <div className="flex flex-col items-start py-[2.5rem] [word-spacing:.05em] tracking-[.01em] gap-[1.6rem]">
            <h3 className="font-bold text-[1.45rem] text-center 2xl:text-left">
              {sellKeanu.history.section1}
            </h3>
            <p className="text-[.95rem] leading-[1.6rem] text-center 2xl:text-left w-full">
              {sellKeanu.history.section2}
            </p>
          </div>
        </div>

        <div className="mx-auto 2xl:mx-0 w-[91%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%] py-[2.5rem]">
          <div className="rounded border border-slate-400/60 py-8 px-8 flex flex-col items-center lg:items-start gap-6">
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
  );
};

export default BuyFromUs;
