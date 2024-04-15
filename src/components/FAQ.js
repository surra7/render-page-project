import React, { useState } from "react";
import "./FAQ.css";
import { BsArrowUpCircleFill } from "react-icons/bs";
import { HiArrowSmallDown } from "react-icons/hi2";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FAQ = () => {
  const [clickedId, setClickedId] = useState(0);

  const handleClickedId = (ButtonId) => {
    if (clickedId === ButtonId) {
      setClickedId(0);
    } else {
      setClickedId(ButtonId);
    }
  };

  useGSAP(() => {
    gsap.from("#faq-list-container", {
      scrollTrigger: {
        trigger: "#faq-list-container",
        start: "top bottom",
        end: "bottom center",
        toggleActions: "play complete none reset",
      },
      yPercent: 30,
      opacity: 0,
      duration: 0.5,
    });
    ScrollTrigger.refresh();
  }, []);

  return (
    <div className="wrap-faq">
      <div className="faq-container">
        <div className="faq-title">자주 묻는 질문</div>
        <div className="faq-list-container" id="faq-list-container">
          <ul className="faq-list">
            <li>
              <button className="faq-item" onClick={() => handleClickedId(1)}>
                <label style={{ fontWeight: 500, alignItems: "baseline" }}>
                  01
                </label>
                <div className="faq-question">
                  티켓 구매 내역은 어디서 확인하나요?
                  <div
                    className={`faq-answer ${clickedId === 1 ? "display" : ""}`}
                  >
                    <p className="faq-answer-text">
                      마이페이지에서 '티켓'을 누르면 티켓 내역을 확인할 수
                      있습니다.
                    </p>
                  </div>
                </div>
                <span>
                  {clickedId === 1 ? (
                    <BsArrowUpCircleFill size={26} className="button-up" />
                  ) : (
                    <HiArrowSmallDown
                      size={20}
                      style={{ margin: "3px" }}
                      className="button-down"
                    />
                  )}
                </span>
              </button>
            </li>
            <li>
              <button className="faq-item" onClick={() => handleClickedId(2)}>
                <label style={{ fontWeight: 500 }}>02</label>
                <div className="faq-question">
                  마켓 신청이 제대로 되었는지 어떻게 확인하나요?
                  <div
                    className={`faq-answer ${clickedId === 2 ? "display" : ""}`}
                  >
                    <p className="faq-answer-text">
                      마이페이지에서 '신청내역'을 누르면 마켓 신청 내역과 승인
                      여부를 확인할 수 있습니다.
                    </p>
                  </div>
                </div>
                <span>
                  {clickedId === 2 ? (
                    <BsArrowUpCircleFill size={26} className="button-up" />
                  ) : (
                    <HiArrowSmallDown
                      size={20}
                      style={{ margin: "3px" }}
                      className="button-down"
                    />
                  )}
                </span>
              </button>
            </li>
            <li>
              <button className="faq-item" onClick={() => handleClickedId(3)}>
                <label style={{ fontWeight: 500 }}>03</label>
                <div className="faq-question">
                  현장에서도 티켓을 구매할 수 있나요?
                  <div
                    className={`faq-answer ${clickedId === 3 ? "display" : ""}`}
                  >
                    <p className="faq-answer-text">
                      티켓부스에서 현장 티켓을 구매할 수 있습니다.
                    </p>
                  </div>
                </div>
                <span>
                  {clickedId === 3 ? (
                    <BsArrowUpCircleFill size={26} className="button-up" />
                  ) : (
                    <HiArrowSmallDown
                      size={20}
                      style={{ margin: "3px" }}
                      className="button-down"
                    />
                  )}
                </span>
              </button>
            </li>
            <li>
              <button className="faq-item" onClick={() => handleClickedId(4)}>
                <label style={{ fontWeight: 500 }}>04</label>
                <div className="faq-question">
                  공연장에 어떻게 입장하나요?
                  <div
                    className={`faq-answer ${clickedId === 4 ? "display" : ""}`}
                  >
                    <p className="faq-answer-text">
                      당일 공연장 입구에서 티켓 확인을 한 후 입장 가능합니다.
                    </p>
                  </div>
                </div>
                <span>
                  {clickedId === 4 ? (
                    <BsArrowUpCircleFill size={26} className="button-up" />
                  ) : (
                    <HiArrowSmallDown
                      size={20}
                      style={{ margin: "3px" }}
                      className="button-down"
                    />
                  )}
                </span>
              </button>
            </li>
            <li>
              <button className="faq-item" onClick={() => handleClickedId(5)}>
                <label style={{ fontWeight: 500 }}>05</label>
                <div className="faq-question">
                  이벤트 당첨 확인은 어떻게 하나요?
                  <div
                    className={`faq-answer ${clickedId === 5 ? "display" : ""}`}
                  >
                    <p className="faq-answer-text">
                      추첨이 끝난 후 당첨자들에게 개별 안내 문자가 발송될
                      예정입니다.
                    </p>
                  </div>
                </div>
                <span>
                  {clickedId === 5 ? (
                    <BsArrowUpCircleFill size={26} className="button-up" />
                  ) : (
                    <HiArrowSmallDown
                      size={20}
                      style={{ margin: "3px" }}
                      className="button-down"
                    />
                  )}
                </span>
              </button>
            </li>
            <li>
              <button
                className="faq-item last"
                onClick={() => handleClickedId(6)}
              >
                <label style={{ fontWeight: 500 }}>06</label>
                <div className="faq-question">
                  공연 리스트는 어디서 확인하나요?
                  <div
                    className={`faq-answer ${clickedId === 6 ? "display" : ""}`}
                  >
                    <p className="faq-answer-text">
                      '공연/이벤트' 페이지에서 '공연'을 누르면 확인이
                      가능합니다.
                    </p>
                  </div>
                </div>
                <span>
                  {clickedId === 6 ? (
                    <BsArrowUpCircleFill size={26} className="button-up" />
                  ) : (
                    <HiArrowSmallDown
                      size={20}
                      style={{ margin: "3px" }}
                      className="button-down"
                    />
                  )}
                </span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
