import React from 'react';
import './footer.css';
import logo from "../../assets/bni-logo3.png";
import logo2 from '../../assets/rpm_white.svg';
import {Logo} from '../../atomic-components';
import Brightness1Icon from '@mui/icons-material/Brightness1';



const Footer = () => {
  return (
    <div className="footer">
      <div className='footer-filter'>
        <p>#SummmerSuplierSummit</p>
      <div className="logo">
        <Logo linkImg={logo} />
      </div>
      <div className='logo2'>
        <small>Powered by</small>
      <a href="https://www.rpmspeedcode.com/" target='_blank' ><Logo linkImg={logo2}/></a>
      <div className='pulse circle'> <Brightness1Icon sx={{fontSize:[15]}} color='error' /> </div>
      </div>
      </div>
      </div>
      
  )
}

export default Footer