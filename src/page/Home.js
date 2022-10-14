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
      <div className="homeWrapper">
        <section className="introduce">
          <h2>소개글</h2>
        </section>
        <main className="sellBuyContainer">
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
        </main>
      </div>
    </>
  );
};

export default Home;
