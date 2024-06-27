import React from "react";
import { Header, Footer, Expositor } from "../containers";
import { Navbar } from "../atomic-components";

const ExpositorPage= () => {
  return (
    <>
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    <div className="gradient_bg">
      <Expositor/>
      <Footer/> 
    </div>
    </>
  );
}

export default ExpositorPage