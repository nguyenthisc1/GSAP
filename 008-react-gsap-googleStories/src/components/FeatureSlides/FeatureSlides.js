import React from "react";
import { useState } from "react";
import { featureSlides } from "../../data";
import gsap from "gsap";
import cn from "classnames";
import FeatureItem from "./FeatureItem";
import { useRef } from "react";
import { useEffect } from "react";

function RenderImage({ activeSlide }) {
  return featureSlides.map(({ imageUrl }, index) => {
    return (
      <img
        key={imageUrl}
        className={cn({ "as-primary": activeSlide === index })}
        style={{ background: `url(${imageUrl}) center/cover no-repeat` }}
      />
    );
  });
}

const FeatureSlides = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const featureSliderRef = useRef(null);
  const featureSlideRightRef = useRef(null);
  useEffect(() => {
    function stopTrigger() {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: featureSlideRightRef.current,
          start: "top top",
          end: () => `+=${featureSliderRef.current.offsetHeight}`,
          scrub: true,
          pin: true,
        },
      });
    }
    const master = gsap.timeline();
    master.add(stopTrigger());
  }, []);
  return (
    <div
      ref={featureSliderRef}
      className="feature-slider-container w-full overflow-hidden"
    >
      <div className="left">
        {featureSlides.map((item, index) => {
          return (
            <FeatureItem
              setActiveSlide={setActiveSlide}
              key={item.imageUrl}
              title={item.title}
              desc={item.desc}
              index={index}
            />
          );
        })}
      </div>
      <div ref={featureSlideRightRef} className="right">
        {<RenderImage activeSlide={activeSlide} />}
      </div>
    </div>
  );
};

export default FeatureSlides;
