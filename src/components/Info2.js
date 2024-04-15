import React from "react";
import "./Info2.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Info2 = () => {
  useGSAP(() => {
    gsap.from("#info2-img-container", {
      scrollTrigger: {
        trigger: "#info2-img-container",
        start: "top bottom",
        end: "bottom center",
        toggleActions: "play complete none reset",
      },
      opacity: 0,
      duration: 1.5,
    });
    gsap.from("#info2", {
      scrollTrigger: {
        trigger: "#info2",
        start: `top bottom`,
        end: "bottom bottom+=100px",
        // markers: true,
        scrub: 1,
        toggleActions: "play complete none reset",
      },
      xPercent: -100,
      opacity: 1,
      duration: 1,
    });
    ScrollTrigger.refresh();
  }, []);

  return (
    <div className="wrap-info2">
      <div className="info-container">
        <div className="content-container">
          <div className="info2-title">먹거리 / 벚꽃마켓</div>
          <div className="content">
            맛있고 다양한 먹거리! <br />
            축제왔다가 입맛이 폭발했다고 <br />
            다이어트에게 알리지 마라~!
          </div>
          <div className="info2-button-container" id="info2">
            <button className="info2-button">
              <span>마켓 신청하기</span>
              <svg
                width="34"
                height="34"
                viewBox="0 0 74 74"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="svg"
              >
                <circle
                  cx="37"
                  cy="37"
                  r="35.5"
                  stroke="transparent"
                  strokeWidth="3"
                  className="circle"
                ></circle>
                <path
                  d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z"
                  fill="transparent"
                  className="path"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <div className="info2-img-container" id="info2-img-container">
          <img alt="info-img-5" src="images/info-5.png" className="img-info2" />
          <img alt="info-img-6" src="images/info-6.png" className="img-info2" />
          <img alt="info-img-7" src="images/info-7.png" className="img-info2" />
          <img alt="info-img-8" src="images/info-8.png" className="img-info2" />
        </div>
      </div>
    </div>
  );
};

export default Info2;
