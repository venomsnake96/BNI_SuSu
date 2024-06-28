import React, { useState, useEffect } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { Logo, Login} from "../index";
import {Cart} from '../cart/Cart'
import logo from "../../assets/BNI.png";
import "./navbar.css";
import { NavLink } from "react-router-dom";


const Menu = () => (
  <>
    <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
    Summer Supplier Summit
    </NavLink>
    <NavLink to="/app" className={({ isActive }) => (isActive ? "active" : "")}>
      Conferencias y Talleres
    </NavLink>
    <NavLink to="/expositores" className={({ isActive }) => (isActive ? "active" : "")}>
      Expositores
    </NavLink>
    <NavLink
      to="/tickets"
      className={({ isActive }) => (isActive ? "active" : "")}>
      Tickets
    </NavLink>
    <NavLink
      to="/patrocinador"
      className={({ isActive }) => (isActive ? "active" : "")}>
      Patrocinadores
    </NavLink>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const [show, setShow] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) { 
      setShow(true); 
    } else { 
      setShow(false);  
    }

    
    setLastScrollY(window.scrollY); 
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);

    
    return () => {
       window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);
  
  return (
   
    <div className={`navbar ${show && 'hidden'} `}>
      <div className="navbar-links">
        <div className="navbar_links-logo">
          <Logo linkTo="https://bnimexico.com/es-MX/index" linkImg={logo} />
        </div>
        <div className="navbar_links-container">
          <Menu />
        </div>
      </div>
      <div className="navbar_sing">
        {/* <Cart /> */}
        <Login textButtonOp="Log in" textTitle='Log in' textDescrip='your acount' />
        <NavLink to='/registro' >Join Us</NavLink>
      </div>
      <div className="navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#cf2030"
            size={26}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#cf2030"
            size={26}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="navbar_menu_container scale-up-center">
            <div className="navbar_menu_container-links">
              <Menu />
              <div className="navbar_menu_container-links-sing">
                <Login textButtonOp="Log in" textTitle='Log in' textDescrip='your acount' />
                <NavLink to='/registro' >Join Us</NavLink>
                </div>
            </div>
          </div>
        )}
      </div>
        <Cart />
    </div>
    
  );
};

export default Navbar;
