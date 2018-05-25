import React, { Component } from "react";

import { Link } from "react-router-dom";

function Landing(props) {
  return (


    <div>
    <div className="title">
      <div className="landing-buttons">
        <Link to="/login">
          <button className="login-button">Login</button>
        </Link>

        <Link to="/register">
          <button className="register-button">Register</button>
        </Link>
      </div>

    </div>
    <div className="anounce">
      <h1>Welcome to ErBeti's Marvel Database</h1>
      <h2>Sign up for free</h2>
    </div>
</div>
      );
}

export default Landing;
