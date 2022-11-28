import React from "react";
import "../css_UI/index.css";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { LoginState } from "../states/LoginState";
import { useNavigate } from "react-router-dom";

const TopContainer = styled.div`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid rgb(238, 238, 238);
  height: 40px;
  background: rgb(255, 255, 255);
`;
const TopDiv = styled.div`
  width: 1024px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Top = () => {
  const navigate = useNavigate();
  // 로그인 상태관리 - 여기선 전역상태를 가져옴
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(LoginState);
  // 로그아웃 기능구현 - 카카오톡 api logout 요청
  const logoutHandler = () => {
    localStorage.removeItem("access_token");
    setIsLoggedIn(false);
    navigate("/");
  };

  // 로그인 안하면 alert메세지
  const notMyStore = () => {
    alert("로그인을 해야 합니다.");
  };
  // 로그인하면 내 상점으로 이동
  const goMyStore = () => {
    navigate("/mystore");
  };

  return (
    <TopContainer>
      <TopDiv>
        {isLoggedIn ? (
          <button className="myStore" onClick={goMyStore}>
            내 상점
          </button>
        ) : (
          <button className="myStore" onClick={notMyStore}>
            내 상점
          </button>
        )}

        {isLoggedIn ? (
          <button className="login" onClick={logoutHandler}>
            로그아웃
          </button>
        ) : (
          <Link to="/login">
            <button className="login">로그인/회원가입</button>
          </Link>
        )}
      </TopDiv>
    </TopContainer>
  );
};

export default Top;
