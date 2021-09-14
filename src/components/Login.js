import React, { useState } from "react";
import { useHistory } from "react-router";
import "../styles/Login.css";
// import axios from "axios";
import { getToken, setUserSession } from "../Utils/Common";

function Login() {
  const [username, setUsername] = useState("fortest");
  const [password, setPassword] = useState("fortest1");
  const [subdomain, setSubdomain] = useState("face");
  const token = getToken();
  const history = useHistory();

  const handleLogin = (e) => {
    e.preventDefault();

    fetch(`https://${subdomain}.ox-sys.com/security/auth_check`, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `_username=${username}&_password=${password}&_subdomain=${subdomain}`,
    })
      .then((response) => response.text())
      .then((data) => {
        let newData = JSON.parse(data);
        let token = newData.token;
        setUserSession(token);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    history.push("/home");
  };

  return (
    <div className="login">
      <form>
        <div className="row mb-3">
          <label className="col-sm-2 col-form-label">Username</label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
        </div>
        <div className="row mb-3">
          <label className="col-sm-2 col-form-label">Password</label>
          <div className="col-sm-10">
            <input
              type="password"
              className="form-control"
              id="inputPassword3"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="row mb-3">
          <label className="col-sm-2 col-form-label">Subdomain</label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              value={subdomain}
              onChange={(e) => setSubdomain(e.target.value)}
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleLogin}>
          Sign in
        </button>
      </form>
    </div>
  );
}

export default Login;
