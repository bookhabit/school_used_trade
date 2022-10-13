import React from "react";

import "../css/home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const goToSell = () => {
    navigate("/WritePost");
  };
  const goToBuy = () => {
    navigate("/PostList");
  };

  return (
    <>
      <div className="wrapper">
        <div className="introduce">
          <h2>소개글</h2>
        </div>
        <div className="sellBuyContainer">
          <div
            className="sell"
            onClick={goToSell}
            style={{ cursor: "pointer" }}
          >
            판매하기
          </div>
          <div className="buy" onClick={goToBuy} style={{ cursor: "pointer" }}>
            구매하기
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
