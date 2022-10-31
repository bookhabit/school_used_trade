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
  const handleClickFileInput = () => {
    fileInputRef.current?.click();
  };

  // 이미지 업로드 기능
  const onChangeImg = (e) => {
    const fileList = e.target.files; // 배열형태
    console.log(e.target.files[0]);
    if (fileList && fileList[0]) {
      const url = URL.createObjectURL(fileList[0]);

      setImg({
        file: fileList[0],
        thumbnail: url,
        type: fileList[0].type.slice(0, 5),
      });
    }
  };
  // 업로드된 이미지 파일 미리보기
  const showImage = useMemo(() => {
    if (!img && img == null) {
      return <h3>선택된 이미지 없음</h3>;
    }
    return (
      <img src={img.thumbnail} alt={img.type} onClick={handleClickFileInput} />
    );
  }, [img]);
  console.log(img);

  const actionImgCompress = async (fileSrc) => {
    console.log("압축 시작");

    const options = {
      maxSizeMB: 0.2,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
    };
    try {
      // 압축 결과
      const compressedFile = await imageCompression(fileSrc, options);

      // FileReader 는 File 혹은 Blob 객체를 이용하여, 파일의 내용을 읽을 수 있게 해주는 Web API
      const reader = new FileReader();
      reader.readAsDataURL(compressedFile);
      reader.onloadend = () => {
        // 변환 완료!
        const base64data = reader.result;
        handlingDataForm(base64data);
      };
    } catch (error) {
      console.log(error);
    }
  };

  // formdata만들기
  const handlingDataForm = async (dataURI) => {
    // dataURL 값이 data:image/jpeg:base64,~~~~~~~ 이므로 ','를 기점으로 잘라서 ~~~~~인 부분만 다시 인코딩
    const byteString = atob(dataURI.split(",")[1]);

    // Blob를 구성하기 위한 준비, 이 내용은 저도 잘 이해가 안가서 기술하지 않았습니다.
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    const blob = new Blob([ia], {
      type: "image/jpeg",
    });
    const file = new File([blob], "image.jpg");

    // 위 과정을 통해 만든 image폼을 FormData에 넣어줍니다.
    // 서버에서는 이미지를 받을 때, FormData가 아니면 받지 않도록 세팅해야합니다.
    const formData = new FormData();
    formData.append("representative_avatar", file);

    // 필요시 더 추가합니다.
    formData.append("name", "nkh");
    formData.append("email", "noh5524@gmail.com");

    // try {
    //   const changeAvatar = await axis.auth.changeUserAccount(formData);
    //   alert(changeAvatar.status);
    // } catch (error) {
    //   alert(error.response.data.errors);
    // }
  };

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
    // };

    // 이미지 압축함수
    actionImgCompress(img);

    const formData = new FormData();
    formData.append("title", title);
    formData.append("body", body);
    formData.append("img", img);

    //formdata 데이터들 출력
    for (let value of formData.values()) {
      console.log(value);
    }
    // request의 header부분에 아래와 같이 타입을 설정해줍니다.
    const headers = {
      "Content-Type": "multipart/form-data",
    };
    // axios로 post호출하면서 데이터 전송하기   POST api/post/write
    axios({
      method: "post",
      url: "http://localhost:4000/api/post/write",
      data: formData,
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
            {/* <input
              type="file"
              id="image"
              accept="image/*"
              multiple
              className="imgFile"
              onChange={onChangeImg}
            /> */}
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
