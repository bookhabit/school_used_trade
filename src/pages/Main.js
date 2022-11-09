import React from "react";
import "../css_UI/index.css";
import MainIntroduce from "../component/productList/MainIntroduce";
import ProductList from "../component/productList/ProductList";
import listImg1 from "../svg/list/listImg1.jpg";
import listImg2 from "../svg/list/listImg2.png";
import listImg3 from "../svg/list/listImg3.jpg";
import listImg4 from "../svg/list/listImg4.png";
import listImg5 from "../svg/list/listImg5.png";
import listImg6 from "../svg/list/listImg6.png";
import listImg7 from "../svg/list/listImg7.png";
import listImg8 from "../svg/list/listImg8.png";
import listImg9 from "../svg/list/listImg9.png";
import listImg10 from "../svg/list/listImg10.png";

const Main = () => {
  return (
    <>
      <div className="root">
        <div className="main">
          <MainIntroduce />
          <section className="mainListContainer">
            <h2>오늘의 상품 추천</h2>
            <div className="mainList">
              <div className="postListContainer">
                <div className="postList">
                  <div className="post">
                    <a className="postTag" href="productDetail.html">
                      <div className="postImgContainer">
                        <img src={listImg1} alt="상품이미지" />
                      </div>
                      <div className="postDesc">
                        <div className="postTop">
                          <div className="postTitle">
                            식빵 태블릿 파우치 11인치
                          </div>
                        </div>
                        <div className="postBottom">
                          <div className="postPrice">"12,000원"</div>
                          <div className="postDate">
                            <span>1시간 전</span>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="post">
                    <a className="postTag" href="productDetail.html">
                      <div className="postImgContainer">
                        <img src={listImg2} alt="상품이미지" />
                      </div>
                      <div className="postDesc">
                        <div className="postTop">
                          <div className="postTitle">
                            아던샵 속눈썹펌 세트 (9회분)
                          </div>
                        </div>
                        <div className="postBottom">
                          <div className="postPrice">"25,000원"</div>
                          <div className="postDate">
                            <span>3시간 전</span>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="post">
                    <a className="postTag" href="productDetail.html">
                      <div className="postImgContainer">
                        <img src={listImg3} alt="상품이미지" />
                      </div>
                      <div className="postDesc">
                        <div className="postTop">
                          <div className="postTitle">톰브라운 카드지갑</div>
                        </div>
                        <div className="postBottom">
                          <div className="postPrice">"90,000원"</div>
                          <div className="postDate">
                            <span>3시간 전</span>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="post">
                    <a className="postTag" href="productDetail.html">
                      <div className="postImgContainer">
                        <img src={listImg4} alt="상품이미지" />
                      </div>
                      <div className="postDesc">
                        <div className="postTop">
                          <div className="postTitle">
                            스메그 오븐기,오븐렉,믹싱기
                          </div>
                        </div>
                        <div className="postBottom">
                          <div className="postPrice">"1,100,000원"</div>
                          <div className="postDate">
                            <span>9시간 전</span>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="post">
                    <a className="postTag" href="productDetail.html">
                      <div className="postImgContainer">
                        <img src={listImg5} alt="상품이미지" />
                      </div>
                      <div className="postDesc">
                        <div className="postTop">
                          <div className="postTitle">
                            카본 50림 리어 훨셋 픽시 자전거
                          </div>
                        </div>
                        <div className="postBottom">
                          <div className="postPrice">"215,000원"</div>
                          <div className="postDate">
                            <span>12시간 전</span>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="post">
                    <a className="postTag" href="productDetail.html">
                      <div className="postImgContainer">
                        <img src={listImg6} alt="상품이미지" />
                      </div>
                      <div className="postDesc">
                        <div className="postTop">
                          <div className="postTitle">노스페이스 조끼패딩</div>
                        </div>
                        <div className="postBottom">
                          <div className="postPrice">"150,000원"</div>
                          <div className="postDate">
                            <span>12시간 전</span>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="post">
                    <a className="postTag" href="productDetail.html">
                      <div className="postImgContainer">
                        <img src={listImg7} alt="상품이미지" />
                      </div>
                      <div className="postDesc">
                        <div className="postTop">
                          <div className="postTitle">2020 맥북에어(인텔)</div>
                        </div>
                        <div className="postBottom">
                          <div className="postPrice">"600,000원"</div>
                          <div className="postDate">
                            <span>13시간 전</span>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="post">
                    <a className="postTag" href="productDetail.html">
                      <div className="postImgContainer">
                        <img src={listImg8} alt="상품이미지" />
                      </div>
                      <div className="postDesc">
                        <div className="postTop">
                          <div className="postTitle">
                            cos 미니얼 워크에어 재킷
                          </div>
                        </div>
                        <div className="postBottom">
                          <div className="postPrice">"120,000원"</div>
                          <div className="postDate">
                            <span>15시간 전</span>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="post">
                    <a className="postTag" href="productDetail.html">
                      <div className="postImgContainer">
                        <img src={listImg9} alt="상품이미지" />
                      </div>
                      <div className="postDesc">
                        <div className="postTop">
                          <div className="postTitle">카본 자전거</div>
                        </div>
                        <div className="postBottom">
                          <div className="postPrice">"200,000원"</div>
                          <div className="postDate">
                            <span>1일 전</span>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="post">
                    <a className="postTag" href="productDetail.html">
                      <div className="postImgContainer">
                        <img src={listImg10} alt="상품이미지" />
                      </div>
                      <div className="postDesc">
                        <div className="postTop">
                          <div className="postTitle">스투시 8볼 로우캡</div>
                        </div>
                        <div className="postBottom">
                          <div className="postPrice">"95,000원"</div>
                          <div className="postDate">
                            <span>2일 전</span>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="pagination">
              <button></button>
              <p>1</p>
              <p>2</p>
              <p>3</p>
              <p>4</p>
              <p>5</p>
              <button></button>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Main;
