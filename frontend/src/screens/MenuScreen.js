import React from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { logout } from "../actions/userActions";

function MenuScreen() {
  const { userInfo } = useSelector((state) => state.userLogin);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
    window.location.reload();
  };
  return (
    <div>
      <div class="container">
        <div class="profile">
          <h2>Welcome, {userInfo.name ? userInfo.name : "Andrea"}</h2>
          {/* <p>abhinaysingh.acnt@gmail.com</p> */}
        </div>

        <div class="profile-options">
          {userInfo.name ? (
            <div onClick={logoutHandler} class="option">
              <p>Logout</p>
            </div>
          ) : (
            <div class="option">
              <Link to="/sign/">Sign In</Link>
            </div>
          )}

          <p className="option-heading">Personalization</p>
          <div class="option">
            <p>Update Password</p>
          </div>
          <div class="option">
            <p>Notifications</p>
          </div>
          <p className="option-heading">Orders</p>

          <div class="option">
            <Link to="/cart/">Cart</Link>
          </div>

          <div class="option">
            <Link to="/order/">Your Orders</Link>
          </div>

          <p className="option-heading">Legal</p>

          <div class="option">
            <p>Terms of Use</p>
          </div>
          <div class="option">
            <p>Privacy Policy</p>
          </div>
          <div class="option">
            <p>Report a Bug</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuScreen;
