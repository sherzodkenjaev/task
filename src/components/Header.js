import React from "react";
import { Link, useHistory, Redirect } from "react-router-dom";
import "../styles/Header.css";
import { getToken, removeUserSession } from "../Utils/Common";

function Header() {
  const token = getToken();

  const history = useHistory();

  const handleLogout = () => {
    removeUserSession();
    history.push("/login");
  };

  return (
    <div className="header">
      <Link to="/" className="logo" style={{ textDecoration: "inherit" }}>
        <h3>Home</h3>
      </Link>
      <a
        href="/products"
        className="logo"
        style={{ textDecoration: "inherit" }}
        onClick={() => {
          Redirect("/products");
        }}
      >
        <h3>Products</h3>
      </a>
      <a
        href="/search"
        className="logo"
        style={{ textDecoration: "inherit" }}
        onClick={() => {
          Redirect("/products");
        }}
      >
        <h3>Search</h3>
      </a>
      <Link to="/login" className="logo" style={{ textDecoration: "inherit" }}>
        {!token ? <h3>Login</h3> : <h3 onClick={handleLogout}>Logout</h3>}
      </Link>
    </div>
  );
}

export default Header;
