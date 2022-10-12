import React, { useEffect, useState } from "react";
import "../css/postList.css";
import axios from "axios";

const PostList = () => {
  const [posts, setPosts] = useState();

  // GET 요청으로 데이터 가져옴
  const fetchData = () => {
    axios
      .get("/posts")
      .then((res) => {
        setPosts(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(posts);
  // postItem으로 하나씩 map함수로 출력하기

  return (
    <div className="postList">
      <div className="item_search">검색</div>
      <div className="category">카테고리</div>
      {posts.map((post) => (
        <li key={post.id}>
          <p>{post.title}</p>
          <p>{post.body}</p>
        </li>
      ))}
    </div>
  );
};

export default PostList;
