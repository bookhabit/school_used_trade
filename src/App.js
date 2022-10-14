import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./page/Home";
import PostList from "./page/PostList";
import WritePost from "./page/WritePost";
import ShowPost from "./page/ShowPost";
import EditorPost from "./page/EditorPost";
import SignUp from "./page/SignUp";
import Login from "./page/Login";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/PostList" element={<PostList />} />
        <Route path="/WritePost" element={<WritePost />} />
        <Route path="/EditorPost" element={<EditorPost />} />
        <Route path="/detail/:postID" element={<ShowPost />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
