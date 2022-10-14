import React from "react";
import styled from "styled-components";

const StyleFooter = styled.footer`
  background-color: gray;
  min-height: 50px;
  color: blue;
`;

const Footer = () => {
  return (
    <StyleFooter>
      <footer className="footer">
        <div className="information">
          <ul>
            <li>대표</li>
            <li>주소</li>
            <li>전화번호</li>
            <li>문의</li>
          </ul>
        </div>
        <div className="snsLink">
          <ul>
            <li>페이스북</li>
            <li>카카오</li>
            <li>인스타그램</li>
          </ul>
        </div>
      </footer>
    </StyleFooter>
  );
};

export default Footer;
