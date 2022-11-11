import React from "react";

const EditorNav = () => {
  return (
    <div className="registerTop">
      <nav className="registerTopNav">
        <div className="registerProduct">
          <a href="/register.html">상품등록</a>
        </div>
        <div className="manageProduct">
          <a href="/register.html">상품관리</a>
        </div>
        <div className="details">
          <a href="/register.html">구매/판매 내역</a>
        </div>
      </nav>
    </div>
  );
};

export default EditorNav;
