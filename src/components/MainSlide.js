import React from "react";
import "./MainSlide.css";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BiShareAlt } from "react-icons/bi";
import { BiPurchaseTagAlt } from "react-icons/bi";
import { HiArrowSmallDown } from "react-icons/hi2";

gsap.registerPlugin(ScrollTrigger);

const MainSlide = () => {
  useGSAP(() => {
    gsap.to(".title-img", {
      scrollTrigger: {
        trigger: ".title-img",
        start: "top",
        end: "bottom",
        scrub: true,
      },
      yPercent: 50,
      scale: 3,
      opacity: 0,
    });
    ScrollTrigger.refresh();
  }, []);

  return (
    <div className="wrap-main">
      <div className="wrap-back"></div>
      <div className="wrap-title">
        <img alt="title" src="images/title.png" className="title-img" />
        <div className="button-container">
          <button
            className="button purchase"
            onClick={() =>
              window.open("https://www.everland.com/everland/home/main")
            }
          >
            구매하기 &nbsp;
            <BiPurchaseTagAlt />
          </button>
          <button className="button share">
            공유하기 &nbsp;
            <BiShareAlt />
          </button>
        </div>
      </div>
      <HiArrowSmallDown size={34} color="#333333" className="arrow-down" />
    </div>
  );
};

export default MainSlide;
