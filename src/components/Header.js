import React from "react";
import styled from "styled-components";
const StyleHeader = styled.header`
  background-color: rgb(187, 213, 221);
  min-height: 10vh;
  color: blue;
`;

const Header = () => {
  return (
    <div>
      <StyleHeader>Header입니다.</StyleHeader>
    </div>
  );
};

export default Header;
