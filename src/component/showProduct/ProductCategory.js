import React from "react";
import categoryHomeImg from "../../svg/productDetail/categoryHome.png";
import nextCategoryImg from "../../svg/productDetail/nextCategory.png";
import moreCategoryImg from "../../svg/productDetail/moreCategory.png";
import { useRef } from "react";

const ProductCategory = () => {
  const categoryShow1 = useRef();
  const categoryShow2 = useRef();
  const categoryShow3 = useRef();
  return (
    <div>
      <div className="productCategoryContainer">
        <div className="productCategoryNav">
          <div className="productCategoryHome">
            <img src={categoryHomeImg} alt="" />홈
          </div>
          <div className="productCategoryGroup">
            <img src={nextCategoryImg} alt="다음 카테고리" />
            <div
              className="categorySelectorWrapper"
              onMouseOver={() => {
                categoryShow1.current.style.display = "block";
              }}
              onMouseLeave={() => {
                categoryShow1.current.style.display = "none";
              }}
            >
              <div className="categorySelectDiv">
                <div className="categorySelector">
                  패션 액세서리
                  <img src={moreCategoryImg} alt="카테고리 종류" />
                </div>
                <div className="categoryShow" ref={categoryShow1}>
                  <div className="categoryShowNo">여성의류</div>
                  <div className="categoryShowNo">남성의류</div>
                  <div className="categoryShowNo">신발</div>
                  <div className="categoryShowNo">가방</div>
                  <div className="categoryShowNo">시계/쥬얼리</div>
                  <div className="categoryShowCurrent">패션 액세서리</div>
                  <div className="categoryShowNo">디지털/가전</div>
                  <div className="categoryShowNo">스포츠/레저</div>
                  <div className="categoryShowNo">차량/오토바이</div>
                  <div className="categoryShowNo">스타굿즈</div>
                  <div className="categoryShowNo">키덜트</div>
                  <div className="categoryShowNo">예술/희귀/수집품</div>
                  <div className="categoryShowNo">음반/악기</div>
                  <div className="categoryShowNo">도서/티켓/문구</div>
                  <div className="categoryShowNo">뷰티/미용</div>
                  <div className="categoryShowNo">가구/인테리어</div>
                  <div className="categoryShowNo">생활/가공식품</div>
                  <div className="categoryShowNo">유아동/출산</div>
                  <div className="categoryShowNo">반려동물용품</div>
                  <div className="categoryShowNo">기타</div>
                  <div className="categoryShowNo">지역 서비스</div>
                  <div className="categoryShowNo">원룸/함께살아요</div>
                  <div className="categoryShowNo">번개나눔</div>
                  <div className="categoryShowNo">구인구직</div>
                  <div className="categoryShowNo">재능</div>
                  <div className="categoryShowNo">커뮤니티</div>
                </div>
              </div>
            </div>
          </div>
          <div className="productCategoryGroup">
            <img src={nextCategoryImg} alt="다음 카테고리" />
            <div
              className="categorySelectorWrapper"
              onMouseOver={() => {
                categoryShow2.current.style.display = "block";
              }}
              onMouseLeave={() => {
                categoryShow2.current.style.display = "none";
              }}
            >
              <div className="categorySelectDiv">
                <div className="categorySelector">
                  모자
                  <img src={moreCategoryImg} alt="카테고리 종류" />
                </div>
                <div className="categoryShow" ref={categoryShow2}>
                  <div className="categoryShowNo">지갑 </div>
                  <div className="categoryShowNo">벨트</div>
                  <div className="categoryShowCurrent">모자</div>
                  <div className="categoryShowNo">목도리/장갑</div>
                  <div className="categoryShowNo">스카프/넥타이</div>
                  <div className="categoryShowNo">안경/선글라스</div>
                  <div className="categoryShowNo">양말/스타킹</div>
                  <div className="categoryShowNo">우산/양산</div>
                  <div className="categoryShowNo">기타 액세서리</div>
                </div>
              </div>
            </div>
          </div>
          <div className="productCategoryGroup">
            <img src={nextCategoryImg} alt="다음 카테고리" />
            <div
              className="categorySelectorWrapper"
              onMouseOver={() => {
                categoryShow3.current.style.display = "block";
              }}
              onMouseLeave={() => {
                categoryShow3.current.style.display = "none";
              }}
            >
              <div className="categorySelectDiv">
                <div className="categorySelector">
                  볼캡
                  <img src={moreCategoryImg} alt="카테고리 종류" />
                </div>
                <div className="categoryShow" ref={categoryShow3}>
                  <div className="categoryShowCurrent">볼캡</div>
                  <div className="categoryShowNo">버킷</div>
                  <div className="categoryShowNo">스냅백</div>
                  <div className="categoryShowNo">비니</div>
                  <div className="categoryShowNo">기타(모자)</div>
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
