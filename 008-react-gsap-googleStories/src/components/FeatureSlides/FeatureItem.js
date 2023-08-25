import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import useOnScreen from "../../hooks/useOnScreen";

const FeatureItem = ({ title, desc, index, setActiveSlide }) => {
  const ref = useRef(null);
  const onScreen = useOnScreen(ref);
  useEffect(() => {
    if (onScreen) {
      setActiveSlide(index);
    }
  }, [onScreen, index]);
  return (
    <div className="feature-slide" ref={ref}>
      <h3 className="feature-slide-title">{title}</h3>
      <p className="feature-slide-desc">{desc}</p>
    </div>
  );
};

export default FeatureItem;
