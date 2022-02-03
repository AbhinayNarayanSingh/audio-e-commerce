import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";

import Loader from "../components/Loader";
import Message from "../components/Message";
import { register } from "../actions/userActions";

function RegisterScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const userRegister = useSelector((state) => state.userLogin);
  const { error, loading, userInfo } = userRegister;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      dispatch(register(name, email, password));
    } else {
      console.log("Password doesn't match");
    }
  };

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  });

  return (
    <div className="sign">
      <h3>Sign Up</h3>
      <h2>Sign up now, It's free and takes minutes</h2>

      <form className="form" onSubmit={submitHandler}>
        <div>
          <p>Name</p>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <p>Email</p>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <p>Password</p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <p>Confirm Password</p>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <div className="submit m-t">
          <button>Sign Up</button>
        </div>
      </form>
      <p className="user-alternative">
        Already have an account? <Link to="/sign/">Sign In here</Link>
      </p>
    </div>
  );
}

export default RegisterScreen;
