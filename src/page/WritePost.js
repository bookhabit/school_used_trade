import React, { useCallback, useMemo, useRef } from "react";
import "../css/writePost.css";
import { useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import imageCompression from "browser-image-compression";

import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Input } from "reactstrap";

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

  // 파일 접근
  const fileInputRef = useRef();
  // const handleClickFileInput = () => {
  //   fileInputRef.current?.click();
  // };
  const formdata = new FormData();
  // 이미지 업로드 기능
  const onChangeImg = (e) => {
    const fileList = e.target.files; // 배열형태
    console.log(e.target.files[0]);
    formdata.append("image", e.target.files[0]); // 서버에 전송할 타입
    console.log(formdata);
    if (fileList && fileList[0]) {
      const url = URL.createObjectURL(fileList[0]);

      setImg({
        file: fileList[0],
        thumbnail: url,
        type: fileList[0].type.slice(0, 5),
      });
    }
  };
  // formdata에 데이터 넣기
  formdata.append("title", title);
  formdata.append("body", body);
  if (img) {
    formdata.append("image", img.file);
  }
  // console.log("img.file", img.file);

  // 업로드된 이미지 파일 미리보기
  const showImage = useMemo(() => {
    if (!img && img == null) {
      return <h3>선택된 이미지 없음</h3>;
    }
    return <img src={img.thumbnail} alt={img.type} />;
  }, [img]);
  // console.log(img);

  // 제출  - axios
  const onSubmit = (e) => {
    e.preventDefault();
    if (!title) {
      document.querySelector(".inputTitle").focus();
    }
    if (!body) {
      document.querySelector(".inputBody").focus();
    }

    // const data = {
    //   title: title,
    //   body: body,
    //   img: img,
    // };
    // formdata 출력하기
    let entries = formdata.entries();
    for (const pair of entries) {
      console.log("보낼 데이터 : ", pair[0] + ", " + pair[1]);
    }
    // request의 header부분에 아래와 같이 타입을 설정해줍니다.
    const headers = {
      "Content-Type": "multipart/form-data",
    };

    // axios로 post호출하면서 데이터 전송하기   POST api/post/write
    axios({
      method: "post",
      url: " http://localhost:4000/api/post/write",
      data: formdata,
      headers,
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
            <textarea
              required
              className="inputBody"
              name="body"
              placeholder="판매할 상품 설명"
              onChange={onChangeInput}
              value={body || ""}
            />
          </div>
          <div className="thumbnailImg">{showImage}</div>
          <div className="fileDiv">
            <Input
              id="exampleFile"
              name="file"
              type="file"
              accept="image/*"
              ref={fileInputRef}
              multiple
              className="imgFile"
              onChange={onChangeImg}
            />
          </div>

          <div className="categoryAndSubmit">
            <div className="selectCategory">카테고리</div>

            <Button color="secondary">
              <input
                type="submit"
                className="SubmitBtn"
                onClick={onSubmit}
                value="등록"
                onKeyDown={(e) => {
                  if (e.keyCode === 13) {
                    e.preventDefault();
                  }
                }}
              />
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default WritePost;
