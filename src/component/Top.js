import React from "react";
import "../css_UI/index.css";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { LoginState } from "../states/LoginState";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { useRecoilState } from 'recoil';
import axios from "axios";


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
const LoggedInTopDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Top = () => {
  const navigate = useNavigate();
  // 로그인 상태관리 - 여기선 전역상태를 가져옴
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(LoginState);
  const [userName,setUserName] = useState('')

  // 닉네임 가져오기 
  useEffect(()=>{
    if(isLoggedIn===true){
      const userState = JSON.parse(localStorage.getItem('user'))
        console.log(userState)
        setUserName(userState.nickname)
    }else if (isLoggedIn===false){
      console.log('로그인 안한 상태')
    }

  },[isLoggedIn])


  // 로그아웃 기능구현 - 카카오톡 api logout 요청
  const logoutHandler = async () => {
  // 로그아웃 카카오api 구현
  // await axios({
  //   method: "post",
  //   url: "/api/auth/logout/kakao",
  //   headers: {
  //     Authorization: "Bearer " + localStorage.getItem('token')
  //   },
  // }).then((e)=>{
  //   console.log(e)
  // }).catch((e)=>{
  //   console.log(e)
  // })
    setIsLoggedIn(false); // 로그인상태 변경
    localStorage.removeItem("token"); // 유저토큰 삭제
    localStorage.removeItem("user"); // 유저토큰 삭제
    
    alert('로그아웃되었습니다.')
    navigate('/',)
  };


  // 로그인하면 내 상점으로 이동
  const goMyStore = () => {
    navigate("/mystore");
  };

  return (
    <TopContainer>
      <TopDiv>
          <button className="myStore" onClick={goMyStore}>
            내 상점
          </button>
        {isLoggedIn ?  (
          <LoggedInTopDiv>
            <div className="loginName">{userName}님</div>
          <button className="login" onClick={logoutHandler}>
            로그아웃
          </button>
          </LoggedInTopDiv>
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
