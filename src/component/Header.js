import React from "react";
import "../css_UI/index.css";
import HeaderMain from "./header/HeaderMain";
import HeaderAside from "./header/HeaderAside";

const Header = () => {
  return (
    <div className="headerContainer">
      <HeaderMain />
      <HeaderAside />
    </div>
  );
};

export default Header;
