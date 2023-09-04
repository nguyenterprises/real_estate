"use client";
import { useState, useEffect } from "react";

function useWidth() {
  const [windowWidth, setWindowWidth] = useState();
  const getWidth = () => {
    const w = window.innerWidth;
    setWindowWidth(w);
  };

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", getWidth);
    window.addEventListener("onload", getWidth);
    return () => {
      window.removeEventListener("resize", getWidth);
      window.removeEventListener("onload", getWidth);
    };
  }, [windowWidth]);

  return windowWidth;
}

export default useWidth;
