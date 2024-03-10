import React from "react";
import logoPng from "../assets/logo.png";

const Logo = ({ styles }) => {
  return (
    <a href="/">
      <img
        src={logoPng}
        alt="logo"
        style={{ width: "200px" }}
        className={styles}
      />
    </a>
  );
};

export default Logo;
