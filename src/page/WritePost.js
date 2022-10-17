import React, { useCallback, useRef } from "react";
import "../css/writePost.css";
import { useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

const WritePost = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const [img, setImg] = useState(null);
  const navigate = useNavigate();

  const onChangeInput = useCallback((e) => {
    const { name, value } = e.target;
    if (name === "title") {
      setTitle(value);
    }
    if (name === "body") {
      setBody(value);
    }
  }, []);
  // 이미지 업로드
  const onChangeImg = (e) => {
    const img = e.target.files[0]; // 배열형태

    setImg(img);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // const data = {
    //   title: title,
    //   body: body,
    // };

    const formData = new FormData();
    formData.append("title", title);
    formData.append("body", body);
    formData.append("img", img);

    for (let value of formData.values()) {
      console.log(value);
    }
    //    axios로 post호출하면서 데이터 전송하기   POST api/post/write
    axios({
      method: "post",
      url: "http://localhost:4000/api/post/write",
      data: formData,
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
              onChange={onChangeInput}
              value={title || ""}
            />
          </div>

          <div className="bodyDiv">
            <input
              type="textarea"
              rows="500"
              cols="500"
              required
              className="inputBody"
              name="body"
              placeholder="판매할 상품 설명"
              onChange={onChangeInput}
              value={body || ""}
            />
          </div>

          <div className="fileDiv">
            <input
              type="file"
              id="image"
              accept="image/*"
              multiple
              className="imgFile"
              onChange={onChangeImg}
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
