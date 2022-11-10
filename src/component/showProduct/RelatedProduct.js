import React from "react";
import relatedProductImg from "../../svg/productDetail/relatedProduct.jpg";
import relatedProduct2Img from "../../svg/productDetail/relatedProduct2.jpg";

const RelatedProduct = () => {
  return (
    <div className="relatedProductContainer">
      <div className="relatedProduct">
        <div className="relatedProudctTop">연관상품</div>
        <div className="relatedProductContent">
          <div className="relatedProductWrapper">
            <a href="{() => false}">
              <div className="relatedProductImg">
                <img src={relatedProductImg} alt="연관상품" />
              </div>
              <div className="relatedProductTitle">골프모자2개 새상품</div>
            </a>
          </div>
          <div className="relatedProductWrapper">
            <a href="{() => false}">
              <div className="relatedProductImg">
                <img src={relatedProduct2Img} alt="연관상품" />
              </div>
              <div className="relatedProductTitle">타입서비스 볼캡</div>
            </a>
          </div>
          <div className="relatedProductWrapper">
            <a href="{() => false}">
              <div className="relatedProductImg">
                <img src={relatedProduct2Img} alt="연관상품" />
              </div>
              <div className="relatedProductTitle">타입서비스 볼캡</div>
            </a>
          </div>
          <div className="relatedProductWrapper">
            <a href="{() => false}">
              <div className="relatedProductImg">
                <img src={relatedProduct2Img} alt="연관상품" />
              </div>
              <div className="relatedProductTitle">타입서비스 볼캡</div>
            </a>
          </div>
          <div className="relatedProductWrapper">
            <a href="{() => false}">
              <div className="relatedProductImg">
                <img src={relatedProduct2Img} alt="연관상품" />
              </div>
              <div className="relatedProductTitle">타입서비스 볼캡</div>
            </a>
          </div>
          <div className="relatedProductWrapper">
            <a href="{() => false}">
              <div className="relatedProductImg">
                <img src={relatedProduct2Img} alt="연관상품" />
              </div>
              <div className="relatedProductTitle">타입서비스 볼캡</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelatedProduct;
