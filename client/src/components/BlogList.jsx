import { Button } from "@mui/material";
import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
import ImgMediaCard from "./ImgMediaCard";
export default function BlogList() {
  const [blog, setBlog] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    getBlog();
  }, []);

  const getBlog = async () => {
    try {
      let result = await fetch(
        "https://moneyyapp-assignmet2.herokuapp.com/api/blogs"
      );
      result = await result.json();
      setBlog(result);
      setLoading(false);
    } catch (error) {
      console.log("error:", error);
    }
  };

  const deleteBlog = async (id) => {
    let result = await fetch(
      `https://moneyyapp-assignmet2.herokuapp.com/api/blog/${id}`,
      {
        method: "Delete",
      }
    );

    result = await result.json();
    if (result) {
      getBlog();
    }
  };

  return loading ? (
    <h1 style={{ textAlign: "center" }}>...Loading</h1>
  ) : (
    <div>
      <h1 style={{ textAlign: "center" }}>Blogs</h1>
      <Button
        style={{
          backgroundColor: "rgb(10, 71, 96)",
          color: "white",
          margin: "2% 46%",
          fontWeight: "bold",
        }}
        onClick={() => {
          navigate("/create-blog");
        }}
      >
        Create-Blog
      </Button>
      <div className="blogs-list">
        {blog.length > 0 ? (
          blog.map((el, index) => (
            <ImgMediaCard key={el._id} deleteBlog={deleteBlog} el={el} />
          ))
        ) : (
          <h1>No Result Found</h1>
        )}
      </div>
    </div>
  );
}
