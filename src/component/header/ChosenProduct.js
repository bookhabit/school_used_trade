import React from "react";
import chosenIconImg from "../../svg/header/chosenIcon.png";

const ChosenProduct = () => {
  return (
    <div className="chosenContainer">
      <p>찜한상품</p>
      <div className="chosenList">
        <img src={chosenIconImg} width="12px" height="12px" alt="찜 아이콘" />0
      </div>
    </div>
  );
};

export default ChosenProduct;
