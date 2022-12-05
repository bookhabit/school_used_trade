import React from "react";
import ProductInfo from "./ProductInfo";
import StoreInfo from "./StoreInfo";
import ErrorBoundary from "../Error/ErrorBoundary";
import ProductInfoErr from "../Error/ProductInfoErr";

const ProductBottom = ({ postUserId,body, onUpdate, onRemove }) => {
  return (
    <div className="productBottom">
      <ErrorBoundary FallbackComponent={ProductInfoErr}>
          <ProductInfo postUserId={postUserId} body={body} onRemove={onRemove} onUpdate={onUpdate} />
      </ErrorBoundary>
      <StoreInfo />
    </div>
  );
};

export default ProductBottom;
