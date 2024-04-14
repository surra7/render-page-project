import React, { useEffect } from "react";
import "./Map.css";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const { kakao } = window;

const Map = () => {
  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(37.435706, 127.005546),
      level: 4,
    };

    const map = new kakao.maps.Map(container, options);
    const markerPosition = new kakao.maps.LatLng(37.435706, 127.005546);
    const marker = new kakao.maps.Marker({
      position: markerPosition,
    });
    marker.setMap(map);
  }, []);

  useGSAP(() => {
    gsap.from("#map", {
      scrollTrigger: {
        trigger: "#map",
        start: "top bottom",
        end: "bottom center",
        // markers: true,
        toggleActions: "play complete none reset",
      },
      yPercent: 30,
      opacity: 0,
      duration: 1,
    });
    gsap.from("#map-button", {
      scrollTrigger: {
        trigger: "#map-button",
        start: "top bottom",
        end: "bottom center",
        markers: true,
        toggleActions: "play complete none reset",
      },
      yPercent: 50,
      opacity: 0,
      duration: 1.2,
    });

    ScrollTrigger.refresh();
  }, []);

  return (
    <div className="wrap-map">
      <div className="map-container">
        <div className="map-title">오시는 길</div>
        <div className="map">
          <div id="map" style={{ width: "60vmax", height: "30vmax" }}></div>
        </div>
        <div>
          <button
            id="map-button"
            className="map-button"
            onClick={() =>
              window.open(
                "https://www.google.co.kr/maps/place/%EB%8C%80%EA%B3%B5%EC%9B%90%EC%97%AD/data=!4m6!3m5!1s0x357b5f2645269379:0xf1d07de57810fb6c!8m2!3d37.435706!4d127.005546!16s%2Fg%2F11f7q_6rqz?hl=ko&entry=ttu"
              )
            }
          >
            구글맵 확인하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default Map;
