import React, { useEffect, useState } from "react";
import "../css/postList.css";
import axios from "axios";
import EachPost from "../components/post/EachPost";

const PostList = () => {
  const [posts, setPosts] = useState();
  const [loading, setLoading] = useState(true);

  // GET 요청으로 데이터 가져옴 GET api/posts/list
  const fetchData = async () => {
    await axios
      .get("api/posts/list")
      .then((res) => {
        console.log(res.data);
        setPosts(res.data);
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
  // 대기 중일 때
  if (loading) {
    return (
      <div className="loading">
        <h2>로딩 중...</h2>
      </div>
    );
  }
  // 아직 posts 값이 설정되지 않았다면
  if (!posts) {
    return null;
  }

  console.log("PostList posts : ", posts);
  // postItem으로 하나씩 map함수로 출력하기

  return (
    <>
      <div className="postListWrapper">
        <div className="postList">
          {posts.map((post) => (
            <EachPost
              key={post.id}
              title={post.title}
              body={post.body}
              postID={post.id}
              image={post.image.path}
            />
          ))}
        </div>
        <div className="pagination">1페이지</div>
      </div>
    </>
  );
};

export default PostList;
