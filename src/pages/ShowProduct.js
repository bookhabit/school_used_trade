import React, { useState, useEffect } from "react";
import "../css_UI/productDetail.css";
import ProductCategory from "../component/showProduct/ProductCategory";
import ProductDetail from "../component/showProduct/ProductDetail";
import RelatedProduct from "../component/showProduct/RelatedProduct";
import ShareSNS from "../component/showProduct/ShareSNS";
import ProductBottom from "../component/showProduct/ProductBottom";
import { useParams, useNavigate } from "react-router";
import axios from "axios";

const ShowProduct = () => {
  const Params = useParams();
  const [post, setPost] = useState(null);
  const [postLoading, setPostLoading] = useState(true);

  const navigate = useNavigate();

  const fetchData = async () => {
    // GET api/post/read?id= 상세조회
    await axios
      .get(`/api/post/read?id=${Params.postID}`)
      .then((res) => {
        console.log("ShowPost res.data : ", res.data);
        setPost(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
    setPostLoading(false);
  };

  // 이미지 path 지정
  // const imagePath = "http://" + post.image.path;

  useEffect(() => {
    fetchData();
  }, []);

  // 데이터 가져올 때 undefined와 loading 으로 분기처리
  // 대기 중일 때
  if (postLoading) {
    return <h2>로딩 중...</h2>;
  }
  // 아직 posts 값이 설정되지 않았다면
  if (!post) {
    return null;
  }
  // PATCH /post/api/update?id=  수정 patch
  const onUpdate = () => {
    navigate("/EditorProduct", {
      state: {
        id: post.id,
        title: post.title,
        body: post.body,
        image: post.image,
      },
    });
  };

  // DELETE api/post/delete?id=  삭제 delete
  const onRemove = () => {
    alert("정말 삭제하시겠습니까?");
    axios
      .delete(`/api/post/remove?id=${Params.postID}`)
      .then((res) => {
        console.log(res.status); //200
        alert("삭제되었습니다.");
        navigate("/");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <>
      <div className="mainProductContainer">
        <div className="mainProductDiv">
          <div className="mainProductWrapper">
            {/* 카테고리 컨테이너*/}
            <ProductCategory />
            {/* 상품설명 */}
            <ProductDetail title={post.title} image={post.image.path} />
            {/* 연관상품  */}
            <RelatedProduct />
            {/* 공유하기 sns  */}
            <ShareSNS />
            {/* 상품,상점정보  */}
            <ProductBottom
              body={post.body}
              onRemove={onRemove}
              onUpdate={onUpdate}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowProduct;
