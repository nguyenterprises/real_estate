"use client";
import Image from "next/image";
import useMeasure from "react-use-measure";

const PressFeed = () => {
  const [ref, bounds] = useMeasure();
  const pressArray = [
    "press-default-1",
    "press-default-2",
    "press-default-3",
    "press-default-4",
    "press-default-5",
    "press-default-6",
    "press-default-7",
    "press-default-11",
    "press-default-9",
    "press-default-10",
    "press-default-8",
    "press-default-12",
  ];

  const EachRow = ({ start, finish, width, height }) => {
    return (
      <div
        className="flex items-center justify-evenly py-[1rem]"
        style={{ width: `${width}px`, height: `${height}px` }}
      >
        {pressArray.slice(start, finish + 1).map((photo, key) => (
          <div
            key={key}
            className="w-[50px] h-[25px] md:w-[75px] md:h-[37.5px] lg:w-[100px] lg:h-[50px] xl:w-[125px] xl:h-[62.5px] flex items-center justify-center rounded "
          >
            <Image
              src={`/press/${photo}.webp`}
              alt={`/press/${photo}.webp`}
              placeholder="blur"
              blurDataURL={`/press/${photo}.webp`}
              width={450}
              height={225}
              className="object-contain "
            />
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="w-[100%] h-[100%]" ref={ref}>
      <EachRow
        start={0}
        finish={2}
        height={bounds.height * 0.25}
        width={bounds.width}
      />
      <EachRow
        start={3}
        finish={5}
        height={bounds.height * 0.25}
        width={bounds.width}
      />
      <EachRow
        start={6}
        finish={8}
        height={bounds.height * 0.25}
        width={bounds.width}
      />
      <EachRow
        start={9}
        finish={11}
        height={bounds.height * 0.25}
        width={bounds.width}
      />
    </div>
  );
};

export default PressFeed;
