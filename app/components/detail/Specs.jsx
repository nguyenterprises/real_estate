"use client";

import { BiSolidBed, BiSolidBath, BiSolidArea } from "react-icons/bi";
import { MdGarage, MdPool, MdWineBar, MdBathtub } from "react-icons/md";

function Specs({ data }) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="text-xl font-semibold uppercase tracking-wider lg:text-2xl">
        Details
      </div>
      <div className="py-4">
        <div className="flex flex-wrap items-center justify-center rounded border border-slate-400/60 lg:px-6 lg:gap-1 xl:gap-10 2xl:gap-20">
          <div className="flex flex-col items-center gap-3 px-6 py-6">
            <div>
              <BiSolidBed style={{ fontSize: "1.5rem" }} />
            </div>
            <div className="text-xl">{data?.bedrooms}</div>
            <div className="text-sm tracking-wider">Beds</div>
          </div>
          <div className="flex flex-col items-center gap-3 px-6 py-6">
            <div>
              <BiSolidBath style={{ fontSize: "1.5rem" }} />
            </div>
            <div className="text-xl">{data?.bathrooms}</div>
            <div className="text-sm tracking-wider">Baths</div>
          </div>
          <div className="flex flex-col items-center gap-3 px-6 py-6">
            <div>
              <MdGarage style={{ fontSize: "1.5rem" }} />
            </div>
            <div className="text-xl">{data?.garage}</div>
            <div className="text-sm tracking-wider">Garage</div>
          </div>
          <div className="flex flex-col items-center gap-3 px-6 py-6">
            <div>
              <BiSolidArea style={{ fontSize: "1.5rem" }} />
            </div>
            <div className="text-xl">
              {new Intl.NumberFormat("en-US").format(data?.sqft)}
            </div>
            <div className="text-sm tracking-wider">Sqft</div>
          </div>
          <div className="flex flex-col items-center gap-3 px-6 py-6">
            <div>
              <BiSolidArea style={{ fontSize: "1.5rem" }} />
            </div>
            <div className="text-xl">
              {new Intl.NumberFormat("en-US").format(data?.lot)}
            </div>
            <div className="text-sm tracking-wider">Acre</div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Specs;
