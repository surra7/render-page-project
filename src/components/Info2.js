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
        // markers: true,
        toggleActions: "play complete none reset",
      },
      opacity: 0,
      duration: 1,
    });
    // gsap.from("#info2", {
    //   scrollTrigger: {
    //     trigger: "#info2",
    //     start: `top bottom`,
    //     end: "bottom center",
    //     markers: true,
    //     scrub: 1,
    //     toggleActions: "play complete none reset",
    //   },
    //   xPercent: -100,
    //   opacity: 1,
    //   duration: 1,
    // });
    ScrollTrigger.refresh();
  }, []);

  return (
    <div className="wrap-info2">
      <div className="info-container">
        <div className="content-container" id="info2">
          <div className="title">먹거리 / 벚꽃마켓</div>
          <div className="content">
            맛있고 다양한 먹거리! <br />
            축제왔다가 입맛이 폭발했다고 <br />
            다이어트에게 알리지 마라~!
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
