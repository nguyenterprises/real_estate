"use client";

import { useState, useEffect } from "react";

function useHeight() {
  const [windowHeight, setWindowHeight] = useState();
  const getHeight = () => {
    const h = window.innerHeight;
    setWindowHeight(h);
  };

  useEffect(() => {
    setWindowHeight(window.innerHeight);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", getHeight);
    window.addEventListener("onload", getHeight);
    return () => {
      window.removeEventListener("resize", getHeight);
      window.removeEventListener("onload", getHeight);
    };
  }, [windowHeight]);

  return windowHeight;
}

export default useHeight;
