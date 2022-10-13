import React, { useCallback } from "react";
import "../css/editorPost.css";
import { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const EditorPost = () => {
  const { state } = useLocation();
  console.log(state);
  const [title, setTitle] = useState(state.title);
  const [content, setContent] = useState(state.body);

  const navigate = useNavigate();

  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    if (name === "title") {
      setTitle(value);
    }
    if (name === "content") {
      setContent(value);
    }
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();

    const data = {
      title: title,
      body: content,
    };
    console.log(data);

    // UPDATE 수정하기 PATCH api/post/update?id=
    // axios.put(url, data 객체)
    axios
      .patch(`api/post/update?id=${state.id}`, data)
      .then((response) => {
        console.log(response);
        alert("게시글이 수정되었습니다.");
        navigate("/detail/:postID");
      })
      .catch((e) => {
        console.log(e);
      });

    // 수정이 되었다면 알려주기 (화면에 이쁘게) 일단 alert
  };

  return (
    <>
      <div className="wrapper">
        <form className="editorPost" onSubmit={onSubmit}>
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
            />
          </label>
          <input type="submit" value="수정" />
        </form>
      </div>
    </>
  );
};

export default EditorPost;
