import Image from "next/image";

const RenderImage = ({ source, width, height, objectFit }) => {
  return (
    <div
      style={{
        position: "relative",
        width: `${width}px`,
        height: `${height}px`,
      }}
    >
      <Image
        src={`${source}`}
        alt={`${source}`}
        placeholder="blur"
        blurDataURL={`${source}`}
        fill
        sizes="(max-width: 2000px) 100vw"
        className={`z-0 rounded object-${
          objectFit == "contain" ? "contain" : "cover"
        }`}
      />
    </div>
  );
};

export default RenderImage;
