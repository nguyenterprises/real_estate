"use client";

import { useState, useEffect, createRef } from "react";
import Link from "next/link";
import state from "@/store";
import Menu from "./Menu";

import { AnimatePresence, motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/ui/motion";
import { endsWith } from "@/ui/endsWith";
import useMeasure from "react-use-measure";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isProp, setIsProp] = useState(false);
  const [menu, setMenu] = useState(false);
  const [ref, bounds] = useMeasure();
  const pathname = usePathname() || "/";
  const notHome = endsWith(pathname);
  const imgRef = createRef();

  const navbg = menu
    ? "menudarkmorphism"
    : notHome === false
    ? "nav__mobile-gradient"
    : "menuclear";

  const navText =
    (!menu && notHome === false) || pathname == "/about"
      ? "text-white"
      : `text-black ${pathname != "/sell" && "border-b border-slate-400/60"}`;

  const navLogo = menu
    ? "/logo_white.svg"
    : (!menu && notHome === false) || pathname == "/about"
    ? "/logo_white.svg"
    : "/logo_black.svg";

  const menuLogo =
    navbg == "menuclear" && pathname != "/about"
      ? "/menu_black.svg"
      : !menu
      ? "/menu.svg"
      : "/close_white.svg";

  useEffect(() => {
    const navigationHeight = bounds.height;
    state.navHeight = navigationHeight;
  }, [bounds.height]);

  return (
    <>
      <nav
        ref={ref}
        className={`${navbg} flex-between padding-y z-20 text-lg font-bold ${navText}`}
      >
        <div className="mx-auto  w-[91%] flex-between">
          <Link
            href="/"
            className="flex-center flex"
            onClick={() => setIsProp(false)}
          >
            <img
              src={navLogo}
              alt={navLogo}
              className="w-[150px] object-contain md:w-[200px]"
            />
          </Link>
          <div className="hidden xl:flex">
            <div
              onMouseEnter={() => setIsProp(true)}
              onMouseLeave={() => setIsProp(false)}
            >
              {!isProp && <div className="nav__items">Properties</div>}
              {isProp && (
                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="show"
                  exit="hidden"
                  viewport={{ once: true, amount: 0.25 }}
                  className=""
                >
                  <motion.div
                    variants={fadeIn("left", "tween", 0, 0.5)}
                    className="flex w-full"
                  >
                    <Link href="/active" className="nav__items">
                      Listings
                    </Link>
                    <Link href="/sold" className="nav__items">
                      Sold
                    </Link>
                  </motion.div>
                </motion.div>
              )}
            </div>

            <Link href="/sell" className="nav__items">
              Sell
            </Link>

            <Link href="/about" className="nav__items">
              About
            </Link>

            <Link href="/contact" className="nav__items">
              Contact
            </Link>

            <Link href="" className="nav__items">
              310.803.6889
            </Link>
          </div>
          <div
            className="flex-center flex flex-col xl:hidden"
            onClick={() => setMenu(!menu)}
          >
            <img
              src={menuLogo}
              alt="menu"
              className="w-[30px] object-contain md:w-[40px]"
            />
            {!menu && (
              <div className="letter-shadow text-[.55rem] uppercase leading-5 tracking-widest">
                MENU
              </div>
            )}
          </div>
        </div>
      </nav>
      <AnimatePresence>
        {menu && (
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            exit="hidden"
            viewport={{ once: false, amount: 0.25 }}
            className="flex items-center"
          >
            <motion.div
              variants={fadeIn("down", "tween", 0.2, 0.5)}
              className="w-full"
            >
              <Menu setMenu={setMenu} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
