import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

const StyleHeader = styled.header`
  /* 최상위 부모 */
  header {
    box-sizing: border-box;
    background-color: #b6ffff;
    min-height: 10vh;
    width: 100vw;
    padding: 10px;
    padding-left: 20%;
    padding-right: 20%;
  }
  /* 부모요소-컨테이너 */
  .nav_bar {
    display: flex;
    padding: 10px;
    justify-content: space-between;
    align-items: center;
  }

  /* 자식요소 */
  .category {
    cursor: pointer;
    font-size: 2em;
    padding-left: 10px;
  }

  /* logo */
  .logo {
    display: flex;
    align-items: center;
    font-size: 2em;
    padding-left: 20px;
    width: 30%;
  }

  .logo > .youtubeLogo {
    cursor: pointer;
    color: red;
    margin-right: 5px;
  }
  .logo > .title {
    display: flex;
    align-items: center;
    list-style: none;
  }

  /* search */
  .search {
    display: flex;
    width: 60%;
    max-width: 800px;
    border-radius: 30px;
    padding: 10px;
  }

  .searchInput {
    background-color: none;
    font-size: 2em;
    width: 100%;
    border: none;
  }

  .searchInput::placeholder {
    color: #b1bfca;
    font-size: 1em;
    padding: 10px;
  }

  .searchBtn {
    cursor: pointer;
    border: none;
    background-color: #e5ffff;

    font-size: 2em;
    color: rgb(222, 200, 110);
    padding: 10px;
  }

  /* sign_in */
  .sign_in {
    width: 20%;
  }

  .sign_in > ul {
    list-style: none;
    display: flex;
    justify-content: space-evenly;
  }

  .sign_in > ul > li {
    cursor: pointer;
  }

  /* 모바일 버전 반응형 웹 */
  @media screen and (max-width: 768px) {
    /* 부모요소-컨테이너 */

    .nav_bar {
      font-size: 0.8em;
    }
    /* 자식요소 */
    .logo {
      flex-grow: 0;
    }
    .search {
      flex-grow: 2;
      margin-left: 20px;
    }
    .sign_in {
      display: none;
    }
  }
  @media screen and (max-width: 1300px) {
    header {
      padding-left: 0;
      padding-right: 0;
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
  const goToHome = () => {
    navigate("/");
  };
  return (
    <StyleHeader>
      <header>
        <nav className="nav_bar">
          <div className="category">
            <FontAwesomeIcon icon={faBars} />
          </div>
          <div className="logo">
            <FontAwesomeIcon
              className="youtubeLogo"
              icon={faYoutube}
              onClick={goToHome}
            />
            <li className="title">Youtube</li>
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
        </nav>
      </header>
    </StyleHeader>
  );
};

export default Header;
