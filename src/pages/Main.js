import React from "react";
import "../css_UI/index.css";
import MainIntroduce from "../component/main/MainIntroduce";
import PostList from "../component/main/PostList";
import Pagination from "../component/main/Pagination";
import { useLocation } from "react-router";
import { useRecoilState } from 'recoil';
import { LoginState } from "../states/login/LoginState";
import { useSetRecoilState } from "recoil";

const Main = () => {
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
