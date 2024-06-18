import React, {useState} from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { Logo, Button } from "../index";
import logo from "../../assets/BNI.png";
import "./navbar.css";

const Menu = () => (
  <>
  <a className="active" href="#Home">Home</a>
            <a href="#">Summer Supplier Summit</a>
            <a href="#">Expositores </a>
            <a href="#">Tickets</a>
            <a href="#">FAQs</a>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <div className="navbar">
      <div className="navbar-links">
        <div className="navbar_links-logo">
          <Logo linkTo="https://bnimexico.com/es-MX/index" linkImg={logo} />
        </div>
          <div className="navbar_links-container">
           <Menu/>
          </div>
      </div>
      <div className="navbar_sing">
        <a href="#">Sign in</a>
        <Button textTo='Registrate'/>
      </div>
      <div className="navbar-menu">
      {toggleMenu 
      ? <RiCloseLine color="#fff" size={26} onClick={() => setToggleMenu(false)}/> 
      : <RiMenu3Line color="#fff" size={26} onClick={() => setToggleMenu(true)}/> 
       }
       {toggleMenu && (
        <div className="navbar_menu_container scale-up-center">
          <div className="navbar_menu_container-links">
            <Menu/>
            <div className="navbar_menu_container-links-sing">
        <a href="#">Sign in</a>
        <Button textTo='Registrate'/>
      </div>
          </div>
        </div>
       )}
      </div>
    </div>
  );
};

export default Navbar;
