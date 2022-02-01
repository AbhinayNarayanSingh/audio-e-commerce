import React from "react";
import { Link, useParams } from "react-router-dom";

function Header() {
  return (
    <div className="container">
      <div class="top-bar">
        <Link to="/">
          <img src="/img/assets/menu.svg" alt="" />
        </Link>
        <Link to="/cart/">
          <img class="avatar" src="/img/user_profile/profile.jpg" alt="" />
        </Link>
      </div>
    </div>
  );
}

export default Header;
