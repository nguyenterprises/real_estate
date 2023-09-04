"use client";

import {
  BsHouses,
  BsInfoCircle,
  BsNewspaper,
  BsTelephonePlus,
  BsEnvelopeAt,
} from "react-icons/bs";
import Link from "next/link";

const Menu = ({ setMenu }) => {
  const menuHandler = () => {
    setMenu(false);
  };

  return (
    <div className="menudarkmorphism flex flex-col items-center gap-5 py-12 text-lg font-medium uppercase tracking-widest text-white">
      <Link href="/active" className="menu__items" onClick={menuHandler}>
        <BsHouses className="text-base" />
        Listings
      </Link>
      <Link href="/sold" className="menu__items" onClick={menuHandler}>
        <BsHouses className="text-base" />
        Sold
      </Link>

      <Link href="/sell" className="menu__items" onClick={menuHandler}>
        <BsNewspaper className="text-base" />
        Sell
      </Link>

      <Link href="/about" className="menu__items" onClick={menuHandler}>
        <BsInfoCircle className="text-base" />
        About
      </Link>

      <Link href="/contact" className="menu__items" onClick={menuHandler}>
        <BsEnvelopeAt className="text-base" />
        Contact
      </Link>

      <Link href="" className="menu__items" onClick={menuHandler}>
        <BsTelephonePlus className="text-base" />
        310.803.6889
      </Link>
    </div>
  );
};

export default Menu;
