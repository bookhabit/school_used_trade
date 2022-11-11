import React from "react";
import "../css_UI/index.css";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
  return (
    <TopContainer>
      <TopDiv>
        <Link>
          <button className="myStore">내 상점</button>
        </Link>
        <Link to="/login">
          <button className="login">로그인/회원가입</button>
        </Link>
      </TopDiv>
    </TopContainer>
  );
};

export default Top;
