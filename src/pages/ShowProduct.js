import React from "react";
import "../css_UI/productDetail.css";
import categoryHomeImg from "../svg/productDetail/categoryHome.png";
import nextCategoryImg from "../svg/productDetail/nextCategory.png";
import moreCategoryImg from "../svg/productDetail/moreCategory.png";
import capImg from "../svg/productDetail/capImg.jpg";
import wishIconImg from "../svg/productDetail/wishIcon.svg";
import talkBtnImg from "../svg/productDetail/talkBtn.png";
import relatedProductImg from "../svg/productDetail/relatedProduct.jpg";
import relatedProduct2Img from "../svg/productDetail/relatedProduct2.jpg";
import sns_blogImg from "../svg/productDetail/sns_blog.png";
import sns_facebookImg from "../svg/productDetail/sns_facebook.png";
import sns_twitterImg from "../svg/productDetail/sns_twitter.png";
import sellerProfileImg from "../svg/productDetail/sellerProfileImg.jpg";
import followBtnImg from "../svg/productDetail/followBtn.png";
import sellerBestProduct1 from "../svg/productDetail/sellerBestProduct1.jpg";
import sellerBestProduct2 from "../svg/productDetail/sellerBestProduct2.jpg";
import url_img from "../svg/productDetail/url_img.png";

const ShowProduct = () => {
  return (
    <>
      <div className="mainProductContainer">
        <div className="mainProductDiv">
          <div className="mainProductWrapper">
            {/* 카테고리 컨테이너*/}
            <div className="productCategoryContainer">
              <div className="productCategoryNav">
                <div className="productCategoryHome">
                  <img src={categoryHomeImg} alt="" />홈
                </div>
                <div className="productCategoryGroup">
                  <img src={nextCategoryImg} alt="다음 카테고리" />
                  <div className="categorySelectorWrapper">
                    <div className="categorySelectDiv">
                      <div className="categorySelector">
                        패션 액세서리
                        <img src={moreCategoryImg} alt="카테고리 종류" />
                      </div>
                      <div className="categoryShow">
                        <a href="{() => false}" className="categoryShowNo">
                          여성의류
                        </a>
                        <a href="{() => false}" className="categoryShowNo">
                          남성의류
                        </a>
                        <a href="{() => false}" className="categoryShowNo">
                          신발
                        </a>
                        <a href="{() => false}" className="categoryShowNo">
                          가방
                        </a>
                        <a href="{() => false}" className="categoryShowNo">
                          시계/쥬얼리
                        </a>
                        <a href="{() => false}" className="categoryShowCurrent">
                          패션 액세서리
                        </a>
                        <a href="{() => false}" className="categoryShowNo">
                          디지털/가전
                        </a>
                        <a href="{() => false}" className="categoryShowNo">
                          스포츠/레저
                        </a>
                        <a href="{() => false}" className="categoryShowNo">
                          차량/오토바이
                        </a>
                        <a href="{() => false}" className="categoryShowNo">
                          스타굿즈
                        </a>
                        <a href="{() => false}" className="categoryShowNo">
                          키덜트
                        </a>
                        <a href="{() => false}" className="categoryShowNo">
                          예술/희귀/수집품
                        </a>
                        <a href="{() => false}" className="categoryShowNo">
                          음반/악기
                        </a>
                        <a href="{() => false}" className="categoryShowNo">
                          도서/티켓/문구
                        </a>
                        <a href="{() => false}" className="categoryShowNo">
                          뷰티/미용
                        </a>
                        <a href="{() => false}" className="categoryShowNo">
                          가구/인테리어
                        </a>
                        <a href="{() => false}" className="categoryShowNo">
                          생활/가공식품
                        </a>
                        <a href="{() => false}" className="categoryShowNo">
                          유아동/출산
                        </a>
                        <a href="{() => false}" className="categoryShowNo">
                          반려동물용품
                        </a>
                        <a href="{() => false}" className="categoryShowNo">
                          기타
                        </a>
                        <a href="{() => false}" className="categoryShowNo">
                          지역 서비스
                        </a>
                        <a href="{() => false}" className="categoryShowNo">
                          원룸/함께살아요
                        </a>
                        <a href="{() => false}" className="categoryShowNo">
                          번개나눔
                        </a>
                        <a href="{() => false}" className="categoryShowNo">
                          구인구직
                        </a>
                        <a href="{() => false}" className="categoryShowNo">
                          재능
                        </a>
                        <a href="{() => false}" className="categoryShowNo">
                          커뮤니티
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="productCategoryGroup">
                  <img src={nextCategoryImg} alt="다음 카테고리" />
                  <div className="categorySelectorWrapper">
                    <div className="categorySelectDiv">
                      <div className="categorySelector">
                        모자
                        <img src={moreCategoryImg} alt="카테고리 종류" />
                      </div>
                      <div className="categoryShow">
                        <a href="{() => false}" className="categoryShowNo">
                          지갑{" "}
                        </a>
                        <a href="{() => false}" className="categoryShowNo">
                          벨트
                        </a>
                        <a href="{() => false}" className="categoryShowCurrent">
                          모자
                        </a>
                        <a href="{() => false}" className="categoryShowNo">
                          목도리/장갑
                        </a>
                        <a href="{() => false}" className="categoryShowNo">
                          스카프/넥타이
                        </a>
                        <a href="{() => false}" className="categoryShowNo">
                          안경/선글라스
                        </a>
                        <a href="{() => false}" className="categoryShowNo">
                          양말/스타킹
                        </a>
                        <a href="{() => false}" className="categoryShowNo">
                          우산/양산
                        </a>
                        <a href="{() => false}" className="categoryShowNo">
                          기타 액세서리
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="productCategoryGroup">
                  <img src={nextCategoryImg} alt="다음 카테고리" />
                  <div className="categorySelectorWrapper">
                    <div className="categorySelectDiv">
                      <div className="categorySelector">
                        볼캡
                        <img src={moreCategoryImg} alt="카테고리 종류" />
                      </div>
                      <div className="categoryShow">
                        <a href="{() => false}" className="categoryShowCurrent">
                          볼캡
                        </a>
                        <a href="{() => false}" className="categoryShowNo">
                          버킷
                        </a>
                        <a href="{() => false}" className="categoryShowNo">
                          스냅백
                        </a>
                        <a href="{() => false}" className="categoryShowNo">
                          비니
                        </a>
                        <a href="{() => false}" className="categoryShowNo">
                          기타(모자)
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* 상품설명 */}
            <div className="showProductContainer">
              <div className="showProduct">
                <div className="productImgWrapper">
                  <div className="productImgDiv">
                    <div className="productImg">
                      <img src={capImg} alt="볼캡모자(상품이미지)" />
                    </div>
                    <div className="productMoreImgBtnDiv">
                      <button
                        className="productMoreImgBtnCurrent"
                        disabled
                      ></button>
                      <button className="productMoreImgBtn"></button>
                    </div>
                  </div>
                </div>
                <div className="productContentWrapper">
                  <div className="productContentDiv">
                    <div className="productContent">
                      <div className="titleAndPrice">
                        <div className="productTitle">MLB LA 볼캡 모자</div>
                        <div className="priceWrapper">
                          <div className="productPrice">
                            32,000
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
            {/* 연관상품  */}
            <div className="relatedProductContainer">
              <div className="relatedProduct">
                <div className="relatedProudctTop">연관상품</div>
                <div className="relatedProductContent">
                  <div className="relatedProductWrapper">
                    <a href="{() => false}">
                      <div className="relatedProductImg">
                        <img src={relatedProductImg} alt="연관상품" />
                      </div>
                      <div className="relatedProductTitle">
                        골프모자2개 새상품
                      </div>
                    </a>
                  </div>
                  <div className="relatedProductWrapper">
                    <a href="{() => false}">
                      <div className="relatedProductImg">
                        <img src={relatedProduct2Img} alt="연관상품" />
                      </div>
                      <div className="relatedProductTitle">타입서비스 볼캡</div>
                    </a>
                  </div>
                  <div className="relatedProductWrapper">
                    <a href="{() => false}">
                      <div className="relatedProductImg">
                        <img src={relatedProduct2Img} alt="연관상품" />
                      </div>
                      <div className="relatedProductTitle">타입서비스 볼캡</div>
                    </a>
                  </div>
                  <div className="relatedProductWrapper">
                    <a href="{() => false}">
                      <div className="relatedProductImg">
                        <img src={relatedProduct2Img} alt="연관상품" />
                      </div>
                      <div className="relatedProductTitle">타입서비스 볼캡</div>
                    </a>
                  </div>
                  <div className="relatedProductWrapper">
                    <a href="{() => false}">
                      <div className="relatedProductImg">
                        <img src={relatedProduct2Img} alt="연관상품" />
                      </div>
                      <div className="relatedProductTitle">타입서비스 볼캡</div>
                    </a>
                  </div>
                  <div className="relatedProductWrapper">
                    <a href="{() => false}">
                      <div className="relatedProductImg">
                        <img src={relatedProduct2Img} alt="연관상품" />
                      </div>
                      <div className="relatedProductTitle">타입서비스 볼캡</div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* 공유하기 sns  */}
            <div className="shareSNS">
              <button className="shareNaver">
                <img
                  src={sns_blogImg}
                  alt="블로그 이미지"
                  style={{ width: "22px", height: "18px" }}
                />
              </button>
              <button className="shareFacebook">
                <img
                  src={sns_facebookImg}
                  alt="페이스북 이미지"
                  style={{ width: "8px", height: "15px" }}
                />
              </button>
              <button className="shareTwitter">
                <img
                  src={sns_twitterImg}
                  alt="트위터 이미지"
                  style={{ width: "16px", height: "13px" }}
                />
              </button>
              <button className="shareURL">
                <img
                  src={url_img}
                  alt="url이미지"
                  style={{ width: "25px", height: "25px" }}
                />
              </button>
            </div>
            {/* 상품,상점정보  */}
            <div className="productBottom">
              <div className="productInfoContent">
                <div className="productInfoWrapper">
                  <div className="productInfo">
                    <div className="productInfoTitle">상품정보</div>
                    <div className="productInfoDesc">
                      <div className="productDescContent">
                        <p style={{ width: "663px" }}>
                          구매하고 나서 실착 2번 정도? 📌색상- 블루 오염,하자
                          없음 모자가 탄탄하지 않고 흐물거리는 재질.. 뭐 그런 거
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowProduct;
