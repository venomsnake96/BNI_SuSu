import React from "react";
import "./header.css";
import {Logo, Button2, Countdown} from '../../atomic-components'
import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/bni-logo3.png'

const Header = () => {
  return (
    <div className="header">
      <div className="header-content">
        <div className="header-contet-filter">
        <h1 className="">SUMMER <span>SUPPLIER</span> SUMMIT</h1>
        <p>La primera Expo especializada en Proveeduría BNI en México</p>
          <div className="header_logo">
           <Logo linkImg={logo}/>
           <div className="header-info-text">
            <h2 className="">Agosto 21, CDMX <br /><span>Worl Trade Center</span> </h2>
           </div>
          </div>
           <div className="header-btn-cont"> 
           <NavLink to='/tickets' ><Button2 textTo={'Quiero Asistir'}/></NavLink>
           <NavLink to='/registro' ><Button2 textTo={'Quiero Participar'}/></NavLink>
           </div>

        </div>
      </div>
           <div className="coundter">
            <Countdown />
           </div>
          
    </div>
  );
};

export default Header;
