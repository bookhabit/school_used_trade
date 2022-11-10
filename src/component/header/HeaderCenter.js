import React from "react";
import searchImg from "../../svg/header/search.svg";

const HeaderCenter = () => {
  return (
    <div className="headerCenter">
      <div className="search">
        <input
          type="text"
          placeholder="상품명,학교명 입력"
          className="searchInput"
        />
        <a>
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
  );
};

export default HeaderCenter;
