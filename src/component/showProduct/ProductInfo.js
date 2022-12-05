import React from "react";
import { useState } from "react";
import { useRecoilValue } from 'recoil';

const ProductInfo = ({ postUserId,body, onRemove, onUpdate }) => {
  const [isUserPost,setIsUserPost] = useState(false)
  // 유저의 id를 가져오고 비교해서 id가 일치하면 화면에 보여주기
  const isLoggedIn = useRecoilValue


  if(isLoggedIn){
    const user = localStorage.getItem('user')
    console.log(user.id)
    console.log(postUserId)
    // 수정하기삭제하기 UI 보여주기 (작성자만)
      if (postUserId === JSON.parse(user.id)){
        setIsUserPost(true)
      }
  }

  return (
    <div className="productInfoContent">
      <div className="productInfoWrapper">
        <div className="productInfo">
          <div className="productInfoTitle">상품정보</div>
          <div className="productInfoDesc">
            <div className="productDescContent">
              <p>{body}</p>
            </div>
            <div className="productTagDiv">
              <div className="productTag">상품태그</div>
              <div className="productTagValue">
                <a href="{() => false}">#MLB</a>
                <a href="{() => false}">#블루</a>
                <a href="{() => false}">#볼캡</a>
                <a href="{() => false}">#모자</a>
              </div>
            </div>
            <div className="updateAndDelete">
            <button onClick={onUpdate}>수정하기</button>
            <button onClick={onRemove}>삭제하기</button>
              {isUserPost
              ?<div><button onClick={onUpdate}>수정하기</button>
              <button onClick={onRemove}>삭제하기</button></div> :null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
