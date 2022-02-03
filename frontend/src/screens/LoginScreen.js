import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";

import Loader from "../components/Loader";
import Message from "../components/Message";
import { login } from "../actions/userActions";

function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userLogin = useSelector((state) => state.userLogin);
  const { error, loading, userInfo } = userLogin;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  });

  return (
    <div className="sign">
      <h3>Sign In</h3>
      <h2>Get access to your Orders, Wishlist and Recommendations</h2>

      <form onSubmit={submitHandler}>
        <div className="form-search">
          <img src="/img/assets/mail.svg" alt="" />
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-search">
          <img src="/img/assets/password.svg" alt="" />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <a href="">Forgot Password</a>

        <div className="submit">
          <button>Sign In</button>
        </div>
      </form>
      <p className="user-alternative">
        Didn't have any account? <Link to="/sign-up/">Sign Up here</Link>
      </p>
    </div>
  );
}

export default LoginScreen;
