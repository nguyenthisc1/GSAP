import React from "react";
import gsap from "gsap";
import { useEffect } from "react";

const HeroHeader = () => {
  useEffect(() => {
    gsap.fromTo(
      ".hero-text-section h1",
      {
        autoAlpha: 0,
      },
      { autoAlpha: 1, duration: 0.5, delay: 0.2 }
    );
  }, []);
  return (
    <div className="hero-text-section">
      <h1>Stories meet their widest audience ever</h1>
    </div>
  );
};

export default HeroHeader;
