import React from "react";
import "./header.css";
import {Logo, Button2} from '../../atomic-components'
import logo from '../../assets/bni-logo3.png'

const Header = () => {
  return (
    <div className="header section_padding" id="Home">
      <div className="header-content">
        <div className="header-contet-filter">
        <h1 className="gradient__text">Summer Supplier Summit</h1>
        <p>La primera Expo especializada en Proveeduría BNI en México</p>
          <div className="header_logo">
           <Logo linkImg={logo}/>
           <div className="header-info-text">
            <h2 className="gradient__text">Agosto 21, CDMX <br /><span>Worl Trade Center</span> </h2>
           </div>
          </div>
           <div className="header-btn-cont"> 
            <Button2 textTo={'Quiero Asistir'}/>
            <Button2 textTo={'Quiero Participar'}/>
           </div>
          
        </div>
      </div>
    </div>
  );
};

export default Header;
