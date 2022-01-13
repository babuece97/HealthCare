import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import React from "react";
import { useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { singnInUsingGoogle } = useAuth();
  const auth = getAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_url = location.state?.from || "/home";
  const handleGoogleLogin = () => {
    singnInUsingGoogle().then((result) => {
      history.push(redirect_url);
    });
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRegistration = (e) => {
    e.preventDefault();

    if (password.length < 6) {
      setError("Password must be at least 6 character long");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password).then((result) => {
      const user = result.user;
      console.log(user);
    });
  };
  return (
    <div className="login-form container">
      <div>
        <h2>Please login</h2>
        <form onSubmit={handleRegistration}>
          <input
            type="email"
            onBlur={handleEmailChange}
            name=""
            id=""
            placeholder="Enter your email"
          />
          <br />
          <input type="password" onBlur={handlePasswordChange} name="" id="" />
          <br />
          {error}
          <br />
          <input type="submit" value="Submit" />
        </form>
        <p>
          New to Health care system{" "}
          <Link to="/register">Create New Account</Link>
        </p>
        <button onClick={handleGoogleLogin}>Google signin</button>
      </div>
    </div>
  );
};

export default Login;
