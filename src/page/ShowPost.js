import React, { useEffect, useState } from "react";
import "../css/showPost.css";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import EditorPost from "./EditorPost";
import shoesImg from "../img/shoes.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const ShowPost = () => {
  const Params = useParams();
  const [post, setPost] = useState(null);
  const [postLoading, setPostLoading] = useState(true);

  const navigate = useNavigate();

  const fetchData = async () => {
    // GET api/post/read?id= 상세조회
    await axios
      .get(`/api/post/read?id=${Params.postID}`)
      .then((res) => {
        console.log("ShowPost res.data : ", res.data);
        setPost(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
    setPostLoading(false);
  };

  // 이미지 path 지정
  const imagePath = "http://" + post.image.path;

  useEffect(() => {
    fetchData();
  }, []);

  // 데이터 가져올 때 undefined와 loading 으로 분기처리
  // 대기 중일 때
  if (postLoading) {
    return <h2>로딩 중...</h2>;
  }
  // 아직 posts 값이 설정되지 않았다면
  if (!post) {
    return null;
  }

  console.log("showPost title:", post.title);
  console.log("showPost body:", post.body);

  // PATCH /post/api/update?id=  수정 patch
  const onUpdate = () => {
    navigate("/EditorPost", {
      state: { id: post.id, title: post.title, body: post.body },
    });
  };

  // DELETE api/post/delete?id=  삭제 delete
  const onRemove = () => {
    alert("정말 삭제하시겠습니까?");
    axios
      .delete(`/api/post/delete?id=${Params.postID}`)
      .then((res) => {
        console.log(res.status); //200
        alert("삭제되었습니다.");
        navigate("/PostList");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="showPostWrapper">
      <section className="postContainer">
        <div className="titleBox">
          <div className="title">{post.title}</div>
          <div className="userName">
            작성자
            <FontAwesomeIcon icon={faUser} />
          </div>
        </div>
        <div className="bodyContainer">
          <img src={imagePath} alt="게시글 이미지" />
          <p className="detailBody">{post.body}</p>
        </div>

        <button onClick={onUpdate} className="updateBtn" id="updateBtn">
          수정하기
        </button>
        <button onClick={onRemove} className="removeBtn" id="removeBtn">
          삭제하기
        </button>

        <button className="steamedBtn">찜하기</button>

        <button className="chatBtn">채팅하기</button>
      </section>
    </div>
  );
};

export default ShowPost;
