"use client";

import { enforceFormat, formatToPhone } from "@/ui/phoneNumber";
import CTA from "../reuseable/CTA";

const StandardContact = ({ textSize }) => {
  return (
    <div className="z-10">
      <form>
        <div>
          <label className="mb-6 block">
            <span
              className={`text-${textSize} font-medium capitalize tracking-wider`}
            >
              name
            </span>
            <input type="text" name="name" className="standard__contact" />
          </label>
        </div>

        <div className="flex justify-between gap-3">
          <div className="w-[100%]">
            <label className="mb-6 block">
              <span
                className={`text-${textSize} font-medium capitalize tracking-wider`}
              >
                email
              </span>
              <input className="standard__contact" type="email" name="email" />
            </label>
          </div>

          <div className="w-[100%]">
            <label className="mb-6 block">
              <span
                className={`text-${textSize} font-medium capitalize tracking-wider`}
              >
                phone
              </span>
              <input
                type="phone"
                name="phone"
                className="standard__contact"
                onKeyDown={enforceFormat}
                onKeyUp={formatToPhone}
              />
            </label>
          </div>
        </div>

        <div>
          <label className="mb-6 block">
            <span
              className={`text-${textSize} font-medium capitalize tracking-wider`}
            >
              Message
            </span>
            <textarea
              name="message"
              className="standard__contact resize-none"
              rows="2"
            ></textarea>
          </label>
        </div>

        <div className="pl-16 pt-4">
          <div className="mx-auto w-[150px]">
            <CTA phrase="Send it!" icon="about" link="/" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default StandardContact;
