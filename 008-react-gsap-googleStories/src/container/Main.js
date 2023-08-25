import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Hero from "../components/Hero/Hero";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FeatureSlides from "../components/FeatureSlides/FeatureSlides";
const Main = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 500);
  }, []);
  return loader ? (
    <div className="loader"></div>
  ) : (
    <>
      <Hero />
      <FeatureSlides />
      <footer>Build your ideal story</footer>
    </>
  );
};

export default Main;
