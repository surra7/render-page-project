import React, { useState } from "react";
import styles from "./Notice.module.css";
import { BsArrowUpCircleFill } from "react-icons/bs";
import { HiArrowSmallDown } from "react-icons/hi2";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Notice = () => {
  const [clickedId, setClickedId] = useState(0);

  const handleClickedId = (ButtonId) => {
    if (clickedId === ButtonId) {
      setClickedId(0);
    } else {
      setClickedId(ButtonId);
    }
  };

  useGSAP(() => {
    gsap.from("#notice-list-container", {
      scrollTrigger: {
        trigger: "#notice-list-container",
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
    <div className={styles.wrapper}>
      <div className={styles.notice_container}>
        <div className={styles.title}>공지사항</div>
        <div
          className={styles.notice_list_container}
          id="notice-list-container"
        >
          <ul>
            <li>
              <button
                className={styles.notice_item}
                onClick={() => handleClickedId(1)}
              >
                <label style={{ fontWeight: 500, alignItems: "baseline" }}>
                  01
                </label>
                <div className={styles.question}>
                  벚꽃축제를 더욱 편리하고 빠르게!
                  <div
                    className={`${styles.answer} ${
                      clickedId === 1 ? `${styles.display}` : ""
                    }`}
                  >
                    <p className={styles.answer_text}>
                      안전하고 빠르게 축제를 즐길 수 있도록 대중교통을
                      이용해보세요! 주차 스트레스 없고, 리무진 셔틀버스 이용의
                      기회까지!!
                    </p>
                  </div>
                </div>
                <span>
                  {clickedId === 1 ? (
                    <BsArrowUpCircleFill
                      size={26}
                      className={styles.button_up}
                    />
                  ) : (
                    <HiArrowSmallDown
                      size={20}
                      style={{ margin: "3px" }}
                      className={styles.button_down}
                    />
                  )}
                </span>
              </button>
            </li>
            <li>
              <button
                className={styles.notice_item}
                onClick={() => handleClickedId(2)}
              >
                <label style={{ fontWeight: 500 }}>02</label>
                <div className={styles.question}>
                  다양한 이벤트 진행중!
                  <div
                    className={`${styles.answer} ${
                      clickedId === 2 ? `${styles.display}` : ""
                    }`}
                  >
                    <p className={styles.answer_text}>
                      다양한 이벤트를 진행 중입니다. 자세한 내용은 sns를 통해
                      확인해 주세요! &nbsp;
                      <a href="https://www.instagram.com">
                        https://www.instagram.com
                      </a>
                    </p>
                  </div>
                </div>
                <span>
                  {clickedId === 2 ? (
                    <BsArrowUpCircleFill
                      size={26}
                      className={styles.button_up}
                    />
                  ) : (
                    <HiArrowSmallDown
                      size={20}
                      style={{ margin: "3px" }}
                      className={styles.button_down}
                    />
                  )}
                </span>
              </button>
            </li>
            <li>
              <button
                className={styles.notice_item}
                onClick={() => handleClickedId(3)}
              >
                <label style={{ fontWeight: 500 }}>03</label>
                <div className={styles.question}>
                  벚꽃축제 플리마켓 모집
                  <div
                    className={`${styles.answer} ${
                      clickedId === 3 ? `${styles.display}` : ""
                    }`}
                  >
                    <p className={styles.answer_text}>
                      4월6일부터 4월14일까지 벚꽃마켓 셀러님들의 신청을 받고
                      있습니다. 관심있으신 분들은 벚꽃마켓 페이지에서 신청서를
                      작성해주세요.
                    </p>
                  </div>
                </div>
                <span>
                  {clickedId === 3 ? (
                    <BsArrowUpCircleFill
                      size={26}
                      className={styles.button_up}
                    />
                  ) : (
                    <HiArrowSmallDown
                      size={20}
                      style={{ margin: "3px" }}
                      className={styles.button_down}
                    />
                  )}
                </span>
              </button>
            </li>
            <li>
              <button
                className={styles.notice_item}
                onClick={() => handleClickedId(4)}
              >
                <label style={{ fontWeight: 500 }}>04</label>
                <div className={styles.question}>
                  텐트 설치 불가
                  <div
                    className={`${styles.answer} ${
                      clickedId === 4 ? `${styles.display}` : ""
                    }`}
                  >
                    <p className={styles.answer_text}>
                      축제 기간 동안 공원안에서 텐트 설치를 금지하고 있습니다.
                      많은 양해 부탁드립니다.
                    </p>
                  </div>
                </div>
                <span>
                  {clickedId === 4 ? (
                    <BsArrowUpCircleFill
                      size={26}
                      className={styles.button_up}
                    />
                  ) : (
                    <HiArrowSmallDown
                      size={20}
                      style={{ margin: "3px" }}
                      className={styles.button_down}
                    />
                  )}
                </span>
              </button>
            </li>
            <li>
              <button
                className={styles.notice_item}
                onClick={() => handleClickedId(5)}
              >
                <label style={{ fontWeight: 500 }}>05</label>
                <div className={styles.question}>
                  주차장 안내
                  <div
                    className={`${styles.answer} ${
                      clickedId === 5 ? `${styles.display}` : ""
                    }`}
                  >
                    <p className={styles.answer_text}>
                      당일 티켓을 갖고 계시분들은 주차비가 무료입니다. 티켓을
                      갖고 있지 않으신 분들은 주차비가 유료입니다.
                    </p>
                  </div>
                </div>
                <span>
                  {clickedId === 5 ? (
                    <BsArrowUpCircleFill
                      size={26}
                      className={styles.button_up}
                    />
                  ) : (
                    <HiArrowSmallDown
                      size={20}
                      style={{ margin: "3px" }}
                      className={styles.button_down}
                    />
                  )}
                </span>
              </button>
            </li>
            <li>
              <button
                className={`${styles.notice_item} ${styles.last}`}
                onClick={() => handleClickedId(6)}
              >
                <label style={{ fontWeight: 500 }}>06</label>
                <div className={styles.question}>
                  추가 문의사항이 있으신 경우
                  <div
                    className={`${styles.answer} ${
                      clickedId === 6 ? `${styles.display}` : ""
                    }`}
                  >
                    <p className={styles.answer_text}>
                      추가 문의사항이 있으신 경우 example.naver.com으로
                      문의주시면 답변드리겠습니다.
                    </p>
                  </div>
                </div>
                <span>
                  {clickedId === 6 ? (
                    <BsArrowUpCircleFill
                      size={26}
                      className={styles.button_up}
                    />
                  ) : (
                    <HiArrowSmallDown
                      size={20}
                      style={{ margin: "3px" }}
                      className={styles.button_down}
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

export default Notice;
