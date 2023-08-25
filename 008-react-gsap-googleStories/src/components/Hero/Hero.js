import React from "react";
import HeroHeader from "./HeroHeader";
import HeroCollage from "./HeroCollage";
import HeroPhoneBlock from "./HeroPhoneBlock";
import HeroUseBy from "./HeroUseBy";
import HeroFooter from "./HeroFooter";
const Hero = () => {
  return (
    <div className="hero-container">
      <HeroHeader />
      <div className="hero-media">
        <HeroCollage />
        <HeroPhoneBlock />
      </div>
      <HeroUseBy />
      <HeroFooter />
    </div>
  );
};

export default Hero;
