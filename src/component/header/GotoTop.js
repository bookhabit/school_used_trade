import React from "react";

const GotoTop = () => {
  const scrollToTop = ()=>{
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
  }
  return (
    <div className="goToTop">
      <button onClick={scrollToTop}>TOP</button>
    </div>
  );
};

export default GotoTop;
