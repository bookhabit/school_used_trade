import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const StyleFooter = styled.footer`
  footer {
    box-sizing: border-box;
    background-color: #e8eaf6;
    min-height: 30px;
    width: 100vw;
    color: #62757f;
    display: flex;
    padding: 10px;
    justify-content: center;
    align-items: center;
  }

  .information {
    flex-grow: 1;
  }

  .snsLink {
    display: flex;
    font-size: 2em;
    padding: 20px;
  }
`;

const Footer = () => {
  return (
    <StyleFooter>
      <footer className="footer">
        <div className="information">
          <ul>
            <li>대표 : 이현진, 이성범</li>
            <li>주소 : 경기도 시흥시 서희스타힐스</li>
            <li>전화번호 : 010-7607-9182</li>
            <li> 문의 </li>
          </ul>
        </div>
        <div className="snsLink">
          <ul>
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faInstagram} />
          </ul>
        </div>
      </footer>
    </StyleFooter>
  );
};

export default Footer;
