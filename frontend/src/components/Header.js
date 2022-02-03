import React from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { logout } from "../actions/userActions";

function Header() {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
    window.location.reload();
  };

  return (
    <div className="container">
      <div class="top-bar">
        <Link to="/" className="logo">
          <img src="/img/assets/logo.svg" alt="home" />
        </Link>

        {userInfo.name ? (
          <p onClick={logoutHandler} className="logout">
            {userInfo.name} (Logout)
          </p>
        ) : (
          <Link to="/sign/">
            <p>Sign In</p>
          </Link>
        )}
        <Link to="/cart/">
          <img src="/img/assets/cart.svg" alt="cart" />
        </Link>
      </div>
    </div>
  );
}

export default Header;
