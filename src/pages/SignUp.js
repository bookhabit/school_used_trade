import React, { useState, useRef } from "react";
import "../css_UI/signUp.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGoogle,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import axios from "axios";
import { useNavigate } from "react-router";

import kakao_login from "../svg/login/kakao_login.png";

const REST_API_KEY = "	2faef4e8b02f900649949e238d244252";
const REDIRECT_URI = "http://localhost:3000/auth/callback/kakao";

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

const SignUp = () => {
  const navigate = useNavigate();

  // useRef로 사용하기
  const loginForm = useRef();
  const registerForm = useRef();
  const toggleBtn = useRef();

  // 로그인 회원가입 토글
  const loginPage = () => {
    loginForm.current.style.left = "50px";
    registerForm.current.style.left = "450px";
    toggleBtn.current.style.left = "0";
  };

  const registerPage = () => {
    loginForm.current.style.left = "-400px";
    registerForm.current.style.left = "50px";
    toggleBtn.current.style.left = "110";
  };

  // 회원가입
  const [registerInputs, setRegisterInputs] = useState({
    email: "",
    Username: "",
    pwd: "",
  });
  const { email, Username, pwd } = registerInputs;

  // 회원가입 onchange 이벤트
  const onChangeRegister = (e) => {
    const { name, value } = e.target;
    setRegisterInputs((inputs) => ({
      ...inputs,
      [name]: value,
    }));
  };

  // 로그인
  const [loginInputs, setLoginInputs] = useState({
    loginName: "",
    loginPwd: "",
  });
  const { loginName, loginPwd } = loginInputs;

  // 로그인 onchange 이벤트
  const onChangeLogin = (e) => {
    const { name, value } = e.target;
    setLoginInputs((inputs) => ({
      ...inputs,
      [name]: value,
    }));
  };

  // 카카오 로그인
  // 인가 코드 백엔드에 요청하기
  const getCode = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  return (
    <div className="wrap">
      <div className="kakao_login">
        <img
          src={kakao_login}
          alt="카카오로그인이미지"
          onClick={getCode}
          style={{ cursor: "pointer" }}
        />
      </div>
      <div className="form-wrap">
        <div className="button-wrap">
          <div id="btn" ref={toggleBtn}>
            <button type="button" className="togglebtn" onClick={loginPage}>
              LOGIN
            </button>
            <button type="button" className="togglebtn" onClick={registerPage}>
              REGISTER
            </button>
          </div>
        </div>

        <div className="social-icons">
          <FontAwesomeIcon className="facebook" icon={faFacebook} />
          <FontAwesomeIcon className="twitter" icon={faTwitter} />
          <FontAwesomeIcon className="goole" icon={faGoogle} />
        </div>

        {/* login 폼 */}
        <form id="login" action="" className="input-group" ref={loginForm}>
          <input
            type="text"
            className="input-field"
            placeholder="User name"
            required
            onChange={onChangeLogin}
            name="loginName"
          />
          <input
            type="password"
            className="input-field"
            placeholder="Enter Password"
            required
            onChange={onChangeLogin}
            name="loginPwd"
          />

          <button className="submit">Login</button>
        </form>

        {/* register 폼 */}
        <form
          id="register"
          action=""
          className="input-group"
          ref={registerForm}
        >
          <input
            type="text"
            className="input-field"
            placeholder="User name"
            required
            name="Username"
            onChange={onChangeRegister}
          />
          <input
            type="email"
            className="input-field"
            placeholder="Your Email"
            required
            onChange={onChangeRegister}
            name="email"
          />
          <input
            type="password"
            className="input-field"
            placeholder="Enter Password"
            required
            onChange={onChangeRegister}
            name="pwd"
          />
{/* onClick={register} */}
          <button className="submit">
            REGISTER
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
