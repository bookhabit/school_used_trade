//Kakao.js
import React from "react";
import axios from "axios";
import { useEffect } from "react";
import qs from "qs";

const Kakao = (props) => {
  // URL에서 인가 코드 가져오기
  let code = new URL(window.location.href);
  const KAKAO_CODE = code.searchParams.get("code");
  console.log(KAKAO_CODE);

  // 인가코드와 함께 카카오 서버에 토큰 요청하기
  const REST_API_KEY = "	2faef4e8b02f900649949e238d244252";
  const REDIRECT_URI = "http://localhost:3000/auth/kakao/callback";
  const AUTHORIZE_CODE = KAKAO_CODE;
  const KAKAO_TOKEN_URL = "https://kauth.kakao.com/oauth/token";

  const getKakaoToken = async () => {
    return await axios({
      method: "POST",
      url: KAKAO_TOKEN_URL,
      headers: {
        "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
      },
      data: qs.stringify({
        grant_type: "authorization_code",
        client_id: REST_API_KEY,
        redirect_uri: REDIRECT_URI,
        code: AUTHORIZE_CODE,
      }),
    })
      .then((response) => {
        console.log(response);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  setTimeout(getKakaoToken, 2000);

  // 백엔드 서버에 유저 정보 요청하기
  // useEffect(() => {
  //     axios
  //     .post("/api/callback/auth/kakao")
  //     .then((response) => {
  //         console.log(response);
  //     })
  //     .catch((e) => {
  //         console.log(e);
  //     });
  // }, []);

  return (
    <div>
      <div>
        <p>잠시만 기다려 주세요! 로그인 중입니다.</p>
      </div>
    </div>
  );
};

export default Kakao;
