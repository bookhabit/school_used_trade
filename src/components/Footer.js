import React from "react";
import styled from "styled-components";

const StyleFooter = styled.footer`
  background-color: gray;
  min-height: 20px;
  color: blue;
`;

const Footer = () => {
  return (
    <div>
      <StyleFooter>Footer입니다.</StyleFooter>
    </div>
  );
};

export default Footer;
