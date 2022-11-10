import React from "react";

const RecentProduct = () => {
  return (
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
  );
};

export default RecentProduct;
