import React from "react";
import logoPng from "../assets/logo.png";

const Logo = () => {
  return (
    <a href="/">
      <img src={logoPng} alt="logo" style={{ width: "200px" }} />
    </a>
  );
};

export default Logo;
