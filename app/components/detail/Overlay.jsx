import { BiSolidBed, BiSolidBath, BiSolidArea } from "react-icons/bi";

function Overlay({ data }) {
  return (
    <div className="z-10 flex w-[100%] flex-wrap md:flex-nowrap items-center justify-center md:justify-between gap-12 rounded px-6 py-6 text-black md:absolute md:bottom-0 md:left-0 md:bg-[rgba(0,0,0,0.3)] md:px-12 md:text-white">
      <div className="flex flex-col  gap-3">
        <div className="text-center md:text-left">
          <div className="text-2xl font-medium tracking-wider">
            {data?.street}
          </div>
          <div className="text-base font-medium tracking-wider">
            {data?.city}, CA, {data?.zip}
          </div>
        </div>
        <div className="flex flex-col gap-1">
          {data?.status == "sold" && (
            <div className="mx-auto md:mx-0 uppercase font-semibold tracking-wider border-2 border-black md:border-white px-3 py-1 w-min whitespace-nowrap rounded-md text-center md:text-left">
              Sold For
            </div>
          )}
          <div className="text-center text-2xl font-semibold tracking-wider md:text-left md:text-3xl">
            $
            {data?.status == "sold"
              ? `${new Intl.NumberFormat("en-US").format(data?.soldPrice)}`
              : `${new Intl.NumberFormat("en-US").format(data?.askPrice)}`}
          </div>
        </div>
      </div>
      <div className="flex lg:font-semibold">
        <div className="flex flex-col items-center gap-3 border-r-2 border-black px-6 sm:px-12 md:border-white">
          <div>
            <BiSolidBed style={{ fontSize: "1.5rem" }} />
          </div>
          <div className="text-xl">{data?.bedrooms}</div>
          <div className="text-sm tracking-wider">Beds</div>
        </div>
        <div className="flex flex-col items-center gap-3 border-r-2 border-black px-6 sm:px-12 md:border-white">
          <div>
            <BiSolidBath style={{ fontSize: "1.5rem" }} />
          </div>
          <div className="text-xl">{data?.bathrooms}</div>
          <div className="text-sm tracking-wider">Baths</div>
        </div>
        <div className="flex flex-col items-center gap-3 px-6 sm:pl-12">
          <div>
            <BiSolidArea style={{ fontSize: "1.5rem" }} />
          </div>
          <div className="text-xl">
            {new Intl.NumberFormat("en-US").format(data?.sqft)}
          </div>
          <div className="text-sm tracking-wider">Sqft</div>
        </div>
      </div>
    </div>
  );
}

export default Overlay;
