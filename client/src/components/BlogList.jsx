import React from "react";
import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import ImgMediaCard from "./ImgMediaCard";
export default function BlogList() {
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    getBlog();
  }, []);

  const getBlog = async () => {
    let result = await fetch("http://localhost:3005/api/blogs");
    result = await result.json();
    setBlog(result);
  };

  const deleteBlog = async (id) => {
    let result = await fetch(`http://localhost:3005/api/blog/${id}`, {
      method: "Delete",
    });

    result = await result.json();
    if (result) {
      getBlog();
    }
  };

  console.log(blog);
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Blogs</h1>
      <div className="blogs-list">
        {blog.length > 0 ? (
          blog.map((el, index) => (
            <ImgMediaCard deleteBlog={deleteBlog} el={el} key={index} />
          ))
        ) : (
          <h1>No Result Found</h1>
        )}
      </div>
    </div>
  );
}
