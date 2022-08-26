import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function UpdateBlog() {
  const initial = {
    title: "",
    text: "",
  };
  const [blog, setBlog] = useState(initial);

  const { id } = useParams();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlog({ ...blog, [name]: value });
  };

  useEffect(() => {
    getBlogDetails();
  }, []);

  const getBlogDetails = async (e) => {
    let result = await fetch(
      `https://moneyyapp-assignmet2.herokuapp.com/api/blog/${id}`
    );

    result = await result.json();
    setBlog(result);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let result = await fetch(
      `https://moneyyapp-assignmet2.herokuapp.com/api/blog/${id}`,
      {
        method: "Put",
        body: JSON.stringify(blog),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    result = await result.json();
    if (result) {
      navigate("/");
    }
  };

  return (
    <div className="blog">
      <h1>Update Blog</h1>
      <form onSubmit={handleSubmit}>
        <input
          required
          className="inputBox"
          value={blog.title}
          type="text"
          placeholder="Enter blog title"
          name="title"
          onChange={handleChange}
        />
        <textarea
          value={blog.text}
          name="text"
          rows="10"
          cols="50"
          onChange={handleChange}
        />
        <br />
        <br />
        <input className="blog-button" type="submit" value="Update Blog" />
      </form>
    </div>
  );
}
