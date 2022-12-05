import React, { useState, useCallback } from "react";
import listImg1 from "../../svg/list/listImg1.jpg";
import { useRef, useMemo } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const EditorForm = () => {
  const { state } = useLocation();
  console.log(state);
  const navigate = useNavigate();

  // 상품등록 폼 ( 수정하기 전 기존 상태)
  // input상태 관리
  const [inputs, setInputs] = useState({
    title: state.title,
    body: state.body,
    price:state.price
  });
  const { title, body,price } = inputs;

  const onChangeInput = useCallback((e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setInputs((inputs) => ({
      ...inputs,
      [name]: value,
    }));
  }, []);

  // console.log(state.image.path);
  const imagePath = "http://" + state.image.path;
  const [img, setImg] = useState(null);
  // console.log(img);

  // formdata 생성
  const formdata = new FormData();
  // 이미지 업로드 기능
  const onChangeImg = (e) => {
    const fileList = e.target.files; // 배열형태
    // 상품이미지 폼에 보여줄 이미지 미리보기 위해 url생성
    if (fileList && fileList[0]) {
      const url = URL.createObjectURL(fileList[0]);

      setImg({
        file: fileList[0],
        thumbnail: url,
        type: fileList[0].type.slice(0, 5),
      });
    }
  };
  // 업로드된 이미지 파일 미리보기
  const showImage = useMemo(() => {
    if (!img && img == null) {
      return <h3>선택된 이미지 없음</h3>;
    }
    return <img src={img.thumbnail} alt={img.type} />;
  }, [img]);

  const onSubmit = (e) => {
    e.preventDefault();
    // formdata에 데이터 넣기
    formdata.append("title", title);
    formdata.append("body", body);
    formdata.append("price", price);
    console.log(price)
    // 이미지 변경을 안했으면 그대로 , 변경했으면 변경한 이미지파일
    if (img == null) {
      formdata.append("image", state.image.path);
    } else {
      formdata.append("image", img.file);
    }

    // formdata 출력하기
    let entries = formdata.entries();
    for (const pair of entries) {
      console.log("보낼 데이터 : ", pair[0] + ", " + pair[1]);
    }

    // request의 header부분에 아래와 같이 타입을 설정해줍니다.
    const headers = {
      "Content-Type": "multipart/form-data",
      Authorization: "Bearer " + localStorage.getItem('token')
    };

    // axios로 post호출하면서 데이터 전송하기   POST api/post/write
    axios({
      method: "patch",
      url: `http://localhost:4000/api/post/update?id=${state.id}`,
      data: formdata,
      headers,
    })
      .then((response) => {
        console.log(response);
      })
      .catch((e) => {
        alert("수정 오류");
        console.log(e);
      });

    // 작성이 되었다면 알려주기 (화면에 이쁘게) 일단 alert
    alert("게시글이 수정되었습니다.");
    navigate("/");
  };

  return (
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
                      name="file"
                      type="file"
                      accept="image/png,image/jpg,image/jpeg"
                      multiple
                      onChange={onChangeImg}
                    />
                  </li>
                  <li className="registeredProduct">
                    {/* 배열형태와 반복문,조건문으로 처리하기 */}
                    <img src={imagePath} alt="" />
                    {showImage}
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
                      name="title"
                      placeholder="상품 제목을 입력해주세요."
                      className="registerInputTitle"
                      onChange={onChangeInput}
                      value={title}
                    />
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
                <div className="selectedCategoryContainer">
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
                  placeholder="선호 거래 지역을 검색해주세요."
                  className="locationInput"
                  defaultValue="지역설정안함"
                />
              </div>
            </li>
            <li className="registerProductContainer">
              <div className="textContainerLitte">
                상태<span>*</span>
              </div>
              <div className="bodyContainer">
                <div className="productState">
                  <label htmlFor="중고상품" className="usedProduct">
                    <input
                      id="중고상품"
                      type="radio"
                      defaultValue="0"
                      defaultChecked=""
                    />
                    중고상품
                  </label>
                  <label htmlFor="새상품" className="newProduct">
                    <input id="새상품" type="radio" defaultValue="0" />
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
                  <label htmlFor="교환불가" className="exchange-impossible">
                    <input
                      id="교환불가"
                      type="radio"
                      defaultValue="0"
                      defaultChecked=""
                    />
                    교환불가
                  </label>
                  <label htmlFor="교환가능" className="exchange-possible">
                    <input id="교환가능" type="radio" defaultValue="0" />
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
                    name="price"
                    defaultValue={price}
                    onChange={onChangeInput}
                  />
                  원
                </div>
                <div className="includeShippingCostContainer">
                  <div className="includeShippingCostDiv">
                    <label
                      htmlFor="includeShippingCost"
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
                  name="body"
                  className="productDescription"
                  onChange={onChangeInput}
                  value={body}
                ></textarea>
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
                        defaultValue=""
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
                      - 태그는 검색의 부가정보로 사용 되지만, 검색 결과 노출을
                      보장하지는 않습니다.
                    </p>
                  </li>
                  <li>
                    <p>- 검색 광고는 태그정보를 기준으로 노출됩니다.</p>
                  </li>
                  <li>
                    <p>
                      - 상품과 직접 관련이 없는 다른 상품명, 브랜드, 스팸성
                      키워드 등을 입력하면 노출이 중단되거나 상품이 삭제될 수
                      있습니다.
                    </p>
                  </li>
                </ul>
              </div>
            </li>
            <li className="registerProductContainer">
              <div className="textContainerLitte">수량</div>
              <div className="bodyContainer">
                <div className="QuantityInputWrapper">
                  <input
                    type="text"
                    className="QuantityInput"
                    defaultValue="1"
                  />
                  개
                </div>
              </div>
            </li>
          </ul>
        </section>
      </main>
      <footer className="registerBtnContainer">
        <div className="registerBtnDiv">
          <button className="EditorBtn" onClick={onSubmit}></button>
        </div>
      </footer>
    </div>
  );
};

export default EditorForm;
