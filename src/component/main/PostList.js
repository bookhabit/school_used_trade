import React from "react";
import listImg1 from "../../svg/list/listImg1.jpg";
import listImg2 from "../../svg/list/listImg2.png";
import listImg3 from "../../svg/list/listImg3.jpg";
import listImg4 from "../../svg/list/listImg4.png";
import listImg5 from "../../svg/list/listImg5.png";
import listImg6 from "../../svg/list/listImg6.png";
import listImg7 from "../../svg/list/listImg7.png";
import listImg8 from "../../svg/list/listImg8.png";
import listImg9 from "../../svg/list/listImg9.png";
import listImg10 from "../../svg/list/listImg10.png";
import { useNavigate } from "react-router";
import EachPost from "./EachPost";
import { useState, useEffect } from "react";
import axios from "axios";

const PostList = () => {
  const navigate = useNavigate();
  const goDetail = () => {
    navigate(`/detail/postID`);
  };
  const [posts, setPosts] = useState();
  const [loading, setLoading] = useState(true);

  // GET 요청으로 데이터 가져옴 GET api/posts/list
  const fetchData = async () => {
    await axios
      .get("api/posts/list")
      .then((res) => {
        console.log(res.data);
        // 상품리스트 최신순으로 보여주기
        const reverse_post = res.data.reverse();
        setPosts(reverse_post);
      })
      .catch((e) => {
        console.log(e);
        // 데이터 가져오지 못했을 때 코드작성하기
      });
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // 데이터 가져올 때 오류처리해줌
  // 대기 중일 때 +  아직 posts 값이 설정되지 않았다면
  if (loading && !posts) {
    return (
      <div className="loading">
        <h2>로딩 중...</h2>
      </div>
    );
  }

  return (
    <div>
      <div className="postListContainer">
        <div className="postList">
          {/* post date(1시간전 시간)으로 각각포스트를 비교해서 최신순으로 상품리스트보여주기 
          // 날짜 postDate 시간단위로 바꾸기
          */}
          {posts.map((post) => (
            <EachPost
              key={post.id}
              title={post.title}
              body={post.body}
              postID={post.id}
              image={post.image.path}
              created_at={post.created_at}
            />
          ))}
          <div className="post" onClick={goDetail}>
            <div className="postTag">
              <div className="postImgContainer">
                <img src={listImg1} alt="상품이미지" />
              </div>
              <div className="postDesc">
                <div className="postTop">
                  <div className="postTitle">식빵 태블릿 파우치 11인치</div>
                </div>
                <div className="postBottom">
                  <div className="postPrice">"12,000원"</div>
                  <div className="postDate">
                    <span>1시간 전</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="post" onClick={goDetail}>
            <div className="postTag">
              <div className="postImgContainer">
                <img src={listImg2} alt="상품이미지" />
              </div>
              <div className="postDesc">
                <div className="postTop">
                  <div className="postTitle">아던샵 속눈썹펌 세트 (9회분)</div>
                </div>
                <div className="postBottom">
                  <div className="postPrice">"25,000원"</div>
                  <div className="postDate">
                    <span>3시간 전</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="post" onClick={goDetail}>
            <div className="postTag">
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
            </div>
          </div>
          <div className="post" onClick={goDetail}>
            <div className="postTag">
              <div className="postImgContainer">
                <img src={listImg4} alt="상품이미지" />
              </div>
              <div className="postDesc">
                <div className="postTop">
                  <div className="postTitle">스메그 오븐기,오븐렉,믹싱기</div>
                </div>
                <div className="postBottom">
                  <div className="postPrice">"1,100,000원"</div>
                  <div className="postDate">
                    <span>9시간 전</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="post" onClick={goDetail}>
            <div className="postTag">
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
            </div>
          </div>
          <div className="post" onClick={goDetail}>
            <div className="postTag">
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
            </div>
          </div>
          <div className="post" onClick={goDetail}>
            <div className="postTag">
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
            </div>
          </div>
          <div className="post" onClick={goDetail}>
            <div className="postTag">
              <div className="postImgContainer">
                <img src={listImg8} alt="상품이미지" />
              </div>
              <div className="postDesc">
                <div className="postTop">
                  <div className="postTitle">cos 미니얼 워크에어 재킷</div>
                </div>
                <div className="postBottom">
                  <div className="postPrice">"120,000원"</div>
                  <div className="postDate">
                    <span>15시간 전</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="post" onClick={goDetail}>
            <div className="postTag">
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
            </div>
          </div>
          <div className="post" onClick={goDetail}>
            <div className="postTag">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostList;
