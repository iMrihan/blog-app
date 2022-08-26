import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/signup");
  };

  return (
    <div className="nav">
      <img
        className="logo"
        src="https://images-platform.99static.com/RtnLnvmEEPYFRW6Y9z2c_sScoTU=/18x1563:1533x3078/500x500/top/smart/99designs-contests-attachments/96/96847/attachment_96847724"
        alt="logo"
        onClick={() => {
          navigate("/");
        }}
      />

      {auth ? (
        <ul className="nav-ul">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/create-blog">Create Blog</Link>
          </li>

          <li>
            <Link onClick={logout} to="/signup">
              Logout ( {JSON.parse(auth).name})
            </Link>
          </li>
        </ul>
      ) : (
        <ul className="nav-ul nav-right">
          <li>
            <Link to="/">Blogs</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Nav;
