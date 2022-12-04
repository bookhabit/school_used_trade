import React from "react";
import { useNavigate } from "react-router";

const EachPost = ({ title, created_at, postID, image,price }) => {
  const imagePath = "http://" + image;
  const navigate = useNavigate();
  const goDetail = () => {
    navigate(`/detail/${postID}`);
  };
  // postDate 시간단위로 변경해서 화면출력하기
  let ms = Date.parse(created_at); // 작성한 포스트 날짜 밀리초
  let today = Date.now(); // 현재시간 밀리초
  const diff = today - ms;
  const diffMinute = Math.floor(diff / 1000 / 60); // 분
  const diffTime = Math.floor(diff / 1000 / 60 / 60); // 시간
  const diffDay = Math.floor(diff / 1000 / 60 / 60 / 24); // 일
  const diffMonth = Math.floor(diff / 1000 / 60 / 60 / 24 / 30); // 월

  return (
    <div className="post" onClick={goDetail}>
      <div className="postTag">
        <div className="postImgContainer">
          <img src={imagePath} alt="상품이미지" />
        </div>
        <div className="postDesc">
          <div className="postTop">
            <div className="postTitle">{title}</div>
          </div>
          <div className="postBottom">
            <div className="postPrice">`${price} 원`</div>
            <div className="postDate">
              <span>
                {diffTime == 0
                  ? `${diffMinute}분 전`
                  : diffTime < 24
                  ? `${diffTime}시간 전`
                  : diffTime > 24
                  ? `${diffDay}일 전`
                  : diffDay > 30
                  ? `${diffMonth}달 전`
                  : ` 몇년 전`}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EachPost;
