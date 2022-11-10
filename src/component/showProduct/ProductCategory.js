import React from "react";
import categoryHomeImg from "../../svg/productDetail/categoryHome.png";
import nextCategoryImg from "../../svg/productDetail/nextCategory.png";
import moreCategoryImg from "../../svg/productDetail/moreCategory.png";
const ProductCategory = () => {
  return (
    <div>
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
    </div>
  );
};

export default ProductCategory;
