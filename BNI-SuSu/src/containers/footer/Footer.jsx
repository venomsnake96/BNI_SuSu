import React from 'react';
import './footer.css';
import logo from "../../assets/bni-logo3.png";
// import logo2 from '../../assets/rpm_white.svg';
import {Logo} from '../../atomic-components';



const Footer = () => {
  return (
    <div className="footer">
      <div className='footer-filter'>
        <p>#SummmerSuplierSummit</p>
      <div className="logo">
        <Logo linkImg={logo} />
      </div>
      {/* <Logo linkImg={logo2}/> */}
      </div>
      </div>
      
  )
}

export default Footer