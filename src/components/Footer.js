import React from "react";
import styles from "./Footer.module.css";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BiShareAlt } from "react-icons/bi";
import { BiPurchaseTagAlt } from "react-icons/bi";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  useGSAP(() => {
    gsap.from("#wrap-back", {
      scrollTrigger: {
        trigger: "#wrap-back",
        start: "top bottom",
        end: "bottom top",
        toggleActions: "play complete none reset",
      },
      opacity: 0,
      duration: 1.5,
    });
    gsap.from("#purchase-container", {
      scrollTrigger: {
        trigger: "#purchase-container",
        start: `top bottom`,
        end: "bottom bottom+=100px",
        scrub: 1,
        toggleActions: "play complete none reset",
      },
      xPercent: -100,
      opacity: 0,
      duration: 1,
    });
    gsap.from("#share-container", {
      scrollTrigger: {
        trigger: "#share-container",
        start: `top bottom`,
        end: "bottom bottom+=100px",
        scrub: 1,
        toggleActions: "play complete none reset",
      },
      xPercent: 100,
      opacity: 0,
      duration: 1,
    });

    ScrollTrigger.refresh();
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrap_back} id="wrap-back"></div>
      <div className={styles.container}>
        <div className={styles.purchase_container} id="purchase-container">
          <div className={styles.purchase_content}>
            <div className={styles.title}>티켓 구매하기</div>
            <button
              className={`${styles.button} ${styles.purchase}`}
              onClick={() =>
                window.open("https://www.everland.com/everland/home/main")
              }
            >
              구매하기 &nbsp;
              <BiPurchaseTagAlt />
            </button>
          </div>
        </div>
        <div className={styles.share_container} id="share-container">
          <div className={styles.share_content}>
            <div className={styles.title}>친구에게 공유하기</div>
            <button className={`${styles.button} ${styles.share}`}>
              공유하기 &nbsp;
              <BiShareAlt />
            </button>
          </div>
        </div>
      </div>
      <div className={styles.footer_info}>https://github.com/surra7</div>
    </div>
  );
};

export default Footer;
