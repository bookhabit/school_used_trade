import React from "react";
import styled from "styled-components";
const StyleHeader = styled.header`
  background-color: gray;
`;

const Header = () => {
  return (
    <div>
      <StyleHeader>Header입니다.</StyleHeader>
    </div>
  );
};

export default Header;
