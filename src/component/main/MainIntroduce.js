import React from "react";
import banner1Img from "../../svg/mainIntroduce/banner1.png";
import banner2Img from "../../svg/mainIntroduce/banner2.png";
import banner3Img from "../../svg/mainIntroduce/banner3.png";

const MainIntroduce = () => {
  return (
    <div className="mainIntroduceContainer">
      <div className="mainIntroduce">
        <div className="introduceList">
          <div className="slick-slide">
            <div className="banner">
              <img src={banner1Img} alt="배너1" />
            </div>
          </div>
          <div className="slick-slide">
            <div className="banner">
              <img src={banner2Img} alt="배너2" />
            </div>
          </div>
          <div className="slick-slide">
            <div className="banner">
              <img src={banner3Img} alt="배너3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainIntroduce;
