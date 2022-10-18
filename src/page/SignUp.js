import React, { useState, useRef } from "react";
import "../css/signUp.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGoogle,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const SignUp = () => {
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
            placeholder="User name or Email"
            required
          />
          <input
            type="password"
            className="input-field"
            placeholder="Enter Password"
            required
          />
          <input type="checkbox" className="checkbox" />
          <span>Remember Password</span>
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
            placeholder="User name or Email"
            required
          />
          <input
            type="email"
            className="input-field"
            placeholder="Your Email"
            required
          />
          <input
            type="password"
            className="input-field"
            placeholder="Enter Password"
            required
          />
          <input type="checkbox" className="checkbox" />
          <span>Terms and conditions</span>
          <button className="submit">REGISTER</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
