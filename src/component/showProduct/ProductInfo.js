import React from "react";

const ProductInfo = () => {
  return (
    <div className="productInfoContent">
      <div className="productInfoWrapper">
        <div className="productInfo">
          <div className="productInfoTitle">상품정보</div>
          <div className="productInfoDesc">
            <div className="productDescContent">
              <p style={{ width: "663px" }}>
                구매하고 나서 실착 2번 정도? 📌색상- 블루 오염,하자 없음 모자가
                탄탄하지 않고 흐물거리는 재질.. 뭐 그런 거
              </p>
            </div>
            <div className="productTagDiv">
              <div className="productTag">상품태그</div>
              <div className="productTagValue">
                <a href="{() => false}">#MLB</a>
                <a href="{() => false}">#블루</a>
                <a href="{() => false}">#볼캡</a>
                <a href="{() => false}">#모자</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
