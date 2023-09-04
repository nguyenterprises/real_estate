import { sellKeanu } from "@/constants/verbiage";
import StandardContact from "../contact/StandardContact";

const SellWithUs = () => {
  return (
    <div className="py-[2.5rem] bg-slate-100 w-full items-center flex">
      <div className="w-[91%] mx-auto flex flex-col 2xl:flex-row 2xl:gap-6">
        <div className="2xl:w-[60%] xl:pt-[2rem]">
          <div className="flex flex-col items-start py-[2.5rem] [word-spacing:.05em] tracking-[.01em] gap-[1.6rem]">
            <h3 className="font-bold text-[1.45rem] text-center 2xl:text-left w-full">
              {sellKeanu.intro.section1}
            </h3>
            <p className="text-[.95rem] leading-[1.6rem] text-center 2xl:text-left w-full">
              {sellKeanu.intro.section2}
            </p>
            <h3 className="font-bold text-[1.45rem] text-center 2xl:text-left w-full">
              {sellKeanu.history.section1}
            </h3>
            <p className="text-[.95rem] leading-[1.6rem] text-center 2xl:text-left w-full">
              {sellKeanu.history.section2}
            </p>
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
    </div>
  );
};

export default SellWithUs;
