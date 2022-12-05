import React from "react";
import { useState } from "react";
import { useRecoilValue } from 'recoil';
import { useEffect } from "react";

const ProductInfo = ({ postUserId,body, onRemove, onUpdate }) => {
  const [isUserPost,setIsUserPost] = useState(false)
  const isLoggedIn = useRecoilValue
  
  // 유저의 id를 가져오고 비교해서 id가 일치하면 화면에 보여주기
  useEffect(()=>{
    if(isLoggedIn){
      const user = JSON.parse(localStorage.getItem('user'))
      // 수정하기삭제하기 UI 보여주기 (작성자만)
        if (parseInt(postUserId) === user.id){ // 타입일치시키기
          console.log('userid 일치')
          setIsUserPost(true)
        }else{
          console.log('userid 불일치')
        }
    }
  },[])

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
