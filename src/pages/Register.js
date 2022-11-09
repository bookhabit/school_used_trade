import React from "react";
import "../css_UI/register.css";
import listImg1 from "../svg/list/listImg1.jpg";
const Register = () => {
  return (
    <>
      <div className="mainRegister">
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
        <div className="registerBody">
          <main>
            <section className="registerFormContainer">
              <h2>
                기본정보
                <span>*필수항목</span>
              </h2>
              <ul className="registerForm">
                <li className="registerProductContainer">
                  <div className="textContainer">
                    상품이미지
                    <span>*</span>
                    <small> (0/12) </small>
                  </div>
                  <div className="bodyContainer">
                    <ul className="registeredProductContainer">
                      <li className="registerProductFile">
                        이미지등록
                        <input
                          type="file"
                          accept="image/png,image/jpg,image/jpeg"
                        />
                      </li>
                      <li className="registeredProduct">
                        <img src={listImg1} alt="" />
                        <button className="removeRegisteredProduct"></button>
                      </li>
                    </ul>
                    <div className="imgGuide">
                      <b>*상품 이미지는 640 x 640에 최적화되어있습니다</b>
                      <br />
                      -상품이미지는 PC에서는 1:1, 모바일에서는 1:1.23 비율로
                      보여집니다.
                      <br />
                      -이미지는 상품 등록 시 정사각형으로 잘려서 등록됩니다.
                      <br />
                      -이미지를 클릭할 경우 원본 이미지를 확인할 수 있습니다.
                      <br />
                      -이미지를 클릭 후 이동하여 등록순서를 변경할 수 있습니다.
                    </div>
                  </div>
                </li>
                <li className="registerProductContainer">
                  <div className="textContainerMiddle">
                    제목<span>*</span>
                  </div>
                  <div className="bodyContainer">
                    <div className="titleWrapperDiv">
                      <div className="titleWrapper">
                        <input
                          type="text"
                          placeholder="상품 제목을 입력해주세요."
                          className="registerInputTitle"
                          value=""
                        />
                        <a
                          href="https://help.bunjang.co.kr/faq/2/220"
                          target="_blank"
                        >
                          거래금지 품목
                        </a>
                      </div>
                      <div className="inputLimit">0/40</div>
                    </div>
                  </div>
                </li>
                <li className="registerProductContainer">
                  <div className="textContainerBig">
                    카테고리<span>*</span>
                  </div>
                  <div className="categoryGroupContainer">
                    <div className="categoryGroup">
                      <div className="mainCategoryContainer">
                        <ul className="mainCategory">
                          <li className="categoryDetail">
                            <button type="button" className="categoryBtn">
                              여성의류
                            </button>
                          </li>
                          <li className="categoryDetail">
                            <button type="button" className="categoryBtn">
                              남성의류
                            </button>
                          </li>
                          <li className="categoryDetail">
                            <button type="button" className="categoryBtn">
                              신발
                            </button>
                          </li>
                          <li className="categoryDetail">
                            <button type="button" className="categoryBtn">
                              가방
                            </button>
                          </li>
                          <li className="categoryDetail">
                            <button type="button" className="categoryBtn">
                              시계/쥬얼리
                            </button>
                          </li>
                          <li className="categoryDetail">
                            <button type="button" className="categoryBtn">
                              패션 액세서리
                            </button>
                          </li>
                          <li className="categoryDetail">
                            <button type="button" className="categoryBtn">
                              디지털/가전
                            </button>
                          </li>
                          <li className="categoryDetail">
                            <button type="button" className="categoryBtn">
                              스포츠/레저
                            </button>
                          </li>
                          <li className="categoryDetail">
                            <button type="button" className="categoryBtn">
                              차량/오토바이
                            </button>
                          </li>
                          <li className="categoryDetail">
                            <button type="button" className="categoryBtn">
                              스타굿즈
                            </button>
                          </li>
                          <li className="categoryDetail">
                            <button type="button" className="categoryBtn">
                              키덜트
                            </button>
                          </li>
                          <li className="categoryDetail">
                            <button type="button" className="categoryBtn">
                              예술/희귀/수집품
                            </button>
                          </li>
                          <li className="categoryDetail">
                            <button type="button" className="categoryBtn">
                              음반/악기
                            </button>
                          </li>
                          <li className="categoryDetail">
                            <button type="button" className="categoryBtn">
                              도서/티켓/문구
                            </button>
                          </li>
                          <li className="categoryDetail">
                            <button type="button" className="categoryBtn">
                              뷰티/미용
                            </button>
                          </li>
                          <li className="categoryDetail">
                            <button type="button" className="categoryBtn">
                              가구/인테리어
                            </button>
                          </li>
                          <li className="categoryDetail">
                            <button type="button" className="categoryBtn">
                              생활/가공식품
                            </button>
                          </li>
                          <li className="categoryDetail">
                            <button type="button" className="categoryBtn">
                              유아동/출산
                            </button>
                          </li>
                          <li className="categoryDetail">
                            <button type="button" className="categoryBtn">
                              반려동물용품
                            </button>
                          </li>
                          <li className="categoryDetail">
                            <button type="button" className="categoryBtn">
                              기타
                            </button>
                          </li>
                          <li className="categoryDetail">
                            <button type="button" className="categoryBtn">
                              지역 서비스
                            </button>
                          </li>
                          <li className="categoryDetail">
                            <button type="button" className="categoryBtn">
                              원룸/함께살아요
                            </button>
                          </li>
                          <li className="categoryDetail">
                            <button type="button" className="categoryBtn">
                              번개나눔
                            </button>
                          </li>
                          <li className="categoryDetail">
                            <button type="button" className="categoryBtn">
                              구인구직
                            </button>
                          </li>
                          <li className="categoryDetail">
                            <button type="button" className="categoryBtn">
                              재능
                            </button>
                          </li>
                          <li className="categoryDetail">
                            <button type="button" className="categoryBtn">
                              커뮤니티
                            </button>
                          </li>
                        </ul>
                      </div>
                      <div className="middleCategory">중분류 선택</div>
                      <div className="subCategory">소분류 선택</div>
                    </div>
                    <div
                      className="selectedCategoryContainer"
                      style="
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        margin-top: 1.5em;
                      "
                    >
                      <h3 className="selectedCategory">
                        선택한 카테고리 : <b></b>
                      </h3>
                    </div>
                  </div>
                </li>
                <li className="registerProductContainer">
                  <div className="textContainerMiddle">
                    거래지역<span>*</span>
                  </div>
                  <div className="bodyContainer">
                    <div className="locationRegion">
                      <button type="button" className="locationBtn">
                        내 위치
                      </button>
                      <button type="button" className="locationBtn">
                        최근 지역
                      </button>
                      <button type="button" className="locationBtn">
                        주소 검색
                      </button>
                      <button type="button" className="locationBtn">
                        지역설정안함
                      </button>
                    </div>
                    <input
                      readonly=""
                      placeholder="선호 거래 지역을 검색해주세요."
                      className="locationInput"
                      value="지역설정안함"
                    />
                  </div>
                </li>
                <li className="registerProductContainer">
                  <div className="textContainerLitte">
                    상태<span>*</span>
                  </div>
                  <div className="bodyContainer">
                    <div className="productState">
                      <label for="중고상품" className="usedProduct">
                        <input
                          id="중고상품"
                          type="radio"
                          value="0"
                          checked=""
                        />
                        중고상품
                      </label>
                      <label for="새상품" className="newProduct">
                        <input id="새상품" type="radio" value="0" />
                        새상품
                      </label>
                    </div>
                  </div>
                </li>
                <li className="registerProductContainer">
                  <div className="textContainerLitte">
                    교환<span>*</span>
                  </div>
                  <div className="bodyContainer">
                    <div className="exchange">
                      <label for="교환불가" className="exchange-impossible">
                        <input
                          id="교환불가"
                          type="radio"
                          value="0"
                          checked=""
                        />
                        교환불가
                      </label>
                      <label for="교환가능" className="exchange-possible">
                        <input id="교환가능" type="radio" value="0" />
                        교환가능
                      </label>
                    </div>
                  </div>
                </li>
                <li className="registerProductContainer">
                  <div className="textContainerMiddle">
                    가격<span>*</span>
                  </div>
                  <div className="bodyContainer">
                    <div className="registerInputPriceDiv">
                      <input
                        type="text"
                        placeholder="숫자만 입력해주세요."
                        className="registerInputPrice"
                        value=""
                      />
                      원
                    </div>
                    <div className="includeShippingCostContainer">
                      <div className="includeShippingCostDiv">
                        <label
                          for="includeShippingCost"
                          className="includeShippingCost"
                        >
                          <input id="includeShippingCost" type="checkbox" />
                          배송비 포함
                        </label>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="registerProductContainer">
                  <div className="textContainerBottom">
                    설명<span>*</span>
                  </div>
                  <div className="bodyContainer">
                    <textarea
                      rows="6"
                      required
                      className="productDescription"
                    ></textarea>
                    <div className="DescriptionPlaceholder">
                      여러 장의 상품 사진과 구입 연도, 브랜드, 사용감, 하자 유무
                      등 구매자에게 필요한 정보를 꼭 포함해 주세요.
                      <br />
                      <span>
                        안전하고 건전한 거래 환경을 위해 과학기술정보통신부,
                        한국인터넷진흥원과 번개장터(주)가 함께 합니다.
                      </span>
                    </div>
                  </div>
                </li>
                <li className="registerProductContainer">
                  <div className="textContainerBottom">연관태그</div>
                  <div className="bodyContainer">
                    <div className="TagBoxstyle_Wrapper">
                      <div className="TagBoxstyle_TagInputWrapper">
                        <div className="TagBoxstyle_WithDeleteAll">
                          <input
                            type="text"
                            placeholder="연관태그를 입력해주세요. (최대 5개)"
                            value=""
                          />
                        </div>
                      </div>
                    </div>
                    <ul className="TagGuide">
                      <li>
                        <p>
                          - 태그는 띄어쓰기로 구분되며 최대 9자까지 입력할 수
                          있습니다.
                        </p>
                      </li>
                      <li>
                        <p>
                          - 태그는 검색의 부가정보로 사용 되지만, 검색 결과
                          노출을 보장하지는 않습니다.
                        </p>
                      </li>
                      <li>
                        <p>- 검색 광고는 태그정보를 기준으로 노출됩니다.</p>
                      </li>
                      <li>
                        <p>
                          - 상품과 직접 관련이 없는 다른 상품명, 브랜드, 스팸성
                          키워드 등을 입력하면 노출이 중단되거나 상품이 삭제될
                          수 있습니다.
                        </p>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="registerProductContainer">
                  <div className="textContainerLitte">수량</div>
                  <div className="bodyContainer">
                    <div className="QuantityInputWrapper">
                      <input type="text" className="QuantityInput" value="1" />
                      개
                    </div>
                  </div>
                </li>
              </ul>
            </section>
          </main>
          <footer className="registerBtnContainer">
            <div className="registerBtnDiv">
              <button className="registerBtn"></button>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Register;
