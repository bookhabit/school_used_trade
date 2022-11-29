import React from "react";
import "../css_UI/index.css";
import MainIntroduce from "../component/main/MainIntroduce";
import PostList from "../component/main/PostList";
import Pagination from "../component/main/Pagination";
import axios from "axios";
import { useEffect } from "react";

const Main = () => {
  // 로그인 상태관리 - 여기선 전역상태를 가져옴
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
