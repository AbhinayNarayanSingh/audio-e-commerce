import React from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

function Header() {
  return (
    <div className="container">
      <div class="top-bar">
        <Link to="/" className="logo">
          <img src="/img/assets/logo.svg" alt="home" />
        </Link>

        <Link to="/menu/">
          <img src="/img/assets/menu.svg" alt="menu" />
        </Link>
      </div>
    </div>
  );
}

export default Header;
