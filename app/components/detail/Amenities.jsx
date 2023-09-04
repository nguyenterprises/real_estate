"use client";

import { MdGarage, MdPool, MdWineBar, MdBathtub } from "react-icons/md";
import { GiOfficeChair, GiTheater, GiFountain, GiSteam } from "react-icons/gi";
import { CgGym } from "react-icons/cg";

function Amenities({ data }) {
  const amenities = [
    "Garage",
    "Office",
    "Theater",
    "Pool",
    "Wine Cellar",
    "Gym",
    "Fountain",
    "Sauna",
    "Hot Tub",
  ];
  const amenityIcon = (amenity) => {
    switch (true) {
      case amenity == "Garage":
        return <MdGarage style={{ fontSize: "1.5rem" }} />;
      case amenity == "Office":
        return <GiOfficeChair style={{ fontSize: "1.5rem" }} />;
      case amenity == "Theater":
        return <GiTheater style={{ fontSize: "1.5rem" }} />;
      case amenity == "Pool":
        return <MdPool style={{ fontSize: "1.5rem" }} />;
      case amenity == "Wine Cellar":
        return <MdWineBar style={{ fontSize: "1.5rem" }} />;
      case amenity == "Gym":
        return <CgGym style={{ fontSize: "1.5rem" }} />;
      case amenity == "Fountain":
        return <GiFountain style={{ fontSize: "1.5rem" }} />;
      case amenity == "Sauna":
        return <GiSteam style={{ fontSize: "1.5rem" }} />;
      case amenity == "HotTub":
        return <MdBathtub style={{ fontSize: "1.5rem" }} />;
      default:
        return <MdGarage style={{ fontSize: "1.5rem" }} />;
    }
  };
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="text-xl font-semibold uppercase tracking-wider lg:text-2xl">
        Amenities
      </div>
      <div className="py-4">
        <div className="flex flex-wrap items-center justify-center rounded border border-slate-400/60 lg:px-6 xl:gap-8">
          {amenities.map((amenity, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-3 px-6 py-6"
            >
              <div>{amenityIcon(amenity)}</div>
              <div className="text-sm tracking-wider">{amenity}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Amenities;
