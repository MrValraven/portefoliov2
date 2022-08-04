import React from "react";
import "./styles.scss";

import NekoImage from "../../assets/neko.jpg";

const GlitchyImage = () => {
  return (
    <div className="glitchyImage">
      <svg className="Playground__svg" viewBox="0 0 400 500">
        <defs>
          <filter
            id="filter"
            x="-20%"
            y="-20%"
            width="140%"
            height="140%"
            filterUnits="objectBoundingBox"
            primitiveUnits="userSpaceOnUse"
            colorInterpolationFilters="linearRGB"
          >
            <feMorphology
              operator="dilate"
              radius="10 0"
              x="0%"
              y="0%"
              width="100%"
              height="100%"
              in="SourceGraphic"
              result="morphology1"
            ></feMorphology>
          </filter>
          <filter
            id="filter-2"
            x="-20%"
            y="-20%"
            width="140%"
            height="140%"
            filterUnits="objectBoundingBox"
            primitiveUnits="userSpaceOnUse"
            color-interpolation-filters="linearRGB"
          >
            <feMorphology
              operator="dilate"
              radius="10 2"
              x="0%"
              y="0%"
              width="100%"
              height="100%"
              in="SourceGraphic"
              result="morphology1"
            ></feMorphology>
          </filter>
          <filter
            id="filter-3"
            x="-20%"
            y="-20%"
            width="140%"
            height="140%"
            filterUnits="objectBoundingBox"
            primitiveUnits="userSpaceOnUse"
            color-interpolation-filters="linearRGB"
          >
            <feMorphology
              operator="dilate"
              radius="15 0"
              x="0%"
              y="0%"
              width="100%"
              height="100%"
              in="SourceGraphic"
              result="morphology1"
            ></feMorphology>
          </filter>
        </defs>
        <image
          x="0%"
          y="0%"
          width="400"
          height="500"
          preserveAspectRatio="xMidYMid slice"
          href={NekoImage}
          id="my-image"
        ></image>
      </svg>
    </div>
  );
};

export default GlitchyImage;
