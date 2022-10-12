import React, { useEffect, useState } from "react";
import "../css/postList.css";
import axios from "axios";
import EachPost from "../components/post/EachPost";

const PostList = () => {
  const [posts, setPosts] = useState();
  const [loading, setLoading] = useState(false);
  // GET 요청으로 데이터 가져옴
  const fetchData = async () => {
    await axios
      .get("/posts")
      .then((res) => {
        setPosts(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // 대기 중일 때
  if (loading) {
    return <h2>대기 중...</h2>;
  }
  // 아직 posts 값이 설정되지 않았다면
  if (!posts) {
    return null;
  }

  console.log(posts);
  // postItem으로 하나씩 map함수로 출력하기

  return (
    <div className="postList">
      <div className="item_search">검색</div>
      <div className="category">카테고리</div>
      {/* 데이터를 가져오기 전에 시간차를 주어야함 > 비동기처리 */}
      {posts.map((post) => (
        <EachPost
          key={post.id}
          title={post.title}
          body={post.body}
          postID={post.id}
        />
      ))}
    </div>
  );
};

export default PostList;
