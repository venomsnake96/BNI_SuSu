import React from 'react';
import './footer.css';
import logo from "../../assets/bni-logo3.png";
import logo2 from '../../assets/rpm_white.svg';
import {Logo} from '../../atomic-components';



const Footer = () => {
  return (
    <div className="footer gradeint__bg">
        <p>#SummmerSuplierSummit</p>
      <div className="logo">
        <Logo linkImg={logo} />
      </div>
      <div className='power-by'>
        <p>Powered by</p>
        <div className='logo2'>
        <Logo linkImg={logo2}/>
        </div>
      </div>
      </div>
  )
}

export default Footer