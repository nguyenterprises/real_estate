import { accessibilityVerbiage } from "@/constants/verbiage";
import Copyright from "../footer/Copyright";
import Social from "../footer/Social";
import Realtor from "../footer/Realtor";

const EndFooter = () => {
  return (
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
  );
};

export default EndFooter;
