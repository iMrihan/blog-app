import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  let initial = {
    name: "",
    email: "",
    password: "",
  };
  const [userData, setUserData] = useState(initial);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      let result = await fetch(
        "https://moneyyapp-assignmet2.herokuapp.com/api/users/register",
        {
          method: "Post",
          body: JSON.stringify(userData),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      result = await result.json();

      if (!result.message) {
        setError("");
        localStorage.setItem("user", JSON.stringify(result));
        if (result) {
          navigate("/");
        }
      } else if (result.message) {
        setError(result.message);
        alert(result.message);
        navigate("/login");
      }
    } catch (error) {
      console.log("error:", error);
    }
  };

  return (
    <div className="register">
      <h1>Register</h1>
      <h2 style={{ color: "red" }}>{error}</h2>
      <form onSubmit={handleSubmit}>
        <input
          className="inputBox"
          type="text"
          placeholder="Enter Name"
          name="name"
          required
          onChange={handleChange}
        />
        <input
          className="inputBox"
          type="text"
          placeholder="Enter Email"
          name="email"
          required
          onChange={handleChange}
        />
        <input
          className="inputBox"
          type="password"
          placeholder="Enter Password"
          name="password"
          required
          onChange={handleChange}
        />
        <input type="submit" value="Sign Up" className="signup-button" />
      </form>
    </div>
  );
};

export default SignUp;
