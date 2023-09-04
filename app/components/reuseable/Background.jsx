import Image from "next/image";

const Background = ({ src, width, height }) => {
  return (
    <Image
      src={`/${src}.jpg`}
      alt={`${src}`}
      placeholder="blur"
      blurDataURL={`/${src}.jpg`}
      width={width}
      height={height}
      className="opacity-[.067] object-cover absolute top-0 left-0 w-[100%] h-[100%] z-0"
    ></Image>
  );
};

export default Background;
