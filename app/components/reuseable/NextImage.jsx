import Image from "next/image";

const NextImage = ({ width, height, src, alt, twStyles }) => {
  return (
    <Image
      src={`/${src}`}
      alt={alt}
      placeholder="blur"
      blurDataURL={`/${src}`}
      width={width}
      height={height}
      className={twStyles}
    />
  );
};

export default NextImage;
