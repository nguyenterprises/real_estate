"use client";

import { useState } from "react";
import useWidth from "@/ui/useWidth";
import RenderImage from "../images/RenderImage";
import PreserveRatio from "./PreserveRatio";
import useHeight from "@/ui/useHeight";
import { urlFor } from "@/app/lib/sanityImageUrl";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";

function ImageSlider({ data, arrows, size, type, hero }) {
  const width = useWidth();
  const height = useHeight();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });
  const [loopRef] = useKeenSlider(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider?.next();
          }, 10000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );
  const [thumbnailRef] = useKeenSlider(
    {
      initial: 0,
      slides: {
        perView: 4,
        spacing: width < 1024 ? 5 : 10,
      },
    },
    [ThumbnailPlugin(instanceRef)]
  );
  const detailRatio = width < 1500 ? "6/12" : "6/14";

  return (
    <div className="relative z-0">
      <div className="keen-slider" ref={type == "loop" ? loopRef : sliderRef}>
        {data?.map((image, key) => (
          <div key={key} className="keen-slider__slide">
            {hero === true ? (
              <div
                style={{ width: width, height: height, position: "relative" }}
              >
                <Image
                  src={urlFor(image.asset._ref).url()}
                  alt={image.asset._ref}
                  placeholder="blur"
                  blurDataURL={image.asset._ref}
                  fill
                  sizes="(max-width: 2000px) 100vw"
                  className="object-cover"
                />
              </div>
            ) : (
              <PreserveRatio
                width={`${size}%`}
                aspectRatio={detailRatio}
                twStyles="rounded"
              >
                <Image
                  src={urlFor(image.asset._ref).url()}
                  alt={image.asset._ref}
                  placeholder="blur"
                  blurDataURL={image.asset._ref}
                  width={width}
                  height={height}
                  sizes="(max-width: 2000px) 100vw"
                  className="object-contain"
                />
              </PreserveRatio>
            )}
          </div>
        ))}
      </div>
      {type == "thumbnail" && (
        <div
          ref={thumbnailRef}
          className="keen-slider thumbnail mt-[5px] lg:mt-[10px]"
        >
          {data?.map((image, key) => (
            <div
              key={key}
              className="keen-slider__slide active:border-2 active:border-black"
            >
              <PreserveRatio
                width={`${size}%`}
                aspectRatio={
                  width < 1300
                    ? "6/10"
                    : width >= 1300 && width < 1700
                    ? "6/12"
                    : "6/14"
                }
                twStyles="rounded"
              >
                <RenderImage
                  source={urlFor(image.asset._ref).url()}
                  width={width}
                  height={height}
                  objectFit="contain"
                />
              </PreserveRatio>
            </div>
          ))}
        </div>
      )}
      {arrows === true && loaded && instanceRef.current && (
        <div>
          <Arrow
            left
            onClick={(e) => e.stopPropagation() || instanceRef.current?.prev()}
            disabled={currentSlide === 0}
          />

          <Arrow
            onClick={(e) => e.stopPropagation() || instanceRef.current?.next()}
            disabled={
              currentSlide ===
              instanceRef.current?.track?.details?.slides.length - 1
            }
          />
        </div>
      )}
    </div>
  );
}

export default ImageSlider;

function ThumbnailPlugin(mainRef) {
  return (slider) => {
    function removeActive() {
      slider.slides.forEach((slide) => {
        slide.classList.remove("active");
      });
    }
    function addActive(idx) {
      slider.slides[idx].classList.add("active");
    }

    function addClickEvents() {
      slider.slides.forEach((slide, idx) => {
        slide.addEventListener("click", () => {
          if (mainRef.current) mainRef.current.moveToIdx(idx);
        });
      });
    }

    slider.on("created", () => {
      if (!mainRef.current) return;
      addActive(slider.track.details.rel);
      addClickEvents();
      mainRef.current.on("animationStarted", (main) => {
        removeActive();
        const next = main.animator.targetIdx || 0;
        addActive(main.track.absToRel(next));
        slider.moveToIdx(Math.min(slider.track.details.maxIdx, next));
      });
    });
  };
}

function Arrow(props) {
  return (
    <svg
      onClick={props.onClick}
      className={`absolute top-[35%] h-[30px] w-[30px] cursor-pointer fill-white hover:fill-rose-300 ${
        props.left
          ? "left-[5px] hover:-translate-x-[3px] hover:scale-110"
          : "left-auto right-[5px]  hover:translate-x-[3px] hover:scale-110"
      } ${props.disabled ? "fill-slate-300" : ""}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  );
}
