import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Main from "./pages/Main";
import Register from "./pages/Register";
import ShowProduct from "./pages/ShowProduct";
import SignUp from "./pages/SignUp";
import Top from "./component/Top";
import EditorProduct from "./pages/EditorProduct";
import Missing from "./pages/Missing";
import Kakao from "./pages/Kakao";
import MyStore from "./pages/MyStore";

const App = () => {
  return (
    <div>
      <Top />
      <Header />
      <Routes>
        {/* 메인 , 상품등록, 상품상세페이지,로그인 */}
        <Route path="/" element={<Main />} />
        <Route path="/register" element={<Register />} />
        <Route path="/detail/:postID" element={<ShowProduct />} />
        <Route path="/EditorProduct" element={<EditorProduct />} />
        <Route path="/mystore" element={<MyStore />} />
        <Route path="/login" element={<SignUp />} />
        <Route path="/auth/kakao/callback" element={<Kakao />} />
        {/* 잘못된 경로일 때 오류처리 */}
        <Route path="*" element={<Missing />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
