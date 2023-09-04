import {
  BsBuildings,
  BsTelephonePlus,
  BsNewspaper,
  BsEnvelopeAt,
} from "react-icons/bs";
import { contactVerbiage } from "@/constants/verbiage";

const Address = ({ textSize, lineHeight }) => {
  const fontSize = {
    fontSize: `${textSize}`,
    lineHeight: `${lineHeight}`,
  };
  return (
    <div className="flex flex-col gap-3" style={fontSize}>
      <div className="flex items-center gap-3">
        <span>
          <BsTelephonePlus />
        </span>
        <span>{contactVerbiage.phone}</span>
      </div>
      <div className="flex items-center gap-3">
        <span>
          <BsEnvelopeAt />
        </span>
        <span>{contactVerbiage.email}</span>
      </div>
      <div className="flex items-center gap-3">
        <div>
          <BsBuildings />
        </div>
        <div className="leading-tight">
          <div className="capitalize">{contactVerbiage.address.street}</div>
          <div className="capitalize">{contactVerbiage.address.city}</div>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <span>
          <BsNewspaper />
        </span>
        <span>{contactVerbiage.license}</span>
      </div>
    </div>
  );
};

export default Address;
