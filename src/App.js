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
import AuthProvider from "./component/Auth/AuthProvider";
import { Suspense } from "react";
import TopError from "./component/Error/TopError";
import ErrorBoundary from "./component/Error/ErrorBoundary";


const App = () => {
  return (
    <div>
      <ErrorBoundary fallback={<div>로그인도중 오류</div>}>
      <Suspense fallback={<div>로그인도중 오류</div>}>
      <Top />
      </Suspense>
      </ErrorBoundary>
      <Header />
      <Routes>
        {/* 메인 , 상품등록, 상품상세페이지,로그인 */}
        <Route path="/" element={<Main />} />
        <Route path="/detail/:postID" element={<ShowProduct />} />
        <Route path="/login" element={<SignUp />} />
        <Route path="/auth/callback/kakao" element={<Kakao />} />

        {/* 로그인해야만 접근가능한 URL */}
        <Route element={<AuthProvider />}>
          <Route path="/register" element={<Register />} />
          <Route path="/EditorProduct" element={<EditorProduct />} />
          <Route path="/mystore" element={<MyStore />} />
        </Route>

        {/* 잘못된 경로일 때 오류처리 */}
        <Route path="*" element={<Missing />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
