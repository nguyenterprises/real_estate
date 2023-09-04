import { copyrightVerbiage } from "@/constants/verbiage";
import React from "react";

const Copyright = () => {
  return (
    <div>
      <div>{copyrightVerbiage}</div>
      <div className="flex flex-wrap gap-1">
        <span className="whitespace-nowrap">
          <a href="" className="hover:text-sky-600">
            Sitemap
          </a>
        </span>
        <span>|</span>
        <span className="whitespace-nowrap">
          <a href="" className="hover:text-sky-600">
            Privacy Policy
          </a>
        </span>
        <span>|</span>
        <span className="whitespace-nowrap">
          <a href="" className="hover:text-sky-600">
            Do Not Sell My Personal Information
          </a>
        </span>
        <span>|</span>
        <span className="whitespace-nowrap">
          Real Estate Web Design by{" "}
          <a
            href="www.nguyenterprises.work"
            className="font-bold hover:text-sky-600"
          >
            Hanh Nguyen
          </a>
        </span>
      </div>
    </div>
  );
};

export default Copyright;
