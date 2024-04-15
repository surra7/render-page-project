import React from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Timeline.css";

gsap.registerPlugin(ScrollTrigger);

const Timeline = () => {
  useGSAP(() => {
    gsap.from("#timeline", {
      scrollTrigger: {
        trigger: "#timeline",
        start: "top bottom",
        end: "bottom center",
        toggleActions: "play complete none reset",
      },
      yPercent: 100,
      opacity: 0,
      duration: 2,
    });

    ScrollTrigger.refresh();
  }, []);

  return (
    <div className="wrap-timeline">
      <div className="timeline-wrap">
        <div className="timeline-title">축제 일정</div>
        <div className="img-wrap">
          <img
            id="timeline"
            alt="timeline-text"
            src="images/timeline-1.png"
            className="timeline-text"
          />
          <img
            alt="timeline"
            src="images/timeline-2.png"
            className="timeline-img"
          />
        </div>
      </div>
    </div>
  );
};

export default Timeline;
