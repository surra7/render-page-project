import React from "react";
import "./Info2.css";

const Info2 = () => {
  return (
    <div className="wrap-info2">
      <div className="info-container">
        <div className="content-container">
          <div className="title">공연 / 이벤트</div>
          <div className="content">
            설렘에 설렘을 더할 환호와 감동! <br />
            즐겁게 여러분들을 기다리고 있어요~ <br />
            현장에서 만나요~
          </div>
        </div>
        <div className="img-container">
          <img alt="info-img-1" src="images/info-1.png" className="img-info" />
          <img alt="info-img-2" src="images/info-2.png" className="img-info" />
          <img alt="info-img-3" src="images/info-3.png" className="img-info" />
          <img alt="info-img-4" src="images/info-4.png" className="img-info" />
        </div>
      </div>
    </div>
  );
};

export default Info2;
