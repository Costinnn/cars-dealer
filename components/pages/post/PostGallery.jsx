"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import RArrowSvg from "@/components/svg/RArrowSvg";
import LArrowSvg from "@/components/svg/LArrowSvg";

import "./PostGallery.scss";

const PostGallery = ({ carImages }) => {
  const refValue = useRef();
  const displayRefValue = useRef();
  const [displayWidth, setDisplayWidth] = useState(0);

  const scroll = (direction) => {
    if (direction == "right") {
      refValue.current.scrollLeft +=
        displayWidth - (refValue.current.scrollLeft % displayWidth);
    } else {
      const leftValue = refValue.current.scrollLeft % displayWidth;
      if (leftValue > 0) {
        refValue.current.scrollLeft -= leftValue;
      } else {
        refValue.current.scrollLeft -= displayWidth;
      }
    }
  };

  const scrollTo = (index) => {
    refValue.current.scrollLeft = index * displayWidth;
  };

  useEffect(() => {
    const handleWindowSize = () => {
      if (window.innerWidth <= 1440) {
        setDisplayWidth(Number(window.innerWidth));
      } else {
        setDisplayWidth(1440);
      }
    };
    handleWindowSize();
    window.addEventListener("resize", handleWindowSize);

    return () => {
      window.removeEventListener("resize", handleWindowSize);
    };
  }, []);
  
  return (
    <section className="postgallery section_narrow" ref={displayRefValue}>
      <div className="frame" ref={refValue}>
        <div className="content">
          {carImages.map((img) => (
            <div className="img_box" key={img.url}>
              <Image
                src={img.url}
                fill
                sizes="(max-width:1440px)100vw, 1440px"
                alt="img"
              />
            </div>
          ))}
        </div>
      </div>
      <div className={`frame2`}>
        <div className="content2">
          {carImages.map((img, idx) => (
            <div
              className="img_box2"
              key={img.url}
              onClick={() => scrollTo(idx)}
            >
              <Image src={img.url} fill sizes="150px" alt="img" />
            </div>
          ))}
        </div>
      </div>

      <div className="arrows">
        <button type="button" onClick={() => scroll("left")}>
          <LArrowSvg />
        </button>
        <button type="button" onClick={() => scroll("right")}>
          <RArrowSvg />
        </button>
      </div>
    </section>
  );
};

export default PostGallery;
