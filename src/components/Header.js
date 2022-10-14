import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import imgToss from "../img/tossImg.png";
import { useNavigate } from "react-router-dom";

const StyleHeader = styled.header`
  /* 최상위 부모 */
  header {
    background-color: beige;
    min-height: 10vh;
    padding: 10px;
  }
  /* 부모요소-컨테이너 */
  .nav_bar {
    display: flex;
    padding: 10px;
    justify-content: center;
    align-items: center;
  }
  /* 자식요소 */
  .logo {
    flex-grow: 1;
  }

  .search {
    display: flex;
    flex-grow: 2;
  }

  .searchInput {
    font-size: 2em;
    width: 80%;
    border: none;
    border-radius: 20px;
  }
  .searchInput:focus {
    color: black;
  }

  .searchInput::placeholder {
    color: rgb(222, 200, 110);
    font-size: 1em;
    padding: 10px;
  }

  .searchBtn {
    cursor: pointer;
    border: none;
    background-color: none;
    font-size: 2em;
    color: rgb(222, 200, 110);
  }

  .sign_in {
    flex-grow: 1;
  }

  .category {
    cursor: pointer;
    font-size: 2em;
    padding-right: 5px;
  }

  .sign_in > ul {
    list-style: none;
    display: flex;
    justify-content: space-evenly;
  }

  .sign_in > ul > li {
    cursor: pointer;
  }

  #tossImg {
    width: 60px;
    height: 60px;
  }

  /* 모바일 버전 반응형 웹 */
  @media screen and (max-width: 768px) {
    /* 부모요소-컨테이너 */
    .nav_bar {
      font-size: 0.8em;
    }
    /* 자식요소 */
    .logo {
      flex-grow: 1;
    }
    .search {
      margin-left: 20px;
    }
    .sign_in {
      display: none;
    }
  }
`;

const Header = () => {
  const navigate = useNavigate();
  const goToSingUp = () => {
    navigate("/SignUp");
  };

  const goToLogin = () => {
    navigate("/Login");
  };
  return (
    <StyleHeader>
      <header>
        <nav className="nav_bar">
          <div className="logo">
            <Link to="/">
              <img src={imgToss} id="tossImg" alt="tossLogo" />
            </Link>
          </div>

          <div className="search">
            <input className="searchInput" placeholder="검색하세요"></input>
            <button className="searchBtn">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>

          <div className="sign_in">
            <ul>
              <li onClick={goToSingUp}>회원가입</li>
              <li onClick={goToLogin}>로그인</li>
            </ul>
          </div>

          <div className="category">
            <FontAwesomeIcon icon={faBars} />
          </div>
        </nav>
      </header>
    </StyleHeader>
  );
};

export default Header;
