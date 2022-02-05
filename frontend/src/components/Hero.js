import React from "react";
import { useSelector } from "react-redux";

function Hero() {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  return (
    <div className="hero">
      <h3>Hi, {userInfo.name ? userInfo.name : "Andrea"}</h3>
      <h2>What are you looking for today?</h2>
    </div>
  );
}

export default Hero;
