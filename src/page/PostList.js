import React from "react";
import "../css/postList.css";

const PostList = () => {
  // axios get으로 데이터 받아와서 화면에 렌더링하기
  // item 하나당 div로 만들어서 보여주기

  return (
    <>
      <div className="postList">
        <div className="item_search">검색</div>
        <div className="category">카테고리</div>
        <div className="item">물품</div>
        <div className="item">물품</div>
        <div className="item">물품</div>
        <div className="item">물품</div>
        <div className="item">물품</div>
        <div className="item">물품</div>
        <div className="item">물품</div>
        <div className="item">물품</div>
        <div className="item">물품</div>
        <div className="item">물품</div>
        <div className="item">물품</div>
        <div className="item">물품</div>
      </div>
    </>
  );
};

export default PostList;
