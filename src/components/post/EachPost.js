import React from "react";
import { useNavigate } from "react-router-dom";

const EachPost = ({ title, body, postID, image }) => {
  console.log(image);
  const imagePath = "http://" + image;
  const navigate = useNavigate();
  const goDetail = () => {
    navigate(`/detail/${postID}`);
  };
  console.log("EachPost title : ", title);
  console.log("EachPost body : ", body);

  return (
    <div className="postItemContainer" onClick={goDetail}>
      <div className="postItem">
        <p style={{ cursor: "pointer", border: "1px solid black" }}>{title}</p>

        <img src={imagePath} alt="이미지" width="24px" height="24px" />
        <p>{body}</p>
      </div>
    </div>
  );
};

export default EachPost;
