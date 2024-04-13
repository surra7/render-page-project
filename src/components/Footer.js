import React from "react";
import "./Footer.css";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  useGSAP(() => {
    gsap.from(".wrap-back-footer", {
      scrollTrigger: {
        trigger: ".wrap-back-footer",
        start: "top",
        end: "bottom",
        // scrub: true,
        markers: true,
        toggleActions: "play complete none reset",
      },
      opacity: 0,
      duration: 1,
    });

    ScrollTrigger.refresh();
  }, []);

  return (
    <div className="wrap-footer">
      <div className="wrap-back-footer"></div>
      <div className="footer-container">Footer</div>
    </div>
  );
};

export default Footer;
