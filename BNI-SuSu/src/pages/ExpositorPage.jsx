import React from "react";
import { Header, Footer, Expositor } from "../containers";
import { Navbar } from "../atomic-components";

const ExpositorPage= () => {
  return (
    <>
    <div className="gradeint__bg">
      <Navbar />
      <Header />
    </div>
    <div className="solid_bg">
      <Expositor/>
      <div className="">
      <Footer/> 
      </div>
    </div>
    </>
  );
}

export default ExpositorPage