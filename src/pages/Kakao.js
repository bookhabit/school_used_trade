//Kakao.js
import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { LoginState } from "../states/login/LoginState";
import { useRecoilState } from 'recoil';
import { useSetRecoilState } from "recoil";


  // 로그인 +  백엔드 서버에 유저 정보 요청하기
  const getUserInfo = async (AUTHORIZE_CODE)=>{
    let response
    try {
      response = await axios.post("http://localhost:4000/api/auth/callback/kakao",
        {code:AUTHORIZE_CODE})
    } catch(e) {
      console.log(e);
    };
    console.log("유저정보가져오기:", response);
    // 로컬 스토리지에 token 저장
    await localStorage.setItem('token',response.data.token)
    // 로컬스토리지에 User데이터 저장
    await localStorage.setItem('user',JSON.stringify(response.data.user))    
  }

const Kakao = () => {
  const setIsLoggedIn = useSetRecoilState(LoginState)
  const navigate = useNavigate();
  // URL에서 인가 코드 가져오기
  let code = new URL(window.location.href);
  const KAKAO_CODE = code.searchParams.get("code");

  // 인가코드 백엔드에 넘기기
  const AUTHORIZE_CODE = KAKAO_CODE;

  // 카카오 로그인 수행 후 로그인상태변경과 메인화면 이동
  useEffect(()=>{
    getUserInfo(AUTHORIZE_CODE).then(setIsLoggedIn(true))
    navigate('/')
  },[])

  return (
    <div>
      <div>
        <p>잠시만 기다려 주세요! 로그인 중입니다.</p>
      </div>
    </div>
  );
};

export default Kakao;
