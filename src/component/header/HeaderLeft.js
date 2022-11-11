import React from "react";
import logoImg from "../../svg/header/logo.svg";
import { Link } from "react-router-dom";

const HeaderLeft = () => {
  return (
    <div className="headerLeft">
      <Link to="/">
        <img src={logoImg} alt="로고이미지" />
      </Link>
    </div>
  );
};

export default HeaderLeft;
