"use client";

import {
  useEffect,
  useState,
  forwardRef,
  useImperativeHandle,
  useRef,
} from "react";

const randomToggleOpacity = (array, radio) => {
  return array.map((item) => {
    const isSelected = Math.random() < radio / array.length;
    if (isSelected && item.style && typeof item.style.opacity === "number") {
      return {
        ...item,
        style: {
          ...item.style,
          opacity: item.style.opacity === 1 ? 0 : 1,
        },
      };
    }
    return item; // Không thay đổi nếu không được chọn
  });
};

export const Original = () => {
  return (
    <div className="w-[210px] h-[146px] bg-[linear-gradient(114.66deg,#eaeaeabf 1.75%,#ffffffbf)] rounded-lg z-[3] shadow-[0_0_0_1px_#00000014,0_2px_4px_#0000000a,0_12px_24px_-8px_#0000000d]">
      <div className="h-[28px] flex border-b-[1px] border-solid border-b-[#0000001a]">
        <div className="h-full text-[11px] uppercase border-l-[1px] border-[#0000001a] text-[#999999] pl-[12px] pr-[12px] flex justify-center items-center ml-auto">
          Original
        </div>
      </div>
      <div className="flex items-center justify-center h-[120px]">
        <svg
          data-fill="true"
          fill="none"
          height="88"
          viewBox="0 0 184 88"
          width="184"
        >
          <circle cx="174" cy="8.5" fill="black" opacity="0.2" r="8"></circle>
          <path
            d="M36.5858 4.91421L0.585786 40.9142C0.210714 41.2893 0 41.798 0 42.3284V85.5C0 86.6046 0.89543 87.5 2 87.5H182C183.105 87.5 184 86.6046 184 85.5V50.8284C184 49.0466 181.846 48.1543 180.586 49.4142L179.586 50.4142C179.211 50.7893 179 51.298 179 51.8284V59.1716C179 59.702 178.789 60.2107 178.414 60.5858L177.586 61.4142C177.211 61.7893 176.702 62 176.172 62H165.328C164.798 62 164.289 62.2107 163.914 62.5858L155.914 70.5858C155.133 71.3668 153.867 71.3668 153.086 70.5858L133.914 51.4142C133.133 50.6332 131.867 50.6332 131.086 51.4142L127.914 54.5858C127.133 55.3668 125.867 55.3668 125.086 54.5858L119 48.5L90.4142 19.9142C89.6332 19.1332 88.3668 19.1332 87.5858 19.9142L72.4142 35.0858C71.6332 35.8668 70.3668 35.8668 69.5858 35.0858L39.4142 4.91421C38.6332 4.13317 37.3668 4.13316 36.5858 4.91421Z"
            fill="url(#:rg:)"
          ></path>
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id=":rg:"
              x1="92"
              x2="92"
              y1="7.5"
              y2="87.5"
            >
              <stop stopOpacity="0.1"></stop>
              <stop offset="1" stopOpacity="0.2"></stop>
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export const R_1440px = forwardRef(function R_1440px(props, ref) {
  const _listAxis = [
    {
      x: 0.333374,
      y: 63,
      style: {
        opacity: 1,
      },
    },
    {
      x: 3.33337,
      y: 63,
      style: {
        opacity: 1,
      },
    },
    {
      x: 6.33337,
      y: 63,
      style: {
        opacity: 1,
      },
    },
    {
      x: 9.33337,
      y: 63,
      style: {
        opacity: 1,
      },
    },
    {
      x: 12.3334,
      y: 63,
      style: {
        opacity: 1,
      },
    },
    {
      x: 15.3334,
      y: 63,
      style: {
        opacity: 1,
      },
    },
    {
      x: 18.3334,
      y: 63,
      style: {
        opacity: 1,
      },
    },
    {
      x: 21.3334,
      y: 63,
      style: {
        opacity: 1,
      },
    },
    {
      x: 24.3334,
      y: 63,
      style: {
        opacity: 1,
      },
    },
    {
      x: 27.3334,
      y: 63,
      style: {
        opacity: 1,
      },
    },
    {
      x: 30.3334,
      y: 63,
      style: {
        opacity: 1,
      },
    },
    {
      x: 33.3334,
      y: 63,
      style: {
        opacity: 1,
      },
    },
    {
      x: 36.3334,
      y: 63,
      style: {
        opacity: 1,
      },
    },
    {
      x: 39.3334,
      y: 63,
      style: {
        opacity: 1,
      },
    },
    {
      x: 42.3334,
      y: 63,
      style: {
        opacity: 1,
      },
    },
    {
      x: 45.3334,
      y: 63,
      style: {
        opacity: 1,
      },
    },
    {
      x: 48.3334,
      y: 63,
      style: {
        opacity: 1,
      },
    },
    {
      x: 51.3334,
      y: 63,
      style: {
        opacity: 1,
      },
    },
    {
      x: 54.3334,
      y: 63,
      style: {
        opacity: 1,
      },
    },
    {
      x: 57.3334,
      y: 63,
      style: {
        opacity: 1,
      },
    },
    {
      x: 60.3334,
      y: 63,
      style: {
        opacity: 1,
      },
    },
    {
      x: 63.3334,
      y: 63,
      style: {
        opacity: 1,
      },
    },
    {
      x: 66.3334,
      y: 63,
      style: {
        opacity: 1,
      },
    },
    {
      x: 69.3334,
      y: 63,
      style: {
        opacity: 1,
      },
    },
    {
      x: 72.3334,
      y: 63,
      style: {
        opacity: 1,
      },
    },
    {
      x: 75.3334,
      y: 63,
      style: {
        opacity: 1,
      },
    },
    {
      x: 78.3334,
      y: 63,
      style: {
        opacity: 1,
      },
    },
    {
      x: 81.3334,
      y: 63,
      style: {
        opacity: 1,
      },
    },
    {
      x: 84.3334,
      y: 63,
      style: {
        opacity: 1,
      },
    },
    {
      x: 87.3334,
      y: 63,
      style: {
        opacity: 1,
      },
    },
    {
      x: 90.3334,
      y: 63,
      style: {
        opacity: 1,
      },
    },
    {
      x: 93.3334,
      y: 63,
      style: {
        opacity: 1,
      },
    },
    {
      x: 96.3334,
      y: 63,
      style: {
        opacity: 1,
      },
    },
    {
      x: 99.3334,
      y: 63,
      style: {
        opacity: 1,
      },
    },
    {
      x: 102.333,
      y: 63,
      style: {
        opacity: 1,
      },
    },
    {
      x: 105.333,
      y: 63,
      style: {
        opacity: 1,
      },
    },
    {
      x: 108.333,
      y: 63,
      style: {
        opacity: 1,
      },
    },
    {
      x: 111.333,
      y: 63,
      style: {
        opacity: 1,
      },
    },
    {
      x: 114.333,
      y: 63,
      style: {
        opacity: 1,
      },
    },
    {
      x: 117.333,
      y: 63,
      style: {
        opacity: 1,
      },
    },
    {
      x: 120.333,
      y: 63,
      style: {
        opacity: 1,
      },
    },
    {
      x: 123.333,
      y: 63,
      style: {
        opacity: 1,
      },
    },
    {
      x: 126.333,
      y: 63,
      style: {
        opacity: 1,
      },
    },
    {
      x: 129.333,
      y: 63,
      style: {
        opacity: 1,
      },
    },
    {
      x: 132.333,
      y: 63,
      style: {
        opacity: 1,
      },
    },
    {
      x: 135.333,
      y: 63,
      style: {
        opacity: 1,
      },
    },
    {
      x: 138.333,
      y: 63,
      style: {
        opacity: 1,
      },
    },
    {
      x: 141.333,
      y: 63,
      style: {
        opacity: 1,
      },
    },
    {
      x: 144.333,
      y: 63,
      style: {
        opacity: 1,
      },
    },
    {
      x: 147.333,
      y: 63,
      style: {
        opacity: 1,
      },
    },
    {
      x: 150.333,
      y: 63,
      style: {
        opacity: 1,
      },
    },
    {
      x: 0.333374,
      y: 60,
      style: {
        opacity: 1,
      },
    },
    {
      x: 3.33337,
      y: 60,
      style: {
        opacity: 1,
      },
    },
    {
      x: 6.33337,
      y: 60,
      style: {
        opacity: 1,
      },
    },
    {
      x: 9.33337,
      y: 60,
      style: {
        opacity: 1,
      },
    },
    {
      x: 12.3334,
      y: 60,
      style: {
        opacity: 1,
      },
    },
    {
      x: 15.3334,
      y: 60,
      style: {
        opacity: 1,
      },
    },
    {
      x: 18.3334,
      y: 60,
      style: {
        opacity: 1,
      },
    },
    {
      x: 21.3334,
      y: 60,
      style: {
        opacity: 1,
      },
    },
    {
      x: 24.3334,
      y: 60,
      style: {
        opacity: 1,
      },
    },
    {
      x: 27.3334,
      y: 60,
      style: {
        opacity: 1,
      },
    },
    {
      x: 30.3334,
      y: 60,
      style: {
        opacity: 1,
      },
    },
    {
      x: 33.3334,
      y: 60,
      style: {
        opacity: 1,
      },
    },
    {
      x: 36.3334,
      y: 60,
      style: {
        opacity: 1,
      },
    },
    {
      x: 39.3334,
      y: 60,
      style: {
        opacity: 1,
      },
    },
    {
      x: 42.3334,
      y: 60,
      style: {
        opacity: 1,
      },
    },
    {
      x: 45.3334,
      y: 60,
      style: {
        opacity: 1,
      },
    },
    {
      x: 48.3334,
      y: 60,
      style: {
        opacity: 1,
      },
    },
    {
      x: 51.3334,
      y: 60,
      style: {
        opacity: 1,
      },
    },
    {
      x: 54.3334,
      y: 60,
      style: {
        opacity: 1,
      },
    },
    {
      x: 57.3334,
      y: 60,
      style: {
        opacity: 1,
      },
    },
    {
      x: 60.3334,
      y: 60,
      style: {
        opacity: 1,
      },
    },
    {
      x: 63.3334,
      y: 60,
      style: {
        opacity: 1,
      },
    },
    {
      x: 66.3334,
      y: 60,
      style: {
        opacity: 1,
      },
    },
    {
      x: 69.3334,
      y: 60,
      style: {
        opacity: 1,
      },
    },
    {
      x: 72.3334,
      y: 60,
      style: {
        opacity: 1,
      },
    },
    {
      x: 75.3334,
      y: 60,
      style: {
        opacity: 1,
      },
    },
    {
      x: 78.3334,
      y: 60,
      style: {
        opacity: 1,
      },
    },
    {
      x: 81.3334,
      y: 60,
      style: {
        opacity: 1,
      },
    },
    {
      x: 84.3334,
      y: 60,
      style: {
        opacity: 1,
      },
    },
    {
      x: 87.3334,
      y: 60,
      style: {
        opacity: 1,
      },
    },
    {
      x: 90.3334,
      y: 60,
      style: {
        opacity: 1,
      },
    },
    {
      x: 93.3334,
      y: 60,
      style: {
        opacity: 1,
      },
    },
    {
      x: 96.3334,
      y: 60,
      style: {
        opacity: 1,
      },
    },
    {
      x: 99.3334,
      y: 60,
      style: {
        opacity: 1,
      },
    },
    {
      x: 102.333,
      y: 60,
      style: {
        opacity: 1,
      },
    },
    {
      x: 105.333,
      y: 60,
      style: {
        opacity: 1,
      },
    },
    {
      x: 108.333,
      y: 60,
      style: {
        opacity: 1,
      },
    },
    {
      x: 111.333,
      y: 60,
      style: {
        opacity: 1,
      },
    },
    {
      x: 114.333,
      y: 60,
      style: {
        opacity: 1,
      },
    },
    {
      x: 117.333,
      y: 60,
      style: {
        opacity: 1,
      },
    },
    {
      x: 120.333,
      y: 60,
      style: {
        opacity: 1,
      },
    },
    {
      x: 123.333,
      y: 60,
      style: {
        opacity: 1,
      },
    },
    {
      x: 126.333,
      y: 60,
      style: {
        opacity: 1,
      },
    },
    {
      x: 129.333,
      y: 60,
      style: {
        opacity: 1,
      },
    },
    {
      x: 132.333,
      y: 60,
      style: {
        opacity: 1,
      },
    },
    {
      x: 135.333,
      y: 60,
      style: {
        opacity: 1,
      },
    },
    {
      x: 138.333,
      y: 60,
      style: {
        opacity: 1,
      },
    },
    {
      x: 141.333,
      y: 60,
      style: {
        opacity: 1,
      },
    },
    {
      x: 144.333,
      y: 60,
      style: {
        opacity: 1,
      },
    },
    {
      x: 147.333,
      y: 60,
      style: {
        opacity: 1,
      },
    },
    {
      x: 150.333,
      y: 60,
      style: {
        opacity: 1,
      },
    },
    {
      x: 0.333374,
      y: 57,
      style: {
        opacity: 1,
      },
    },
    {
      x: 3.33337,
      y: 57,
      style: {
        opacity: 1,
      },
    },
    {
      x: 6.33337,
      y: 57,
      style: {
        opacity: 1,
      },
    },
    {
      x: 9.33337,
      y: 57,
      style: {
        opacity: 1,
      },
    },
    {
      x: 12.3334,
      y: 57,
      style: {
        opacity: 1,
      },
    },
    {
      x: 15.3334,
      y: 57,
      style: {
        opacity: 1,
      },
    },
    {
      x: 18.3334,
      y: 57,
      style: {
        opacity: 1,
      },
    },
    {
      x: 21.3334,
      y: 57,
      style: {
        opacity: 1,
      },
    },
    {
      x: 24.3334,
      y: 57,
      style: {
        opacity: 1,
      },
    },
    {
      x: 27.3334,
      y: 57,
      style: {
        opacity: 1,
      },
    },
    {
      x: 30.3334,
      y: 57,
      style: {
        opacity: 1,
      },
    },
    {
      x: 33.3334,
      y: 57,
      style: {
        opacity: 1,
      },
    },
    {
      x: 36.3334,
      y: 57,
      style: {
        opacity: 1,
      },
    },
    {
      x: 39.3334,
      y: 57,
      style: {
        opacity: 1,
      },
    },
    {
      x: 42.3334,
      y: 57,
      style: {
        opacity: 1,
      },
    },
    {
      x: 45.3334,
      y: 57,
      style: {
        opacity: 1,
      },
    },
    {
      x: 48.3334,
      y: 57,
      style: {
        opacity: 1,
      },
    },
    {
      x: 51.3334,
      y: 57,
      style: {
        opacity: 1,
      },
    },
    {
      x: 54.3334,
      y: 57,
      style: {
        opacity: 1,
      },
    },
    {
      x: 57.3334,
      y: 57,
      style: {
        opacity: 1,
      },
    },
    {
      x: 60.3334,
      y: 57,
      style: {
        opacity: 1,
      },
    },
    {
      x: 63.3334,
      y: 57,
      style: {
        opacity: 1,
      },
    },
    {
      x: 66.3334,
      y: 57,
      style: {
        opacity: 1,
      },
    },
    {
      x: 69.3334,
      y: 57,
      style: {
        opacity: 1,
      },
    },
    {
      x: 72.3334,
      y: 57,
      style: {
        opacity: 1,
      },
    },
    {
      x: 75.3334,
      y: 57,
      style: {
        opacity: 1,
      },
    },
    {
      x: 78.3334,
      y: 57,
      style: {
        opacity: 1,
      },
    },
    {
      x: 81.3334,
      y: 57,
      style: {
        opacity: 1,
      },
    },
    {
      x: 84.3334,
      y: 57,
      style: {
        opacity: 1,
      },
    },
    {
      x: 87.3334,
      y: 57,
      style: {
        opacity: 1,
      },
    },
    {
      x: 90.3334,
      y: 57,
      style: {
        opacity: 1,
      },
    },
    {
      x: 93.3334,
      y: 57,
      style: {
        opacity: 1,
      },
    },
    {
      x: 96.3334,
      y: 57,
      style: {
        opacity: 1,
      },
    },
    {
      x: 99.3334,
      y: 57,
      style: {
        opacity: 1,
      },
    },
    {
      x: 102.333,
      y: 57,
      style: {
        opacity: 1,
      },
    },
    {
      x: 105.333,
      y: 57,
      style: {
        opacity: 1,
      },
    },
    {
      x: 108.333,
      y: 57,
      style: {
        opacity: 1,
      },
    },
    {
      x: 111.333,
      y: 57,
      style: {
        opacity: 1,
      },
    },
    {
      x: 114.333,
      y: 57,
      style: {
        opacity: 1,
      },
    },
    {
      x: 117.333,
      y: 57,
      style: {
        opacity: 1,
      },
    },
    {
      x: 120.333,
      y: 57,
      style: {
        opacity: 1,
      },
    },
    {
      x: 123.333,
      y: 57,
      style: {
        opacity: 1,
      },
    },
    {
      x: 126.333,
      y: 57,
      style: {
        opacity: 1,
      },
    },
    {
      x: 129.333,
      y: 57,
      style: {
        opacity: 1,
      },
    },
    {
      x: 135.333,
      y: 57,
      style: {
        opacity: 1,
      },
    },
    {
      x: 138.333,
      y: 57,
      style: {
        opacity: 1,
      },
    },
    {
      x: 144.333,
      y: 57,
      style: {
        opacity: 1,
      },
    },
    {
      x: 147.333,
      y: 57,
      style: {
        opacity: 1,
      },
    },
    {
      x: 150.333,
      y: 57,
      style: {
        opacity: 1,
      },
    },
    {
      x: 0.333374,
      y: 54,
      style: {
        opacity: 1,
      },
    },
    {
      x: 3.33337,
      y: 54,
      style: {
        opacity: 1,
      },
    },
    {
      x: 6.33337,
      y: 54,
      style: {
        opacity: 1,
      },
    },
    {
      x: 9.33337,
      y: 54,
      style: {
        opacity: 1,
      },
    },
    {
      x: 12.3334,
      y: 54,
      style: {
        opacity: 1,
      },
    },
    {
      x: 15.3334,
      y: 54,
      style: {
        opacity: 1,
      },
    },
    {
      x: 21.3334,
      y: 54,
      style: {
        opacity: 1,
      },
    },
    {
      x: 24.3334,
      y: 54,
      style: {
        opacity: 1,
      },
    },
    {
      x: 27.3334,
      y: 54,
      style: {
        opacity: 1,
      },
    },
    {
      x: 30.3334,
      y: 54,
      style: {
        opacity: 1,
      },
    },
    {
      x: 33.3334,
      y: 54,
      style: {
        opacity: 1,
      },
    },
    {
      x: 36.3334,
      y: 54,
      style: {
        opacity: 1,
      },
    },
    {
      x: 39.3334,
      y: 54,
      style: {
        opacity: 1,
      },
    },
    {
      x: 42.3334,
      y: 54,
      style: {
        opacity: 1,
      },
    },
    {
      x: 45.3334,
      y: 54,
      style: {
        opacity: 1,
      },
    },
    {
      x: 48.3334,
      y: 54,
      style: {
        opacity: 1,
      },
    },
    {
      x: 51.3334,
      y: 54,
      style: {
        opacity: 1,
      },
    },
    {
      x: 54.3334,
      y: 54,
      style: {
        opacity: 1,
      },
    },
    {
      x: 57.3334,
      y: 54,
      style: {
        opacity: 1,
      },
    },
    {
      x: 60.3334,
      y: 54,
      style: {
        opacity: 1,
      },
    },
    {
      x: 63.3334,
      y: 54,
      style: {
        opacity: 1,
      },
    },
    {
      x: 66.3334,
      y: 54,
      style: {
        opacity: 1,
      },
    },
    {
      x: 69.3334,
      y: 54,
      style: {
        opacity: 1,
      },
    },
    {
      x: 72.3334,
      y: 54,
      style: {
        opacity: 1,
      },
    },
    {
      x: 75.3334,
      y: 54,
      style: {
        opacity: 1,
      },
    },
    {
      x: 78.3334,
      y: 54,
      style: {
        opacity: 1,
      },
    },
    {
      x: 81.3334,
      y: 54,
      style: {
        opacity: 1,
      },
    },
    {
      x: 87.3334,
      y: 54,
      style: {
        opacity: 1,
      },
    },
    {
      x: 93.3334,
      y: 54,
      style: {
        opacity: 1,
      },
    },
    {
      x: 96.3334,
      y: 54,
      style: {
        opacity: 1,
      },
    },
    {
      x: 99.3334,
      y: 54,
      style: {
        opacity: 1,
      },
    },
    {
      x: 102.333,
      y: 54,
      style: {
        opacity: 1,
      },
    },
    {
      x: 105.333,
      y: 54,
      style: {
        opacity: 1,
      },
    },
    {
      x: 108.333,
      y: 54,
      style: {
        opacity: 1,
      },
    },
    {
      x: 111.333,
      y: 54,
      style: {
        opacity: 1,
      },
    },
    {
      x: 114.333,
      y: 54,
      style: {
        opacity: 1,
      },
    },
    {
      x: 117.333,
      y: 54,
      style: {
        opacity: 1,
      },
    },
    {
      x: 120.333,
      y: 54,
      style: {
        opacity: 1,
      },
    },
    {
      x: 123.333,
      y: 54,
      style: {
        opacity: 1,
      },
    },
    {
      x: 129.333,
      y: 54,
      style: {
        opacity: 1,
      },
    },
    {
      x: 132.333,
      y: 54,
      style: {
        opacity: 1,
      },
    },
    {
      x: 135.333,
      y: 54,
      style: {
        opacity: 1,
      },
    },
    {
      x: 138.333,
      y: 54,
      style: {
        opacity: 1,
      },
    },
    {
      x: 141.333,
      y: 54,
      style: {
        opacity: 1,
      },
    },
    {
      x: 144.333,
      y: 54,
      style: {
        opacity: 1,
      },
    },
    {
      x: 147.333,
      y: 54,
      style: {
        opacity: 1,
      },
    },
    {
      x: 150.333,
      y: 54,
      style: {
        opacity: 1,
      },
    },
    {
      x: 0.333374,
      y: 51,
      style: {
        opacity: 1,
      },
    },
    {
      x: 3.33337,
      y: 51,
      style: {
        opacity: 1,
      },
    },
    {
      x: 6.33337,
      y: 51,
      style: {
        opacity: 1,
      },
    },
    {
      x: 9.33337,
      y: 51,
      style: {
        opacity: 1,
      },
    },
    {
      x: 12.3334,
      y: 51,
      style: {
        opacity: 1,
      },
    },
    {
      x: 18.3334,
      y: 51,
      style: {
        opacity: 1,
      },
    },
    {
      x: 21.3334,
      y: 51,
      style: {
        opacity: 1,
      },
    },
    {
      x: 24.3334,
      y: 51,
      style: {
        opacity: 1,
      },
    },
    {
      x: 27.3334,
      y: 51,
      style: {
        opacity: 1,
      },
    },
    {
      x: 30.3334,
      y: 51,
      style: {
        opacity: 1,
      },
    },
    {
      x: 33.3334,
      y: 51,
      style: {
        opacity: 1,
      },
    },
    {
      x: 36.3334,
      y: 51,
      style: {
        opacity: 1,
      },
    },
    {
      x: 39.3334,
      y: 51,
      style: {
        opacity: 1,
      },
    },
    {
      x: 42.3334,
      y: 51,
      style: {
        opacity: 1,
      },
    },
    {
      x: 45.3334,
      y: 51,
      style: {
        opacity: 1,
      },
    },
    {
      x: 48.3334,
      y: 51,
      style: {
        opacity: 1,
      },
    },
    {
      x: 51.3334,
      y: 51,
      style: {
        opacity: 1,
      },
    },
    {
      x: 54.3334,
      y: 51,
      style: {
        opacity: 1,
      },
    },
    {
      x: 57.3334,
      y: 51,
      style: {
        opacity: 1,
      },
    },
    {
      x: 60.3334,
      y: 51,
      style: {
        opacity: 1,
      },
    },
    {
      x: 63.3334,
      y: 51,
      style: {
        opacity: 1,
      },
    },
    {
      x: 66.3334,
      y: 51,
      style: {
        opacity: 1,
      },
    },
    {
      x: 69.3334,
      y: 51,
      style: {
        opacity: 1,
      },
    },
    {
      x: 72.3334,
      y: 51,
      style: {
        opacity: 1,
      },
    },
    {
      x: 75.3334,
      y: 51,
      style: {
        opacity: 1,
      },
    },
    {
      x: 78.3334,
      y: 51,
      style: {
        opacity: 1,
      },
    },
    {
      x: 81.3334,
      y: 51,
      style: {
        opacity: 1,
      },
    },
    {
      x: 84.3334,
      y: 51,
      style: {
        opacity: 1,
      },
    },
    {
      x: 87.3334,
      y: 51,
      style: {
        opacity: 1,
      },
    },
    {
      x: 93.3334,
      y: 51,
      style: {
        opacity: 1,
      },
    },
    {
      x: 96.3334,
      y: 51,
      style: {
        opacity: 1,
      },
    },
    {
      x: 99.3334,
      y: 51,
      style: {
        opacity: 1,
      },
    },
    {
      x: 102.333,
      y: 51,
      style: {
        opacity: 1,
      },
    },
    {
      x: 105.333,
      y: 51,
      style: {
        opacity: 1,
      },
    },
    {
      x: 108.333,
      y: 51,
      style: {
        opacity: 1,
      },
    },
    {
      x: 111.333,
      y: 51,
      style: {
        opacity: 1,
      },
    },
    {
      x: 114.333,
      y: 51,
      style: {
        opacity: 1,
      },
    },
    {
      x: 117.333,
      y: 51,
      style: {
        opacity: 1,
      },
    },
    {
      x: 120.333,
      y: 51,
      style: {
        opacity: 1,
      },
    },
    {
      x: 129.333,
      y: 51,
      style: {
        opacity: 1,
      },
    },
    {
      x: 132.333,
      y: 51,
      style: {
        opacity: 1,
      },
    },
    {
      x: 135.333,
      y: 51,
      style: {
        opacity: 1,
      },
    },
    {
      x: 138.333,
      y: 51,
      style: {
        opacity: 1,
      },
    },
    {
      x: 141.333,
      y: 51,
      style: {
        opacity: 1,
      },
    },
    {
      x: 144.333,
      y: 51,
      style: {
        opacity: 1,
      },
    },
    {
      x: 147.333,
      y: 51,
      style: {
        opacity: 1,
      },
    },
    {
      x: 150.333,
      y: 51,
      style: {
        opacity: 1,
      },
    },
    {
      x: 0.333374,
      y: 48,
      style: {
        opacity: 1,
      },
    },
    {
      x: 3.33337,
      y: 48,
      style: {
        opacity: 1,
      },
    },
    {
      x: 6.33337,
      y: 48,
      style: {
        opacity: 1,
      },
    },
    {
      x: 9.33337,
      y: 48,
      style: {
        opacity: 1,
      },
    },
    {
      x: 12.3334,
      y: 48,
      style: {
        opacity: 1,
      },
    },
    {
      x: 15.3334,
      y: 48,
      style: {
        opacity: 1,
      },
    },
    {
      x: 21.3334,
      y: 48,
      style: {
        opacity: 1,
      },
    },
    {
      x: 24.3334,
      y: 48,
      style: {
        opacity: 1,
      },
    },
    {
      x: 27.3334,
      y: 48,
      style: {
        opacity: 1,
      },
    },
    {
      x: 30.3334,
      y: 48,
      style: {
        opacity: 1,
      },
    },
    {
      x: 33.3334,
      y: 48,
      style: {
        opacity: 1,
      },
    },
    {
      x: 36.3334,
      y: 48,
      style: {
        opacity: 1,
      },
    },
    {
      x: 39.3334,
      y: 48,
      style: {
        opacity: 1,
      },
    },
    {
      x: 42.3334,
      y: 48,
      style: {
        opacity: 1,
      },
    },
    {
      x: 45.3334,
      y: 48,
      style: {
        opacity: 1,
      },
    },
    {
      x: 48.3334,
      y: 48,
      style: {
        opacity: 1,
      },
    },
    {
      x: 51.3334,
      y: 48,
      style: {
        opacity: 1,
      },
    },
    {
      x: 54.3334,
      y: 48,
      style: {
        opacity: 1,
      },
    },
    {
      x: 57.3334,
      y: 48,
      style: {
        opacity: 1,
      },
    },
    {
      x: 60.3334,
      y: 48,
      style: {
        opacity: 1,
      },
    },
    {
      x: 63.3334,
      y: 48,
      style: {
        opacity: 1,
      },
    },
    {
      x: 66.3334,
      y: 48,
      style: {
        opacity: 1,
      },
    },
    {
      x: 69.3334,
      y: 48,
      style: {
        opacity: 1,
      },
    },
    {
      x: 72.3334,
      y: 48,
      style: {
        opacity: 1,
      },
    },
    {
      x: 75.3334,
      y: 48,
      style: {
        opacity: 1,
      },
    },
    {
      x: 78.3334,
      y: 48,
      style: {
        opacity: 1,
      },
    },
    {
      x: 81.3334,
      y: 48,
      style: {
        opacity: 1,
      },
    },
    {
      x: 84.3334,
      y: 48,
      style: {
        opacity: 1,
      },
    },
    {
      x: 87.3334,
      y: 48,
      style: {
        opacity: 1,
      },
    },
    {
      x: 90.3334,
      y: 48,
      style: {
        opacity: 1,
      },
    },
    {
      x: 96.3334,
      y: 48,
      style: {
        opacity: 1,
      },
    },
    {
      x: 99.3334,
      y: 48,
      style: {
        opacity: 1,
      },
    },
    {
      x: 102.333,
      y: 48,
      style: {
        opacity: 1,
      },
    },
    {
      x: 105.333,
      y: 48,
      style: {
        opacity: 1,
      },
    },
    {
      x: 108.333,
      y: 48,
      style: {
        opacity: 1,
      },
    },
    {
      x: 111.333,
      y: 48,
      style: {
        opacity: 1,
      },
    },
    {
      x: 114.333,
      y: 48,
      style: {
        opacity: 1,
      },
    },
    {
      x: 117.333,
      y: 48,
      style: {
        opacity: 1,
      },
    },
    {
      x: 132.333,
      y: 48,
      style: {
        opacity: 1,
      },
    },
    {
      x: 135.333,
      y: 48,
      style: {
        opacity: 1,
      },
    },
    {
      x: 141.333,
      y: 48,
      style: {
        opacity: 1,
      },
    },
    {
      x: 144.333,
      y: 48,
      style: {
        opacity: 1,
      },
    },
    {
      x: 147.333,
      y: 48,
      style: {
        opacity: 1,
      },
    },
    {
      x: 150.333,
      y: 48,
      style: {
        opacity: 1,
      },
    },
    {
      x: 0.333374,
      y: 45,
      style: {
        opacity: 1,
      },
    },
    {
      x: 3.33337,
      y: 45,
      style: {
        opacity: 1,
      },
    },
    {
      x: 6.33337,
      y: 45,
      style: {
        opacity: 1,
      },
    },
    {
      x: 9.33337,
      y: 45,
      style: {
        opacity: 1,
      },
    },
    {
      x: 12.3334,
      y: 45,
      style: {
        opacity: 1,
      },
    },
    {
      x: 15.3334,
      y: 45,
      style: {
        opacity: 1,
      },
    },
    {
      x: 18.3334,
      y: 45,
      style: {
        opacity: 1,
      },
    },
    {
      x: 21.3334,
      y: 45,
      style: {
        opacity: 1,
      },
    },
    {
      x: 24.3334,
      y: 45,
      style: {
        opacity: 1,
      },
    },
    {
      x: 27.3334,
      y: 45,
      style: {
        opacity: 1,
      },
    },
    {
      x: 30.3334,
      y: 45,
      style: {
        opacity: 1,
      },
    },
    {
      x: 33.3334,
      y: 45,
      style: {
        opacity: 1,
      },
    },
    {
      x: 36.3334,
      y: 45,
      style: {
        opacity: 1,
      },
    },
    {
      x: 39.3334,
      y: 45,
      style: {
        opacity: 1,
      },
    },
    {
      x: 42.3334,
      y: 45,
      style: {
        opacity: 1,
      },
    },
    {
      x: 45.3334,
      y: 45,
      style: {
        opacity: 1,
      },
    },
    {
      x: 48.3334,
      y: 45,
      style: {
        opacity: 1,
      },
    },
    {
      x: 51.3334,
      y: 45,
      style: {
        opacity: 1,
      },
    },
    {
      x: 54.3334,
      y: 45,
      style: {
        opacity: 1,
      },
    },
    {
      x: 57.3334,
      y: 45,
      style: {
        opacity: 1,
      },
    },
    {
      x: 60.3334,
      y: 45,
      style: {
        opacity: 1,
      },
    },
    {
      x: 63.3334,
      y: 45,
      style: {
        opacity: 1,
      },
    },
    {
      x: 66.3334,
      y: 45,
      style: {
        opacity: 1,
      },
    },
    {
      x: 69.3334,
      y: 45,
      style: {
        opacity: 1,
      },
    },
    {
      x: 72.3334,
      y: 45,
      style: {
        opacity: 1,
      },
    },
    {
      x: 75.3334,
      y: 45,
      style: {
        opacity: 1,
      },
    },
    {
      x: 78.3334,
      y: 45,
      style: {
        opacity: 1,
      },
    },
    {
      x: 81.3334,
      y: 45,
      style: {
        opacity: 1,
      },
    },
    {
      x: 84.3334,
      y: 45,
      style: {
        opacity: 1,
      },
    },
    {
      x: 87.3334,
      y: 45,
      style: {
        opacity: 1,
      },
    },
    {
      x: 90.3334,
      y: 45,
      style: {
        opacity: 1,
      },
    },
    {
      x: 96.3334,
      y: 45,
      style: {
        opacity: 1,
      },
    },
    {
      x: 99.3334,
      y: 45,
      style: {
        opacity: 1,
      },
    },
    {
      x: 102.333,
      y: 45,
      style: {
        opacity: 1,
      },
    },
    {
      x: 105.333,
      y: 45,
      style: {
        opacity: 1,
      },
    },
    {
      x: 108.333,
      y: 45,
      style: {
        opacity: 1,
      },
    },
    {
      x: 111.333,
      y: 45,
      style: {
        opacity: 1,
      },
    },
    {
      x: 114.333,
      y: 45,
      style: {
        opacity: 1,
      },
    },
    {
      x: 138.333,
      y: 45,
      style: {
        opacity: 1,
      },
    },
    {
      x: 141.333,
      y: 45,
      style: {
        opacity: 1,
      },
    },
    {
      x: 144.333,
      y: 45,
      style: {
        opacity: 1,
      },
    },
    {
      x: 147.333,
      y: 45,
      style: {
        opacity: 1,
      },
    },
    {
      x: 150.333,
      y: 45,
      style: {
        opacity: 1,
      },
    },
    {
      x: 0.333374,
      y: 42,
      style: {
        opacity: 1,
      },
    },
    {
      x: 3.33337,
      y: 42,
      style: {
        opacity: 1,
      },
    },
    {
      x: 6.33337,
      y: 42,
      style: {
        opacity: 1,
      },
    },
    {
      x: 9.33337,
      y: 42,
      style: {
        opacity: 1,
      },
    },
    {
      x: 12.3334,
      y: 42,
      style: {
        opacity: 1,
      },
    },
    {
      x: 15.3334,
      y: 42,
      style: {
        opacity: 1,
      },
    },
    {
      x: 18.3334,
      y: 42,
      style: {
        opacity: 1,
      },
    },
    {
      x: 21.3334,
      y: 42,
      style: {
        opacity: 1,
      },
    },
    {
      x: 24.3334,
      y: 42,
      style: {
        opacity: 1,
      },
    },
    {
      x: 27.3334,
      y: 42,
      style: {
        opacity: 1,
      },
    },
    {
      x: 30.3334,
      y: 42,
      style: {
        opacity: 1,
      },
    },
    {
      x: 33.3334,
      y: 42,
      style: {
        opacity: 1,
      },
    },
    {
      x: 36.3334,
      y: 42,
      style: {
        opacity: 1,
      },
    },
    {
      x: 39.3334,
      y: 42,
      style: {
        opacity: 1,
      },
    },
    {
      x: 39.3334,
      y: 39,
      style: {
        opacity: 1,
      },
    },
    {
      x: 42.3334,
      y: 42,
      style: {
        opacity: 1,
      },
    },
    {
      x: 48.3334,
      y: 42,
      style: {
        opacity: 1,
      },
    },
    {
      x: 51.3334,
      y: 42,
      style: {
        opacity: 1,
      },
    },
    {
      x: 54.3334,
      y: 42,
      style: {
        opacity: 1,
      },
    },
    {
      x: 57.3334,
      y: 42,
      style: {
        opacity: 1,
      },
    },
    {
      x: 60.3334,
      y: 42,
      style: {
        opacity: 1,
      },
    },
    {
      x: 63.3334,
      y: 42,
      style: {
        opacity: 1,
      },
    },
    {
      x: 66.3334,
      y: 42,
      style: {
        opacity: 1,
      },
    },
    {
      x: 69.3334,
      y: 42,
      style: {
        opacity: 1,
      },
    },
    {
      x: 72.3334,
      y: 42,
      style: {
        opacity: 1,
      },
    },
    {
      x: 75.3334,
      y: 42,
      style: {
        opacity: 1,
      },
    },
    {
      x: 78.3334,
      y: 42,
      style: {
        opacity: 1,
      },
    },
    {
      x: 81.3334,
      y: 42,
      style: {
        opacity: 1,
      },
    },
    {
      x: 84.3334,
      y: 42,
      style: {
        opacity: 1,
      },
    },
    {
      x: 87.3334,
      y: 42,
      style: {
        opacity: 1,
      },
    },
    {
      x: 90.3334,
      y: 42,
      style: {
        opacity: 1,
      },
    },
    {
      x: 93.3334,
      y: 42,
      style: {
        opacity: 1,
      },
    },
    {
      x: 105.333,
      y: 42,
      style: {
        opacity: 1,
      },
    },
    {
      x: 108.333,
      y: 42,
      style: {
        opacity: 1,
      },
    },
    {
      x: 111.333,
      y: 42,
      style: {
        opacity: 1,
      },
    },
    {
      x: 147.333,
      y: 42,
      style: {
        opacity: 1,
      },
    },
    {
      x: 150.333,
      y: 42,
      style: {
        opacity: 1,
      },
    },
    {
      x: 0.333374,
      y: 39,
      style: {
        opacity: 1,
      },
    },
    {
      x: 3.33337,
      y: 39,
      style: {
        opacity: 1,
      },
    },
    {
      x: 6.33337,
      y: 39,
      style: {
        opacity: 1,
      },
    },
    {
      x: 9.33337,
      y: 39,
      style: {
        opacity: 1,
      },
    },
    {
      x: 12.3334,
      y: 39,
      style: {
        opacity: 1,
      },
    },
    {
      x: 15.3334,
      y: 39,
      style: {
        opacity: 1,
      },
    },
    {
      x: 18.3334,
      y: 39,
      style: {
        opacity: 1,
      },
    },
    {
      x: 21.3334,
      y: 39,
      style: {
        opacity: 1,
      },
    },
    {
      x: 24.3334,
      y: 39,
      style: {
        opacity: 1,
      },
    },
    {
      x: 27.3334,
      y: 39,
      style: {
        opacity: 1,
      },
    },
    {
      x: 30.3334,
      y: 39,
      style: {
        opacity: 1,
      },
    },
    {
      x: 33.3334,
      y: 39,
      style: {
        opacity: 1,
      },
    },
    {
      x: 36.3334,
      y: 39,
      style: {
        opacity: 1,
      },
    },
    {
      x: 45.3334,
      y: 39,
      style: {
        opacity: 1,
      },
    },
    {
      x: 48.3334,
      y: 39,
      style: {
        opacity: 1,
      },
    },
    {
      x: 51.3334,
      y: 39,
      style: {
        opacity: 1,
      },
    },
    {
      x: 54.3334,
      y: 39,
      style: {
        opacity: 1,
      },
    },
    {
      x: 57.3334,
      y: 39,
      style: {
        opacity: 1,
      },
    },
    {
      x: 60.3334,
      y: 39,
      style: {
        opacity: 1,
      },
    },
    {
      x: 63.3334,
      y: 39,
      style: {
        opacity: 1,
      },
    },
    {
      x: 66.3334,
      y: 39,
      style: {
        opacity: 1,
      },
    },
    {
      x: 69.3334,
      y: 39,
      style: {
        opacity: 1,
      },
    },
    {
      x: 72.3334,
      y: 39,
      style: {
        opacity: 1,
      },
    },
    {
      x: 75.3334,
      y: 39,
      style: {
        opacity: 1,
      },
    },
    {
      x: 78.3334,
      y: 39,
      style: {
        opacity: 1,
      },
    },
    {
      x: 81.3334,
      y: 39,
      style: {
        opacity: 1,
      },
    },
    {
      x: 84.3334,
      y: 39,
      style: {
        opacity: 1,
      },
    },
    {
      x: 87.3334,
      y: 39,
      style: {
        opacity: 1,
      },
    },
    {
      x: 90.3334,
      y: 39,
      style: {
        opacity: 1,
      },
    },
    {
      x: 93.3334,
      y: 39,
      style: {
        opacity: 1,
      },
    },
    {
      x: 96.3334,
      y: 39,
      style: {
        opacity: 1,
      },
    },
    {
      x: 108.333,
      y: 39,
      style: {
        opacity: 1,
      },
    },
    {
      x: 147.333,
      y: 39,
      style: {
        opacity: 1,
      },
    },
    {
      x: 150.333,
      y: 39,
      style: {
        opacity: 1,
      },
    },
    {
      x: 0.333374,
      y: 36,
      style: {
        opacity: 1,
      },
    },
    {
      x: 3.33337,
      y: 36,
      style: {
        opacity: 1,
      },
    },
    {
      x: 6.33337,
      y: 36,
      style: {
        opacity: 1,
      },
    },
    {
      x: 9.33337,
      y: 36,
      style: {
        opacity: 1,
      },
    },
    {
      x: 12.3334,
      y: 36,
      style: {
        opacity: 1,
      },
    },
    {
      x: 15.3334,
      y: 36,
      style: {
        opacity: 1,
      },
    },
    {
      x: 18.3334,
      y: 36,
      style: {
        opacity: 1,
      },
    },
    {
      x: 21.3334,
      y: 36,
      style: {
        opacity: 1,
      },
    },
    {
      x: 24.3334,
      y: 36,
      style: {
        opacity: 1,
      },
    },
    {
      x: 27.3334,
      y: 36,
      style: {
        opacity: 1,
      },
    },
    {
      x: 30.3334,
      y: 36,
      style: {
        opacity: 1,
      },
    },
    {
      x: 33.3334,
      y: 36,
      style: {
        opacity: 1,
      },
    },
    {
      x: 36.3334,
      y: 36,
      style: {
        opacity: 1,
      },
    },
    {
      x: 42.3334,
      y: 36,
      style: {
        opacity: 1,
      },
    },
    {
      x: 45.3334,
      y: 36,
      style: {
        opacity: 1,
      },
    },
    {
      x: 48.3334,
      y: 36,
      style: {
        opacity: 1,
      },
    },
    {
      x: 54.3334,
      y: 36,
      style: {
        opacity: 1,
      },
    },
    {
      x: 57.3334,
      y: 36,
      style: {
        opacity: 1,
      },
    },
    {
      x: 60.3334,
      y: 36,
      style: {
        opacity: 1,
      },
    },
    {
      x: 63.3334,
      y: 36,
      style: {
        opacity: 1,
      },
    },
    {
      x: 66.3334,
      y: 36,
      style: {
        opacity: 1,
      },
    },
    {
      x: 69.3334,
      y: 36,
      style: {
        opacity: 1,
      },
    },
    {
      x: 72.3334,
      y: 36,
      style: {
        opacity: 1,
      },
    },
    {
      x: 75.3334,
      y: 36,
      style: {
        opacity: 1,
      },
    },
    {
      x: 78.3334,
      y: 36,
      style: {
        opacity: 1,
      },
    },
    {
      x: 81.3334,
      y: 36,
      style: {
        opacity: 1,
      },
    },
    {
      x: 84.3334,
      y: 36,
      style: {
        opacity: 1,
      },
    },
    {
      x: 87.3334,
      y: 36,
      style: {
        opacity: 1,
      },
    },
    {
      x: 90.3334,
      y: 36,
      style: {
        opacity: 1,
      },
    },
    {
      x: 93.3334,
      y: 36,
      style: {
        opacity: 1,
      },
    },
    {
      x: 150.333,
      y: 36,
      style: {
        opacity: 1,
      },
    },
    {
      x: 0.333374,
      y: 33,
      style: {
        opacity: 1,
      },
    },
    {
      x: 3.33337,
      y: 33,
      style: {
        opacity: 1,
      },
    },
    {
      x: 6.33337,
      y: 33,
      style: {
        opacity: 1,
      },
    },
    {
      x: 9.33337,
      y: 33,
      style: {
        opacity: 1,
      },
    },
    {
      x: 12.3334,
      y: 33,
      style: {
        opacity: 1,
      },
    },
    {
      x: 15.3334,
      y: 33,
      style: {
        opacity: 1,
      },
    },
    {
      x: 18.3334,
      y: 33,
      style: {
        opacity: 1,
      },
    },
    {
      x: 21.3334,
      y: 33,
      style: {
        opacity: 1,
      },
    },
    {
      x: 24.3334,
      y: 33,
      style: {
        opacity: 1,
      },
    },
    {
      x: 27.3334,
      y: 33,
      style: {
        opacity: 1,
      },
    },
    {
      x: 30.3334,
      y: 33,
      style: {
        opacity: 1,
      },
    },
    {
      x: 33.3334,
      y: 33,
      style: {
        opacity: 1,
      },
    },
    {
      x: 36.3334,
      y: 33,
      style: {
        opacity: 1,
      },
    },
    {
      x: 39.3334,
      y: 33,
      style: {
        opacity: 1,
      },
    },
    {
      x: 42.3334,
      y: 33,
      style: {
        opacity: 1,
      },
    },
    {
      x: 45.3334,
      y: 33,
      style: {
        opacity: 1,
      },
    },
    {
      x: 48.3334,
      y: 33,
      style: {
        opacity: 1,
      },
    },
    {
      x: 51.3334,
      y: 33,
      style: {
        opacity: 1,
      },
    },
    {
      x: 54.3334,
      y: 33,
      style: {
        opacity: 1,
      },
    },
    {
      x: 51.3334,
      y: 36,
      style: {
        opacity: 1,
      },
    },
    {
      x: 57.3334,
      y: 33,
      style: {
        opacity: 1,
      },
    },
    {
      x: 60.3334,
      y: 33,
      style: {
        opacity: 1,
      },
    },
    {
      x: 63.3334,
      y: 33,
      style: {
        opacity: 1,
      },
    },
    {
      x: 66.3334,
      y: 33,
      style: {
        opacity: 1,
      },
    },
    {
      x: 69.3334,
      y: 33,
      style: {
        opacity: 1,
      },
    },
    {
      x: 72.3334,
      y: 33,
      style: {
        opacity: 1,
      },
    },
    {
      x: 75.3334,
      y: 33,
      style: {
        opacity: 1,
      },
    },
    {
      x: 78.3334,
      y: 33,
      style: {
        opacity: 1,
      },
    },
    {
      x: 81.3334,
      y: 33,
      style: {
        opacity: 1,
      },
    },
    {
      x: 84.3334,
      y: 33,
      style: {
        opacity: 1,
      },
    },
    {
      x: 87.3334,
      y: 33,
      style: {
        opacity: 1,
      },
    },
    {
      x: 90.3334,
      y: 33,
      style: {
        opacity: 1,
      },
    },
    {
      x: 3.33337,
      y: 30,
      style: {
        opacity: 1,
      },
    },
    {
      x: 6.33337,
      y: 30,
      style: {
        opacity: 1,
      },
    },
    {
      x: 9.33337,
      y: 30,
      style: {
        opacity: 1,
      },
    },
    {
      x: 12.3334,
      y: 30,
      style: {
        opacity: 1,
      },
    },
    {
      x: 15.3334,
      y: 30,
      style: {
        opacity: 1,
      },
    },
    {
      x: 18.3334,
      y: 30,
      style: {
        opacity: 1,
      },
    },
    {
      x: 24.3334,
      y: 30,
      style: {
        opacity: 1,
      },
    },
    {
      x: 27.3334,
      y: 30,
      style: {
        opacity: 1,
      },
    },
    {
      x: 30.3334,
      y: 30,
      style: {
        opacity: 1,
      },
    },
    {
      x: 33.3334,
      y: 30,
      style: {
        opacity: 1,
      },
    },
    {
      x: 36.3334,
      y: 30,
      style: {
        opacity: 1,
      },
    },
    {
      x: 39.3334,
      y: 30,
      style: {
        opacity: 1,
      },
    },
    {
      x: 42.3334,
      y: 30,
      style: {
        opacity: 1,
      },
    },
    {
      x: 45.3334,
      y: 30,
      style: {
        opacity: 1,
      },
    },
    {
      x: 48.3334,
      y: 30,
      style: {
        opacity: 1,
      },
    },
    {
      x: 51.3334,
      y: 30,
      style: {
        opacity: 1,
      },
    },
    {
      x: 54.3334,
      y: 30,
      style: {
        opacity: 1,
      },
    },
    {
      x: 57.3334,
      y: 30,
      style: {
        opacity: 1,
      },
    },
    {
      x: 60.3334,
      y: 30,
      style: {
        opacity: 1,
      },
    },
    {
      x: 63.3334,
      y: 30,
      style: {
        opacity: 1,
      },
    },
    {
      x: 66.3334,
      y: 30,
      style: {
        opacity: 1,
      },
    },
    {
      x: 69.3334,
      y: 30,
      style: {
        opacity: 1,
      },
    },
    {
      x: 72.3334,
      y: 30,
      style: {
        opacity: 1,
      },
    },
    {
      x: 75.3334,
      y: 30,
      style: {
        opacity: 1,
      },
    },
    {
      x: 78.3334,
      y: 30,
      style: {
        opacity: 1,
      },
    },
    {
      x: 81.3334,
      y: 30,
      style: {
        opacity: 1,
      },
    },
    {
      x: 84.3334,
      y: 30,
      style: {
        opacity: 1,
      },
    },
    {
      x: 87.3334,
      y: 30,
      style: {
        opacity: 1,
      },
    },
    {
      x: 6.33337,
      y: 27,
      style: {
        opacity: 1,
      },
    },
    {
      x: 9.33337,
      y: 27,
      style: {
        opacity: 1,
      },
    },
    {
      x: 12.3334,
      y: 27,
      style: {
        opacity: 1,
      },
    },
    {
      x: 15.3334,
      y: 27,
      style: {
        opacity: 1,
      },
    },
    {
      x: 21.3334,
      y: 27,
      style: {
        opacity: 1,
      },
    },
    {
      x: 24.3334,
      y: 27,
      style: {
        opacity: 1,
      },
    },
    {
      x: 27.3334,
      y: 27,
      style: {
        opacity: 1,
      },
    },
    {
      x: 30.3334,
      y: 27,
      style: {
        opacity: 1,
      },
    },
    {
      x: 33.3334,
      y: 27,
      style: {
        opacity: 1,
      },
    },
    {
      x: 36.3334,
      y: 27,
      style: {
        opacity: 1,
      },
    },
    {
      x: 39.3334,
      y: 27,
      style: {
        opacity: 1,
      },
    },
    {
      x: 42.3334,
      y: 27,
      style: {
        opacity: 1,
      },
    },
    {
      x: 45.3334,
      y: 27,
      style: {
        opacity: 1,
      },
    },
    {
      x: 48.3334,
      y: 27,
      style: {
        opacity: 1,
      },
    },
    {
      x: 51.3334,
      y: 27,
      style: {
        opacity: 1,
      },
    },
    {
      x: 54.3334,
      y: 27,
      style: {
        opacity: 1,
      },
    },
    {
      x: 60.3334,
      y: 27,
      style: {
        opacity: 1,
      },
    },
    {
      x: 63.3334,
      y: 27,
      style: {
        opacity: 1,
      },
    },
    {
      x: 66.3334,
      y: 27,
      style: {
        opacity: 1,
      },
    },
    {
      x: 69.3334,
      y: 27,
      style: {
        opacity: 1,
      },
    },
    {
      x: 72.3334,
      y: 27,
      style: {
        opacity: 1,
      },
    },
    {
      x: 75.3334,
      y: 27,
      style: {
        opacity: 1,
      },
    },
    {
      x: 78.3334,
      y: 27,
      style: {
        opacity: 1,
      },
    },
    {
      x: 81.3334,
      y: 27,
      style: {
        opacity: 1,
      },
    },
    {
      x: 84.3334,
      y: 27,
      style: {
        opacity: 1,
      },
    },
    {
      x: 9.33337,
      y: 24,
      style: {
        opacity: 1,
      },
    },
    {
      x: 12.3334,
      y: 24,
      style: {
        opacity: 1,
      },
    },
    {
      x: 21.3334,
      y: 24,
      style: {
        opacity: 1,
      },
    },
    {
      x: 24.3334,
      y: 24,
      style: {
        opacity: 1,
      },
    },
    {
      x: 27.3334,
      y: 24,
      style: {
        opacity: 1,
      },
    },
    {
      x: 30.3334,
      y: 24,
      style: {
        opacity: 1,
      },
    },
    {
      x: 33.3334,
      y: 24,
      style: {
        opacity: 1,
      },
    },
    {
      x: 36.3334,
      y: 24,
      style: {
        opacity: 1,
      },
    },
    {
      x: 39.3334,
      y: 24,
      style: {
        opacity: 1,
      },
    },
    {
      x: 42.3334,
      y: 24,
      style: {
        opacity: 1,
      },
    },
    {
      x: 45.3334,
      y: 24,
      style: {
        opacity: 1,
      },
    },
    {
      x: 48.3334,
      y: 24,
      style: {
        opacity: 1,
      },
    },
    {
      x: 51.3334,
      y: 24,
      style: {
        opacity: 1,
      },
    },
    {
      x: 63.3334,
      y: 24,
      style: {
        opacity: 1,
      },
    },
    {
      x: 66.3334,
      y: 24,
      style: {
        opacity: 1,
      },
    },
    {
      x: 69.3334,
      y: 24,
      style: {
        opacity: 1,
      },
    },
    {
      x: 72.3334,
      y: 24,
      style: {
        opacity: 1,
      },
    },
    {
      x: 75.3334,
      y: 24,
      style: {
        opacity: 1,
      },
    },
    {
      x: 78.3334,
      y: 24,
      style: {
        opacity: 1,
      },
    },
    {
      x: 81.3334,
      y: 24,
      style: {
        opacity: 1,
      },
    },
    {
      x: 18.3334,
      y: 21,
      style: {
        opacity: 1,
      },
    },
    {
      x: 21.3334,
      y: 21,
      style: {
        opacity: 1,
      },
    },
    {
      x: 24.3334,
      y: 21,
      style: {
        opacity: 1,
      },
    },
    {
      x: 27.3334,
      y: 21,
      style: {
        opacity: 1,
      },
    },
    {
      x: 30.3334,
      y: 21,
      style: {
        opacity: 1,
      },
    },
    {
      x: 33.3334,
      y: 21,
      style: {
        opacity: 1,
      },
    },
    {
      x: 36.3334,
      y: 21,
      style: {
        opacity: 1,
      },
    },
    {
      x: 39.3334,
      y: 21,
      style: {
        opacity: 1,
      },
    },
    {
      x: 42.3334,
      y: 21,
      style: {
        opacity: 1,
      },
    },
    {
      x: 45.3334,
      y: 21,
      style: {
        opacity: 1,
      },
    },
    {
      x: 48.3334,
      y: 21,
      style: {
        opacity: 1,
      },
    },
    {
      x: 66.3334,
      y: 21,
      style: {
        opacity: 1,
      },
    },
    {
      x: 69.3334,
      y: 21,
      style: {
        opacity: 1,
      },
    },
    {
      x: 72.3334,
      y: 21,
      style: {
        opacity: 1,
      },
    },
    {
      x: 75.3334,
      y: 21,
      style: {
        opacity: 1,
      },
    },
    {
      x: 78.3334,
      y: 21,
      style: {
        opacity: 1,
      },
    },
    {
      x: 15.3334,
      y: 18,
      style: {
        opacity: 1,
      },
    },
    {
      x: 18.3334,
      y: 18,
      style: {
        opacity: 1,
      },
    },
    {
      x: 21.3334,
      y: 18,
      style: {
        opacity: 1,
      },
    },
    {
      x: 24.3334,
      y: 18,
      style: {
        opacity: 1,
      },
    },
    {
      x: 27.3334,
      y: 18,
      style: {
        opacity: 1,
      },
    },
    {
      x: 30.3334,
      y: 18,
      style: {
        opacity: 1,
      },
    },
    {
      x: 33.3334,
      y: 18,
      style: {
        opacity: 1,
      },
    },
    {
      x: 36.3334,
      y: 18,
      style: {
        opacity: 1,
      },
    },
    {
      x: 39.3334,
      y: 18,
      style: {
        opacity: 1,
      },
    },
    {
      x: 42.3334,
      y: 18,
      style: {
        opacity: 1,
      },
    },
    {
      x: 45.3334,
      y: 18,
      style: {
        opacity: 1,
      },
    },
    {
      x: 69.3334,
      y: 18,
      style: {
        opacity: 1,
      },
    },
    {
      x: 72.3334,
      y: 18,
      style: {
        opacity: 1,
      },
    },
    {
      x: 75.3334,
      y: 18,
      style: {
        opacity: 1,
      },
    },
    {
      x: 18.3334,
      y: 15,
      style: {
        opacity: 1,
      },
    },
    {
      x: 21.3334,
      y: 15,
      style: {
        opacity: 1,
      },
    },
    {
      x: 24.3334,
      y: 15,
      style: {
        opacity: 1,
      },
    },
    {
      x: 27.3334,
      y: 15,
      style: {
        opacity: 1,
      },
    },
    {
      x: 30.3334,
      y: 15,
      style: {
        opacity: 1,
      },
    },
    {
      x: 33.3334,
      y: 15,
      style: {
        opacity: 1,
      },
    },
    {
      x: 36.3334,
      y: 15,
      style: {
        opacity: 1,
      },
    },
    {
      x: 39.3334,
      y: 15,
      style: {
        opacity: 1,
      },
    },
    {
      x: 42.3334,
      y: 15,
      style: {
        opacity: 1,
      },
    },
    {
      x: 72.3334,
      y: 15,
      style: {
        opacity: 1,
      },
    },
    {
      x: 21.3334,
      y: 12,
      style: {
        opacity: 1,
      },
    },
    {
      x: 24.3334,
      y: 12,
      style: {
        opacity: 1,
      },
    },
    {
      x: 27.3334,
      y: 12,
      style: {
        opacity: 1,
      },
    },
    {
      x: 30.3334,
      y: 12,
      style: {
        opacity: 1,
      },
    },
    {
      x: 33.3334,
      y: 12,
      style: {
        opacity: 1,
      },
    },
    {
      x: 36.3334,
      y: 12,
      style: {
        opacity: 1,
      },
    },
    {
      x: 39.3334,
      y: 12,
      style: {
        opacity: 1,
      },
    },
    {
      x: 24.3334,
      y: 9,
      style: {
        opacity: 1,
      },
    },
    {
      x: 27.3334,
      y: 9,
      style: {
        opacity: 1,
      },
    },
    {
      x: 30.3334,
      y: 9,
      style: {
        opacity: 1,
      },
    },
    {
      x: 33.3334,
      y: 9,
      style: {
        opacity: 1,
      },
    },
    {
      x: 36.3334,
      y: 9,
      style: {
        opacity: 1,
      },
    },
    {
      x: 27.3334,
      y: 6,
      style: {
        opacity: 1,
      },
    },
    {
      x: 30.3334,
      y: 6,
      style: {
        opacity: 1,
      },
    },
    {
      x: 33.3334,
      y: 6,
      style: {
        opacity: 1,
      },
    },
    {
      x: 141.333,
      y: 9,
      style: {
        opacity: 1,
      },
    },
    {
      x: 144.333,
      y: 9,
      style: {
        opacity: 1,
      },
    },
    {
      x: 30.3334,
      y: 3,
      style: {
        opacity: 1,
      },
    },
    {
      x: 138.333,
      y: 6,
      style: {
        opacity: 1,
      },
    },
    {
      x: 141.333,
      y: 6,
      style: {
        opacity: 1,
      },
    },
    {
      x: 144.333,
      y: 6,
      style: {
        opacity: 1,
      },
    },
    {
      x: 147.333,
      y: 6,
      style: {
        opacity: 1,
      },
    },
    {
      x: 138.333,
      y: 3,
      style: {
        opacity: 1,
      },
    },
    {
      x: 141.333,
      y: 3,
      style: {
        opacity: 1,
      },
    },
    {
      x: 144.333,
      y: 3,
      style: {
        opacity: 1,
      },
    },
    {
      x: 147.333,
      y: 3,
      style: {
        opacity: 1,
      },
    },
    {
      x: 141.333,
      y: null,
      style: {
        opacity: 1,
      },
    },
    {
      x: 144.333,
      y: null,
      style: {
        opacity: 1,
      },
    },
  ];
  const [listAxis, setListAxis] = useState(_listAxis);

  const [isToggle, setIsToggle] = useState(false);

  const ac = useRef(new AbortController());

  useImperativeHandle(ref, () => {
    return {
      start: () => {
        setIsToggle(true);
      },
      stop: async () => {
        setIsToggle(false);
        ac.current.abort();
        const cloneListAxis = [...listAxis];
        const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
        const updatedList = await Promise.all(
          cloneListAxis.map(async (item) => {
            if (+item.style.opacity === 0) {
              await delay(300); // Chờ 100ms
              return {
                ...item,
                style: {
                  ...item.style,
                  opacity: 1,
                },
              };
            }
            return item;
          }),
        );
        setListAxis(updatedList);
      },
    };
  }, [listAxis]);

  useEffect(() => {
    let id = null;
    if (isToggle) {
      id = setInterval(
        () => {
          const cloneListAxis = [...listAxis];
          const updatedItems = randomToggleOpacity(cloneListAxis, 150);
          setListAxis(updatedItems);
        },
        200,
        ac.current.signal,
      );
    }

    return () => {
      if (id) {
        clearInterval(id);
      }
    };
  }, [isToggle]);

  return (
    <div className="w-[174px] h-[118px] bg-[linear-gradient(60.51deg,_#fafafa_-0.19%,_#ffffff)] rounded-lg z-[3] shadow-[0_0_0_1px_#00000014,0_2px_4px_#0000000a,0_12px_24px_-8px_#0000000d]">
      <div className="h-[28px] flex border-b-[1px] border-solid border-b-[#0000001a]">
        <div className="h-full text-[11px] uppercase border-l-[1px] border-[#0000001a] text-[#999999] pl-[12px] pr-[12px] flex justify-center items-center ml-auto">
          1440px
        </div>
      </div>
      <div className="flex items-center justify-center h-[90px]">
        <svg
          data-fill="true"
          fill="none"
          height="65"
          viewBox="0 0 153 65"
          width="153"
        >
          <g fill="black" fillOpacity="0.15">
            {listAxis.map((item, index) => {
              return (
                <rect key={index} x={item.x} y={item.y} style={item.style} />
              );
            })}
          </g>
        </svg>
      </div>
    </div>
  );
});

export const R_375px = forwardRef(function R_375px(props, ref) {
  const _listAxis = [
    {
      x: null,
      y: 44.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: null,
      y: 40.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: null,
      y: 36.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: null,
      y: 32.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: null,
      y: 28.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: null,
      y: 24.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 4,
      y: 44.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 4,
      y: 40.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 4,
      y: 36.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 4,
      y: 32.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 4,
      y: 28.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 4,
      y: 24.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 4,
      y: 20.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 8,
      y: 44.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 8,
      y: 40.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 8,
      y: 36.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 8,
      y: 32.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 8,
      y: 28.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 8,
      y: 24.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 8,
      y: 20.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 12,
      y: 44.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 12,
      y: 40.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 12,
      y: 32.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 12,
      y: 28.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 12,
      y: 24.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 12,
      y: 16.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 12,
      y: 12.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 16,
      y: 44.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 16,
      y: 40.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 16,
      y: 36.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 16,
      y: 32.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 16,
      y: 28.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 16,
      y: 24.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 16,
      y: 20.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 16,
      y: 16.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 16,
      y: 12.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 16,
      y: 8.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 20,
      y: 44.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 20,
      y: 40.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 20,
      y: 36.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 20,
      y: 32.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 20,
      y: 28.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 20,
      y: 24.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 20,
      y: 20.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 20,
      y: 16.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 20,
      y: 12.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 20,
      y: 8.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 20,
      y: 4.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 24,
      y: 44.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 24,
      y: 40.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 24,
      y: 36.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 24,
      y: 32.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 24,
      y: 28.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 24,
      y: 24.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 24,
      y: 20.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 24,
      y: 16.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 24,
      y: 12.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 24,
      y: 8.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 28,
      y: 44.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 28,
      y: 40.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 28,
      y: 36.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 28,
      y: 32.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 28,
      y: 24.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 28,
      y: 20.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 28,
      y: 16.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 28,
      y: 12.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 32,
      y: 44.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 32,
      y: 40.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 32,
      y: 36.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 32,
      y: 28.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 32,
      y: 24.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 32,
      y: 20.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 32,
      y: 16.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 36,
      y: 44.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 36,
      y: 40.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 36,
      y: 36.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 36,
      y: 32.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 36,
      y: 28.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 36,
      y: 24.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 36,
      y: 20.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 40,
      y: 44.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 40,
      y: 40.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 40,
      y: 36.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 40,
      y: 32.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 40,
      y: 28.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 40,
      y: 24.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 40,
      y: 20.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 44,
      y: 44.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 44,
      y: 40.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 44,
      y: 36.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 44,
      y: 32.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 44,
      y: 28.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 44,
      y: 24.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 44,
      y: 20.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 44,
      y: 16.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 48,
      y: 44.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 48,
      y: 40.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 48,
      y: 36.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 48,
      y: 32.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 48,
      y: 28.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 48,
      y: 24.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 48,
      y: 20.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 48,
      y: 16.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 48,
      y: 12.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 52,
      y: 44.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 52,
      y: 40.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 52,
      y: 36.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 52,
      y: 32.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 52,
      y: 28.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 52,
      y: 24.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 52,
      y: 20.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 52,
      y: 16.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 56,
      y: 44.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 56,
      y: 40.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 56,
      y: 36.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 56,
      y: 32.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 56,
      y: 28.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 56,
      y: 20.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 60,
      y: 44.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 60,
      y: 40.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 60,
      y: 32.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 60,
      y: 28.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 60,
      y: 24.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 64,
      y: 44.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 64,
      y: 40.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 64,
      y: 36.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 64,
      y: 28.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 68,
      y: 44.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 68,
      y: 40.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 68,
      y: 36.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 68,
      y: 32.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 72,
      y: 44.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 72,
      y: 40.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 72,
      y: 36.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 72,
      y: 32.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 72,
      y: 28.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 76,
      y: 44.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 92,
      y: 44.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 96,
      y: 44.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 100,
      y: 44.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 76,
      y: 40.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 84,
      y: 40.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 84,
      y: 44.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 92,
      y: 40.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 100,
      y: 40.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 76,
      y: 36.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 92,
      y: 36.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 100,
      y: 36.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 76,
      y: 32.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 88,
      y: 32.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 92,
      y: 32.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 96,
      y: 40.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 100,
      y: 32.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 96,
      y: 36.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 100,
      y: 28.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 80,
      y: 36.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 88,
      y: 44.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 96,
      y: 32.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 100,
      y: 24.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 80,
      y: 40.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 88,
      y: 40.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 80,
      y: 44.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 88,
      y: 36.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 96,
      y: 8.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 92,
      y: 4.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 96,
      y: 4.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 100,
      y: 4.5,
      style: {
        opacity: 1,
      },
    },
    {
      x: 96,
      y: 0.5,
      style: {
        opacity: 1,
      },
    },
  ];
  const [listAxis, setListAxis] = useState(_listAxis);
  const [isToggle, setIsToggle] = useState(false);

  const ac = useRef(new AbortController());

  useImperativeHandle(ref, () => {
    return {
      start: () => {
        setIsToggle(true);
      },
      stop: async () => {
        setIsToggle(false);
        ac.current.abort();
        const cloneListAxis = [...listAxis];
        const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
        const updatedList = await Promise.all(
          cloneListAxis.map(async (item) => {
            if (+item.style.opacity === 0) {
              await delay(300); // Chờ 100ms
              return {
                ...item,
                style: {
                  ...item.style,
                  opacity: 1,
                },
              };
            }
            return item;
          }),
        );
        setListAxis(updatedList);
      },
    };
  }, [listAxis]);

  useEffect(() => {
    let id = null;
    if (isToggle) {
      id = setInterval(
        () => {
          const cloneListAxis = [...listAxis];
          const updatedItems = randomToggleOpacity(cloneListAxis, 40);
          setListAxis(updatedItems);
        },
        300,
        ac.current.signal,
      );
    }

    return () => {
      if (id) {
        clearInterval(id);
      }
    };
  }, [isToggle]);

  return (
    <div className="w-[128px] h-[96px] bg-[linear-gradient(60.51deg,_#fafafabf_-0.19%,_#ffffffbf)] rounded-lg z-[3] shadow-[0_0_0_1px_#00000014,0_2px_4px_#0000000a,0_12px_24px_-8px_#0000000d]">
      <div className="h-[28px] flex border-b-[1px] border-solid border-b-[#0000001a]">
        <div className="h-full text-[11px] uppercase border-l-[1px] border-[#0000001a] text-[#999999] pl-[12px] pr-[12px] flex justify-center items-center ml-auto">
          375px
        </div>
      </div>
      <div className="flex items-center justify-center h-[60px]">
        <svg
          data-fill="true"
          fill="none"
          height="46"
          viewBox="0 0 102 46"
          width="102"
        >
          <g fill="black" fillOpacity="0.25">
            {listAxis.map((item, index) => {
              return (
                <rect key={index} x={item.x} y={item.y} style={item.style} />
              );
            })}
          </g>
        </svg>
      </div>
    </div>
  );
});
