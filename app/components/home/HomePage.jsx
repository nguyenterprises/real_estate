"use client";

import React from "react";
import Hero from "../hero/Hero";
import IntroFeatured from "../listings/IntroFeatured";
import Main from "../main/Main";
import IntroRecentSold from "../listings/IntroRecentSold";
import SellWithUs from "../reuseable/SellWithUs";
import IntroMedia from "../media/IntroMedia";
import Footer from "../footer/Footer";

const HomePage = ({ properties }) => {
  const avp = properties.filter((status) => status.status == "available");
  const heroSlides = avp.map((main) => main.mainImage);
  return (
    <div>
      <Hero heroSlides={heroSlides} />
      <IntroFeatured properties={properties} />
      <Main />
      <IntroRecentSold properties={properties} />
      <SellWithUs />
      <IntroMedia />
      <Footer />
    </div>
  );
};

export default HomePage;
