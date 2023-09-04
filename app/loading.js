import ScaleLoader from "react-spinners/ScaleLoader";

export default function Loading() {
  return (
    <div className="z-20 flex items-center justify-center">
      <ScaleLoader color={"rgba(244, 63, 94, 1)"} size={100} />
    </div>
  );
}
