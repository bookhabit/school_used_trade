import React from "react";
import Footer from "../components/Footer";
import Header from "./../components/Header";
import "../css/home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Header />
      <div className="wrapper">
        <div className="introduce">
          <h2>소개글</h2>
        </div>
        <div className="sellBuyContainer">
          <div className="sell">
            <Link to="/WritePost">판매하기</Link>
          </div>
          <div className="buy">
            <Link to="PostList">구매하기</Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
