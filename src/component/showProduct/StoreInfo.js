import React from "react";
import sellerProfileImg from "../../svg/productDetail/sellerProfileImg.jpg";
import followBtnImg from "../../svg/productDetail/followBtn.png";
import sellerBestProduct1 from "../../svg/productDetail/sellerBestProduct1.jpg";
import sellerBestProduct2 from "../../svg/productDetail/sellerBestProduct2.jpg";
const StoreInfo = () => {
  return (
    <div className="storeInfoContent">
      <div className="storeInfoContentWrapper">
        <div className="storeInfoTop">
          <div className="storeInfoTitle">상점정보</div>
          <div className="storeInfoBody">
            <div className="sellerProfile">
              <a href="{() => false}" className="sellerProfileImg">
                <img
                  src={sellerProfileImg}
                  alt="판매자 프로필 이미지"
                  style={{ width: "48px", height: "48px" }}
                />
              </a>
              <div className="sellerName">
                <a href="{() => false}">아이고금쪽아</a>
                <div className="stats">
                  <a href="{() => false}">상품 15</a>
                  <a href="{() => false}">팔로워0</a>
                </div>
              </div>
            </div>
            <button className="sellerFollow">
              <img
                src={followBtnImg}
                alt="팔로우 이미지"
                style={{ width: "20px", height: "14px" }}
              />
              <span>팔로우</span>
            </button>
            <div className="sellerBestProduct">
              <div className="sellerBestProductDetail">
                <a href="{() => false}">
                  <img src={sellerBestProduct1} alt="" />
                  <div className="sellerBestProductPrice">
                    <span>16,000</span>원
                  </div>
                </a>
              </div>
              <div className="sellerBestProductDetail">
                <a href="{() => false}">
                  <img src={sellerBestProduct2} alt="" />
                  <div className="sellerBestProductPrice">
                    <span>45,000</span>원
                  </div>
                </a>
              </div>
            </div>
            <div className="moreButtonWrapper">
              <a href="{() => false}">
                <span>13개</span>
                상품 더보기
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreInfo;
