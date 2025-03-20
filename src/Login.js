import React from "react";
import './Login.css';

const LoginPage = () => {
  return (
    <div className="container1">
    <div className="container">
      <div className="card">
        <h2 className="title">Login</h2>
        <div className="input-container">
          <label>Username</label>
          <input type="text" className="input" />
        </div>
        <div className="input-container">
          <label>Password</label>
          <input type="password" className="input" />
        </div>
        <p className="forgot-password">Forget Password?</p>
        <button className="button">Login</button>
        <p className="signup">
          Not a Member? <span className="signup-link">Signup</span>
        </p>
      </div>
    </div>
    </div>
  );
};

export default LoginPage;