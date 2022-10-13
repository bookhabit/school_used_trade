import React from "react";
import "../css/showPost.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const ShowPost = () => {
  const Params = useParams();
  const postID = parseInt(Params.postID);
  console.log(typeof postID);

  useEffect(() => {
    // GET api/post/read?id= 상세조회
    axios
      .get(`/api/post/read?id=${postID}`)
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
  });

  // PATCH /post/api/update?id=  수정
  const onUpdate = () => {};

  // DELETE /post/api/delete?id=  삭제
  const onRemove = () => {};

  return (
    <div className="showPost">
      <section className="postContainer">
        <div className="title">
          <p>작성자</p>
        </div>
        <div className="body">
          <h2>내용</h2>
        </div>
        <div className="comment">
          <h2>댓글</h2>
        </div>
        <button>수정하기</button>
        <button>삭제하기</button>
      </section>
    </div>
  );
};

export default ShowPost;
