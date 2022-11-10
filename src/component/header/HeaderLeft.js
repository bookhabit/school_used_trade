import React from "react";
import logoImg from "../../svg/header/logo.svg";

const HeaderLeft = () => {
  return (
    <div className="headerLeft">
      <a href="/">
        <img src={logoImg} alt="로고이미지" />
      </a>
    </div>
  );
};

export default HeaderLeft;
