import React from "react";
import ProductInfo from "./ProductInfo";
import StoreInfo from "./StoreInfo";

const ProductBottom = ({ body, onUpdate, onRemove }) => {
  return (
    <div className="productBottom">
      <ProductInfo body={body} onRemove={onRemove} onUpdate={onUpdate} />
      <StoreInfo />
    </div>
  );
};

export default ProductBottom;
