import React from "react";
import capImg from "../../svg/productDetail/capImg.jpg";
import wishIconImg from "../../svg/productDetail/wishIcon.svg";
import talkBtnImg from "../../svg/productDetail/talkBtn.png";

const ProductDetail = ({ title, image,postPrice }) => {
  const imagePath = "http://" + image;
  return (
    <div className="showProductContainer">
      <div className="showProduct">
        <div className="productImgWrapper">
          <div className="productImgDiv">
            <div className="productImg">
              <img src={imagePath} alt="상품이미지" />
            </div>
            <div className="productMoreImgBtnDiv">
              <button className="productMoreImgBtnCurrent" disabled></button>
              <button className="productMoreImgBtn"></button>
            </div>
          </div>
        </div>
        <div className="productContentWrapper">
          <div className="productContentDiv">
            <div className="productContent">
              <div className="titleAndPrice">
                <div className="productTitle">{title}</div>
                <div className="priceWrapper">
                  <div className="productPrice">
                    {postPrice}
                    <span>원</span>
                  </div>
                </div>
                <div></div>
              </div>
              <div className="productDetails">
                <div className="detailInfoDiv">
                  <div className="detailInfo">
                    <div className="detailInfoName">상품상태</div>
                    <div className="detailInfoValue">중고</div>
                  </div>
                  <div className="detailInfo">
                    <div className="detailInfoName">교환여부</div>
                    <div className="detailInfoValue">교환불가능</div>
                  </div>
                  <div className="detailInfo">
                    <div className="detailInfoName">배송비</div>
                    <div className="detailInfoValue">배송비 별도</div>
                  </div>
                  <div className="detailInfo">
                    <div className="detailInfoName">거래지역</div>
                    <div className="detailInfoValue">전국</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="productBtns">
              <button className="wishBtn">
                <img
                  src={wishIconImg}
                  alt="찜 아이콘"
                  style={{ width: "16px", height: "16px" }}
                />
                <span>찜</span>
                <span>1</span>
              </button>
              <button className="talkBtn">
                <img
                  src={talkBtnImg}
                  alt="번개톡 아이콘"
                  style={{ width: "20px", height: "19px" }}
                />
                번개톡
              </button>
              <button className="buyBtn">바로구매</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
