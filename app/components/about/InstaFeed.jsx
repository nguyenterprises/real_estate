import Image from "next/image";

const InstaFeed = () => {
  const instaArray = [
    "keanu14",
    "keanu6",
    "keanu7",
    "keanu8",
    "keanu22",
    "keanu1",
    "keanu2",
    "keanu3",
  ];
  return (
    <div>
      <h3 className="pb-[.6em] text-[1.1rem] text-[rgba(0,0,0,.6)]">
        Instagram Feed
      </h3>
      <div className="flex items-center flex-wrap gap-3">
        {instaArray.map((photo, key) => (
          <div
            key={key}
            className="w-[100px] h-[100px] lg:w-[125px] lg:h-[125px] 2xl:w-[175px] 2xl:h-[175px] overflow-hidden rounded"
          >
            <Image
              src={`/${photo}.jpg`}
              alt={`/${photo}.jpg`}
              placeholder="blur"
              blurDataURL={`/${photo}.jpg`}
              width={300}
              height={300}
              className="object-contain "
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstaFeed;
