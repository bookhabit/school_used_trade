import React from "react";
import styled from "styled-components";
import blankProfile from "../svg/myStore/profile_blank_img.png";
import storeOpen from "../svg/myStore/storeOpen.png";
import storeVisit from "../svg/myStore/storeVisit.png";
import storeSell from "../svg/myStore/storeSell.png";
import storeDelive from "../svg/myStore/storeDelive.png";
import { Link } from "react-router-dom";

const StoreContainer = styled.div`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  background: rgb(255, 255, 255);
`;

const StoreDiv = styled.div`
  width: 1024px;
  margin-top: 30px;
`;
const StoreTopContainer = styled.div`
  margin-bottom: 30px;
`;

const StoreTop = styled.div`
  display: flex;
  width: 100%;
`;

const ProfileImg = styled.div`
  flex-shrink: 0;
`;
const ProfileImgBox = styled.div`
  width: 310px;
  height: 310px;
  position: relative;
  color: rgb(255, 255, 255);
`;

const ProfileImageWrap = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const ProfileImage = styled.div`
  position: absolute;
  background-size: cover;
  background-repeat: no-repeat;
  z-index: 0;
  width: 100%;
  height: 100%;
  background-image: url(${blankProfile});
  background-color: rgb(181, 181, 181);
`;

const StoreIntro = styled.div`
  flex: 1 0 0%;
  padding: 0px 30px;
  border-top: 1px solid rgb(238, 238, 238);
  border-right: 1px solid rgb(238, 238, 238);
  border-bottom: 1px solid rgb(238, 238, 238);
  display: flex;
  height: 310px;
  flex-direction: column;
`;
const StoreInfoTop = styled.div`
  font-size: 18px;
  height: 75px;
  font-weight: 600;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  flex-shrink: 0;
`;

const StoreTitle = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
`;
const StoreInfoCenter = styled.div`
  height: 45px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  border-top: 1px solid rgb(250, 250, 250);
  border-bottom: 1px solid rgb(250, 250, 250);
  margin-bottom: 20px;
  flex-shrink: 0;
`;

const StoreInfoCenterContent = styled.div`
  margin-right: 30px;
  font-size: 13px;
  color: rgb(136, 136, 136);
  display: flex;
  align-items: center;
`;
const StoreInfoCenterValue = styled.div`
  margin-left: 5px;
  color: rgb(33, 33, 33);
`;

const StoreBottom = styled.div``;

const StoreDetailContainer = styled.div``;

const StoreDetailNav = styled.div`
  display: flex;
  height: 80px;
`;

const StyledLink = styled(Link)`
  flex: 1 1 0%;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  display: flex;
  border-top: 1px solid rgb(33, 33, 33);
  border-left: 1px solid rgb(33, 33, 33);
  border-right: 1px solid rgb(33, 33, 33);
  border-bottom: 1px solid rgb(33, 33, 33);
  background: rgb(255, 255, 255);
  color: rgb(33, 33, 33);
  font-weight: 600;
  text-decoration: none;
`;

const StoreDetailSpan = styled.div`
  margin-left: 10px;
`;

const StoreDetailInfoContainer = styled.div`
  display: block;
`;
const StoreDetailInfoTitle = styled.div`
  font-size: 18px;
  padding: 50px 0px 20px;
  border-bottom: 1px solid rgb(238, 238, 238);
  display: flex;
  font-weight: 900;
`;
const StoreDetailInfoTitleSpan = styled.div`
  margin-left: 5px;
  color: rgb(247, 47, 51);
`;
const StoreDetailInfoContent = styled.div`
  margin: 30px 0px 100px;
  color: rgb(136, 136, 136);
`;

const MyStore = () => {
  return (
    <StoreContainer>
      <StoreDiv>
        <StoreTopContainer>
          <StoreTop>
            <ProfileImg>
              <ProfileImgBox>
                <ProfileImageWrap>
                  <ProfileImage />
                </ProfileImageWrap>
              </ProfileImgBox>
            </ProfileImg>
            <StoreIntro>
              <StoreInfoTop>
                <StoreTitle>금쪽이의 상점</StoreTitle>
              </StoreInfoTop>
              <StoreInfoCenter>
                <StoreInfoCenterContent>
                  <img
                    src={storeOpen}
                    alt="상점오픈일이미지"
                    width="14"
                    height="13"
                  />
                  상점오픈일
                  <StoreInfoCenterValue>19일 전</StoreInfoCenterValue>
                </StoreInfoCenterContent>
                <StoreInfoCenterContent>
                  <img
                    src={storeVisit}
                    alt="상점방문 이미지"
                    width="14"
                    height="13"
                  />
                  상점방문수
                  <StoreInfoCenterValue>0 명</StoreInfoCenterValue>
                </StoreInfoCenterContent>
                <StoreInfoCenterContent>
                  <img
                    src={storeSell}
                    alt="상품판매이미지"
                    width="14"
                    height="13"
                  />
                  상품판매
                  <StoreInfoCenterValue>1 회</StoreInfoCenterValue>
                </StoreInfoCenterContent>
                <StoreInfoCenterContent>
                  <img
                    src={storeDelive}
                    alt="택배발송이미지"
                    width="14"
                    height="13"
                  />
                  택배발송
                  <StoreInfoCenterValue>3 회</StoreInfoCenterValue>
                </StoreInfoCenterContent>
              </StoreInfoCenter>
            </StoreIntro>
          </StoreTop>
        </StoreTopContainer>
        <StoreBottom>
          <StoreDetailContainer>
            <StoreDetailNav>
              <StyledLink to="shop/userID/products">
                상품<StoreDetailSpan>0</StoreDetailSpan>
              </StyledLink>
              <StyledLink to="shop/userID/reviews">
                상점후기<StoreDetailSpan>0</StoreDetailSpan>
              </StyledLink>
              <StyledLink to="shop/userID/favorites">
                찜<StoreDetailSpan>0</StoreDetailSpan>
              </StyledLink>
            </StoreDetailNav>
            <StoreDetailInfoContainer>
              <StoreDetailInfoTitle>
                찜<StoreDetailInfoTitleSpan>0</StoreDetailInfoTitleSpan>
              </StoreDetailInfoTitle>
              <StoreDetailInfoContent>
                찜한상품이 없습니다
              </StoreDetailInfoContent>
            </StoreDetailInfoContainer>
          </StoreDetailContainer>
        </StoreBottom>
      </StoreDiv>
    </StoreContainer>
  );
};

export default MyStore;
