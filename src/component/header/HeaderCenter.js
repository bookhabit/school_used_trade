import React from "react";
import searchImg from "../../svg/header/search.svg";
import { useRef } from "react";

const HeaderCenter = () => {
  const aboutSearchContainer = useRef();

  // 검색창 input창 focus이벤트 > 최근검색어 div보이기

  return (
    <div className="headerCenter">
      <div className="search">
        <input
          type="text"
          placeholder="상품명,학교명 입력"
          className="searchInput"
          onFocus={() => {
            aboutSearchContainer.current.style.display = "block";
          }}
          onBlur={() => {
            aboutSearchContainer.current.style.display = "none";
          }}
        />
        <a>
          <img src={searchImg} alt="검색아이콘" className="searchSvg" />
        </a>
      </div>
      <div className="aboutSearchContainer" ref={aboutSearchContainer}>
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
  );
};

export default HeaderCenter;
