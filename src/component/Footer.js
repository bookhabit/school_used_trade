import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const StyleFooter = styled.footer`
  .footerContainer {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .footerContainer footer {
    box-sizing: border-box;
    background-color: rgb(230, 227, 227);
    min-height: 30px;
    width: 1024px;
    color: #62757f;
    padding: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .footerContainer li {
    list-style: none;
  }
  .information {
    flex-grow: 1;
  }

  .snsLink {
    display: flex;
    font-size: 2em;
    padding: 20px;
  }

  @media screen and (max-width: 1300px) {
    footer {
      padding-left: 0;
      padding-right: 0;
    }
  }
`;

const Footer = () => {
  return (
    <StyleFooter>
      <div className="footerContainer">
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
      </div>
    </StyleFooter>
  );
};

export default Footer;
