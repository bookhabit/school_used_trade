import React, { useCallback } from "react";
import "../css/writePost.css";
import { useState } from "react";
import axios from "axios";
import Header from "../components/Header";

const WritePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
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

    setTitle("");
    setContent("");
  };

  return (
    <>
      <div className="wrapper">
        <form className="writePost" onSubmit={onSubmit}>
          <label>
            제목
            <input
              type="text"
              className="title"
              name="title"
              placeholder="제목을 입력하세요"
              onChange={onChange}
              value={title || ""}
            />
          </label>
          <label>
            내용
            <input
              type="textarea"
              className="content"
              name="content"
              placeholder="판매할 상품 설명"
              onChange={onChange}
              value={content || ""}
            />
          </label>
          <label>
            이미지
            <input
              type="file"
              id="image"
              accept="image/*"
              className="imgFile"
              onChange={onLoadImage}
            />
          </label>
          <input type="submit" value="작성" />
        </form>
      </div>
    </>
  );
};

export default WritePost;
