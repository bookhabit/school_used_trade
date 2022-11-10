import React from "react";
import sellLogoImg from "../../svg/header/sellLogo.png";
import categoryImg from "../../svg/header/category.png";

const HeaderRight = () => {
  return (
    <div className="headerRight">
      <a href="/register.html" className="sellContainer">
        <img src={sellLogoImg} alt="판매하기" />
        판매하기
      </a>
      <div className="categoryContainer">
        <img src={categoryImg} alt="카테고리" className="categoryBtn" />
        <div className="categoryAbout">
          <div className="allCategory">전체 카테고리</div>
          <div className="bodyCategory">
            <p>남성의류</p>
            <p>여성의류</p>
            <p>전공수업</p>
            <p>교양수업</p>
            <p>가전물품</p>
            <p>운동물품</p>
            <p>청소물품</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderRight;
