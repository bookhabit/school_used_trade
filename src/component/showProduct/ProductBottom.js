import React from "react";
import ProductInfo from "./ProductInfo";
import StoreInfo from "./StoreInfo";


const ProductBottom = ({ postUserId,body, onUpdate, onRemove }) => {
  return (
    <div className="productBottom">
      <ProductInfo postUserId={postUserId} body={body} onRemove={onRemove} onUpdate={onUpdate} />
      <StoreInfo />
    </div>
  );
};

export default ProductBottom;
