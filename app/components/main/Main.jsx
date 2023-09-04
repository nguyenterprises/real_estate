import React from "react";
import ShortBio from "./ShortBio";
import NumbersSold from "./NumbersSold";

const Main = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <ShortBio />
      <NumbersSold />
    </div>
  );
};

export default Main;
