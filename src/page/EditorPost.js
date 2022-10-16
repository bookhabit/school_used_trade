import React, { useCallback } from "react";
import "../css/editorPost.css";
import { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const EditorPost = () => {
  const { state } = useLocation();
  console.log(state);
  const [title, setTitle] = useState(state.title);
  const [body, setBody] = useState(state.body);

  const [images, setImg] = useState([]);

  const navigate = useNavigate();

  const onLoadImage = (e) => {
    const img = e.target.files; // 배열형태
    console.log(img);
    setImg(img);
  };

  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    if (name === "title") {
      setTitle(value);
    }
    if (name === "body") {
      setBody(value);
    }
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();

    const data = {
      title: title,
      body: body,
    };
    console.log("EditorPost title ", data.title);
    console.log("EditorPost body ", data.body);

    // UPDATE 수정하기 PATCH api/post/update?id=
    // axios.put(url, data 객체)
    axios
      .patch(`api/post/update?id=${state.id}`, data)
      .then((response) => {
        console.log(response);
        alert("게시글이 수정되었습니다.");
        navigate(`/detail/${state.id}`);
      })
      .catch((e) => {
        console.log(e);
      });

    // 수정이 되었다면 알려주기 (화면에 이쁘게) 일단 alert
  };

  return (
    <>
      <div className="writePostwrapper">
        <form className="writePost" onSubmit={onSubmit}>
          <p className="inputTop">수정할 상품</p>

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

          <div className="bodyDiv">
            <input
              type="textarea"
              rows="500"
              cols="500"
              required
              className="inputBody"
              name="body"
              placeholder="판매할 상품 설명"
              onChange={onChange}
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
              onChange={onLoadImage}
            />
          </div>

          <div className="categoryAndSubmit">
            <div className="selectCatecory">카테고리</div>
            <input type="submit" className="updateBtn" value="수정" />
          </div>
        </form>
      </div>
    </>
  );
};

export default EditorPost;
