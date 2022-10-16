import React, { useCallback } from "react";
import "../css/writePost.css";
import { useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

const WritePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const navigate = useNavigate();
  const [images, setImg] = useState([]);

  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    if (name === "title") {
      setTitle(value);
    }
    if (name === "content") {
      setContent(value);
    }
  }, []);
  // 이미지 업로드
  const onLoadImage = (e) => {
    const img = e.target.files; // 배열형태
    console.log(img);
    setImg(img);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // const formData = new FormData();
    // formData.append("uploadImage", images[0]);
    // const config = {
    //   Headers: {
    //     "content-type": "multipart/form-data",
    //   },
    // };
    const data = {
      title: title,
      body: content,
    };
    console.log(data);

    // const blob = new Blob([JSON.stringify(data)], { type: "application/json" });
    // formData.append("data", blob);

    //    axios로 post호출하면서 데이터 전송하기   POST api/post/write
    axios({
      method: "post",
      url: "http://localhost:4000/api/post/write",
      data: data,
    })
      .then((response) => {
        console.log(response);
      })
      .catch((e) => {
        console.log(e);
      });

    // 작성이 되었다면 알려주기 (화면에 이쁘게) 일단 alert
    alert("게시글이 작성되었습니다.");

    navigate("/PostList");
  };

  return (
    <>
      <div className="writePostwrapper">
        <form className="writePost" onSubmit={onSubmit}>
          <p className="inputTop">등록할 상품</p>
          <div className="titleDiv">
            <input
              type="text"
              className="inputTitle"
              name="title"
              required
              placeholder="제목을 입력하세요"
              onChange={onChange}
              value={title || ""}
            />
          </div>

          <div className="contentDiv">
            <input
              type="textarea"
              rows="500"
              cols="500"
              required
              className="inputContent"
              name="content"
              placeholder="판매할 상품 설명"
              onChange={onChange}
              value={content || ""}
            />
          </div>

          <div className="fileDiv">
            <input
              type="file"
              id="image"
              accept="image/*"
              multiple
              className="imgFile"
              onChange={onLoadImage}
            />
          </div>
          <div className="categoryAndSubmit">
            <div className="selectCatecory">카테고리</div>
            <input type="submit" className="SubmitBtn" value="작성" />
          </div>
        </form>
      </div>
    </>
  );
};

export default WritePost;
