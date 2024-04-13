import React from "react";
import "./Info1.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Info1 = () => {
  useGSAP(() => {
    gsap.from(".content-container", {
      scrollTrigger: {
        trigger: ".content-container",
        start: `top bottom`,
        end: "bottom center",
        markers: true,
        scrub: 1,
        toggleActions: "play complete none reset",
      },
      xPercent: 100,
      opacity: 1,
      duration: 2,
    });
    ScrollTrigger.refresh();
  }, []);

  return (
    <div className="wrap-info1">
      <div className="info-container">
        <div className="img-container">
          <img alt="info-img-1" src="images/info-1.png" className="img-info" />
          <img alt="info-img-2" src="images/info-2.png" className="img-info" />
          <img alt="info-img-3" src="images/info-3.png" className="img-info" />
          <img alt="info-img-4" src="images/info-4.png" className="img-info" />
        </div>
        <div className="content-container">
          <div className="title">공연 / 이벤트</div>
          <div className="content">
            설렘에 설렘을 더할 환호와 감동! <br />
            즐겁게 여러분들을 기다리고 있어요~ <br />
            현장에서 만나요~
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info1;
