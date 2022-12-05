import React from 'react';
import "../../css_UI/index.css"
import { useNavigate } from 'react-router-dom';
import { TopDiv } from '../styled/AppStyle';
import { TopContainer } from '../styled/AppStyle';
import { LoggedInTopDiv } from '../styled/AppStyle';

const TopError = () => {
    const navigate = useNavigate();
      // 로그인하면 내 상점으로 이동
  const goMyStore = () => {
    navigate("/mystore");
  };
    return (
        <TopContainer>
            <TopDiv>
            <button className="myStore" onClick={goMyStore}>
            내 상점
          </button>
            <LoggedInTopDiv>
          <div className='loginName'>로그인을 하는 도중 오류가 발생했습니다</div> 
            </LoggedInTopDiv>
            </TopDiv>
        </TopContainer>
            
    );
};

export default TopError;