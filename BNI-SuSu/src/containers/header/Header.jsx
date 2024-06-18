import React from "react";
import "./header.css";
import Logo from '../../atomic-components/logo/Logo'
import logo from '../../assets/bni-log2.png'
import mosq from '../../assets/bni-log.png'
const Header = () => {
  return (
    <div className="header section_padding" id="Home">
      <div className="header-content">
        <h1 className="gradient__text">Summer Supplier Summit</h1>
        <p>La primera Expo especializada en Proveeduría BNI en México</p>
          <div className="header_logo">
           <Logo linkImg={logo}/>
          </div>
      </div>
        <div className="header-imge">
          <img src={mosq} alt="img" />
        </div>
    </div>
  );
};

export default Header;
