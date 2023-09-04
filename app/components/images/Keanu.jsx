import Image from "next/image";

const Keanu = ({ number, width, height }) => {
  return (
    <Image
      src={`/keanu${number}.jpg`}
      alt={`keanu${number}`}
      placeholder="blur"
      blurDataURL={`/keanu${number}.jpg`}
      width={width ? width : "800"}
      height={height ? height : "1200"}
      className="z-0 rounded object-contain"
    />
  );
};

export default Keanu;
