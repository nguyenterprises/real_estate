"use client";

import Title from "@/app/components/reuseable/Title";
import Keanu from "@/app/components/images/Keanu";
import useWidth from "@/ui/useWidth";
import useHeight from "@/ui/useHeight";
import Address from "@/app/components/reuseable/Address";
import StandardContact from "@/app/components/contact/StandardContact";
import EndFooter from "@/app/components/reuseable/EndFooter";
import Iframe from "@/app/components/reuseable/Iframe";
import useMeasure from "react-use-measure";
import Background from "../components/reuseable/Background";

const ContactPage = () => {
  const width = useWidth();
  const height = useHeight();
  const [bgRef, bgBounds] = useMeasure();

  const contactPhotoWidth =
    width < 640
      ? width * 0.7
      : width >= 640 && width < 768
      ? width * 0.6
      : width >= 768 && width < 1024
      ? width * 0.5
      : width >= 1024 && width < 1280
      ? width * 0.4
      : width * 0.3;

  return (
    <div className="absolute top-0 left-0">
      <div
        className="flex flex-col items-center pt-[11rem] relative"
        ref={bgRef}
      >
        <div className="flex w-[100%] flex-col items-center gap-8 border-b border-slate-400/60">
          <div className="">
            <Title one="Contact" two="Keanu Reeves" />
          </div>
          <div className="text-center text-lg tracking-wider lg:text-xl">
            We would love to hear from you! Send us a message and we'll get
            right back in touch.
          </div>
          <div className="bg-slate-100 w-[100%]">
            <div className="flex w-[100%] flex-col items-center justify-center gap-8  xl:mt-10 xl:w-[95%] xl:flex-row mx-auto">
              <div className="padding-section-y flex w-[91%] flex-col items-center justify-center gap-8 lg:flex-row lg:gap-12 xl:w-[60%] xl:border-r xl:border-slate-400/60 xl:pr-[7rem]">
                <div>
                  <Keanu number="3" height={height} width={contactPhotoWidth} />
                </div>
                <div className="">
                  <Address textSize="1.5rem" lineHeight="2rem" />
                </div>
              </div>
              <div className="padding-section-y w-[91%] px-4 lg:w-[70%] xl:w-[40%] z-10">
                <StandardContact textSize="xl" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex w-[100%] flex-col items-center border-b border-slate-400/60 py-[3rem] lg:py-[5rem]">
            <div className="w-[91%] text-center text-xl font-medium tracking-wide lg:text-2xl">
              369 North Rodeo Drive, Beverly Hills, CA 90210
            </div>
            <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1902.108086566042!2d-118.40423546353381!3d34.068991673150705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bbf875a28bc1%3A0xa3482dee54f05a8a!2s369%20N%20Rodeo%20Dr%2C%20Beverly%20Hills%2C%20CA%2090210!5e1!3m2!1sen!2sus!4v1688840574351!5m2!1sen!2sus" />
          </div>
          <div className="">
            <EndFooter />
          </div>
        </div>
        <Background
          src="keanu16"
          width={bgBounds.width}
          height={bgBounds.height}
        />
      </div>
    </div>
  );
};

export default ContactPage;
