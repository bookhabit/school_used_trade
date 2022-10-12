import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./page/Home";
import PostList from "./page/PostList";
import WritePost from "./page/WritePost";
import ShowPost from "./page/ShowPost";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/PostList" element={<PostList />} />
        <Route path="/WritePost" element={<WritePost />} />
        <Route path="/detail/:postID" element={<ShowPost />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
