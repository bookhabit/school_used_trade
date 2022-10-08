import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import PostList from "./page/PostList";
import WritePost from "./page/WritePost";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/PostList" element={<PostList />} />
        <Route path="/WritePost" element={<WritePost />} />
      </Routes>
    </div>
  );
};

export default App;
