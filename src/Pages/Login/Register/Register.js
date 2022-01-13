import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import React, { useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Register = () => {
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
    <div className="login-form">
      <div>
        <h2>please register</h2>
        <form onSubmit={handleRegistration}>
          <input
            type="email"
            onBlur={handleEmailChange}
            name=""
            id=""
            placeholder="your email"
          />
          <br />
          <input
            type="password"
            onBlur={handlePasswordChange}
            name=""
            id=""
            placeholder="Enter your password"
          />
          <br />
          <input type="submit" value="Submit" />
        </form>

        <Link to="/home">Already registeded</Link>
      </div>
    </div>
  );
};

export default Register;
