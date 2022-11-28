import React from "react";
import "../css_UI/index.css";
import MainIntroduce from "../component/main/MainIntroduce";
import PostList from "../component/main/PostList";
import Pagination from "../component/main/Pagination";
import axios from "axios";
import { useEffect } from "react";

const Main = () => {
  // 로그인 상태관리 - 여기선 전역상태를 가져옴

  // 유저 정보 가져옴
  // 백엔드 서버에 유저 정보 요청하기
  const accessToken = localStorage.getItem("access_token");
  // const getUserInfo = () => {
  //   axios
  //     .post("http://localhost:4000/api/auth/callback/kakao", {
  //       headers: { "access-token": accessToken },
  //     })
  //     .then((response) => {
  //       console.log("유저정보가져오기:", response);
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });
  // };
  // useEffect(() => {
  //   getUserInfo();
  // }, []);

  return (
    <>
      <div className="root">
        <div className="main">
          <MainIntroduce />
          <section className="mainListContainer">
            <h2>오늘의 상품 추천</h2>
            <div className="mainList">
              <PostList />
            </div>
            <Pagination />
          </section>
        </div>
      </div>
    </>
  );
};

export default Main;
