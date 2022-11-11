import React from "react";

const ProductInfo = ({ body, onRemove, onUpdate }) => {
  console.log("info:", onRemove);
  console.log("info:", onUpdate);
  return (
    <div className="productInfoContent">
      <div className="productInfoWrapper">
        <div className="productInfo">
          <div className="productInfoTitle">상품정보</div>
          <div className="productInfoDesc">
            <div className="productDescContent">
              <p>{body}</p>
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
            <div className="updateAndDelete">
              <button onClick={onUpdate}>수정하기</button>
              <button onClick={onRemove}>삭제하기</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
