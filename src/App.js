import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./component/Footer";
import Header from "./component/Header";
// import Home from "./page/Home";
// import PostList from "./page/PostList";
// import WritePost from "./page/WritePost";
// import ShowPost from "./page/ShowPost";
// import EditorPost from "./page/EditorPost";
// import SignUp from "./page/SignUp";
// import Login from "./page/Login";
import Main from "./pages/Main";
import Register from "./pages/Register";
import ShowProduct from "./pages/ShowProduct";
import Login from "./page/SignUp";
import Top from "./component/Top";
import EditorProduct from "./pages/EditorProduct";
import Missing from "./pages/Missing";

const App = () => {
  return (
    <div>
      <Top />
      <Header />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/SignUp" element={<SignUp />} /> */}
        {/* <Route path="/Login" element={<Login />} /> */}
        {/* <Route path="/PostList" element={<PostList />} />
        <Route path="/WritePost" element={<WritePost />} />
        <Route path="/EditorPost" element={<EditorPost />} /> */}
        {/* <Route path="/detail/:postID" element={<ShowPost />} /> */}

        {/* 메인 , 상품등록, 상품상세페이지,로그인 */}
        <Route path="/" element={<Main />} />
        <Route path="/register" element={<Register />} />
        <Route path="/detail/:postID" element={<ShowProduct />} />
        <Route path="/EditorProduct" element={<EditorProduct />} />
        <Route path="/login" element={<Login />} />
        {/* 잘못된 경로일 때 오류처리 */}
        <Route path="*" element={<Missing />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
