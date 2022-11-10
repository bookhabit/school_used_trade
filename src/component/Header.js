import React from "react";
import logoImg from "../svg/header/logo.svg";
import searchImg from "../svg/header/search.svg";
import sellLogoImg from "../svg/header/sellLogo.png";
import categoryImg from "../svg/header/category.png";
import chosenIconImg from "../svg/header/chosenIcon.png";
import "../css_UI/index.css";

const Header = () => {
  return (
    <div className="headerContainer">
      <div className="headerMain">
        <div className="header">
          <div className="headerLeft">
            <a href="/">
              <img src={logoImg} alt="" />
            </a>
          </div>
          <div className="headerCenter">
            <div className="search">
              <input
                type="text"
                placeholder="상품명,학교명 입력"
                className="searchInput"
              />
              <a href="/">
                <img src={searchImg} alt="검색아이콘" className="searchSvg" />
              </a>
            </div>
            <div className="aboutSearchContainer">
              <div className="aboutSearch">
                <div className="aboutHeader">
                  <p className="recentSearch">최근검색어</p>
                  <p className="popularSearch">인기검색어</p>
                </div>
                <div className="aboutContent">
                  <p>최근검색어가 없습니다</p>
                </div>
              </div>
            </div>
          </div>
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
        </div>
      </div>

      <div className="headerAsideContainer">
        <div className="headerAside">
          <div className="chosenContainer">
            <p>찜한상품</p>
            <div className="chosenList">
              <img
                src={chosenIconImg}
                width="12px"
                height="12px"
                alt="찜 아이콘"
              />
              0
            </div>
          </div>
          <div className="recentContainer">
            <p>최근 본 상품</p>
            <div className="dotWrap">
              <div className="dot"></div>
            </div>
            <div className="recentList">
              <div>
                최근 본 상품이 <br />
                없습니다
              </div>
            </div>
            <p>1/1</p>
          </div>
          <div className="goToTop">
            <button>TOP</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
