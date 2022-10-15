import React from "react";
import { useNavigate } from "react-router-dom";

const EachPost = ({ title, body, postID }) => {
  const navigate = useNavigate();
  const goDetail = () => {
    navigate(`/detail/${postID}`);
  };

  return (
    <div className="postItemContainer" onClick={goDetail}>
      <div className="postItem">
        <p style={{ cursor: "pointer", border: "1px solid black" }}>{title}</p>
        <h2>이미지</h2>
        <p>{body}</p>
      </div>
    </div>
  );
};

export default EachPost;
