import React from "react";
import "../css_UI/index.css";
import styled from "styled-components";
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
`;

const Top = () => {
  return (
    <TopContainer>
      <TopDiv>
        <button className="myStore">내 상점</button>
        <button className="login">로그인/회원가입</button>
      </TopDiv>
    </TopContainer>
  );
};

export default Top;
