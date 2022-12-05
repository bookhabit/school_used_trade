import React from "react";
import "../css_UI/index.css";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { LoginState } from "../states/login/LoginState";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { useRecoilState, useResetRecoilState } from 'recoil';
import axios from "axios";
import { useCallback } from "react";
import { TopContainer } from "./styled/AppStyle";
import { TopDiv } from "./styled/AppStyle";
import { LoggedInTopDiv } from "./styled/AppStyle";
import { useRecoilValue } from 'recoil';


const Top = () => {
  const navigate = useNavigate();
  const [userName,setUserName] = useState('')
  // 로그인 상태관리 - 여기선 전역상태를 가져옴
  const isLoggedIn = useRecoilValue(LoginState)
  const defaultLoginState = useResetRecoilState(LoginState)

  const getUserName = async()=>{
    const userState = localStorage.getItem('user')
    // 스토리지에 user정보가 없으면 멈춤
    if(!userState) return; 
    // 정보를 잘 가져왔다면 유저네임 state변경
    return JSON.parse(userState)
  }

  // 닉네임 가져오기 
  useEffect(()=>{
      if(isLoggedIn){
        getUserName()
          .then((userState)=> {setUserName(userState.nickname)});
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
    defaultLoginState(); // 로그인상태 변경
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
