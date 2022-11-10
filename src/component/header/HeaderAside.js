import React from "react";
import ChosenProduct from "./ChosenProduct";
import RecentProduct from "./RecentProduct";
import GotoTop from "./GotoTop";

const HeaderAside = () => {
  return (
    <div className="headerAsideContainer">
      <div className="headerAside">
        <ChosenProduct />
        <RecentProduct />
        <GotoTop />
      </div>
    </div>
  );
};

export default HeaderAside;
