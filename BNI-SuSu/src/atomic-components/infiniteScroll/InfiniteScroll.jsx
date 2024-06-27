import React from "react";
import {logo1, logo2, logo3} from '../../assets/logos'
import './infitineScroll.css'


function InfiniteScroll() {
  return (
    <div className="wrapper">
      <div className="item item1">
        <img src={logo1} alt="logo" />
      </div>
      <div className="item item2">
        <img src={logo2} alt="logo" />
      </div>
      <div className="item item3">
        <img src={logo3} alt="logo" />
      </div>
      <div className="item item4">
        <img src={logo1} alt="logo" />
      </div>
      <div className="item item5">
        <img src={logo2} alt="logo" />
      </div>
      <div className="item item6">
        <img src={logo3} alt="logo" />
      </div>
      <div className="item item7">
        <img src={logo1} alt="logo" />
      </div>
      <div className="item item8">
        <img src={logo2} alt="logo" />
      </div>
    </div>
  );
}

export default InfiniteScroll;
