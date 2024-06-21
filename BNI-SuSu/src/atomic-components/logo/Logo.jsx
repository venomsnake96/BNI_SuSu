import React from "react";
import './logo.css'
function Logo({ linkTo, linkImg }) {
  return (
    <a className="logo_container" href={linkTo} target="_blank">
      <img  src={linkImg} alt="img" />
    </a>
  );
}

export default Logo;
