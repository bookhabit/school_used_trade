import React from "react";
import "../css_UI/productDetail.css";
import ProductCategory from "../component/showProduct/ProductCategory";
import ProductDetail from "../component/showProduct/ProductDetail";
import RelatedProduct from "../component/showProduct/RelatedProduct";
import ShareSNS from "../component/showProduct/ShareSNS";
import ProductBottom from "../component/showProduct/ProductBottom";

const EditorProduct = () => {
  return (
    <>
      <div className="mainProductContainer">
        <div className="mainProductDiv">
          <div className="mainProductWrapper">
            {/* 카테고리 컨테이너*/}
            <ProductCategory />
            {/* 상품설명 */}
            <ProductDetail />
            {/* 연관상품  */}
            <RelatedProduct />
            {/* 공유하기 sns  */}
            <ShareSNS />
            {/* 상품,상점정보  */}
            <ProductBottom />
          </div>
        </div>
      </div>
    </>
  );
};

export default EditorProduct;
