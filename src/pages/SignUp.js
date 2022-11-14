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

  // 회원가입 기능
  const register = (e) => {
    // Request API.
    e.preventDefault();
    axios
      .post("http://localhost:4000/api/callback/auth/kakao", {
        email: email,
        username: Username,
        password: pwd,
      })
      .then((response) => {
        // Handle success.
        console.log("Well done!");
        console.log("User email", response.data.email);
        console.log("User username", response.data.username);
        console.log("User pwd", response.data.pwd);
        localStorage.setItem("token", response.data.jwt);
        // navigate("/");
      })
      .catch((error) => {
        // Handle error.
        console.log("An error occurred:", error.response);
      });
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

  return (
    <div className="wrap">
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

          <button className="submit" onClick={register}>
            REGISTER
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
