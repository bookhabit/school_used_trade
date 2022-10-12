import React from "react";
import { Link } from "react-router-dom";

const ShowPostList = ({ posts }) => {
  console.log(posts);
  return (
    <div>
      {posts.map((post) => (
        <li key={post.id}>
          <p>
            <Link to="/ShowPost">{post.title}</Link>
          </p>
          <p>{post.body}</p>
        </li>
      ))}
    </div>
  );
};

export default ShowPostList;
