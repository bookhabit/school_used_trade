import React, { useEffect, useState } from "react";
import "../css/showPost.css";
import axios from "axios";
import { useParams } from "react-router-dom";

const ShowPost = () => {
  const Params = useParams();
  const [post, setPost] = useState(null);
  const [postLoading, setPostLoading] = useState(true);

  useEffect(() => {
    // GET api/post/read?id= 상세조회
    axios
      .get(`/api/post/read?id=${Params.postID}`)
      .then((res) => {
        setPost(res.data);
        console.log(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
    setPostLoading(false);
  });
  // 데이터 가져올 때 undefined와 loading 으로 분기처리
  // 대기 중일 때
  if (postLoading) {
    return <h2>로딩 중...</h2>;
  }
  // 아직 posts 값이 설정되지 않았다면
  if (!post) {
    return null;
  }

  // PATCH /post/api/update?id=  수정
  const onUpdate = () => {};

  // DELETE /post/api/delete?id=  삭제
  const onRemove = () => {};

  return (
    <div className="showPost">
      <section className="postContainer">
        <div className="title">
          <p>{post.title}</p>
          <p>작성자</p>
        </div>
        <div className="body">
          <h2>{post.body}</h2>
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
