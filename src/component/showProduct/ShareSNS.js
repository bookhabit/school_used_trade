import React from "react";
import sns_blogImg from "../../svg/productDetail/sns_blog.png";
import sns_facebookImg from "../../svg/productDetail/sns_facebook.png";
import sns_twitterImg from "../../svg/productDetail/sns_twitter.png";
import url_img from "../../svg/productDetail/url_img.png";

const ShareSNS = () => {
  return (
    <div className="shareSNS">
      <button className="shareNaver">
        <img
          src={sns_blogImg}
          alt="블로그 이미지"
          style={{ width: "22px", height: "18px" }}
        />
      </button>
      <button className="shareFacebook">
        <img
          src={sns_facebookImg}
          alt="페이스북 이미지"
          style={{ width: "8px", height: "15px" }}
        />
      </button>
      <button className="shareTwitter">
        <img
          src={sns_twitterImg}
          alt="트위터 이미지"
          style={{ width: "16px", height: "13px" }}
        />
      </button>
      <button className="shareURL">
        <img
          src={url_img}
          alt="url이미지"
          style={{ width: "25px", height: "25px" }}
        />
      </button>
    </div>
  );
};

export default ShareSNS;
