import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function CreateReview() {
  const { id } = useParams();

  const initial = {
    description: "",
    user_id: JSON.parse(localStorage.getItem("user"))._id,
    blog_id: id,
  };

  const [review, setReview] = useState(initial);
  const [error, setError] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setReview({ ...review, [name]: value });
  };

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!review.description) {
      setError(true);
      return false;
    }

    let result = await fetch(
      "https://moneyyapp-assignmet2.herokuapp.com/api/reviews/create",
      {
        method: "Post",
        body: JSON.stringify(review),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    result = await result.json();
    if (result) {
      setReview(initial);
      navigate("/");
    }
  };

  return (
    <div className="blog">
      <h1>Create Review</h1>
      <form onSubmit={handleSubmit}>
        <input
          required
          className="inputBox"
          type="text"
          placeholder="Enter review here"
          name="description"
          value={review.description}
          onChange={handleChange}
        />
        {error && !review.title && (
          <span className="invalid-input">Enter valid Review</span>
        )}

        <input className="blog-button" type="submit" value="Create Review" />
      </form>
    </div>
  );
}
