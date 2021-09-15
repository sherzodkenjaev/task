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
      <a
        href="/"
        className="logo"
        style={{ textDecoration: "inherit" }}
        onClick={() => {
          Redirect("/");
        }}
      >
        <h3>Home</h3>
      </a>
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
      <a
        href="/login"
        className="logo"
        style={{ textDecoration: "inherit" }}
        onClick={() => {
          Redirect("/login");
        }}
      >
        {!token ? <h3>Login</h3> : <h3 onClick={handleLogout}>Logout</h3>}
      </a>
    </div>
  );
}

export default Header;
