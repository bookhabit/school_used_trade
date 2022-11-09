import React from "react";
import "../css_UI/index.css";

const Top = () => {
  return (
    <div>
      <div className="topContainer">
        <div className="top">
          <button className="myStore">내 상점</button>
          <button className="login">로그인/회원가입</button>
        </div>
      </div>
    </div>
  );
};

export default Top;
