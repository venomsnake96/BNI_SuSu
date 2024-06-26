import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { Logo, Login } from "../index";
import logo from "../../assets/BNI.png";
import "./navbar.css";
import { Link, NavLink } from "react-router-dom";

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
  return (
    <div className="navbar">
      <div className="navbar-links">
        <div className="navbar_links-logo">
          <Logo linkTo="https://bnimexico.com/es-MX/index" linkImg={logo} />
        </div>
        <div className="navbar_links-container">
          <Menu />
        </div>
      </div>
      <div className="navbar_sing">
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
    </div>
  );
};

export default Navbar;
