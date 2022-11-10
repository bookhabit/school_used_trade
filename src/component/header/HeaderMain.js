import React from "react";
import HeaderLeft from "./HeaderLeft";
import HeaderRight from "./HeaderRight";
import HeaderCenter from "./HeaderCenter";

const HeaderMain = () => {
  return (
    <div className="headerMain">
      <div className="header">
        <HeaderLeft />
        <HeaderCenter />
        <HeaderRight />
      </div>
    </div>
  );
};

export default HeaderMain;
