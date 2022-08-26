import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  let initial = {
    email: "",
    password: "",
  };

  const [loginData, setLoginData] = useState(initial);
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let result = await fetch(
      "https://moneyyapp-assignmet2.herokuapp.com/api/users/login",
      {
        method: "Post",
        body: JSON.stringify(loginData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    result = await result.json();
    // console.log(result);

    if (result.name) {
      localStorage.setItem("user", JSON.stringify(result));
      navigate("/");
    } else {
      alert("Please enter correct details");
    }
  };
  return (
    <div className="login">
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          required
          className="inputBox"
          placeholder="Enter Email"
          name="email"
          onChange={handleChange}
        />
        <input
          required
          type="password"
          className="inputBox"
          placeholder="Enter Password"
          name="password"
          onChange={handleChange}
        />
        <input className="login-button" type="submit" value="Login" />
      </form>
    </div>
  );
}
